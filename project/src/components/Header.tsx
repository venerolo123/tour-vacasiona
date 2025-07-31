import React, { useState } from "react";
import { Menu, X, MapPin, Calendar, Camera, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      console.error(
        `Section with ID "${sectionId}" not found in the DOM at ${new Date().toLocaleString(
          "en-US",
          { timeZone: "America/Lima" }
        )}. Please ensure a <section id="${sectionId}"> exists in your app.`
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin className="w-8 h-8 text-green-600" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Tour Virtual Baños</h1>
            <p className="text-xs text-gray-600">Club CIA • MOSSAD Group 2025</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("descripcion")} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Descripción
          </button>
          <button onClick={() => scrollToSection("itinerario")} className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>Itinerario</span>
          </button>
          <button onClick={() => scrollToSection("galeria")} className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center space-x-1">
            <Camera className="w-4 h-4" />
            <span>Galería</span>
          </button>
          <button onClick={() => scrollToSection("mapa")} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Mapa
          </button>
          <button onClick={() => scrollToSection("contacto")} className="text-gray-700 hover:text-green-600 transition-colors font-medium flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>Contacto</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection("descripcion")} className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium">
                Descripción
              </button>
              <button onClick={() => scrollToSection("itinerario")} className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium">
                Itinerario
              </button>
              <button onClick={() => scrollToSection("galeria")} className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium">
                Galería
              </button>
              <button onClick={() => scrollToSection("mapa")} className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium">
                Mapa
              </button>
              <button onClick={() => scrollToSection("contacto")} className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium">
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;