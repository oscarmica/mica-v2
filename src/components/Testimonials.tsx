
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "RentShield saved me from losing my security deposit. Their team stepped in and resolved the dispute with my landlord quickly and professionally.",
    author: "Sarah Johnson",
    title: "Protected Tenant",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "I was skeptical at first, but when I needed help with a maintenance issue that my landlord was ignoring, RentShield's legal team got it resolved within days.",
    author: "Michael Chen",
    title: "Happy Renter",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a first-time renter, I was worried about potential issues. RentShield gave me the confidence that I wouldn't be taken advantage of. Worth every penny.",
    author: "Emma Rodriguez",
    title: "New Tenant",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What Our <span className="text-primary">Protected</span> Tenants Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Hear from tenants who have experienced the benefits of our protection services.
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
                "glass p-8 rounded-2xl relative",
                "hover-card-animation"
              )}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
