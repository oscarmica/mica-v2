
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PriceCalculator from '@/components/PriceCalculator';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import CombinedMicaFeatures from '@/components/CombinedMicaFeatures';
import { Feature } from '@/components/ui/feature';
import BenefitsSection from '@/components/BenefitsSection';
import RentGuaranteeSection from '@/components/RentGuaranteeSection';
import MediaSection from '@/components/MediaSection';
import BackedBySection from '@/components/BackedBySection';
import BlogSection from '@/components/BlogSection';

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (!href) return;
        
        if (href === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return;
        }
        
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <Navbar />
        
        <main className="relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-mica-green/5 to-transparent -z-10"></div>
          <div className="absolute top-40 left-20 w-64 h-64 bg-pink-200/20 rounded-full filter blur-3xl -z-10"></div>
          <div className="absolute top-80 right-20 w-72 h-72 bg-blue-200/20 rounded-full filter blur-3xl -z-10"></div>
          
          {/* 1. Hero */}
          <Hero />
          
          {/* 2. Que es mica? */}
          <CombinedMicaFeatures />
          
          {/* Quien nos respalda */}
          <BackedBySection />
          
          {/* 3. Cobranza garantizada */}
          <RentGuaranteeSection />
          
          {/* 4. Porque elegir mica? */}
          <Feature />
          
          {/* 5. Porque elegir mica y no polizas juridicas */}
          <BenefitsSection />
          
          {/* 6. Calculadora - moved above How It Works */}
          <div id="calculator">
            <PriceCalculator />
          </div>
          
          {/* 7. Como funciona - now after calculator */}
          <HowItWorks />
          
          {/* 8. Mica en los medios */}
          <MediaSection />
          
          {/* 9. Lo que dicen nuestros asesores - Temporarily hidden */}
          {/* <Testimonials /> */}
          
          {/* 10. Blog */}
          <BlogSection />
          
          <CallToAction />
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
