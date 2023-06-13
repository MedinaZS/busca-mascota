import { Link } from "react-router-dom"
import { APP_ROUTES } from "../../helper/utility"

const Section2 = () => {
	const delay = 300

	const services = [
		{
			delay: delay,
			title: 'Publicar una mascota',
			icon: 'fas fa-paw',
			description: 'Haz una publicación de una mascota, ya sea encontrada o perdida',
			url: APP_ROUTES.PUBLICAR_MASCOTA
		},
		{
			delay: delay * 2,
			title: 'Buscar una mascota',
			icon: 'fas fa-search',
			description: 'Puedes realizar una busqueda filtrada de mascotas, podrías encontrar la tuya o ayuda a alguien a reencontrarse con su mejor amigo',
			url: APP_ROUTES.BUSCAR_MASCOTA
		},
		{
			delay: delay * 3,
			title: 'Colaborá con nosotros',
			icon: 'fas fa-hands-holding',
			description: 'Puedes colaborar para que este sitio siga activo y funcionando siempre',
			url: APP_ROUTES.COLABORAR
		},
		{
			delay: delay * 4,
			title: 'Adoptá, no compres.',
			icon: 'fas fa-hand-holding-heart',
			description: 'Hay miles de animalitos esperando un hogar. Coming soon...',
			url: APP_ROUTES.ADOPCIONES
		},
	]

	return (
		<section className="p-3">
			<div className='p-3'>
				<h2 className='my-5 text-center' data-aos='fade-up'>¿Que puedes realizar?</h2>
				<div className='row row-cols-1 row-cols-md-2 row-cols-xl-4'>
					{services.map((service, index) => (
						<div key={index} className='col mb-3 d-flex justify-content-center align-items-center' data-aos='fade-up' data-aos-delay={service.delay}>
							<div className="card-container w-100 mx-3">
								<div className='card h-100 rounded-5'>
									<div className="card-body h-100 flip-front d-flex flex-column align-items-center justify-content-center">
										<div className='text-center'>
											<h3 className="card-title fw-bold mb-4">{service.title}</h3>
											<p className='m-0'><i className={service.icon + ' fs-1'}></i></p>
										</div>
									</div>
									<div className="card-body h-100 flip-back">
										<div className='text-center d-flex flex-column h-100'>
											<p className='my-auto text-center'>{service.description}</p>
											<Link className="btn bg-blue-subtle fw-bold w-25 mx-auto mt-3" to={service.url}>Ir</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Section2