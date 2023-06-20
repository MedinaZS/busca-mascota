import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const Map = ({ zoom = 11, currentPosition, setCurrentPosition, click, clickReporte }: { click: boolean, zoom?: number, currentPosition?: any, setCurrentPosition?: any, clickReporte?: LatLngExpression }) => {

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
            <MapContainer center={[-25.3, -57.6]} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {clickReporte && <Marker position={clickReporte}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>}
                <LocationMarker></LocationMarker>
            </MapContainer>
        </div>
    )
}

export default Map