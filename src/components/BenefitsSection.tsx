
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, FileCheck, BuildingIcon, User, ShieldAlert, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const comparisonData = [
  {
    mica: "Servicio 100% digital y en línea",
    traditional: "Procesos tradicionales y lentos",
    icon: <FileCheck className="h-10 w-10 p-2" />
  },
  {
    mica: "Verificación en 24 horas",
    traditional: "Esperas de semanas para verificaciones",
    icon: <Clock className="h-10 w-10 p-2" />
  },
  {
    mica: "Hasta 12 meses de protección",
    traditional: "Coberturas limitadas y restrictivas",
    icon: <ShieldCheck className="h-10 w-10 p-2" />
  },
  {
    mica: "Soporte continuo durante todo el contrato",
    traditional: "Servicio mínimo post-firma",
    icon: <BadgeCheck className="h-10 w-10 p-2" />
  }
];

const BenefitsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section id="mica-advantages" className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Nuestra ventaja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Por qué elegir <span className="text-primary">mica</span> y no pólizas jurídicas?
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Un servicio integral para rentas seguras y sin complicaciones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          
          {/* Left side - Testimonial card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl h-full flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl"></div>
            <div className="mb-6 relative z-10">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-xl italic text-slate-300 mb-4 relative">
                <svg className="absolute -top-3 -left-2 w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                Mica ofrece una solución completa que integra tecnología, velocidad y servicio personalizado para una experiencia de renta más conveniente y segura.
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <BuildingIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-white">Carlos Mendoza</p>
                  <p className="text-sm text-slate-400">Director de Agencia Inmobiliaria</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <div className="text-5xl font-bold text-primary mb-2">+15K</div>
                <div className="text-slate-300">rentas protegidas</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <div className="text-5xl font-bold text-primary mb-2">+700</div>
                <div className="text-slate-300">propiedades administradas</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Comparison table */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-xl overflow-hidden"
          >
            <div className="p-6 border-b border-slate-700 bg-slate-800">
              <h3 className="text-2xl font-bold text-center">Comparativa de soluciones</h3>
            </div>
            
            <div className="p-6">
              {comparisonData.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-xl mb-4 border border-slate-700/50",
                    "hover:border-primary/30 transition-colors duration-300",
                    "bg-gradient-to-r from-slate-800/50 to-slate-800/30"
                  )}
                >
                  <div className="md:col-span-2 flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'text-primary' })}
                    </div>
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                      <h4 className="font-semibold text-white">Con mica</h4>
                    </div>
                    <p className="text-slate-300 pl-5">{item.mica}</p>
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="flex items-center mb-1">
                      <div className="w-3 h-3 rounded-full bg-slate-500 mr-2"></div>
                      <h4 className="font-semibold text-slate-300">Pólizas tradicionales</h4>
                    </div>
                    <p className="text-slate-400 pl-5">{item.traditional}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-6 bg-slate-800/50 border-t border-slate-700">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex justify-center"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 mr-2" /> 
                  Respaldado por más de 500 asesores inmobiliarios
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
