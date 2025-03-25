
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import RentInput from './RentInput';
import PaymentToggle from './PaymentToggle';
import PlanCardGrid from './PlanCardGrid';
import BenefitsSection from './BenefitsSection';
import { protectionPlans, PropertyType, getPercentageRates } from './types';
import { formatCurrency } from './PriceCalculatorUtils';
import { Briefcase, Home } from 'lucide-react';

const PriceCalculator = () => {
  const [rentAmount, setRentAmount] = useState<number>(10000);
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [propertyType, setPropertyType] = useState<PropertyType>('habitacional');
  const [prices, setPrices] = useState<{[key: string]: number}>({});
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  // Filter plans based on property type
  const filteredPlans = protectionPlans.filter(plan => 
    plan.propertyTypes.includes(propertyType)
  );

  // Calcular precios basados en el monto de renta y tipo de propiedad
  useEffect(() => {
    const calculatedPrices: {[key: string]: number} = {};
    
    protectionPlans.forEach(plan => {
      // Skip if this plan is not available for the selected property type
      if (!plan.propertyTypes.includes(propertyType)) return;
      
      // Get the correct percentages based on property type
      const percentages = getPercentageRates(plan, propertyType);
      
      let price;
      if (rentAmount <= plan.minRentLimit) {
        // Si el monto de renta es menor o igual al límite mínimo, usar precio mínimo
        price = isMonthly ? plan.minPrice.monthly : plan.minPrice.yearly;
      } else {
        // Si el monto de renta es mayor al límite, calcular por porcentaje
        price = rentAmount * (isMonthly ? percentages.monthly : percentages.yearly);
      }

      // Redondear a entero
      calculatedPrices[plan.id] = Math.round(price);
    });
    
    setPrices(calculatedPrices);
  }, [rentAmount, isMonthly, propertyType]);

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
          {/* Badge first (moved above the heading) */}
          <span className="inline-block px-3 py-1 bg-mica-green/10 text-mica-green rounded-full text-xs font-medium mb-3">
            Calculadora de protección
          </span>
          
          {/* Heading second */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 relative inline-block">
            <span className="relative z-10">Elige entre 3 productos de protección</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-mica-green/20 z-0" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0,0 C50,5 80,5 200,0 L200,8 L0,8 Z" fill="currentColor"></path>
            </svg>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Personaliza tu protección según tus necesidades como asesor inmobiliario
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
              
              {/* Property Type Toggle */}
              <PaymentToggle 
                label="Tipo de propiedad"
                options={[
                  { value: 'habitacional', label: 'Habitacional' },
                  { value: 'comercial', label: 'Comercial' }
                ]}
                selectedValue={propertyType}
                onValueChange={(value) => setPropertyType(value as PropertyType)}
                className="mb-3"
              />
              
              {/* Payment Frequency Toggle */}
              <PaymentToggle 
                label="Frecuencia de pago"
                options={[
                  { value: 'monthly', label: 'Mensual' },
                  { value: 'yearly', label: 'Anual' }
                ]}
                selectedValue={isMonthly ? 'monthly' : 'yearly'}
                onValueChange={(value) => setIsMonthly(value === 'monthly')}
              />
              
              {/* Advisor Commission Note */}
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-700">
                <p className="flex items-center font-medium mb-1">
                  <span className="mr-2">💰</span>
                  Comisiones extraordinarias para asesores
                </p>
                <p className="text-xs text-blue-600 pl-6">
                  Gana comisiones atractivas por cada cliente que protejas con Mica
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <PlanCardGrid 
                protectionPlans={filteredPlans} 
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
