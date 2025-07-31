import React from "react";
import { Calendar, Users, MapPin, Star } from "lucide-react";

const Hero = () => {
  // Función para scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`La sección "${sectionId}" no se encontró en el DOM.`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://www.turismoecuador24.com/archivos/destinos/animal_park.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Tour Virtual
            <span className="block text-green-400">Baños de Agua Santa</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            2 Días / 1 Noche de Aventura Pura
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Calendar className="w-5 h-5 text-green-400" />
              <span className="font-medium">2 Días / 1 Noche</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="w-5 h-5 text-green-400" />
              <span className="font-medium">Ecuador - Tungurahua</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">5★ Experiencia</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("itinerario")}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explorar Itinerario
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105"
            >
              Ver Galería
            </button>
          </div>

          <div className="mt-12 text-sm text-gray-300">
            <p className="font-semibold">
              Proyecto Club CIA (Grupo MOSSAD) • 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;