
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "mica.rent me salvó de perder mi depósito. Su equipo intervino y resolvió la disputa con mi arrendador de manera rápida y profesional.",
    author: "Gabriela Rodríguez",
    title: "Inquilina Protegida",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Al principio dudaba, pero cuando necesité ayuda con un problema de mantenimiento que mi arrendador ignoraba, el equipo legal de mica.rent lo resolvió en días.",
    author: "Miguel Álvarez",
    title: "Inquilino Satisfecho",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Como inquilina por primera vez, estaba preocupada por posibles problemas. mica.rent me dio la confianza de que no sería aprovechada. Vale cada peso.",
    author: "Daniela Morales",
    title: "Nueva Inquilina",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#fdf2f8]">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Lo que Dicen Nuestros <span className="text-primary">Inquilinos</span> Protegidos
            </h2>
            <p className="text-slate-600 text-lg">
              No solo confíes en nuestra palabra. Escucha a los inquilinos que han experimentado los beneficios de nuestros servicios de protección.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-white p-8 rounded-xl border border-slate-100 shadow-sm",
                "hover:border-primary/20 hover:shadow-md transition-all duration-300"
              )}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
