
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#fdf2f8] to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center relative z-10">
            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold mb-4 text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Protege tu <span className="text-primary">Renta</span> en México
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-balance"
            >
              La manera más sencilla de proteger tu depósito y garantizar tu tranquilidad.
              Sin aval, sin buró de crédito y 100% en línea.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-primary text-primary-foreground rounded-lg px-8 py-6 text-base h-auto group">
                Comienza ya
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-2 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 rounded-lg px-8 py-6 text-base h-auto">
                Conoce más
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex items-center justify-center space-x-2 text-sm text-slate-500"
            >
              <span>Más de 10,000 rentas protegidas en todo México</span>
            </motion.div>
          </div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1503174971373-b1f69a8738cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Apartamento en México protegido por mica.rent" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
