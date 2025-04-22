
import React from "react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author?: string;
  role?: string;
  image?: string;
  className?: string;
  showAuthor?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  image,
  className,
  showAuthor = false,
}) => {
  return (
    <div className={cn(
      "bg-charcoal/50 border border-gold/10 p-6 md:p-8 rounded-lg transition-all duration-300 hover:border-gold/30",
      className
    )}>
      <Quote className="w-8 h-8 text-gold opacity-50 mb-4" />
      <p className="text-white/80 text-lg mb-6 italic">{quote}</p>
      {showAuthor && author && (
        <div className="flex items-center">
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gold/20">
              <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <h4 className="text-white font-medium">{author}</h4>
            {role && <p className="text-white/60 text-sm">{role}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
