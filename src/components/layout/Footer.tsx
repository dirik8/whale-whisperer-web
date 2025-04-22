import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight py-16 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Branding */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold text-gold mb-4">Bullish Whales Club</h2>
            <p className="text-white/70 mb-6 max-w-sm">
              Elite Strategies. Exclusive Access. Ultimate Performance. Join the top 1% of crypto traders.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-gold" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gold" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-gold" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-gold" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-gold">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-gold">About Us</Link></li>
              <li><Link to="/programs" className="text-white/70 hover:text-gold">Programs</Link></li>
              <li><Link to="/testimonials" className="text-white/70 hover:text-gold">Testimonials</Link></li>
              <li><Link to="/faq" className="text-white/70 hover:text-gold">FAQ</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-4">Programs</h3>
            <ul className="space-y-3">
              <li><Link to="/programs" className="text-white/70 hover:text-gold">Membership Tiers</Link></li>
              <li><Link to="/programs/vip-university" className="text-white/70 hover:text-gold">MK VIP University</Link></li>
              <li><Link to="/education-hub" className="text-white/70 hover:text-gold">Education Hub</Link></li>
              <li><Link to="/coaching" className="text-white/70 hover:text-gold">Elite Coaching</Link></li>
              <li><Link to="/apply" className="text-white/70 hover:text-gold">Apply Now</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-white/70 hover:text-gold">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-gold">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-white/70 hover:text-gold">Risk Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-white/70">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@bullishwhales.club" className="hover:text-gold">info@bullishwhales.club</a>
              </li>
              <li className="flex items-center text-white/70">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+1234567890" className="hover:text-gold">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Bullish Whales Club. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Trading involves risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
