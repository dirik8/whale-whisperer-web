
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full border border-gold/20 text-gold font-medium text-sm mb-6 animate-fade-in">
            Only 50 traders accepted per quarter
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
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
              <Link to="/apply">Apply for Membership</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5 px-8 py-6 text-lg">
              <Link to="/about" className="flex items-center">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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
            
            <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6">
              <Award className="w-8 h-8 text-gold mb-4 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-1">7+ Years</h3>
              <p className="text-white/70">Market Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
