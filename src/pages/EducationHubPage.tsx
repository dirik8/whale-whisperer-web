
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Play, Layers3, BookText, ListCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";

const masterclasses = [
  { 
    title: "Whale Mindset Mastery", 
    category: "Psychology", 
    progress: 45,
    description: "Master the psychology of successful trading and develop elite mental habits.",
    icon: BookText
  },
  { 
    title: "Day Trading Foundations", 
    category: "Day Trading", 
    progress: 80,
    description: "Learn the complete framework for successful intraday trading strategies.",
    icon: Play
  },
  { 
    title: "Macro Moves Bootcamp", 
    category: "Macro", 
    progress: 10,
    description: "Understanding global market trends and capitalizing on major economic shifts.",
    icon: Layers3
  },
  { 
    title: "Swing Trading Strategies", 
    category: "Swing", 
    progress: 70,
    description: "Capture multi-day trends with our proprietary swing trading techniques.",
    icon: GraduationCap 
  },
  { 
    title: "Advanced Chart Analysis", 
    category: "Technical",
    progress: 30,
    description: "Take your technical analysis skills to institutional-grade level.",
    icon: BookOpen
  },
  { 
    title: "Risk Management Mastery", 
    category: "Psychology", 
    progress: 65,
    description: "Learn our exact risk protocols that protect capital during volatile markets.",
    icon: BookText
  }
];

const strategies = [
  {
    title: "Layered Trading Approach",
    desc: "Blend macro, swing, and intraday setups for agility in any market regime.",
    icon: Layers3,
  },
  {
    title: "Edge Through Psychology",
    desc: "Implement routines and journaling for discipline and consistent profits.",
    icon: BookText,
  },
  {
    title: "Risk-First Frameworks",
    desc: "Tools and templates to size your trades and manage capital like a pro.",
    icon: ListCheck,
  },
];

const allCategories = ["Day Trading", "Swing", "Macro", "Psychology", "Technical", "All"];

const EducationHubPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMasterclasses =
    selectedCategory === "All"
      ? masterclasses
      : masterclasses.filter((m) => m.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-jet">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')] bg-fixed opacity-5"></div>

        {/* Hero + Value Section */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-5xl mx-auto mb-12">
            <SectionHeading
              title="Your Command Center for Market Mastery"
              subtitle="Cutting-edge lessons, progress tracking, and exclusive tools crafted by full-time traders—so you can shortcut years of struggle."
              align="center"
              className="gold-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
            />
            <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 mt-6 shadow flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="flex items-center gap-4">
                <Star className="text-gold w-9 h-9" />
                <div>
                  <div className="font-bold text-white/90 text-lg">Why BWC Education Hub delivers:</div>
                  <div className="text-gold font-semibold text-sm">No gatekeeping. No filler—100% actionable, updated monthly.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button asChild className="bg-gradient-gold text-jet font-semibold px-6 py-2 rounded-md hover:scale-105 transition">
                  <Link to="/apply">Unlock Full Access</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Filter Buttons */}
          <div className="mb-10 flex flex-wrap gap-3 items-center justify-center animate-fade-in">
            <span className="bg-gold text-jet font-bold px-4 py-2 rounded-full shadow-lg">Categories:</span>
            {allCategories.map((category) => (
              <button 
                key={category} 
                className={`border px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold ${
                  selectedCategory === category
                    ? "bg-gradient-gold text-jet border-gold shadow-md"
                    : "bg-charcoal/80 text-white border-gold/20 hover:bg-gold/20"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masterclass Grid */}
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMasterclasses.map((cls, idx) => {
              const Icon = cls.icon;
              return (
                <Card 
                  key={idx} 
                  className="group bg-charcoal/90 border border-gold/30 rounded-xl shadow-xl backdrop-blur-sm hover:shadow-gold/20 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
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
                    <p className="text-white/80 mb-8">{cls.description}</p>
                    <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/10 transition-all duration-300 rounded-lg font-bold">
                      {cls.progress > 0 ? "Continue Learning" : "Start Course"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {/* Featured strategies */}
          <div className="mt-16 max-w-5xl mx-auto">
            <SectionHeading
              title="Featured Strategies & Tools"
              subtitle="What sets our curriculum apart:"
              align="center"
              className="mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategies.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="bg-midnight/70 border border-gold/20 rounded-lg p-6 flex flex-col items-center text-center shadow">
                    <div className="bg-gradient-gold rounded-full p-3 mb-3 flex items-center justify-center">
                      <Icon className="text-jet w-7 h-7" />
                    </div>
                    <div className="font-bold text-white text-lg mb-2">{s.title}</div>
                    <p className="text-white/70">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Testimonials and stats section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div className="bg-charcoal/70 border border-gold/10 rounded-xl p-6 text-center shadow">
              <div className="text-4xl text-gold font-bold mb-2">27+</div>
              <div className="text-white/80">Expert Masterclasses</div>
            </div>
            <div className="bg-charcoal/70 border border-gold/10 rounded-xl p-6 text-center shadow">
              <div className="text-4xl text-gold font-bold mb-2">94%</div>
              <div className="text-white/80">Completion Rate</div>
            </div>
            <div className="bg-charcoal/70 border border-gold/10 rounded-xl p-6 text-center shadow">
              <div className="text-4xl text-gold font-bold mb-2">3.2x</div>
              <div className="text-white/80">Avg. ROI Improvement</div>
            </div>
          </div>
          {/* Final CTA */}
          <div className="mt-14 max-w-3xl mx-auto bg-gold/5 border border-gold/20 rounded-xl p-8 flex flex-col items-center shadow animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold gold-gradient mb-2 text-center">Ready for the Next Level?</h3>
            <p className="text-white/90 mb-6 text-center">
              “Expertise is not a secret—it's a system. Join the traders who get our edge, mastery frameworks, and real accountability.”
            </p>
            <Button asChild className="bg-gradient-gold text-jet text-lg font-semibold px-10 py-4 rounded-lg hover:scale-105 transition">
              <Link to="/apply">Unlock Premium Access</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EducationHubPage;
