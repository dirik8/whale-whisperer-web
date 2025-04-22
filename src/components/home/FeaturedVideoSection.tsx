
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { videoTestimonials } from "@/utils/testimonial-videos";

const FeaturedVideoSection = () => {
  const featuredVideo = videoTestimonials[0]; // Use the first video as featured

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
              src={`https://player.vimeo.com/video/${featuredVideo.vimeoId}?title=0&byline=0&portrait=0`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-8 bg-charcoal/50 border border-gold/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gold mb-2">
              {featuredVideo.title}
            </h3>
            <p className="text-white/80 mb-4">
              {featuredVideo.description}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20">
                <img 
                  src={featuredVideo.image}
                  alt={featuredVideo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-white">{featuredVideo.name}</div>
                <div className="text-gold/80 text-sm">{featuredVideo.role}</div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-jet">
                <Link to="/testimonials">View All Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideoSection;
