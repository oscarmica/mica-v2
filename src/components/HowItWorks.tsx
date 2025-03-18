import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ClipboardCheck, CreditCard, ShieldCheck, Clock, Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
const steps = [{
  icon: <ClipboardCheck className="h-8 w-8 text-white" />,
  emoji: "📝",
  title: 'Regístrate',
  description: 'Completa nuestro formulario en línea con los detalles de tu renta y elige tu plan de protección.'
}, {
  icon: <CreditCard className="h-8 w-8 text-white" />,
  emoji: "💳",
  title: 'Realiza el Pago',
  description: 'Elige tu método de pago preferido y completa la transacción de forma segura.'
}, {
  icon: <ShieldCheck className="h-8 w-8 text-white" />,
  emoji: "🛡️",
  title: 'Obtén Protección',
  description: 'Recibe tu certificado de protección y los detalles de tu cobertura al instante.'
}, {
  icon: <Clock className="h-8 w-8 text-white" />,
  emoji: "⏰",
  title: 'Soporte Continuo',
  description: 'Accede a nuestro equipo de soporte 24/7 cuando necesites asistencia con tu renta.'
}];
const HowItWorks = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
  return <section id="how-it-works" className="bg-gray-50 py-0">
      <div className="section-container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
            <span className="mr-2 text-lg">🚀</span>
            <span className="font-medium text-sm">Proceso Simple</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Cómo Funciona <span className="text-mica-green">mica</span>
          </h2>
          <p className="text-mica-gray-2 text-lg">
            Nuestro proceso simplificado facilita la obtención de protección. Sigue estos sencillos pasos y obtén tranquilidad con tu renta.
          </p>
        </motion.div>
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full hover:shadow-md transition-shadow relative overflow-hidden group-hover:border-mica-green/20">
                <div className="absolute -right-6 -top-6 w-16 h-16 bg-mica-green rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="flex items-center mb-6">
                  <div className="bg-mica-green rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-4 h-full">
                    <div className="w-4 h-4 rounded-full bg-mica-green/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-mica-green"></div>
                    </div>
                    {index < steps.length - 1 && <div className="w-0.5 h-full bg-mica-green/20 ml-[7px] mt-1"></div>}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-mica-gray-3">{step.description}</p>
                </div>
              </div>
            </motion.div>)}
        </motion.div>
        
        
      </div>
    </section>;
};
export default HowItWorks;