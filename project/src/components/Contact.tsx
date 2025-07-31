import React from "react";
import { Phone, Mail, MapPin, Clock, Users, Star } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a planificar tu aventura en Baños de Agua
            Santa. Conéctate con nosotros para más detalles.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="space-y-8 font-['Inter'] max-w-2xl w-full">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">
                      Teléfono / WhatsApp
                    </p>
                    <p className="text-gray-400">+593 93 9376996</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">Email</p>
                    <p className="text-gray-400">ana.munoz@cenestur.edu.ec</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">Ubicación</p>
                    <p className="text-gray-400">
                      Baños de Agua Santa, Ecuador
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">Horarios</p>
                    <p className="text-gray-400">
                      Lun - Dom: 7:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-700">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
            <p className="text-gray-400">Aventureros Satisfechos</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">4.9</div>
            <p className="text-gray-400">Calificación Promedio</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
            <p className="text-gray-400">Ubicaciones Visitadas</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">2</div>
            <p className="text-gray-400">Días de Aventura</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
