
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
      transition: {
        type: 'spring',
        stiffness: 50
      }
    }
  };
  
  return (
    <footer className="bg-white border-t border-mica-green/10">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
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
          
          {/* Empresa Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold mb-6 text-lg">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre-nosotros" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                  <span>Sobre Nosotros</span>
                </Link>
              </li>
              <li>
                <Link to="/empleo" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                  <span>Empleo</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/prensa" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                  <span>Prensa</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Servicios Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold mb-6 text-lg">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/proteccion-deposito" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                  <span>Protección de Depósito</span>
                </Link>
              </li>
              <li>
                <Link to="/soporte-legal" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                  <span>Soporte Legal</span>
                </Link>
              </li>
              <li>
                <Link to="/defensoria-inquilino" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                  <span>Defensoría del Inquilino</span>
                </Link>
              </li>
              <li>
                <Link to="/inspeccion-propiedad" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-70" />
                  <span>Inspección de Propiedad</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Contacto Information */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold mb-6 text-lg">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:soporte@mica.rent" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-mica-green" />
                  <span>soporte@mica.rent</span>
                </a>
              </li>
              <li>
                <a href="tel:+525512345678" className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-mica-green" />
                  <span>+52 55 1234 5678</span>
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-mica-green shrink-0" />
                <span className="text-mica-gray-2">
                  Av. Insurgentes Sur 1457<br />
                  Col. Insurgentes Mixcoac<br />
                  Ciudad de México, CP 03920
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Footer Bottom */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-mica-green/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p variants={itemVariants} className="text-mica-gray-2 text-sm">
            &copy; {currentYear} mica.rent. Todos los derechos reservados.
          </motion.p>
          <motion.div variants={itemVariants} className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terminos" className="text-mica-gray-2 hover:text-mica-green transition-colors text-sm">
              Términos
            </Link>
            <Link to="/privacidad" className="text-mica-gray-2 hover:text-mica-green transition-colors text-sm">
              Privacidad
            </Link>
            <Link to="/cookies" className="text-mica-gray-2 hover:text-mica-green transition-colors text-sm">
              Cookies
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
