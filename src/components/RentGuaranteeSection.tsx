
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RentGuaranteeSection = () => {
  return (
    <section id="garantia" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-mica-green/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-mica-blue-baby/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Chip positioned above the heading */}
          <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-xs font-medium mb-3">
            Nuestra promesa
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Cobranza garantizada
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Con mica, los propietarios reciben su renta, incluso si el inquilino se atrasa o deja de pagar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: "Cobro de renta",
            description: "Mica se encarga del cobro mensual de la renta a los inquilinos."
          }, {
            title: "Pago puntual",
            description: "Garantizamos que el propietario reciba su pago sin importar si el inquilino se atrasa."
          }, {
            title: "Protección completa",
            description: "Cubrimos hasta 12 meses de renta y gastos legales en caso de desalojo."
          }].map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: index * 0.1 }} 
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow border-gray-100">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-mica-green text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 hover:bg-mica-green/90 transition-colors"
            onClick={() => {
              const calculatorSection = document.getElementById('calculator');
              if (calculatorSection) {
                calculatorSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Ver planes de protección <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RentGuaranteeSection;
