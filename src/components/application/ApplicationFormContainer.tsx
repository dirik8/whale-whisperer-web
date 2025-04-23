
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ArrowRight } from "lucide-react";
import { applicationFormSchema, ApplicationFormValues } from "@/types/application";
import ApplicationFormStep1 from "@/components/application/ApplicationFormStep1";
import ApplicationFormStep2 from "@/components/application/ApplicationFormStep2";
import ApplicationFormStep3 from "@/components/application/ApplicationFormStep3";
import ApplicationSuccess from "@/components/application/ApplicationSuccess";
import ApplicationStepIndicator from "@/components/application/ApplicationStepIndicator";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const ApplicationFormContainer = () => {
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
    try {
      console.log('Application form submitted:', values);
      
      await emailjs.send(
        "service_enntrbo",
        "template_ku6r6lf",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          age: values.age,
          occupation: values.occupation,
          marital_status: values.maritalStatus,
          current_job: values.currentJob,
          company: values.company,
          previous_investments: values.previousInvestments,
          broker: values.broker,
          location: values.location,
          portfolio_size: values.portfolioSize,
          investment_budget: values.investmentBudget,
          assets_held: values.assetsHeld.join(", "),
          message: values.message,
        },
        "A5alm0rgfx9zHC6ES"
      );
      
      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you within 48 hours.",
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting application form:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
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
    </>
  );
};

export default ApplicationFormContainer;
