
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <>
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
