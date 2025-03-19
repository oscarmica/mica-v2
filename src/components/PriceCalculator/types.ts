
export interface ProtectionPlan {
  id: string;
  title: string;
  description: string;
  features: string[];
  minPrice: {
    monthly: number;
    yearly: number;
  };
  minRentLimit: number;
  percentage: {
    monthly: number;
    yearly: number;
  };
  color: string;
  bgColor: string;
  iconColor: string;
}

export const protectionPlans: ProtectionPlan[] = [
  {
    id: "juridica",
    title: "Protección Jurídica",
    description: "Protección legal para arrendadores",
    features: [
      "Investigación en 24h",
      "Contrato de arrendamiento",
      "Firma digital",
      "Apoyo legal",
      "Gestión de cobranza",
      "Juicio recuperación de inmueble"
    ],
    minPrice: {
      monthly: 275,
      yearly: 2200
    },
    minRentLimit: 11000, // Para rentas de $11,000 o menos
    percentage: {
      monthly: 0.025, // 2.5% mensual
      yearly: 0.20 // 20% del monto de renta mensual
    },
    color: "bg-blue-50 border-blue-200",
    bgColor: "bg-blue-100", 
    iconColor: "text-blue-500"
  },
  {
    id: "integral",
    title: "Protección Integral",
    description: "4 meses de protección",
    features: [
      "Todo lo de Protección Jurídica",
      "Validación biométrica",
      "Renta segura con o sin aval",
      "Gestión de renta mensual",
      "Desalojo express",
      "Seguro de daños por inquilino"
    ],
    minPrice: {
      monthly: 300,
      yearly: 2400
    },
    minRentLimit: 8000, // Para rentas de $8,000 o menos
    percentage: {
      monthly: 0.0375, // 3.75% mensual
      yearly: 0.30 // 30% del monto de renta mensual
    },
    color: "bg-green-50 border-green-200",
    bgColor: "bg-green-100",
    iconColor: "text-mica-green"
  },
  {
    id: "premium",
    title: "Protección Premium",
    description: "12 meses de protección",
    features: [
      "Todo lo de Protección Integral",
      "Adelanto de renta",
      "Mejora de historial crediticio",
      "Atención prioritaria",
      "Garantía extendida",
      "Asesoría financiera"
    ],
    minPrice: {
      monthly: 437.50,
      yearly: 3500
    },
    minRentLimit: 7000, // Para rentas de $7,000 o menos
    percentage: {
      monthly: 0.0625, // 6.25% mensual
      yearly: 0.50 // 50% del monto de renta mensual
    },
    color: "bg-amber-50 border-amber-200",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  }
];
