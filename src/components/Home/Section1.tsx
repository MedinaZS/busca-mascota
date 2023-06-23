import { Link } from 'react-router-dom'
import { APP_ROUTES, SRC_FILES } from '../../helper/utility'
import { motion } from 'framer-motion'

const Section1 = () => {
    return (
        <section className='border-top bg-blue-subtle'>
            <div className='row p-3  '>

                <motion.div className='col-lg-5 text-center d-flex align-items-center justify-content-center'
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img src={SRC_FILES.DOG_NO_BG} className="img-fluid bg-white rounded-circle" style={{ maxHeight: 600 + 'px' }} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: "30vw" }}
                    whileInView={{ opacity: 1, x: "0" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className='col-lg-7 text-center my-auto pt-4' >
                    <h1 className='mb-3 mb-lg-5'>Busca Mascota</h1>
                    <h4 className="mb-3 mb-lg-5">
                        Es una plataforma open-source, para que mascotas perdidas puedan reencontrarse con sus dueños.
                        Puedes publicar tu mascota sin costo! Y también será publicado en las redes oficiales de Busca Mascota automáticamente.
                    </h4>
                    <div className='botonesflex'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link className="btn bg-yellow btn-lg me-0 me-sm-3 mb-3 mb-sm-0 rounded-pill" to={APP_ROUTES.BUSCAR_MASCOTA}>
                                <i className='bi bi-search me-2'></i>
                                Buscar mi mascota
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link className="btn btn-outline-dark btn-lg rounded-pill" to={APP_ROUTES.PUBLICAR_MASCOTA}>
                                <i className='fa fa-paw me-2'></i>
                                Publicar mascota
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Section1