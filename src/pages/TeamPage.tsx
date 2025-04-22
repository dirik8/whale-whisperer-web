import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Users, Star, Book, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Ava Martinez",
    title: "Founder · Head Strategist",
    bio: "From CPA to Crypto Kingmaker. Built the frameworks now powering a 7-figure portfolio. Author, mentor, market tactician.",
    funFact: "Can recite every Bitcoin halving date from memory.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
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
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Marcus Chen",
    title: "Head of Research",
    bio: "Former Wall Street quantitative analyst. Develops BWC's proprietary indicators and trading algorithms.",
    funFact: "Predicted the 2021 crypto bull run within 2 days accuracy.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sarah Blake",
    title: "Education Director",
    bio: "20+ years in institutional trading. Transformed BWC's education program into an industry-leading curriculum.",
    funFact: "Wrote her thesis on crypto market psychology.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "David Park",
    title: "Risk Management Specialist",
    bio: "Former hedge fund risk analyst. Helps members optimize their position sizing and portfolio management.",
    funFact: "Hasn't had a losing month in 3 years.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Elena Rodriguez",
    title: "Technical Analysis Expert",
    bio: "Chartered Market Technician with expertise in multiple timeframe analysis and pattern recognition.",
    funFact: "Created a custom indicator used by over 10,000 traders.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "James Wilson",
    title: "Options Strategy Specialist",
    bio: "Options trading veteran with 15+ years experience. Developed BWC's options flow analysis system.",
    funFact: "Turned $50K into $1.2M using only options strategies.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Maya Patel",
    title: "Market Psychology Coach",
    bio: "Licensed therapist turned trader. Helps members overcome emotional trading and develop winning mindsets.",
    funFact: "Wrote a best-selling book on trading psychology.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Alex Thompson",
    title: "DeFi Researcher",
    bio: "Blockchain developer and DeFi expert. Identifies emerging opportunities in the DeFi ecosystem.",
    funFact: "Created one of the first yield farming protocols.",
    image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sophie Laurent",
    title: "Global Markets Analyst",
    bio: "Former forex trader with expertise in international markets and macro analysis.",
    funFact: "Speaks five languages, trades in three time zones.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Ryan O'Connor",
    title: "Swing Trading Specialist",
    bio: "Developed BWC's swing trading framework. Expert in identifying high-probability setups.",
    funFact: "Achieved 312% returns in his first year of trading.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=faces",
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
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Meet Our <span className="gold-gradient">Elite Team</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Strategists, mentors, and visionaries forging tomorrow's elite traders through proven strategies and dedicated support.
          </p>
          <div className="flex justify-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gold"></div>
            <div className="w-3 h-3 rounded-full bg-gold/60"></div>
            <div className="w-3 h-3 rounded-full bg-gold/30"></div>
          </div>
        </div>
        
        {/* Team grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-charcoal/70 to-midnight/70 border border-gold/20 rounded-xl overflow-hidden transition-all hover:scale-105 shadow-lg animate-fade-in"
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold gold-gradient mb-1">{member.name}</h3>
                  <p className="text-gold/80 mb-4 text-sm">{member.title}</p>
                  <p className="text-white/80 mb-4 text-sm">{member.bio}</p>
                  <div className="text-xs text-white/60 italic mb-4">
                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">{member.funFact}</span>
                  </div>
                  <div className="flex gap-4">
                    <a href={member.social.linkedin} className="text-gold hover:text-light-gold transition">
                      <span className="sr-only">LinkedIn</span>
                      <Book className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gold hover:text-light-gold transition">
                      <span className="sr-only">Twitter</span>
                      <Star className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team's Values */}
        <div className="mt-20 mb-16">
          <SectionHeading
            title="Our Core Values"
            subtitle="What drives us daily to deliver exceptional trading education and support"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 text-center hover:border-gold/30 transition-all">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gold/10 rounded-full mb-5">
                <Star className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-white/70">We never settle for "good enough." Every strategy, every signal, every educational resource is meticulously crafted and vetted.</p>
            </div>
            
            <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 text-center hover:border-gold/30 transition-all">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gold/10 rounded-full mb-5">
                <Users className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-white/70">Trading is a team sport at BWC. We foster a culture where everyone contributes to collective success through shared insights.</p>
            </div>
            
            <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 text-center hover:border-gold/30 transition-all">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gold/10 rounded-full mb-5">
                <Book className="text-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Education</h3>
              <p className="text-white/70">We believe in teaching traders to fish, not just giving them fish. Our focus is on building self-sufficient trading expertise.</p>
            </div>
          </div>
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
          <p className="italic text-white/90 text-center mb-4">"{testimonial.text}"</p>
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
