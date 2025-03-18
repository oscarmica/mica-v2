
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Shield } from 'lucide-react';

const ProteccionDeposito = () => {
  const benefits = [
    "Garantía de devolución de tu depósito",
    "Intervención profesional en caso de disputas",
    "Documentación legal necesaria",
    "Soporte durante todo el proceso",
    "Protección contra descuentos injustificados"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
              <span className="mr-2 text-lg">🛡️</span>
              <span className="font-medium text-sm">Protección de Depósito</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tu depósito de garantía, <span className="text-mica-green">100% protegido</span>
            </h1>
            <p className="text-mica-gray-2 text-lg max-w-2xl mx-auto mb-8">
              Asegura la devolución completa de tu depósito con nuestro servicio especializado de protección para inquilinos.
            </p>
            <Button className="bg-mica-green text-white rounded-lg px-8 py-3 font-medium">
              Protege tu depósito ahora
            </Button>
          </motion.div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Regístrate",
                  description: "Completa el formulario con los datos de tu arrendamiento."
                },
                {
                  step: "02",
                  title: "Documenta",
                  description: "Sube fotos y documentos que evidencien el estado de la propiedad."
                },
                {
                  step: "03",
                  title: "Relájate",
                  description: "Nosotros nos encargamos de proteger tu depósito cuando finalice el contrato."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="bg-mica-green/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-mica-green font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-mica-gray-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto mb-16 bg-slate-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Beneficios de nuestra protección</h2>
                <p className="text-mica-gray-2 mb-6">
                  Con nuestro servicio de protección de depósito, obtienes mucho más que una simple garantía.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-mica-green mr-2 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-mica-green/20 rounded-full blur-3xl transform -translate-y-4 translate-x-6"></div>
                  <Shield className="h-48 w-48 text-mica-green relative z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">¿Listo para proteger tu depósito?</h2>
                <p className="text-mica-gray-2 mb-6 max-w-xl mx-auto">
                  Únete a miles de inquilinos que ya disfrutan de la tranquilidad de tener su depósito protegido con mica.rent.
                </p>
                <Button className="bg-mica-green text-white rounded-lg px-8 py-3 font-medium">
                  Comenzar ahora
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProteccionDeposito;
