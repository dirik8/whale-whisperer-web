
import React from "react";
import { CheckCheck } from "lucide-react";

type ApplicationStepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

const ApplicationStepIndicator: React.FC<ApplicationStepIndicatorProps> = ({ 
  currentStep, 
  totalSteps 
}) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step === currentStep 
                ? "bg-gold text-jet font-medium" 
                : step < currentStep 
                  ? "bg-gold/30 text-white" 
                  : "bg-charcoal/70 text-white/50"
            }`}
          >
            {step < currentStep ? <CheckCheck className="w-5 h-5" /> : step}
          </div>
          {step < totalSteps && (
            <div className={`w-16 h-1 ${step < currentStep ? "bg-gold/30" : "bg-charcoal/70"}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ApplicationStepIndicator;
