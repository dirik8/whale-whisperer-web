
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Target, Lock, BarChart3 } from "lucide-react";

const AboutPage = () => {
  const milestones = [
    {
      year: "2016",
      title: "The Beginning",
      description: "Left CPA career to pursue trading full-time after 200% returns in personal portfolio."
    },
    {
      year: "2018",
      title: "First Mentorship",
      description: "Started coaching 5 traders who all achieved profitability within 90 days."
    },
    {
      year: "2019",
      title: "Trading System Development",
      description: "Developed the proprietary BWC Trading Framework now used by thousands."
    },
    {
      year: "2021",
      title: "Community Launch",
      description: "Officially launched Bullish Whales Club with 100 founding members."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to serve 5,000+ traders across 60+ countries worldwide."
    }
  ];

  const values = [
    {
      icon: TrendingUp,
      title: "Performance",
      description: "We prioritize real results over hype. Every strategy, framework, and teaching is battle-tested."
    },
    {
      icon: Target,
      title: "Transparency",
      description: "No hidden fees, no exaggerated claims—just honest assessments and realistic expectations."
    },
    {
      icon: Lock,
      title: "Exclusivity",
      description: "We maintain high standards for membership to ensure quality interactions and focused learning."
    },
    {
      icon: BarChart3,
      title: "Execution",
      description: "Knowledge without action is worthless. We emphasize implementation and accountability."
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-midnight relative overflow-hidden">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                From CPA to Crypto Kingmaker – <span className="gold-gradient">The Story Behind Bullish Whales</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Building trust. Showcasing credibility. Highlighting transformation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Founder's Journey */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  title="The Founder's Journey"
                  subtitle="From corporate accountant to crypto mentor—a path driven by passion and performance."
                />
                
                <div className="space-y-6 text-white/80">
                  <p>
                    My journey began in the corporate world as a Certified Public Accountant (CPA), where I spent years analyzing companies and their financial statements. This analytical background gave me a unique perspective when I first discovered cryptocurrency in 2015.
                  </p>
                  
                  <p>
                    What started as a side interest quickly became an obsession as I realized the transformative potential of blockchain technology and the wealth-building opportunities in the emerging crypto markets.
                  </p>
                  
                  <p>
                    After achieving consistent returns that far outpaced my corporate salary, I made the decision in 2016 to leave my CPA career and trade full-time. The transition wasn't easy—the crypto market is volatile and unforgiving to the unprepared.
                  </p>
                  
                  <p>
                    Through extensive research, countless hours of screen time, and a systematic approach to risk management, I developed trading frameworks that delivered consistent results regardless of market conditions.
                  </p>
                  
                  <p>
                    In 2018, I began mentoring a small group of traders who were struggling with the same challenges I had overcome. Their rapid transformation and success confirmed what I suspected: there was a significant gap in high-quality, honest crypto trading education.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium hover:scale-105 transition-transform duration-300">
                    <Link to="/apply">Join Our Community</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                    alt="Founder of Bullish Whales Club" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-full h-full border-2 border-gold rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-20 px-4 bg-midnight">
          <div className="container mx-auto">
            <SectionHeading
              title="Our Growth Timeline"
              subtitle="Key milestones in the Bullish Whales Club journey from inception to industry leadership."
              align="center"
            />
            
            <div className="max-w-4xl mx-auto mt-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index < milestones.length - 1 && (
                    <div className="absolute left-[42px] top-14 bottom-0 w-0.5 bg-gold/30"></div>
                  )}
                  
                  {/* Milestone content */}
                  <div className="flex gap-8 mb-12 animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                    <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-jet font-bold text-xl border-4 border-midnight z-10">
                      {milestone.year}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-white/70">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mission */}
        <section className="py-20 px-4 bg-gradient-to-br from-black to-charcoal">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <SectionHeading
                title="Our Mission"
                align="center"
              />
              
              <p className="text-2xl md:text-3xl text-white/90 leading-relaxed animate-fade-in">
                We're here to make Wall Street-level strategy accessible to those ready to grow, by providing elite education, proven frameworks, and a supportive community of serious traders.
              </p>
              
              <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
                  <Link to="/apply">Apply for Membership</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <SectionHeading
              title="Core Values"
              subtitle="The principles that guide everything we do at Bullish Whales Club."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-charcoal/50 border border-gold/10 p-8 rounded-lg transition-all duration-300 hover:border-gold/30 text-center animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-gold mx-auto flex items-center justify-center text-jet mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-white/70">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Quote */}
        <section className="py-28 px-4 bg-midnight relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-gold text-6xl font-serif mb-6">"</div>
              <p className="text-3xl md:text-4xl font-playfair text-white mb-8 leading-relaxed">
                True wealth starts with true strategy. Not hype, not shortcuts—just proven methods and discipline.
              </p>
              <Separator className="max-w-xs mx-auto bg-gold/30 my-6" />
              <p className="text-gold font-medium">Founder, Bullish Whales Club</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
