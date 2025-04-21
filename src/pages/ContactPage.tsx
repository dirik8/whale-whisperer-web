
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const ContactPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-midnight">
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <SectionHeading
          title="Let’s Build Your Trading Future"
          subtitle="Connect directly — our team responds personally."
          align="center"
        />
        <form className="bg-charcoal/80 border border-gold/15 rounded-xl shadow-lg p-8 flex flex-col gap-6">
          <input
            className="bg-jet/80 border border-gold/15 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
            placeholder="Full Name"
            name="name"
            required
          />
          <input
            className="bg-jet/80 border border-gold/15 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
            placeholder="E-mail"
            type="email"
            name="email"
            required
          />
          <input
            className="bg-jet/80 border border-gold/15 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition"
            placeholder="Phone Number (optional)"
            name="phone"
          />
          <textarea
            className="bg-jet/80 border border-gold/15 rounded-md py-3 px-4 text-white placeholder:text-white/50 focus:border-gold outline-none transition min-h-[120px]"
            placeholder="How can we help you?"
            name="message"
            required
          />
          <Button className="bg-gradient-gold text-jet text-lg font-semibold py-3 hover:scale-105 transition">Send Message</Button>
          <div className="text-white/60 text-center mt-2">
            Or contact us directly:<br />
            <a href="mailto:info@bullishwhales.club" className="text-gold hover:underline">info@bullishwhales.club</a><br />
            WhatsApp: <a href="#" className="text-gold hover:underline">+1 234 567 8901</a><br />
            Telegram: <a href="#" className="text-gold hover:underline">@bullishwhales</a>
          </div>
        </form>
        <div className="mt-10 text-center text-white/60">
          <div className="h-72 w-full bg-gradient-to-br from-gold/25 to-jet/40 flex items-center justify-center rounded-lg">
            <span className="text-gold text-lg">[ Digital Globe or Map Coming Soon ]</span>
          </div>
          <div className="mt-6">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/5">
              Start the conversation now
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactPage;
