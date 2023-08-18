import { useEffect } from 'react';
import PageCard from '../components/PageCard'
import { URL_LINKS } from '../helper/utility'

const Colaborar = () => {

	useEffect(() => {
		window.scrollTo(0,0);
	}, [])
	
	return (
		<PageCard title={'Maneras de ayudar al proyecto'}>
			{/* Contribuir codigo */}
			<h3 className='my-3 display-inline-block border-3 border-bottom border-blue-subtle d-inline-block'>Contribuir con el código en <i className='bi bi-github'></i></h3>
			<p className='ms-lg-4'>Puedes colaborar a mejorar el sitio creando un merge request al <a target='_blank' href={URL_LINKS.REPOSITORIO_FRONTEND}>repositorio</a> con alguna característica nueva o puedes descargar el código y realizar otra implementación.</p>

			{/* Compartiendo la página */}
			<h3 className='my-3 display-inline-block border-3 border-bottom border-blue-subtle d-inline-block'>Compartiendo la página <i className='bi bi-megaphone'></i></h3>
			<div className='ms-lg-4'>
				<p>Puedes colaborar dando a conocer la página con familiares, amigos, conocidos o en las redes sociales! Dando a conocer una comunidad que se compromete con esta causa.</p>
				<p>Mientras más personas conozcan Busca Mascota, más mascotras podrán reencontrarse con sus dueños!</p>
			</div>
		</PageCard>
	)
}


export default Colaborar