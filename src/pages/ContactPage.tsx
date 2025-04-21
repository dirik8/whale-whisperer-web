
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const ContactPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-charcoal">
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <SectionHeading
          title="Let’s Build Your Trading Future"
          subtitle="Connect directly — our team responds personally. Reach us any time."
          align="center"
        />
        <form className="bg-charcoal/90 border border-gold/20 rounded-xl shadow-lg p-8 flex flex-col gap-6 mb-8 animate-fade-in">
          <input
            className="bg-jet/80 border border-gold/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
            placeholder="Full Name"
            name="name"
            required
          />
          <input
            className="bg-jet/80 border border-gold/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
            placeholder="E-mail"
            type="email"
            name="email"
            required
          />
          <input
            className="bg-jet/80 border border-gold/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
            placeholder="Phone Number (optional)"
            name="phone"
          />
          <textarea
            className="bg-jet/80 border border-gold/20 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition min-h-[120px]"
            placeholder="How can we help you?"
            name="message"
            required
          />
          <Button className="bg-gradient-gold text-jet text-lg font-semibold py-3 rounded-lg hover:scale-105 transition">Send Message</Button>
          <div className="text-white/60 text-center mt-2">
            Or contact us directly:<br />
            <a href="mailto:info@bullishwhales.club" className="text-gold hover:underline">info@bullishwhales.club</a><br />
            WhatsApp: <a href="#" className="text-gold hover:underline">+1 234 567 8901</a><br />
            Telegram: <a href="#" className="text-gold hover:underline">@bullishwhales</a>
          </div>
        </form>
        {/* Add more contact info */}
        <div className="bg-midnight/70 border border-gold/10 rounded-xl p-6 text-white/85 shadow mb-8 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="font-bold text-gold mb-1">Our Address</div>
              <div className="text-white/80">Suite 23, Blockchain District, Fintech City</div>
              <div className="text-white/60 text-sm mt-1">Global HQ - Online Office Worldwide</div>
            </div>
            <div>
              <div className="font-bold text-gold mb-1">Hours of Operation</div>
              <div>Mon–Fri: 8:00 AM – 8:00 PM UTC</div>
              <div>Sat–Sun: 10:00 AM – 6:00 PM UTC</div>
            </div>
          </div>
        </div>
        {/* Globe placeholder */}
        <div className="text-center text-white/70 mb-8">
          <div className="h-72 w-full bg-gradient-to-br from-gold/15 to-jet/30 flex items-center justify-center rounded-lg">
            <span className="text-gold text-lg">[ Digital Globe & Global Client Map Coming Soon ]</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2">
          <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg font-semibold w-full md:w-auto px-8 py-3 rounded-lg">
            Start the conversation now
          </Button>
          <span className="text-white/50 text-xs mt-1">You'll get a reply within 24 hours, guaranteed.</span>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactPage;
