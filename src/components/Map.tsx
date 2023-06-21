import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const Map = ({ zoom = 11, currentPosition, setCurrentPosition, click }: { click: boolean, zoom?: number, currentPosition?: any, setCurrentPosition?: any }) => {

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
            <MapContainer center={[-25.3, -57.6]} zoom={zoom} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[-25.2966745, -57.6806625]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                <LocationMarker></LocationMarker>
            </MapContainer>
        </div>
    )
}

export default Map