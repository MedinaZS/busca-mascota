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

	const [nextPage, setNextPage] = useState(null);
	const [previousPage, setPreviousPage] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		cargarAdopciones(null)
	}, [])

	const cargarAdopciones = (url: string | null) => {
		const urlPost = url ? url : API_ROUTES.REPORTE_ADOPCIONES

		axios.get(API_ROUTES.REPORTE_ADOPCIONES)
			.then(response => {
				console.log(response.data)
				const data = response.data.results;

				console.log(response.data.results);
				setListaAdopciones(data)
				setNextPage(data.next);
				setPreviousPage(data.previous);
				setCurrentPage(data.currentPage);
				setTotalPages(data.totalPages);
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
		const url = `${API_ROUTES.REPORTES}?page=${page}`;
		cargarAdopciones(url);
	};

	return (
		<PageCard title={'Lista de Adopciones'}>
			{listaAdopciones ?
				<>
					<div className='text-center mb-5'>
						<Link className='btn bg-blue-subtle rounded-pill fs-5' to={APP_ROUTES.PUBLICAR_ADOPCION}><i className='bi bi-plus'></i>Publicar adopcion </Link>
					</div>

					<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
						{listaAdopciones.map((adopcion: ResultAdopciones, index: number) => (
							<Card key={index} adopcion={adopcion}></Card>
						))}
					</div>
				</>
				: <Loading />
			}
			{/* Render pagination buttons */}
			<div>
<p>kjh</p>
				{Array.from({ length: totalPages + 1 }, (_, index) => (
					<button
						key={index + 1}
						onClick={() => handlePageClick(index + 1)}
						disabled={currentPage === index + 1}
					>
						{index + 1}
					</button>
				))}

			</div>
			<Paginacion handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick} currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} previousPage={previousPage} />
		</PageCard>
	)
}

export default ListaAdopciones