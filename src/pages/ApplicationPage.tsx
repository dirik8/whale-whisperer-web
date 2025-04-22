
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet-async";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ApplicationPage = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Email template for contact form
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        subject: values.subject,
        message: values.message
      };

      // Replace these with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'CONTACT_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly."
      });
      
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Bullish Whales Club</title>
        <meta name="description" content="Get in touch with the Bullish Whales Club team. We're here to help with your trading journey." />
        <meta name="keywords" content="contact trading experts, trading help, crypto trading support" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="py-20 px-4 bg-midnight relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Get In <span className="gold-gradient">Touch</span>
              </h1>
              <p className="text-xl text-white/70">
                Have questions? We're here to help you on your trading journey.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {formSubmitted ? (
                <div className="bg-charcoal/50 border border-gold/20 rounded-lg p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
                  <p className="text-white/70 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <Button onClick={() => setFormSubmitted(false)} variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-charcoal/50 border-gold/20 text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-charcoal/50 border-gold/20 text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              className="bg-charcoal/50 border-gold/20 text-white"
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
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="bg-charcoal/50 border-gold/20 text-white min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-gradient-gold text-jet font-semibold">
                      Send Message
                    </Button>
                  </form>
                </Form>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-charcoal/50 border border-gold/20 p-6 rounded-lg text-center">
                  <Mail className="w-6 h-6 text-gold mx-auto mb-3" />
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-white/70">support@bullishwhales.club</p>
                </div>

                <div className="bg-charcoal/50 border border-gold/20 p-6 rounded-lg text-center">
                  <Clock className="w-6 h-6 text-gold mx-auto mb-3" />
                  <h3 className="text-white font-medium">Hours</h3>
                  <p className="text-white/70">24/7 Support</p>
                </div>

                <div className="bg-charcoal/50 border border-gold/20 p-6 rounded-lg text-center">
                  <MapPin className="w-6 h-6 text-gold mx-auto mb-3" />
                  <h3 className="text-white font-medium">Location</h3>
                  <p className="text-white/70">Global</p>
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

export default ApplicationPage;
