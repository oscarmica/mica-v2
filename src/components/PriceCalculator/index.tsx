
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import RentInput from './RentInput';
import PaymentToggle from './PaymentToggle';
import PlanCardGrid from './PlanCardGrid';
import BenefitsSection from './BenefitsSection';
import { protectionPlans } from './types';
import { formatCurrency } from './PriceCalculatorUtils';

const PriceCalculator = () => {
  const [rentAmount, setRentAmount] = useState<number>(10000);
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [prices, setPrices] = useState<{
    [key: string]: number;
  }>({});
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  // Calcular precios basados en el monto de renta
  useEffect(() => {
    const calculatedPrices: {
      [key: string]: number;
    } = {};
    protectionPlans.forEach(plan => {
      let price;
      if (rentAmount <= plan.minRentLimit) {
        // Si el monto de renta es menor o igual al límite mínimo, usar precio mínimo
        price = isMonthly ? plan.minPrice.monthly : plan.minPrice.yearly;
      } else {
        // Si el monto de renta es mayor al límite, calcular por porcentaje
        price = rentAmount * (isMonthly ? plan.percentage.monthly : plan.percentage.yearly);
      }

      // Redondear a entero
      calculatedPrices[plan.id] = Math.round(price);
    });
    setPrices(calculatedPrices);
  }, [rentAmount, isMonthly]);

  return <section id="calculator" className="py-16 bg-slate-50 md:py-[50px]">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Calcula el <span className="text-mica-green">precio de protección</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecciona el precio de renta y elige entre los 3 productos que tenemos para ti
          </p>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <RentInput rentAmount={rentAmount} setRentAmount={setRentAmount} />
          <PaymentToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
          <PlanCardGrid protectionPlans={protectionPlans} prices={prices} isMonthly={isMonthly} hoveredPlan={hoveredPlan} setHoveredPlan={setHoveredPlan} formatCurrency={formatCurrency} />

          <div className="text-xs text-gray-500 mt-6 text-center">
            *Todos los precios más IVA. Precios mínimos aplicables para rentas menores según plan.
          </div>
        </motion.div>

        <BenefitsSection />
      </div>
    </section>;
};

export default PriceCalculator;
