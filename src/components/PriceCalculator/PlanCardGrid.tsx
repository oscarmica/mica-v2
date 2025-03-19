
import React from 'react';
import PlanCard from './PlanCard';
import { ProtectionPlan } from './types';
import { useIsMobile } from '@/hooks/use-mobile';

interface PlanCardGridProps {
  protectionPlans: ProtectionPlan[];
  prices: {[key: string]: number};
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 h-full">
      {protectionPlans.map((plan) => (
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
  );
};

export default PlanCardGrid;
