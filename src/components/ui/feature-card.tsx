
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}) => {
  return (
    <div className={cn(
      "bg-charcoal/50 border border-gold/10 p-6 rounded-lg transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5",
      className
    )}>
      <div className={cn(
        "w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-jet mb-4",
        iconClassName
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
