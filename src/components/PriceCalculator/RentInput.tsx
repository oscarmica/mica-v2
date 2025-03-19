
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { DollarSign, Calculator } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface RentInputProps {
  rentAmount: number;
  setRentAmount: (value: number) => void;
}

const RentInput: React.FC<RentInputProps> = ({
  rentAmount,
  setRentAmount
}) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="mb-12 bg-white rounded-2xl p-4 sm:p-8 shadow-lg border border-slate-100"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center gap-3 mb-5 sm:mb-7">
        <div className="inline-flex items-center justify-center p-3 bg-mica-green/10 rounded-full mb-2">
          <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-mica-green" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 relative px-2">
          <span className="relative inline-block">
            ¿Cuánto es tu renta mensual?
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-mica-green/20" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,0 C50,5 80,5 200,0 L200,8 L0,8 Z" fill="currentColor"></path>
            </svg>
          </span>
        </h3>
        <p className="text-sm sm:text-base text-center text-gray-500 max-w-md mx-auto mt-2 px-2">
          Ingresa el monto de tu renta mensual para calcular nuestros planes de protección personalizados
        </p>
      </div>
      
      <div className="relative group mx-auto max-w-md px-2 sm:px-0">
        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
          <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-mica-green" />
        </div>
        <Input 
          id="rentAmount" 
          type="number" 
          value={rentAmount} 
          onChange={e => setRentAmount(Number(e.target.value) || 0)} 
          className="pl-10 sm:pl-12 pr-16 sm:pr-24 text-lg sm:text-xl py-6 sm:py-8 h-auto border-2 border-slate-200 focus-visible:border-mica-green/80 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-200 shadow-md hover:shadow-lg rounded-xl text-center font-medium" 
          min="1000" 
          placeholder="10,000" 
        />
        <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center pointer-events-none bg-mica-green/10 text-mica-green text-xs sm:text-sm font-medium px-2 sm:px-4 rounded-lg h-8 sm:h-10 my-auto">
          MXN/mes
        </div>
        
        <div className="mt-4 text-center">
          <div className="inline-flex items-center bg-amber-50 text-amber-700 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm">
            <span className="font-medium">Consejo:</span>
            <span className="ml-1">El precio mínimo varía según el plan que elijas</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RentInput;
