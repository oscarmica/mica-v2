
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "framer-motion";

interface ToggleOption {
  value: string;
  label: string;
}

interface PaymentToggleProps {
  label?: string;
  description?: string;
  options: ToggleOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const PaymentToggle: React.FC<PaymentToggleProps> = ({ 
  label,
  description,
  options,
  selectedValue,
  onValueChange,
  className = ""
}) => {
  return (
    <motion.div 
      className={`flex justify-center mb-4 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      {(label || description) && (
        <div className="text-center mb-2">
          {label && <div className="text-sm font-medium text-gray-800">{label}</div>}
          {description && <div className="text-xs text-gray-500">{description}</div>}
        </div>
      )}
      
      <div className="bg-slate-100 p-1 rounded-full w-full max-w-xs">
        <ToggleGroup type="single" value={selectedValue} className="border-none w-full">
          {options.map((option) => (
            <ToggleGroupItem 
              key={option.value}
              value={option.value} 
              className={`rounded-full py-1.5 text-xs font-medium flex-1 ${
                selectedValue === option.value 
                  ? 'bg-white text-mica-green shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              onClick={() => onValueChange(option.value)}
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </motion.div>
  );
};

export default PaymentToggle;
