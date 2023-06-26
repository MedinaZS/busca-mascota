import { Link } from 'react-router-dom'
import { API_ROUTES, APP_ROUTES } from '../helper/utility'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PageCard from '../components/PageCard';
import { ResultAdopciones } from '../helper/types';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Paginacion from '../components/Buscar/Paginacion';


const ListaAdopciones = () => {

	const [listaAdopciones, setListaAdopciones] = useState<ResultAdopciones[] | null>(null)
	const [loading, setLoading] = useState(false)

	const [nextPage, setNextPage] = useState<string>('');
	const [previousPage, setPreviousPage] = useState<string>('');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		cargarAdopciones(null)
		window.scrollTo(0,0);
	}, [])

	const cargarAdopciones = (url: string | null) => {
		const urlPost = url ? url : API_ROUTES.REPORTE_ADOPCIONES
		setLoading(true)
		axios.get(urlPost)
			.then(response => {
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

	return (
		<PageCard title={'Lista de Adopciones'}>
			{listaAdopciones && !loading ?
				<>
					<div className='text-center mb-5'>
						<Link className='btn bg-blue-subtle rounded-pill fs-5' to={APP_ROUTES.PUBLICAR_ADOPCION}><i className='bi bi-plus'></i>Publicar adopcion </Link>
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