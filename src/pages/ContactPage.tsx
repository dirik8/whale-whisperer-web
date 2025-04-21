import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form and show thank you state
    setFormSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get In <span className="gold-gradient">Touch</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Have questions? Need guidance? Our team of trading experts is ready to assist you on your journey to trading success.
            </p>
          </div>
        </section>
        
        {/* Contact Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Left Column - Contact Form */}
            <div className="md:col-span-2">
              <SectionHeading
                title="Let's Build Your Trading Future"
                subtitle="Connect directly — our team responds personally. Reach us any time."
                align="left"
              />
              
              {formSubmitted ? (
                <div className="bg-gold/10 border border-gold/30 rounded-xl shadow-lg p-8 animate-fade-in">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gold/20 rounded-full mx-auto flex items-center justify-center mb-4">
                      <MessageSquare className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Thanks for reaching out!</h3>
                    <p className="text-white/80 mt-2">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <div className="mt-6 bg-charcoal/50 border border-gold/10 p-4 rounded-lg">
                    <h4 className="text-gold font-medium">While you're waiting:</h4>
                    <ul className="mt-2 text-white/80 space-y-2">
                      <li>• Check out our <a href="/faq" className="text-gold hover:underline">FAQ section</a> for quick answers</li>
                      <li>• Explore our <a href="/education-hub" className="text-gold hover:underline">Education Hub</a> for trading insights</li>
                      <li>• Follow us on social media for daily market updates</li>
                    </ul>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-transparent border border-gold text-gold hover:bg-gold/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-charcoal/90 border border-gold/20 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 animate-fade-in">
                  <div>
                    <label htmlFor="name" className="text-white/80 text-sm font-medium block mb-2">Full Name</label>
                    <input
                      className="w-full bg-jet/80 border border-gold/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
                      placeholder="Your full name"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="text-white/80 text-sm font-medium block mb-2">Email Address</label>
                    <input
                      className="w-full bg-jet/80 border border-gold/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
                      placeholder="your@email.com"
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="text-white/80 text-sm font-medium block mb-2">Phone Number (optional)</label>
                    <input
                      className="w-full bg-jet/80 border border-gold/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
                      placeholder="+1 (234) 567-8900"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-white/80 text-sm font-medium block mb-2">Message</label>
                    <textarea
                      className="w-full bg-jet/80 border border-gold/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition min-h-[150px]"
                      placeholder="How can we help you today?"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="bg-gradient-gold text-jet text-lg font-semibold py-3 rounded-lg hover:scale-105 transition">
                    Send Message
                  </Button>
                </form>
              )}
              
              {/* Direct Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-charcoal/70 border border-gold/10 rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-gold font-medium mb-1">Email Us</h3>
                  <a href="mailto:info@bullishwhales.club" className="text-white hover:text-gold transition">info@bullishwhales.club</a>
                  <p className="text-white/50 text-sm mt-2">24-hour response time</p>
                </div>
                
                <div className="bg-charcoal/70 border border-gold/10 rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-gold font-medium mb-1">Call Us</h3>
                  <a href="tel:+12345678901" className="text-white hover:text-gold transition">+1 234 567 8901</a>
                  <p className="text-white/50 text-sm mt-2">Mon-Fri, 8AM-8PM UTC</p>
                </div>
                
                <div className="bg-charcoal/70 border border-gold/10 rounded-lg p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-3">
                    <MessageSquare className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-gold font-medium mb-1">Chat Support</h3>
                  <a href="#" className="text-white hover:text-gold transition">@bullishwhales</a>
                  <p className="text-white/50 text-sm mt-2">On Telegram & Discord</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Office Info and Images */}
            <div className="bg-midnight/70 border border-gold/10 rounded-xl p-6 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Our Global Presence</h3>
                <div className="aspect-video bg-jet/30 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&fit=crop"
                    alt="Working Space"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="text-gold mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gold">Global Headquarters</div>
                      <div className="text-white/80">Suite 23, Blockchain District</div>
                      <div className="text-white/80">Fintech City, Digital Avenue</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="text-gold mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gold">Hours of Operation</div>
                      <div className="text-white/80">Monday–Friday: 8:00 AM – 8:00 PM UTC</div>
                      <div className="text-white/80">Saturday–Sunday: 10:00 AM – 6:00 PM UTC</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Meet Our Team</h3>
                <div className="aspect-video bg-jet/30 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&fit=crop"
                    alt="Team Meeting"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-white/70">
                  Our world-class trading experts are available for strategy consultations and personalized coaching.
                </p>
                <div className="mt-4">
                  <Button asChild variant="outline" className="border-gold/50 text-gold hover:bg-gold/10 w-full">
                    <Link to="/team">Meet The Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* World Map */}
          <div className="max-w-5xl mx-auto mb-16">
            <SectionHeading
              title="Our Global Network"
              subtitle="Join thousands of traders across the globe who trust Bullish Whales for their trading education."
              align="center"
            />
            
            <div className="p-4 bg-charcoal/50 border border-gold/10 rounded-lg">
              <div className="bg-gradient-to-br from-midnight/70 to-jet/70 p-8 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&fit=crop"
                    alt="World Map"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Join Members From 60+ Countries</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">5,000+</div>
                      <div className="text-white/70">Active Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">60+</div>
                      <div className="text-white/70">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">24/7</div>
                      <div className="text-white/70">Community</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">94%</div>
                      <div className="text-white/70">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-4 max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white">Ready to transform your trading?</h3>
            <p className="text-white/70 mb-4">
              Whether you're looking to improve your strategy, join our community, or get personalized coaching, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-gradient-gold text-jet font-semibold px-8 py-3 rounded-lg hover:scale-105 transition">
                <Link to="/apply">Apply for Membership</Link>
              </Button>
              <Button asChild variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
                <Link to="/programs">View Our Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
