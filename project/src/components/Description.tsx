import React from "react";
import {
  Mountain,
  Droplets,
  Heart,
  Camera,
  TreePine,
  MapPin,
} from "lucide-react";

const Description = () => {
  const highlights = [
    {
      icon: Mountain,
      title: "Aventuras Extremas",
      description:
        "Puenting, canopy, rafting y escalada en roca en paisajes espectaculares",
    },
    {
      icon: Droplets,
      title: "Cascadas Impresionantes",
      description:
        "Descubre la belleza natural de Baños con sus cascadas  ",
    },
    {
      icon: TreePine,
      title: "Naturaleza Exuberante",
      description:
        "Explora cascadas impresionantes y la biodiversidad de Baños",
    },
    {
      icon: Camera,
      title: "Fotografía Única",
      description:
        "Captura momentos inolvidables en los paisajes más fotogénicos del Ecuador",
    },
  ];

  return (
    <section id="descripcion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Descubre la Magia de Baños
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sumérgete en una experiencia única donde la adrenalina y la
            tranquilidad se combinan perfectamente. Baños de Agua Santa,
            conocido como la "Puerta de la Amazonía", te espera con sus paisajes
            volcánicos, cascadas impresionantes y actividades de aventura que
            desafiarán tus límites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Una Experiencia Transformadora
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Conexión con la Naturaleza:</strong> Desconéctate de
                  la rutina y reconéctate contigo mismo en entornos naturales
                  únicos.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Mountain className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Desafío Personal:</strong> Supera tus miedos y
                  descubre de qué eres capaz con actividades de aventura
                  supervisadas por expertos.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Ubicación Estratégica:</strong> Desde Baños puedes
                  acceder fácilmente a múltiples ecosistemas: sierra, oriente y
                  amazonia.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/96/5e/a5/965ea5cd261a36969128d301a27891dd.jpg"
              alt="Cascada en Baños de Agua Santa"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">Cascada del Pailón del Diablo</p>
              <p className="text-sm opacity-90">
                Una de las cascadas más impresionantes del Ecuador
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
