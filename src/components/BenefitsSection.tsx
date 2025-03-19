
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Leaf, Clock, Shield, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const comparisonData = [{
  mica: "Servicio 100% digital y en línea",
  traditional: "Procesos tradicionales y lentos",
  icon: <Sparkles className="h-10 w-10 p-2" />
}, {
  mica: "Verificación en 24 horas",
  traditional: "Esperas de semanas para verificaciones",
  icon: <Clock className="h-10 w-10 p-2" />
}, {
  mica: "Hasta 12 meses de protección",
  traditional: "Coberturas limitadas y restrictivas",
  icon: <Shield className="h-10 w-10 p-2" />
}, {
  mica: "Soporte continuo durante todo el contrato",
  traditional: "Servicio mínimo post-firma",
  icon: <BarChart3 className="h-10 w-10 p-2" />
}];

const BenefitsSection = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compare los beneficios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mica ofrece una experiencia completamente diferente comparada con los procesos tradicionales.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {comparisonData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className={cn("rounded-full bg-mica-green/10 flex-shrink-0")}>
                  {item.icon}
                </div>
                <div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                      <span>Con Mica</span>
                      <CheckCircle2 className="h-4 w-4 text-mica-green" />
                    </h3>
                    <p className="text-gray-800">{item.mica}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-500">Proceso tradicional</h3>
                    <p className="text-gray-500">{item.traditional}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
