import { Link } from 'react-router-dom'
import { API_ROUTES, APP_ROUTES } from '../helper/utility'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PageCard from '../components/PageCard';
import { ResultAdopciones } from '../helper/types';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Paginacion from '../components/Buscar/Paginacion';
import Swal from 'sweetalert2';


const ListaAdopciones = () => {

	const [listaAdopciones, setListaAdopciones] = useState<ResultAdopciones[] | null>(null)
	const [loading, setLoading] = useState(false)

	const [nextPage, setNextPage] = useState<string>('');
	const [previousPage, setPreviousPage] = useState<string>('');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const [listStates, setlistStates] = useState<IState[] | null>(null)
	const [listCities, setlistCities] = useState<ICity[] | null>(null)


	const [filtros, setFiltros] = useState({
		sex: '',
		specie: '',
		country: 'Paraguay',
		city: '',
		state: ''
	})

	useEffect(() => {
		cargarAdopciones(null)
		window.scrollTo(0, 0);

		getDepartamentos()

	}, [])

	// Al elegir un departamento buscar las ciudades del departamento
	useEffect(() => {
		getCiudades()
	}, [filtros.state])

	const getDepartamentos = () => {
		Swal.fire({
			text: 'Obteniendo departamentos',
			allowEscapeKey: false,
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			}
		})

		axios.get("https://api-geo.proyectosbeta.net/api/v1/departamentos")
			.then(response => {
				// console.log(response.data.data)
				setlistStates(response.data.data)
				Swal.close()
			})
	}

	const getCiudades = () => {
		// Obtener ciudades
		if (filtros.state !== "") {
			Swal.fire({
				text: 'Obteniendo ciudades',
				allowEscapeKey: false,
				allowOutsideClick: false,
				didOpen: () => {
					Swal.showLoading();
				}
			})

			const departamento_id = listStates?.filter(item => item.departamento_nombre == filtros.state)[0].departamento_id

			axios.get("https://api-geo.proyectosbeta.net/api/v1/departamentos/" + departamento_id)
				.then(response => {
					// console.log(response.data.data)
					setlistCities(response.data.data)
					Swal.close()
				})
		}
	}


	const cargarAdopciones = (url: string | null) => {
		const urlPost = url ? url : API_ROUTES.REPORTE_ADOPCIONES
		setLoading(true)

		const data = filtros

		axios.post(urlPost, data)
			.then(response => {
				console.log(response)
				const data = response.data;
				setListaAdopciones(data.results)
				setNextPage(data.next);
				setPreviousPage(data.previous);
				setCurrentPage(data.currentPage);
				setTotalPages(Math.ceil(response.data.count / response.data.pageSize));
				setLoading(false)
			})
			.catch(error => console.log("Error", error))
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		setLoading(true)

		//Cargar Lista de Adopciones con filtros
		cargarAdopciones(null)
	}

	const handleNextPage = () => {
		cargarAdopciones(nextPage);
	};

	const handlePreviousPage = () => {
		cargarAdopciones(previousPage);
	};

	const handlePageClick = (page: number | null) => {
		const url = `${API_ROUTES.REPORTE_ADOPCIONES}?page=${page}`;
		cargarAdopciones(url);
	};


	const handleChange = (event: { target: { id: any; value: any; }; }) => {
		const { id, value } = event.target
		setFiltros({ ...filtros, [id]: value })
	}



	return (
		<PageCard title={'Lista de Adopciones'}>
			<form onSubmit={handleSubmit} className='pb-3 bg-blue-subtle'>
				<div className='row g-3 align-items-center justify-content-start justify-content-lg-center'>
					{/* Sexo */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor="sexo" className='form-label fw-bold mb-0'>Sexo: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<select id="sex" className="form-select" onChange={handleChange} defaultValue={""}>
							<option value="" >Todos</option>
							<option value="macho">Macho</option>
							<option value="hembra">Hembra</option>
							<option value="desconocido">Desconocido</option>
						</select>
					</div>
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
						<select value={filtros.country} id="country" className='form-select' onChange={handleChange} >
							<option value="Paraguay">Paraguay</option>
						</select>
					</div>

					{/* Departamento */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor='city' className='form-label fw-bold mb-0'>Departamento: </label>
					</div>
					<div className='col-12 col-lg-auto'>
						<select value={filtros.state} id="state" className='form-select' onChange={handleChange} disabled={listStates ? false : true}>
							<option value="">Seleccione...</option>
							{listStates && listStates.map((item, index) => (
								<option key={index} value={item.departamento_nombre} >{item.departamento_nombre}</option>
							))}
						</select>
					</div>

					{/* Ciudad */}
					<div className='col-12 col-lg-auto'>
						<label htmlFor='city' className='form-label fw-bold mb-0'>Ciudad: </label>
					</div>
					<div className='col-12 col-lg-auto'>
					<select value={filtros.city} id="city" className='form-select' onChange={handleChange} disabled={listCities ? false : true}>
							<option value="">Seleccione...</option>
							{listCities && listCities.map((item, index) => (
								<option key={index} value={item.ciudad_nombre} >{item.ciudad_nombre}</option>
							))}
						</select>
					</div>

					<div className='col-12 col-lg-auto text-center'>
						<button type='submit' className='btn btn-success'>Buscar</button>
					</div>
				</div>
				{/* <div className='row g-3 align-items-center justify-content-center'>
					Especie
					
				</div> */}
			</form>
			{listaAdopciones && !loading ?
				<>
					<div className='text-center mb-4 mt-3'>
						<Link className='btn bg-blue-subtle rounded-pill fs-5' to={APP_ROUTES.PUBLICAR_ADOPCION}><i className='bi bi-plus'></i>Solicitud de adopción</Link>
					</div>

					<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 '>
						{listaAdopciones.map((adopcion: ResultAdopciones, index: number) => (
							<Card key={index} adopcion={adopcion}></Card>
						))}
					</div>
				</>
				: <Loading />
			}

			<Paginacion handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} previousPage={previousPage} />
		</PageCard>
	)
}

export default ListaAdopciones