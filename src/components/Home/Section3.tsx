import { Link } from "react-router-dom"
import { APP_ROUTES, SRC_FILES } from "../../helper/utility"

const Section3 = () => {
	return (
		<div className='row py-3 bg-yellow'>


			<div className='col-lg-7 text-center my-auto'>
				<h2 className='mb-5' data-aos='fade-right'>¿Quien puede utilizar el sitio?</h2>
				<h4 className="px-5">
					<p className="mb-4" data-aos='fade-up-right' data-aos-delay= '300'>Personas que han perdido su mascota y desean publicar un reporte o buscar su mascota.</p>
					<p className="mb-4" data-aos='fade-up-right' data-aos-delay= '600'>Personas que han encontrado o avistado una mascota que parecía perdida y desean publicar un reporte.</p>
					<p className="mb-4" data-aos='fade-up-right' data-aos-delay= '900'>Coming soon : Quienes quieran brindar a un animalito un hogar cálido.</p>
				</h4>
			</div>

			<div className='col-lg-5 text-center' data-aos='fade-left'>
				<img src={SRC_FILES.GIRL_DOG} className="img-fluid bg-white rounded-circle" style={{ maxHeight: 600 + 'px' }} />
			</div>

		</div>
	)
}

export default Section3