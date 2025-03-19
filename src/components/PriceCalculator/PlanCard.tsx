
import React, { useState } from 'react';
import { Check, ShieldCheck, ChevronDown, ChevronUp, Calendar } from "lucide-react";
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
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering hover effect
    setExpanded(prev => !prev);
  };
  
  // Determine how many features to show initially
  const visibleFeatures = expanded ? plan.features : plan.features.slice(0, 3);
  const hasMoreFeatures = plan.features.length > 3;

  // Get payment guarantee months
  const protectionDetails = plan.id === "juridica" ? "Jurídica" : plan.id === "integral" ? "Pagamos hasta 4 meses de impago" : "Pagamos hasta 12 meses de impago";

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
      
      {/* Protection guarantee badge */}
      <div className={cn("flex items-center mb-2 text-xs font-medium px-2 py-1 rounded-md w-fit", 
        plan.id === "juridica" 
          ? "bg-blue-100 text-blue-700" 
          : plan.id === "integral" 
            ? "bg-green-100 text-green-700" 
            : "bg-amber-100 text-amber-700"
      )}>
        <Calendar className="h-3 w-3 mr-1 inline-block" />
        <span>{protectionDetails}</span>
      </div>
      
      <div className="mb-3">
        <div className="text-xl sm:text-2xl font-bold text-gray-900 flex items-end">
          {formatCurrency(price)}
          <span className="text-xs text-gray-500 ml-1 mb-1">
            {isMonthly ? '/mes' : '/año'}
          </span>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-2 mt-auto">
        <ul className="space-y-1.5">
          {visibleFeatures.map((feature, index) => (
            <li key={index} className="flex items-start text-xs sm:text-sm">
              <Check className={cn("mr-1 h-3.5 w-3.5 flex-shrink-0 mt-0.5", plan.iconColor)} />
              <span className="text-balance">{feature}</span>
            </li>
          ))}
        </ul>
        
        {compact && hasMoreFeatures && (
          <button 
            onClick={toggleExpanded}
            className={cn(
              "w-full mt-1.5 flex items-center justify-center text-xs font-medium gap-1 py-1 rounded-md transition-colors",
              plan.iconColor,
              "hover:bg-gray-100/70"
            )}
          >
            {expanded ? (
              <>
                <ChevronUp className="h-3 w-3" />
                <span>Mostrar menos</span>
              </>
            ) : (
              <>
                <span>+ {plan.features.length - 3} beneficios más</span>
                <ChevronDown className="h-3 w-3" />
              </>
            )}
          </button>
        )}
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
