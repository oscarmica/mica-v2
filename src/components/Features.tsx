import React from 'react';
import { cn } from '@/lib/utils';
import { ShieldCheck, Clock, FileCheck, UserCheck, BadgeCheck, Percent, Users, Home, Building } from 'lucide-react';
import { motion } from 'framer-motion';

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

// Componente para los números de logros (flex numbers)
const FlexNumbers = () => {
  const stats = [{
    icon: <FileCheck className="h-8 w-8 text-mica-green" />,
    number: "+15,000",
    label: "rentas"
  }, {
    icon: <Users className="h-8 w-8 text-mica-green" />,
    number: "+500",
    label: "agentes inmobiliarios"
  }, {
    icon: <Building className="h-8 w-8 text-mica-green" />,
    number: "+700",
    label: "propiedades administradas"
  }];
  return;
};
const Features = () => {
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
  return <section id="features" className="bg-white py-0">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Conoce nuestros productos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Qué es <span className="text-primary">Mica</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Creamos la mejor protección para el arrendamiento en México.
          </p>
        </div>
        
        {/* Flex Numbers */}
        <FlexNumbers />
        
        <div className="text-center mb-12">
          <p className="text-lg">
            Alineamos los intereses de propietario, inquilino y asesor para lograr una experiencia de <strong>renta más segura, ágil y conveniente</strong>.
          </p>
        </div>
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {/* Propietarios */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Propietarios</h3>
            <p className="text-gray-600 mb-6">Protege tu patrimonio y deja el cobro de renta en nuestras manos</p>
            <UserBenefits type="propietarios" />
          </motion.div>
          
          {/* Inquilinos */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Inquilinos</h3>
            <p className="text-gray-600 mb-6">Renta inmuebles con o sin necesidad de aval o depósitos extra.</p>
            <UserBenefits type="inquilinos" />
          </motion.div>
          
          {/* Asesores */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Asesor Inmobiliario</h3>
            <p className="text-gray-600 mb-6">Ofrece seguridad para tus clientes mientras creces tu portafolio</p>
            <UserBenefits type="asesores" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Features;