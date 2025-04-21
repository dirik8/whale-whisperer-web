
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Ava Martinez",
    title: "Founder · Head Strategist",
    bio: "From CPA to Crypto Kingmaker. Built the frameworks now powering a 7-figure portfolio. Author, mentor, market tactician.",
    funFact: "Can recite every Bitcoin halving date from memory.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Leo Grayson",
    title: "Chief Technology Officer",
    bio: "10+ years in FinTech. Code whisperer. Mastermind behind BWC’s real-time trade signals.",
    funFact: "Hacked his first stock screener at age 14.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  // ...more bios here
];

const TeamPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-midnight">
      <section className="container mx-auto px-4">
        <SectionHeading
          title="Meet the Brains Behind the Bull Run"
          subtitle="Our team fuses Wall Street pedigree, crypto obsession, and a passion for calculated success."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-charcoal/70 border border-gold/15 rounded-xl p-8 text-white relative transition-all hover:scale-105 shadow-lg animate-fade-in"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gold/10 rounded-full mb-4">
                <users className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold gold-gradient mb-1 text-center">{member.name}</h3>
              <p className="text-gold/80 mb-2 text-center text-sm">{member.title}</p>
              <p className="text-white/70 text-center mb-4">{member.bio}</p>
              <div className="text-xs text-white/60 italic text-center mb-4">
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">{member.funFact}</span>
              </div>
              <div className="flex justify-center gap-4">
                <a href={member.social.linkedin}><span className="sr-only">LinkedIn</span><users className="w-5 h-5 text-gold hover:scale-110 transition" /></a>
                <a href={member.social.twitter}><span className="sr-only">Twitter</span><users className="w-5 h-5 text-gold hover:scale-110 transition" /></a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild className="bg-gradient-gold text-jet text-lg font-medium px-8 py-4">
            <Link to="/apply">Apply to Join Our Team</Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default TeamPage;
