import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
interface RentInputProps {
  rentAmount: number;
  setRentAmount: (value: number) => void;
}
const RentInput: React.FC<RentInputProps> = ({
  rentAmount,
  setRentAmount
}) => {
  return <motion.div className="mb-8" initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.3
  }}>
      <Label htmlFor="rentAmount" className="text-lg font-medium mb-3 block text-mica-gray-1">
        Renta mensual
      </Label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="text-mica-green font-semibold">$</span>
        </div>
        <Input id="rentAmount" type="number" value={rentAmount} onChange={e => setRentAmount(Number(e.target.value) || 0)} className="pl-8 text-lg py-6 h-auto border-2 border-slate-200 focus-visible:border-mica-green/80 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-200 shadow-sm" min="1000" placeholder="Ingresa el monto de renta" />
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-mica-gray-3 text-sm">
          MXN/mes
        </div>
      </div>
      
    </motion.div>;
};
export default RentInput;