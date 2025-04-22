import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { videoTestimonials } from "@/utils/testimonial-videos";
import { Play, ChevronUp } from "lucide-react";

const TestimonialsPage = () => {
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
  
  // Filter testimonials based on selected category
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
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-midnight">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                They Joined. They Profited. <span className="gold-gradient">You're Next.</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Don't take our word for it. Hear directly from our community of successful traders who have transformed their performance with Bullish Whales Club.
              </p>
            </div>
          </div>
        </section>
        
        {/* Video Testimonials */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <SectionHeading
              title="Video Success Stories"
              subtitle="Watch how BWC has transformed the trading careers of our members."
            />
            
            {/* Filter */}
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
        
        {/* Written Testimonials */}
        <section className="py-20 px-4 bg-midnight">
          <div className="container mx-auto">
            <SectionHeading
              title="What Our Members Say"
              subtitle="Real stories from real traders who've experienced the Bullish Whales difference."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {writtenTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Transformation */}
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
        
        {/* Success Stats */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto text-center">
            <SectionHeading
              title="The Numbers Don't Lie"
              subtitle="Measurable results backed by real member data."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-charcoal/50 border border-gold/10 rounded-lg p-8 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Your Story Next */}
        <section className="py-20 px-4 bg-gradient-to-br from-black to-charcoal">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Story <span className="gold-gradient">Could Be Next</span>
              </h2>
              
              <p className="text-white/70 text-xl mb-8">
                Join the ranks of successful traders who've transformed their performance with Bullish Whales Club.
              </p>
              
              <Button asChild className="bg-gradient-gold hover:bg-gold text-jet px-8 py-6 text-lg hover:scale-105 transition-all duration-300 rounded-lg">
                <Link to="/apply">Apply for Membership</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
