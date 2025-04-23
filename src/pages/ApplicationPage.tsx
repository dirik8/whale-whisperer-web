
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SidebarContent from "@/components/ui/sidebar-content";
import ApplicationHero from "@/components/application/ApplicationHero";
import ApplicationFormContainer from "@/components/application/ApplicationFormContainer";
import ApplicationBenefitsSidebar from "@/components/application/ApplicationBenefitsSidebar";
import UrgencyBanner from "@/components/application/UrgencyBanner";

// Bull image
const heroImage = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png";

const ApplicationPage = () => {
  return (
    <>
      <Helmet>
        <title>Apply for Membership | Bullish Whales Club</title>
        <meta name="description" content="Apply to join our elite trading circle. We accept only 50 traders annually. Start your transformation now." />
        <meta name="keywords" content="trading membership, crypto trading, elite traders, trading application, bullish whales club" />
        <meta property="og:title" content="Apply for Membership | Bullish Whales Club" />
        <meta property="og:description" content="Apply to join our elite trading circle. We accept only 50 traders annually. Start your transformation now." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bullishwhales.club/apply" />
        <meta property="og:image" content={heroImage} />
        <link rel="canonical" href="https://bullishwhales.club/apply" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal relative">
        {/* Hero background image */}
        <img
          src={heroImage}
          alt="Application - Trading Desk"
          className="absolute top-0 left-0 w-full h-screen object-cover opacity-30 animate-fade-in"
          style={{ zIndex: 0 }}
        />
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-midnight/90 to-charcoal/60" style={{ zIndex: 1 }}></div>
        
        {/* Hero Section */}
        <ApplicationHero heroImage={heroImage} />
        
        {/* Urgency Banner */}
        <UrgencyBanner />

        {/* Application Form Section with Sidebar */}
        <section className="py-16 px-4 bg-gradient-to-br from-jet/80 to-midnight/90 relative z-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Sidebar */}
              <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <SidebarContent
                  title="Why Join Us"
                  subtitle="Trading insights for the elite"
                  imageSrc="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=500&q=80"
                  stats={[
                    { value: "94%", label: "Member Success" },
                    { value: "15+", label: "Years Experience" },
                    { value: "50", label: "Annual Spots" },
                    { value: "24/7", label: "Trade Support" }
                  ]}
                  ctaText="View Programs"
                  ctaLink="/programs"
                />
              </div>
              
              {/* Main Form */}
              <div className="lg:col-span-6">
                <ApplicationFormContainer />
              </div>
              
              {/* Right Sidebar */}
              <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <ApplicationBenefitsSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ApplicationPage;
