
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">RentShield</span>
            </div>
            <p className="text-muted-foreground">
              Providing peace of mind for renters nationwide with our comprehensive protection services.
            </p>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Deposit Protection</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Legal Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tenant Advocacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Property Inspection</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">support@rentshield.com</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">+1 (555) 123-4567</a></li>
              <li><span className="text-muted-foreground">123 Protection Ave, Suite 101<br />San Francisco, CA 94103</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} RentShield. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
