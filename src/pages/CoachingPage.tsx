
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen } from "lucide-react";
import UrgencyTimer from "@/components/ui/urgency-timer";
import { Clock } from "lucide-react";

const heroBg = "/lovable-uploads/f690793a-d82d-4823-8abc-d6fb222a8e28.png"; // Bull image

const cases = [
  {
    before: "Struggling with emotional trades, inconsistent profits.",
    after: "Grew account 4x in 8 months and journals every trade.",
    name: "Liam S.",
  },
  {
    before: "Missed big moves, analysis overwhelm.",
    after: "Now plans every entry, averages 17% monthly ROI.",
    name: "Priya C.",
  },
  {
    before: "Analysis paralysis, chasing every trend.",
    after: "Follows a process, achieves >90% planned trades, sleeping soundly.",
    name: "Omar E.",
  },
];

const featureList = [
  "Private Discord channel",
  "Personalized trading plan",
  "Monthly check-ins with Ava",
  "Exclusive market signals",
  "1:1 Mindset & Strategy Zooms"
];

const testimonials = [
  { text: "Ava's hands-on coaching changed the game for me — confidence and clarity like never before.", name: "Max W." },
  { text: "I never realized how much edge comes from accountability. This is worth every dollar.", name: "Daria F." },
  { text: "My trading was stagnant for years. Now, I execute with purpose and finally see consistent gains.", name: "Neha B." },
];

