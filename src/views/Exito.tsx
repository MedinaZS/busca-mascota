import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Link, useParams } from "react-router-dom";
import { API_ROUTES, APP_ROUTES, showFormattedDate } from '../helper/utility';
import { delay, motion } from "framer-motion";
import PageCard from "../components/PageCard";
import Loading from "../components/Loading";
import axios from "axios";



interface ReportData {
  	id: number;
	title: string;
	specie: string;
	report_type: string;
	age: number;
	sex: string;
	last_time_seen: string;
	ubication_resume: string;
	name: string;
	phone: string;
	picture: string;
    is_tweeted: boolean;
}

const maindiv = {
	hidden: {
		x: "-100vw",
	},
	visible: {
		x: "0",
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.3,
		},
	},
}

export const Exito = () => {
	const [reportData, setReportData] = useState<ReportData | null>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const { id } = useParams<{ id: string }>();


  const twit = (idReporte: string|undefined) => {
    
    console.log("Twiteo en el backend", idReporte)
    // generamos imagen
    if (imageRef.current) {
      if (cardRef.current && imageRef.current.complete) {
        html2canvas(cardRef.current, {
          allowTaint: true,
          useCORS: true,
        }).then(async (canvas) => {
          let base64Image = canvas.toDataURL(("image/png"))
          //post al backend
          try {
            const response = await axios.post(`${API_ROUTES.REPORT_SUCCESS}`, {
              id: idReporte,
              image: base64Image,
            });
          } catch (error) {
            console.error('Error al enviar la imagen al backend:', error);
          }
        });
      }
    }
  }

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await fetch(`${API_ROUTES.GET_REPORT_BY_ID}${id}`);
        const data = await response.json();
        setReportData(data);
        if(!data.is_tweeted) {
          // tuitear
          setTimeout(() => {
            twit(id)
          }, 3000);
        }
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

		fetchReportData();
	}, [id]);

	const handleExportClick = () => {

		if (imageRef.current) {
			if (cardRef.current && imageRef.current.complete) {
				html2canvas(cardRef.current, {
					allowTaint: true,
					useCORS: true,
				}).then((canvas) => {
					const link = document.createElement("a");
					link.href = canvas.toDataURL();
					link.download = `reporte_${report_id}.png`;
					link.click();
				});
			}
		}
	};

	if (!reportData) {
		return <Loading></Loading>;
	}


	const {
		id: report_id,
		report_type,
		title,
		specie,
		age,
		sex,
		last_time_seen,
		ubication_resume,
		name,
		phone,
		picture,
	} = reportData;

	return (
		<motion.div
			variants={maindiv}
			initial="hidden"
			animate="visible"
			transition={{
				duration: 0.38,

				when: "afterChildren",
				staggerChildren: 1,
			}}>

			<PageCard title={`Reporte # ${report_id} creado con éxito!`} >

				<div className="reportcont">
					<p className="reportmessagge">El ID de su reporte es: {report_id}, guarde este identificador para futuras modificaciones o consultas.</p>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 0.5 }}
						aria-label="Reporte" className="cartaReporte " ref={cardRef}>

						<div className="headerContent">
							<div className="titleReport">
								<h3 className="fs-1 fw-bold">{specie.toUpperCase() === 'OTRO' ? 'ANIMAL' : specie.toUpperCase()} {report_type.toUpperCase()}</h3>
							</div>
							<img src={`${picture}`} alt="imagen de mascota" className="imageReport" ref={imageRef} />
						</div>

						{/* Detalle */}
						<div className="bg-white p-4 fs-5 rounded-3 text-center">
							{/* Edad y sexo */}
							<p>
								<i className="fa fa-paw me-2"></i>
								{age && 'Edad aprox. : ' + age + '.'} Sexo: {sex}
							</p>

							{/* Ultima vez visto */}
							<p>
								<i className="bi bi-calendar3 me-2"></i>
								Ult vez visto : {showFormattedDate(last_time_seen)}
							</p>

							{/* Resumen ubicacion */}
							<p>
								<i className="bi bi-geo-alt-fill me-2"></i>
								{ubication_resume}
							</p>

							{/* Contacto */}
							{(phone) &&
								<p>
									<i className="bi bi-telephone-outbound-fill me-2"></i>
									Contactar {name && 'a: ' + name} {phone && 'al: ' + phone}
								</p>}

						</div>

					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 1.2 }}>
						<button className="pushable" onClick={handleExportClick}>
							<span className="shadowButton"></span>
							<span className="edge"></span>
							<span className="front">
								<i className="bi bi-download me-2"></i>
								Guardar como Imagen
							</span>
						</button>
					</motion.div>


					<span>La información proporcionada fue publicada en este sitio web, puede ver el reporte completo <Link to={APP_ROUTES.DETALLE_REPORTE + report_id}>aqui</Link>, también fue publicada en las distintas redes sociales de la página.</span>

				</div>
			</PageCard>
		</motion.div>
	);
};
