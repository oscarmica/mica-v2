
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "framer-motion";

interface PaymentToggleProps {
  isMonthly: boolean;
  setIsMonthly: (value: boolean) => void;
}

const PaymentToggle: React.FC<PaymentToggleProps> = ({ isMonthly, setIsMonthly }) => {
  return (
    <motion.div 
      className="flex justify-center mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="bg-slate-100 p-1 rounded-full w-full max-w-xs">
        <ToggleGroup type="single" defaultValue="monthly" className="border-none w-full">
          <ToggleGroupItem 
            value="monthly" 
            className={`rounded-full py-1.5 text-xs font-medium flex-1 ${isMonthly ? 'bg-white text-mica-green shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            onClick={() => setIsMonthly(true)}
          >
            Mensual
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="yearly" 
            className={`rounded-full py-1.5 text-xs font-medium flex-1 ${!isMonthly ? 'bg-white text-mica-green shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
            onClick={() => setIsMonthly(false)}
          >
            Anual
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </motion.div>
  );
};

export default PaymentToggle;
