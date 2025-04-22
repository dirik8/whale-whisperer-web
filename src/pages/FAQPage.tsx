
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";

const faqCategories = [
  { category: "Membership" },
  { category: "Education" },
  { category: "Coaching" },
  { category: "Tech" },
];

// New bull hero image
const faqHeroImage = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png";

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
    question: "What's included with membership?",
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
  const [activeCategory, setActiveCategory] = useState("Membership");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Bullish Whales Trading Club</title>
        <meta name="description" content="Get answers to common questions about our trading programs, membership benefits, and more." />
      </Helmet>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-charcoal to-midnight relative">
        {/* Hero section with improved styling */}
        <div className="relative h-[480px] overflow-hidden">
          {/* New bull hero image */}
          <img
            src={faqHeroImage}
            alt="FAQ Hero"
            className="absolute w-full h-full object-cover opacity-30"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-midnight/80"></div>
          
          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center text-center pt-32">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold border border-gold/20 mb-4 animate-fade-in">
              <HelpCircle className="w-4 h-4 mr-2" />
              <span>Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="gold-gradient">Frequently Asked</span> Questions
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Get answers to common questions about our trading programs, membership benefits, and expert insights
            </p>
            
            {/* Search bar */}
            <div className="relative w-full max-w-lg mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <Input 
                type="text"
                placeholder="Search for questions..." 
                className="pl-10 bg-charcoal/50 text-white border border-gold/20 ring-gold/30 focus:ring-gold/50 py-6 text-lg rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* FAQ content section */}
        <section className="container mx-auto px-4 py-16 relative z-10 max-w-5xl">
          <div className="grid grid-cols-12 gap-8">
            {/* Left sidebar with links and image */}
            <div className="col-span-12 lg:col-span-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-charcoal/60 backdrop-blur-sm border border-gold/10 rounded-2xl p-6 mb-8 sticky top-24">
                <h3 className="font-bold text-xl text-gold mb-4">Browse Categories</h3>
                <ul className="space-y-2">
                  {faqCategories.map(({ category }) => (
                    <li key={category}>
                      <button
                        onClick={() => {setActiveCategory(category); setSearchQuery("");}}
                        className={`flex items-center w-full py-3 px-4 rounded-lg transition-all ${
                          activeCategory === category && !searchQuery
                            ? "bg-gold text-jet font-semibold shadow-glow-sm"
                            : "hover:bg-gold/10 text-white/90"
                        }`}
                      >
                        <ChevronRight className={`w-4 h-4 mr-2 ${activeCategory === category && !searchQuery ? "text-jet" : "text-gold"}`} />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <img 
                  src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=500&q=80" 
                  alt="Trading Success" 
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl mb-2">Still have questions?</h3>
                  <p className="text-white/70 mb-4">Our team is ready to assist with any questions not covered in our FAQ</p>
                  <Button asChild className="bg-gold hover:bg-gold/90 text-jet w-full">
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main content with FAQs */}
            <div className="col-span-12 lg:col-span-8">
              {searchQuery ? (
                <div className="mb-8 animate-fade-in">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Search Results: <span className="text-gold">{searchQuery}</span>
                  </h2>
                  <p className="text-white/70">
                    Found {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'}
                  </p>
                </div>
              ) : (
                <div className="mb-8 animate-fade-in">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    <span className="text-gold">{activeCategory}</span> Questions
                  </h2>
                  <p className="text-white/70">
                    Everything you need to know about our {activeCategory.toLowerCase()} offerings
                  </p>
                </div>
              )}
              
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`item-${i}`} 
                      className="bg-charcoal/50 backdrop-blur-sm border border-gold/10 rounded-xl overflow-hidden animate-fade-in"
                      style={{ animationDelay: `${0.1 * i + 0.6}s` }}
                    >
                      <AccordionTrigger className="px-6 py-5 text-lg font-medium text-white hover:bg-gold/5 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 text-white/80 leading-relaxed">
                        <div className="border-l-2 border-gold pl-4 py-2">{faq.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <div className="text-center py-16 text-white/70 animate-fade-in">
                    <HelpCircle className="w-12 h-12 mx-auto mb-4 text-gold/50" />
                    <h3 className="text-xl font-medium mb-2">No Questions Found</h3>
                    <p>Try adjusting your search or browse by category</p>
                  </div>
                )}
              </Accordion>
              
              {/* How to get started card */}
              {!searchQuery && (
                <div className="mt-10 bg-gradient-to-r from-gold/10 to-gold/5 backdrop-blur-sm border border-gold/20 rounded-xl p-8 animate-fade-in" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <ChevronRight className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-bold text-xl text-gold">{extraContent.title}</h3>
                  </div>
                  <p className="text-white/80 whitespace-pre-line pl-14">{extraContent.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
