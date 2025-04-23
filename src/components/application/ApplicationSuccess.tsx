
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCheck, Clock } from "lucide-react";

const ApplicationSuccess = () => {
  return (
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
  );
};

export default ApplicationSuccess;
