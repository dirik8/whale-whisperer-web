
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Bullish Whales Club</title>
        <meta name="description" content="Our privacy policy outlines how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://bullishwhales.club/privacy-policy" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link to="/" className="inline-flex items-center text-gold hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
            </div>
            
            <div className="text-white/60 mb-8">
              <p>Last updated: April 23, 2025</p>
            </div>
            
            <div className="bg-charcoal/50 border border-gold/10 rounded-xl p-8 space-y-8 shadow-lg mb-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-white/80 mb-4">
                  At Bullish Whales Club ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-white/80">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div className="flex">
                    <Lock className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium text-white">Personal Information</h3>
                      <p className="text-white/80">
                        We may collect personal information that you voluntarily provide to us when you register for an account, express an interest in obtaining information about us or our products and services, participate in activities on the site, or otherwise contact us. This may include: name, email address, phone number, mailing address, financial information, and other information you choose to provide.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Eye className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-medium text-white">Automatically Collected Information</h3>
                      <p className="text-white/80">
                        We automatically collect certain information when you visit, use, or navigate the site. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our site, and other technical information.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-white/80 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>To provide, operate, and maintain our services</li>
                  <li>To improve, personalize, and expand our services</li>
                  <li>To understand and analyze how you use our services</li>
                  <li>To develop new products, services, features, and functionality</li>
                  <li>To communicate with you about updates, security alerts, and support</li>
                  <li>To send you marketing and promotional communications</li>
                  <li>To find and prevent fraud</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Disclosure</h2>
                <p className="text-white/80 mb-4">
                  We may share your information with third parties in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>With service providers who perform services for us</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights and property</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Security</h2>
                <p className="text-white/80">
                  We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee the security of your personal information.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-white/80 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>The right to access personal information we hold about you</li>
                  <li>The right to request correction of your personal information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to object to processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                <p className="text-white/80">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-white/80">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-midnight/50 border border-gold/10 rounded-lg p-4 mt-4">
                  <p className="text-white">
                    Email: <a href="mailto:privacy@bullishwhales.club" className="text-gold hover:underline">privacy@bullishwhales.club</a>
                  </p>
                </div>
              </section>
            </div>
            
            <div className="flex justify-between items-center">
              <Link to="/" className="text-gold hover:underline flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="flex gap-4">
                <Button asChild variant="outline" className="border-gold text-gold">
                  <Link to="/terms-of-service">Terms of Service</Link>
                </Button>
                <Button asChild variant="outline" className="border-gold text-gold">
                  <Link to="/risk-disclaimer">Risk Disclaimer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
