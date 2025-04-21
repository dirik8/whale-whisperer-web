
import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import FeatureCard from "@/components/ui/feature-card";
import { TrendingUp, BookOpen, Users, Laptop, MessageCircle, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Proven Strategies",
      description: "Access battle-tested trading frameworks designed to capitalize on market opportunities in any condition."
    },
    {
      icon: BookOpen,
      title: "Expert Education",
      description: "Comprehensive trading masterclasses, from technical analysis to advanced psychological edge development."
    },
    {
      icon: Users,
      title: "Elite Community",
      description: "Connect with sophisticated traders who share valuable insights, strategies, and support."
    },
    {
      icon: Laptop,
      title: "Live Trading Sessions",
      description: "Watch professional traders execute strategies in real-time and learn directly from their process."
    },
    {
      icon: MessageCircle,
      title: "Direct Mentorship",
      description: "One-on-one coaching and personalized feedback from experienced traders who've mastered the markets."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Learn the proprietary risk control systems that protect capital and maximize long-term returns."
    }
  ];

  return (
    <section className="section-padding bg-jet relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Premium Trading Resources"
          subtitle="Everything you need to elevate your trading performance and achieve consistent results."
          align="center"
          className="mb-6"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
