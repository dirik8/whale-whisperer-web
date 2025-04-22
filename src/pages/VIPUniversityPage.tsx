
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { GraduationCap, Check, ArrowRight, Calendar, Users, BookOpen, Trophy, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet-async";

const VIPUniversityPage = () => {
  const features = [
    "Advanced Trading Strategies & Analysis",
    "Live Trading Sessions with Expert Mentors",
    "Exclusive Market Insights & Research",
    "Personalized Learning Path",
    "1-on-1 Strategy Development",
    "Access to Private Trading Community",
    "Weekly Live Q&A Sessions",
    "Real-time Trade Alerts & Analysis"
  ];

  const modules = [
    {
      title: "Foundation Trading",
      description: "Master the fundamentals of market analysis, chart patterns, and risk management",
      icon: <BookOpen className="w-10 h-10 text-gold" />,
      weeks: 4,
      lessons: 16
    },
    {
      title: "Advanced Technical Analysis",
      description: "Deep dive into advanced indicators, chart patterns, and market psychology",
      icon: <Target className="w-10 h-10 text-gold" />,
      weeks: 6,
      lessons: 24
    },
    {
      title: "Strategic Portfolio Building",
      description: "Learn to build, balance, and optimize a crypto portfolio for maximum returns",
      icon: <Trophy className="w-10 h-10 text-gold" />,
      weeks: 5,
      lessons: 20
    },
    {
      title: "Risk Management Mastery",
      description: "Implement professional risk management techniques to protect and grow capital",
      icon: <Award className="w-10 h-10 text-gold" />,
      weeks: 3,
      lessons: 12
    }
  ];

  const testimonials = [
    {
      name: "Michael K.",
      role: "Full-time Trader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      quote: "The MK VIP University completely transformed my approach to trading. In just 3 months, I've achieved consistent 15% monthly returns."
    },
    {
      name: "Sarah L.",
      role: "Former Finance Professional",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      quote: "After 10 years in traditional finance, this program showed me what real trading strategy looks like. Worth every penny."
    },
    {
      name: "David R.",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      quote: "I joined as a complete beginner 6 months ago. Now I'm confidently managing a 6-figure portfolio with consistent gains."
    }
  ];

  return (
    <>
      <Helmet>
        <title>MK VIP University | Premier Trading Education | Bullish Whales Club</title>
        <meta name="description" content="Join MK VIP University for elite trading education. Master advanced strategies, live trading sessions, 1-on-1 mentorship, and exclusive market insights." />
        <meta name="keywords" content="trading education, crypto university, advanced trading, trading mentorship, financial education, MK VIP University" />
        <link rel="canonical" href="https://bullishwhales.club/programs/vip-university" />
        <meta property="og:title" content="MK VIP University | Premier Trading Education" />
        <meta property="og:description" content="Join MK VIP University for elite trading education. Master advanced strategies, live trading sessions, 1-on-1 mentorship, and exclusive market insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bullishwhales.club/programs/vip-university" />
        <meta property="og:image" content="https://bullishwhales.club/vip-university-og.jpg" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-midnight">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <GraduationCap className="w-16 h-16 text-gold mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                MK VIP <span className="gold-gradient">University</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Master the Art of Trading with Wall Street-Level Education
              </p>
              <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Elite Trading <span className="gold-gradient">Education</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 bg-charcoal/50 p-6 rounded-lg border border-gold/10">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-20 px-4 bg-midnight relative">
          <div className="container mx-auto">
            <SectionHeading
              title="Comprehensive Curriculum"
              subtitle="Our structured program takes you from fundamentals to mastery with a clear progression path"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {modules.map((module, index) => (
                <div key={index} className="bg-charcoal/50 border border-gold/20 rounded-lg p-8 flex flex-col items-center text-center transition-transform hover:scale-105">
                  <div className="mb-4">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                  <p className="text-white/70 mb-6">{module.description}</p>
                  <div className="mt-auto flex justify-between w-full pt-6 border-t border-gold/10">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gold mr-2" />
                      <span className="text-white/80">{module.weeks} weeks</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-gold mr-2" />
                      <span className="text-white/80">{module.lessons} lessons</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg">
                <Link to="/apply">Apply For MK VIP University</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-4 bg-charcoal">
          <div className="container mx-auto">
            <SectionHeading
              title="Live Session Preview"
              subtitle="Experience the depth and quality of our training with this sample session"
              align="center"
            />
            
            <div className="max-w-4xl mx-auto mt-12 bg-midnight/50 p-2 rounded-lg border border-gold/20">
              <AspectRatio ratio={16/9}>
                <iframe 
                  className="w-full h-full rounded" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="MK VIP University Preview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </AspectRatio>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Market Structure & Institutional Order Flow</h3>
                <p className="text-white/70">
                  In this preview lesson, learn how institutional traders identify key levels and how you can leverage this insight in your own trading strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <SectionHeading
              title="Success Stories"
              subtitle="Hear from our graduates who have transformed their trading through MK VIP University"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-charcoal/70 border-gold/20 p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-gold">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">"{testimonial.quote}"</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-midnight">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">97%</div>
                  <p className="text-white/70">Graduate Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">800+</div>
                  <p className="text-white/70">Successful Graduates</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">12</div>
                  <p className="text-white/70">Expert Instructors</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">24/7</div>
                  <p className="text-white/70">Community Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-jet to-charcoal">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your <span className="gold-gradient">Investment</span>
              </h2>
              <p className="text-xl text-white/70 mb-6">
                MK VIP University isn't just education—it's a transformation of your trading mindset and capabilities
              </p>
              
              <div className="bg-midnight border border-gold/30 rounded-lg p-8 mt-12">
                <div className="text-center mb-6">
                  <span className="text-white/70 text-lg">Full Program Tuition</span>
                  <div className="text-5xl font-bold text-white mt-2">$4,997</div>
                  <span className="text-gold">One-time payment</span>
                </div>
                
                <Separator className="my-6 bg-gold/20" />
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white/90">Complete 18-week intensive curriculum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white/90">72+ hours of live instructional sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white/90">Lifetime access to all course materials and updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white/90">1-on-1 strategy development sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <span className="text-white/90">Exclusive trading community membership</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg">
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5">
                    <Link to="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
              
              <p className="text-white/50 mt-6 text-sm">
                *Application required. Not all applicants will be accepted to maintain our high-quality learning environment.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about MK VIP University"
              align="center"
            />
            
            <div className="max-w-3xl mx-auto mt-12 space-y-6">
              <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Is this program suitable for beginners?</h3>
                <p className="text-white/70">
                  While we accept traders at all levels, our curriculum is designed for those who have at least a basic understanding of markets. Complete beginners may need to complete our foundational resources first.
                </p>
              </div>
              
              <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">How much time should I commit weekly?</h3>
                <p className="text-white/70">
                  For optimal results, students should plan to dedicate 10-15 hours per week to coursework, practice trading, and community engagement.
                </p>
              </div>
              
              <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">What makes MK VIP University different from other programs?</h3>
                <p className="text-white/70">
                  Our program combines institutional-level trading education with personalized mentorship and a supportive community. We focus on sustainable strategies rather than get-rich-quick approaches.
                </p>
              </div>
              
              <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Is there a money-back guarantee?</h3>
                <p className="text-white/70">
                  We offer a 30-day satisfaction guarantee. If you've attended all sessions, completed the assignments, and still don't find value, we'll refund your investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-black to-charcoal">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gold-gradient">Master Trading</span>?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join our elite trading education program and learn from the best in the industry.
            </p>
            <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg">
              <Link to="/apply" className="flex items-center gap-2">
                Begin Your Journey <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VIPUniversityPage;
