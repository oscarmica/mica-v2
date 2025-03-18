
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Cookies = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">Política de Cookies</h1>
              <p className="text-mica-gray-2">
                Última actualización: {new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">1. ¿Qué son las Cookies?</h2>
                <p className="text-mica-gray-2 mb-4">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                  Estas cookies ayudan a mejorar tu experiencia en línea al recordar tus preferencias y actividades.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">2. Cookies que Utilizamos</h2>
                <p className="text-mica-gray-2 mb-4">
                  En mica.rent utilizamos los siguientes tipos de cookies:
                </p>
                <ul className="list-disc pl-5 text-mica-gray-2 space-y-2">
                  <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
                  <li><strong>Cookies de preferencias:</strong> Permiten recordar tus configuraciones</li>
                  <li><strong>Cookies estadísticas:</strong> Nos ayudan a entender cómo interactúas con el sitio</li>
                  <li><strong>Cookies de marketing:</strong> Utilizadas para mostrarte anuncios relevantes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">3. Control de Cookies</h2>
                <p className="text-mica-gray-2 mb-4">
                  Puedes controlar y administrar las cookies en la configuración de tu navegador. Ten en cuenta que deshabilitar 
                  ciertas cookies puede afectar la funcionalidad de nuestro sitio.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">4. Cookies de Terceros</h2>
                <p className="text-mica-gray-2 mb-4">
                  Algunos de nuestros socios comerciales pueden establecer cookies en tu dispositivo. Estos terceros tienen 
                  sus propias políticas de privacidad y no tenemos acceso ni control sobre estas cookies.
                </p>
              </CardContent>
            </Card>

            <p className="text-mica-gray-2 text-center text-sm mt-12">
              Para cualquier consulta sobre nuestra política de cookies, contáctanos en soporte@mica.rent.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cookies;
