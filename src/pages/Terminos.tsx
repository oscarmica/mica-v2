
import React from 'react';
import { motion } from 'framer-motion';
import NavHeader from '@/components/ui/nav-header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Terminos = () => {
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
              <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>
              <p className="text-mica-gray-2">
                Última actualización: {new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">1. Aceptación de Términos</h2>
                <p className="text-mica-gray-2 mb-4">
                  Al acceder y utilizar los servicios de mica.rent, aceptas estar legalmente obligado por estos Términos y Condiciones. 
                  Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder a nuestros servicios.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">2. Descripción del Servicio</h2>
                <p className="text-mica-gray-2 mb-4">
                  mica.rent ofrece servicios de protección y asesoría para inquilinos en México, que incluyen protección de depósito, 
                  soporte legal, defensoría del inquilino e inspección de propiedad. Estos servicios están sujetos a cambios a 
                  discreción de mica.rent.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">3. Elegibilidad</h2>
                <p className="text-mica-gray-2 mb-4">
                  Para utilizar los servicios de mica.rent, debes ser mayor de edad y tener la capacidad legal para celebrar 
                  contratos vinculantes. Al registrarte, confirmas que cumples con estos requisitos.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">4. Cuentas de Usuario</h2>
                <p className="text-mica-gray-2 mb-4">
                  Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y aceptas la responsabilidad 
                  por todas las actividades que ocurran bajo tu cuenta.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">5. Política de Pagos</h2>
                <p className="text-mica-gray-2 mb-4">
                  Los precios de los servicios se indican en nuestra plataforma. Los pagos se procesan a través de nuestros 
                  proveedores de servicios de pago autorizados.
                </p>
              </CardContent>
            </Card>

            <p className="text-mica-gray-2 text-center text-sm mt-12">
              Para consultas sobre estos Términos y Condiciones, contáctanos en soporte@mica.rent.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terminos;
