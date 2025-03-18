
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Empleo = () => {
  const jobListings = [
    {
      title: "Asesor Legal",
      department: "Legal",
      location: "Ciudad de México",
      type: "Tiempo completo"
    },
    {
      title: "Desarrollador Frontend",
      department: "Tecnología",
      location: "Remoto",
      type: "Tiempo completo"
    },
    {
      title: "Especialista en Marketing Digital",
      department: "Marketing",
      location: "Ciudad de México",
      type: "Tiempo completo"
    }
  ];

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
              <span className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
                <span className="mr-2 text-lg">💼</span>
                <span className="font-medium text-sm">Únete a nuestro equipo</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Trabaja con nosotros</h1>
              <p className="text-mica-gray-2 text-lg">
                Explora las oportunidades para formar parte de la revolución del arrendamiento en México.
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">Por qué unirte a mica.rent</h2>
                <p className="text-mica-gray-2 mb-4">
                  Somos un equipo diverso y apasionado por transformar la forma en que las personas rentan en México. 
                  Ofrecemos un ambiente de trabajo dinámico, flexible y con grandes oportunidades de crecimiento.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-2xl mb-2 block">🚀</span>
                    <h3 className="font-medium">Crecimiento</h3>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-2xl mb-2 block">💡</span>
                    <h3 className="font-medium">Innovación</h3>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <span className="text-2xl mb-2 block">🌟</span>
                    <h3 className="font-medium">Impacto</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-semibold mb-6">Vacantes Disponibles</h2>
            <div className="space-y-4 mb-12">
              {jobListings.map((job, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-mica-gray-2">{job.department} • {job.location}</p>
                        <span className="inline-block mt-2 text-xs bg-mica-green/10 text-mica-green px-2 py-1 rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <Button variant="outline" className="text-mica-green border-mica-green hover:bg-mica-green/5">
                        Ver detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">¿No encuentras lo que buscas?</h2>
              <p className="text-mica-gray-2 mb-6">
                Siempre estamos abiertos a conocer talento. Envíanos tu CV y cuéntanos cómo puedes contribuir.
              </p>
              <Button className="bg-mica-green text-white">
                Enviar CV espontáneo
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Empleo;