const successProfiles = [
  {
    name: "Robert",
    age: "65",
    role: "Retiree",
    discovery: "Discovered via YouTube Comment",
    before: "Modest savings, fear of market crashes, unsure how to outpace inflation.",
    turning: "Joined a BWC webinar via YouTube comment, started paper trading with $10K.",
    after: "$5.8M in profits, paid off mortgage, funded grandkids' European vacation.",
    quote: "I never thought I'd retire with confidence. BWC gave me a second chance—at 65.",
    icons: ["📺 YouTube", "🧪 Paper Trading", "💵 $5.8M", "🏡 Mortgage-Free"]
  },
  {
    name: "Marisol",
    age: "52",
    role: "Single Mother",
    discovery: "Discovered on Facebook",
    before: "Lost job, juggling tuition, wary of online scams.",
    turning: "Joined under a pseudonym, studied tutorials nightly.",
    after: "$3M in 6 months, bought Beverly Hills mansion, funded daughter's college.",
    quote: "I traded fear for freedom—and now I help other single moms do the same.",
    icons: ["📘 Facebook", "🎥 Lessons", "💵 $3M", "🎓 Ivy League Plan"]
  },
  {
    name: "Ethan",
    age: "28",
    role: "Software Engineer",
    discovery: "Discovered on Reddit (r/WallStreetBets)",
    before: "Stagnating equity options, crypto stress.",
    turning: "Read Reddit post, joined tech-focused coaching, applied 'three-confirmation rule.'",
    after: "$850K in 9 months, bought dream home, launched trading psychology group.",
    quote: "BWC helped me replace speculation with strategy.",
    icons: ["🧑‍💻 Reddit", "📈 Backtesting", "💵 $850K", "🏡 Homeowner"]
  },
  {
    name: "Anika",
    age: "34",
    role: "Immigrant Nurse",
    discovery: "Discovered via Instagram Ad",
    before: "Double shifts, remittances, paycheck-to-paycheck life.",
    turning: "Clicked on Instagram ad, began with paper trades and risk tutorials.",
    after: "$150K in 3 months, moved family to U.S., started loan fund for immigrant nurses.",
    quote: "I went from burnout to building a bridge for others.",
    icons: ["📸 Instagram", "💊 Healthcare", "💵 $150K", "🌍 Family Reunited"]
  },
  {
    name: "Devon",
    age: "19",
    role: "College Student",
    discovery: "Discovered on TikTok",
    before: "Worried about tuition, drawn in by viral videos.",
    turning: "Joined student cohort, started with $1K and daily trade challenges.",
    after: "$25K by semester's end, started campus fund and cohort.",
    quote: "I turned my side hustle into a student movement.",
    icons: ["🎵 TikTok", "🧑‍🎓 Student Cohort", "💵 $25K", "🎓 Tuition Covered"]
  },
  {
    name: "Linda",
    age: "45",
    role: "High School Teacher",
    discovery: "Discovered on LinkedIn",
    before: "Patchwork income, burned out by school system.",
    turning: "Saw peer's post, joined teacher-friendly strategy call.",
    after: "$120K side income, took sabbatical to Europe, now runs finance workshops.",
    quote: "I went from grading papers to grading profits.",
    icons: ["💼 LinkedIn", "🧑‍🏫 Educator Plan", "💵 $120K", "✈️ Sabbatical"]
  },
  {
    name: "Amit",
    age: "38",
    role: "Bakery Owner",
    discovery: "Discovered via Telegram Channel",
    before: "Bakery revenue decline, feared closure.",
    turning: "Found trade alerts on Telegram, committed 10% of weekly profits.",
    after: "$600K in 8 months, opened new store and food truck.",
    quote: "Whale alerts saved my business—literally.",
    icons: ["📲 Telegram", "🍞 Bakery", "💵 $600K", "🚚 Mobile Brand"]
  },
  {
    name: "Grace",
    age: "60",
    role: "Military Veteran",
    discovery: "Discovered on Twitter",
    before: "Pension didn't cover medical costs, high anxiety.",
    turning: "Joined BWC's 'Mission Brief' and military-inspired drills.",
    after: "$2.1M in 18 months, launched veteran financial bootcamps.",
    quote: "BWC gave me a new mission—and a new legacy.",
    icons: ["🐦 Twitter", "🪖 Veteran Tools", "💵 $2.1M", "🎖️ Nonprofit"]
  },
  {
    name: "Jamal",
    age: "49",
    role: "Urban Planner",
    discovery: "Discovered on Clubhouse",
    before: "Frustrated with bureaucracy and delays in city projects.",
    turning: "Joined live BWC audio sessions, took Market Psychology class.",
    after: "$420K in 1 year, launched equity fund for urban projects.",
    quote: "From zoning plans to profit charts—it's all about process.",
    icons: ["🎙️ Clubhouse", "🌆 Planner", "💵 $420K", "🌱 Social Fund"]
  },
  {
    name: "Elena",
    age: "31",
    role: "Graphic Designer",
    discovery: "Discovered in WhatsApp Group",
    before: "Inconsistent freelance income, design burnout.",
    turning: "Joined trial group, studied candle patterns, joined critiques.",
    after: "$75K in 6 months, launched design agency.",
    quote: "Design taught me detail—BWC taught me discipline.",
    icons: ["💬 WhatsApp", "🎨 Freelance", "💵 $75K", "🖥️ Agency Owner"]
  },
  {
    name: "Carlos",
    age: "27",
    role: "Ride-Share Driver",
    discovery: "Discovered via YouTube Pre-Roll",
    before: "60-hour workweeks, living paycheck-to-paycheck.",
    turning: "Saw pre-roll ad, studied videos between rides, started with $500.",
    after: "$18K in 3 months, helped brother, reduced driving hours.",
    quote: "I turned red lights into learning time.",
    icons: ["📺 YouTube", "🚗 Gig Economy", "💵 $18K", "👨‍👦 Family Impact"]
  },
  {
    name: "Sofia",
    age: "57",
    role: "Corporate Executive",
    discovery: "Discovered on Pinterest",
    before: "80-hour weeks, golden handcuffs dilemma.",
    turning: "Found '8-Step Wealth Map,' joined elite coaching.",
    after: "$2.7M in 14 months, retired early, hosts mastermind yacht retreats.",
    quote: "I replaced boardrooms with the Mediterranean breeze.",
    icons: ["📌 Pinterest", "🧭 Wealth Map", "💵 $2.7M", "🛥️ Retired Early"]
  },
  {
    name: "Ravi",
    age: "23",
    role: "Data Analyst",
    discovery: "Discovered on Quora",
    before: "Curious about algorithmic trading, low capital.",
    turning: "Tested BWC's backtest engine vs his models, joined Slack group.",
    after: "$11K from $5K in 4 months, backpacked across Asia.",
    quote: "BWC made my data dreams tradeable.",
    icons: ["❓ Quora", "💻 Data Nerds", "💵 $11K", "🎒 Asia Trip"]
  },
  {
    name: "Fiona",
    age: "40",
    role: "Freelance Writer",
    discovery: "Discovered on Instagram Story",
    before: "Low work volume, creative block.",
    turning: "Joined 'Writer's Wealth Challenge,' shared updates in group.",
    after: "$45K in 90 days, launched agency, moved to Costa Rica.",
    quote: "Profits paid for peace—and prose.",
    icons: ["📸 Instagram", "✍️ Writing Challenge", "💵 $45K", "🌴 Retreat Life"]
  },
  {
    name: "Mohammed",
    age: "50",
    role: "Taxi Dispatcher",
    discovery: "Discovered via Telegram Broadcast",
    before: "No investment experience, wanted income boost.",
    turning: "Followed signals with strict discipline.",
    after: "$280K in 7 months, opened café, employed drivers.",
    quote: "I didn't just grow money—I grew opportunity.",
    icons: ["📲 Telegram", "☕ Café Owner", "💵 $280K", "🧑‍🍳 Employer"]
  },
  {
    name: "Yara",
    age: "29",
    role: "Physical Therapist",
    discovery: "Discovered via LinkedIn DM",
    before: "Student debt, no time for financial growth.",
    turning: "Joined 'Debt-Slayer' program, focused on daily mindset drills.",
    after: "$90K in 6 months, cleared loans, launched wellness retreats.",
    quote: "BWC helped me heal my finances—and others.",
    icons: ["💬 LinkedIn DM", "🧠 Mindset Work", "💵 $90K", "🌿 Self-Care Coach"]
  },
  {
    name: "Igor",
    age: "55",
    role: "Construction Foreman",
    discovery: "Discovered on Reddit (r/personalfinance)",
    before: "Inflation eroded savings post-2008 crash.",
    turning: "Tried BWC's hedged portfolio with $10K.",
    after: "$460K in 11 months, started scholarship fund.",
    quote: "I rebuilt more than walls—I rebuilt wealth.",
    icons: ["🧱 Reddit", "🛡️ Hedging Strategy", "💵 $460K", "🎓 Scholarship"]
  },
  {
    name: "Naomi",
    age: "33",
    role: "Startup Founder",
    discovery: "Discovered in Discord Server",
    before: "Burn-rate stress, few liquidity options.",
    turning: "Integrated BWC's treasury signals, reframed risk like runway.",
    after: "$900K in 3 quarters, secured startup runway.",
    quote: "Startups and trades both need discipline—and BWC taught both.",
    icons: ["💬 Discord", "🚀 Founder Focus", "💵 $900K", "🦄 Runway Extended"]
  },
  {
    name: "Trevor",
    age: "41",
    role: "Attorney",
    discovery: "Discovered on Snapchat Story",
    before: "Burned out from billable hours, no time for finance.",
    turning: "Used BWC's automated compliance-friendly system.",
    after: "$510K in 10 months, bought lakeside cabin, reduced workload.",
    quote: "Trading funded my freedom—and my pro bono practice.",
    icons: ["👻 Snapchat", "⚖️ Legal AI", "💵 $510K", "🏞️ Cabin Life"]
  },
  {
    name: "Zanele",
    age: "30",
    role: "NGO Worker",
    discovery: "Discovered via TikTok Live",
    before: "Passionate, but financially stuck in nonprofit work.",
    turning: "Joined BWC's micro-trading program, reinvested profits into causes.",
    after: "$60K in 8 months, built children's library, expanded workshops.",
    quote: "BWC helped me fund what the world needs most.",
    icons: ["🎵 TikTok Live", "❤️ NGO Work", "💵 $60K", "📚 Library Built"]
  }
];

