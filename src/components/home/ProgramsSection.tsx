
import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ProgramsSection = () => {
  const tiers = [
    {
      name: "Apprentice",
      price: "297",
      period: "per month",
      description: "Perfect for traders starting their journey.",
      features: [
        "Basic trading strategies",
        "Weekly market analysis",
        "Community access",
        "Trading framework guides",
        "Monthly Q&A sessions"
      ],
      featured: false,
      cta: "Apply Now",
      link: "/apply"
    },
    {
      name: "Accelerator",
      price: "997",
      period: "per month",
      description: "For committed traders ready to scale up.",
      features: [
        "Everything in Apprentice",
        "Custom trading playbooks",
        "Daily live trading sessions",
        "Direct mentor feedback",
        "Advanced educational library",
        "Private Discord channels"
      ],
      featured: true,
      cta: "Apply Now",
      link: "/apply"
    },
    {
      name: "Master",
      price: "2,997",
      period: "per month",
      description: "Elite coaching for professional traders.",
      features: [
        "Everything in Accelerator",
        "1-on-1 coaching sessions",
        "Custom trading algorithms",
        "Private mastermind group",
        "Weekly strategy calls",
        "Lifetime resource access"
      ],
      featured: false,
      cta: "Apply Now",
      link: "/apply"
    }
  ];

  return (
    <section className="section-padding bg-midnight relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Choose a Membership That Matches Your Ambition"
          subtitle="We offer tiered programs designed to meet you at your current level and elevate your trading performance."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`
                rounded-lg overflow-hidden transition-transform duration-300 animate-fade-in
                ${tier.featured ? 
                  'border-2 border-gold shadow-lg shadow-gold/20 scale-105 z-10' : 
                  'border border-gold/20'
                }
              `}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Tier Header */}
              <div className={`
                p-6 
                ${tier.featured ? 'bg-gradient-gold text-jet' : 'bg-charcoal text-white'}
              `}>
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-bold">${tier.price}</span>
                  <span className={`${tier.featured ? 'text-jet/70' : 'text-white/70'}`}>{tier.period}</span>
                </div>
                <p className={`${tier.featured ? 'text-jet/80' : 'text-white/70'}`}>{tier.description}</p>
              </div>
              
              {/* Features */}
              <div className="p-6 bg-charcoal/50">
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.featured ? 'text-gold' : 'text-gold/70'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className={`w-full ${
                  tier.featured ? 
                  'bg-gradient-gold hover:bg-gold text-jet' : 
                  'bg-transparent border border-gold text-gold hover:bg-gold/5'
                }`}>
                  <Link to={tier.link}>{tier.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-4">
            Need help choosing the right program for your needs?
          </p>
          <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
