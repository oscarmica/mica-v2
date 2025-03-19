
import React from 'react';
import { motion } from 'framer-motion';
import { Logos3 } from '@/components/ui/logos3';

const BackedBySection = () => {
  const investors = [
    {
      id: "investor-1",
      description: "500 Startups",
      image: "/lovable-uploads/123802e5-dd86-46c3-a3f5-e2e4aae42406.png",
      className: "h-16 w-auto",
    },
    {
      id: "investor-2",
      description: "Y Combinator",
      image: "/lovable-uploads/ebe01cde-4d86-4836-8870-9d6f35b8849e.png",
      className: "h-16 w-auto",
    },
    {
      id: "investor-3",
      description: "Seedstars",
      image: "/lovable-uploads/ff9ce11f-edef-49d1-8483-7bcf51c548d0.png",
      className: "h-16 w-auto",
    },
    {
      id: "investor-4",
      description: "ALLVP",
      image: "/lovable-uploads/c6e28439-6481-459e-ae34-c31b32ed151e.png",
      className: "h-16 w-auto",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-xs font-medium mb-3">
            Respaldo
          </span>
          <h2 className="text-3xl font-bold mb-4">Quiénes nos respaldan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con el apoyo de fondos de inversión y aceleradoras líderes en el sector tecnológico
          </p>
        </motion.div>
        
        <Logos3 
          heading="" 
          logos={investors}
        />
      </div>
    </section>
  );
};

export default BackedBySection;
