
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  ClipboardCheck, 
  CreditCard, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: 'Regístrate',
    description: 'Completa nuestro formulario en línea con los detalles de tu renta y elige tu plan de protección.'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'Realiza el Pago',
    description: 'Elige tu método de pago preferido y completa la transacción de forma segura.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Obtén Protección',
    description: 'Recibe tu certificado de protección y los detalles de tu cobertura al instante.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Soporte Continuo',
    description: 'Accede a nuestro equipo de soporte 24/7 cuando necesites asistencia con tu renta.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Proceso Simple
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Cómo Funciona <span className="text-primary">mica.rent</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nuestro proceso simplificado facilita la obtención de protección. Sigue estos sencillos pasos y obtén tranquilidad con tu renta.
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                    "bg-primary/10 mr-4"
                  )}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10"></div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Persona firmando documentos de protección de renta" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn(
                "absolute -bottom-10 -right-10 glass p-6 rounded-xl shadow-lg",
                "max-w-xs animate-float"
              )}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Protección Activa</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                "Me tomó menos de 5 minutos obtener mi protección. ¡El proceso fue increíblemente sencillo!"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
