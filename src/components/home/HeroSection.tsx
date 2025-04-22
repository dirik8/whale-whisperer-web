
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, ArrowRight } from "lucide-react";

const heroBg = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png"; // New bull image

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Animated background image related to crypto/forex */}
      <img
        src={heroBg}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 pointer-events-none animate-fade-in"
        alt="Crypto bull"
        style={{ zIndex: 0, maxHeight: 700, minHeight: 400 }}
      />
      {/* Background gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-midnight/80 to-charcoal/90" style={{ zIndex: 1 }}></div>
      
      <div className="container mx-auto relative" style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full border border-gold/20 text-gold font-medium text-sm mb-6 animate-fade-in">
            We accept only 50 traders annually
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Join the <span className="gold-gradient">Elite 1%</span> of <br />
            Crypto Traders
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Elite Strategies. Exclusive Access. Ultimate Performance.
          </p>
          
          {/* CTA Buttons - ensured high z-index */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in relative" style={{ animationDelay: "0.3s", zIndex: 20 }}>
            <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
              <Link to="/apply">Apply for Membership</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5 px-8 py-6 text-lg">
              <Link to="/about" className="flex items-center">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          
          {/* Stats - Adjusted layout and positioning */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in relative" style={{ animationDelay: "0.4s" }}>
            <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6">
              <TrendingUp className="w-8 h-8 text-gold mb-4 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-1">94%</h3>
              <p className="text-white/70">Member Profitability</p>
            </div>
            
            <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6">
              <Users className="w-8 h-8 text-gold mb-4 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-1">5,000+</h3>
              <p className="text-white/70">Active Members</p>
            </div>
            
            <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 relative z-50">
              <Award className="w-8 h-8 text-gold mb-4 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-1">15+ Years</h3>
              <p className="text-white/70">Market Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
