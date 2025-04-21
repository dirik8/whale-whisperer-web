import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  CheckCircle2,
  CircleDashed,
  ArrowRight,
  CheckCheck,
  Clock,
  User,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const ApplicationPage = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  
  const formSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string().optional(),
    experience: z.string({
      required_error: "Please select your experience level",
    }),
    tradingStyle: z.string({
      required_error: "Please select your primary trading style",
    }),
    portfolio: z.string({
      required_error: "Please select your portfolio size",
    }),
    goals: z.string().min(20, {
      message: "Please provide more details about your trading goals",
    }),
    challenges: z.string().min(20, {
      message: "Please provide more details about your challenges",
    }),
    program: z.string({
      required_error: "Please select your preferred program",
    }),
    referral: z.string({
      required_error: "Please tell us how you found us",
    }),
    additionalInfo: z.string().optional(),
  });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      goals: "",
      challenges: "",
      additionalInfo: "",
    }
  });
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you within 48 hours.",
    });
    setApplicationSubmitted(true);
  };
  
  const nextStep = () => {
    if (currentStep === 1) {
      const { firstName, lastName, email, phone } = form.getValues();
      if (!firstName || !lastName || !email) {
        form.trigger(["firstName", "lastName", "email"]);
        return;
      }
    } else if (currentStep === 2) {
      const { experience, tradingStyle, portfolio, goals, challenges } = form.getValues();
      if (!experience || !tradingStyle || !portfolio || !goals || !challenges) {
        form.trigger(["experience", "tradingStyle", "portfolio", "goals", "challenges"]);
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (applicationSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-jet">
          <section className="container mx-auto px-4 py-20">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
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
          </section>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="py-20 px-4 bg-midnight">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Apply for Access to Our <span className="gold-gradient">Elite Trading Circle</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Only 50 traders accepted per quarter. Are you next?
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className={`${currentStep === 1 ? "border-gold" : "border-gold/10"} bg-charcoal/50 border rounded-lg p-6 text-center relative transition-all duration-300`}>
                  <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${currentStep === 1 ? "bg-gold" : currentStep > 1 ? "bg-green-500" : "bg-gold/40"} text-jet flex items-center justify-center font-bold text-xl transition-colors duration-300`}>
                    {currentStep > 1 ? <CheckCircle2 className="w-6 h-6"/> : "1"}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">Personal Details</h3>
                  <p className="text-white/70">Tell us about yourself and how we can contact you.</p>
                  <div className="mt-4">
                    {currentStep > 1 ? (
                      <CheckCircle2 className="w-8 h-8 mx-auto text-green-500" />
                    ) : currentStep === 1 ? (
                      <div className="w-3 h-3 bg-gold rounded-full mx-auto"></div>
                    ) : (
                      <CircleDashed className="w-8 h-8 mx-auto text-gold/50" />
                    )}
                  </div>
                </div>
                
                <div className={`${currentStep === 2 ? "border-gold" : "border-gold/10"} bg-charcoal/50 border rounded-lg p-6 text-center relative transition-all duration-300`}>
                  <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${currentStep === 2 ? "bg-gold" : currentStep > 2 ? "bg-green-500" : "bg-gold/40"} text-jet flex items-center justify-center font-bold text-xl transition-colors duration-300`}>
                    {currentStep > 2 ? <CheckCircle2 className="w-6 h-6"/> : "2"}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">Trading Experience</h3>
                  <p className="text-white/70">Share your trading background, goals and challenges.</p>
                  <div className="mt-4">
                    {currentStep > 2 ? (
                      <CheckCircle2 className="w-8 h-8 mx-auto text-green-500" />
                    ) : currentStep === 2 ? (
                      <div className="w-3 h-3 bg-gold rounded-full mx-auto"></div>
                    ) : (
                      <CircleDashed className="w-8 h-8 mx-auto text-gold/50" />
                    )}
                  </div>
                </div>
                
                <div className={`${currentStep === 3 ? "border-gold" : "border-gold/10"} bg-charcoal/50 border rounded-lg p-6 text-center relative transition-all duration-300`}>
                  <div className={`absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${currentStep === 3 ? "bg-gold" : currentStep > 3 ? "bg-green-500" : "bg-gold/40"} text-jet flex items-center justify-center font-bold text-xl transition-colors duration-300`}>
                    {currentStep > 3 ? <CheckCircle2 className="w-6 h-6"/> : "3"}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">Membership</h3>
                  <p className="text-white/70">Choose your preferred program level and options.</p>
                  <div className="mt-4">
                    {currentStep > 3 ? (
                      <CheckCircle2 className="w-8 h-8 mx-auto text-green-500" />
                    ) : currentStep === 3 ? (
                      <div className="w-3 h-3 bg-gold rounded-full mx-auto"></div>
                    ) : (
                      <CircleDashed className="w-8 h-8 mx-auto text-gold/50" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <SectionHeading
                  title="Membership Application"
                  subtitle="We don't sell hype. We build wealth. Complete the form below to start your application process."
                />
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-charcoal/50 border border-gold/10 rounded-lg p-8 space-y-8">
                  {currentStep === 1 && (
                    <div className="space-y-8 animate-fade-in">
                      <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">First Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your first name" 
                                  className="bg-charcoal border-gold/20 text-white"
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
                              <FormLabel className="text-white">Last Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your last name" 
                                  className="bg-charcoal border-gold/20 text-white"
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
                              <FormLabel className="text-white">Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="your@email.com" 
                                  className="bg-charcoal border-gold/20 text-white"
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
                              <FormLabel className="text-white">Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="+1 (234) 567-8900" 
                                  className="bg-charcoal border-gold/20 text-white"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="pt-4 flex justify-end">
                        <Button 
                          type="button" 
                          onClick={nextStep} 
                          className="bg-gradient-gold hover:bg-gold text-jet font-medium py-3 px-6 text-lg hover:scale-105 transition-transform duration-300 rounded-lg"
                        >
                          Continue <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <div className="space-y-8 animate-fade-in">
                      <h3 className="text-xl font-bold text-white mb-4">Trading Experience</h3>
                      
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Trading Experience</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                                    <SelectValue placeholder="Select your experience level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-charcoal border-gold/20 text-white">
                                  <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                                  <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                                  <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="tradingStyle"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Primary Trading Style</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                                    <SelectValue placeholder="Select your primary trading style" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-charcoal border-gold/20 text-white">
                                  <SelectItem value="dayTrading">Day Trading</SelectItem>
                                  <SelectItem value="swingTrading">Swing Trading</SelectItem>
                                  <SelectItem value="positionTrading">Position Trading</SelectItem>
                                  <SelectItem value="scalping">Scalping</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="portfolio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Current Portfolio Size</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                                    <SelectValue placeholder="Select your portfolio size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-charcoal border-gold/20 text-white">
                                  <SelectItem value="under10k">Under $10,000</SelectItem>
                                  <SelectItem value="10kto50k">$10,000 - $50,000</SelectItem>
                                  <SelectItem value="50kto100k">$50,000 - $100,000</SelectItem>
                                  <SelectItem value="100kto500k">$100,000 - $500,000</SelectItem>
                                  <SelectItem value="500kPlus">$500,000+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="goals"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Trading Goals</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="What are your primary trading goals for the next 12 months?" 
                                  className="bg-charcoal border-gold/20 text-white min-h-[120px]"
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
                              <FormLabel className="text-white">Current Challenges</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="What are the biggest challenges you're facing in your trading?" 
                                  className="bg-charcoal border-gold/20 text-white min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="pt-4 flex justify-between">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep} 
                          className="border-gold/50 text-gold hover:bg-gold/10"
                        >
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={nextStep} 
                          className="bg-gradient-gold hover:bg-gold text-jet font-medium py-3 px-6 text-lg hover:scale-105 transition-transform duration-300 rounded-lg"
                        >
                          Continue <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 3 && (
                    <div className="space-y-8 animate-fade-in">
                      <h3 className="text-xl font-bold text-white mb-4">Membership Selection</h3>
                      
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="program"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Preferred Program</FormLabel>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                <div
                                  className={`${
                                    field.value === "apprentice" ? "border-gold bg-gold/10" : "border-gold/20 bg-charcoal/80"
                                  } border rounded-lg p-4 text-center cursor-pointer hover:border-gold/50 transition-all`}
                                  onClick={() => field.onChange("apprentice")}
                                >
                                  <h4 className="text-white font-bold mb-1">Apprentice</h4>
                                  <p className="text-gold font-bold">$297/month</p>
                                </div>
                                <div
                                  className={`${
                                    field.value === "accelerator" ? "border-gold bg-gold/10" : "border-gold/20 bg-charcoal/80"
                                  } border rounded-lg p-4 text-center cursor-pointer hover:border-gold/50 transition-all`}
                                  onClick={() => field.onChange("accelerator")}
                                >
                                  <h4 className="text-white font-bold mb-1">Accelerator</h4>
                                  <p className="text-gold font-bold">$997/month</p>
                                </div>
                                <div
                                  className={`${
                                    field.value === "master" ? "border-gold bg-gold/10" : "border-gold/20 bg-charcoal/80"
                                  } border rounded-lg p-4 text-center cursor-pointer hover:border-gold/50 transition-all`}
                                  onClick={() => field.onChange("master")}
                                >
                                  <h4 className="text-white font-bold mb-1">Master</h4>
                                  <p className="text-gold font-bold">$2,997/month</p>
                                </div>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="referral"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">How did you hear about us?</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                                    <SelectValue placeholder="Select an option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-charcoal border-gold/20 text-white">
                                  <SelectItem value="search">Search Engine</SelectItem>
                                  <SelectItem value="social">Social Media</SelectItem>
                                  <SelectItem value="referral">Referral from Member</SelectItem>
                                  <SelectItem value="podcast">Podcast</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="additionalInfo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Additional Information</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Any additional information you'd like us to know?" 
                                  className="bg-charcoal border-gold/20 text-white min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="pt-4 flex justify-between">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep} 
                          className="border-gold/50 text-gold hover:bg-gold/10"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-gradient-gold hover:bg-gold text-jet font-medium py-6 px-8 text-lg hover:scale-105 transition-transform duration-300 rounded-lg"
                        >
                          Submit Application <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </Form>
              
              <p className="text-white/50 text-center mt-4 text-sm">
                Your information is secure and will only be used for application purposes.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4 bg-midnight">
          <div className="container mx-auto">
            <SectionHeading
              title="From Our Newest Members"
              subtitle="Hear what recent applicants have to say about joining Bullish Whales Club."
              align="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              <div className="bg-charcoal/50 border border-gold/10 p-6 rounded-lg">
                <p className="text-white/80 italic mb-4">
                  "The application process was thorough but completely worth it. Within weeks of joining, I was implementing strategies that immediately improved my win rate."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=faces" 
                      alt="Member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">Alex M.</p>
                    <p className="text-sm text-white/60">Joined 3 months ago</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-charcoal/50 border border-gold/10 p-6 rounded-lg">
                <p className="text-white/80 italic mb-4">
                  "I was hesitant about the membership fee at first, but it's already paid for itself many times over. The quality of education and support is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces" 
                      alt="Member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-white">Rebecca T.</p>
                    <p className="text-sm text-white/60">Joined 1 month ago</p>
                  </div>
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
