
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  UserCheck, 
  Building, 
  Percentage 
} from 'lucide-react';
import { motion } from 'framer-motion';

const featuresList = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Deposit Protection',
    description: 'Secure your deposit with our comprehensive protection plan that ensures you get your money back.'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Quick Response',
    description: 'Get help within 24 hours for any rental issue that arises during your tenancy period.'
  },
  {
    icon: <FileCheck className="h-10 w-10 text-primary" />,
    title: 'Legal Support',
    description: 'Access to professional legal advice for any disputes or issues with your landlord or property.'
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'Tenant Advocacy',
    description: 'We represent your interests and ensure your rights as a tenant are protected at all times.'
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Property Inspection',
    description: 'Professional evaluation of property condition at move-in and move-out to prevent disputes.'
  },
  {
    icon: <Percentage className="h-10 w-10 text-primary" />,
    title: 'Affordable Plans',
    description: 'Protection plans starting at just a small percentage of your monthly rent for complete peace of mind.'
  }
];

const Features = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 }
    }
  };

  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Comprehensive Rental <span className="text-primary">Protection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of protection services to ensure your renting experience is secure, fair, and stress-free.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={cn(
                "relative p-8 rounded-2xl glass hover-card-animation",
                "border border-primary/5"
              )}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
