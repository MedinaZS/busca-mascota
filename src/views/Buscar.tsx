import React, { useEffect, useState } from 'react'
import PageCard from '../components/PageCard'
import Map from '../components/Map';
import ListaReportes from '../components/Buscar/ListaReportes';
import { ResultReporte } from "../helper/types";
import axios from 'axios';
import { API_ROUTES } from "../helper/utility";
import Paginacion from '../components/Buscar/Paginacion';

const Buscar = () => {

	const [isMapView, setIsMapView] = useState(true)

	const [lista, setLista] = useState<ResultReporte[]>([]);
	const [nextPage, setNextPage] = useState(null);
	const [previousPage, setPreviousPage] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const [listaReportesSinPaginar, setListaReportesSinPaginar] = useState([])

	useEffect(() => {
		// Cargar lista de reportes sin paginar para marcadores de mapa
		cargarReportesMarcadores()

		// Cargar lista de reportes paginado
		cargarReportesPaginado(API_ROUTES.REPORTES + '?page=1');
	}, [])

	const cargarReportesMarcadores = () => {
		axios.get(API_ROUTES.REPORTES_SIN_PAGINAR)
			.then(response => {
				const data = response.data.results;
				// console.log(response.data.results);
				setListaReportesSinPaginar(data)
			})
			.catch(error => console.log("Error", error))
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = {
			report_type: event.target.type.value,
			date_from: event.target.ultimoVistoInicio.value,
			date_to: event.target.ultimoVistoFin.value,
			specie: event.target.specie.value,
			country: event.target.country.value,
			city: event.target.city.value,
		}

		//Cargar Lista de Reporte
		axios
			.post(API_ROUTES.REPORTES, data)
			.then(response => {
				setLista(response.data.results);
			}).catch((error) => console.error(error));
		//Cargar Marcadores
		axios
			.post(API_ROUTES.REPORTES_SIN_PAGINAR, data)
			.then(response => {
				setListaReportesSinPaginar(response.data.results);
			}).catch((error) => console.error('Error trae lista sin paginar filtrado ' + error));
	}

	const cargarReportesPaginado = (url: string | null) => {
		const urlPost = url ? url : API_ROUTES.REPORTES

		axios
			.post(urlPost)
			.then((response) => {
				// console.log(response.data)
				setLista(response.data.results);
				setNextPage(response.data.next);
				setPreviousPage(response.data.previous);
				setCurrentPage(response.data.page);
				setTotalPages(Math.ceil(response.data.count / 15));
			})
			.catch((error) => console.error(error));

	};

	const handleNextPage = () => {
		cargarReportesPaginado(nextPage);
	};

	const handlePreviousPage = () => {
		cargarReportesPaginado(previousPage);
	};


	const handlePageClick = (page: number | null) => {
		const url = `${API_ROUTES.REPORTES}?page=${page}`;
		cargarReportesPaginado(url);
	};


	return (
		<PageCard title={'Buscar'}>
			<form onSubmit={(event) => handleSubmit(event)} className='pb-3 bg-blue-subtle'>
				<div className='row g-3 align-items-center justify-content-start justify-content-lg-center'>
					{/* Tipo de reporte */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor="tipoReporte" className='form-label fw-bold mb-0'>Tipo de reporte: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<select name="type" className="form-select" >
							<option value="">Todos</option>
							<option value="perdido">Perdido</option>
							<option value="avistado">Avistado</option>
							<option value="retenido">Retenido</option>
							<option value="otro">Otro</option>
						</select>
					</div>

					{/* Ultima vez visto */}
					<div className='col-12 col-lg-auto'>
						<label className='form-label fw-bold mb-0'>Últ. vez visto: </label>
					</div>
					<div className='col-12 col-md-5 col-lg-auto'>
						<input id='ultimoVistoInicio' name='ultimoVistoInicio' type="date" className='form-control date-input' />
					</div>
					<div className='col-12 col-md-2 col-lg-auto text-start text-md-center'>
						<span className='fw-bold'>a</span>
					</div>
					<div className='col-12  col-md-5  col-lg-auto'>
						<input id='ultimoVistoFin' name='ultimoVistoFin' type="date" className='form-control date-input' />
					</div>

				</div>
				<div className='row g-3 align-items-center justify-content-center'>
					{/*Especie */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor="especie" className='form-label fw-bold mb-0'>Especie: </label>
					</div>

					<div className='col-12 col-lg-auto'>
						<select name="specie" id="especie" className='form-select'>
							<option value="perro">Perro</option>
							<option value="gato">Gato</option>
							<option value="otro">Otro</option>
						</select>
					</div>


					{/* Pais */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor='pais' className='form-label fw-bold mb-0'>Pais: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<input id='pais' name='country' type="text" className='form-control' />
					</div>

					{/* Ciudad */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor='ciudad' className='form-label fw-bold mb-0'>Ciudad: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<input id='ciudad' name='city' type="text" className='form-control' />
					</div>

					<div className='col-12 col-lg-auto text-center'>
						<button type='submit' className='btn btn-success'>Buscar</button>
					</div>
				</div>
			</form>

			{/* Change views */}
			<div className='text-center my-3'>
				<div className="btn-group" role="group" >
					<input type="checkbox" className="btn-check" id="btncheck1" checked={isMapView} onChange={() => { setIsMapView(true) }} />
					<label className="btn btn-outline-primary fs-4" htmlFor="btncheck1"><i className="fas fa-map-marked-alt"></i></label>

					<input type="checkbox" className="btn-check" id="btncheck2" checked={!isMapView} onChange={() => setIsMapView(false)} />
					<label className="btn btn-outline-primary fs-4" htmlFor="btncheck2"><i className="fas fa-list"></i></label>
				</div>
			</div>

			<div id='buscarMap'>
				{isMapView ?
					<Map listaReportesSinPaginar={listaReportesSinPaginar} zoom={8} click={false} /> :
					<>
						<ListaReportes reportes={lista} />
						<Paginacion handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} previousPage={previousPage} />
					</>
				}
			</div>

		</PageCard>
	)
}

export default Buscar