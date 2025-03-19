
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
    <section id="calculator" className="py-10 md:py-14 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
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
          className="text-center mb-4 md:mb-6"
        >
          <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-xs font-medium mb-2">
            Calculadora de protección
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 relative inline-block">
            <span className="relative z-10">Elige entre 3 productos de protección</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-mica-green/20 z-0" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,0 C50,5 80,5 200,0 L200,8 L0,8 Z" fill="currentColor"></path>
            </svg>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Personaliza tu protección según tus necesidades
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl p-3 sm:p-4 md:p-5 border border-slate-100 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-mica-green/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-mica-pink-baby/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 relative">
            <div className="lg:col-span-4">
              <RentInput rentAmount={rentAmount} setRentAmount={setRentAmount} />
              <PaymentToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
            </div>
            
            <div className="lg:col-span-8">
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
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculator;
