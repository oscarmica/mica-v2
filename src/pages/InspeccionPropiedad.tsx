
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const InspeccionPropiedad = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
              <span className="mr-2 text-lg">🔍</span>
              <span className="font-medium text-sm">Inspección de Propiedad</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentación <span className="text-mica-green">profesional</span> del estado de tu inmueble
            </h1>
            <p className="text-mica-gray-2 text-lg max-w-2xl mx-auto mb-8">
              Inspección detallada que documenta el estado inicial y final de la propiedad para proteger tu depósito.
            </p>
            <Button className="bg-mica-green text-white rounded-lg px-8 py-3 font-medium">
              Agendar inspección
            </Button>
          </motion.div>

          {/* Content placeholder */}
          <Card className="max-w-4xl mx-auto mb-16">
            <CardContent className="p-8 text-center">
              <Search className="h-16 w-16 mx-auto mb-4 text-mica-green" />
              <h2 className="text-2xl font-bold mb-4">Página en desarrollo</h2>
              <p className="text-mica-gray-2">
                Estamos trabajando en el contenido detallado de esta página. Pronto encontrarás aquí toda la información 
                sobre nuestros servicios de inspección de propiedad.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default InspeccionPropiedad;
