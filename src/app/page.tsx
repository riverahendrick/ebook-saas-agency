"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Terminal, Bot, CreditCard, ChevronRight, Zap, ArrowRight, Code, 
  Server, Cloud, Shield, Mail, Database, Users, Globe, MessageSquare, Plus, Minus
} from "lucide-react";
import { useState, useEffect } from "react";

const Marquee = () => {
  const logos = [
    { name: 'Stripe', url: 'https://cdn.simpleicons.org/stripe/white' },
    { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/white' },
    { name: 'Playwright', url: 'https://cdn.simpleicons.org/playwright/white' },
    { name: 'Vercel', url: 'https://cdn.simpleicons.org/vercel/white' },
    { name: 'OpenAI', url: 'https://cdn.simpleicons.org/openai/white' },
    { name: 'Framer', url: 'https://cdn.simpleicons.org/framer/white' },
    { name: 'Tailwind', url: 'https://cdn.simpleicons.org/tailwindcss/white' },
    { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/white' },
    { name: 'Supabase', url: 'https://cdn.simpleicons.org/supabase/white' },
    { name: 'Resend', url: 'https://cdn.simpleicons.org/resend/white' }
  ];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-white/[0.02] border-y border-white/5 py-10 mt-20 mb-16 relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none"></div>
      <div className="flex gap-20 whitespace-nowrap animate-marquee items-center opacity-50">
        {duplicatedLogos.map((logo, i) => (
          <div key={i} className="flex items-center gap-3 mix-blend-screen opacity-70 hover:opacity-100 transition-opacity">
            <img src={logo.url} alt={logo.name} className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold font-mono tracking-widest text-neutral-400">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TerminalTyping = () => {
  const [text, setText] = useState('');
  const codeString = `> Initializing Playwright stealth mode...\n> Bypassing Cloudflare... [OK]\n> Scraping LinkedIn prospects... 124 leads found.\n> Generating personalized outreach with Gemini-3.1-Pro...\n> Dispatching via Resend API... [OK]\n> Invoice paid via Stripe Webhook.\n> Revenue: +$2,500.00`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(codeString.slice(0, i));
      i++;
      if (i > codeString.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050505] rounded-2xl border border-white/10 p-6 font-mono text-sm shadow-2xl backdrop-blur-md relative overflow-hidden h-[260px] w-full mt-4 group-hover:border-purple-500/30 transition-colors duration-500">
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        <span className="text-neutral-500 text-xs ml-2 tracking-wider">bash ~ /revenue-engine</span>
      </div>
      <pre className="text-emerald-400 whitespace-pre-wrap font-mono leading-relaxed text-xs sm:text-sm">
        {text}
        <span className="animate-pulse inline-block w-2 h-4 bg-emerald-400 ml-1 translate-y-1"></span>
      </pre>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

const FAQItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 overflow-hidden last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">{q}</span>
        <div className={`p-2 rounded-full border border-white/10 transition-colors ${isOpen ? 'bg-purple-500/10 border-purple-500/30' : 'bg-white/5 group-hover:bg-white/10'}`}>
          {isOpen ? <Minus className="w-4 h-4 text-purple-400 shrink-0" /> : <Plus className="w-4 h-4 text-neutral-400 shrink-0" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 text-neutral-400 leading-relaxed pr-8 text-lg">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhyItWorks = () => {
  const features = [
    {
      icon: <Bot className="w-7 h-7 text-purple-400" />,
      title: "Commoditized Intelligence",
      desc: "With models like Gemini 3.1 Pro available via API with massive free tiers, generating hyper-personalized outreach at scale now costs fractions of a penny."
    },
    {
      icon: <Server className="w-7 h-7 text-emerald-400" />,
      title: "Serverless Dominance",
      desc: "Edge computing via Vercel and Cloudflare means your automated scripts and webhooks run globally with zero maintenance and zero upfront server costs."
    },
    {
      icon: <Code className="w-7 h-7 text-blue-400" />,
      title: "Open-Source Orchestration",
      desc: "Instead of paying thousands for Zapier or Make, we deploy pure code. Next.js API routes orchestrate your entire business logic for absolutely free."
    }
  ];

  return (
    <section className="py-32 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Why This Paradigm Wins in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">2026</span>
        </h2>
        <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          The era of stacking $200/mo SaaS subscriptions is dead. Welcome to the era of autonomous, self-hosted, scalable agency infrastructure.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.2)] group"
          >
            <div className="w-16 h-16 bg-[#0a0a0c] rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-neutral-400 leading-relaxed text-lg">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "Is this for absolute beginners?",
      a: "While basic coding knowledge (HTML/JS) helps, the guide provides full copy-paste code templates and step-by-step deployment instructions. It's designed so that a junior developer can build a senior-level architecture."
    },
    {
      q: "Do I really not have to pay for any software?",
      a: "Yes. The entire thesis of this book is leveraging generous developer free-tiers (Vercel, Supabase, Resend, Cloudflare) and open-source models/tools to run your agency with $0 monthly overhead until you scale massively."
    },
    {
      q: "How long does it take to set up?",
      a: "If you follow the templates, you can have your entire automated pipeline (scraping, AI outreach, checkout, fulfillment) deployed over a single weekend."
    },
    {
      q: "Is web scraping legal and compliant?",
      a: "We teach ethical B2B scraping focusing on publicly available data, adhering to standard compliance guidelines. We also cover how to build respectful, low-volume, high-converting outreach sequences."
    },
    {
      q: "What if the free tiers change in 2026?",
      a: "We continuously update the repository and eBook. The strategies focus on open-source first—if a platform changes its pricing, we swap it for a better alternative."
    },
    {
      q: "Do you offer a refund?",
      a: "Yes, we offer a 14-day no-questions-asked refund policy if you find the technical strategies aren't a fit for your skillset."
    }
  ];

  return (
    <section className="py-32 w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
        <p className="text-xl text-neutral-400">Everything you need to know about the system.</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2 }}
        className="bg-[#0a0a0c]/80 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const CurriculumSection = () => {
  const modules = [
    {
      title: "Module 01: The Zero-Cost Infrastructure",
      lessons: [
        "Deploying Next.js on Vercel for free edge computing",
        "Setting up serverless PostgreSQL with Supabase",
        "Configuring custom domains and SSL at zero cost"
      ]
    },
    {
      title: "Module 02: Stealth Scraping with Playwright",
      lessons: [
        "Setting up Playwright stealth mode to mimic human behavior",
        "Bypassing Cloudflare, DataDome, and advanced bot protections",
        "Extracting B2B SaaS Lead Gen data from LinkedIn & Apollo without API keys"
      ]
    },
    {
      title: "Module 03: Autonomous AI Agents",
      lessons: [
        "Integrating Gemini-3.1-Pro via API for hyper-personalized outreach",
        "Building multi-agent workflows to qualify leads autonomously",
        "Structuring prompts for high-converting cold email copy"
      ]
    },
    {
      title: "Module 04: The Revenue Engine",
      lessons: [
        "Routing Stripe webhooks to automate SaaS subscription provisioning",
        "Using Resend and Amazon SES for massive-scale zero-cost cold email",
        "Building client dashboards with zero additional subscriptions"
      ]
    }
  ];

  return (
    <section className="py-32 w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">The Technical Syllabus</h2>
        <p className="text-xl text-neutral-400">Exactly what you will build across 20 dense, fluff-free pages.</p>
      </motion.div>
      <div className="space-y-8">
        {modules.map((mod, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#0a0a0c]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full group-hover:bg-purple-500/10 transition-colors pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
              <span className="text-purple-400 font-mono text-lg">{mod.title.split(':')[0]}</span>
              <span>{mod.title.split(':')[1]}</span>
            </h3>
            <ul className="space-y-4">
              {mod.lessons.map((lesson, j) => (
                <li key={j} className="flex items-start gap-4 text-neutral-300 text-lg leading-relaxed">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0"></div>
                  {lesson}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SEOArticleSection = () => {
  return (
    <section className="py-24 w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10 border-t border-white/5">
      <article className="prose prose-invert prose-lg md:prose-xl max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Traditional Lead Gen is Dead</h2>
        <p className="text-neutral-400 leading-relaxed mb-6">
          The landscape of <strong>B2B SaaS Lead Gen</strong> has fundamentally shifted. Paying exorbitant monthly fees for bloated CRM systems, manual data entry, and generic outreach sequences is no longer viable. In 2026, the competitive advantage belongs entirely to those who leverage <strong>Automation</strong> and intelligent workflows.
        </p>
        <p className="text-neutral-400 leading-relaxed mb-6">
          We are witnessing the rise of autonomous <strong>AI Agents</strong> capable of executing complex pipeline tasks—from stealth data scraping to hyper-personalized cold email orchestration—at zero marginal cost. By deploying open-source infrastructure and headless browsers, modern agencies are bypassing rate limits and building self-sustaining revenue engines. 
        </p>
        <p className="text-neutral-400 leading-relaxed">
          If you are still relying on traditional methods, you are competing against automated systems that never sleep, never require a salary, and operate with surgical precision. It is time to upgrade your tech stack, orchestrate your own AI workforce, and reclaim your margins. Ready to build the future of automated acquisition? <a href="#checkout" className="text-purple-400 hover:text-purple-300 underline underline-offset-4 decoration-purple-500/50 transition-colors">Get instant access to the blueprint and start scaling today.</a>
        </p>
      </article>
    </section>
  );
};

const Footer = () => (
  <footer className="w-full border-t border-white/10 bg-[#050505] pt-24 pb-12 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-8 h-8 text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <span className="text-2xl font-bold tracking-tighter text-white">ZeroCost<span className="text-purple-500">.</span></span>
          </div>
          <p className="text-neutral-400 text-lg max-w-sm leading-relaxed mb-8">
            The definitive technical guide to building, scaling, and automating a high-margin AI agency without the bloat of traditional SaaS subscriptions.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 text-neutral-400 transition-all border border-white/10 hover:border-purple-500/50"><Globe className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 hover:text-purple-400 text-neutral-400 transition-all border border-white/10 hover:border-purple-500/50"><MessageSquare className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="md:col-span-2 md:col-start-7">
          <h4 className="text-white font-bold mb-6 text-lg">Resources</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors">Documentation</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors">Code Templates</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors">Discord Community</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors">Changelog</a></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors">Refund Policy</a></li>
            <li><a href="#" className="text-neutral-400 hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} ZeroCost Agency. All rights reserved.</p>
        <div className="flex items-center gap-4 text-neutral-500 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Systems Operational
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsCheckoutLoading(true);
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned", data);
        setIsCheckoutLoading(false);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setIsCheckoutLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-200 font-sans selection:bg-purple-500/30 overflow-x-hidden">
      {/* Deep Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/15 blur-[160px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-emerald-900/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <span className="text-xl font-bold tracking-tighter text-white">ZeroCost<span className="text-purple-500">.</span></span>
        </div>
        <button 
          onClick={handleCheckout}
          disabled={isCheckoutLoading}
          className="px-6 py-2.5 text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 border border-purple-400/50 rounded-full transition-all duration-300 backdrop-blur-md flex items-center gap-2 disabled:opacity-50 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        >
          {isCheckoutLoading ? (
             <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : null}
          Get Instant Access
        </button>
      </nav>

      <main className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section id="checkout" className="w-full max-w-7xl mx-auto pt-20 pb-16 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 relative z-20"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 w-fit backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(192,132,252,0.8)]"></span>
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">V2.0 Fully Updated for 2026</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black tracking-tighter text-white leading-[1.05]">
              Build a 6-Figure AI Agency <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 pb-2 inline-block">
                With Zero Overhead.
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-neutral-400 leading-relaxed max-w-2xl font-normal">
              Stop paying for expensive SaaS tools. Learn how to deploy AI agents, automate B2B client acquisition with Playwright, and collect payments via Stripe—all using open-source infrastructure.
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 pt-6 items-start sm:items-center">
              <div className="relative w-full sm:w-auto">
                <div className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg border border-red-400 rotate-12 z-20 whitespace-nowrap">Limited Time Offer</div>
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckoutLoading}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-black text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] disabled:opacity-70 disabled:hover:scale-100 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isCheckoutLoading && <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>}
                    Download eBook - <span className="line-through text-neutral-500 mr-1">$99</span>$49
                  </span>
                  <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
              
              {/* Trust Signal */}
              <div className="flex items-center gap-4 px-2">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#0a0a0c] bg-neutral-800 flex items-center justify-center overflow-hidden shadow-lg`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />)}
                  </div>
                  <span className="text-sm text-neutral-300 font-bold tracking-wide">Join 2,400+ founders</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Holographic eBook Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="relative perspective-1000 mx-auto w-full max-w-[450px] mt-12 lg:mt-0"
          >
            <motion.div 
              animate={{ y: [0, -20, 0], rotateY: [0, 5, -5, 0], rotateX: [0, 2, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-[3/4] rounded-2xl bg-[#030303] border border-white/20 shadow-[0_0_100px_rgba(168,85,247,0.3)] overflow-hidden group transform-gpu transition-all duration-700 hover:rotate-y-[-15deg] hover:rotate-x-[10deg] cursor-pointer"
            >
              
              {/* Holographic foil overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-blue-500/20 to-emerald-500/40 opacity-70 mix-blend-color-dodge group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"></div>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[length:100%_4px] opacity-30 z-20 pointer-events-none"></div>

              {/* Cover Design */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 bg-gradient-to-b from-neutral-900/90 to-black">
                <div className="flex justify-between items-start">
                  <Zap className="w-10 h-10 text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                  <span className="text-xs font-mono font-bold text-white border border-white/20 px-3 py-1.5 rounded bg-white/5 backdrop-blur-md">PRO EDITION</span>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full z-0"></div>
                  <h3 className="relative z-10 text-[2.75rem] font-black text-white leading-[1.1] tracking-tighter mb-4 drop-shadow-2xl">
                    The Zero-Cost<br/>Agency
                  </h3>
                  <p className="relative z-10 text-sm font-mono font-bold tracking-widest text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">AUTOMATE EVERYTHING. PAY NOTHING.</p>
                </div>
                <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-widest">AUTHOR: H. RIVERA</span>
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bg-white/20 transition-colors">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Binding edge */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/90 via-white/10 to-transparent z-40 shadow-[4px_0_15px_rgba(0,0,0,0.8)] border-r border-white/5"></div>
            </motion.div>
            
            {/* Glowing shadow base */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-purple-600/40 blur-[50px] rounded-full mix-blend-screen"></div>
          </motion.div>
        </section>

        <Marquee />

        <WhyItWorks />

        {/* BENTO BOX ARCHITECTURE SECTION */}
        <section className="w-full max-w-7xl mx-auto py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Master the Open-Source Tech Stack</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              This isn&apos;t theory. It&apos;s a technical blueprint for building a cash-flowing machine using pure code, AI agents, and free-tier scaling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
            {/* Row 1: Large Terminal & AI Agents */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-[#0a0a0c]/80 border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group backdrop-blur-xl hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Code className="w-6 h-6 text-purple-400" /> Autonomous Lead Generation
                </h3>
                <p className="text-neutral-400 mb-6 text-lg">Deploy headless browsers to extract highly-qualified leads on autopilot.</p>
                <div className="mt-auto">
                  <TerminalTyping />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 bg-gradient-to-br from-blue-900/10 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-500">
                <Bot className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Agent Teams</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Deploy local and cloud LLMs to process leads, generate personalized cold emails, and handle customer support 24/7.
              </p>
            </motion.div>

            {/* Row 2: Playwright & Stripe */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1 bg-gradient-to-br from-emerald-900/10 to-transparent border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:scale-110 transition-transform duration-500">
                <Cloud className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Playwright Scraping</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Build robust headless crawlers to extract B2B leads. Bypass rate limits and CAPTCHAs at zero operational cost.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-[#0a0a0c]/80 border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group backdrop-blur-xl flex flex-col justify-center hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[100px] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20 shadow-lg">
                    <CreditCard className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="w-14 h-14 bg-zinc-500/10 rounded-2xl flex items-center justify-center border border-zinc-500/20 shadow-lg">
                    <Server className="w-7 h-7 text-zinc-400" />
                  </div>
                  <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20 shadow-lg">
                    <Shield className="w-7 h-7 text-red-400" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Stripe & Auth Integration</h3>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
                  Set up frictionless checkout flows, handle webhooks securely, and manage SaaS subscriptions seamlessly with Next.js App Router and edge deployments.
                </p>
              </div>
            </motion.div>

            {/* Row 3: The 3 Missing Premium Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-8 border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.15)] group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Zero-Cost Cold Email</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Bypass expensive CRM subscriptions. Leverage Resend and Amazon SES to send 10,000+ personalized emails for mere pennies.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:scale-110 transition-transform duration-500">
                <Database className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Serverless Edge DB</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Deploy PostgreSQL globally with Supabase. Manage client data, leads, and analytics entirely on their generous free tier.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-8 border border-teal-500/20 shadow-[0_0_30px_rgba(20,184,166,0.15)] group-hover:scale-110 transition-transform duration-500">
                <Users className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Onboarding</h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Trigger secure API routes on Stripe success to automatically provision dashboards and dispatch client welcome sequences.
              </p>
            </motion.div>
          </div>
        </section>

        <CurriculumSection />

        <FAQSection />

        <SEOArticleSection />

      </main>

      <Footer />

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#0a0a0c]/80 backdrop-blur-2xl border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-6">
            <div className="w-12 h-16 bg-neutral-900 rounded border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
               <Zap className="w-6 h-6 text-purple-400 relative z-10" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">The Zero-Cost Agency</h3>
              <p className="text-sm text-emerald-400 font-medium tracking-wide">Instant PDF Access + Pro Code Templates</p>
            </div>
          </div>
          <div className="relative w-full sm:w-auto">
            <div className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-lg border border-red-400 rotate-12 z-20 whitespace-nowrap">Limited Time Offer</div>
            <button 
              onClick={handleCheckout}
              disabled={isCheckoutLoading}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-black text-lg rounded-xl hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(251,191,36,0.3)] disabled:opacity-50 hover:shadow-[0_0_50px_rgba(251,191,36,0.5)]"
            >
              {isCheckoutLoading ? (
                <span className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></span>
              ) : null}
              Buy Now for <span className="line-through text-neutral-500 mr-1">$99</span>$49
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Spacer for sticky footer */}
      <div className="h-32"></div>
      
      {/* Global css addition for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
      `}} />
    </div>
  );
}