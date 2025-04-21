
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black to-charcoal relative overflow-hidden">
      {/* Gold accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-gold"></div>
      <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-gold"></div>
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-gold"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Limited spots badge */}
          <div className="inline-block px-4 py-2 bg-gold/10 rounded-full border border-gold/20 text-gold font-medium text-sm mb-6 animate-fade-in">
            Applications closing soon
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Ready to Transform Your <span className="gold-gradient">Trading Performance?</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join the elite circle of traders who are consistently outperforming the market with proven strategies and exclusive insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
              <Link to="/apply">Apply for Membership</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5 px-8 py-6 text-lg">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
          
          <p className="text-white/50 mt-6 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Only 50 new members accepted each quarter. Applications reviewed within 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
