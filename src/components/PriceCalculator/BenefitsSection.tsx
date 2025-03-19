
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Building, Home, User } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <div className="py-12 px-6 md:px-8 bg-white rounded-2xl shadow-lg border border-slate-100">
      <motion.h2 
        className="text-2xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Beneficios de usar <span className="text-mica-green">mica</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
            <Building className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Para asesores inmobiliarios</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Cierre de operaciones más rápido</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Comisiones adicionales</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Herramientas digitales</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 bg-green-50 w-12 h-12 rounded-full flex items-center justify-center">
            <Home className="w-6 h-6 text-mica-green" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Para propietarios</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="text-mica-green mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Inquilinos verificados</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-mica-green mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Garantía de pago puntual</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-mica-green mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Protección contra daños</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 bg-amber-50 w-12 h-12 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-amber-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Para inquilinos</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="text-amber-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Renta con o sin aval</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-amber-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Proceso digitalizado</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-amber-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>Soporte legal incluido</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsSection;
