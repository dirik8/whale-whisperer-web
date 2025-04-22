
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Instagram, Twitter, Linkedin, Youtube, ArrowRight, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-midnight to-black">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-80"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-gold/5 blur-3xl"></div>
      
      {/* Footer content */}
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        {/* Upper footer with main content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-12">
          {/* Branding column */}
          <div className="md:col-span-5 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 bg-gradient-gold rounded-lg flex items-center justify-center shadow-glow-sm">
                <span className="text-jet font-bold text-xl">BW</span>
              </div>
              <h2 className="text-2xl font-bold text-gold">Bullish Whales Club</h2>
            </div>
            <p className="text-white/70 mb-8 max-w-md">
              Elite Strategies. Exclusive Access. Ultimate Performance. Join the top 1% of crypto traders with 
              <span className="text-gold font-medium"> 15+ years </span> 
              of market excellence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border-l-2 border-gold/30 pl-4">
                <div className="text-2xl font-bold text-white">5,000+</div>
                <div className="text-white/60 text-sm">Active Members</div>
              </div>
              <div className="border-l-2 border-gold/30 pl-4">
                <div className="text-2xl font-bold text-white">94%</div>
                <div className="text-white/60 text-sm">Success Rate</div>
              </div>
              <div className="border-l-2 border-gold/30 pl-4">
                <div className="text-2xl font-bold text-white">50</div>
                <div className="text-white/60 text-sm">Traders/Year</div>
              </div>
            </div>
            
            {/* Social icons */}
            <div className="flex space-x-5">
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-charcoal/80 flex items-center justify-center hover:bg-gold/20 transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-charcoal/80 flex items-center justify-center hover:bg-gold/20 transition-all" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gold" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-charcoal/80 flex items-center justify-center hover:bg-gold/20 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gold" />
              </a>
              <a href="https://youtube.com" className="w-10 h-10 rounded-full bg-charcoal/80 flex items-center justify-center hover:bg-gold/20 transition-all" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-bold text-white text-lg mb-6 border-l-2 border-gold pl-4">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Programs</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-bold text-white text-lg mb-6 border-l-2 border-gold pl-4">Programs</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/programs" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Membership Tiers</span>
                </Link>
              </li>
              <li>
                <Link to="/programs/vip-university" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>MK VIP University</span>
                </Link>
              </li>
              <li>
                <Link to="/education-hub" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Education Hub</span>
                </Link>
              </li>
              <li>
                <Link to="/coaching" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Elite Coaching</span>
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-white/70 hover:text-gold flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 text-gold opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>Apply Now</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-bold text-white text-lg mb-6 border-l-2 border-gold pl-4">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-center text-white/70 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-charcoal/80 flex items-center justify-center mr-4 group-hover:bg-gold/20">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <a href="mailto:info@bullishwhales.club" className="hover:text-gold">info@bullishwhales.club</a>
              </li>
              <li className="flex items-center text-white/70 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-charcoal/80 flex items-center justify-center mr-4 group-hover:bg-gold/20">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <a href="tel:+1234567890" className="hover:text-gold">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center text-white/70 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-charcoal/80 flex items-center justify-center mr-4 group-hover:bg-gold/20">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <span>New York, USA</span>
              </li>
            </ul>
            
            <div className="mt-8 bg-charcoal/30 border border-gold/10 rounded-lg p-4">
              <h4 className="font-medium text-gold mb-2">Limited Availability</h4>
              <p className="text-white/60 text-sm">
                We accept only 50 traders annually. Apply now to secure your spot.
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-white/10 mb-8" />
        
        {/* Bottom footer with copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Bullish Whales Club. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link to="/privacy" className="text-white/50 text-sm hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="text-white/50 text-sm hover:text-gold">Terms of Service</Link>
            <Link to="/disclaimer" className="text-white/50 text-sm hover:text-gold">Risk Disclaimer</Link>
            <p className="text-white/50 text-sm">
              Trading involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
