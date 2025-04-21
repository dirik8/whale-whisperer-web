
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    category: "Education",
    question: "Do I need experience to benefit from the Education Hub?",
    answer: "No prior trading experience is needed! Our lessons cover basics through advanced tactics, with resources for every skill level."
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
  // ...more FAQ entries as needed
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("Membership");
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-midnight">
        <section className="container mx-auto px-4 max-w-3xl py-16">
          <SectionHeading
            title="Straight Answers. No Fluff."
            subtitle="Your biggest questions on membership, coaching, and more — answered."
            align="center"
          />
          <div className="flex gap-2 mb-6 justify-center">
            {faqCategories.map(({ category }) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md font-semibold transition border ${
                  activeCategory === category
                    ? "bg-gold text-jet border-gold"
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
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-2">Still have questions?</p>
            <a
              href="/contact"
              className="inline-block border border-gold text-gold py-3 px-8 rounded-md bg-transparent hover:bg-gold/10 font-semibold transition"
            >
              Let’s talk.
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default FAQPage;
