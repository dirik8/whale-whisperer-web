
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Play, Layers3, BookText } from "lucide-react";
import { Link } from "react-router-dom";

const masterclasses = [
  { 
    title: "Whale Mindset Mastery", 
    category: "Psychology", 
    progress: 45,
    description: "Master the psychology of successful trading and develop elite mental habits",
    icon: BookText
  },
  { 
    title: "Day Trading Foundations", 
    category: "Day Trading", 
    progress: 80,
    description: "Learn the complete framework for successful intraday trading strategies",
    icon: Play
  },
  { 
    title: "Macro Moves Bootcamp", 
    category: "Macro", 
    progress: 10,
    description: "Understanding global market trends and capitalizing on major economic shifts",
    icon: Layers3
  },
  { 
    title: "Swing Trading Strategies", 
    category: "Swing", 
    progress: 70,
    description: "Capture multi-day trends with our proprietary swing trading techniques",
    icon: GraduationCap 
  },
  { 
    title: "Advanced Chart Analysis", 
    category: "Technical",
    progress: 30,
    description: "Take your technical analysis skills to institutional-grade level",
    icon: BookOpen
  },
  { 
    title: "Risk Management Mastery", 
    category: "Psychology", 
    progress: 65,
    description: "Learn our exact risk protocols that protect capital during volatile markets",
    icon: BookText
  },
];

const EducationHubPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-jet">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3')] bg-fixed opacity-5"></div>
      
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Your Command Center for Market Mastery"
            subtitle="Self-paced lessons, progress tracking, and expert insights crafted for serious traders."
            align="center"
            className="gold-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
          />
          
          <div className="mt-8 mb-16 flex flex-wrap gap-3 items-center justify-center">
            <span className="bg-gold text-jet font-bold px-4 py-2 rounded-full shadow-lg">Categories:</span>
            {["Day Trading", "Swing", "Macro", "Psychology", "Technical", "All"].map((category) => (
              <button 
                key={category} 
                className="bg-charcoal/80 hover:bg-gold/20 border border-gold/20 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {masterclasses.map((cls, idx) => {
            const Icon = cls.icon;
            return (
              <Card 
                key={idx} 
                className="group bg-charcoal/80 border border-gold/30 rounded-xl shadow-xl backdrop-blur-sm hover:shadow-gold/20 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
              >
                <div className="h-2 w-full bg-gradient-gold"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-gold to-dark-gold rounded-full p-3 mr-4 shadow-lg">
                      <Icon size={24} className="text-jet" />
                    </div>
                    <div>
                      <div className="gold-gradient text-xl font-bold">{cls.title}</div>
                      <div className="text-gold/80 text-sm">{cls.category}</div>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6">{cls.description}</p>
                  
                  <div className="relative h-2 w-full bg-charcoal/30 rounded-full mb-3 overflow-hidden">
                    <div 
                      style={{ width: `${cls.progress}%` }} 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold to-light-gold rounded-full transition-all duration-1000 ease-out"
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-white/80 text-sm mb-4">Progress: {cls.progress}%</div>
                    {cls.progress === 100 ? (
                      <span className="text-gold text-sm font-medium">Completed</span>
                    ) : null}
                  </div>
                  
                  <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10 transition-all duration-300">
                    {cls.progress > 0 ? "Continue Learning" : "Start Course"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto rounded-xl overflow-hidden border-0 shadow-2xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-midnight"></div>
              <div className="px-8 py-12 md:p-12 relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 gold-gradient">Ready to Unlock Your Full Trading Potential?</h3>
                  <p className="text-white/90 mb-6">
                    "Joining the Hub was the best decision of my trading journey. The psychology module alone 
                    tripled my win rate and the trade alerts provided consistent 20%+ returns. Every serious 
                    trader needs this education."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gold/20 mr-4 flex items-center justify-center">
                      <span className="text-gold font-bold">CT</span>
                    </div>
                    <div>
                      <div className="text-gold font-semibold">Chloe T.</div>
                      <div className="text-white/70 text-sm">Member since 2023 • 317% portfolio growth</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Button asChild className="bg-gradient-gold text-jet font-semibold text-lg px-8 py-6 rounded-lg hover:scale-105 transition-transform shadow-xl">
                    <Link to="/apply">Unlock Premium Access</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-charcoal/50 border border-gold/10 rounded-xl p-6 text-center">
            <div className="text-4xl text-gold font-bold mb-2">27+</div>
            <div className="text-white/80">Expert Masterclasses</div>
          </div>
          <div className="bg-charcoal/50 border border-gold/10 rounded-xl p-6 text-center">
            <div className="text-4xl text-gold font-bold mb-2">94%</div>
            <div className="text-white/80">Completion Rate</div>
          </div>
          <div className="bg-charcoal/50 border border-gold/10 rounded-xl p-6 text-center">
            <div className="text-4xl text-gold font-bold mb-2">3.2x</div>
            <div className="text-white/80">Average ROI Improvement</div>
          </div>
        </div>

      </section>
    </main>
    <Footer />
  </>
);

export default EducationHubPage;
