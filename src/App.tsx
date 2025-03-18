
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SobreNosotros from "./pages/SobreNosotros";
import Empleo from "./pages/Empleo";
import Blog from "./pages/Blog";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";
import ProteccionDeposito from "./pages/ProteccionDeposito";
import SoporteLegal from "./pages/SoporteLegal";
import DefensoriaInquilino from "./pages/DefensoriaInquilino";
import InspeccionPropiedad from "./pages/InspeccionPropiedad";
import Prensa from "./pages/Prensa";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/empleo" element={<Empleo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/prensa" element={<Prensa />} />
          <Route path="/proteccion-deposito" element={<ProteccionDeposito />} />
          <Route path="/soporte-legal" element={<SoporteLegal />} />
          <Route path="/defensoria-inquilino" element={<DefensoriaInquilino />} />
          <Route path="/inspeccion-propiedad" element={<InspeccionPropiedad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
