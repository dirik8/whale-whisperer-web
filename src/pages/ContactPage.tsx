import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Mail, Phone, Clock, MessageSquare } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet-async";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  experience: z.string().optional(),
  tradingStyle: z.string().optional(),
  portfolio: z.string().optional(),
  goals: z.string().optional(),
  challenges: z.string().optional(),
  program: z.string().optional(),
  referral: z.string().optional(),
  additionalInfo: z.string().optional(),
});

const ContactPage = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: "",
      tradingStyle: "",
      portfolio: "",
      goals: "",
      challenges: "",
      program: "",
      referral: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const templateParams = {
        user_name: values.name,
        user_email: values.email,
        phone_number: values.phone || "Not provided",
        experience_level: values.experience,
        trading_style: values.tradingStyle,
        portfolio_size: values.portfolio,
        trading_goals: values.goals,
        trading_challenges: values.challenges,
        preferred_program: values.program,
        referral_source: values.referral,
        additional_info: values.additionalInfo || "None provided"
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'MEMBERSHIP_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you within 48 hours."
      });
      
      setApplicationSubmitted(true);
    } catch (error) {
      console.error('Error sending application:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Apply to Bullish Whales Club | Join Our Elite Trading Circle</title>
        <meta name="description" content="Apply to join the Bullish Whales Club. Elite trading education and strategies for serious traders." />
        <meta name="keywords" content="trading application, trading membership, elite trading, crypto trading application" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="py-20 px-4 bg-midnight relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              alt="Background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="container mx-auto relative z-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-charcoal/90 border border-gold/20 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Full Name*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email Address*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            type="email"
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
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Experience Level</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="bg-jet/80 border border-gold/20 text-white focus:border-gold">
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No prior investment experience</SelectItem>
                              <SelectItem value="beginner">Beginner (&lt; 1 year)</SelectItem>
                              <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                              <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                              <SelectItem value="expert">Expert (5+ years)</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="tradingStyle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Trading Style</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="bg-jet/80 border border-gold/20 text-white focus:border-gold">
                              <SelectValue placeholder="Select your trading style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="value">Value Investing</SelectItem>
                              <SelectItem value="growth">Growth Investing</SelectItem>
                              <SelectItem value="index">Index Investing</SelectItem>
                              <SelectItem value="momentum">Momentum Investing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Current Portfolio Size</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="bg-jet/80 border border-gold/20 text-white focus:border-gold">
                            <SelectValue placeholder="Select portfolio size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                            <SelectItem value="over1m">Over $1 million</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Trading Goals</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What are your trading goals?"
                          className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Trading Challenges</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What are your trading challenges?"
                          className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="program"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Preferred Program</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="bg-jet/80 border border-gold/20 text-white focus:border-gold">
                            <SelectValue placeholder="Select your preferred program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic Trading</SelectItem>
                            <SelectItem value="intermediate">Intermediate Trading</SelectItem>
                            <SelectItem value="advanced">Advanced Trading</SelectItem>
                            <SelectItem value="expert">Expert Trading</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referral"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Referral Source</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your referral source" 
                          className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80">Additional Information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any additional information you'd like to share?"
                          className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="bg-gradient-gold text-jet text-lg font-semibold py-3 rounded-lg hover:scale-105 transition">
                  Submit Application
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
