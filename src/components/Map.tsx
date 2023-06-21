import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, } from "react-leaflet";
import { APP_ROUTES } from "../helper/utility";
import { Link } from "react-router-dom";

interface Report {
    id: number,
    title: string,
    picture: string,
    country: string,
    city: string,
    latitude: number,
    longitude: number,
    specie: string,
    report_type: string
}

const Map = ({ zoom = 11, currentPosition, setCurrentPosition, click, listaReportes, reportDetailPosition }: { click: boolean, zoom?: number, currentPosition?: any, setCurrentPosition?: any, listaReportes?: Array<Report>, reportDetailPosition?: any }) => {
    const Ip = 'http://localhost:8000'
    function LocationMarker() {

        const map = useMapEvents({
            click(e) {
                if (click) {
                    setCurrentPosition(e.latlng)
                }
            }
        });

        // Si el mapa es clickeable
        if (click) {
            return currentPosition === null && click == true ? null : (
                <Marker position={currentPosition}>
                    <Popup>You are here</Popup>
                </Marker>
            )
        }

    }

    

    return (
        <div>
            <MapContainer center={reportDetailPosition ? [reportDetailPosition.lat, reportDetailPosition.lng] :[-25.3, -57.6]} zoom={zoom} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {reportDetailPosition &&
                    <Marker position={reportDetailPosition}>
                    </Marker>
                }


                {(listaReportes && listaReportes.length !== 0) && listaReportes.map((item, index) => (
                    <Marker key={index} position={[item.latitude, item.longitude]}>
                        <Popup >
                            <div id="popup" className="text-center">
                                <h2 className="fs-5 text-danger fw-bold">{item.specie.toUpperCase() + " " + item.report_type.toUpperCase()}</h2> <br />
                                <img src={Ip + item.picture} width={120} alt="foto de mascota" />
                                <p className="fs-6 fw-bold">{item.city && item.city + ','} {item.country && item.country}</p>
                                <p className="text-center" >
                                    <Link className="bg-blue-subtle btn text-dark small" to={APP_ROUTES.DETALLE_REPORTE + item.id}>Ver Reporte Completo</Link>
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <LocationMarker></LocationMarker>
            </MapContainer>
        </div>
    )
}

export default Map