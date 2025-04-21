
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen } from "lucide-react";

const cases = [
  {
    before: "Struggling with emotional trades, inconsistent profits.",
    after: "Grew account 4x in 8 months and journals every trade.",
    name: "Liam S.",
  },
  {
    before: "Missed big moves, analysis overwhelm.",
    after: "Now plans every entry, averages 17% monthly ROI.",
    name: "Priya C.",
  },
  {
    before: "Analysis paralysis, chasing every trend.",
    after: "Follows a process, achieves >90% planned trades, sleeping soundly.",
    name: "Omar E.",
  },
];

const featureList = [
  "Private Discord channel",
  "Personalized trading plan",
  "Monthly check-ins with Ava",
  "Exclusive market signals",
  "1:1 Mindset & Strategy Zooms"
];

const testimonials = [
  { text: "Ava’s hands-on coaching changed the game for me — confidence and clarity like never before.", name: "Max W." },
  { text: "I never realized how much edge comes from accountability. This is worth every dollar.", name: "Daria F." },
  { text: "My trading was stagnant for years. Now, I execute with purpose and finally see consistent gains.", name: "Neha B." },
];

const CoachingPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-jet">
      <section className="container mx-auto px-4 py-12">
        <SectionHeading
          title="Mentorship That Moves the Needle"
          subtitle="Real results, life-changing accountability, limited slots—serious traders only."
          align="center"
        />

        {/* “Before and After” Cases */}
        <div className="grid md:grid-cols-3 gap-10 mb-12 mt-10">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-charcoal/80 border border-gold/15 rounded-xl p-7 shadow animate-fade-in">
              <div className="mb-2 text-white/60 text-xs italic">Before:</div>
              <div className="mb-4 text-white">{c.before}</div>
              <div className="mb-2 text-gold text-xs italic">After:</div>
              <div className="mb-4 text-gold/90 font-semibold">{c.after}</div>
              <div className="mt-2 text-white/70 text-right">— {c.name}</div>
            </div>
          ))}
        </div>
        {/* Feature List */}
        <div className="mb-10 flex flex-wrap gap-6 justify-center">
          {featureList.map((f, i) => (
            <div key={i} className="bg-gold/10 border border-gold/20 py-3 px-6 rounded-lg text-gold text-lg font-semibold flex items-center gap-2 shadow">
              <Star className="w-5 h-5" /> {f}
            </div>
          ))}
        </div>
        {/* Testimonials block */}
        <div className="mb-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-charcoal/60 rounded-xl border border-gold/10 p-6 text-white/90 shadow">
              <div className="italic mb-2">“{t.text}”</div>
              <div className="text-gold font-bold flex items-center gap-2"><Users className="w-5 h-5" /> {t.name}</div>
            </div>
          ))}
        </div>
        {/* CTA + Slots */}
        <div className="mt-8 bg-gold/5 rounded-lg border border-gold/30 py-8 px-6 max-w-xl mx-auto text-center shadow">
          <div className="text-gold font-bold text-2xl mb-2 flex items-center gap-2 justify-center">
            <BookOpen className="w-7 h-7" /> Only 10 Coaching Slots Per Month
          </div>
          <p className="mb-4 text-white/80">Every spot includes a private onboarding call and instant access to the coaching Discord.</p>
          <Button asChild className="bg-gradient-gold text-jet font-semibold px-8 py-4 mt-4 hover:scale-105 transition text-lg rounded-lg">
            <a href="/apply">Apply for Elite Coaching</a>
          </Button>
          <div className="text-white/50 text-xs mt-2">Spots fill up quickly. Reserve yours early.</div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default CoachingPage;
