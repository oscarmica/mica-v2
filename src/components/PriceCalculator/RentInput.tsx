
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { DollarSign, Calculator } from "lucide-react";

interface RentInputProps {
  rentAmount: number;
  setRentAmount: (value: number) => void;
}

const RentInput: React.FC<RentInputProps> = ({
  rentAmount,
  setRentAmount
}) => {
  return (
    <motion.div className="mb-10" initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.3
    }}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
        <Calculator className="h-8 w-8 text-mica-green hidden sm:block" />
        <h3 className="text-2xl font-bold text-center text-mica-gray-1">
          ¿Cuánto es tu renta mensual?
        </h3>
      </div>
      
      <div className="relative group mx-auto max-w-md">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <DollarSign className="h-6 w-6 text-mica-green" />
        </div>
        <Input 
          id="rentAmount" 
          type="number" 
          value={rentAmount} 
          onChange={e => setRentAmount(Number(e.target.value) || 0)} 
          className="pl-12 pr-24 text-xl py-7 h-auto border-2 border-slate-200 focus-visible:border-mica-green/80 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-200 shadow-md hover:shadow-lg rounded-xl text-center font-medium" 
          min="1000" 
          placeholder="Ingresa el monto de renta" 
        />
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-mica-gray-3 text-sm font-medium bg-slate-100 px-3 rounded-md h-10 my-auto">
          MXN/mes
        </div>
        
        <div className="mt-2 text-center text-mica-gray-3 text-sm">
          Ingresa el monto de tu renta mensual para calcular nuestros planes
        </div>
      </div>
    </motion.div>
  );
};

export default RentInput;
