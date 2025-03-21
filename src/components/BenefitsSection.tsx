
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
    <section id="benefits" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            ¿Por qué elegir <span className="text-mica-green">mica</span> en lugar de pólizas jurídicas tradicionales?
          </h2>
          <p className="text-mica-gray-2">
            La protección digital que supera a las pólizas jurídicas tradicionales con beneficios exclusivos para asesores
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {comparisonData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col"
            >
              <div className="flex gap-4 mb-4">
                <div className={cn("rounded-full bg-mica-green/10 text-mica-green flex-shrink-0")}>
                  {item.icon}
                </div>
                
                <div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg text-mica-green mb-1">Con mica:</h4>
                    <p className="text-gray-700">{item.mica}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg text-red-500 mb-1">Sistema tradicional:</h4>
                    <p className="text-gray-600">{item.traditional}</p>
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
