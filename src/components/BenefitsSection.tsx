
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ¿Por qué elegir Mica y no pólizas jurídicas tradicionales?
          </h2>
          <p className="text-lg text-gray-600">
            Nuestra solución ofrece ventajas significativas frente a las alternativas tradicionales del mercado.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {comparisonData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-6"
            >
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-mica-green/10 text-mica-green">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-mica-green" />
                    <span>Con Mica</span>
                  </h3>
                  <p className="text-gray-700">{item.mica}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-red-100 text-red-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                    <span className="h-5 w-5 text-red-500">✖</span>
                    <span>Solución tradicional</span>
                  </h3>
                  <p className="text-gray-700">{item.traditional}</p>
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
