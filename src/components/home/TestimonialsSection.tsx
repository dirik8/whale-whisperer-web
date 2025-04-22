
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import TestimonialCard from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
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
    }
  ];

  return (
    <section className="section-padding bg-jet relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="They Joined. They Profited. You're Next."
          subtitle="Don't take our word for it. Hear directly from our community of successful traders."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
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
                showAuthor={false}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium hover:scale-105 transition-transform duration-300">
            <Link to="/testimonials">View All Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
