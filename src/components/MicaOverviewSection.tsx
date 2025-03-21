
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, FileSignature, Paperclip, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MicaOverviewSection = () => {
  const micaFeatures = [
    {
      icon: <Clock className="h-8 w-8 p-1.5 text-mica-green" />,
      title: "Investigación en 24 horas",
      description: "Evaluamos prospectos de inquilinos rápidamente para que puedas cerrar operaciones sin demoras."
    },
    {
      icon: <FileSignature className="h-8 w-8 p-1.5 text-mica-green" />,
      title: "Firma digital de contratos",
      description: "Proceso 100% digital para firmar contratos desde cualquier lugar, sin necesidad de reuniones presenciales."
    },
    {
      icon: <Paperclip className="h-8 w-8 p-1.5 text-mica-green" />,
      title: "Gestión mensual de renta",
      description: "Nos encargamos del cobro mensual para que los propietarios reciban su pago puntualmente."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 p-1.5 text-mica-green" />,
      title: "Desalojos express",
      description: "En caso necesario, gestionamos el proceso de desalojo de manera eficiente, protegiendo el patrimonio."
    }
  ];

  const micaProducts = [
    {
      title: "Protección Jurídica",
      description: "Cubre servicios legales básicos como desalojo express",
      price: "20% de un mes de renta o 2.5% mensual",
      color: "bg-blue-50 text-blue-700",
      shadowColor: "shadow-blue-100"
    },
    {
      title: "Protección Integral",
      description: "Adelanto de renta y 4 meses de protección garantizada",
      price: "30% de un mes de renta o 3.75% mensual",
      color: "bg-purple-50 text-purple-700",
      shadowColor: "shadow-purple-100"
    },
    {
      title: "Protección Premium",
      description: "Pago puntual garantizado y juicio de recuperación si es necesario",
      price: "50% de un mes de renta o 6.25% mensual",
      color: "bg-mica-green/10 text-mica-green",
      shadowColor: "shadow-green-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-xs font-medium mb-3">
            Solución Completa
          </span>
          <h2 className="text-3xl font-bold mb-4">Innovación en el sector inmobiliario</h2>
          <p className="text-gray-600">
            Mica es una empresa innovadora en el sector inmobiliario mexicano que ofrece soluciones tecnológicas 
            diseñadas para proteger a propietarios e inquilinos durante el proceso de renta. Ofrecemos productos 
            de protección que aseguran ingresos constantes para los propietarios, incluso si el inquilino no paga.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl font-semibold mb-8 text-center"
          >
            A diferencia de las pólizas tradicionales, Mica ofrece una experiencia digital rápida y eficiente
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {micaFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
              >
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

        {/* Products Section */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl font-semibold mb-8 text-center"
          >
            Tres productos principales según las necesidades del propietario
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {micaProducts.map((product, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className={`h-full hover:shadow-lg transition-all border-gray-100 group-hover:border-${product.color.split(' ')[0]}/30`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-full ${product.color} flex items-center justify-center mb-6`}>
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    
                    <h4 className="font-bold text-xl mb-2">{product.title}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className={`mt-auto py-3 px-4 rounded-lg ${product.shadowColor} ${product.color.split(' ')[0]}/5 flex items-center`}>
                      <span className="font-medium">{product.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-12 text-center bg-gradient-to-r from-mica-green/10 to-blue-100/20 p-6 rounded-xl shadow-sm"
        >
          <p className="text-lg font-medium">
            Mica transforma la renta tradicional en un proceso seguro y eficiente, 
            protegiendo a los propietarios ante cualquier eventualidad mientras facilita 
            la vida de los inquilinos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MicaOverviewSection;
