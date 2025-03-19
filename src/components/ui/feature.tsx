
import { User, Shield, FileSignature, CreditCard, Clock, Search, MousePointerClick, CreditCard as CreditCardIcon, Building, Star, HeartHandshake, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

function Feature() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full py-20 lg:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-4">
            <Badge className="bg-mica-green text-white mb-4">Comparativa</Badge>
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-2xl mx-auto font-bold">
              ¿Por qué elegir mica?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mt-4 text-gray-300">
              Comparado con las pólizas jurídicas tradicionales, ofrecemos más ventajas a todos los involucrados.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Testimonial showcase */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center bg-gradient-to-br from-mica-green/20 to-mica-green/5 rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute bottom-10 left-10 bg-gradient-to-br from-mica-green/80 to-purple-600/90 p-6 rounded-xl max-w-xs text-white shadow-lg">
                <div className="text-2xl mb-1 font-serif">"</div>
                <p className="text-xl font-medium mb-4">
                  Me gusta que todo el proceso es digital, muy rápido y no se necesita presencia física de las partes en ningún momento.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <span className="text-lg">👨‍💼</span>
                  </div>
                  <div>
                    <p className="font-semibold">Rodolfo Navarro</p>
                    <p className="text-sm text-white/80">Asesor Inmobiliario en H Cinco</p>
                    <div className="flex">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-yellow-400">{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Steps */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col space-y-6"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-gray-800 rounded-xl p-6 transition-all hover:bg-gray-700"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-mica-green/10 rounded-lg">
                    <Zap className="w-8 h-8 stroke-1 text-mica-green" />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-tight font-semibold mb-2">Proceso 100% digital</h3>
                    <p className="text-gray-300 text-base">
                      Firma de contratos digital sin necesidad de reuniones presenciales o papeleos innecesarios.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-gray-800 rounded-xl p-6 transition-all hover:bg-gray-700"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-mica-green/10 rounded-lg">
                    <Clock className="w-8 h-8 stroke-1 text-mica-green" />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-tight font-semibold mb-2">Respuesta rápida</h3>
                    <p className="text-gray-300 text-base">
                      Verificamos inquilinos en menos de 24 horas. Nuestras rentas más rápidas se cierran en menos de 4 horas.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-gray-800 rounded-xl p-6 transition-all hover:bg-gray-700"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-mica-green/10 rounded-lg">
                    <Shield className="w-8 h-8 stroke-1 text-mica-green" />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-tight font-semibold mb-2">Protección completa</h3>
                    <p className="text-gray-300 text-base">
                      Ofrecemos hasta 12 meses de protección contra impago, superando ampliamente las coberturas tradicionales.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-gray-800 rounded-xl p-6 transition-all hover:bg-gray-700"
              >
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-mica-green/10 rounded-lg">
                    <HeartHandshake className="w-8 h-8 stroke-1 text-mica-green" />
                  </div>
                  <div>
                    <h3 className="text-xl tracking-tight font-semibold mb-2">Soporte constante</h3>
                    <p className="text-gray-300 text-base">
                      No desaparecemos después de firmar. Nuestro equipo te acompaña durante toda la relación de arrendamiento.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export { Feature };
