
import React, { useState } from "react";
import { ChevronUp, Play, Filter } from "lucide-react";
import { videoTestimonials } from "@/utils/testimonial-videos";

const VideoTestimonialsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Videos" },
    { id: "day", name: "Day Trading" },
    { id: "swing", name: "Swing Trading" },
    { id: "options", name: "Options" },
    { id: "crypto", name: "Crypto" },
    { id: "forex", name: "Forex" }
  ];

  const filteredVideos = activeFilter === "all" 
    ? videoTestimonials 
    : videoTestimonials.filter(video => video.category === activeFilter);

  const handleVideoClick = (index: number) => {
    if (expandedVideo === index) {
      setExpandedVideo(null);
    } else {
      setExpandedVideo(index);
    }
  };

  return (
    <section className="py-20 px-4 bg-jet">
      <div className="container mx-auto">
        <SectionHeading
          title="Video Success Stories"
          subtitle="Watch how BWC has transformed the trading careers of our members."
        />
        
        <div className="flex flex-wrap items-center justify-center mb-10 gap-3">
          <div className="bg-charcoal/50 border border-gold/10 px-4 py-2 rounded-full flex items-center">
            <Filter className="text-gold w-4 h-4 mr-2" />
            <span className="text-white/70 text-sm">Filter by:</span>
          </div>
          
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full border ${
                activeFilter === category.id 
                  ? "bg-gold/20 border-gold text-gold" 
                  : "bg-transparent border-gold/10 text-white/70 hover:border-gold/30"
              } text-sm transition-all`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredVideos.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div 
                className={`group relative rounded-lg overflow-hidden ${
                  expandedVideo === index ? "col-span-full md:col-span-2 row-span-2" : ""
                }`}
              >
                {expandedVideo === index ? (
                  <div>
                    <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
                      <iframe 
                        src={`https://player.vimeo.com/video/${testimonial.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <button 
                      onClick={() => handleVideoClick(index)}
                      className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                    >
                      <ChevronUp className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div 
                      className="aspect-video bg-charcoal/50 relative cursor-pointer"
                      onClick={() => handleVideoClick(index)}
                    >
                      <img 
                        src={testimonial.preview} 
                        alt={`${testimonial.name}'s testimonial`}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-jet group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {testimonial.duration}
                      </div>
                      
                      <div className="absolute top-4 left-4 bg-gold/80 text-jet text-xs px-2 py-1 rounded font-medium">
                        {categories.find(cat => cat.id === testimonial.category)?.name || "Trading"}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-charcoal/50 border border-gold/10">
                      <h3 className="text-xl font-bold text-white mb-2">{testimonial.title}</h3>
                      <p className="text-white/70 text-sm mb-4">{testimonial.description}</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-white">{testimonial.name}</h4>
                          <p className="text-sm text-white/60">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="bg-charcoal/50 border border-gold/10 p-8 text-center rounded-lg mt-8">
            <p className="text-white/70 text-lg">No video testimonials in this category yet.</p>
            <Button 
              onClick={() => setActiveFilter("all")} 
              className="mt-4 border border-gold text-gold hover:bg-gold/10"
            >
              View All Videos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
