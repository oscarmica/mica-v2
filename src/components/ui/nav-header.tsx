
"use client"; 

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close menu when screen size changes
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Calculadora", href: "#calculator" },
    { name: "Servicios", href: "#features" },
    { name: "Ventajas", href: "#mica-advantages" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="container fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 mx-auto">
      <Link to="/" className="flex items-center z-10">
        <img 
          src="/public/lovable-uploads/c6e28439-6481-459e-ae34-c31b32ed151e.png" 
          alt="Mica Logo" 
          className="h-8"
        />
      </Link>

      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-20 block p-2"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-mica-gray-1" />
          ) : (
            <Menu className="h-6 w-6 text-mica-gray-1" />
          )}
        </button>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <ul
          className="relative mx-auto flex w-fit rounded-full border-2 border-mica-gray-3 bg-white p-1"
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        >
          {navLinks.map((link, index) => (
            <Tab key={index} setPosition={setPosition} href={link.href}>
              {link.name}
            </Tab>
          ))}

          <Cursor position={position} />
        </ul>
      )}

      {/* Mobile Navigation Overlay */}
      {isMobile && (
        <motion.div 
          className={`fixed inset-0 bg-white z-10 flex flex-col items-center pt-20 overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ height: 0 }}
          animate={{ height: isMenuOpen ? "100vh" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-6 w-full pt-6">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full text-center">
                <a 
                  href={link.href}
                  className="block py-3 text-mica-gray-1 text-lg font-medium hover:text-mica-green transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-20 bg-mica-green text-white rounded-lg px-5 py-2 text-sm font-medium hidden md:block"
      >
        Inicia sesión
      </motion.button>
    </div>
  );
}

const Tab = ({
  children,
  setPosition,
  href
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-mica-gray-1 mix-blend-difference md:px-5 md:py-3 md:text-sm"
    >
      <a href={href}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-10 rounded-full bg-mica-green/20"
    />
  );
};

export default NavHeader;
