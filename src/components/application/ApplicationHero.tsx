
import React from "react";
import { Users } from "lucide-react";

type ApplicationHeroProps = {
  heroImage: string;
};

const ApplicationHero: React.FC<ApplicationHeroProps> = ({ heroImage }) => {
  return (
    <section className="container mx-auto px-4 py-16 relative z-10 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold mb-6 animate-fade-in">
            <Users className="w-4 h-4 mr-2" />
            <span>Limited Access</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Apply for Access to Our <span className="gold-gradient">Elite Trading Circle</span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            <span className="bg-gold/10 text-gold px-3 py-1 mr-2 rounded-full font-semibold shadow animate-pulse">15+ years</span>
            We accept only 50 traders annually. Are you next?
          </p>
          <ul className="mb-6 text-white/80 space-y-2">
            <li><span className="text-gold">•</span> Personalized onboarding with senior traders</li>
            <li><span className="text-gold">•</span> Private Discord access & live calls</li>
            <li><span className="text-gold">•</span> 100% transparent strategy breakdowns</li>
          </ul>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
            alt="Application modern"
            className="w-72 h-72 object-cover rounded-2xl shadow-xl ring-4 ring-gold/20 hover:scale-105 transition-transform duration-500 animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicationHero;
