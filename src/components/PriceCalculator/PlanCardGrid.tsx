
import React from 'react';
import PlanCard from './PlanCard';
import { ProtectionPlan } from './types';

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 h-full">
      {protectionPlans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          price={prices[plan.id] || 0}
          isMonthly={isMonthly}
          isHovered={hoveredPlan === plan.id}
          onHover={() => setHoveredPlan(plan.id)}
          onLeave={() => setHoveredPlan(null)}
          formatCurrency={formatCurrency}
        />
      ))}
    </div>
  );
};

export default PlanCardGrid;
