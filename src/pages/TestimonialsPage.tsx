
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/ui/testimonial-card";
import { Play } from "lucide-react";

const TestimonialsPage = () => {
  const videoTestimonials = [
    {
      name: "Michael Johnson",
      role: "Former Finance Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      duration: "3:24"
    },
    {
      name: "Sarah Chen",
      role: "Full-time Trader",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      duration: "2:58"
    },
    {
      name: "David Rodriguez",
      role: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop",
      duration: "4:12"
    },
    {
      name: "Emma Thompson",
      role: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      duration: "3:47"
    },
    {
      name: "James Wilson",
      role: "Retired Banker",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      duration: "5:03"
    },
    {
      name: "Michelle Park",
      role: "Day Trader",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
      preview: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      duration: "2:36"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {videoTestimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="group relative rounded-lg overflow-hidden">
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-charcoal/50 relative">
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
                  </div>
                </div>
              ))}
            </div>
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
              
              <Button asChild className="bg-transparent border-2 border-gold text-gold hover:bg-gold/5 px-8 py-6 text-lg">
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
