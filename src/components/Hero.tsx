
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Home, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  const features = [
    { icon: <ShieldCheck className="h-5 w-5 text-mica-green" />, text: "Protección jurídica completa" },
    { icon: <Home className="h-5 w-5 text-mica-green" />, text: "Renta sin aval" },
    { icon: <Calendar className="h-5 w-5 text-mica-green" />, text: "Proceso 100% digital" },
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Emoji Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6"
            >
              <span className="mr-2 text-lg">🏠</span>
              <span className="font-medium text-sm">La mejor protección para arrendamiento</span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1 
              variants={itemVariants}
              className="font-bold mb-6 text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Tu renta <span className="text-mica-green">simple</span> y <span className="text-mica-green">segura</span>.
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-mica-gray-2 text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-balance"
            >
              Tecnología, expertise legal y soluciones financieras para tus operaciones de renta.
            </motion.p>
            
            {/* Feature list */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  {feature.icon}
                  <span className="ml-2 text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-mica-green text-white rounded-lg px-8 py-6 text-base h-auto group">
                Regístrate
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-2 border-mica-gray-5 bg-white text-mica-gray-1 hover:bg-slate-50 rounded-lg px-8 py-6 text-base h-auto">
                Conoce más
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-mica-gray-3"
            >
              <div className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-mica-green" />
                <span>Protección garantizada</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-mica-green" />
                <span>Resultados en 24 horas</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-mica-green/10 to-transparent rounded-2xl -z-10"></div>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="/public/lovable-uploads/ebe01cde-4d86-4836-8870-9d6f35b8849e.png" 
                alt="Apartamento protegido por Mica" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              
              {/* Floating card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-4 right-4 left-4 md:left-auto md:bottom-8 md:right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs"
              >
                <div className="flex items-center mb-2">
                  <div className="bg-mica-green/10 p-2 rounded-full mr-3">
                    <ShieldCheck className="h-5 w-5 text-mica-green" />
                  </div>
                  <p className="font-medium text-sm">Protección activa para inquilinos y propietarios</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
