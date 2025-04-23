
import React from "react";
import { Timer, AlertTriangle } from "lucide-react";
import UrgencyTimer from "@/components/ui/urgency-timer";

const UrgencyBanner = () => {
  return (
    <div className="relative py-6 backdrop-blur-xl bg-gradient-to-r from-[#f97316]/80 via-[#8B5CF6]/90 to-[#ea384c]/90 border-y-2 border-gold/30">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full border-2 border-white/40 shadow-lg animate-pulse" style={{
            background: "linear-gradient(90deg, #f97316 10%, #8B5CF6 60%, #ea384c 90%)"
          }}>
            <span className="bg-white rounded-full mr-2 animate-blink shadow" style={{ width: 10, height: 10, display: "inline-block" }}></span>
            <Timer className="w-5 h-5 text-white mr-2 animate-bounce" />
            <UrgencyTimer />
            <span className="ml-2 font-bold text-white tracking-wide animate-blink-slow">— Only <span className="text-bright-orange font-extrabold">3 slots remaining!</span></span>
          </div>
          
          <p className="text-lg font-semibold text-white drop-shadow gold-gradient animate-fade-in">
            <span className="underline decoration-wavy decoration-yellow-400/70">ACTION REQUIRED:</span> Grab your spot now — top traders join fastest!
          </p>
        </div>
      </div>
      {/* Custom keyframes for blinking effect */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-blink { animation: blink 1s steps(4, start) infinite; }
        .animate-blink-slow { animation: blink 2.2s cubic-bezier(0.2, 0.4, 0.5, 0.8) infinite; }
      `}</style>
    </div>
  );
};

export default UrgencyBanner;
