// CustomMap.js
import { TileLayer, Marker, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PlaneIcon from '/plane.svg'; // Replace with the path to your Uber-style marker icon

const FootPrintMap = () => {
  const center = [0, 0];
  const markerPosition = [5, 5]; // Example marker coordinates

  // Custom Uber-style marker icon
  const Icon = new L.Icon({
    iconUrl: PlaneIcon,
    iconSize: [32, 32], // Adjust the size as needed
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div id='map'>
      <MapContainer center={center} zoom={3} style={{ height: '100vh', width: '68vw' }}>
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition} icon={Icon}>
          {/* Add your Uber-style marker content here */}
          {/* You can also add a Popup for additional information */}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default FootPrintMap;
