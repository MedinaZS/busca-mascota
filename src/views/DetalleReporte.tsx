import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import { Link, useParams } from "react-router-dom";
import { API_ROUTES } from "../helper/utility";
import Map from "../components/Map";
import PageCard from "../components/PageCard";



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
    latitude: number;
    longitude: number;
}

const DetalleReporte = () => {
    const [reportData, setReportData] = useState<ReportData | null>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const { id } = useParams<{ id: string }>();

    const handleGoogleMapsClick = () => {
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, "_blank");
    };
    useEffect(() => {
        const fetchReportData = async () => {
            try {
                const response = await fetch(`${API_ROUTES.GET_REPORT_BY_ID}${id}`);
                const data = await response.json();
                setReportData(data);
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
                    link.download = "reporte.png";
                    link.click();
                });
            }
        }
    };

    if (!reportData) {
        return <div>Loading...</div>;
    }

    const {
        id: report_id,
        report_type,
        specie,
        age,
        sex,
        last_time_seen,
        ubication_resume,
        name,
        phone,
        picture,
        latitude,
        longitude
    } = reportData;

    return (
        <PageCard title={'Detalle Reporte #' + report_id}>
            <div className="reportcont">
                <p> Reporte #{report_id},{" "}creado con éxito! El ID de su reporte es: {report_id}, guarde este identificador para futuras modificaciones o consultas.</p>

                {/* Imagen reporte */}
                <div aria-label="Reporte" className="cartaReporte mx-auto shadow" ref={cardRef}>
                    {/* Header reporte */}
                    <div className="headerContent">
                        <div className="titleReport">
                            <h3 className="fs-1 fw-bold">{specie.toUpperCase()} {report_type.toUpperCase()}</h3>
                        </div>
                        <div className="p-3 bg-white">
                            <img src={`${picture}`} alt="imagen de mascota" className="imageReport" ref={imageRef} />
                        </div>
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
                            Ult vez visto : {last_time_seen}
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
                </div>
                <div className="text-center mb-3 mt-3">
                    <button className="btn btn-primary botonReporte" onClick={handleExportClick}>
                        <i className="bi bi-download me-2"></i>Guardar como imagen
                    </button>
                </div>
                <h3 className="text-center">Ubicación</h3>
                <Map zoom={9} click={false} reportDetailPosition={{ lat: latitude, lng: longitude }} />
                <div className="text-center">
                    <button className="btn btn-primary btn-success text-white w-100" onClick={handleGoogleMapsClick}>
                        <i className="bi bi-geo-alt-fill me-2"></i>Abrir en Google Maps
                    </button>
                </div>
            </div>
        </PageCard>
    )
}

export default DetalleReporte