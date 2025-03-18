
import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <div className="mt-8 text-center">
      <h3 className="text-xl font-semibold mb-4">Ventajas para todos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-bold mb-3 text-mica-green">Para propietarios</h4>
          <ul className="text-left space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Renta garantizada
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Inquilinos verificados
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Seguro de daños
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-bold mb-3 text-mica-green">Para inquilinos</h4>
          <ul className="text-left space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Renta sin aval
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Historial crediticio
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Proceso 100% digital
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-bold mb-3 text-mica-green">Para asesores</h4>
          <ul className="text-left space-y-2">
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Cierre de operaciones
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Comisiones garantizadas
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-mica-green">•</span>
              Respaldo legal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
