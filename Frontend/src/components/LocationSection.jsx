import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "20px",
  overflow: "hidden",
  border: "2px solid #A73589", // Rosado más sutil
};

const center = {
  lat: -33.5583376,
  lng: -70.5732483, 
};

const mapOptions = {
    styles: [
      {
        featureType: "poi", 
        stylers: [{ visibility: "off" }] // Oculta todos los puntos de interés
      },
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }] // Oculta negocios y restaurantes
      },
      {
        featureType: "poi.government",
        stylers: [{ visibility: "off" }] // Oculta edificios gubernamentales
      },
      {
        featureType: "poi.medical",
        stylers: [{ visibility: "off" }] // Oculta hospitales
      },
      {
        featureType: "poi.park",
        stylers: [{ visibility: "off" }] // Oculta parques
      },
      {
        featureType: "poi.place_of_worship",
        stylers: [{ visibility: "off" }] // Oculta iglesias y templos
      },
      {
        featureType: "poi.school",
        stylers: [{ visibility: "off" }] // Oculta escuelas
      },
      {
        featureType: "poi.sports_complex",
        stylers: [{ visibility: "off" }] // Oculta complejos deportivos
      },
      {
        featureType: "poi.attraction",
        stylers: [{ visibility: "off" }] // Oculta atracciones turísticas
      },
      {
        featureType: "transit.station",
        elementType: "labels.icon",
        stylers: [{ visibility: "on" }] // Muestra solo las estaciones de metro y transporte
      },
      {
        featureType: "transit.station.bus",
        stylers: [{ visibility: "off" }] // Opcional: oculta paradas de buses si no las necesitas
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#5a1e4a" }]
      },
      {
        featureType: "water",
        stylers: [{ color: "#000000" }]
      },
      {
        featureType: "landscape",
        stylers: [{ color: "#000000" }]
      }
    ],
    disableDefaultUI: true,
    zoomControl: true,
  };
  
  

export default function LocationSection() {
  return (
    <section className="text-center px-30 py-6 bg-[#020209] text-white">
      {/* Títulos */}
      <h3 className="text-lg md:text-xl text-[#d96bf7] font-poppins">Localízanos y</h3>
      <h2 className="text-4xl font-extrabold font-jost mt-2 mb-8">
        ENCUÉNTRANOS EN EL MAPA
      </h2>

      {/* Mapa */}
      <div className="flex justify-center">
        <LoadScript googleMapsApiKey="AIzaSyBHHRd4Xow71JucXdjl8yXdw5qtbdNKEWQ">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={17} options={mapOptions}>
            <Marker 
              position={center} 
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", 
                scaledSize: window.google ? new window.google.maps.Size(80, 80) : undefined

                
 // Aumenta el tamaño del pin
              }} 
            />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Botón */}
      <div className="mt-8">
      <a
  href="www.google.com/maps/place/San+Jorge+785,+8301451+La+Florida,+Región+Metropolitana/data=!4m2!3m1!1s0x9662d12a121f171f:0x658500ae2ee918a8?sa=X&ved=1t:242&ictx=111&cshid=1743641712810925"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 font-bold text-white border-2 border-[#d96bf7] rounded-xl 
  hover:bg-[#d96bf7] transition-all duration-300"
>
  LOCALÍZANOS
</a>

      </div>
    </section>
  );
}
