
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
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-sm font-medium mb-3">
            Comparativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Por qué elegir mica en lugar de pólizas jurídicas tradicionales?
          </h2>
          <p className="text-gray-600 mt-4">
            Descubre las ventajas que nos diferencian de las soluciones convencionales
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-100">
            <div className="p-4 sm:p-6 text-center font-semibold text-lg border-r border-gray-100 bg-mica-green/5 text-mica-green">
              <div className="flex items-center justify-center gap-2">
                <span>mica</span>
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="p-4 sm:p-6 text-center font-semibold text-lg text-gray-500">
              Pólizas jurídicas tradicionales
            </div>
          </div>
          
          {/* Table Rows */}
          {comparisonData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={cn(
                "grid grid-cols-2 border-b border-gray-100",
                index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
              )}
            >
              <div className="p-4 sm:p-6 flex items-center border-r border-gray-100">
                <div className="bg-mica-green/10 rounded-full p-1 mr-3 text-mica-green">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="font-medium text-gray-800">{item.mica}</span>
              </div>
              <div className="p-4 sm:p-6 text-gray-600 flex items-center">
                <span>{item.traditional}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
