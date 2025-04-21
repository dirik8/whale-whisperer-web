
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqCategories = [
  { category: "Membership" },
  { category: "Education" },
  { category: "Coaching" },
  { category: "Tech" },
];
const faqs = [
  {
    category: "Membership",
    question: "Who can join Bullish Whales Club?",
    answer: "Our membership is tailored for high-net-worth individuals, ambitious professionals, and trading enthusiasts who want elite mentorship and proven strategies."
  },
  {
    category: "Membership",
    question: "Is there a minimum capital requirement?",
    answer: "No fixed minimum, but BWC is best suited to those ready to scale their portfolios—the mindset matters more than account size."
  },
  {
    category: "Membership",
    question: "What’s included with membership?",
    answer: "You get access to masterclasses, strategy breakdowns, live calls, Discord chats, coaching opportunities, and members-only trade alerts."
  },
  {
    category: "Education",
    question: "Do I need experience to benefit from the Education Hub?",
    answer: "No prior trading experience is needed! Our lessons cover basics through advanced tactics, with resources for every skill level."
  },
  {
    category: "Education",
    question: "Are the lessons live or pre-recorded?",
    answer: "Most masterclasses are self-paced and pre-recorded, with live sessions happening monthly for Q&A and strategy updates."
  },
  {
    category: "Coaching",
    question: "How do Elite Coaching sessions work?",
    answer: "Each client receives a personal plan, private Discord access, and monthly one-on-ones, engineered for serious transformation."
  },
  {
    category: "Tech",
    question: "What tech do you use for trading analysis?",
    answer: "We leverage proprietary dashboards, algorithmic screeners, and secure cloud-based backtesting infrastructure."
  },
  {
    category: "Tech",
    question: "Will I need extra software to join?",
    answer: "No, everything is accessible via browser. Premium tools are available after onboarding in your dashboard."
  },
];

const extraContent = {
  title: "How to Get Started With BWC",
  desc: "1. Explore our Education Hub for free previews. \n2. Apply for Membership—get personal onboarding. \n3. Join the private Discord, access masterclasses, and engage in live coaching.\nReady to level up? Your journey starts now."
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("Membership");
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-charcoal to-midnight">
        <section className="container mx-auto px-4 max-w-3xl py-16">
          <SectionHeading
            title="Straight Answers. No Fluff."
            subtitle="Your biggest questions on membership, coaching, and more—answered."
            align="center"
          />
          <div className="flex gap-2 mb-6 justify-center">
            {faqCategories.map(({ category }) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md font-semibold transition border ${
                  activeCategory === category
                    ? "bg-gold text-jet border-gold shadow-md"
                    : "bg-charcoal text-white/80 border-gold/20 hover:bg-gold/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <Accordion type="single" collapsible>
            {faqs
              .filter((f) => f.category === activeCategory)
              .map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-white text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-white/70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
          {/* How to get started extra content */}
          <div className="mt-10 bg-midnight/60 border border-gold/20 rounded-lg p-6">
            <div className="font-bold text-gold text-lg mb-2">{extraContent.title}</div>
            <p className="text-white/80 whitespace-pre-line">{extraContent.desc}</p>
          </div>
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-2">Still have questions?</p>
            <Button asChild variant="outline" className="border-gold text-gold font-semibold px-8 py-3 rounded-lg hover:bg-gold/10">
              <a href="/contact">Let’s talk</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default FAQPage;
