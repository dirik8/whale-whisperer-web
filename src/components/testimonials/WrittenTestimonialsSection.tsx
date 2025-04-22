
import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import TestimonialCard from "@/components/ui/testimonial-card";

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
    quote: "The community aspect of BWC is what sets it apart. Having access to other serious traders who are all using the same strategies creates a powerful learning environment.",
    author: "Jennifer R.",
    role: "Former HR Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces"
  },
  {
    quote: "I was skeptical at first, but the results speak for themselves. The proprietary indicators and alert system have completely changed my trading success rate.",
    author: "Robert M.",
    role: "Retired Military Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
  },
  {
    quote: "After years of struggling with trading psychology, BWC's mentorship program helped me overcome my emotional trading habits and develop a disciplined approach.",
    author: "Lisa C.",
    role: "Psychology Professor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces"
  }
];

const WrittenTestimonialsSection = () => {
  return (
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
  );
};

export default WrittenTestimonialsSection;
