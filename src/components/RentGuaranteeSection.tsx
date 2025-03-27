
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Clock, Award, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const RentGuaranteeSection = () => {
  const rentFeatures = [{
    icon: <DollarSign className="h-8 w-8 p-1.5 text-mica-green" />,
    title: "Renta protegida",
    description: "El propietario recibe su pago, sin importar si el inquilino se atrasa o deja de pagar."
  }, {
    icon: <Clock className="h-8 w-8 p-1.5 text-mica-green" />,
    title: "Continuidad financiera",
    description: "Eliminamos la incertidumbre financiera para el propietario, asegurando un flujo de ingresos constante."
  }, {
    icon: <Shield className="h-8 w-8 p-1.5 text-mica-green" />,
    title: "Protección completa",
    description: "Nos encargamos de la recuperación del inmueble y la gestión de cobro al inquilino mientras el propietario sigue recibiendo su renta."
  }, {
    icon: <Award className="h-8 w-8 p-1.5 text-mica-green" />,
    title: "Tranquilidad total",
    description: "Los propietarios pueden planificar sus finanzas con seguridad, sabiendo que su ingreso por renta está protegido."
  }];
  return <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-mica-green/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200/10 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-xs font-medium mb-3">
            Nuestra promesa
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Cobranza garantizada</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-mica-green/20 z-0" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,0 C50,5 80,5 200,0 L200,8 L0,8 Z" fill="currentColor"></path>
            </svg>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            <span className="font-semibold text-gray-800">incluso si el inquilino se atrasa o deja de pagar.</span> Con mica, los propietarios reciben su renta, <span className="underline decoration-mica-green/30 decoration-2">incluso si el inquilino se atrasa o deja de pagar.</span>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {rentFeatures.map((feature, index) => <motion.div key={index} initial={{
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
              <Card className="h-full hover:shadow-md transition-shadow border-gray-100">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-mica-green/10 rounded-full flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
        
        
      </div>
    </section>;
};
export default RentGuaranteeSection;
