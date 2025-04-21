
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

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
];

const featureList = [
  "Private Discord channel",
  "Personalized trading plan",
  "Monthly check-ins with Ava",
  "Exclusive market signals",
];

const testimonials = [
  { text: "Ava’s hands-on coaching changed the game for me — confidence and clarity like never before.", name: "Max W." },
  { text: "I never realized how much edge comes from accountability. This is worth every dollar.", name: "Daria F." },
];

const CoachingPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-midnight">
      <section className="container mx-auto px-4 py-12">
        <SectionHeading
          title="Mentorship That Moves the Needle"
          subtitle="Real results, life-changing accountability, limited slots."
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-charcoal/70 border border-gold/10 rounded-xl p-7 shadow animate-fade-in">
              <div className="mb-2 text-white/60 text-xs italic">Before:</div>
              <div className="mb-4 text-white">{c.before}</div>
              <div className="mb-2 text-gold text-xs italic">After:</div>
              <div className="mb-4 text-gold/90 font-semibold">{c.after}</div>
              <div className="mt-2 text-white/70 text-right">— {c.name}</div>
            </div>
          ))}
        </div>

        <div className="mb-10 flex flex-wrap gap-6 justify-center">
          {featureList.map((f, i) => (
            <div key={i} className="bg-gold/10 border border-gold/20 py-3 px-6 rounded-lg text-gold text-lg font-semibold flex items-center gap-2">
              <span>•</span> {f}
            </div>
          ))}
        </div>

        <div className="mb-12 grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-charcoal/60 rounded-xl border border-gold/10 p-6 text-white/90 shadow">
              <div className="italic mb-2">“{t.text}”</div>
              <div className="text-gold font-bold">— {t.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gold/5 rounded-lg border border-gold/30 py-8 px-6 max-w-lg mx-auto text-center shadow">
          <div className="text-gold font-bold text-2xl mb-2">
            Only 10 Coaching Slots Per Month
          </div>
          <Button asChild className="bg-gradient-gold text-jet font-semibold px-8 py-4 mt-4 hover:scale-105 transition text-lg">
            <a href="/apply">Apply for Elite Coaching</a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default CoachingPage;
