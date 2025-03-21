import { User, Shield, FileSignature, CreditCard, Clock, Search, MousePointerClick, CreditCard as CreditCardIcon, Building, Star, HeartHandshake, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

function Feature() {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  };
  return <div id="why-mica" className="w-full py-20 bg-gradient-to-b from-white to-slate-50 text-gray-800 relative overflow-hidden lg:py-[30px]">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-mica-green/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-mica-pink-baby/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className="flex flex-col gap-10">
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-4">
            <Badge className="bg-mica-green text-white mb-4 px-4 py-1.5">Comparativa</Badge>
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-2xl mx-auto font-bold text-gray-800">
              ¿Por qué elegir mica?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-600">
              Comparado con las pólizas jurídicas tradicionales, ofrecemos más ventajas a todos los involucrados.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Testimonial showcase */}
            <motion.div variants={itemVariants} className="flex items-center justify-center bg-gradient-to-br from-mica-green/10 to-mica-blue-baby/10 rounded-2xl p-8 relative overflow-hidden border border-gray-100 shadow-sm">
              <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl max-w-xs text-gray-800 shadow-lg border border-gray-100">
                <div className="text-2xl mb-1 font-serif text-mica-green">"</div>
                <p className="text-xl font-medium mb-4">
                  Me gusta que todo el proceso es digital, muy rápido y no se necesita presencia física de las partes en ningún momento.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-mica-green/20 flex items-center justify-center mr-3">
                    <span className="text-lg">👨‍💼</span>
                  </div>
                  <div>
                    <p className="font-semibold">Rodolfo Navarro</p>
                    <p className="text-sm text-gray-500">Asesor Inmobiliario en H Cinco</p>
                    <div className="flex">
                      {"★★★★★".split("").map((star, i) => <span key={i} className="text-yellow-400">{star}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Steps */}
            <motion.div variants={itemVariants} className="flex flex-col space-y-6">
              <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-mica-green/10 rounded-lg">
                    <Zap className="w-8 h-8 stroke-1 text-mica-green" />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-tight font-semibold mb-2 text-gray-800">Proceso 100% digital</h3>
                    <p className="text-gray-600 text-base">
                      Firma de contratos digital sin necesidad de reuniones presenciales o papeleos innecesarios.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-mica-green/10 rounded-lg">
                    <Clock className="w-8 h-8 stroke-1 text-mica-green" />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-tight font-semibold mb-2 text-gray-800">Respuesta rápida</h3>
                    <p className="text-gray-600 text-base">
                      Verificamos inquilinos en menos de 24 horas. Nuestras rentas más rápidas se cierran en menos de 4 horas.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-mica-green/10 rounded-lg">
                    <Shield className="w-8 h-8 stroke-1 text-mica-green" />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-tight font-semibold mb-2 text-gray-800">Protección completa</h3>
                    <p className="text-gray-600 text-base">
                      Ofrecemos hasta 12 meses de protección contra impago, superando ampliamente las coberturas tradicionales.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-xl p-6 transition-all hover:shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-mica-green/10 rounded-lg">
                    <HeartHandshake className="w-8 h-8 stroke-1 text-mica-green" />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-tight font-semibold mb-2 text-gray-800">Soporte constante</h3>
                    <p className="text-gray-600 text-base">
                      No desaparecemos después de firmar. Nuestro equipo te acompaña durante toda la relación de arrendamiento.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>;
}

export { Feature };
