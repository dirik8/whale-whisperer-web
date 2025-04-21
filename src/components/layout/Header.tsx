
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-jet/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-gold">BWC</h1>
          <span className="ml-2 hidden md:block text-sm tracking-widest uppercase text-white/70">Bullish Whales Club</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-gold transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gold transition-colors duration-300">About Us</Link>
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="flex items-center text-white hover:text-gold transition-colors duration-300"
            >
              Programs
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-charcoal border border-gold/20 shadow-lg rounded-md py-2">
                <Link to="/programs" className="block px-4 py-2 text-white hover:bg-gold/10 transition-colors duration-200">All Programs</Link>
                <Link to="/education-hub" className="block px-4 py-2 text-white hover:bg-gold/10 transition-colors duration-200">Education Hub</Link>
                <Link to="/coaching" className="block px-4 py-2 text-white hover:bg-gold/10 transition-colors duration-200">Elite Coaching</Link>
              </div>
            )}
          </div>
          <Link to="/testimonials" className="text-white hover:text-gold transition-colors duration-300">Testimonials</Link>
          <Link to="/team" className="text-white hover:text-gold transition-colors duration-300">Our Team</Link>
          <Link to="/faq" className="text-white hover:text-gold transition-colors duration-300">FAQ</Link>
          <Link to="/contact" className="text-white hover:text-gold transition-colors duration-300">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium hover:scale-105 transition-transform duration-300">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white hover:text-gold"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-midnight border-t border-gold/10 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <Link to="/" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>About Us</Link>
            <Link to="/programs" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>Programs</Link>
            <Link to="/education-hub" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>Education Hub</Link>
            <Link to="/coaching" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>Elite Coaching</Link>
            <Link to="/testimonials" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>Testimonials</Link>
            <Link to="/team" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>Our Team</Link>
            <Link to="/faq" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>FAQ</Link>
            <Link to="/contact" className="py-3 text-white hover:text-gold transition-colors" onClick={toggleMenu}>Contact</Link>
            <Button asChild className="mt-4 bg-gradient-gold text-jet font-medium w-full">
              <Link to="/apply" onClick={toggleMenu}>Apply Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
