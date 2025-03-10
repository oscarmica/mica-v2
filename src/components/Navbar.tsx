
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-3 glass" : "py-5 bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">RentShield</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="btn-primary">Get Protected</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="container px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="py-2 text-foreground/80 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
              <Button className="btn-primary w-full" onClick={closeMenu}>
                Get Protected
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
