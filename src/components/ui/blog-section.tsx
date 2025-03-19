
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => (
  <div className="w-full py-20 lg:py-40 bg-gradient-to-b from-white to-slate-50">
    <div className="container mx-auto flex flex-col gap-14">
      <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-gray-800">
          Artículos recientes
        </h4>
        <Button className="gap-4 bg-mica-green hover:bg-mica-green/90 text-white">
          Ver todos los artículos <MoveRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all">
          <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
            <img 
              src="https://mica.rent/_next/image?url=%2Fassets%2Fblog%2Fwhat-is-guarantee%2Fcover.png&w=750&q=75" 
              alt="¿Qué es un seguro de garantía de alquiler?" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">¿Qué es un seguro de garantía de alquiler?</h3>
          <p className="text-gray-600 text-base">
            Conoce cómo funciona un seguro de alquiler y cómo puede proteger tanto a propietarios como inquilinos.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all">
          <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
            <img 
              src="https://mica.rent/_next/image?url=%2Fassets%2Fblog%2Ffiador-o-garantia%2Fcover.png&w=750&q=75" 
              alt="¿Fiador o garantía de alquiler?" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">¿Fiador o garantía de alquiler?</h3>
          <p className="text-gray-600 text-base">
            Comprende las diferencias entre un fiador tradicional y una garantía de alquiler moderna.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all">
          <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
            <img 
              src="https://mica.rent/_next/image?url=%2Fassets%2Fblog%2Fasesores-inmobiliarios%2Fcover.png&w=750&q=75" 
              alt="Beneficios para asesores inmobiliarios" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">Beneficios para asesores inmobiliarios</h3>
          <p className="text-gray-600 text-base">
            Descubre cómo Mica ayuda a los asesores inmobiliarios a cerrar contratos más rápido y con mayor seguridad.
          </p>
        </div>
        <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer group transition-all">
          <div className="rounded-xl overflow-hidden aspect-video mb-4 bg-gray-100 group-hover:shadow-md transition-all">
            <img 
              src="https://mica.rent/_next/image?url=%2Fassets%2Fblog%2Fpropietarios%2Fcover.png&w=750&q=75" 
              alt="Ventajas para propietarios" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl tracking-tight font-semibold text-gray-800 group-hover:text-mica-green transition-colors">Ventajas para propietarios</h3>
          <p className="text-gray-600 text-base">
            Conoce por qué cada vez más propietarios eligen Mica para proteger sus rentas y propiedades.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export { Blog };
