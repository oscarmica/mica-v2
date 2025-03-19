
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, FileCheck, UserCheck, BadgeCheck, Percent, Users, Home, Building, Shield, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Componente para los diferentes beneficios según el tipo de usuario
const UserBenefits = ({
  type
}: {
  type: 'propietarios' | 'inquilinos' | 'asesores';
}) => {
  const benefitsData = {
    propietarios: [{
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Investigación detallada de inquilinos'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Prevención de extinción de dominio'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Cobro de renta mensual incluido'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Pago de renta puntual'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Recuperación y desalojo en tiempo record gestionado por Mica'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Protección de rentas caídas'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Opción de adelantar rentas'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Seguro contra daños'
    }],
    inquilinos: [{
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Renta con o sin aval'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Resultado de investigación max. 24hrs'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Proceso 100% digital y sencillo'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Contrato de arrendamiento justo'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Posibilidad de diferir depósito o costos de mudanza**'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Usa los pagos para mejorar tu historial crediticio mes con mes'
    }],
    asesores: [{
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Cierra operaciones más rápido'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Ofrece seguridad y protección a tus clientes propietarios e inquilinos'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Investigación y contrato en 24hrs'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Extraordinarias comisiones'
    }, {
      icon: <ShieldCheck className="h-6 w-6 text-mica-green" />,
      text: 'Servicio seguro y ágil'
    }]
  };
  const benefits = benefitsData[type];
  return <ul className="space-y-4">
      {benefits.map((benefit, index) => <li key={index} className="flex items-start">
          <div className="mr-3 shrink-0 mt-1">
            {benefit.icon}
          </div>
          <span className="text-gray-700">{benefit.text}</span>
        </li>)}
      {type === 'inquilinos' && <li className="text-xs text-gray-500 mt-6">
          **Servicio operado por un partner Mica
        </li>}
    </ul>;
};
const CombinedMicaFeatures = () => {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Data for the flex numbers section
  const flexNumbers = [{
    icon: <FileCheck className="h-8 w-8 text-mica-green" />,
    number: "+15,000",
    label: "rentas protegidas"
  }, {
    icon: <Users className="h-8 w-8 text-mica-green" />,
    number: "+500",
    label: "agentes inmobiliarios"
  }, {
    icon: <Building className="h-8 w-8 text-mica-green" />,
    number: "+700",
    label: "propiedades administradas"
  }];

  // Características clave de Mica
  const micaKeyFeatures = [{
    icon: <Clock className="h-12 w-12 p-2 text-mica-green" />,
    title: "Velocidad",
    description: "Investigaciones y contratos en menos de 24 horas"
  }, {
    icon: <Shield className="h-12 w-12 p-2 text-mica-green" />,
    title: "Cobertura",
    description: "Hasta 12 meses de protección contra impago"
  }, {
    icon: <HeartHandshake className="h-12 w-12 p-2 text-mica-green" />,
    title: "Servicio",
    description: "Acompañamiento desde la investigación hasta la cobranza"
  }];

  // Diferencias entre Mica y pólizas jurídicas tradicionales
  const micaVsTraditional = [{
    mica: "Servicio digital y 100% en línea",
    traditional: "Procesos tradicionales y lentos"
  }, {
    mica: "Verificación de inquilinos en 24 horas",
    traditional: "Esperas de semanas para verificaciones"
  }, {
    mica: "Hasta 12 meses de protección",
    traditional: "Coberturas limitadas y restrictivas"
  }, {
    mica: "Soporte constante durante el contrato",
    traditional: "Servicio mínimo post-firma"
  }];
  return <>
      {/* Sección de características de Mica */}
      <section id="features" className="bg-white py-0">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Conoce nuestros productos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Qué es <span className="text-primary">mica</span>?
            </h2>
            <p className="text-muted-foreground text-lg">
              Creamos la mejor protección para el arrendamiento en México.
            </p>
          </div>
          
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {/* Asesores - ahora primero */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Asesor Inmobiliario</h3>
              <p className="text-gray-600 mb-6">Ofrece seguridad para tus clientes mientras creces tu portafolio</p>
              <UserBenefits type="asesores" />
            </motion.div>
            
            {/* Propietarios - ahora segundo */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Propietarios</h3>
              <p className="text-gray-600 mb-6">Protege tu patrimonio y deja el cobro de renta en nuestras manos</p>
              <UserBenefits type="propietarios" />
            </motion.div>
            
            {/* Inquilinos - ahora tercero */}
            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Inquilinos</h3>
              <p className="text-gray-600 mb-6">Renta inmuebles con o sin necesidad de aval o depósitos extra.</p>
              <UserBenefits type="inquilinos" />
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
            <p className="text-lg">
              Alineamos los intereses de propietario, inquilino y asesor para lograr una experiencia de <strong>renta más segura, ágil y conveniente</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Sección rediseñada: Por qué Mica es diferente */}
      <section id="mica-advantages" className="bg-slate-50 py-0">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Nuestra ventaja
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Por qué elegir <span className="text-primary">mica</span> y no pólizas jurídicas?
            </h2>
            <p className="text-muted-foreground text-lg">Un servicio integral para rentas seguras y sin complicaciones</p>
          </div>

          {/* Flex Numbers Section - Simplificado */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {flexNumbers.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-gray-800 mb-1">{item.number}</h4>
                  <p className="text-gray-600">{item.label}</p>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Características clave - Simplificado */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {micaKeyFeatures.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="bg-white p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>)}
          </div>

          {/* Comparativa Mica vs Pólizas Tradicionales - Simplificado */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="bg-white rounded-xl overflow-hidden shadow-sm mb-10">
            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-b">
              <h3 className="text-2xl font-bold text-center">La diferencia Mica</h3>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="text-lg font-bold mb-4 text-primary text-center">Con Mica</h4>
                  <ul className="space-y-3">
                    {micaVsTraditional.map((item, index) => <li key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{item.mica}</span>
                      </li>)}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-bold mb-4 text-gray-500 text-center">Pólizas Tradicionales</h4>
                  <ul className="space-y-3 text-gray-600">
                    {micaVsTraditional.map((item, index) => <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1">•</span>
                        <span>{item.traditional}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Testimonio/Conclusión - Simplificado */}
          <motion.div initial={{
          opacity: 0,
          y: 10
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-700 italic">
              "Mica ofrece una solución completa que integra tecnología, velocidad y servicio personalizado para que propietarios 
              e inquilinos disfruten de un proceso de arrendamiento más conveniente y seguro."
            </p>
          </motion.div>
        </div>
      </section>
    </>;
};
export default CombinedMicaFeatures;
