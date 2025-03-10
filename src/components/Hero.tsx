
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
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
              Smart <span className="text-primary">Protection</span> for Smart Renters
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-balance"
            >
              Secure your rental journey with our comprehensive protection. From deposits to disputes, 
              we've got you covered every step of the way.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-primary text-white rounded-full px-8 py-6 text-base h-auto group">
                Start Your Protection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="border-2 border-slate-200 bg-white text-slate-800 hover:bg-slate-50 rounded-full px-8 py-6 text-base h-auto">
                Learn More
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex items-center justify-center space-x-2 text-sm text-slate-500"
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
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Happy tenants in their protected apartment" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