const CoachingPage = () => (
  <>
    <Header />
    <main className="min-h-screen pt-24 bg-gradient-to-b from-midnight to-jet">
      {/* Hero Section with Background */}
      <section className="py-20 px-4 bg-midnight relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 0 }}>
          <img
            src={heroBg}
            className="w-full h-full object-contain mx-auto opacity-40 pointer-events-none animate-fade-in"
            alt="Crypto bull"
          />
        </div>
        
        {/* Background gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-midnight/80 to-charcoal/90" style={{ zIndex: 1 }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Urgency Timer */}
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 text-red-400 font-medium text-sm mb-4 animate-pulse">
              <Clock className="w-4 h-4 mr-2" />
              <UrgencyTimer />
              <span className="ml-2">— Only 3 slots remaining!</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mentorship That <span className="gold-gradient">Moves the Needle</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Real results, life-changing accountability, limited slots—serious traders only.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <SectionHeading
          title="Mentorship That Moves the Needle"
          subtitle="Real results, life-changing accountability, limited slots—serious traders only."
          align="center"
        />

        {/* "Before and After" Cases */}
        <div className="grid md:grid-cols-3 gap-10 mb-12 mt-10">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-charcoal/80 border border-gold/15 rounded-xl p-7 shadow animate-fade-in">
              <div className="mb-2 text-white/60 text-xs italic">Before:</div>
              <div className="mb-4 text-white">{c.before}</div>
              <div className="mb-2 text-gold text-xs italic">After:</div>
              <div className="mb-4 text-gold/90 font-semibold">{c.after}</div>
              <div className="mt-2 text-white/70 text-right">— {c.name}</div>
            </div>
          ))}
        </div>
        {/* Feature List */}
        <div className="mb-10 flex flex-wrap gap-6 justify-center">
          {featureList.map((f, i) => (
            <div key={i} className="bg-gold/10 border border-gold/20 py-3 px-6 rounded-lg text-gold text-lg font-semibold flex items-center gap-2 shadow">
              <Star className="w-5 h-5" /> {f}
            </div>
          ))}
        </div>
        {/* Testimonials block */}
        <div className="mb-14 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-charcoal/60 rounded-xl border border-gold/10 p-6 text-white/90 shadow">
              <div className="italic mb-2">"{t.text}"</div>
              <div className="text-gold font-bold flex items-center gap-2"><Users className="w-5 h-5" /> {t.name}</div>
            </div>
          ))}
        </div>

        {/* Success Profiles Section */}
        <div className="mt-20 mb-10">
          <SectionHeading
            title="Success Stories"
            subtitle="Real people, real results. See how our coaching changed lives."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {successProfiles.map((profile, index) => (
              <div 
                key={index} 
                className="bg-charcoal/60 border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{profile.name}, {profile.age}</h3>
                    <p className="text-gold/80 text-sm">{profile.role}</p>
                  </div>
                </div>
                
                <p className="text-white/60 text-xs mb-1">{profile.discovery}</p>
                
                <div className="mt-4">
                  <p className="text-white/80 text-sm mb-1 font-medium">BEFORE:</p>
                  <p className="text-white/70 mb-3">{profile.before}</p>
                  
                  <p className="text-gold/80 text-sm mb-1 font-medium">TURNING POINT:</p>
                  <p className="text-white/70 mb-3">{profile.turning}</p>
                  
                  <p className="text-green-400/80 text-sm mb-1 font-medium">AFTER:</p>
                  <p className="text-green-400/90 font-medium mb-4">{profile.after}</p>
                </div>
                
                <div className="bg-midnight/50 p-3 rounded-lg mb-4">
                  <p className="italic text-white/90">"{profile.quote}"</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {profile.icons.map((icon, i) => (
                    <span key={i} className="bg-gold/10 text-gold/90 text-xs py-1 px-2 rounded">
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA + Slots */}
        <div className="mt-16 bg-gold/5 rounded-lg border border-gold/30 py-8 px-6 max-w-xl mx-auto text-center shadow">
          <div className="text-gold font-bold text-2xl mb-2 flex items-center gap-2 justify-center">
            <BookOpen className="w-7 h-7" /> Only 10 Coaching Slots Per Month
          </div>
          <p className="mb-4 text-white/80">Every spot includes a private onboarding call and instant access to the coaching Discord.</p>
          <Button asChild className="bg-gradient-gold text-jet font-semibold px-8 py-4 mt-4 hover:scale-105 transition text-lg rounded-lg">
            <a href="/apply">Apply for Elite Coaching</a>
          </Button>
          <div className="text-white/50 text-xs mt-2">Spots fill up quickly. Reserve yours early.</div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default CoachingPage;
