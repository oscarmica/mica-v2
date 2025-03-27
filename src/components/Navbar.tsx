
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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

  // Check if we're on the homepage to use anchor links, otherwise use regular links
  const isHomePage = window.location.pathname === "/";

  const navLinks = [
    { name: "Inicio", href: isHomePage ? "#" : "/" },
    { name: "Qué es mica", href: isHomePage ? "#features" : "/#features" },
    { name: "Por qué mica", href: isHomePage ? "#why-mica" : "/#why-mica" },
    { name: "Calculadora de precio", href: isHomePage ? "#calculator" : "/#calculator" },
    { name: "Cómo Funciona", href: isHomePage ? "#how-it-works" : "/#how-it-works" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-3 bg-white/95 shadow-sm backdrop-blur-sm" : "py-5 bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/c6e28439-6481-459e-ae34-c31b32ed151e.png" 
            alt="Mica Logo" 
            className="h-7"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            isHomePage || link.href.startsWith('#') ? (
              <a 
                key={index} 
                href={link.href} 
                className="text-sm font-medium text-mica-gray-1 hover:text-mica-green transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={index} 
                to={link.href} 
                className="text-sm font-medium text-mica-gray-1 hover:text-mica-green transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <Button 
            className="bg-mica-green text-white rounded-lg px-6 h-10 hover:bg-mica-green/90 group"
            onClick={() => window.location.href = "https://catatumbo.mica.rent/welcome"}
          >
            Inicia sesión
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-mica-gray-1 focus:outline-none"
          aria-label={isOpen ? "Cerrar Menú" : "Abrir Menú"}
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
            className="md:hidden bg-white border-t overflow-hidden shadow-lg"
          >
            <div className="container px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                isHomePage || link.href.startsWith('#') ? (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="py-2 text-mica-gray-1 hover:text-mica-green transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    className="py-2 text-mica-gray-1 hover:text-mica-green transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Button 
                className="bg-mica-green text-white rounded-lg w-full hover:bg-mica-green/90 group" 
                onClick={() => {
                  closeMenu();
                  window.location.href = "https://catatumbo.mica.rent/welcome";
                }}
              >
                Inicia sesión
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
