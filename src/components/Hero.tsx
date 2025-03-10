
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <div className="max-w-5xl mx-auto">
          {/* Background gradient effects */}
          <div className="absolute top-20 -left-64 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-subtle"></div>
          <div className="absolute bottom-0 -right-64 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-subtle delay-700"></div>
          
          <div className="text-center relative z-10">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Protect Your Rental Experience
              </span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold mb-4 text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Rent with <span className="text-primary">Confidence</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Peace of mind for tenants</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-balance"
            >
              Protect yourself from unexpected rental issues with our comprehensive tenant protection service. We've got you covered from deposit disputes to maintenance problems.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="btn-primary group">
                Get Protected Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="btn-outline">
                Learn More
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex items-center justify-center space-x-2 text-sm text-muted-foreground"
            >
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Trusted by 10,000+ renters nationwide</span>
            </motion.div>
          </div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10",
                "rounded-3xl opacity-20"
              )} />
              <img 
                src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Happy tenants in their protected apartment" 
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
