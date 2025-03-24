
import React from 'react';
import { motion } from 'framer-motion';
import { Logos3 } from '@/components/ui/logos3';
const BackedBySection = () => {
  const investors = [{
    id: "investor-1",
    description: "AVPI México",
    image: "/lovable-uploads/88b1ab28-57e0-4f66-8c68-ca23d8f24ac5.png",
    className: "h-12 w-auto mx-2"
  }, {
    id: "investor-2",
    description: "Gaingels",
    image: "/lovable-uploads/fcb34d14-bae7-4732-bffc-5478fa5f71bd.png",
    className: "h-12 w-auto mx-2"
  }, {
    id: "investor-3",
    description: "Iluminar",
    image: "/lovable-uploads/fc6f175b-0cbb-4819-a925-bb0c76b6590e.png",
    className: "h-12 w-auto mx-2"
  }, {
    id: "investor-4",
    description: "DVC",
    image: "/lovable-uploads/96bbe110-b3b5-489d-8e06-63b67a09aed8.png",
    className: "h-12 w-auto mx-2"
  }, {
    id: "investor-5",
    description: "Mercury",
    image: "/lovable-uploads/3294abf7-320a-47bf-80d2-a1c1b1bdbaa3.png",
    className: "h-12 w-auto mx-2"
  }, {
    id: "investor-6",
    description: "MoneyGram",
    image: "/lovable-uploads/6d11866b-d8f6-462e-86ff-17d4ae2266e9.png",
    className: "h-12 w-auto mx-2"
  }, {
    id: "investor-7",
    description: "Stellar Community Fund",
    image: "/lovable-uploads/cffd39a9-e5e0-4260-9731-8f6827f643e7.png",
    className: "h-12 w-auto mx-2"
  }, {
    id: "investor-8",
    description: "Techstars",
    image: "/lovable-uploads/d0017621-d48f-4ed1-acee-784a0c90bfce.png",
    className: "h-12 w-auto mx-2"
  }];
  return <section className="bg-white py-[34px]">
      <div className="container px-4 mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-xs font-medium mb-3">
            Respaldo
          </span>
          <h2 className="text-3xl font-bold mb-4">Quiénes nos respaldan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con el apoyo de fondos de inversión & instituciones líderes en el sector
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <Logos3 heading="" logos={investors} />
        </div>
      </div>
    </section>;
};
export default BackedBySection;
