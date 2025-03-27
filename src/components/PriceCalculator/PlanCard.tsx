
import React from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ProtectionPlan } from './types';

interface PlanCardProps {
  plan: ProtectionPlan;
  price: number;
  isMonthly: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  formatCurrency: (amount: number) => string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  price,
  isMonthly,
  isHovered,
  onHover,
  onLeave,
  formatCurrency
}) => {
  // We'll use the plan's id to determine if it's recommended - in this case, let's assume 'integral' is recommended
  const isRecommended = plan.id === 'integral';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * (plan.id === 'juridica' ? 0 : plan.id === 'integral' ? 1 : 2) }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative overflow-hidden rounded-xl border transition-all
        ${isRecommended ? 'border-mica-green' : 'border-slate-200'}
        ${isHovered ? 'shadow-lg scale-[1.02] z-10' : 'shadow-sm bg-white'}
      `}
    >
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute top-0 right-0">
          <div className="bg-mica-green text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
            Recomendado
          </div>
        </div>
      )}
      
      <div className="p-5">
        {/* Plan Header */}
        <div className="mb-5">
          <h3 
            className={`text-xl font-bold mb-2 ${isRecommended ? 'text-mica-green' : 'text-gray-900'}`}
          >
            {plan.title}
          </h3>
          <p className="text-sm text-gray-500 h-12">{plan.description}</p>
        </div>
        
        {/* Price Section - Making sure all price sections have the same height */}
        <div className="mb-5 min-h-[85px] flex flex-col justify-center">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">{formatCurrency(price)}</span>
            <span className="ml-1 text-gray-500 text-sm">
              {isMonthly ? '/mes' : '/año'}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {`Para rentas ${isMonthly ? 'mensuales' : 'anuales'} ${plan.minRentLimit ? `de hasta ${formatCurrency(plan.minRentLimit)}` : ''}`}
          </p>
        </div>
        
        {/* Features List */}
        <ul className="mb-6 space-y-2">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className={`h-5 w-5 mr-2 shrink-0 ${isRecommended ? 'text-mica-green' : 'text-gray-400'}`} />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Action Button */}
        <Button 
          className={`w-full ${isRecommended ? 'bg-mica-green hover:bg-mica-green/90' : 'bg-slate-800 hover:bg-slate-700'} text-white`}
          onClick={() => window.open('https://catatumbo.mica.rent/welcome', '_blank')}
        >
          Elegir plan
        </Button>
      </div>
    </motion.div>
  );
};

export default PlanCard;
