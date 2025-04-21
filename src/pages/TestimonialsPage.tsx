
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/ui/testimonial-card";
import { Play, Star, Filter, ChevronDown, ChevronUp } from "lucide-react";

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);
  
  const videoTestimonials = [
    {
      name: "Michael Johnson",
      role: "Former Finance Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      vimeoId: "767370736",
      category: "swing",
      duration: "3:24"
    },
    {
      name: "Sarah Chen",
      role: "Full-time Trader",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      vimeoId: "767370886",
      category: "day",
      duration: "2:58"
    },
    {
      name: "David Rodriguez",
      role: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop",
      vimeoId: "767371018",
      category: "crypto",
      duration: "4:12"
    },
    {
      name: "Emma Thompson",
      role: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      vimeoId: "767371218",
      category: "options",
      duration: "3:47"
    },
    {
      name: "James Wilson",
      role: "Retired Banker",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      vimeoId: "767371362",
      category: "swing",
      duration: "5:03"
    },
    {
      name: "Michelle Park",
      role: "Day Trader",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      vimeoId: "767371557",
      category: "day",
      duration: "2:36"
    },
    {
      name: "Robert Chen",
      role: "Crypto Investor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      vimeoId: "767371685",
      category: "crypto",
      duration: "4:22"
    },
    {
      name: "Alicia Martinez",
      role: "Forex Specialist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
      vimeoId: "767371828",
      category: "forex",
      duration: "3:11"
    },
    {
      name: "Thomas Wright",
      role: "Options Trader",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&h=400&fit=crop",
      vimeoId: "767371973",
      category: "options",
      duration: "4:45"
    },
    {
      name: "Jessica Kim",
      role: "Index Fund Manager",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      vimeoId: "767372117",
      category: "swing",
      duration: "3:31"
    },
    {
      name: "Marcus Johnson",
      role: "Algorithm Developer",
      image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&h=400&fit=crop",
      vimeoId: "767372286",
      category: "day",
      duration: "2:49"
    },
    {
      name: "Elena Petrova",
      role: "Commodities Expert",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      vimeoId: "767372390",
      category: "options",
      duration: "4:01"
    },
  ];

  const writtenTestimonials = [
    {
      quote: "Since joining Bullish Whales Club, my trading has completely transformed. I've gone from inconsistent results to a clear strategy that's delivered 247% returns in just 8 months.",
      author: "Michael T.",
      role: "Former Finance Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
    },
    {
      quote: "The quality of education and community here is unmatched. I've tried other trading groups, but none provide the level of expertise and support that Bullish Whales delivers.",
      author: "Sarah L.",
      role: "Full-time Crypto Trader",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
    },
    {
      quote: "What impressed me most is how they focus on psychology and risk management, not just entries and exits. This holistic approach has made me not just a better trader, but a better investor overall.",
      author: "David K.",
      role: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces"
    },
    {
      quote: "After years of struggling with inconsistent trading results, Bullish Whales Club gave me the framework and discipline I needed. I'm now profitable every month, even in bear markets.",
      author: "Emma T.",
      role: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces"
    },
    {
      quote: "The ROI on this membership has been incredible. In my first month alone, a single trade based on the BWC strategy paid for an entire year of membership.",
      author: "James W.",
      role: "Retired Banker",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
    },
    {
      quote: "As a woman in trading, I've often felt overlooked in other communities. At Bullish Whales, I found an inclusive environment where my questions are valued and my success is celebrated.",
      author: "Michelle P.",
      role: "Day Trader",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces"
    }
  ];

  const stats = [
    { value: "94%", label: "Member Profitability" },
    { value: "5,000+", label: "Active Members" },
    { value: "97%", label: "Renewal Rate" },
    { value: "60+", label: "Countries Represented" }
  ];
  
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
    
  // Handle video click to expand/collapse
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
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div 
                    className={`group relative rounded-lg overflow-hidden ${
                      expandedVideo === index ? "col-span-full md:col-span-2 row-span-2" : ""
                    }`}
                  >
                    {expandedVideo === index ? (
                      // Vimeo embed when expanded
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
                      // Video Thumbnail
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
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-jet group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-8 h-8" />
                            </div>
                          </div>
                          
                          {/* Duration Badge */}
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {testimonial.duration}
                          </div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 bg-gold/80 text-jet text-xs px-2 py-1 rounded font-medium">
                            {categories.find(cat => cat.id === testimonial.category)?.name || "Trading"}
                          </div>
                        </div>
                        
                        {/* Video Info */}
                        <div className="p-4 bg-charcoal/50 border border-gold/10">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/20">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-3">
                              <h3 className="font-medium text-white">{testimonial.name}</h3>
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
