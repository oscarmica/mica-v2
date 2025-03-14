
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, UserCheck, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  const benefits = [
    { icon: <ShieldCheck className="h-5 w-5" />, text: "Protección del depósito" },
    { icon: <Clock className="h-5 w-5" />, text: "Soporte 24/7" },
    { icon: <UserCheck className="h-5 w-5" />, text: "Asistencia legal" },
    { icon: <BadgeCheck className="h-5 w-5" />, text: "Renta sin aval" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={cn(
            "rounded-3xl overflow-hidden relative",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-mica-green via-mica-green to-emerald-600 z-0"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 z-0">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white rounded-full filter blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white rounded-full filter blur-2xl"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-10 md:p-16">
            <div>
              <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <span className="mr-2 text-lg">🎁</span>
                <span>Oferta por Tiempo Limitado</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                Protégete Hoy Mismo
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Únete a miles de inquilinos protegidos en todo México. Regístrate ahora y recibe tu primer mes de protección con 50% de descuento.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-white/90">
                    <div className="mr-3 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-mica-green hover:bg-white/90 transition-all duration-300 shadow-lg group"
                >
                  Comienza Ahora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50"
                >
                  Contactar Ventas
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white shadow-xl"
              >
                <div className="bg-white/10 inline-block p-3 rounded-xl mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Planes de Protección</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    <span>Plan Básico - $199/mes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    <span>Plan Estándar - $299/mes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    <span>Plan Premium - $499/mes</span>
                  </li>
                </ul>
                <div className="bg-white/10 p-4 rounded-xl text-sm">
                  <p className="font-medium">Todos los planes incluyen:</p>
                  <p className="text-white/70 mt-1">Protección del depósito, soporte 24/7 y asistencia legal para disputas.</p>
                </div>
                <Button
                  className="bg-white text-mica-green hover:bg-white/90 w-full mt-6"
                >
                  Ver todos los planes
                </Button>
              </motion.div>
              
              {/* Floating badge */}
              <div className="absolute -top-5 -right-5 bg-amber-400 text-amber-900 rounded-full py-1.5 px-4 font-medium text-sm shadow-lg transform rotate-3">
                ¡50% de descuento!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
