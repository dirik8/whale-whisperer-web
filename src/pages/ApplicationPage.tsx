
import React from "react";
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
import { CheckCircle2, CircleDashed, ArrowRight } from "lucide-react";

const ApplicationPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
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
        
        {/* Application Process */}
        <section className="py-20 px-4 bg-jet">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 text-center relative">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold text-jet flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">Apply</h3>
                  <p className="text-white/70">Complete our detailed application to help us understand your trading experience and goals.</p>
                  <div className="mt-4">
                    <CheckCircle2 className="w-8 h-8 mx-auto text-gold" />
                  </div>
                </div>
                
                <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 text-center relative">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold text-jet flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">Interview</h3>
                  <p className="text-white/70">Selected applicants will be invited to a personal strategy consultation with our team.</p>
                  <div className="mt-4">
                    <CircleDashed className="w-8 h-8 mx-auto text-gold/50" />
                  </div>
                </div>
                
                <div className="bg-charcoal/50 border border-gold/10 rounded-lg p-6 text-center relative">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold text-jet flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">Invite</h3>
                  <p className="text-white/70">Successful candidates receive an official invitation to join our elite community.</p>
                  <div className="mt-4">
                    <CircleDashed className="w-8 h-8 mx-auto text-gold/50" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Application Form */}
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="Membership Application"
                subtitle="We don't sell hype. We build wealth. Complete the form below to start your application process."
              />
              
              <form className="bg-charcoal/50 border border-gold/10 rounded-lg p-8 space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" className="bg-charcoal border-gold/20 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" className="bg-charcoal border-gold/20 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="bg-charcoal border-gold/20 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (234) 567-8900" className="bg-charcoal border-gold/20 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Trading Experience */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Trading Experience</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-white">Trading Experience</Label>
                      <Select>
                        <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20 text-white">
                          <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                          <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tradingStyles" className="text-white">Trading Styles (Select all that apply)</Label>
                      <Select>
                        <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                          <SelectValue placeholder="Select your primary trading style" />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20 text-white">
                          <SelectItem value="dayTrading">Day Trading</SelectItem>
                          <SelectItem value="swingTrading">Swing Trading</SelectItem>
                          <SelectItem value="positionTrading">Position Trading</SelectItem>
                          <SelectItem value="scalping">Scalping</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="portfolio" className="text-white">Current Portfolio Size</Label>
                      <Select>
                        <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                          <SelectValue placeholder="Select your portfolio size" />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20 text-white">
                          <SelectItem value="under10k">Under $10,000</SelectItem>
                          <SelectItem value="10kto50k">$10,000 - $50,000</SelectItem>
                          <SelectItem value="50kto100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100kto500k">$100,000 - $500,000</SelectItem>
                          <SelectItem value="500kPlus">$500,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="goals" className="text-white">Trading Goals</Label>
                      <Textarea 
                        id="goals" 
                        placeholder="What are your primary trading goals for the next 12 months?" 
                        className="bg-charcoal border-gold/20 text-white min-h-[120px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="challenges" className="text-white">Current Challenges</Label>
                      <Textarea 
                        id="challenges" 
                        placeholder="What are the biggest challenges you're facing in your trading?" 
                        className="bg-charcoal border-gold/20 text-white min-h-[120px]"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Membership Selection */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Membership Selection</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="program" className="text-white">Preferred Program</Label>
                      <Select>
                        <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                          <SelectValue placeholder="Select your preferred program" />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20 text-white">
                          <SelectItem value="apprentice">Apprentice ($297/month)</SelectItem>
                          <SelectItem value="accelerator">Accelerator ($997/month)</SelectItem>
                          <SelectItem value="master">Master ($2,997/month)</SelectItem>
                          <SelectItem value="unsure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="referral" className="text-white">How did you hear about us?</Label>
                      <Select>
                        <SelectTrigger className="bg-charcoal border-gold/20 text-white">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-charcoal border-gold/20 text-white">
                          <SelectItem value="search">Search Engine</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="referral">Referral from Member</SelectItem>
                          <SelectItem value="podcast">Podcast</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo" className="text-white">Additional Information</Label>
                      <Textarea 
                        id="additionalInfo" 
                        placeholder="Any additional information you'd like us to know?" 
                        className="bg-charcoal border-gold/20 text-white min-h-[120px]"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-gradient-gold hover:bg-gold text-jet font-medium py-6 text-lg hover:scale-105 transition-transform duration-300">
                    Submit Application <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-white/50 text-center mt-4 text-sm">
                    Applications are reviewed within 48 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
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
