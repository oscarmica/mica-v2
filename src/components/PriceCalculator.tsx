
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Definición de los planes y sus cálculos
const protectionPlans = [
  {
    id: "juridica",
    title: "Protección Jurídica",
    description: "Sin meses de protección",
    percentage: 0.025, // 2.5% mensual
    yearlyFactor: 0.2, // 20% de un mes de renta
    minPrice: 2200,
    minRentLimit: 11000, // Para rentas de $11,000 o menos
    color: "bg-blue-100 border-blue-200"
  },
  {
    id: "integral",
    title: "Protección Integral",
    description: "4 meses de protección",
    percentage: 0.0375, // 3.75% mensual
    yearlyFactor: 0.3, // 30% de un mes de renta
    minPrice: 2400,
    minRentLimit: 8000, // Para rentas de $8,000 o menos
    color: "bg-green-100 border-green-200"
  },
  {
    id: "premium",
    title: "Protección Premium",
    description: "12 meses de protección",
    percentage: 0.0625, // 6.25% mensual
    yearlyFactor: 0.5, // 50% de un mes de renta
    minPrice: 3500,
    minRentLimit: 7000, // Para rentas de $7,000 o menos
    color: "bg-amber-100 border-amber-200"
  }
];

const PriceCalculator = () => {
  const [rentAmount, setRentAmount] = useState<number>(10000);
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [prices, setPrices] = useState<{[key: string]: number}>({});

  // Calcular precios basados en el monto de renta
  useEffect(() => {
    const calculatedPrices: {[key: string]: number} = {};
    
    protectionPlans.forEach(plan => {
      let price;
      
      if (isMonthly) {
        // Cálculo mensual
        price = Math.max(plan.minPrice, rentAmount * plan.percentage);
      } else {
        // Cálculo anual (se paga una vez al año)
        price = Math.max(plan.minPrice * 12 * 0.83, rentAmount * plan.yearlyFactor); // 17% descuento anual aprox
      }
      
      // Redondear a entero
      calculatedPrices[plan.id] = Math.round(price);
    });
    
    setPrices(calculatedPrices);
  }, [rentAmount, isMonthly]);

  // Formatear precios con formato de moneda
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Calcula el <span className="text-mica-green">precio de protección</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecciona el precio de renta y tipo de plan que mejor se adapte a tus necesidades.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8"
        >
          {/* Entrada de renta mensual */}
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

          {/* Opciones de planes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {protectionPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={cn(
                  "p-4 rounded-lg border-2 flex flex-col h-full",
                  plan.color
                )}
              >
                <h3 className="font-bold text-lg mb-1">{plan.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
                <div className="mt-auto">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(prices[plan.id] || 0)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {isMonthly ? 'mensual*' : 'anual*'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selector de frecuencia */}
          <div className="flex justify-center mt-6">
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

          <div className="text-xs text-gray-500 mt-6 text-center">
            *Todos los precios más IVA. Precios mínimos aplicables para rentas menores según plan.
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Todas las protecciones incluyen:</h3>
          <ul className="text-left max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Investigación en menos de 24h
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Renta segura con o sin aval
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Validación biométrica de identidad
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Contrato de arrendamiento
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Firma digital
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Apoyo legal
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Gestión de renta mensual
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Adelanto de renta
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Mejora de historial crediticio para inquilinos
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Desalojo express
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Gestión de cobranza
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Juicio recuperación de inmueble
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Seguro de daños por inquilinos
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
