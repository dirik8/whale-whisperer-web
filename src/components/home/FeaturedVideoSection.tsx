
import React from "react";
import SectionHeading from "@/components/ui/section-heading";

const FeaturedVideoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-midnight to-jet">
      <div className="container mx-auto">
        <SectionHeading
          title="Featured Success Story"
          subtitle="Watch how our members transform their trading journey"
          align="center"
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden border-2 border-gold/20">
            <iframe 
              src="https://player.vimeo.com/video/944601703?title=0&byline=0&portrait=0"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-8 bg-charcoal/50 border border-gold/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gold mb-2">
              "How I Made $127,000 in 30 Days Using BWC Strategies"
            </h3>
            <p className="text-white/80 mb-4">
              Watch James share his incredible journey from struggling trader to consistent profitability using our proprietary trading system.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces"
                  alt="James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-white">James Wilson</div>
                <div className="text-gold/80 text-sm">Professional Trader</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;
