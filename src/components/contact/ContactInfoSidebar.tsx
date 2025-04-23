
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Map, ArrowRight } from "lucide-react";

type ContactInfoSidebarProps = {
  className?: string;
};

const ContactInfoSidebar: React.FC<ContactInfoSidebarProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className="bg-charcoal/80 backdrop-blur-sm border border-gold/20 rounded-xl p-6 mb-6">
        <h3 className="text-gold font-semibold mb-4">Contact Information</h3>
        <ul className="space-y-4">
          <li className="flex">
            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-white/50 text-sm">Email</p>
              <a href="mailto:info@bullishwhales.club" className="text-white hover:text-gold">info@bullishwhales.club</a>
            </div>
          </li>
          <li className="flex">
            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-white/50 text-sm">Phone</p>
              <a href="tel:+1234567890" className="text-white hover:text-gold">+1 (234) 567-890</a>
            </div>
          </li>
          <li className="flex">
            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <Map className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-white/50 text-sm">Address</p>
              <p className="text-white">New York, USA</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="relative h-64 rounded-xl overflow-hidden mb-6">
        <img 
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=500&q=80" 
          alt="Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex items-end p-4">
          <Link to="/about" className="text-gold flex items-center hover:underline">
            About Our Team <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-gold/10 to-midnight/80 border border-gold/20 rounded-xl p-6">
        <h4 className="text-white font-medium mb-3">Office Hours</h4>
        <ul className="space-y-2 mb-4">
          <li className="flex justify-between text-white/70">
            <span>Monday - Friday</span>
            <span>9:00 AM - 5:00 PM EST</span>
          </li>
          <li className="flex justify-between text-white/70">
            <span>Saturday</span>
            <span>10:00 AM - 2:00 PM EST</span>
          </li>
          <li className="flex justify-between text-white/70">
            <span>Sunday</span>
            <span>Closed</span>
          </li>
        </ul>
        <div className="text-white/50 text-sm">
          <p>*Trading support available 24/7 for members</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSidebar;
