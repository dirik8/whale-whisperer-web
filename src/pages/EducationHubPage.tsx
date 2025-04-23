import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UrgencyBanner from "@/components/application/UrgencyBanner";
import HeroBackground from "@/components/ui/HeroBackground";
import { Helmet } from "react-helmet-async";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, Video, FileText, Users, ArrowRight, CheckCircle } from "lucide-react";

const heroImage = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png";

const EducationHubPage = () => {
  const resources = [
    {
      title: "Trading Fundamentals",
      description: "Master the core concepts every successful trader needs to know.",
      icon: <Book className="w-6 h-6 text-gold" />,
      items: [
        "Technical Analysis Foundations",
        "Market Structure Mastery",
        "Risk Management Essentials",
        "Trading Psychology 101",
        "Chart Pattern Recognition"
      ]
    },
    {
      title: "Strategy Library",
      description: "Battle-tested trading strategies for various market conditions.",
      icon: <FileText className="w-6 h-6 text-gold" />,
      items: [
        "Bullish Whale Momentum Strategy",
        "Volatility Breakout System",
        "Swing Trading Masterclass",
        "Reversal Pattern Playbook",
        "Trend Following Framework"
      ]
    },
    {
      title: "Video Workshops",
      description: "In-depth video training from our expert trading team.",
      icon: <Video className="w-6 h-6 text-gold" />,
      items: [
        "Market Cycle Analysis",
        "Advanced Order Flow",
        "Institutional Trading Secrets",
        "Crypto Market Dynamics",
        "Risk-to-Reward Optimization"
      ]
    },
    {
      title: "Community Resources",
      description: "Learn and grow with our community of successful traders.",
      icon: <Users className="w-6 h-6 text-gold" />,
      items: [
        "Weekly Trading Challenges",
        "Trade Review Sessions",
        "Member Success Stories",
        "Live Trading Rooms",
        "Networking Opportunities"
      ]
    }
  ];

  const featuredCourses = [
    {
      title: "Whale Strategy Masterclass",
      description: "Our flagship course teaching the complete Bullish Whales trading methodology.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=500&q=80",
      level: "Intermediate",
      modules: 12,
      duration: "18 hours"
    },
    {
      title: "Advanced Chart Reading",
      description: "Learn to spot high-probability setups that most traders miss.",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=500&q=80",
      level: "Advanced",
      modules: 8,
      duration: "10 hours"
    },
    {
      title: "Trading Psychology Mastery",
      description: "Overcome emotional trading and develop the mindset of elite performers.",
      image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?auto=format&fit=crop&w=500&q=80",
      level: "All Levels",
      modules: 6,
      duration: "8 hours"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Education Hub | Bullish Whales Club Trading Resources</title>
        <meta name="description" content="Access our comprehensive library of trading education, strategies, and resources designed to transform you into an elite trader." />
        <meta name="keywords" content="trading education, crypto trading courses, trading resources, trading strategies, bullish whales club" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal relative">
        <section className="relative h-[460px] overflow-hidden">
          <HeroBackground image={heroImage} brightness={0.38} />
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center pt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 gold-gradient drop-shadow animate-fade-in">
              Education Hub
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8 animate-fade-in">
              The all-access vault to every lesson, live workshop, and resource for building trading mastery.
            </p>
          </div>
        </section>
        <UrgencyBanner />
        
        {/* Resource Categories */}
        <section className="py-16 px-4 bg-gradient-to-b from-jet to-midnight">
          <div className="container mx-auto">
            <SectionHeading
              title="Comprehensive Trading Resources"
              subtitle="Everything you need to transform your trading, all in one place"
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {resources.map((resource, index) => (
                <div 
                  key={index} 
                  className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-all animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-white/70 mb-4">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.items.map((item, i) => (
                      <li key={i} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 mr-2 text-gold/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Courses */}
        <section className="py-16 px-4 bg-midnight">
          <div className="container mx-auto">
            <SectionHeading
              title="Featured Courses"
              subtitle="Our most popular and comprehensive trading education programs"
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {featuredCourses.map((course, index) => (
                <div 
                  key={index} 
                  className="bg-charcoal/50 border border-gold/10 rounded-lg overflow-hidden hover:border-gold/30 transition-all animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full">{course.level}</span>
                      <span className="text-xs text-white/60">{course.modules} modules | {course.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-white/70 mb-4">{course.description}</p>
                    <Button asChild variant="outline" className="w-full border-gold text-gold hover:bg-gold/5">
                      <Link to="/apply">Access Course</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Membership CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-black to-charcoal relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
          
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gold-gradient">Accelerate</span> Your Trading Education?
              </h2>
              
              <p className="text-xl text-white/70 mb-8">
                Get unlimited access to our complete education library, live training sessions, and expert mentorship.
              </p>
              
              <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
                <Link to="/apply">Apply for Membership <ArrowRight className="ml-2" /></Link>
              </Button>
              
              <p className="text-white/50 mt-6 text-sm">
                All resources included with your Bullish Whales Club membership.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EducationHubPage;
