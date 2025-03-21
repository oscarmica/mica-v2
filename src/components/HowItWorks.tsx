import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { UserSearch, Shield, FileSignature, CreditCard, Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const steps = [{
  icon: <UserSearch className="h-8 w-8 text-white" />,
  emoji: "🔍",
  title: 'Investigación de inquilinos',
  description: 'Realizamos un análisis completo del perfil de tus inquilinos para garantizar que cumplan con los requisitos necesarios.',
  details: ['Verificación de identidad y antecedentes', 'Historial crediticio y capacidad de pago', 'Referencias de arrendamientos anteriores', 'Estabilidad laboral y fuentes de ingreso']
}, {
  icon: <Shield className="h-8 w-8 text-white" />,
  emoji: "🛡️",
  title: 'Elegir tipo de protección',
  description: 'Selecciona el plan de protección que mejor se adapte a tus necesidades de arrendamiento.',
  details: ['Protección básica para tranquilidad esencial', 'Protección plus con coberturas adicionales', 'Protección total para máxima seguridad', 'Planes personalizados para propiedades especiales']
}, {
  icon: <FileSignature className="h-8 w-8 text-white" />,
  emoji: "📝",
  title: 'Firma de contratos',
  description: 'Facilitamos el proceso de firma digital de contratos entre propietarios e inquilinos de forma segura y legal.',
  details: ['Contratos personalizados según tus necesidades', 'Firma electrónica con validez legal', 'Almacenamiento seguro de documentos', 'Asesoría legal durante todo el proceso']
}, {
  icon: <CreditCard className="h-8 w-8 text-white" />,
  emoji: "💳",
  title: 'Cobro mensual de renta',
  description: 'Gestionamos el cobro puntual de la renta cada mes, asegurando que recibas tu pago a tiempo.',
  details: ['Cobros automáticos en fechas programadas', 'Notificaciones de pago para inquilinos', 'Transferencias seguras a tu cuenta bancaria', 'Seguimiento de pagos y reportes mensuales']
}];

const HowItWorks = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };
  return <section id="how-it-works" className="bg-gray-50 py-0">
      <div className="section-container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.5
      }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-mica-green/10 text-mica-green rounded-full px-4 py-1.5 mb-6">
            <span className="mr-2 text-lg">🚀</span>
            <span className="font-medium text-sm">Proceso Simple</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Cómo Funciona <span className="text-mica-green">mica</span>
          </h2>
          <p className="text-mica-gray-2 text-lg">
            Nuestro proceso simplificado facilita la gestión de tu arrendamiento de principio a fin. 
            Conoce cómo mica te acompaña en cada etapa.
          </p>
        </motion.div>
        
        <div className="hidden md:block">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => <motion.div key={index} variants={itemVariants} className="group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full hover:shadow-md transition-shadow relative overflow-hidden group-hover:border-mica-green/20">
                  <div className="absolute -right-6 -top-6 w-16 h-16 bg-mica-green rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  
                  <div className="flex items-center mb-6">
                    <div className="bg-mica-green rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-mica-green/10 rounded-full flex items-center justify-center text-mica-green font-bold text-sm mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-mica-gray-3 mb-4">{step.description}</p>
                  
                  <Collapsible className="pt-2">
                    <CollapsibleTrigger className="flex items-center text-mica-green font-medium text-sm">
                      <span>Ver más detalles</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3">
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => <li key={i} className="flex items-start">
                            <Check className="h-4 w-4 text-mica-green mr-2 mt-1 shrink-0" />
                            <span className="text-sm text-gray-600">{detail}</span>
                          </li>)}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  {index < steps.length - 1 && <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-mica-green/30" />
                    </div>}
                </div>
              </motion.div>)}
          </motion.div>
        </div>
        
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {steps.map((step, index) => <CarouselItem key={index}>
                  <Card className="border border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-6">
                        <div className="bg-mica-green rounded-full w-12 h-12 flex items-center justify-center mr-4">
                          {step.icon}
                        </div>
                        <span className="text-2xl">{step.emoji}</span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-mica-green/10 rounded-full flex items-center justify-center text-mica-green font-bold text-sm mr-3">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-mica-gray-3 mb-4">{step.description}</p>
                      
                      <Collapsible className="pt-2">
                        <CollapsibleTrigger className="flex items-center text-mica-green font-medium text-sm">
                          <span>Ver más detalles</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3">
                          <ul className="space-y-2">
                            {step.details.map((detail, i) => <li key={i} className="flex items-start">
                                <Check className="h-4 w-4 text-mica-green mr-2 mt-1 shrink-0" />
                                <span className="text-sm text-gray-600">{detail}</span>
                              </li>)}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static mr-2" />
              <CarouselNext className="static ml-2" />
            </div>
          </Carousel>
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-50px"
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="flex justify-center mt-16">
          <Button 
            className="bg-mica-green hover:bg-mica-green/90 text-white"
            onClick={() => window.location.href = "https://catatumbo.mica.rent/welcome"}
          >
            Regístrate y comienza ahora
          </Button>
        </motion.div>
      </div>
    </section>;
};

export default HowItWorks;
