
import React from "react";
import { Star } from "lucide-react";

const FeaturedTransformationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-charcoal to-jet">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2"><span className="gold-gradient">Featured</span> Transformation</h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full mb-2"></div>
          </div>
          
          <div className="bg-midnight/70 border border-gold/20 rounded-xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Jonathan's 350% Portfolio Growth</h3>
                <div className="mb-4">
                  <div className="flex items-center gap-1 text-gold mb-2">
                    <Star className="w-4 h-4 fill-gold" />
                    <Star className="w-4 h-4 fill-gold" />
                    <Star className="w-4 h-4 fill-gold" />
                    <Star className="w-4 h-4 fill-gold" />
                    <Star className="w-4 h-4 fill-gold" />
                  </div>
                </div>
                <p className="text-white/80 italic mb-4">
                  "I was a struggling day trader for years. After joining BWC and applying their proprietary strategy, my portfolio grew 350% in just one year. What's even more valuable is the confidence I now have in my trading decisions."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold">
                    <img 
                      src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=faces" 
                      alt="Jonathan K." 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gold">Jonathan K.</h4>
                    <p className="text-white/60">Former Struggling Trader</p>
                    <p className="text-white/60 text-sm">Member since 2022</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-jet/30 rounded-lg overflow-hidden">
                  <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://player.vimeo.com/video/767372685?title=0&byline=0&portrait=0"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-jet font-bold text-sm py-1 px-3 rounded">
                  FEATURED STORY
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Jonathan's Journey:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-white/60 mb-1">Before</p>
                    <p className="text-red-400 font-bold">-15% monthly returns</p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-1">After 6 Months</p>
                    <p className="text-gold font-bold">+62% returns</p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-1">After 1 Year</p>
                    <p className="text-green-400 font-bold">+350% portfolio growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTransformationSection;
