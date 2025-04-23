import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UrgencyBanner from "@/components/application/UrgencyBanner";
import HeroBackground from "@/components/ui/HeroBackground";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, BookOpen, Users, Award, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import TestimonialCard from "@/components/ui/testimonial-card";

const heroImage = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png";

const VIPUniversityPage = () => {
  const features = [
    {
      title: "Comprehensive Curriculum",
      description: "From technical analysis to advanced risk management, our curriculum covers every aspect of successful trading.",
      icon: <BookOpen className="w-6 h-6 text-gold" />
    },
    {
      title: "Expert Instructors",
      description: "Learn directly from professional traders with 15+ years of experience in crypto, forex, and traditional markets.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Certification Program",
      description: "Earn a recognized certification that demonstrates your trading expertise and commitment to excellence.",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "Lifetime Access",
      description: "Your enrollment includes lifetime access to all course materials, updates, and the alumni community.",
      icon: <Clock className="w-6 h-6 text-gold" />
    }
  ];

  const modules = [
    {
      number: "01",
      title: "Trading Psychology Mastery",
      description: "Develop the mindset of elite traders. Learn to manage emotions, maintain discipline, and make decisions based on logic rather than fear or greed.",
      lessons: 12,
      duration: "4 weeks"
    },
    {
      number: "02",
      title: "Technical Analysis Deep Dive",
      description: "Master chart patterns, indicators, and price action analysis. Learn to identify high-probability setups across any market condition.",
      lessons: 18,
      duration: "6 weeks"
    },
    {
      number: "03",
      title: "Risk Management & Capital Preservation",
      description: "Implement professional risk management protocols. Learn position sizing, stop placement, and portfolio allocation strategies.",
      lessons: 10,
      duration: "3 weeks"
    },
    {
      number: "04",
      title: "Advanced Trading Strategies",
      description: "Develop your personal trading system. Learn advanced entry/exit techniques, market internals analysis, and multi-timeframe confirmation.",
      lessons: 15,
      duration: "5 weeks"
    },
    {
      number: "05",
      title: "Automation & Algorithm Development",
      description: "Learn to automate your trading strategies. Introduction to algorithmic trading, backtesting, and strategy optimization.",
      lessons: 14,
      duration: "4 weeks"
    },
    {
      number: "06",
      title: "Professional Trading Business",
      description: "Structure your trading as a professional business. Learn tax optimization, business planning, and scaling your operation.",
      lessons: 8,
      duration: "2 weeks"
    }
  ];

  const testimonials = [
    {
      quote: "VIP University transformed my approach to trading. The structured curriculum and expert mentorship helped me develop a trading system that's delivered consistent profits for over a year now.",
      author: "Michael R.",
      role: "Former IT Professional, Now Full-time Trader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
    },
    {
      quote: "The psychological training alone was worth the investment. I've tried other trading courses, but none addressed the mental game like BWC's VIP University. It's been the missing piece in my trading journey.",
      author: "Sarah L.",
      role: "Crypto Portfolio Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
    }
  ];

  return (
    <>
      <Helmet>
        <title>VIP University | Elite Trading Education | Bullish Whales Club</title>
        <meta name="description" content="Join BWC's VIP University for comprehensive trading education from professional traders. Master technical analysis, psychology, and risk management." />
        <meta name="keywords" content="trading education, crypto trading course, professional trading, trading psychology, technical analysis" />
        <meta property="og:title" content="VIP University | Elite Trading Education | Bullish Whales Club" />
        <meta property="og:description" content="Join BWC's VIP University for comprehensive trading education from professional traders. Master technical analysis, psychology, and risk management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bullishwhales.club/programs/vip-university" />
        <meta property="og:image" content={heroImage} />
        <link rel="canonical" href="https://bullishwhales.club/programs/vip-university" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal relative">
        <section className="relative h-[480px] overflow-hidden">
          <HeroBackground image={heroImage} brightness={0.38} />
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center pt-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 gold-gradient drop-shadow animate-fade-in">
              VIP University
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8 animate-fade-in">
              BWC's exclusive program for traders who demand the best education, mentorship, and access.
            </p>
            <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
              <Link to="/apply">Apply for Enrollment</Link>
            </Button>
          </div>
        </section>
        <UrgencyBanner />
        
        {/* Overview Section */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  title="Elite Trading Education for Serious Traders"
                  subtitle="A comprehensive curriculum designed to transform beginners into professionals"
                  align="left"
                />
                
                <p className="text-white/70 mb-8">
                  VIP University is not just another trading course. It's a comprehensive educational experience designed by professional traders with decades of market experience. Our structured curriculum covers every aspect of trading, from psychology and technical analysis to risk management and business operations.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-4 p-2 bg-gold/10 rounded-full">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-white/70">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium">
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/5">
                    <Link to="/contact" className="flex items-center">
                      Request Syllabus <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                  alt="Trading Education"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-charcoal p-6 rounded-lg border border-gold/20 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Users className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/70">Our Students</p>
                      <p className="text-2xl font-bold text-white">2,500+</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-charcoal p-6 rounded-lg border border-gold/20 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Award className="w-8 h-8 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/70">Success Rate</p>
                      <p className="text-2xl font-bold text-white">94%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Curriculum Section */}
        <section className="py-20 px-4 bg-midnight">
          <div className="container mx-auto">
            <SectionHeading
              title="Comprehensive Curriculum"
              subtitle="A structured learning path to trading mastery"
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {modules.map((module, index) => (
                <div key={index} className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 hover:border-gold/30 transition-all">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold text-gold/50 mr-4">{module.number}</span>
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{module.description}</p>
                  <div className="flex justify-between text-white/50 text-sm">
                    <span>{module.lessons} Lessons</span>
                    <span>{module.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-white/70 mb-6">
                Ready to start your journey to trading mastery?
              </p>
              <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium">
                <Link to="/apply">Apply for VIP University</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <SectionHeading
              title="Success Stories"
              subtitle="Hear from our VIP University graduates"
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-black to-charcoal relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
          
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="gold-gradient">Transform</span> Your Trading?
              </h2>
              
              <p className="text-xl text-white/70 mb-8">
                Join VIP University today and gain access to the education, mentorship, and community that will elevate your trading to professional levels.
              </p>
              
              <Button asChild className="bg-gradient-gold hover:bg-gold text-jet font-medium px-8 py-6 text-lg hover:scale-105 transition-transform duration-300">
                <Link to="/apply">Apply for VIP University</Link>
              </Button>
              
              <p className="text-white/50 mt-6 text-sm">
                Limited enrollment. Applications reviewed within 48 hours.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VIPUniversityPage;
