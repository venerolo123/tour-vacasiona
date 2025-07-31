import React, { useEffect, useRef } from "react";
import { MapPin, Info } from "lucide-react";
import "leaflet/dist/leaflet.css";

const InteractiveMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const locations = [
    {
      name: "Centro de Baños",
      lat: -1.397687,
      lng: -78.420938,
      description: "Centro histórico y punto de partida",
      type: "center",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3A3HDe-cuDiKY3Ouj5smry0b1rl31TxdPCkngSfk6w6sVDiik7CQoI1ijySNTg-k4uc&usqp=CAU",
    },
    {
      name: "Cascada del Pailón del Diablo",
      lat: -1.4167,
      lng: -78.3833,
      description: "Cascada más famosa e impresionante",
      type: "waterfall",
      image:
        "https://i.pinimg.com/1200x/96/5e/a5/965ea5cd261a36969128d301a27891dd.jpg",
    },
    {
      name: "Restaurante Abaka",
      lat: -1.397,
      lng: -78.425,
      description: "Mejor Restaurante de Baños",
      type: "restaurant",
      image:
        "https://tb-static.uber.com/prod/image-proc/processed_images/65697562dde7cccb34428e24295c3c6a/b4facf495c22df52f3ca635379ebe613.jpeg",
    },
    {
      name: "Hosteria Ulba",
      lat: -1.397438,
      lng: -78.398688,
      description: "Alojamiento, Hostería 4 estrellas",
      type: "hotel",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9a/d7/47/hosteria-ulba.jpg?w=900&h=500&s=1",
    },
    {
      name: "Animal Park Safari",
      lat: -1.409187,
      lng: -78.415813,
      description: "Parque temático naturalmente divertido",
      type: "adventure",
      image: "https://animalpark.ec/wp-content/uploads/2024/01/descarga.jpeg",
    },
    {
      name: "Crepería La Giornata",
      lat: -1.397562,
      lng: -78.422188,
      description: "Con encantadores sabores",
      type: "restaurant",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCiXYh4XKlIS-4-Xy8M4vemGhxomzaDy6aA&s",
    },
    {
      name: "Cascada Hola Vida",
      lat: -1.628687,
      lng: -77.901438,
      description: "Reserva ecológica con senderos y vistas espectaculares",
      type: "waterfall",
      image: "https://amazoniaexplorer.com/wp-content/uploads/2022/08/hv1.jpg",
    },
    {
      name: "Hotel y Spa Gamboa",
      lat: -1.393813,
      lng: -78.420063,
      description: "Spa con aguas termales y hospedaje",
      type: "hotel",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/29/db/d9/hotel-y-spa-gamboa-en.jpg?w=900&h=500&s=1",
    },
    {
      name: "Leprechaun Club & Bar",
      lat: -1.396562,
      lng: -78.426812,
      description: "Cocteles de autor, música en vivo y ambiente festivo",
      type: "bar",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/fd/6b/4d/parte-principal-de-leprechaun.jpg?w=900&h=500&s=1",
    },
  ];

  useEffect(() => {
    const initMap = async () => {
      if (
        typeof window !== "undefined" &&
        mapRef.current &&
        !mapInstanceRef.current
      ) {
        const L = (await import("leaflet")).default;

        // 🔧 CORRECCIÓN DE ÍCONOS POR DEFECTO
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
          shadowUrl:
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
        });

        mapInstanceRef.current = L.map(mapRef.current).setView(
          [-1.3928, -78.4269],
          13
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mapInstanceRef.current);

        locations.forEach((location) => {
          const marker = L.marker([location.lat, location.lng]).addTo(
            mapInstanceRef.current
          );

          marker.bindPopup(
            `<div style="max-width:240px">
              ${
                location.image
                  ? `<img src="${location.image}" alt="${location.name}" style="width:100%; border-radius:8px; margin-bottom:8px;" />`
                  : ""
              }
              <h3 style="font-size:1rem; font-weight:bold; color:#333;">${
                location.name
              }</h3>
              <p style="font-size:0.875rem; color:#666;">${
                location.description
              }</p>
            </div>`
          );
        });
      }
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const getIconColor = (type) => {
    switch (type) {
      case "center":
        return "text-blue-600";
      case "waterfall":
        return "text-blue-400";
      case "adventure":
        return "text-red-600";
      case "hotel":
        return "text-orange-600";
      case "restaurant":
        return "text-green-600";
      case "bar":
        return "text-pink-600";
      default:
        return "text-gray-600";
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case "center":
        return "Centro";
      case "waterfall":
        return "Cascada";
      case "adventure":
        return "Aventura";
      case "hotel":
        return "Hospedaje";
      case "restaurant":
        return "Restaurante";
      case "bar":
        return "Bar";
      default:
        return "Lugar";
    }
  };

  return (
    <section id="mapa" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Mapa Interactivo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora todas las ubicaciones que visitarás durante tu aventura en
            Baños de Agua Santa. Haz clic en los marcadores para ver imágenes y
            detalles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div
                ref={mapRef}
                className="w-full h-96 lg:h-[600px]"
                style={{ minHeight: "400px" }}
              />
            </div>
          </div>

          <div className="space-y-6 font-['Inter']">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-6">
                <Info className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">
                  Lugares de Interés
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 max-h-[550px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <MapPin
                      className={`w-5 h-5 mt-0.5 ${getIconColor(
                        location.type
                      )}`}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {location.name}
                      </h4>
                      <p className="text-xs text-gray-600 mb-1">
                        {location.description}
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${getIconColor(
                          location.type
                        )}`}
                      >
                        {getTypeLabel(location.type)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Información Útil
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Altitud: 1,820 metros sobre el nivel del mar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Clima: Templado subtropical</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Temperatura promedio: 18-24°C</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Mejor época: Todo el año</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Moneda: Dólar estadounidense (USD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Distancia desde Quito: 180 km (3 horas)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;

