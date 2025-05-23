
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoTestimonialsSection from "@/components/testimonials/VideoTestimonialsSection";
import WrittenTestimonialsSection from "@/components/testimonials/WrittenTestimonialsSection";
import FeaturedTransformationSection from "@/components/testimonials/FeaturedTransformationSection";
import StatsSection from "@/components/testimonials/StatsSection";
import UrgencyBanner from "@/components/application/UrgencyBanner";

const heroBg = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png"; // Bull image

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Trader Testimonials | Bullish Whales Club Success Stories</title>
        <meta name="description" content="Read real success stories from Bullish Whales Club members who transformed their trading performance. See how our strategies have helped thousands of traders." />
        <meta name="keywords" content="trading testimonials, crypto success stories, trader transformation, bullish whales results, trading community reviews" />
        <meta property="og:title" content="Trader Testimonials | Bullish Whales Club Success Stories" />
        <meta property="og:description" content="Read real success stories from Bullish Whales Club members who transformed their trading performance. See how our strategies have helped thousands of traders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bullishwhales.club/testimonials" />
        <meta property="og:image" content={heroBg} />
        <link rel="canonical" href="https://bullishwhales.club/testimonials" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-midnight relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
            <img
              src={heroBg}
              className="w-full h-screen object-cover mx-auto opacity-40 pointer-events-none animate-fade-in"
              alt="Crypto bull"
            />
          </div>
          
          {/* Background gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-midnight/80 to-charcoal/90" style={{ zIndex: 1 }}></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                They Joined. They Profited. <span className="gold-gradient">You're Next.</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Don't take our word for it. Hear directly from our community of successful traders who have transformed their performance with Bullish Whales Club.
              </p>
            </div>
          </div>
        </section>
        
        <UrgencyBanner />
        
        <VideoTestimonialsSection />
        <WrittenTestimonialsSection />
        <FeaturedTransformationSection />
        <StatsSection />
        
        {/* Your Story Next */}
        <section className="py-20 px-4 bg-gradient-to-br from-black to-charcoal">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Story <span className="gold-gradient">Could Be Next</span>
              </h2>
              
              <p className="text-white/70 text-xl mb-8">
                Join the ranks of successful traders who've transformed their performance with Bullish Whales Club.
              </p>
              
              <Button asChild className="bg-gradient-gold hover:bg-gold text-jet px-8 py-6 text-lg hover:scale-105 transition-all duration-300 rounded-lg">
                <Link to="/apply">Apply for Membership</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
