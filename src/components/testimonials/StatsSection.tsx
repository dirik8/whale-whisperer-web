
import React from "react";
import SectionHeading from "@/components/ui/section-heading";

const stats = [
  { value: "87%", label: "Members Reporting Profitability" },
  { value: "32K+", label: "Total Successful Trades" },
  { value: "$14.2M", label: "Cumulative Member Profits" },
  { value: "94%", label: "Member Retention Rate" }
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-jet">
      <div className="container mx-auto text-center">
        <SectionHeading
          title="The Numbers Don't Lie"
          subtitle="Measurable results backed by real member data."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-charcoal/50 border border-gold/10 rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
