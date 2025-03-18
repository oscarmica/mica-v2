
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };

  return <footer className="bg-white border-t border-mica-green/10">
      <div className="container mx-auto px-4 py-16">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }}>
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <span className="font-bold text-xl group-hover:text-mica-green transition-colors">mica</span>
              <span className="font-bold text-xl text-mica-green">.rent</span>
            </Link>
            <p className="text-mica-gray-2">
              Brindando tranquilidad a los inquilinos en todo México con nuestros servicios integrales de protección.
            </p>
          </motion.div>
          
          {/* Links & Contact Section */}
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-6 text-lg">Enlaces</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/faq" className="text-mica-gray-2 hover:text-mica-green transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacidad" className="text-mica-gray-2 hover:text-mica-green transition-colors">
                      Aviso de Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link to="/terminos" className="text-mica-gray-2 hover:text-mica-green transition-colors">
                      Términos y Condiciones
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Contacto Information */}
              <div>
                <h3 className="font-semibold mb-6 text-lg">Contacto</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:hola@mica.rent" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-mica-green" />
                      <span>hola@mica.rent</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+525519059169" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-mica-green" />
                      <span>+52 55 1905 9169</span>
                    </a>
                  </li>
                  <li className="flex">
                    <MapPin className="h-4 w-4 mr-2 mt-1 text-mica-green shrink-0" />
                    <span className="text-mica-gray-2">
                      MCTC Plataforma de Rentas Sapi de CV<br />
                      Ciudad de México, CDMX
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Footer Bottom */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="border-t border-mica-green/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p variants={itemVariants} className="text-mica-gray-2 text-sm">
            &copy; {currentYear} mica.rent. Todos los derechos reservados.
          </motion.p>
        </motion.div>
      </div>
    </footer>;
};

export default Footer;
