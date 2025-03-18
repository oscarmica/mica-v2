import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Star, Quote, CheckCircle } from 'lucide-react';
const testimonials = [{
  quote: "mica.rent me salvó de perder mi depósito. Su equipo intervino y resolvió la disputa con mi arrendador de manera rápida y profesional.",
  author: "Gabriela Rodríguez",
  title: "Inquilina Protegida",
  rating: 5,
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  highlight: "Resolución de disputas"
}, {
  quote: "Al principio dudaba, pero cuando necesité ayuda con un problema de mantenimiento que mi arrendador ignoraba, el equipo legal de mica.rent lo resolvió en días.",
  author: "Miguel Álvarez",
  title: "Inquilino Satisfecho",
  rating: 5,
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  highlight: "Soporte legal efectivo"
}, {
  quote: "Como inquilina por primera vez, estaba preocupada por posibles problemas. mica.rent me dio la confianza de que no sería aprovechada. Vale cada peso.",
  author: "Daniela Morales",
  title: "Nueva Inquilina",
  rating: 5,
  image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  highlight: "Tranquilidad para nuevos inquilinos"
}];
const Testimonials = () => {
  return <section id="testimonials" className="bg-[#fdf2f8] py-0">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5
        }}>
            <div className="inline-flex items-center bg-pink-100 text-pink-600 rounded-full px-4 py-1.5 mb-6">
              <span className="mr-2 text-lg">❤️</span>
              <span className="font-medium text-sm">Testimonios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Lo que Dicen Nuestros <span className="text-primary">Inquilinos</span> Protegidos
            </h2>
            <p className="text-slate-600 text-lg">
              No solo confíes en nuestra palabra. Escucha a los inquilinos que han experimentado los beneficios de nuestros servicios de protección.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="relative group">
              <div className={cn("bg-white p-8 rounded-xl border border-pink-100 shadow-sm", "hover:border-pink-200 hover:shadow-md transition-all duration-300 h-full")}>
                <div className="absolute -top-3 -right-3 bg-pink-100 rounded-full p-1.5">
                  <Quote className="h-5 w-5 text-pink-500" />
                </div>
                
                <div className="flex space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
                </div>
                
                <div className="inline-flex items-center bg-pink-50 text-pink-600 rounded-full px-3 py-1 text-xs font-medium mb-4">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {testimonial.highlight}
                </div>
                
                <p className="text-slate-600 mb-6 relative z-10">"{testimonial.quote}"</p>
                
                <div className="mt-auto pt-4 border-t border-pink-50 flex items-center">
                  <img src={testimonial.image} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-white ring-2 ring-pink-50" loading="lazy" />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} className="flex justify-center mt-12">
          
        </motion.div>
      </div>
    </section>;
};
export default Testimonials;