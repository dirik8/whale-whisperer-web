
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const formSchema = z.object({
  assetsHeld: z.array(z.string()).min(1, "Please select at least one asset type"),
  message: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions to proceed",
  }),
});

type FormStep3Values = z.infer<typeof formSchema>;

type ApplicationFormStep3Props = {
  onBack: () => void;
  onSubmit: (data: FormStep3Values) => void;
  formData: any;
};

const assetOptions = [
  { id: "stocks", label: "Stocks" },
  { id: "crypto", label: "Cryptocurrency" },
  { id: "forex", label: "Forex" },
  { id: "commodities", label: "Commodities" },
  { id: "bonds", label: "Bonds" },
  { id: "real estate", label: "Real Estate" },
  { id: "nfts", label: "NFTs" },
  { id: "options", label: "Options" },
];

const ApplicationFormStep3: React.FC<ApplicationFormStep3Props> = ({
  onBack,
  onSubmit,
  formData,
}) => {
  const navigate = useNavigate();
  const form = useForm<FormStep3Values>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assetsHeld: [],
      message: "",
      termsAccepted: false,
    },
  });

  const { isSubmitting } = form.formState;

  const handleSubmit = async (data: FormStep3Values) => {
    // Combine all form data
    const allFormData = {
      ...formData,
      ...data,
    };
    
    console.info("Application form submitted:", allFormData);
    
    try {
      // Send form data via emailjs
      const templateParams = {
        name: allFormData.name,
        email: allFormData.email,
        phone: allFormData.phone,
        age: allFormData.age,
        occupation: allFormData.occupation,
        maritalStatus: allFormData.maritalStatus,
        currentJob: allFormData.currentJob,
        company: allFormData.company,
        previousInvestments: allFormData.previousInvestments,
        broker: allFormData.broker,
        location: allFormData.location,
        portfolioSize: allFormData.portfolioSize,
        investmentBudget: allFormData.investmentBudget,
        assetsHeld: allFormData.assetsHeld.join(", "),
        message: allFormData.message || "No additional message provided"
      };

      await emailjs.send(
        "service_enntrbo",
        "template_ku6r6lf",
        templateParams,
        "A5alm0rgfx9zHC6ES"
      );

      // Call parent onSubmit to move to success screen
      onSubmit(data);
      
      toast.success("Your application has been submitted successfully!");
      
      // Navigate to success page
      navigate("/application/success");
    } catch (error) {
      console.error("Error submitting application form:", error);
      toast.error("There was a problem submitting your application. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Assets &amp; Experience</h3>
          <p className="text-white/70 mb-4">
            Which of the following assets have you traded before?
          </p>

          <div className="space-y-4">
            <Controller
              control={form.control}
              name="assetsHeld"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {assetOptions.map((asset) => (
                      <FormField
                        key={asset.id}
                        control={form.control}
                        name="assetsHeld"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={asset.id}
                              className="flex flex-row items-start space-x-3 space-y-0 bg-charcoal/50 p-4 rounded-md"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(asset.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, asset.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== asset.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-white cursor-pointer font-normal">
                                {asset.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Additional Information</h3>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">
                  Is there anything else you'd like us to know about your trading goals?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share your trading goals and any questions you might have..."
                    className="bg-charcoal/50 border-gold/20 text-white focus:border-gold min-h-[120px] resize-none"
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
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="terms"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel
                  htmlFor="terms"
                  className="text-white cursor-pointer font-normal"
                >
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-gold underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-gold underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    privacy policy
                  </a>
                  .
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            onClick={onBack}
            variant="outline"
            className="border-gold text-gold hover:bg-gold/5"
          >
            Previous Step
          </Button>
          <Button
            type="submit"
            className="bg-gradient-gold hover:bg-gold text-jet font-medium flex-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ApplicationFormStep3;
