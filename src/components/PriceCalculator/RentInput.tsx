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
  return <motion.div className="mb-4 bg-white rounded-xl p-4 shadow-md border border-slate-100" initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.3
  }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-flex items-center justify-center p-2 bg-mica-green/10 rounded-full">
          <Calculator className="h-5 w-5 text-mica-green" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">
            ¿Cuánto es tu renta mensual?
          </h3>
          <p className="text-xs text-gray-500">
            Ingresa el monto para calcular tu protección
          </p>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <DollarSign className="h-4 w-4 text-mica-green" />
        </div>
        <Input id="rentAmount" type="number" value={rentAmount} onChange={e => setRentAmount(Number(e.target.value) || 0)} className="pl-8 pr-16 text-base py-5 h-auto border border-slate-200 focus-visible:border-mica-green/80 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-200 shadow-sm rounded-lg" min="1000" placeholder="10,000" />
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none bg-mica-green/10 text-mica-green text-xs font-medium px-2 rounded-lg h-6 my-auto">
          MXN/mes
        </div>
      </div>
      
      
    </motion.div>;
};
export default RentInput;