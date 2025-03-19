
import React from 'react';
import { motion } from 'framer-motion';
import NavHeader from '@/components/ui/nav-header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Privacidad = () => {
  return (
    <>
      <NavHeader />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Política de Privacidad</h1>
              <p className="text-mica-gray-2">
                Última actualización: {new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">1. Información que Recopilamos</h2>
                <p className="text-mica-gray-2 mb-4">
                  En mica.rent, recopilamos información personal como nombre, dirección, correo electrónico y número telefónico, 
                  necesarios para proporcionar nuestros servicios de protección para inquilinos.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">2. Cómo Utilizamos tu Información</h2>
                <p className="text-mica-gray-2 mb-4">
                  Utilizamos tu información para:
                </p>
                <ul className="list-disc pl-5 text-mica-gray-2 space-y-2">
                  <li>Proporcionar y mejorar nuestros servicios</li>
                  <li>Comunicarnos contigo sobre tu cuenta o servicios</li>
                  <li>Prevenir fraudes y mejorar la seguridad de nuestros usuarios</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">3. Compartir Información</h2>
                <p className="text-mica-gray-2 mb-4">
                  No vendemos tu información personal a terceros. Podemos compartir información con proveedores de servicios 
                  que trabajan en nuestro nombre, siempre bajo estrictos acuerdos de confidencialidad.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">4. Tus Derechos</h2>
                <p className="text-mica-gray-2 mb-4">
                  Tienes derecho a acceder, corregir o eliminar tu información personal. Para ejercer estos derechos, 
                  contáctanos directamente a través de soporte@mica.rent.
                </p>
              </CardContent>
            </Card>

            <p className="text-mica-gray-2 text-center text-sm mt-12">
              Para cualquier consulta sobre nuestra política de privacidad, contáctanos en soporte@mica.rent.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacidad;
