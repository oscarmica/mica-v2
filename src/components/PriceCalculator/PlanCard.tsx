
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
  compact?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  price,
  isMonthly,
  hoveredPlan,
  setHoveredPlan,
  formatCurrency,
  compact = false
}) => {
  return (
    <motion.div 
      className={cn(
        "border flex flex-col h-full transition-all duration-300 rounded-xl",
        compact ? "p-3 sm:p-4" : "p-6 sm:p-8",
        plan.color,
        hoveredPlan === plan.id ? "shadow-lg transform -translate-y-1" : "shadow",
        plan.id === "integral" ? "md:scale-[1.02] z-10" : ""
      )}
      onMouseEnter={() => setHoveredPlan(plan.id)}
      onMouseLeave={() => setHoveredPlan(null)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center mb-2">
        <div className={cn("mr-2 p-1.5 rounded-lg", plan.bgColor)}>
          <ShieldCheck className={cn("h-4 w-4", plan.iconColor)} />
        </div>
        <h3 className="font-bold text-base">{plan.title}</h3>
      </div>
      
      {!compact && (
        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
      )}
      
      <div className="mb-3">
        <div className="text-2xl font-bold text-gray-900 flex items-end">
          {formatCurrency(price)}
          <span className="text-xs text-gray-500 ml-1 mb-1">
            {isMonthly ? '/mes' : '/año'}
          </span>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-2 mt-auto">
        <ul className="space-y-1.5">
          {plan.features.slice(0, compact ? 3 : plan.features.length).map((feature, index) => (
            <li key={index} className="flex items-start text-xs">
              <Check className={cn("mr-1 h-3.5 w-3.5 flex-shrink-0 mt-0.5", plan.iconColor)} />
              <span>{feature}</span>
            </li>
          ))}
          {compact && plan.features.length > 3 && (
            <li className="text-xs text-mica-green text-center mt-1">+ {plan.features.length - 3} beneficios más</li>
          )}
        </ul>
      </div>

      {plan.id === "integral" && (
        <div className="absolute -top-2 right-2 bg-mica-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          Recomendado
        </div>
      )}
    </motion.div>
  );
};

export default PlanCard;
