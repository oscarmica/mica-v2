
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  UserCheck, 
  Building, 
  Percent 
} from 'lucide-react';
import { motion } from 'framer-motion';

const featuresList = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Protección de Depósito',
    description: 'Asegura la devolución de tu depósito al finalizar tu contrato, sin complicaciones.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Proceso Rápido',
    description: 'Obtén tu protección en menos de 5 minutos, 100% en línea y sin papeleo.'
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    title: 'Soporte Legal',
    description: 'Acceso a asesoría legal profesional para cualquier disputa con tu arrendador.'
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: 'Sin Aval Requerido',
    description: 'Renta sin necesidad de un aval o fiador. Nosotros respaldamos tu contrato.'
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: 'Compatible con Cualquier Propiedad',
    description: 'Nuestro servicio funciona con todo tipo de propiedades residenciales en México.'
  },
  {
    icon: <Percent className="h-8 w-8 text-primary" />,
    title: 'Planes Accesibles',
    description: 'Paga solo un pequeño porcentaje de tu renta mensual por una protección completa.'
  }
];

const Features = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestros Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Protección Completa para <span className="text-primary">Inquilinos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de servicios de protección para asegurar que tu experiencia como inquilino sea segura y sin estrés.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={cn(
                "mica-card",
                "border border-slate-100 hover:border-primary/20"
              )}
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
