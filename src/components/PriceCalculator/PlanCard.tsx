
import React from 'react';
import { Check, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProtectionPlan } from './types';

interface PlanCardProps {
  plan: ProtectionPlan;
  price: number;
  isMonthly: boolean;
  hoveredPlan: string | null;
  setHoveredPlan: (planId: string | null) => void;
  formatCurrency: (amount: number) => string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  price,
  isMonthly,
  hoveredPlan,
  setHoveredPlan,
  formatCurrency
}) => {
  return (
    <motion.div 
      className={cn(
        "p-6 rounded-lg border-2 flex flex-col h-full transition-all duration-300",
        plan.color,
        hoveredPlan === plan.id ? "shadow-lg transform -translate-y-1" : ""
      )}
      onMouseEnter={() => setHoveredPlan(plan.id)}
      onMouseLeave={() => setHoveredPlan(null)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center mb-3">
        <ShieldCheck className={cn("mr-2 h-5 w-5", plan.iconColor)} />
        <h3 className="font-bold text-lg">{plan.title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
      
      <div className="mb-4">
        <div className="text-3xl font-bold text-gray-900">
          {formatCurrency(price)}
        </div>
        <div className="text-sm text-gray-500">
          {isMonthly ? 'mensual*' : 'anual*'}
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4 mt-auto">
        <h4 className="font-semibold text-sm mb-2">Incluye:</h4>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <Check className={cn("mr-2 h-4 w-4 flex-shrink-0 mt-0.5", plan.iconColor)} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default PlanCard;
