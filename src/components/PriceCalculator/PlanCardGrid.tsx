
import React from 'react';
import PlanCard from './PlanCard';
import { ProtectionPlan } from './types';
import { useIsMobile } from '@/hooks/use-mobile';

interface PlanCardGridProps {
  protectionPlans: ProtectionPlan[];
  prices: {
    [key: string]: number;
  };
  isMonthly: boolean;
  hoveredPlan: string | null;
  setHoveredPlan: (planId: string | null) => void;
  formatCurrency: (amount: number) => string;
}

const PlanCardGrid: React.FC<PlanCardGridProps> = ({
  protectionPlans,
  prices,
  isMonthly,
  hoveredPlan,
  setHoveredPlan,
  formatCurrency
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 flex-grow">
        {protectionPlans.map(plan => (
          <PlanCard 
            key={plan.id} 
            plan={plan} 
            price={prices[plan.id] || 0} 
            isMonthly={isMonthly} 
            hoveredPlan={hoveredPlan} 
            setHoveredPlan={setHoveredPlan} 
            formatCurrency={formatCurrency} 
            compact={true} 
          />
        ))}
      </div>
      
      <div className="text-sm md:text-base text-gray-700 mt-5 py-3 px-4 text-center bg-slate-100 border border-slate-200 shadow-sm rounded-lg font-medium">
        *Todos los precios más IVA. Precios mínimos aplicables para rentas menores según plan.
      </div>
    </div>
  );
};

export default PlanCardGrid;
