
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
        "p-8 rounded-2xl border-2 flex flex-col h-full transition-all duration-300",
        plan.color,
        hoveredPlan === plan.id ? "shadow-xl transform -translate-y-2" : "shadow-md",
        plan.id === "integral" ? "lg:scale-105 z-10" : ""
      )}
      onMouseEnter={() => setHoveredPlan(plan.id)}
      onMouseLeave={() => setHoveredPlan(null)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className={cn("mr-3 p-2 rounded-lg", plan.bgColor)}>
          <ShieldCheck className={cn("h-6 w-6", plan.iconColor)} />
        </div>
        <h3 className="font-bold text-xl">{plan.title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-6">{plan.description}</p>
      
      <div className="mb-6">
        <div className="text-4xl font-bold text-gray-900 flex items-end">
          {formatCurrency(price)}
          <span className="text-sm text-gray-500 ml-1 mb-1.5">
            {isMonthly ? '/mes*' : '/año*'}
          </span>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6 mt-auto">
        <h4 className="font-semibold text-sm mb-4">Incluye:</h4>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <Check className={cn("mr-2 h-5 w-5 flex-shrink-0 mt-0.5", plan.iconColor)} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {plan.id === "integral" && (
        <div className="absolute -top-4 right-4 bg-mica-green text-white text-xs font-bold px-3 py-1 rounded-full">
          Recomendado
        </div>
      )}
    </motion.div>
  );
};

export default PlanCard;
