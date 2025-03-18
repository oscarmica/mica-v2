
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, HeartHandshake, CheckCircle2, BarChart4, Sparkles, Users, Building } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

const MicaAdvantages = () => {
  const advantages = [{
    icon: <Clock className="h-12 w-12 p-2 bg-mica-green/10 rounded-lg text-mica-green" />,
    title: "Velocidad",
    description: "Elaboramos investigaciones y contratos en menos de 24 horas. Nuestras rentas más rápidas se cierran en menos de 4 horas."
  }, {
    icon: <Shield className="h-12 w-12 p-2 bg-mica-green/10 rounded-lg text-mica-green" />,
    title: "Cobertura",
    description: "Ofrecemos diferentes niveles de servicio, desde una simple Protección Jurídica hasta Protección Premium con 15 meses de protección contra impago y pago puntual."
  }, {
    icon: <HeartHandshake className="h-12 w-12 p-2 bg-mica-green/10 rounded-lg text-mica-green" />,
    title: "Servicio",
    description: "Estamos aquí para apoyarlos en cada paso. Nuestro equipo te acompaña desde la firma hasta la conclusión del contrato."
  }];
  
  const flexNumbers = [
    { 
      icon: <BarChart4 className="h-6 w-6 text-mica-green" />,
      number: "+15,000",
      label: "rentas protegidas"
    },
    { 
      icon: <Users className="h-6 w-6 text-mica-green" />,
      number: "+500",
      label: "agentes inmobiliarios"
    },
    { 
      icon: <Building className="h-6 w-6 text-mica-green" />,
      number: "+700",
      label: "propiedades administradas"
    }
  ];
  
  const micaDifferences = [
    {
      title: "Integración tecnológica",
      description: "Mientras otras opciones se mantienen con procesos tradicionales, nuestras soluciones tecnológicas agilizan cada etapa."
    },
    {
      title: "Verificación rápida",
      description: "Eliminamos los largos tiempos de espera con nuestro proceso de verificación de inquilinos extremadamente ágil."
    },
    {
      title: "Cobertura extendida",
      description: "Ofrecemos hasta 15 meses de protección contra impago, superando ampliamente las coberturas tradicionales."
    },
    {
      title: "Soporte constante",
      description: "No desaparecemos después de firmar. Nuestro equipo te acompaña durante toda la relación de arrendamiento."
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
            ¿Por qué trabajar con <span className="text-primary">mica</span> y no con "pólizas jurídicas"?
          </h2>
          <p className="text-muted-foreground text-lg">Protección de Renta mica es un servicio todo incluido, no te tendrás que preocupar por cargos extra.</p>
        </div>

        {/* Flex Numbers Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Nuestra experiencia respalda la confianza</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flexNumbers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-bold text-gray-800 mb-1">{item.number}</h4>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Advantages Grid */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
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

        {/* La diferencia Mica */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-slate-50 p-8 sm:p-10 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4 text-primary">
              <Sparkles className="h-10 w-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">La diferencia Mica</h3>
            <Separator className="w-24 mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combinamos tecnología avanzada con un equipo humano comprometido para ofrecer un servicio integral que va más allá de las pólizas jurídicas tradicionales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {micaDifferences.map((difference, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="mr-3 mt-1 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-mica-green" />
                </div>
                <div>
                  <h4 className="text-md font-semibold mb-1">{difference.title}</h4>
                  <p className="text-gray-600 text-sm">{difference.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 bg-slate-50 p-5 rounded-lg border border-slate-100"
          >
            <p className="text-gray-700 text-center italic">
              "A diferencia de las pólizas jurídicas tradicionales, Mica integra tecnología, agilidad y un servicio más completo. 
              Brindamos una solución integral para que tanto propietarios como inquilinos disfruten de un proceso de arrendamiento 
              más conveniente y seguro."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MicaAdvantages;
