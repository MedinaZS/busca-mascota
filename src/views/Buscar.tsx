import { useEffect, useState } from 'react'
import PageCard from '../components/PageCard'
import Map from '../components/Map';
import ListaReportes from '../components/Buscar/ListaReportes';
import axios from 'axios';
import { API_ROUTES } from '../helper/utility';



const Buscar = () => {
	
	interface Report {
		id?: number,
		title?: string,
		picture?: string,
		country?: string,
		city?: string,
		latitude?: number,
		longitude?: number,
	}

	const [isMapView, setIsMapView] = useState(true)
	const [listaReportes, setListaReportes] = useState<Report[]>([])

	useEffect(() => {
		axios.get(API_ROUTES.REPORTES_SIN_PAGINAR)
			.then(response => {
				const data = response.data.results;
				// console.log(response.data.results);
				setListaReportes(data)
			})
			.catch(error => console.log("Error", error))
	}, [])

	return (
		<PageCard title={'Buscar'}>
			<form className='pb-3 bg-blue-subtle'>
				<div className='row g-3 align-items-center justify-content-start justify-content-lg-center'>
					{/* Tipo de reporte */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor="tipoReporte" className='form-label fw-bold mb-0'>Tipo de reporte: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<select className="form-select" >
							<option value="todos">Todos</option>
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
						<input id='ultimoVistoInicio' type="date" className='form-control date-input' />
					</div>
					<div className='col-12 col-md-2 col-lg-auto text-start text-md-center'>
						<span className='fw-bold'>a</span>
					</div>
					<div className='col-12  col-md-5  col-lg-auto'>
						<input id='ultimoVistoFin' type="date" className='form-control date-input' />
					</div>

				</div>
				<div className='row g-3 align-items-center justify-content-center'>
					{/*Especie */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor="especie" className='form-label fw-bold mb-0'>Especie: </label>
					</div>

					<div className='col-12 col-lg-auto'>
						<select id="especie" className='form-select'>
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
						<input id='pais' type="text" className='form-control' />
					</div>

					{/* Ciudad */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor='ciudad' className='form-label fw-bold mb-0'>Ciudad: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<input id='ciudad' type="text" className='form-control' />
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

			<div id='buscarMap' className='mb-4'>
				{isMapView ? <Map listaReportes={listaReportes} zoom={8} click={false} /> : <ListaReportes />}
			</div>

		</PageCard>
	)
}

export default Buscar