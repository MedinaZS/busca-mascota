import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { API_ROUTES } from "../helper/utility.tsx";
import PageCard from "../components/PageCard.tsx";
import Loading from "../components/Loading.tsx";

interface ReportData {
	name: string;
	description: string;
	specie: string;
	age: number;
	sex: string;
	city: string;
	country: string;
	phone: string;
	picture: string;
}

const Detalle_Adopcion = () => {
	const [reportData, setReportData] = useState<ReportData | null>(null);
	const { id } = useParams<{ id: string }>();
	const cardRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const fetchReportData = async () => {
			try {
				const response = await fetch(`${API_ROUTES.DETALLE_ADOPCION}${id}`);
				const data = await response.json();
				console.log(data);
				setReportData(data);
			} catch (error) {
				console.error("Error fetching report data:", error);
			}
		};

		fetchReportData();

		window.scrollTo(0,0);
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
					link.download = "reporte.png";
					link.click();
				});
			}
		}
	};

	if (!reportData) {
		return <Loading></Loading>;
	}

	const {
		name,
		description,
		specie,
		age,
		sex,
		city,
		country,
		phone,
		picture,
	} = reportData;

	return (
		<PageCard title={`${specie == "otro" ? "ANIMAL " : specie.toUpperCase()} EN ADOPCIÓN`}>
			<div className="reportcont">
				{/* Imagen reporte */}
				<div
					aria-label="Reporte"
					className="cartaReporte mx-auto shadow-none"
					ref={cardRef}
				>
					{/* Header reporte */}
					<div className="headerContent">
						<div className="titleReport">
							<h3 className="fs-1 fw-bold">
								{specie == "otro" ? "ANIMAL " : specie.toUpperCase()} EN
								ADOPCIÓN
							</h3>
						</div>
						<div className="p-3 bg-white">
							<img
								src={`${API_ROUTES.JUST_IP}${picture}`}
								alt="imagen de mascota"
								className="imageReport"
								ref={imageRef}
							/>
						</div>
					</div>

					{/* Detalle */}
					<div className="bg-white p-4 fs-5 rounded-3 text-center">
						{/* Edad y sexo */}
						<p>
							<i className="fa fa-paw me-2"></i>
							{age && "Nombre : " + name + ". "}
							{age && "Edad aprox. : " + age + " años."} Sexo: {sex}.
						</p>

						{/* Descripcion */}
						<p>
							<i className="bi bi-file-earmark-text-fill me-2"></i>
							Descripción : {description}
						</p>

						{/* Resumen ubicacion */}
						<p>
							<i className="bi bi-geo-alt-fill me-2"></i>
							{city}, {country}
						</p>

						{/* Contacto */}
						{phone && (
							<p>
								<i className="bi bi-telephone-outbound-fill me-2"></i>
								Contactar al: {phone}
							</p>
						)}
					</div>
				</div>
				<div className="text-center w-100">
					<button
						className="btn btn-primary botonReporte"
						onClick={handleExportClick}
					>
						<i className="bi bi-download me-2"></i>Guardar como imagen
					</button>
				</div>
				<div className="text-center mt-3">
					<h5>
						Puedes compartir esta publicación{" "}
						<i className="fas fa-share text-success"></i>{" "}
					</h5>
					<div
						className="btn-group btn-group-lg mt-3 mb-3"
						role="group"
						aria-label="share"
					>
						<a
							className="btn btn-success"
							href={`https://wa.me/?text=${specie == "otro" ? "ANIMAL" : specie.toUpperCase()
								}+EN+ADOPCION%21+Echa+un+vistazo%21+${API_ROUTES.JUST_IP}%2Fdetalle-adopcion%2F${id}`}
							data-action="share/whatsapp/share"
							target="_blank"
						>
							<i className="fab fa-whatsapp text-white"></i>
						</a>
						<a
							className="btn btn-primary"
							href={`https://www.facebook.com/sharer/sharer.php?u=${API_ROUTES.JUST_IP}/detalle-adopcion/${id}`}
							target="_blank"
						>
							<i className="fab fa-facebook text-white"></i>
						</a>
						<a
							className="btn btn-info"
							href={`https://twitter.com/share?text=${specie == "otro" ? "ANIMAL" : specie.toUpperCase()
								}+EN+ADOPCION%21+Echa+un+vistazo%21+${API_ROUTES.JUST_IP}%2Fdetalle-adopcion%2F${id}&amp;hashtags=BuscaMascota`}
							target="_blank"
						>
							<i className="fab fa-twitter text-white"></i>
						</a>
					</div>
				</div>
			</div>
		</PageCard>
	);
};

export default Detalle_Adopcion;
