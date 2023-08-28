import L from 'leaflet';
import markerIcon from '../assets/marker.svg';

const iconCustom = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconAnchor: undefined,
    popupAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: new L.Point(30, 45),
    className: ''
});

export { iconCustom };
