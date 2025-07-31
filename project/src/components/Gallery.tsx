import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, ExternalLink } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const images = [
    { 
      src: "https://i.pinimg.com/1200x/1f/2a/81/1f2a81d564a41949eb93dbea96a07d1a.jpg", 
      title: "Cascada del Pailón del Diablo", 
      description: [
        { icon: "📍", text: "Ubicación: Parroquia Río Verde, Tungurahua" },
        { icon: "🗺️", text: "Referencia: Puente colgante y miradores naturales" },
        { icon: "📞", text: "Teléfono: 032-745-001" },
        { icon: "📧", text: "Correo: info@rioverde.gob.ec" },
        { icon: "🎯", text: "Tipo: Cascada, senderismo" },
        { icon: "💲", text: "Entrada: $2-5" },
        { icon: "⏰", text: "Horario: 8:00-17:00" },
        { icon: "✨", text: "Destacado: Una de las cascadas más impresionantes de Ecuador con senderos y puentes colgantes" }
      ],
      externalLink: "https://tungurahuaturismo.com/es-ec/tungurahua/banos-de-agua-santa/complejos-turisticos/pailon-diablo-a8e036996"
    },
    { 
      src: "https://amazoniaexplorer.com/wp-content/uploads/2022/08/hv.jpg", 
      title: "Cascada Hola Vida", 
      description: [
        { icon: "📍", text: "Ubicación: Vía Baños – Runtún, Tungurahua" },
        { icon: "🌄", text: "Referencia: Dentro de Las Manos de la Pachamama" },
        { icon: "📞", text: "Teléfono: 0991040056" },
        { icon: "🎯", text: "Tipo: Parque de Atracciones" },
        { icon: "💲", text: "Entrada: $2-10" },
        { icon: "⏰", text: "Horario: 8:00-17:00" },
        { icon: "✨", text: "Destacado: Atracción natural con cascada y senderos para ecoturismo" }
      ],
      externalLink: "https://www.goraymi.com/es-ec/pastaza/pastaza/cascadas/cascada-hola-vida-a6gwr1i2h"
    },
    { 
      src: "https://natural-gamboa-hospedaje-spa.ecuadorhotel24.com/data/Photos/700x500w/10150/1015003/1015003576.JPEG", 
      title: "Piscinas & Spa Gamboa", 
      description: [
        { icon: "📍", text: "Ubicación: Montalvo s/n, Thomas Halflants, Tungurahua" },
        { icon: "🗺️", text: "Referencia: A 1 cuadra de la Escuela P. V. Maldonado" },
        { icon: "📞", text: "Teléfono: 0999928168" },
        { icon: "📧", text: "Correo: naturalgamboa@gmail.com" },
        { icon: "🎯", text: "Tipo: Balneario, Spa" },
        { icon: "💲", text: "Precio: $10-30" },
        { icon: "⏰", text: "Horario: 10:00-20:00" },
        { icon: "✨", text: "Destacado: Spa con piscinas termales para relajación" }
      ],
      externalLink: "https://hotelgamboa.com/"
    },
    { 
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSgjISmAHbpxKBZdxSwyBRrFhrgnaSh7Qsw&s", 
      title: "Crepería La Giornata", 
      description: [
        { icon: "📍", text: "Ubicación: Ambato y Eloy Alfaro, Baños de Agua Santa" },
        { icon: "🗺️", text: "Referencia: A 50 m del mercado central" },
        { icon: "📞", text: "Teléfono: 0999173535" },
        { icon: "🎯", text: "Tipo: Cafetería" },
        { icon: "💲", text: "Precio: $3-8" },
        { icon: "⏰", text: "Horario: 8:00-22:00" },
        { icon: "✨", text: "Destacado: Cafetería céntrica especializada en crepas dulces y saladas" }
      ],
      externalLink: "https://www.instagram.com/creperialagiornata/"
    },
    { 
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/25/c1/gallina-de-pinllo-bandeja.jpg?w=900&h=500&s=1", 
      title: "Restaurante Abaka", 
      description: [
        { icon: "📍", text: "Ubicación: Av. Amazonas, vía a Chamana, Baños-Puyo" },
        { icon: "🗺️", text: "Referencia: Km 4 de la vía" },
        { icon: "📞", text: "Teléfono: 0984507679" },
        { icon: "📧", text: "Correo: contacto@abaka.com" },
        { icon: "🎯", text: "Tipo: Restaurante" },
        { icon: "💲", text: "Precio: $10-20" },
        { icon: "⏰", text: "Horario: 12:00-21:00" },
        { icon: "✨", text: "Destacado: Restaurante con vistas naturales y ambiente escénico" }
      ],
      externalLink: "https://tungurahuaturismo.com/es-ec/tungurahua/ambato/gestores-gastronomicos/gallinas-pinllo-abaka-avyph2rkp"
    },
    { 
      src: "https://www.turismoecuador24.com/archivos/destinos/animal_park.jpg", 
      title: "Animal Park Safari", 
      description: [
        { icon: "📍", text: "Ubicación: Santa Rosa de Runtún, Baños de Agua Santa" },
        { icon: "🗺️", text: "Referencia: Junto al estadio de la comunidad" },
        { icon: "📞", text: "Teléfono: 0989477772" },
        { icon: "🎯", text: "Tipo: Cafetería/Parque" },
        { icon: "💲", text: "Precio: $3-10" },
        { icon: "⏰", text: "Horario: 8:00-20:00" },
        { icon: "✨", text: "Destacado: Lugar familiar que combina cafetería con parque de animales" }
      ],
      externalLink: "https://animalpark.ec/"
    },
    { 
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/9a/d6/b1/hosteria-ulba.jpg?w=900&h=-1&s=1", 
      title: "Hostería Ulba", 
      description: [
        { icon: "📍", text: "Ubicación: Vía a las Cascadas, Parroquia Ulba" },
        { icon: "🗺️", text: "Referencia: A 100 m del mirador de la Cascada de Ulba" },
        { icon: "📞", text: "Teléfono: 032-741-020" },
        { icon: "🌐", text: "Sitio Web: ulbahosteria.com" },
        { icon: "🎯", text: "Tipo: Hostería" },
        { icon: "💲", text: "Precio: ~$130/noche" },
        { icon: "⏰", text: "Check-in: 15:00" },
        { icon: "✨", text: "Destacado: Hostería acogedora con acceso a cascadas cercanas y piscina climatizada" }
      ],
      externalLink: "https://www.facebook.com/UlbaHosteria/?locale=es_LA"
    },
    { 
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/da/ab/c2/te-esperamos-para-brindarte.jpg?w=1200&h=1200&s=1", 
      title: "Leprechaun", 
      description: [
        { icon: "📍", text: "Ubicación: Eloy Alfaro 620 y Oriente, Baños" },
        { icon: "🗺️", text: "Referencia: Casa amarilla de dos pisos" },
        { icon: "📞", text: "Teléfono: 0999772801" },
        { icon: "🌐", text: "Sitio Web: leprechaunec.com" },
        { icon: "🎯", text: "Tipo: Discoteca" },
        { icon: "💲", text: "Precio: $3-10/bebida" },
        { icon: "⏰", text: "Horario: 20:00-02:00" },
        { icon: "✨", text: "Destacado: Bar y discoteca vibrante en el centro de Baños" }
      ],
      externalLink: "https://www.instagram.com/leprechaun_club/?hl=es"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeria" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galería de Aventuras</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los paisajes más espectaculares y las emociones que te esperan en cada rincón de Baños de Agua Santa.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md h-48">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8">
              <button
                onClick={prevImage}
                className="hidden lg:flex text-white p-2 hover:text-gray-300"
              >
                <ChevronLeft size={48} />
              </button>
              
              <div className="flex flex-col lg:flex-row w-full max-h-[80vh] gap-6">
                <div className="lg:w-1/2 h-full flex items-center justify-center">
                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].title}
                    className="max-h-[70vh] w-auto rounded-xl shadow-2xl object-contain"
                  />
                </div>
                
                <div className="lg:w-1/2 bg-white rounded-xl shadow-2xl p-6 overflow-y-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {images[selectedImage].title}
                  </h2>
                  
                  <div className="space-y-4">
                    {images[selectedImage].description.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-amber-500 text-xl mt-0.5">
                          {item.icon}
                        </span>
                        <span className="text-gray-700 font-medium">
                          {item.text}
                        </span>
                      </div>
                    ))}
                    
                    <a 
                      href={images[selectedImage].externalLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Visitar sitio oficial</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <button
                onClick={nextImage}
                className="hidden lg:flex text-white p-2 hover:text-gray-300"
              >
                <ChevronRight size={48} />
              </button>
            </div>
            
            {/* Mobile navigation */}
            <div className="lg:hidden fixed bottom-6 left-0 right-0 flex justify-center gap-12">
              <button
                onClick={prevImage}
                className="text-white p-2 hover:text-gray-300 bg-black/50 rounded-full"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="text-white p-2 hover:text-gray-300 bg-black/50 rounded-full"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;