import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const MediaSection = () => {
  const mediaAppearances = [{
    logo: "/lovable-uploads/ad8dccd9-da7f-40f9-b03b-9bcab525ec89.png",
    // Use an existing logo or placeholder
    name: "Forbes México",
    description: "Mica revoluciona el sector inmobiliario con tecnología e innovación financiera"
  }, {
    logo: "/lovable-uploads/31c50254-6a85-4ede-a287-d4674c4f9de6.png",
    // Use an existing logo or placeholder
    name: "Entrepreneur",
    description: "Cómo esta startup está transformando la experiencia de renta en México"
  }, {
    logo: "/lovable-uploads/b491c3e0-ae9a-4991-a492-dc5de51b82fb.png",
    // Use an existing logo or placeholder
    name: "El Economista",
    description: "Mica capta inversión para expandir su plataforma de protección para propietarios"
  }];
  const investors = [{
    logo: "/lovable-uploads/123802e5-dd86-46c3-a3f5-e2e4aae42406.png",
    name: "500 Startups"
  }, {
    logo: "/lovable-uploads/ebe01cde-4d86-4836-8870-9d6f35b8849e.png",
    name: "Y Combinator"
  }, {
    logo: "/lovable-uploads/ff9ce11f-edef-49d1-8483-7bcf51c548d0.png",
    name: "Seedstars"
  }, {
    logo: "/lovable-uploads/c6e28439-6481-459e-ae34-c31b32ed151e.png",
    name: "ALLVP"
  }];
  return <section className="py-16 bg-slate-50">
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
            {mediaAppearances.map((media, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden mr-3">
                        <img src={media.logo} alt={media.name} className="w-8 h-8 object-contain" />
                      </div>
                      <h3 className="font-semibold text-lg">{media.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow">{media.description}</p>
                    <div className="mt-auto">
                      <a href="#" className="text-mica-green text-sm font-medium flex items-center hover:underline">
                        Leer artículo <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
        
        {/* Investors Section */}
        
      </div>
    </section>;
};
export default MediaSection;