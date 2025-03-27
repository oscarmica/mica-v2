
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
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
              <img 
                src="/lovable-uploads/c6e28439-6481-459e-ae34-c31b32ed151e.png" 
                alt="Mica Logo" 
                className="h-7"
              />
            </Link>
            <p className="text-mica-gray-2">
              Brindando tranquilidad a los inquilinos en todo México con nuestros servicios integrales de protección.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/mica.rent/?igshid=YzAyZWRlMzg%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mica-gray-2 hover:text-mica-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/89596792/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mica-gray-2 hover:text-mica-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/mica.rent/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mica-gray-2 hover:text-mica-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=%2B525519059169&text&type=phone_number&app_absent=0" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-mica-gray-2 hover:text-mica-green transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" /> {/* Replace Whatsapp with MessageCircle */}
              </a>
            </div>
          </motion.div>
          
          {/* Links & Contact Section */}
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-6 text-lg">Enlaces</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://mica.rent/blog/" className="text-mica-gray-2 hover:text-mica-green transition-colors" target="_blank" rel="noopener noreferrer">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="https://qqaukttgp97.typeform.com/embajador?typeform-source=mica.rent" className="text-mica-gray-2 hover:text-mica-green transition-colors" target="_blank" rel="noopener noreferrer">
                      Embajador mica
                    </a>
                  </li>
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
                    <a 
                      href="https://api.whatsapp.com/send/?phone=%2B525519059169&text&type=phone_number&app_absent=0" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mica-gray-2 hover:text-mica-green transition-colors flex items-center"
                    >
                      <MessageCircle className="h-4 w-4 mr-2 text-mica-green" />
                      <span>+52 55 1905 9169</span>
                    </a>
                  </li>
                  <li className="flex">
                    <MapPin className="h-4 w-4 mr-2 mt-1 text-mica-green shrink-0" />
                    <span className="text-mica-gray-2">
                      MCTC Plataforma de Rentas Sapi de CV<br />
                      Amsterdam 255, Hipódromo, Ciudad de México, México
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
