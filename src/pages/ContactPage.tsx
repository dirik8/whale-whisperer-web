
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Helmet } from "react-helmet-async";

// Schema for Contact form
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Please provide a message of at least 10 characters" }),
});

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
        {/* Contact Form */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-charcoal/90 border border-gold/20 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 animate-fade-in">
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
                    Send Message
                  </Button>
                </form>
              </Form>
            )}
            <p className="text-white/50 text-center mt-4 text-sm">
              Your information is secure and will only be used for contact purposes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
