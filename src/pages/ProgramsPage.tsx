
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProgramsPage = () => {
  const tiers = [
    {
      name: "Apprentice",
      price: "297",
      period: "per month",
      description: "Perfect for traders starting their journey.",
      colorClass: "border-gold/20",
      featured: false,
      features: [
        { name: "Basic trading strategies", included: true },
        { name: "Weekly market analysis", included: true },
        { name: "Community access", included: true },
        { name: "Trading framework guides", included: true },
        { name: "Monthly Q&A sessions", included: true },
        { name: "Live trading sessions", included: false },
        { name: "Direct mentor feedback", included: false },
        { name: "1-on-1 coaching", included: false },
        { name: "Custom trading algorithms", included: false },
      ]
    },
    {
      name: "Accelerator",
      price: "997",
      period: "per month",
      description: "For committed traders ready to scale up.",
      colorClass: "border-gold",
      featured: true,
      features: [
        { name: "Basic trading strategies", included: true },
        { name: "Weekly market analysis", included: true },
        { name: "Community access", included: true },
        { name: "Trading framework guides", included: true },
        { name: "Monthly Q&A sessions", included: true },
        { name: "Live trading sessions", included: true },
        { name: "Direct mentor feedback", included: true },
        { name: "1-on-1 coaching", included: false },
        { name: "Custom trading algorithms", included: false },
      ]
    },
    {
      name: "Master",
      price: "2,997",
      period: "per month",
      description: "Elite coaching for professional traders.",
      colorClass: "border-gold/20",
      featured: false,
      features: [
        { name: "Basic trading strategies", included: true },
        { name: "Weekly market analysis", included: true },
        { name: "Community access", included: true },
        { name: "Trading framework guides", included: true },
        { name: "Monthly Q&A sessions", included: true },
        { name: "Live trading sessions", included: true },
        { name: "Direct mentor feedback", included: true },
        { name: "1-on-1 coaching", included: true },
        { name: "Custom trading algorithms", included: true },
      ]
    }
  ];

  const faqs = [
    {
      question: "Which tier is right for me?",
      answer: "If you're new to trading or have limited experience, start with the Apprentice tier. Intermediate traders who understand basic concepts and are ready to implement more advanced strategies should consider the Accelerator tier. The Master tier is designed for serious traders ready for professional-level mentorship and customized strategy development."
    },
    {
      question: "Can I upgrade my membership later?",
      answer: "Absolutely. Many members start with the Apprentice tier and upgrade as they develop their skills and confidence. You can upgrade at any time, and we'll prorate your payments accordingly."
    },
    {
      question: "What kind of returns can I expect?",
      answer: "While we can't guarantee specific returns (and you should be wary of any program that does), our members typically see significant improvement in their trading performance. Our focus is on teaching you sustainable strategies that work across different market conditions, not just in bull markets."
    },
    {
      question: "How much time commitment is required?",
      answer: "For optimal results, we recommend dedicating at least 5-10 hours weekly for the Apprentice tier, 10-15 hours for the Accelerator tier, and 15-20 hours for the Master tier. However, all resources are available on-demand, allowing you to learn at your own pace."
    }
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
                Choose a Membership That <span className="gold-gradient">Matches Your Ambition</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                We offer tiered programs designed to meet you at your current level and elevate your trading performance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Program Tiers */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            {/* Pricing Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {tiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`rounded-lg overflow-hidden border-2 ${tier.colorClass} transition-transform duration-300 ${tier.featured ? 'shadow-lg shadow-gold/20 scale-105 z-10' : ''}`}
                >
                  {/* Tier Header */}
                  <div className={`p-6 ${tier.featured ? 'bg-gradient-gold text-jet' : 'bg-charcoal text-white'}`}>
                    <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                    <div className="flex items-end gap-1 mb-4">
                      <span className="text-3xl font-bold">${tier.price}</span>
                      <span className={tier.featured ? 'text-jet/70' : 'text-white/70'}>{tier.period}</span>
                    </div>
                    <p className={tier.featured ? 'text-jet/80' : 'text-white/70'}>{tier.description}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="p-6 bg-charcoal/50">
                    <ul className="space-y-4 mb-6">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/80">
                          {feature.included ? (
                            <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.featured ? 'text-gold' : 'text-gold/70'}`} />
                          ) : (
                            <X className="w-5 h-5 mr-3 flex-shrink-0 text-white/30" />
                          )}
                          <span>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className={`w-full ${
                      tier.featured ? 
                      'bg-gradient-gold hover:bg-gold text-jet' : 
                      'bg-transparent border border-gold text-gold hover:bg-gold/5'
                    }`}>
                      <Link to="/apply">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Program Comparison */}
            <SectionHeading
              title="Detailed Program Comparison"
              subtitle="A comprehensive look at what each tier offers to help you make the right choice."
            />
            
            <div className="overflow-x-auto mb-16">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gold/30">
                    <th className="p-4 text-left text-white">Features</th>
                    <th className="p-4 text-center text-white">Apprentice</th>
                    <th className="p-4 text-center text-white bg-gold/10">Accelerator</th>
                    <th className="p-4 text-center text-white">Master</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/80">Market Analysis</td>
                    <td className="p-4 text-center text-white/80">Weekly</td>
                    <td className="p-4 text-center text-white bg-gold/10">Daily</td>
                    <td className="p-4 text-center text-white/80">Daily + Custom</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/80">Trading Strategies</td>
                    <td className="p-4 text-center text-white/80">5 Basic Strategies</td>
                    <td className="p-4 text-center text-white bg-gold/10">15+ Advanced Strategies</td>
                    <td className="p-4 text-center text-white/80">All Strategies + Custom</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/80">Community Access</td>
                    <td className="p-4 text-center text-white/80"><Check className="w-5 h-5 mx-auto text-green-500" /></td>
                    <td className="p-4 text-center text-white bg-gold/10"><Check className="w-5 h-5 mx-auto text-green-500" /></td>
                    <td className="p-4 text-center text-white/80"><Check className="w-5 h-5 mx-auto text-green-500" /></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/80">Live Trading Sessions</td>
                    <td className="p-4 text-center text-white/80"><X className="w-5 h-5 mx-auto text-red-500" /></td>
                    <td className="p-4 text-center text-white bg-gold/10">3x Weekly</td>
                    <td className="p-4 text-center text-white/80">Daily</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/80">1-on-1 Coaching</td>
                    <td className="p-4 text-center text-white/80"><X className="w-5 h-5 mx-auto text-red-500" /></td>
                    <td className="p-4 text-center text-white bg-gold/10"><X className="w-5 h-5 mx-auto text-red-500" /></td>
                    <td className="p-4 text-center text-white/80">Bi-weekly</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/80">Custom Strategies</td>
                    <td className="p-4 text-center text-white/80"><X className="w-5 h-5 mx-auto text-red-500" /></td>
                    <td className="p-4 text-center text-white bg-gold/10"><X className="w-5 h-5 mx-auto text-red-500" /></td>
                    <td className="p-4 text-center text-white/80"><Check className="w-5 h-5 mx-auto text-green-500" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white/80">Resource Library</td>
                    <td className="p-4 text-center text-white/80">Basic</td>
                    <td className="p-4 text-center text-white bg-gold/10">Complete</td>
                    <td className="p-4 text-center text-white/80">Complete + Exclusive</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="Which tier is right for me?"
                subtitle="Answers to common questions about our membership tiers."
                align="center"
              />
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                    <AccordionTrigger className="text-white text-lg">
                      <div className="flex items-center">
                        <HelpCircle className="w-5 h-5 mr-2 text-gold" />
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-white/70 mb-6">
                Still not sure which program is right for you?
              </p>
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-br from-black to-charcoal relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
          
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gold-gradient">Level Up</span> Your Trading?
              </h2>
              
              <p className="text-xl text-white/70 mb-8">
                Take the first step toward trading mastery. Apply today and join the elite circle of successful Bullish Whales traders.
              </p>
              
              <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
                <Link to="/apply">Apply for Membership</Link>
              </Button>
              
              <p className="text-white/50 mt-6 text-sm">
                Only 50 new members accepted each quarter. Applications reviewed within 48 hours.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProgramsPage;
