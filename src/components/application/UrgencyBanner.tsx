
import React from "react";
import { Clock } from "lucide-react";
import UrgencyTimer from "@/components/ui/urgency-timer";

const UrgencyBanner = () => {
  return (
    <div className="py-6 bg-midnight/90 border-y border-gold/10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 text-red-400 font-medium text-sm animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            <UrgencyTimer />
            <span className="ml-2">— Only 3 slots remaining!</span>
          </div>
          
          <p className="text-gold/90 font-medium animate-fade-in">
            <span className="underline decoration-wavy decoration-gold/70">Limited spots available</span> - Apply now before they're gone!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;
