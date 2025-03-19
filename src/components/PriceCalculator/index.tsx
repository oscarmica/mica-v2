
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

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-mica-green/5 -z-10 transform -skew-y-3"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-pink-200/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200/20 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-mica-green/10 text-mica-green rounded-full text-sm font-medium mb-4">
            Calcula tu protección
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Cuánto cuesta <span className="text-mica-green">proteger tu propiedad?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selecciona el precio de renta y elige entre los 3 productos que tenemos para ti
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-3">
              <RentInput rentAmount={rentAmount} setRentAmount={setRentAmount} />
              <PaymentToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
            </div>
            
            <div className="lg:col-span-3">
              <PlanCardGrid 
                protectionPlans={protectionPlans} 
                prices={prices} 
                isMonthly={isMonthly} 
                hoveredPlan={hoveredPlan} 
                setHoveredPlan={setHoveredPlan} 
                formatCurrency={formatCurrency} 
              />
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-6 text-center">
            *Todos los precios más IVA. Precios mínimos aplicables para rentas menores según plan.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16"
        >
          <BenefitsSection />
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;
