
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, ArrowRight, Award } from "lucide-react";
import { Link } from 'react-router-dom';

export interface SidebarContentProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  contactInfo?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const SidebarContent = ({
  title,
  subtitle,
  imageSrc,
  stats,
  contactInfo = false,
  ctaText = "Apply Now",
  ctaLink = "/apply"
}: SidebarContentProps) => {
  return (
    <div className="h-full flex flex-col">
      {/* Image */}
      <div className="relative h-60 rounded-xl overflow-hidden mb-6">
        <img 
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex items-end">
          <div className="p-4">
            <h3 className="text-gold font-semibold text-xl">{title}</h3>
            <p className="text-white/80 text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* Stats if provided */}
      {stats && (
        <div className="bg-charcoal/50 rounded-xl p-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Contact info if requested */}
      {contactInfo && (
        <div className="bg-charcoal/50 rounded-xl p-4 mb-6">
          <h4 className="text-white font-medium mb-3">Get in Touch</h4>
          <ul className="space-y-3">
            <li className="flex items-center text-white/70">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                <Mail className="w-4 h-4 text-gold" />
              </div>
              <a href="mailto:info@bullishwhales.club" className="hover:text-gold">info@bullishwhales.club</a>
            </li>
            <li className="flex items-center text-white/70">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                <Phone className="w-4 h-4 text-gold" />
              </div>
              <a href="tel:+1234567890" className="hover:text-gold">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center text-white/70">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                <Clock className="w-4 h-4 text-gold" />
              </div>
              <span>Response within 24 hours</span>
            </li>
          </ul>
        </div>
      )}
      
      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-5 mb-6">
        <div className="flex items-center mb-3">
          <Award className="w-5 h-5 text-gold mr-2" />
          <h4 className="text-white font-medium">Why Choose Us</h4>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center text-white/70 text-sm">
            <div className="w-1 h-1 rounded-full bg-gold mr-2"></div>
            <span>15+ years of market excellence</span>
          </li>
          <li className="flex items-center text-white/70 text-sm">
            <div className="w-1 h-1 rounded-full bg-gold mr-2"></div>
            <span>Private Discord access</span>
          </li>
          <li className="flex items-center text-white/70 text-sm">
            <div className="w-1 h-1 rounded-full bg-gold mr-2"></div>
            <span>Weekly live trading sessions</span>
          </li>
          <li className="flex items-center text-white/70 text-sm">
            <div className="w-1 h-1 rounded-full bg-gold mr-2"></div>
            <span>Personalized coaching programs</span>
          </li>
        </ul>
      </div>
      
      {/* CTA Button */}
      <div className="mt-auto">
        <Button asChild className="w-full bg-gradient-gold text-jet flex items-center justify-center gap-2 py-5">
          <Link to={ctaLink}>
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SidebarContent;
