import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Leaf, Clock, Shield, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
const comparisonData = [{
  mica: "Servicio 100% digital y en línea",
  traditional: "Procesos tradicionales y lentos",
  icon: <Sparkles className="h-10 w-10 p-2" />
}, {
  mica: "Verificación en 24 horas",
  traditional: "Esperas de semanas para verificaciones",
  icon: <Clock className="h-10 w-10 p-2" />
}, {
  mica: "Hasta 12 meses de protección",
  traditional: "Coberturas limitadas y restrictivas",
  icon: <Shield className="h-10 w-10 p-2" />
}, {
  mica: "Soporte continuo durante todo el contrato",
  traditional: "Servicio mínimo post-firma",
  icon: <BarChart3 className="h-10 w-10 p-2" />
}];
const BenefitsSection = () => {
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
  return;
};
export default BenefitsSection;