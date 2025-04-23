
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SectionHeading from "@/components/ui/section-heading";
import emailjs from "@emailjs/browser";

// Schema for Contact form
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Please provide a message of at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

type ContactFormContainerProps = {
  className?: string;
};

const ContactFormContainer: React.FC<ContactFormContainerProps> = ({ className = "" }) => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      console.log("Contact form submitted:", values);
      
      await emailjs.send(
        "service_enntrbo",
        "template_xbo4ppo",
        {
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          phone: values.phone || "Not provided",
          message: values.message,
        },
        "A5alm0rgfx9zHC6ES"
      );
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={className}>
      <SectionHeading
        title="Let's Build Your Trading Future"
        subtitle="Connect directly — our team responds personally. Reach us any time."
        align="left"
      />
      
      {formSubmitted ? (
        <div className="bg-gold/10 border border-gold/30 rounded-xl shadow-lg p-8 animate-fade-in">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gold/20 rounded-full mx-auto flex items-center justify-center mb-4 animate-bounce">
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="bg-charcoal/90 backdrop-blur-sm border border-gold/20 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80">First Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your first name"
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
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80">Last Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your last name"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/80">Email Address*</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
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
                  <FormMessage />
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
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </Form>
      )}
      
      <p className="text-white/50 text-center mt-4 text-sm">
        Your information is secure and will only be used for contact purposes.
      </p>
    </div>
  );
};

export default ContactFormContainer;
