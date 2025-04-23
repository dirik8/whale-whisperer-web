
import React from "react";
import { Timer, AlertTriangle } from "lucide-react";
import UrgencyTimer from "@/components/ui/urgency-timer";

const UrgencyBanner = () => {
  return (
    <div className="relative py-6 backdrop-blur-xl bg-gradient-to-r from-[#f97316]/90 via-[#8B5CF6]/90 to-[#ea384c]/90 border-y-2 border-gold/50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full border-2 border-white/60 shadow-lg animate-pulse" style={{
            background: "linear-gradient(90deg, #f97316 10%, #8B5CF6 60%, #ea384c 90%)",
            boxShadow: "0 0 15px rgba(255,165,0,0.3), 0 0 30px rgba(255,165,0,0.2)"
          }}>
            <span className="bg-white rounded-full mr-2 animate-blink shadow-glow" style={{ 
              width: 10, 
              height: 10, 
              display: "inline-block", 
              boxShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)" 
            }}></span>
            <Timer className="w-5 h-5 text-white mr-2 animate-bounce" />
            <UrgencyTimer />
            <span className="ml-2 font-bold text-white tracking-wide animate-blink-slow">— Only <span className="text-bright-orange font-extrabold">3 slots remaining!</span></span>
          </div>
          
          <p className="text-lg sm:text-xl font-semibold text-white drop-shadow gold-gradient animate-fade-in">
            <AlertTriangle className="inline-block mr-2 text-yellow-300 animate-pulse" />
            <span className="underline decoration-wavy decoration-yellow-300">ACTION REQUIRED:</span> Grab your spot now — top traders join fastest!
          </p>
        </div>
      </div>
      {/* Custom keyframes for blinking effect */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes shadow-pulse {
          0% { box-shadow: 0 0 15px rgba(255,165,0,0.3); }
          50% { box-shadow: 0 0 25px rgba(255,165,0,0.6); }
          100% { box-shadow: 0 0 15px rgba(255,165,0,0.3); }
        }
        .animate-blink { animation: blink 1s steps(4, start) infinite; }
        .animate-blink-slow { animation: blink 2.2s cubic-bezier(0.2, 0.4, 0.5, 0.8) infinite; }
        .shadow-glow { animation: shadow-pulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default UrgencyBanner;
