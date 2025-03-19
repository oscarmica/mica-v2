
import React from 'react';
import { motion } from 'framer-motion';
import NavHeader from '@/components/ui/nav-header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const SobreNosotros = () => {
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
              <span className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
                <span className="mr-2 text-lg">🏢</span>
                <span className="font-medium text-sm">Nuestra Historia</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
              <p className="text-mica-gray-2 text-lg">
                Conoce quiénes somos y nuestra misión de transformar el arrendamiento en México.
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
                <p className="text-mica-gray-2 mb-4">
                  En mica.rent, nuestra misión es brindar tranquilidad a los inquilinos en todo México a través de soluciones integrales que simplifiquen y aseguren el proceso de arrendamiento.
                </p>
                <p className="text-mica-gray-2">
                  Combinamos tecnología, experiencia legal y soluciones financieras para hacer que rentar sea una experiencia simple y segura para todos.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Nuestros Valores</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-xl">✨</span>
                    <div>
                      <h3 className="font-medium">Transparencia</h3>
                      <p className="text-mica-gray-2">Creemos en relaciones claras y honestas con nuestros clientes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl">🛡️</span>
                    <div>
                      <h3 className="font-medium">Protección</h3>
                      <p className="text-mica-gray-2">Defendemos los derechos de los inquilinos con pasión y dedicación.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-xl">🚀</span>
                    <div>
                      <h3 className="font-medium">Innovación</h3>
                      <p className="text-mica-gray-2">Constantemente buscamos mejores formas de resolver los problemas de arrendamiento.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6">¿Listo para comenzar?</h2>
              <p className="text-mica-gray-2 mb-8">Únete a miles de inquilinos que ya disfrutan de la protección de mica.rent</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-mica-green text-white rounded-lg px-8 py-3 font-medium"
              >
                Regístrate ahora
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SobreNosotros;
