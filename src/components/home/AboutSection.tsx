
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-midnight relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="aspect-[4/5] relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Founder of Bullish Whales Club" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute top-8 -right-8 w-full h-full border-2 border-gold rounded-lg -z-10"></div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold text-jet font-bold py-3 px-6 rounded-lg">
              7+ Years Trading Experience
            </div>
          </div>
          
          {/* Right column: Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <SectionHeading
              title="From CPA to Crypto Kingmaker"
              subtitle="The story behind Bullish Whales Club and how we're changing the crypto trading landscape."
              align="left"
            />
            
            <p className="mb-6 text-white/80">
              What began as a personal quest to master the markets has evolved into an exclusive community of disciplined traders who consistently outperform the market.
            </p>
            
            <p className="mb-6 text-white/80">
              After leaving my successful career as a CPA to pursue trading full-time, I discovered that true wealth in crypto doesn't come from hype or luck—it comes from strategy, discipline, and exclusive market insights.
            </p>
            
            <div className="p-6 bg-charcoal/50 border-l-4 border-gold rounded mb-8">
              <p className="italic text-white/90 text-lg">
                "True wealth starts with true strategy. We're here to make Wall Street-level strategy accessible to those ready to grow."
              </p>
            </div>
            
            <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium mt-4 hover:scale-105 transition-transform duration-300">
              <Link to="/about">Learn Our Full Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
