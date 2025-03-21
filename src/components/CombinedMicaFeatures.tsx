import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, FileCheck, UserCheck, BadgeCheck, Percent, Users, Home, Building, Shield, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import MicaOverviewSection from '@/components/MicaOverviewSection';

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

  return <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-mica-green/5 -z-10 transform -skew-y-3"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-200/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-blue-200/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container px-4 mx-auto max-w-7xl relative z-10">
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
      }} className="text-center max-w-3xl mx-auto mb-8">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">¿Qué es <span className="text-mica-green">mica</span>?</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-mica-green/20 z-0" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,0 C50,5 80,5 200,0 L200,8 L0,8 Z" fill="currentColor"></path>
            </svg>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Creamos la <span className="font-semibold">mejor protección de renta</span> en México
          </p>
        </motion.div>
        
        {/* Insert the MicaOverviewSection right here, between the title and the three tables */}
        <div className="mb-12">
          <MicaOverviewSection />
        </div>
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Asesores - ahora primero */}
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
          
          {/* Propietarios - ahora segundo */}
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
          
          {/* Inquilinos - ahora tercero */}
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
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-center mt-16 bg-gradient-to-r from-mica-green/20 to-blue-100/30 p-6 rounded-2xl max-w-3xl mx-auto shadow-sm">
          <p className="text-xl font-medium">
            Alineamos los intereses de propietario, inquilino y asesor para lograr una experiencia de <strong className="text-mica-green">renta más segura, ágil y conveniente</strong>.
          </p>
        </motion.div>
      </div>
    </section>;
};

export default CombinedMicaFeatures;
