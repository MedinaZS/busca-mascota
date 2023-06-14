import { Link } from "react-router-dom"
import { APP_ROUTES, SRC_FILES } from "../helper/utility"

const Footer = () => {
    return (
        <footer className="bg-dark py-5 pb-3 px-3" >
            <div className="row row-cols-1 row-cols-md-3 m-0 text-white text-center text-md-start">
                {/* Creado por */}
                <div className="col mb-3 mb-md-0">
                    <h5 className="footer-title mb-4">
                        <span>Sitio creado y administrado por</span>
                    </h5>

                    <img src={SRC_FILES.BOOTCAMPERS} className="img-fluid" style={{ maxHeight: 200 + 'px' }} />
                    <p className="mt-4">Bootcampers React</p>
                </div>

                {/* Sobre nosotros */}
                <div className="col mb-3 mb-md-0">
                    <h5 className="footer-title mb-4">
                        <span>Sobre Nosotros</span>
                    </h5>

                    <ul className="ps-0">
                        <li className="list-group-item mb-3">
                            <Link to={APP_ROUTES.TERMS} className="text-white">T&eacute;rminos de uso <i className="bi bi-book"></i></Link>
                        </li>
                        <li className="list-group-item mb-3">
                            <a className="text-white text-decoration-none" href="https://github.com/MedinaZS/busca-mascota" target="_blank"> C&oacute;digo fuente aqu&iacute; <i className="bi bi-github"></i></a>
                        </li>

                    </ul>
                </div>

                {/* Contactanos */}
                <div className="col mb-3 mb-md-0">
                    <h5 className="footer-title mb-4">
                        <span>Contáctanos</span>
                    </h5>

                    <div className="d-flex gap-3 gap-md-2 gap-lg-3 justify-content-center justify-content-md-start">
                        <a className="text-white rounded-circle fs-3 social-icons twitter d-inline-block d-flex align-items-center justify-content-center" href="https://twitter.com/BuscaMascotapy" target="_blank">
                            <i className="fab fa-fw fa-twitter"></i>
                        </a>
                        <a className="text-white rounded-circle fs-3 social-icons facebook d-inline-block d-flex align-items-center justify-content-center" href="https://facebook.com/Busca-Mascota-105650557977880" target="_blank">
                            <i className="fab fa-fw fa-facebook"></i>
                        </a>
                        <a className="text-white rounded-circle fs-3 social-icons instagram d-inline-block d-flex align-items-center justify-content-center" href="https://instagram.com/buscamascotapy/" target="_blank">
                            <i className="fab fa-fw fa-instagram"></i>
                        </a>
                        <a className="text-white rounded-circle fs-3 social-icons mail d-inline-block d-flex align-items-center justify-content-center" href="mailto:buscamascotapy@gmail.com" target="_blank">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="text-white"/>
            <p className="mb-0 text-center text-secondary">Copyright &copy; Busca Mascota</p>
            <p className="mb-0 text-center text-secondary">Pictures made by <a href="https://www.freepik.com">Freepik</a></p>
        </footer>
    )
}

export default Footer