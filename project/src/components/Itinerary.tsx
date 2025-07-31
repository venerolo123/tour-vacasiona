import React from "react";
import {
  Clock,
  MapPin,
  Camera,
  Heart,
  Utensils,
  Moon,
  Sun,
  Mountain,
  Zap,
  Thermometer,
  Flag,
  Coffee,
} from "lucide-react";

const Itinerary = () => {
  const itineraryData = [
    {
      day: 1,
      title: "De Quito a la Aventura en Baños",
      activities: [
        {
          time: "08:00",
          title: "Salida desde Quito y Llegada",
          description:
            "Viaje desde Quito hacia Baños y bienvenida en el hotel.",
          location: "Hotel Central Baños",
          icon: Sun,
          image:
            "https://i.pinimg.com/1200x/61/0c/40/610c406b13fcc099c5e7461e5a241a08.jpg",
        },
        {
          time: "10:00",
          title: "Cascada Hola Vida",
          description: "Senderismo de 2 horas entre vistas naturales únicas.",
          location: "Vía Baños Runtun, Caserío Panticucho",
          icon: Heart,
          image:
            "https://img.goraymi.com/2018/05/04/0c82b460c80abbcf50017fe97c128675_xl.jpg",
        },
        {
          time: "12:30",
          title: "Coffee-break panorámico",
          description: "Relájate con café y paisajes en Animal Park Safari.",
          location: "Santa Rosa de Runtun",
          icon: Camera,
          image: "https://i.ytimg.com/vi/Iw61Ls0K0Fk/sddefault.jpg?v=615e7725",
        },
        {
          time: "13:30",
          title: "Lunch en La Giornata",
          description: "Sabores típicos en Crepería La Giornata.",
          location: "Ambato, Eloy Alfaro",
          icon: Utensils,
          image:
            "https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.503xw:1.00xh;0.234xw,0&resize=1200:*",
        },
        {
          time: "15:30",
          title: "Excursión al Pailón del Diablo",
          description:
            "Explora una de las cascadas más impresionantes por 3 horas.",
          location: "Vía a las Antenas",
          icon: MapPin,
          image:
            "https://i.pinimg.com/736x/55/c4/d5/55c4d5649e573b06431b7856712643d9.jpg",
        },
        {
          time: "18:30",
          title: "Spa y descanso",
          description: "Check-in en Hostería Ulba y relax en Spa Gamboa.",
          location: "Chamana, Palomino Flores",
          icon: Heart,
          image:
            "https://i.pinimg.com/736x/4d/63/74/4d6374fb1f7116b42250e3dc195342b0.jpg",
        },
        {
          time: "21:00",
          title: "Cena y vida nocturna",
          description: "Cena especial y cócteles en Leprechaun Bar.",
          location: "Eloy Alfaro, Baños",
          icon: Moon,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorvAf_MNTH8Ck7qlgPpP7NKrMoT5HHPch82QGaDdbos0WCQHJ",
        },
      ],
    },
    {
      day: 2,
      title: "Naturaleza, Cultura y Regreso",
      activities: [
        {
          time: "08:00",
          title: "Desayuno reconfortante",
          description:
            "Desayuno nutritivo en Hostería Ulba para comenzar el día.",
          location: "Hostería Ulba",
          icon: Utensils,
          image:
            "https://i.pinimg.com/1200x/c4/35/07/c435070c78417db0e635b93aa57d651c.jpg",
        },
        {
          time: "10:00",
          title: "Mirador Casa del Árbol",
          description: "Visita opcional al famoso columpio del fin del mundo.",
          location: "Calle Pastaza, Baños",
          icon: Camera,
          image:
            "https://geoparquevolcantungurahua.com/files/geoamigos/manosdedios1.jpg",
        },
        {
          time: "12:00",
          title: "Aventura extrema",
          description: "Actividades como canopy y puenting en Puntzan.",
          location: "San Antonio de Puntzan",
          icon: Heart,
          image:
            "https://www.civitatis.com/f/ecuador/banos-de-agua-santa/galeria/salto-puente-banos-agua-santa.jpg",
        },
        {
          time: "14:00",
          title: "Almuerzo en Restaurante Abaka",
          description: "Disfruta de una experiencia gastronómica local.",
          location: "Av. Amazonas, Chamana",
          icon: Utensils,
          image:
            "https://media-cdn.tripadvisor.com/media/photo-s/17/d3/25/c1/gallina-de-pinllo-bandeja.jpg",
        },
        {
          time: "16:00",
          title: "Tour de compras",
          description: "Recorre tiendas locales y compra recuerdos.",
          location: "Centro histórico de Baños",
          icon: MapPin,
          image:
            "https://www.metropolitan-touring.com/wp-content/uploads/2023/05/otavalo-market.webp",
        },
        {
          time: "17:30",
          title: "Regreso a Quito",
          description: "Vuelta a casa con recuerdos inolvidables.",
          location: "Salida desde Baños",
          icon: Moon,
          image:
            "https://st4.depositphotos.com/6054056/23589/v/600/depositphotos_235899152-stock-video-airplane-landing-quito-during-a.jpg",
        },
      ],
    },
  ];

  const funFacts = [
    {
      icon: Mountain,
      title: "Capital de Aventura",
      description:
        "Baños es conocida como la 'Capital Mundial de la Aventura' por sus deportes extremos",
    },
    {
      icon: Zap,
      title: "Energía Volcánica",
      description:
        "El Tungurahua (volcán activo) le da a Baños su energía y paisajes únicos",
    },
    {
      icon: Thermometer,
      title: "Clima Perfecto",
      description:
        "Temperatura promedio de 20°C todo el año - ¡eterna primavera!",
    },
    {
      icon: Flag,
      title: "Altura Privilegiada",
      description: "Se encuentra a 1,820 metros sobre el nivel del mar",
    },
    {
      icon: Coffee,
      title: "Café de Altura",
      description:
        "La zona produce algunos de los mejores cafés especiales del Ecuador",
    },
  ];

  return (
    <section id="itinerario" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Itinerario Detallado
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vive esta experiencia única desde Quito a Baños, fusionando
            aventura, naturaleza y cultura en cada paso del viaje.
          </p>
        </div>

        {/* Itinerario con días y actividades */}
        <div className="space-y-12">
          {itineraryData.map((day) => (
            <div key={day.day} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                  {day.day}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    Día {day.day}
                  </h3>
                  <p className="text-xl text-green-600 font-semibold">
                    {day.title}
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {day.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-6"
                  >
                    {activity.image && (
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full md:w-1/3 h-48 object-cover rounded-lg shadow-md"
                      />
                    )}
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-2">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <activity.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2 text-green-600 font-semibold">
                            <Clock className="w-4 h-4" />
                            <span>{activity.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{activity.location}</span>
                          </div>
                        </div>
                      </div>

                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Datos Curiosos */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-8">
            <span className="border-b-4 border-green-300 pb-2">
              Datos Curiosos
            </span>{" "}
            de Baños
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <fact.icon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-green-700 mb-2">
                  {fact.title}
                </h4>
                <p className="text-gray-600 text-sm">{fact.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>Baños de Agua Santa es un destino que siempre sorprende</p>
            <p className="mt-1">¡Cada visita descubre nuevos encantos!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
