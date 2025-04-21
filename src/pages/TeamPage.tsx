
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Users, Star, Book } from "lucide-react";
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
    bio: "10+ years in FinTech. Code whisperer. Mastermind behind BWC's real-time trade signals.",
    funFact: "Hacked his first stock screener at age 14.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Priya Kapoor",
    title: "Community & Support Lead",
    bio: "Driven by empowering everyday traders. Coordinates global events, moderates the Discord, and ensures every member feels at home.",
    funFact: "Taught herself Python just to automate her crypto DCA.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const testimonial = {
  text: "The BWC team is unlike any trading community I've joined—they truly want to see each member succeed. The access to expert minds and bottomless support is priceless.",
  name: "Elijah W., Club Member",
  bio: "20-year veteran turned profitable after joining"
};

const TeamPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight via-charcoal to-jet">
      <section className="container mx-auto px-4 py-16 relative">
        <SectionHeading
          title="Meet the Brains Behind the Bull Run"
          subtitle="Strategists, mentors, and visionaries forging tomorrow’s elite traders."
          align="center"
        />
        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-charcoal/70 to-midnight/70 border border-gold/20 rounded-xl p-8 text-white relative transition-all hover:scale-105 shadow-lg animate-fade-in"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gold/10 rounded-full mb-5 border-2 border-gold">
                <Users className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold gold-gradient mb-1 text-center">{member.name}</h3>
              <p className="text-gold/80 mb-2 text-center text-sm">{member.title}</p>
              <p className="text-white/80 text-center mb-4">{member.bio}</p>
              <div className="text-xs text-white/60 italic text-center mb-4">
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">{member.funFact}</span>
              </div>
              <div className="flex justify-center gap-5">
                <a href={member.social.linkedin}><span className="sr-only">LinkedIn</span><Book className="text-gold w-5 h-5 hover:text-light-gold transition" /></a>
                <a href={member.social.twitter}><span className="sr-only">Twitter</span><Star className="text-gold w-5 h-5 hover:text-light-gold transition" /></a>
              </div>
            </div>
          ))}
        </div>
        {/* Divider */}
        <div className="my-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-gold rounded-full"></div>
        </div>
        {/* Testimonial card */}
        <div className="max-w-xl mx-auto bg-charcoal/80 border border-gold/30 p-8 rounded-2xl shadow-xl mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-2">
            <Star className="text-gold mr-2" /> <span className="font-semibold text-gold">Member Story</span>
          </div>
          <p className="italic text-white/90 text-center mb-4">“{testimonial.text}”</p>
          <div className="text-gold font-bold text-center">{testimonial.name}</div>
          <div className="text-white/60 text-xs text-center">{testimonial.bio}</div>
        </div>
        {/* CTA */}
        <div className="mt-4 flex justify-center">
          <Button asChild className="bg-gradient-gold text-jet text-lg font-medium px-8 py-4 rounded-lg hover:scale-105 transition">
            <Link to="/apply">Apply to Join Our Team</Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default TeamPage;
