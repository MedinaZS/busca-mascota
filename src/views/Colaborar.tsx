import PageCard from '../components/PageCard'
import { SRC_FILES, URL_LINKS } from '../helper/utility'

const Colaborar = () => {
	return (
		<PageCard title={'Maneras de ayudar al proyecto'}>
			{/* Contribuir codigo */}
			<h3 className='my-3 display-inline-block border-3 border-bottom border-blue-subtle d-inline-block'>Contribuir con el código en <i className='bi bi-github'></i></h3>
			<p className='ms-lg-4'>Puedes colaborar a mejorar el sitio creando un merge request al <a target='_blank' href={URL_LINKS.REPOSITORIO_FRONTEND}>repositorio</a> con alguna característica nueva o puedes descargar el código y realizar otra implementación.</p>

			{/* Donaciones */}
			<h3 className='my-3 display-inline-block border-3 border-bottom border-blue-subtle d-inline-block'>Puedes donar para que el sitio siga activo <i className='bi bi-piggy-bank'></i></h3>
			<div className='ms-lg-4'>
				<p>Busca Mascota actualmente se encuentra alojado en Google Cloud con la tarjeta de crédito del autor de la web, esto tiene un costo mensual que depende de la cantidad de uso que tenga Busca Mascota.</p>
				<p>Si buscamos que este sitio siga activo y funcionando siempre puedes colaborar monetariamente para la causa, contribuyendo a que también el sitio se encuentre con constantes mejoras, actualizaciones, solución de problemas y soporte.</p>
				<p>La prioridad de estas donaciones será la siguiente:</p>
				<ol>
					<li>Pagar el alojamiento y la memoria en Google Cloud</li>
					<li>Pagar el dominio buscamascota.org</li>
					<li>Pagar el certificado SSL (candado de sitio seguro)</li>
					<li>Pagar actualizaciones, mantenimiento y publicidades de las publicaciones</li>
				</ol>


				<p className='fw-bold'>Medios para contribuir</p>
				<div className='d-block d-md-flex gap-3'>
					<div className="card card-payment mb-3 rounded-4 shadow">
					<div className='img-top border-bottom'>
							<img src={SRC_FILES.VISION_BANCO} className="card-img-top object-fit-cover rounded-top-4" alt='vision banco' />
						</div>
						<div className="card-body">
							<h5 className="card-title">Caja de Ahorro Vision Banco</h5>
							<p className='d-flex justify-content-between'>
								<span>Cuenta N°:</span>
								<span>4189747</span>
							</p>
							<p className='d-flex justify-content-between'>
								<span>Nombre:</span>
								<span>Oscar Gonzalez</span>
							</p>
							<p className='d-flex justify-content-between'>
								<span>CI:</span>
								<span>4648960</span>
							</p>
						</div>
					</div>
					<div className="card card-payment mb-3 rounded-4 shadow">
						<div className='img-top border-bottom p-4'>
							<img src={SRC_FILES.GIROS_CLARO} className="card-img-top object-fit-contain rounded-top-4" alt='Giros claro' />
						</div>
						<div className="card-body">
							<h5 className="card-title">Giros Claro</h5>
							<p className='d-flex justify-content-between'>
								<span>Número:</span>
								<span>0986747136 (Claro)</span>
							</p>
						</div>
					</div>
				</div>

			</div>
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