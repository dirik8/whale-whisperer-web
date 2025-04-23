
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SidebarContent from "@/components/ui/sidebar-content";
import { applicationFormSchema, ApplicationFormValues } from "@/types/application";
import ApplicationHero from "@/components/application/ApplicationHero";
import ApplicationFormStep1 from "@/components/application/ApplicationFormStep1";
import ApplicationFormStep2 from "@/components/application/ApplicationFormStep2";
import ApplicationFormStep3 from "@/components/application/ApplicationFormStep3";
import ApplicationSuccess from "@/components/application/ApplicationSuccess";
import ApplicationStepIndicator from "@/components/application/ApplicationStepIndicator";
import ApplicationBenefitsSidebar from "@/components/application/ApplicationBenefitsSidebar";
import { useToast } from "@/components/ui/use-toast";

// Bull image
const heroImage = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png";

const ApplicationPage = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<ApplicationFormValues>({
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

  const onSubmit = async (values: ApplicationFormValues) => {
    console.log('Application form submitted:', values);
    toast({
      title: "Application Submitted",
      description: "We'll review your application and get back to you within 48 hours.",
    });
    setFormSubmitted(true);
  };

  // Gets the title based on the current step
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

  // Gets the component based on the current step
  const getStepComponent = () => {
    switch (step) {
      case 1:
        return <ApplicationFormStep1 form={form} />;
      case 2:
        return <ApplicationFormStep2 form={form} />;
      case 3:
        return <ApplicationFormStep3 form={form} />;
      default:
        return null;
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
        <ApplicationHero heroImage={heroImage} />

        {/* Application Form Section with Sidebar */}
        <section className="py-16 px-4 bg-gradient-to-br from-jet/80 to-midnight/90 relative z-10">
          <div className="container mx-auto">
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
                {formSubmitted ? (
                  <ApplicationSuccess />
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="bg-charcoal/90 backdrop-blur-sm border border-gold/20 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 animate-fade-in">
                      <h3 className="text-2xl font-bold text-center mb-2">
                        <span className="text-gold">Step {step}</span>: {getStepTitle()}
                      </h3>
                      
                      <ApplicationStepIndicator currentStep={step} totalSteps={totalSteps} />
                      
                      {getStepComponent()}
                      
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
                )}
                
                <div className="text-white/50 text-center text-sm">
                  <p>Your information is secure and will only be used for application purposes.</p>
                  <p className="mt-2">Applications are reviewed by our team within 48 hours.</p>
                </div>
              </div>
              
              {/* Right Sidebar */}
              <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <ApplicationBenefitsSidebar />
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
