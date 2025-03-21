
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, FileSignature, Paperclip, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MicaOverviewSection = () => {
  const micaFeatures = [{
    icon: <Clock className="h-8 w-8 p-1.5 text-mica-green" />,
    title: "Investigación en 24 horas",
    description: "Evaluamos prospectos de inquilinos rápidamente para que puedas cerrar operaciones sin demoras."
  }, {
    icon: <FileSignature className="h-8 w-8 p-1.5 text-mica-green" />,
    title: "Firma digital de contratos",
    description: "Proceso 100% digital para firmar contratos desde cualquier lugar, sin necesidad de reuniones presenciales."
  }, {
    icon: <Paperclip className="h-8 w-8 p-1.5 text-mica-green" />,
    title: "Gestión mensual de renta",
    description: "Nos encargamos del cobro mensual para que los propietarios reciban su pago puntualmente."
  }, {
    icon: <ShieldCheck className="h-8 w-8 p-1.5 text-mica-green" />,
    title: "Desalojos express",
    description: "En caso necesario, gestionamos el proceso de desalojo de manera eficiente, protegiendo el patrimonio."
  }];

  return (
    <div>
      <motion.div 
        initial={{
          opacity: 0,
          y: 20
        }} 
        whileInView={{
          opacity: 1,
          y: 0
        }} 
        viewport={{
          once: true
        }} 
        transition={{
          duration: 0.5
        }} 
        className="p-6"
      >
        <p className="text-gray-600">
          Mica es una empresa innovadora en el sector inmobiliario mexicano que ofrece soluciones tecnológicas 
          diseñadas para proteger a propietarios e inquilinos durante el proceso de renta. Ofrecemos productos 
          de protección que aseguran ingresos constantes para los propietarios, incluso si el inquilino no paga.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="mb-12">
        <motion.h3 initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4
        }} className="text-xl font-semibold mb-8 text-center">
          A diferencia de las pólizas tradicionales, Mica ofrece una experiencia digital rápida y eficiente
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {micaFeatures.map((feature, index) => (
            <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }}>
              <Card className="h-full hover:shadow-md transition-all border-gray-100">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-14 h-14 bg-mica-green/10 rounded-full flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicaOverviewSection;
