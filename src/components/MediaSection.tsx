
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MediaSection = () => {
  const mediaAppearances = [{
    logo: "/lovable-uploads/1eb23a16-1c66-4932-ab52-2232dc842d9e.png",
    name: "Forbes México",
    description: "Mica revoluciona el sector inmobiliario con tecnología e innovación financiera",
    link: "https://www.forbes.com.mx/mica-revoluciona-el-sector-inmobiliario-con-tecnologia-e-innovacion-financiera/"
  }, {
    logo: "/lovable-uploads/c4c80c33-fa30-4d95-915d-ef10c60bbcac.png", 
    name: "Entrepreneur",
    description: "Cómo esta startup está transformando la experiencia de renta en México",
    link: "https://www.entrepreneur.com/es/emprendedores/como-esta-startup-esta-transformando-la-experiencia-de-renta/445689"
  }, {
    logo: "/lovable-uploads/e3857479-a6e1-4ec7-9bbb-e21b31d46dce.png",
    name: "El Economista",
    description: "Mica capta inversión para expandir su plataforma de protección para propietarios",
    link: "https://www.eleconomista.com.mx/tecnologia/Mica-capta-inversion-para-expandir-su-plataforma-de-proteccion-para-propietarios-20220105-0041.html"
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
            <h2 className="text-3xl font-bold mb-4">Mica en los medios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestra innovación en el sector inmobiliario ha sido reconocida por medios destacados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <p className="text-gray-600 mb-4 flex-grow">{media.description}</p>
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
