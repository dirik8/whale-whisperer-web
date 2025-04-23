
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import SidebarContent from "@/components/ui/sidebar-content";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoSidebar from "@/components/contact/ContactInfoSidebar";

// Bull image
const heroImage = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Bullish Whales Club | Get in Touch with Our Trading Experts</title>
        <meta name="description" content="Have questions about trading or our programs? Contact the Bullish Whales Club team for personalized guidance on your trading journey." />
        <link rel="canonical" href="https://bullishwhales.club/contact" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal relative">
        <ContactHero heroImage={heroImage} />
        
        {/* Contact Form with Sidebars */}
        <section className="container mx-auto px-4 py-8 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <SidebarContent
                title="Trading Insights"
                subtitle="Connect with our expert analysts"
                imageSrc="https://images.unsplash.com/photo-1579226905180-636b76d96082?auto=format&fit=crop&w=500&q=80"
                stats={[
                  { value: "15+", label: "Years Experience" },
                  { value: "24h", label: "Response Time" },
                  { value: "100%", label: "Transparency" },
                  { value: "5000+", label: "Active Members" }
                ]}
                contactInfo={true}
                ctaText="Join Our Discord"
                ctaLink="/community"
              />
            </div>
            
            {/* Main Content - Contact Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>
            
            {/* Right Sidebar */}
            <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <ContactInfoSidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
