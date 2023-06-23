import { Link } from 'react-router-dom'
import { API_ROUTES, APP_ROUTES } from '../helper/utility'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PageCard from '../components/PageCard';
import { ResultAdopciones } from '../helper/types';
import Card from '../components/Card';
import Loading from '../components/Loading';


const ListaAdopciones = () => {

	const [listaAdopciones, setListaAdopciones] = useState<ResultAdopciones[] | null>(null)

	useEffect(() => {
		axios.get(API_ROUTES.REPORTE_ADOPCIONES)
			.then(response => {
				console.log(response.data)
				const data = response.data.results;

				console.log(response.data.results);
				setListaAdopciones(data)
			})
			.catch(error => console.log("Error", error))
	}, [])

	return (
		<PageCard title={'Lista de Adopciones'}>
			{listaAdopciones ?
				<>
					<div className='text-center mb-5'>
						<Link className='btn bg-blue-subtle rounded-pill fs-5' to={APP_ROUTES.PUBLICAR_ADOPCION}><i className='bi bi-plus'></i>Publicar adopcion </Link>
					</div>
					<div className="container-fluid">
						<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
							{listaAdopciones.map((adopcion: ResultAdopciones, index: number) => (
								<Card key={index} adopcion={adopcion}></Card>
							))}
						</div>
					</div>
				</>
				: <Loading />
			}
		</PageCard>
	)
}

export default ListaAdopciones