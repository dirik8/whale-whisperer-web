
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const FeaturedVideoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-midnight to-jet relative">
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Featured Success Story"
          subtitle="Watch how our members transform their trading journey"
          align="center"
        />
        
        <div className="max-w-4xl mx-auto mt-12 relative z-10">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden border-2 border-gold/20">
            <img 
              src="/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png"
              alt="Trading success story" 
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-jet relative z-10">
              <Link to="/testimonials">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;
