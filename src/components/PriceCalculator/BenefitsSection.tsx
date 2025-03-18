
import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Beneficios de usar Mica</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border border-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Para propietarios</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Inquilinos verificados</span>
            </li>
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Garantía de pago puntual</span>
            </li>
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Protección contra daños</span>
            </li>
          </ul>
        </div>
        
        <div className="p-4 border border-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Para inquilinos</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Renta sin aval</span>
            </li>
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Proceso digitalizado</span>
            </li>
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Soporte legal incluido</span>
            </li>
          </ul>
        </div>
        
        <div className="p-4 border border-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Para asesores inmobiliarios</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Cierre de operaciones más rápido</span>
            </li>
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Comisiones adicionales</span>
            </li>
            <li className="flex items-start">
              <span className="text-mica-green mr-2">✓</span>
              <span>Herramientas digitales</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
