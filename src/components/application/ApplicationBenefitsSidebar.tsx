
import React from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

type ApplicationBenefitsSidebarProps = {
  className?: string;
};

const ApplicationBenefitsSidebar: React.FC<ApplicationBenefitsSidebarProps> = ({ 
  className = "" 
}) => {
  return (
    <div className={className}>
      <div className="bg-charcoal/80 backdrop-blur-sm border border-gold/20 rounded-xl p-6 mb-6">
        <div className="flex items-center mb-4">
          <Award className="w-6 h-6 text-gold mr-3" />
          <h3 className="text-xl font-semibold text-white">Membership Benefits</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
            </div>
            <p className="text-white/80">Access to proprietary trading algorithms</p>
          </li>
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
            </div>
            <p className="text-white/80">Weekly live trading sessions with experts</p>
          </li>
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
            </div>
            <p className="text-white/80">VIP Discord community with 24/7 support</p>
          </li>
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
            </div>
            <p className="text-white/80">Personalized trading strategy development</p>
          </li>
          <li className="flex items-start">
            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
            </div>
            <p className="text-white/80">Monthly one-on-one coaching sessions</p>
          </li>
        </ul>
      </div>
      
      <div className="relative h-64 rounded-xl overflow-hidden mb-6">
        <img 
          src="https://images.unsplash.com/photo-1642543492914-55a0453c8261?auto=format&fit=crop&w=500&q=80" 
          alt="Trading" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex items-end p-4">
          <Link to="/testimonials" className="text-gold flex items-center hover:underline">
            See Member Success Stories <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-gold/10 to-midnight/80 border border-gold/20 rounded-xl p-6">
        <h4 className="text-white font-medium mb-3">Ready to Level Up?</h4>
        <p className="text-white/70 mb-4">
          Not sure if you qualify? Book a free consultation with our team to discuss your trading goals.
        </p>
        <Button asChild className="w-full bg-charcoal/60 hover:bg-charcoal border border-gold/30 text-gold">
          <Link to="/contact" className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> Schedule a Call
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ApplicationBenefitsSidebar;
