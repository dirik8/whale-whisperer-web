
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  CheckCheck,
  Clock,
  Users,
  Award,
  ArrowRight
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SidebarContent from "@/components/ui/sidebar-content";

// Schema for application form
const applicationFormSchema = z.object({
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

const heroImage = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png";

const ApplicationPage = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<z.infer<typeof applicationFormSchema>>({
    resolver: zodResolver(applicationFormSchema),
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

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const onSubmit = async (values: z.infer<typeof applicationFormSchema>) => {
    console.log('Application form submitted:', values);
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you within 48 hours.",
    });
    setFormSubmitted(true);
  };

  // Different content based on steps
  const getStepFields = () => {
    switch (step) {
      case 1: // Personal Info
        return (
          <>
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
          </>
        );
      case 2: // Professional Info
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
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
          </>
        );
      case 3: // Financial Info & Message
        return (
          <>
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
                      placeholder="Tell us about your trading goals and what you hope to achieve with our membership"
                      className="bg-jet/80 border border-gold/20 text-white placeholder:text-white/50 focus:border-gold min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      default:
        return null;
    }
  };

  const getStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                s === step 
                  ? "bg-gold text-jet font-medium" 
                  : s < step 
                    ? "bg-gold/30 text-white" 
                    : "bg-charcoal/70 text-white/50"
              }`}
            >
              {s < step ? <CheckCheck className="w-5 h-5" /> : s}
            </div>
            {s < 3 && (
              <div className={`w-16 h-1 ${s < step ? "bg-gold/30" : "bg-charcoal/70"}`}></div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Personal Information";
      case 2:
        return "Professional Experience";
      case 3:
        return "Financial Details";
      default:
        return "";
    }
  };

  return (
    <>
      <Helmet>
        <title>Apply for Membership | Bullish Whales Club</title>
        <meta name="description" content="Apply to join our elite trading circle. We accept only 50 traders annually. Start your transformation now." />
        <link rel="canonical" href="https://bullishwhales.club/apply" />
      </Helmet>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal relative">
        {/* Hero background image */}
        <img
          src={heroImage}
          alt="Application - Trading Desk"
          className="absolute top-0 left-0 w-full h-[410px] object-cover opacity-30 animate-fade-in"
          style={{ zIndex: 0 }}
        />
        <div className="absolute top-0 left-0 w-full h-[410px] bg-gradient-to-b from-midnight/90 to-charcoal/60" style={{ zIndex: 1 }}></div>
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 relative z-10 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold mb-6 animate-fade-in">
                <Users className="w-4 h-4 mr-2" />
                <span>Limited Access</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Apply for Access to Our <span className="gold-gradient">Elite Trading Circle</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                <span className="bg-gold/10 text-gold px-3 py-1 mr-2 rounded-full font-semibold shadow animate-pulse">15+ years</span>
                We accept only 50 traders annually. Are you next?
              </p>
              <ul className="mb-6 text-white/80 space-y-2">
                <li><span className="text-gold">•</span> Personalized onboarding with senior traders</li>
                <li><span className="text-gold">•</span> Private Discord access & live calls</li>
                <li><span className="text-gold">•</span> 100% transparent strategy breakdowns</li>
              </ul>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
                alt="Application modern"
                className="w-72 h-72 object-cover rounded-2xl shadow-xl ring-4 ring-gold/20 hover:scale-105 transition-transform duration-500 animate-fade-in"
              />
            </div>
          </div>
        </section>

        {/* Application Form Section with Sidebar */}
        <section className="py-16 px-4 bg-gradient-to-br from-jet/80 to-midnight/90 relative z-10">
          <div className="container mx-auto">
            <div className="mb-10">
              <SectionHeading
                title="Membership Application"
                subtitle="We don't sell hype. We build wealth. Complete the form below to start your application process."
              />
            </div>
            
            {formSubmitted ? (
              <div className="max-w-2xl mx-auto text-center animate-fade-in">
                <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <CheckCheck className="w-14 h-14 text-gold" />
                </div>
                <h2 className="text-4xl font-bold mb-6 gold-gradient">Application Received!</h2>
                <p className="text-white/80 text-xl mb-8">
                  Thank you for taking the first step towards joining our elite trading community. Our team will review your application within the next 48 hours.
                </p>
                <div className="bg-charcoal/70 border border-gold/20 rounded-lg p-6 mb-8">
                  <p className="text-white/90">
                    <Clock className="inline-block mr-2 text-gold" /> You'll receive a confirmation email shortly with additional details about the next steps.
                  </p>
                </div>
                <Button asChild className="bg-gradient-gold text-jet font-semibold px-8 py-3 rounded-lg hover:scale-105 transition">
                  <Link to="/">Return to Homepage</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Sidebar */}
                <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <SidebarContent
                    title="Why Join Us"
                    subtitle="Trading insights for the elite"
                    imageSrc="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=500&q=80"
                    stats={[
                      { value: "94%", label: "Member Success" },
                      { value: "15+", label: "Years Experience" },
                      { value: "50", label: "Annual Spots" },
                      { value: "24/7", label: "Trade Support" }
                    ]}
                    ctaText="View Programs"
                    ctaLink="/programs"
                  />
                </div>
                
                {/* Main Form */}
                <div className="lg:col-span-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="bg-charcoal/90 backdrop-blur-sm border border-gold/20 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 animate-fade-in">
                      <h3 className="text-2xl font-bold text-center mb-2">
                        <span className="text-gold">Step {step}</span>: {getStepTitle()}
                      </h3>
                      
                      {getStepIndicator()}
                      
                      {getStepFields()}
                      
                      <div className="flex justify-between mt-4">
                        <Button 
                          type="button" 
                          onClick={prevStep} 
                          disabled={step === 1}
                          className="bg-charcoal border border-gold/30 text-gold hover:bg-gold/10"
                        >
                          Previous
                        </Button>
                        
                        {step < totalSteps ? (
                          <Button 
                            type="button" 
                            onClick={nextStep}
                            className="bg-gradient-gold text-jet"
                          >
                            Continue
                          </Button>
                        ) : (
                          <Button 
                            type="submit"
                            className="bg-gradient-gold text-jet flex items-center gap-2"
                          >
                            Submit Application <ArrowRight className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </form>
                  </Form>
                  
                  <div className="text-white/50 text-center text-sm">
                    <p>Your information is secure and will only be used for application purposes.</p>
                    <p className="mt-2">Applications are reviewed by our team within 48 hours.</p>
                  </div>
                </div>
                
                {/* Right Sidebar */}
                <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="bg-charcoal/80 backdrop-blur-sm border border-gold/20 rounded-xl p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-gold mr-3" />
                      <h3 className="text-xl font-semibold text-white">Membership Benefits</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-gold"></div>
                        </div>
                        <p className="text-white/80">Access to proprietary trading algorithms</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-gold"></div>
                        </div>
                        <p className="text-white/80">Weekly live trading sessions with experts</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-gold"></div>
                        </div>
                        <p className="text-white/80">VIP Discord community with 24/7 support</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-gold"></div>
                        </div>
                        <p className="text-white/80">Personalized trading strategy development</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-gold"></div>
                        </div>
                        <p className="text-white/80">Monthly one-on-one coaching sessions</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1642543492914-55a0453c8261?auto=format&fit=crop&w=500&q=80" 
                      alt="Trading" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex items-end p-4">
                      <Link to="/testimonials" className="text-gold flex items-center hover:underline">
                        See Member Success Stories <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gold/10 to-midnight/80 border border-gold/20 rounded-xl p-6">
                    <h4 className="text-white font-medium mb-3">Ready to Level Up?</h4>
                    <p className="text-white/70 mb-4">
                      Not sure if you qualify? Book a free consultation with our team to discuss your trading goals.
                    </p>
                    <Button asChild className="w-full bg-charcoal/60 hover:bg-charcoal border border-gold/30 text-gold">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" /> Schedule a Call
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ApplicationPage;
