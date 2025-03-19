import React from 'react';
import { motion } from 'framer-motion';
import NavHeader from '@/components/ui/nav-header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const Prensa = () => {
  const pressReleases = [
    {
      title: "mica.rent anuncia nueva ronda de financiamiento",
      date: "15 Marzo, 2023",
      excerpt: "La startup de protección para inquilinos asegura inversión de $2M para expandir sus servicios en México."
    },
    {
      title: "mica.rent lanza nueva plataforma digital",
      date: "10 Enero, 2023",
      excerpt: "La renovada plataforma ofrece servicios integrales de protección para inquilinos con un proceso 100% digital."
    },
    {
      title: "mica.rent alcanza los 10,000 usuarios activos",
      date: "5 Noviembre, 2022",
      excerpt: "La startup celebra este hito y comparte historias de éxito de inquilinos que han utilizado sus servicios."
    }
  ];

  return (
    <>
      <NavHeader />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
                <span className="mr-2 text-lg">📰</span>
                <span className="font-medium text-sm">Sala de Prensa</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Prensa</h1>
              <p className="text-mica-gray-2 text-lg max-w-2xl mx-auto">
                Mantente al día con las últimas noticias y comunicados de mica.rent.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Comunicados de Prensa</h2>
            <div className="space-y-6 mb-12">
              {pressReleases.map((release, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-mica-green/10 rounded-full flex items-center justify-center shrink-0">
                        <FileText className="h-5 w-5 text-mica-green" />
                      </div>
                      <div>
                        <div className="text-sm text-mica-gray-2 mb-1">{release.date}</div>
                        <h3 className="font-semibold text-lg mb-2">{release.title}</h3>
                        <p className="text-mica-gray-2">{release.excerpt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Contacto para Medios</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-mica-gray-2 mb-4">
                    Para consultas de prensa, entrevistas o más información, por favor contacta a nuestro equipo de relaciones públicas:
                  </p>
                  <div className="space-y-2 text-mica-gray-2">
                    <p>Email: prensa@mica.rent</p>
                    <p>Teléfono: +52 55 9876 5432</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-mica-gray-2 text-sm">
                Descarga nuestro kit de prensa con logotipos, imágenes y más información sobre mica.rent.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Prensa;
