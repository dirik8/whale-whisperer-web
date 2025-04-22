
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

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
              src="https://player.vimeo.com/video/1061743850?h=6296138655&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              title="Client Testimonials"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-jet">
              <Link to="/testimonials">View All Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Add script for Vimeo player */}
      <script src="https://player.vimeo.com/api/player.js" async></script>
    </section>
  );
};

export default FeaturedVideoSection;
