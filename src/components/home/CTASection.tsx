
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle, Flame } from "lucide-react";
import UrgencyTimer from "@/components/ui/urgency-timer";

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
          {/* Enhanced Urgency Timer */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600/70 to-orange-500/70 rounded-full border-2 border-yellow-500 text-white font-bold text-lg mb-6 animate-pulse shadow-lg">
            <Flame className="w-5 h-5 mr-2 text-yellow-300 animate-pulse" />
            <Clock className="w-5 h-5 mr-2 text-yellow-300" />
            <UrgencyTimer />
            <span className="ml-2 text-yellow-300">— Only <span className="text-white font-extrabold">3</span> slots remaining!</span>
            <AlertTriangle className="w-5 h-5 ml-2 text-yellow-300 animate-pulse" />
          </div>
          
          {/* Limited spots badge */}
          <div className="inline-block px-5 py-2.5 bg-gold/20 rounded-full border-2 border-gold/40 text-gold font-medium text-md mb-6 animate-fade-in shadow-lg">
            <span className="font-bold">URGENT:</span> Applications closing soon
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Ready to Transform Your <span className="gold-gradient">Trading Performance?</span>
          </h2>
          
          <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join the elite circle of traders who are consistently outperforming the market with proven strategies and exclusive insights.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              <Link to="/apply">Apply for Membership</Link>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5 px-8 py-6 text-lg">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
          
          <p className="text-white/60 mt-6 text-sm animate-fade-in font-medium" style={{ animationDelay: "0.4s" }}>
            We accept only 50 traders annually. Applications reviewed within 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
