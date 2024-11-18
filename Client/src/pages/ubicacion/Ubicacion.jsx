import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Ubicacion.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
});

const Ubicacion = () => {
  const position = [3.361128267242496,  -76.51580024697533];
  const { lat, lng } = position;

  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Gimnasio+Smart+Fit+-+Bochalema/@3.3611124,-76.5183833,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a10056d8318d:0xa53ffd2e2744b7d9!8m2!3d3.361107!4d-76.515803!16s%2Fg%2F11vk4bp50v?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="ubicacion-container">
        <h2>
            Ubicación
            <span>.</span>
        </h2>
        <div className="map-container">
            <div className="map-right-container" >
                <div className="ubicacion-text-container" >
                    <h3>
                        <span>Nos encontramos ubicados en el barrio Bochalema<span className="resaltado">,</span> </span>
                        <span>en la ciudad de Cali<span className="resaltado">.</span></span>
                    </h3>
                    <h3>
                        <span>Nuestra dirección es<span className="resaltado">:</span></span>

                        <span>Cl<span className="resaltado">.</span> 48 <span className="resaltado">#</span>
                        104 - 10<span className="resaltado">,</span> Cali<span className="resaltado">, </span> 
                        Valle del Cauca<span className="resaltado">.</span></span>
                    </h3>
                    <h3>
                        <span><span className="resaltado">¡</span>Te esperamos<span className="resaltado">!</span></span>
                    </h3>
                </div>
                <p>
                    Visita nuestra ubicación en Google Maps
                </p>
                <button onClick={openInGoogleMaps}>Ver en Google Maps</button>
            </div>
            <MapContainer center={position} zoom={15} onClick={openInGoogleMaps}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} eventHandlers={{ click: openInGoogleMaps }}>
                <Popup>
                Ubicación seleccionada: <br /> {lat}, {lng}
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    </div>
  );
};

export default Ubicacion;
