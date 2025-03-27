
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MediaSection = () => {
  const mediaAppearances = [{
    logo: "/lovable-uploads/5305845e-e795-43a4-8f09-446a45ebae87.png",
    name: "El Financiero",
    description: "... el historial o score crediticio juega un rol importante en la vida financiera del individuo ya que es visto como medida e indicador de la estabilidad financiera.",
    link: "https://www.elfinanciero.com.mx/economia/2022/10/17/como-mejorar-tu-historial-crediticio-esta-startup-ofrece-una-nueva-opcion/"
  }, {
    logo: "/lovable-uploads/403c6512-f03e-4c44-8b84-3ea4fcfba30e.png", 
    name: "Whitepaper",
    description: "Mica is a web platform and app that simplifies renting by equipping tenants and landlords with legal and financial tools to pay bills and underwrite risk.",
    link: "https://whitepaper.io/document/2038/mica-deck"
  }, {
    logo: "/lovable-uploads/89f287b9-acf0-407f-9fe4-d60b503e0f60.png",
    name: "El Economista",
    description: "Como proptech, queremos crear seguridad para empoderar a los clientes para que renten el departamento que desean y sean inquilinos deseables",
    link: "https://www.eleconomista.com.mx/tecnologia/Mica-capta-inversion-para-expandir-su-plataforma-de-proteccion-para-propietarios-20220105-0041.html"
  }, {
    logo: "/lovable-uploads/170aeb53-3f25-40bc-abea-8a5699e8344b.png",
    name: "Inmobiliare",
    description: "... has intentado varias veces aplicar para un crédito pero el banco te sigue rechazando? Ahora puedes utilizar el pago de tu renta para mejorar tu puntuación crediticia...",
    link: "https://inmobiliare.com/mica-inicia-operaciones-en-mexico-para-democratizar-el-acceso-a-la-vivienda/"
  }];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container px-4 mx-auto">
        {/* Media Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-xs font-medium mb-3">
              Reconocimiento
            </span>
            <h2 className="text-3xl font-bold mb-4"><span className="text-mica-green">mica</span> en los medios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestra innovación en el sector inmobiliario ha sido reconocida por medios destacados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaAppearances.map((media, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }} 
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden mr-3">
                        <img src={media.logo} alt={media.name} className="w-8 h-8 object-contain" />
                      </div>
                      <h3 className="font-semibold text-lg">{media.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow text-sm">{media.description}</p>
                    <div className="mt-auto">
                      <a 
                        href={media.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-mica-green text-sm font-medium flex items-center hover:underline"
                      >
                        Leer artículo <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
