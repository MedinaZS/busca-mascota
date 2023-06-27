
import {  SRC_FILES } from "../../helper/utility"
import { motion } from "framer-motion"

const Section3 = () => {
	return (
		<section className=" bg-yellow">
			<div className='row py-3'>
				<div className='col-lg-7 text-center my-auto'>
					<motion.h2 
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 4 / 1000, duration: 0.8 }}
					className='mb-5' >¿Quien puede utilizar el sitio?</motion.h2>
					<motion.h4
					
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 4 / 1000, duration: 0.8 }}
					className="px-5">
						<p className="mb-4" >Personas que han perdido su mascota y desean publicar un reporte o buscar su mascota.</p>
						<p className="mb-4" >Personas que han encontrado o avistado una mascota que parecía perdida y desean publicar un reporte.</p>
						<p className="mb-4" >Quienes quieran brindar a un animalito un hogar cálido.</p>
					</motion.h4>
				</div>
			
				<motion.div
				
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 8 / 1000, duration: 1.5 }}
			
				className='col-lg-5 d-flex align-items-center justify-content-center' >
					<img src={SRC_FILES.GIRL_DOG} className="img-fluid bg-white rounded-circle" style={{ maxHeight: 600 + 'px' }} />
				</motion.div>
			</div>
		</section>
	)
}

export default Section3