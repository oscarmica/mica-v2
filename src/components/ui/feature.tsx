
import { User, Shield, FileSignature, CreditCard, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-mica-green text-white">Comparativa</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                ¿Por qué elegir mica?
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Comparado con las pólizas jurídicas tradicionales, ofrecemos más ventajas a todos los involucrados.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Shield className="w-8 h-8 stroke-1 text-mica-green" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Protección completa</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Ofrecemos hasta 15 meses de protección contra impago, superando ampliamente las coberturas tradicionales.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Clock className="w-8 h-8 stroke-1 text-mica-green" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Respuesta rápida</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Verificamos inquilinos en menos de 24 horas. Nuestras rentas más rápidas se cierran en menos de 4 horas.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <FileSignature className="w-8 h-8 stroke-1 text-mica-green" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Proceso digitalizado</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Firma de contratos 100% digital sin necesidad de reuniones presenciales o papeleos innecesarios.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <CreditCard className="w-8 h-8 stroke-1 text-mica-green" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Cobro garantizado</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Mica garantiza el pago puntual al propietario, independientemente de si el inquilino paga a tiempo o no.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
