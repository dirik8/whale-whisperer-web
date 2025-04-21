
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const masterclasses = [
  { title: "Whale Mindset Mastery", category: "Psychology", progress: 45 },
  { title: "Day Trading Foundations", category: "Day Trading", progress: 80 },
  { title: "Macro Moves Bootcamp", category: "Macro", progress: 10 },
  { title: "Swing Trading Strategies", category: "Swing", progress: 70 },
  // ...more classes
];

const EducationHubPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-midnight">
      <section className="container mx-auto px-4 py-12">
        <SectionHeading
          title="Your Command Center for Market Mastery"
          subtitle="Self-paced lessons, progress tracking, and expert insights."
          align="center"
        />
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {masterclasses.map((cls, idx) => (
            <div key={idx} className="bg-charcoal/70 border border-gold/10 rounded-xl p-6 relative group hover:scale-105 transition-all shadow-md animate-fade-in">
              <div className="gold-gradient text-xl font-bold mb-2">{cls.title}</div>
              <div className="text-gold/80 text-sm mb-4">{cls.category}</div>
              <div className="h-2 w-full bg-charcoal/30 rounded-full mb-3">
                <div style={{ width: `${cls.progress}%` }} className="h-full bg-gold rounded-full transition-all"></div>
              </div>
              <div className="text-white/60 text-xs mb-2">Your Progress: {cls.progress}%</div>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 w-full">
                View
              </Button>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-center mb-16">
          <span className="bg-gold text-jet font-bold px-4 py-2 rounded-lg">Categories:</span>
          <span className="bg-charcoal/60 text-white/70 px-3 py-1 rounded-lg">Day Trading</span>
          <span className="bg-charcoal/60 text-white/70 px-3 py-1 rounded-lg">Swing</span>
          <span className="bg-charcoal/60 text-white/70 px-3 py-1 rounded-lg">Macro</span>
          <span className="bg-charcoal/60 text-white/70 px-3 py-1 rounded-lg">Psychology</span>
        </div>
        <div className="bg-charcoal/70 rounded-xl p-8 max-w-2xl mx-auto text-center border border-gold/15 shadow">
          <div className="italic text-white/80 mb-4">&ldquo;Joining the Hub was the best decision for my trading journey. Every module leveled me up.&rdquo;</div>
          <div className="text-gold font-bold mb-2">— Chloe T., Member</div>
          <Button className="bg-gradient-gold text-jet font-semibold px-8 py-4 hover:scale-105 transition">Unlock Full Hub Access</Button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default EducationHubPage;
