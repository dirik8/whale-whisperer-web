
import React from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

type ContactHeroProps = {
  heroImage: string;
};

const ContactHero: React.FC<ContactHeroProps> = ({ heroImage }) => {
  return (
    <section className="relative h-[480px] overflow-hidden">
      {/* Hero background with image */}
      <img
        src={heroImage}
        alt="Contact - Modern"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-35 animate-fade-in"
        style={{ zIndex: 0 }}
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-midnight/90 to-charcoal/50" style={{ zIndex: 1 }}></div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center pt-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold mb-6 animate-fade-in">
          <Mail className="w-4 h-4 mr-2" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Connect With Our <span className="gold-gradient">Expert Team</span>
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Have questions? Need guidance? Our team of trading experts is ready to assist you on your journey to trading success.
        </p>
        
        <ul className="mb-6 text-white/80 space-y-2">
          <li><span className="text-gold">•</span> Personalized answers from real traders</li>
          <li><span className="text-gold">•</span> Fast response times (usually within hours)</li>
          <li><span className="text-gold">•</span> 15+ years professional trading experience</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactHero;
