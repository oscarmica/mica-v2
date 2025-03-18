
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RentInputProps {
  rentAmount: number;
  setRentAmount: (value: number) => void;
}

const RentInput: React.FC<RentInputProps> = ({ rentAmount, setRentAmount }) => {
  return (
    <div className="mb-8">
      <Label htmlFor="rentAmount" className="text-lg font-medium mb-2 block">
        Renta mensual
      </Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500">$</span>
        </div>
        <Input
          id="rentAmount"
          type="number"
          value={rentAmount}
          onChange={(e) => setRentAmount(Number(e.target.value) || 0)}
          className="pl-8 text-lg py-6 h-auto"
          min="1000"
        />
      </div>
    </div>
  );
};

export default RentInput;
