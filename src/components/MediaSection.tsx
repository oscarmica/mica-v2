
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const MediaSection = () => {
  const mediaAppearances = [{
    logo: "/lovable-uploads/2a573697-0d4a-4094-8a87-3e25189e4075.png", // Updated El Financiero logo
    name: "El Financiero",
    description: "... el historial o score crediticio juega un rol importante en la vida financiera del individuo ya que es visto como medida e indicador de la estabilidad financiera."
  }, {
    logo: "/lovable-uploads/403c6512-f03e-4c44-8b84-3ea4fcfba30e.png", 
    name: "Whitepaper",
    description: "Mica is a web platform and app that simplifies renting by equipping tenants and landlords with legal and financial tools to pay bills and underwrite risk."
  }, {
    logo: "/lovable-uploads/89f287b9-acf0-407f-9fe4-d60b503e0f60.png",
    name: "El Economista",
    description: "Como proptech, queremos crear seguridad para empoderar a los clientes para que renten el departamento que desean y sean inquilinos deseables"
  }, {
    logo: "/lovable-uploads/170aeb53-3f25-40bc-abea-8a5699e8344b.png",
    name: "Inmobiliare",
    description: "... has intentado varias veces aplicar para un crédito pero el banco te sigue rechazando? Ahora puedes utilizar el pago de tu renta para mejorar tu puntuación crediticia..."
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
                    <div className="flex items-center justify-center mb-4">
                      <div className="h-16 w-full flex items-center justify-center overflow-hidden">
                        <img src={media.logo} alt={media.name} className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                    <p className="text-gray-600 mt-4 text-sm text-center">{media.description}</p>
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
