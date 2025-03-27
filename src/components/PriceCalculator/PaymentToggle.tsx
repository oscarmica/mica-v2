
import React from 'react';
import { cn } from '@/lib/utils';

interface PaymentToggleOption {
  value: string;
  label: string;
}

interface PaymentToggleProps {
  label?: string;
  options: PaymentToggleOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const PaymentToggle: React.FC<PaymentToggleProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
  className
}) => {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <p className="text-sm text-gray-600 mb-2 font-medium">{label}</p>
      )}
      <div className="bg-slate-100 p-1 rounded-lg flex w-full">
        {options.map((option) => (
          <button
            key={option.value}
            className={cn(
              "flex-1 py-2 px-3 text-sm font-medium transition-all rounded-md text-center",
              selectedValue === option.value
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => onValueChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentToggle;
