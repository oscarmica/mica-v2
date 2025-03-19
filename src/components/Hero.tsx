
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Home, Calendar, Clock, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextRotate } from "@/components/ui/text-rotate";

const Hero = () => {
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
  const features = [{
    icon: <Calendar className="h-5 w-5 text-mica-green" />,
    text: "Investigaciones en -24hrs"
  }, {
    icon: <Home className="h-5 w-5 text-mica-green" />,
    text: "Renta con o sin aval"
  }, {
    icon: <Calendar className="h-5 w-5 text-mica-green" />,
    text: "Proceso 100% digital"
  }, {
    icon: <Clock className="h-5 w-5 text-mica-green" />,
    text: "Soporte continuo"
  }, {
    icon: <UserCheck className="h-5 w-5 text-mica-green" />,
    text: "Asistencia legal"
  }];
  
  // Emoji decorations for floating elements
  const emojis = [
    { emoji: "🏠", position: "top-[15%] left-[5%]", size: "text-4xl", rotation: "-rotate-[5deg]" },
    { emoji: "📝", position: "top-[10%] right-[10%]", size: "text-5xl", rotation: "rotate-[8deg]" },
    { emoji: "🔐", position: "bottom-[20%] left-[8%]", size: "text-4xl", rotation: "rotate-[12deg]" },
    { emoji: "💼", position: "bottom-[15%] right-[12%]", size: "text-5xl", rotation: "-rotate-[10deg]" },
    { emoji: "💰", position: "top-[40%] right-[5%]", size: "text-4xl", rotation: "rotate-[3deg]" },
  ];
  
  return <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto relative">
        {/* Floating emojis with animation - now visible on mobile too */}
        {emojis.map((item, index) => (
          <motion.div 
            key={index}
            className={`absolute ${item.position} ${item.rotation} opacity-30`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 0.3, 
              y: 0,
              x: [0, 10, 0, -10, 0],
              transition: { 
                opacity: { duration: 0.5, delay: index * 0.2 },
                x: { 
                  repeat: Infinity, 
                  duration: 5 + index, 
                  ease: "easeInOut"
                }
              }
            }}
            whileHover={{ scale: 1.2, opacity: 0.7 }}
          >
            <span className={`${item.size}`}>{item.emoji}</span>
          </motion.div>
        ))}
        
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center relative z-10" variants={containerVariants} initial="hidden" animate="visible">
            {/* Emoji Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
              <span className="mr-2 text-lg">🏠</span>
              <span className="font-medium text-sm">Somos tu aliado en rentas.</span>
            </motion.div>
            
            {/* Main heading with TextRotate */}
            <motion.h1 variants={itemVariants} className="font-bold mb-6 text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Tu renta <span className="text-mica-green flex justify-center">
                <TextRotate 
                  texts={["simple", "segura", "digital", "puntual", "protegida", "con o sin aval"]} 
                  rotationInterval={3000}
                  staggerDuration={0.05}
                  staggerFrom="first"
                  mainClassName="text-mica-green"
                />
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p variants={itemVariants} className="text-mica-gray-2 text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-balance">
              Tecnología, expertise legal y soluciones financieras para tus operaciones de renta.
            </motion.p>
            
            {/* Feature list */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, index) => <div key={index} className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  {feature.icon}
                  <span className="ml-2 text-sm font-medium">{feature.text}</span>
                </div>)}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-mica-green text-white rounded-lg px-8 py-6 text-base h-auto group">
                Regístrate
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-2 border-mica-gray-5 bg-white text-mica-gray-1 hover:bg-slate-50 rounded-lg px-8 py-6 text-base h-auto">Agendar Demo</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default Hero;
