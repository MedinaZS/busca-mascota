import React, { useEffect, useState } from 'react'
import PageCard from '../components/PageCard'
import Map from '../components/Map';
import ListaReportes from '../components/Buscar/ListaReportes';
import { ResultReporte } from "../helper/types";
import axios from 'axios';
import { API_ROUTES } from "../helper/utility";
import Paginacion from '../components/Buscar/Paginacion';
import Loading from '../components/Loading';
import LoadingSpinner from '../components/LoadingSpinner';

const Buscar = () => {

	const [isMapView, setIsMapView] = useState(true)
	const [loading, setLoading] = useState(false)

	const [lista, setLista] = useState<ResultReporte[]>([]);
	const [nextPage, setNextPage] = useState(null);
	const [previousPage, setPreviousPage] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const [listaReportesSinPaginar, setListaReportesSinPaginar] = useState([])

	const [filtros, setFiltros] = useState({
		report_type: '',
		date_from: '',
		date_to: '',
		specie: '',
		country: '',
		city: '',
	})

	useEffect(() => {
		// Cargar lista de reportes sin paginar para marcadores de mapa
		cargarReportesMarcadores()

		// Cargar lista de reportes paginado
		cargarReportesPaginado(null);
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

		setLoading(true)

		const data = filtros

		//Cargar Lista de Reporte
		cargarReportesPaginado(null)
		
		//Cargar Marcadores
		axios
			.post(API_ROUTES.REPORTES_SIN_PAGINAR, data)
			.then(response => {
				setListaReportesSinPaginar(response.data.results);
			}).catch((error) => console.error('Error trae lista sin paginar filtrado ' + error));
	}

	const cargarReportesPaginado = (url: string | null) => {
		const urlPost = url ? url : API_ROUTES.REPORTES
		setLoading(true)

		const data = filtros

		axios
			.post(urlPost, data)
			.then((response) => {
				// console.log(response.data)
				setLista(response.data.results);
				setNextPage(response.data.next);
				setPreviousPage(response.data.previous);
				setCurrentPage(response.data.currentPage);
				setTotalPages(Math.ceil(response.data.count / response.data.pageSize));
				setLoading(false)
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

	const handleChange = (event) => {
		const { id, value } = event.target
		setFiltros({ ...filtros, [id]: value })
	}


	return (
		<PageCard title={'Buscar'}>
			<form onSubmit={(event) => handleSubmit(event)} className='pb-3 bg-blue-subtle'>
				<div className='row g-3 align-items-center justify-content-start justify-content-lg-center'>
					{/* Tipo de reporte */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor="tipoReporte" className='form-label fw-bold mb-0'>Tipo de reporte: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<select id="report_type" className="form-select" onChange={handleChange}>
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
						<input id='date_from' type="date" className='form-control date-input' onChange={handleChange} />
					</div>
					<div className='col-12 col-md-2 col-lg-auto text-start text-md-center'>
						<span className='fw-bold'>a</span>
					</div>
					<div className='col-12  col-md-5  col-lg-auto'>
						<input id='date_to' type="date" className='form-control date-input' onChange={handleChange} />
					</div>

				</div>
				<div className='row g-3 align-items-center justify-content-center'>
					{/*Especie */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor="especie" className='form-label fw-bold mb-0'>Especie: </label>
					</div>

					<div className='col-12 col-lg-auto'>
						<select id="specie" className='form-select' onChange={handleChange}>
							<option value="">Todos</option>
							<option value="perro">Perro</option>
							<option value="gato">Gato</option>
							<option value="otro">Otro</option>
						</select>
					</div>


					{/* Pais */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor='country' className='form-label fw-bold mb-0'>Pais: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<input id='country' type="text" className='form-control' onChange={handleChange} />
					</div>

					{/* Ciudad */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor='city' className='form-label fw-bold mb-0'>Ciudad: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<input id='city' type="text" className='form-control' onChange={handleChange} />
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

			{loading && <LoadingSpinner />}

			<div id='buscarMap'>

				{(isMapView && !loading) && <Map listaReportesSinPaginar={listaReportesSinPaginar} zoom={8} click={false} />}

				{(!isMapView && !loading) && <ListaReportes reportes={lista} />}

				{!isMapView && <Paginacion handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} previousPage={previousPage} />}

				{/* {(isMapView && !loading)
					? <Map listaReportesSinPaginar={listaReportesSinPaginar} zoom={8} click={false} />
					: (!loading &&
						<>
							<ListaReportes reportes={lista} />
						</>)
				}
				{!isMapView && <Paginacion handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} previousPage={previousPage} />} */}
			</div>

		</PageCard>
	)
}

export default Buscar