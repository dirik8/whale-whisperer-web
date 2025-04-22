
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

const ContactPage = () => {
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
    
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        phone: values.phone || "Not provided",
        age: values.age || "Not provided",
        occupation: values.occupation || "Not provided",
        marital_status: values.maritalStatus || "Not provided",
        current_job: values.currentJob || "Not provided",
        company: values.company || "Not provided",
        previous_investments: values.previousInvestments || "Not provided",
        broker: values.broker || "Not provided",
        location: values.location || "Not provided",
        portfolio_size: values.portfolioSize || "Not provided",
        investment_budget: values.investmentBudget || "Not provided",
        assets_held: values.assetsHeld?.join(", ") || "Not provided",
      };
      
      // Replace with your actual EmailJS service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      // Show success toast
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form and show thank you state
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Bullish Whales Club | Get in Touch with Our Trading Experts</title>
        <meta name="description" content="Have questions about trading or our programs? Contact the Bullish Whales Club team for personalized guidance on your trading journey." />
        <meta name="keywords" content="contact trading experts, trading consultation, crypto trading help, bullish whales contact, trading mentorship" />
        <link rel="canonical" href="https://bullishwhales.club/contact" />
        <meta property="og:title" content="Contact Bullish Whales Club | Get in Touch with Our Trading Experts" />
        <meta property="og:description" content="Have questions about trading or our programs? Contact the Bullish Whales Club team for personalized guidance on your trading journey." />
        <meta property="og:url" content="https://bullishwhales.club/contact" />
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
                                <SelectItem value="beginner">Beginner (< 1 year)</SelectItem>
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
