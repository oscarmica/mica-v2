
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  ClipboardCheck, 
  CreditCard, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: 'Sign Up',
    description: 'Complete our simple online form with your rental details and choose your protection plan.'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'Make Payment',
    description: 'Choose your preferred payment method and complete the secure transaction.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Get Protected',
    description: 'Receive your protection certificate and details about your coverage.'
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Ongoing Support',
    description: 'Access our 24/7 support team whenever you need assistance with your rental.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                How RentShield <span className="text-primary">Works</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our streamlined process makes it easy to get protected. Just follow these simple steps and gain peace of mind with your rental.
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                    "bg-primary/10 mr-4"
                  )}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Person signing rental protection document" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn(
                "absolute -bottom-10 -right-10 glass p-6 rounded-xl shadow-lg",
                "max-w-xs animate-float"
              )}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold">Protection Active</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                "Got protected in less than 5 minutes. The process was incredibly simple!"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
