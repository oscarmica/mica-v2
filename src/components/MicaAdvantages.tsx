
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, HeartHandshake, CheckCircle2, BarChart4, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const MicaAdvantages = () => {
  const advantages = [
    {
      icon: <Clock className="h-12 w-12 p-2 bg-mica-green/10 rounded-lg text-mica-green" />,
      title: "Velocidad",
      description: "Elaboramos investigaciones y contratos en menos de 24 horas. Nuestras rentas más rápidas se cierran en menos de 4 horas."
    },
    {
      icon: <Shield className="h-12 w-12 p-2 bg-mica-green/10 rounded-lg text-mica-green" />,
      title: "Cobertura",
      description: "Ofrecemos diferentes niveles de servicio, desde una simple Protección Jurídica hasta Protección Premium con 15 meses de protección contra impago y pago puntual."
    },
    {
      icon: <HeartHandshake className="h-12 w-12 p-2 bg-mica-green/10 rounded-lg text-mica-green" />,
      title: "Servicio",
      description: "Estamos aquí para apoyarlos en cada paso. Nuestro equipo te acompaña desde la firma hasta la conclusión del contrato."
    }
  ];

  return (
    <section id="mica-advantages" className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestra ventaja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Por qué trabajar con <span className="text-primary">Mica</span> y no con "pólizas jurídicas"?
          </h2>
          <p className="text-muted-foreground text-lg">
            Simplificamos el proceso de renta de manera rápida, eficiente y segura, ofreciendo una experiencia superior.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-white to-slate-50 p-8 sm:p-10 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 mb-6">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 md:mb-0 text-primary">
              <Sparkles className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">La diferencia Mica</h3>
              <div className="flex space-x-4 text-sm text-gray-500 mb-2">
                <div className="flex items-center">
                  <BarChart4 className="h-4 w-4 mr-1 text-primary" />
                  <span>+15,000 rentas</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-primary" />
                  <span>+700 propiedades</span>
                </div>
              </div>
              <Separator className="my-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="flex">
              <div className="mr-3 mt-1 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-mica-green" />
              </div>
              <div>
                <h4 className="text-md font-semibold mb-1">Integración tecnológica</h4>
                <p className="text-gray-600 text-sm">
                  Mientras otras opciones se mantienen con procesos tradicionales, nuestras soluciones tecnológicas agilizan cada etapa.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-3 mt-1 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-mica-green" />
              </div>
              <div>
                <h4 className="text-md font-semibold mb-1">Verificación rápida</h4>
                <p className="text-gray-600 text-sm">
                  Eliminamos los largos tiempos de espera con nuestro proceso de verificación de inquilinos extremadamente ágil.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-3 mt-1 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-mica-green" />
              </div>
              <div>
                <h4 className="text-md font-semibold mb-1">Cobertura extendida</h4>
                <p className="text-gray-600 text-sm">
                  Ofrecemos hasta 15 meses de protección contra impago, superando ampliamente las coberturas tradicionales.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-3 mt-1 flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-mica-green" />
              </div>
              <div>
                <h4 className="text-md font-semibold mb-1">Soporte constante</h4>
                <p className="text-gray-600 text-sm">
                  No desaparecemos después de firmar. Nuestro equipo te acompaña durante toda la relación de arrendamiento.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-slate-50 p-5 rounded-lg border border-slate-100">
            <p className="text-gray-700 text-center italic">
              "A diferencia de las pólizas jurídicas tradicionales, Mica integra tecnología, agilidad y un servicio más completo. 
              Brindamos una solución integral para que tanto propietarios como inquilinos disfruten de un proceso de arrendamiento 
              más conveniente y seguro."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MicaAdvantages;
