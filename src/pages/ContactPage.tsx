
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, Mail, Phone, Map, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Helmet } from "react-helmet-async";
import SidebarContent from "@/components/ui/sidebar-content";

// Schema for Contact form
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Please provide a message of at least 10 characters" }),
});

const heroImage = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png";

const ContactPage = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    console.log("Contact form submitted:", values);
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });
    setFormSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Bullish Whales Club | Get in Touch with Our Trading Experts</title>
        <meta name="description" content="Have questions about trading or our programs? Contact the Bullish Whales Club team for personalized guidance on your trading journey." />
        <link rel="canonical" href="https://bullishwhales.club/contact" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal relative">
        {/* Hero background with image */}
        <img
          src={heroImage}
          alt="Contact - Modern"
          className="absolute top-0 left-0 w-full h-[380px] object-cover opacity-35 animate-fade-in"
          style={{ zIndex: 0 }}
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-[380px] bg-gradient-to-b from-midnight/90 to-charcoal/50" style={{ zIndex: 1 }}></div>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 relative z-10 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold mb-6 animate-fade-in">
                <Mail className="w-4 h-4 mr-2" />
                <span>Get In Touch</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Connect With Our <span className="gold-gradient">Expert Team</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Have questions? Need guidance? Our team of trading experts is ready to assist you on your journey to trading success.
              </p>
              <ul className="mb-6 text-white/80 space-y-2">
                <li><span className="text-gold">•</span> Personalized answers from real traders</li>
                <li><span className="text-gold">•</span> Fast response times (usually within hours)</li>
                <li><span className="text-gold">•</span> 15+ years professional trading experience</li>
              </ul>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=500&q=80"
                alt="Contact lightbulb"
                className="w-72 h-72 object-cover rounded-2xl shadow-xl ring-4 ring-gold/20 hover:scale-105 transition-transform duration-500 animate-fade-in"
              />
            </div>
          </div>
        </section>
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
              <SectionHeading
                title="Let's Build Your Trading Future"
                subtitle="Connect directly — our team responds personally. Reach us any time."
                align="left"
              />
              {formSubmitted ? (
                <div className="bg-gold/10 border border-gold/30 rounded-xl shadow-lg p-8 animate-fade-in">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gold/20 rounded-full mx-auto flex items-center justify-center mb-4 animate-bounce">
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
                      <li>• Check out our <Link to="/faq" className="text-gold hover:underline">FAQ section</Link> for quick answers</li>
                      <li>• Explore our <Link to="/education-hub" className="text-gold hover:underline">Education Hub</Link> for trading insights</li>
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="bg-charcoal/90 backdrop-blur-sm border border-gold/20 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">First Name*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your first name"
                                className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Last Name*</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your last name"
                                className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Email Address*</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+1 (234) 567-8900"
                              className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Message*</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you today?"
                              className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="bg-gradient-gold text-jet text-lg font-semibold py-3 rounded-lg hover:scale-105 transition">
                      <Mail className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </Form>
              )}
              <p className="text-white/50 text-center mt-4 text-sm">
                Your information is secure and will only be used for contact purposes.
              </p>
            </div>
            
            {/* Right Sidebar */}
            <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-charcoal/80 backdrop-blur-sm border border-gold/20 rounded-xl p-6 mb-6">
                <h3 className="text-gold font-semibold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Email</p>
                      <a href="mailto:info@bullishwhales.club" className="text-white hover:text-gold">info@bullishwhales.club</a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Phone</p>
                      <a href="tel:+1234567890" className="text-white hover:text-gold">+1 (234) 567-890</a>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Map className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">Address</p>
                      <p className="text-white">New York, USA</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=500&q=80" 
                  alt="Office" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex items-end p-4">
                  <Link to="/about" className="text-gold flex items-center hover:underline">
                    About Our Team <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gold/10 to-midnight/80 border border-gold/20 rounded-xl p-6">
                <h4 className="text-white font-medium mb-3">Office Hours</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between text-white/70">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM EST</span>
                  </li>
                  <li className="flex justify-between text-white/70">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM EST</span>
                  </li>
                  <li className="flex justify-between text-white/70">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <div className="text-white/50 text-sm">
                  <p>*Trading support available 24/7 for members</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
