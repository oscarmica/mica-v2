
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const CallToAction = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={cn(
            "rounded-3xl p-10 md:p-16 relative overflow-hidden",
            "bg-gradient-to-br from-primary/90 to-primary/70 text-white"
          )}
        >
          {/* Background elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Limited Time Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Get Protected Today
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join thousands of protected tenants nationwide. Sign up now and receive your first month of protection at 50% off.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 group"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-dark rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-semibold mb-4">Protection Plans</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-primary/30 flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    <span>Basic Protection - $9.99/month</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-primary/30 flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    <span>Standard Protection - $19.99/month</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-primary/30 flex items-center justify-center">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    <span>Premium Protection - $29.99/month</span>
                  </li>
                </ul>
                <div className="bg-white/10 p-4 rounded-xl text-sm">
                  <p className="font-medium">All plans include:</p>
                  <p className="text-white/70 mt-1">Deposit protection, 24/7 support, and legal assistance for disputes.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
