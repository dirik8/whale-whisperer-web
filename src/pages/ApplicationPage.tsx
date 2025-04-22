import React, { useState } from "react";
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
import { Helmet } from "react-helmet-async";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  age: z.string().optional(),
  occupation: z.string().optional(),
  maritalStatus: z.string().optional(),
  currentJob: z.string().optional(),
  company: z.string().optional(),
  previousInvestments: z.string().optional(),
  broker: z.string().optional(),
  location: z.string().optional(),
  portfolioSize: z.string().optional(),
  investmentBudget: z.string().optional(),
  assetsHeld: z.string().array().optional(),
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
      phone: "",
      age: "",
      occupation: "",
      maritalStatus: "",
      currentJob: "",
      company: "",
      previousInvestments: "",
      broker: "",
      location: "",
      portfolioSize: "",
      investmentBudget: "",
      assetsHeld: [],
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', values);
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours."
    });
    setFormSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Bullish Whales Club | Get in Touch with Our Trading Experts</title>
        <meta name="description" content="Have questions about trading or our programs? Contact the Bullish Whales Club team for personalized guidance on your trading journey." />
        <link rel="canonical" href="https://bullishwhales.club/apply" />
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
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Age</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your age" 
                              className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="occupation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Occupation</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your occupation" 
                              className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="maritalStatus"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white/80">Marital Status</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-wrap gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="single" id="single" className="text-gold" />
                              <Label htmlFor="single" className="text-white">Single</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="married" id="married" className="text-gold" />
                              <Label htmlFor="married" className="text-white">Married</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="divorced" id="divorced" className="text-gold" />
                              <Label htmlFor="divorced" className="text-white">Divorced</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" className="text-gold" />
                              <Label htmlFor="other" className="text-white">Other</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="currentJob"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Current Job</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your job title" 
                              className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Company</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company" 
                              className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="previousInvestments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Previous Investments Experience</FormLabel>
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
                    name="broker"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Current/Past Broker</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your broker" 
                            className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Location</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="City, Country" 
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
                      name="portfolioSize"
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
                      name="investmentBudget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Current Investment Budget</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="bg-jet/80 border border-gold/20 text-white focus:border-gold">
                                <SelectValue placeholder="Select investment budget" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under5k">Under $5,000</SelectItem>
                                <SelectItem value="5k-25k">$5,000 - $25,000</SelectItem>
                                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                <SelectItem value="over100k">Over $100,000</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="assetsHeld"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-white/80">Assets Currently Held</FormLabel>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {["Stocks", "Bonds", "ETFs", "Crypto", "Real Estate", "Commodities"].map((asset) => (
                            <div key={asset} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={asset.toLowerCase()}
                                value={asset.toLowerCase()}
                                onChange={(e) => {
                                  const currentAssets = form.getValues("assetsHeld") || [];
                                  if (e.target.checked) {
                                    form.setValue("assetsHeld", [...currentAssets, asset.toLowerCase()]);
                                  } else {
                                    form.setValue(
                                      "assetsHeld",
                                      currentAssets.filter((a) => a !== asset.toLowerCase())
                                    );
                                  }
                                }}
                                className="h-4 w-4 rounded border-gold/50 text-gold focus:ring-gold/50"
                              />
                              <Label htmlFor={asset.toLowerCase()} className="text-white">{asset}</Label>
                            </div>
                          ))}
                        </div>
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

export default ApplicationPage;
