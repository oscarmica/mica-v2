
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">mica</span>
              <span className="font-bold text-xl text-primary">.rent</span>
            </div>
            <p className="text-muted-foreground">
              Brindando tranquilidad a los inquilinos en todo México con nuestros servicios integrales de protección.
            </p>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Empleo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Prensa</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Protección de Depósito</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Soporte Legal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Defensoría del Inquilino</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Inspección de Propiedad</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">soporte@mica.rent</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">+52 55 1234 5678</a></li>
              <li><span className="text-muted-foreground">Av. Insurgentes Sur 1457<br />Col. Insurgentes Mixcoac<br />Ciudad de México, CP 03920</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} mica.rent. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
