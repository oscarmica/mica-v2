import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, FileCheck, UserCheck, BadgeCheck, Percent, Users, Home, Building, Shield, HeartHandshake, Sparkles, CheckCircle2, Wallet } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import MicaOverviewSection from '@/components/MicaOverviewSection';
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
    }, {
      icon: <Wallet className="h-6 w-6 text-mica-green" />,
      text: 'Recibe el pago de tu renta incluso cuando el inquilino se atrasa o deja de pagar'
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
  return <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-mica-green/5 -z-10 transform -skew-y-3"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-200/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-blue-200/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container px-4 mx-auto max-w-7xl relative z-10 py-0 my-0">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-3xl mx-auto">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">¿Qué es <span className="text-mica-green">mica</span>?</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-mica-green/20 z-0" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,0 C50,5 80,5 200,0 L200,8 L0,8 Z" fill="currentColor"></path>
            </svg>
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-600">
              Creamos la <span className="font-semibold">mejor protección de renta</span> en México
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              A diferencia de las pólizas tradicionales, Mica ofrece una experiencia digital rápida y eficiente
            </p>
          </div>
        </motion.div>
        
        <div className="mb-12 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: <Clock className="h-8 w-8 p-1.5 text-mica-green" />,
            title: "Investigación en 24 horas",
            description: "Evaluamos prospectos de inquilinos rápidamente para que puedas cerrar operaciones sin demoras."
          }, {
            icon: <FileCheck className="h-8 w-8 p-1.5 text-mica-green" />,
            title: "Firma digital de contratos",
            description: "Proceso 100% digital para firmar contratos desde cualquier lugar, sin necesidad de reuniones presenciales."
          }, {
            icon: <Percent className="h-8 w-8 p-1.5 text-mica-green" />,
            title: "Gestión mensual de renta",
            description: "Nos encargamos del cobro mensual para que los propietarios reciban su pago puntualmente."
          }, {
            icon: <ShieldCheck className="h-8 w-8 p-1.5 text-mica-green" />,
            title: "Desalojos express",
            description: "En caso necesario, gestionamos el proceso de desalojo de manera eficiente, protegiendo el patrimonio."
          }].map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className="h-full hover:shadow-md transition-all border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-14 h-14 bg-mica-green/10 rounded-full flex items-center justify-center shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center max-w-4xl mx-auto mb-12 px-4">
          <p className="text-gray-600 text-lg leading-relaxed">Mica ofrece soluciones innovadoras a los asesores inmobiliarios, diseñadas para proteger a propietarios e inquilinos durante el proceso de renta. Ofrecemos productos de protección que aseguran ingresos constantes para los propietarios, <span className="font-bold">incluso si el inquilino se atrasa o deja de pagar.</span></p>
        </motion.div>
        
        
        
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
      }} className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Nuestra experiencia respalda la confianza</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
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
          }].map((item, index) => <motion.div key={index} initial={{
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
        
        <motion.h3 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-2xl font-bold mb-8 text-center">
          Soluciones personalizadas para cada participante
        </motion.h3>
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg border border-gray-50 p-6 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -translate-x-10 -translate-y-20 group-hover:scale-110 transition-transform duration-500 ease-out"></div>
            <div className="relative z-10">
              <div className="p-2.5 bg-blue-100 rounded-xl w-fit mb-4">
                <Home className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Asesor Inmobiliario</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">Ofrece seguridad para tus clientes mientras creces tu portafolio</p>
              <UserBenefits type="asesores" />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg border border-gray-50 p-6 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -translate-x-10 -translate-y-20 group-hover:scale-110 transition-transform duration-500 ease-out"></div>
            <div className="relative z-10">
              <div className="p-2.5 bg-green-100 rounded-xl w-fit mb-4">
                <Building className="h-6 w-6 text-mica-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Propietarios</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">Protege tu patrimonio y deja el cobro de renta en nuestras manos</p>
              <UserBenefits type="propietarios" />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg border border-gray-50 p-6 hover:shadow-xl transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-50 rounded-full -translate-x-10 -translate-y-20 group-hover:scale-110 transition-transform duration-500 ease-out"></div>
            <div className="relative z-10">
              <div className="p-2.5 bg-amber-100 rounded-xl w-fit mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inquilinos</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">Renta inmuebles con o sin necesidad de aval o depósitos extra.</p>
              <UserBenefits type="inquilinos" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default CombinedMicaFeatures;