
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Bullish Whales Club</title>
        <meta name="description" content="Our terms of service outline the rules and guidelines for using our platform and services." />
        <link rel="canonical" href="https://bullishwhales.club/terms-of-service" />
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
                <FileText className="h-6 w-6 text-gold" />
              </div>
              <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
            </div>
            
            <div className="text-white/60 mb-8">
              <p>Last updated: April 23, 2025</p>
            </div>
            
            <div className="bg-charcoal/50 border border-gold/10 rounded-xl p-8 space-y-8 shadow-lg mb-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-white/80 mb-4">
                  Welcome to Bullish Whales Club. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website or services, you agree to be bound by these Terms.
                </p>
                <p className="text-white/80">
                  Please read these Terms carefully before using our platform. If you do not agree with any part of these Terms, you may not use our services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Definitions</h2>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>"Service" refers to the Bullish Whales Club website and all services provided.</li>
                  <li>"User," "You," and "Your" refer to the individual accessing or using the Service.</li>
                  <li>"Company," "We," "Us," and "Our" refer to Bullish Whales Club.</li>
                  <li>"Content" refers to text, images, audio, video, and all other forms of data or communication.</li>
                  <li>"Member" refers to a registered user with an active subscription to our services.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Account Registration</h2>
                <div className="flex">
                  <CheckCircle className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/80">
                      To access certain features of our Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Services and Subscription</h2>
                <p className="text-white/80 mb-4">
                  We offer various membership plans that provide access to educational content, trading strategies, community forums, and expert insights. The specific features and benefits of each membership plan are outlined on our website.
                </p>
                <p className="text-white/80">
                  Subscription fees are charged at the beginning of the subscription period. Subscriptions automatically renew unless canceled before the renewal date. Refunds are processed according to our refund policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p className="text-white/80 mb-4">
                  All content, features, and functionality of our Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Bullish Whales Club or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-white/80">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without our prior written consent.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">User Content</h2>
                <p className="text-white/80 mb-4">
                  Users may have the opportunity to submit content to our platform, including forum posts, comments, and other materials ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.
                </p>
                <p className="text-white/80">
                  You are solely responsible for your User Content and the consequences of posting it. We reserve the right to remove any User Content that violates these Terms or that we find objectionable for any reason.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Prohibited Activities</h2>
                <p className="text-white/80 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/80">
                  <li>Use the Service for any illegal purpose</li>
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Interfere with or disrupt the Service</li>
                  <li>Attempt to gain unauthorized access to the Service</li>
                  <li>Share your account credentials with others</li>
                  <li>Use the Service to transmit harmful code or malware</li>
                  <li>Engage in any activity that could disable, overburden, or impair the Service</li>
                  <li>Scrape, data-mine, or extract data from the Service</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/80">
                      We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
                <p className="text-white/80 mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-white/80">
                  We do not guarantee that the Service will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected. We make no warranties or representations about the accuracy or completeness of the content on the Service.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-white/80">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BULLISH WHALES CLUB, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, OR ANY OTHER INTANGIBLE LOSSES, WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE, ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE SERVICE.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                <p className="text-white/80">
                  We may revise these Terms from time to time. The most current version will always be on our website. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised Terms.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-white/80">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-midnight/50 border border-gold/10 rounded-lg p-4 mt-4">
                  <p className="text-white">
                    Email: <a href="mailto:legal@bullishwhales.club" className="text-gold hover:underline">legal@bullishwhales.club</a>
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
                  <Link to="/privacy-policy">Privacy Policy</Link>
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

export default TermsOfServicePage;
