import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, Home, Calendar, Clock, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  const benefits = [
    {
      icon: <Home className="h-5 w-5" />,
      text: "Investigaciones express"
    }, 
    {
      icon: <Clock className="h-5 w-5" />,
      text: "Soporte 24/7"
    }, 
    {
      icon: <UserCheck className="h-5 w-5" />,
      text: "Asistencia legal"
    }, 
    {
      icon: <Calendar className="h-5 w-5" />,
      text: "Renta con o sin aval"
    }
  ];

  return (
    <section className="py-16 bg-mica-gray-5/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Comienza a proteger tus rentas <span className="text-mica-green">hoy mismo</span>
          </h2>
          
          <p className="text-mica-gray-2 text-lg mb-8 max-w-2xl mx-auto">
            Únete a miles de asesores inmobiliarios que ya confían en nosotros para proteger las propiedades de sus clientes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{opacity: 0, y: 10}} 
                animate={{opacity: 1, y: 0}} 
                transition={{delay: index * 0.1, duration: 0.3}} 
                className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm"
              >
                <div className="mr-2 text-mica-green">{benefit.icon}</div>
                <span className="text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{opacity: 0, scale: 0.95}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.3}}
          >
            <Button 
              className="bg-mica-green text-white rounded-lg px-8 py-6 text-base h-auto group"
              onClick={() => window.location.href = "https://catatumbo.mica.rent/welcome"}
            >
              Regístrate
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
