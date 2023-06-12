import { Link } from 'react-router-dom'
import { APP_ROUTES, SRC_FILES } from '../../helper/utility'

const Section1 = () => {
    return (
        <div className='row p-3  border-top bg-blue-subtle'>

            <div className='col-lg-5 text-center' data-aos='zoom-out'>
                <img src={SRC_FILES.DOG_NO_BG} className="img-fluid bg-white rounded-circle" style={{ maxHeight: 600 + 'px' }} />
            </div>

            <div className='col-lg-7 text-center my-auto pt-4' data-aos='fade-left' data-aos-delay='300'>
                <h1 className='mb-3 mb-lg-5'>Busca Mascota</h1>
                <h4 className="mb-3 mb-lg-5">
                    Es una plataforma open-source, para que mascotas perdidas puedan reencontrarse con sus dueños.
                    Puedes publicar tu mascota sin costo! Y también será publicado en las redes oficiales de Busca Mascota automáticamente.
                </h4>
                <h3 className='d-grid d-sm-block'>
                    <Link className="btn bg-yellow btn-lg me-0 me-sm-3 mb-3 mb-sm-0 rounded-pill" to={APP_ROUTES.BUSCAR_MASCOTA}>
                        <i className='bi bi-search me-2'></i>
                        Buscar mi mascota
                    </Link>
                    <Link className="btn btn-outline-dark btn-lg rounded-pill" to={APP_ROUTES.PUBLICAR_MASCOTA}>
                        <i className='fa fa-paw me-2'></i>
                        Publicar mascota
                    </Link>
                </h3>
            </div>
        </div>
    )
}

export default Section1