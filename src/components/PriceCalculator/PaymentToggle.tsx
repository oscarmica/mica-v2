
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface PaymentToggleProps {
  isMonthly: boolean;
  setIsMonthly: (value: boolean) => void;
}

const PaymentToggle: React.FC<PaymentToggleProps> = ({ isMonthly, setIsMonthly }) => {
  return (
    <div className="flex justify-center mb-8">
      <ToggleGroup type="single" defaultValue="monthly" className="border rounded-full">
        <ToggleGroupItem 
          value="monthly" 
          className={`rounded-l-full px-6 py-2 ${isMonthly ? 'bg-mica-green text-white' : ''}`}
          onClick={() => setIsMonthly(true)}
        >
          Mensual
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="yearly" 
          className={`rounded-r-full px-6 py-2 ${!isMonthly ? 'bg-mica-green text-white' : ''}`}
          onClick={() => setIsMonthly(false)}
        >
          Anual
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default PaymentToggle;
