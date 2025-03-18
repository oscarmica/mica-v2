
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

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

        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <CheckCircle2 className="h-6 w-6 text-mica-green" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">La diferencia Mica</h4>
              <p className="text-gray-600">
                A diferencia de las pólizas jurídicas tradicionales, Mica integra tecnología, agilidad y un servicio más completo. 
                Mientras otras opciones ofrecen principalmente protección legal, nosotros brindamos una solución integral que incluye 
                verificación rápida, cobertura extendida y soporte constante, todo ello diseñado para que tanto propietarios como 
                inquilinos disfruten de un proceso de arrendamiento más conveniente y seguro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicaAdvantages;
