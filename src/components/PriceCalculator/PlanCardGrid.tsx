
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
      <div className={`grid grid-cols-1 ${protectionPlans.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-2 sm:gap-3 flex-grow`}>
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
      
      <div className="text-xs text-gray-500 mt-3 py-2 px-3 text-center bg-gray-50 border border-gray-100 rounded-md font-normal">
        *Todos los precios más IVA. Precios mínimos aplicables para rentas menores según plan.
      </div>
    </div>
  );
};

export default PlanCardGrid;
