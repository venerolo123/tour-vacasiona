import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold">Tour Virtual Baños</h3>
                <p className="text-sm text-gray-400">Club CIA • MOSSAD Group</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experimenta la aventura más emocionante de tu vida en el corazón 
              de la naturaleza ecuatoriana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#descripcion" className="text-gray-300 hover:text-green-400 transition-colors">Descripción</a></li>
              <li><a href="#itinerario" className="text-gray-300 hover:text-green-400 transition-colors">Itinerario</a></li>
              <li><a href="#galeria" className="text-gray-300 hover:text-green-400 transition-colors">Galería</a></li>
              <li><a href="#mapa" className="text-gray-300 hover:text-green-400 transition-colors">Mapa</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">+593 93 937 6996</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">ana.munoz@cenestur.edu.ec</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Baños de Agua Santa, Ecuador</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/19TTijtBRP/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tecnologicocenestur?igsh=MWs5cG13bW0zbHNtcA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Club CIA (Grupo MOSSAD). 
            Diseñado para la aventura más emocionante de tu vida.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;