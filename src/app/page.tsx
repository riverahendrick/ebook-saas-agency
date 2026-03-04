"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Terminal, Bot, CreditCard, ChevronRight, Zap, ArrowRight, Code, Server, Cloud, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const Marquee = () => (
  <div className="w-full overflow-hidden bg-white/[0.02] border-y border-white/5 py-8 mt-16 mb-24">
    <div className="flex gap-16 whitespace-nowrap animate-marquee items-center opacity-50">
      {['Stripe', 'Next.js', 'Playwright', 'Vercel', 'OpenAI', 'Framer Motion', 'Tailwind', 'PostgreSQL', 'Stripe', 'Next.js', 'Playwright', 'Vercel', 'OpenAI', 'Framer Motion', 'Tailwind', 'PostgreSQL'].map((logo, i) => (
        <span key={i} className="text-xl font-bold font-mono tracking-wider text-neutral-400 mix-blend-screen">{logo}</span>
      ))}
    </div>
  </div>
);

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
    <div className="bg-black/80 rounded-2xl border border-white/10 p-6 font-mono text-sm shadow-2xl backdrop-blur-md relative overflow-hidden h-[240px]">
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-neutral-500 text-xs ml-2">bash ~ /revenue-engine</span>
      </div>
      <pre className="text-green-400 whitespace-pre-wrap font-mono">
        {text}
        <span className="animate-pulse">_</span>
      </pre>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default function LandingPage() {
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned", data);
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-200 font-sans selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-500" />
          <span className="text-xl font-bold tracking-tighter text-white">ZeroCost<span className="text-purple-500">.</span></span>
        </div>
        <button 
          onClick={handleCheckout}
          className="px-5 py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 backdrop-blur-md"
        >
          Get Instant Access
        </button>
      </nav>

      <main className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto pt-20 pb-16 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">V2.0 Fully Updated for 2026</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Build a 6-Figure AI Agency <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                With Zero Overhead.
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-xl font-normal">
              Stop paying for expensive SaaS tools. Learn how to deploy AI agents, automate B2B client acquisition with Playwright, and collect payments via Stripe—all using open-source infrastructure.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleCheckout}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Download eBook - $49</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <div className="flex items-center gap-4 px-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0a0a0c] bg-neutral-800 flex items-center justify-center overflow-hidden`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <span className="text-sm text-neutral-400 font-medium">Join 2,400+ founders</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Holographic eBook Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative perspective-1000 mx-auto w-full max-w-[400px]"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl bg-black border border-white/20 shadow-[0_0_80px_rgba(168,85,247,0.3)] overflow-hidden group transform-gpu transition-all duration-700 hover:rotate-y-[-15deg] hover:rotate-x-[10deg] cursor-pointer">
              
              {/* Holographic foil overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-transparent to-emerald-500/30 opacity-60 mix-blend-color-dodge group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"></div>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 z-20 pointer-events-none"></div>

              {/* Cover Design */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-gradient-to-b from-neutral-900 to-black">
                <div className="flex justify-between items-start">
                  <Zap className="w-8 h-8 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                  <span className="text-xs font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded">PRO EDITION</span>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white leading-none tracking-tighter mb-4 drop-shadow-md">
                    The Zero-Cost<br/>Agency
                  </h3>
                  <p className="text-sm font-mono text-purple-300 drop-shadow-[0_0_5px_rgba(216,180,254,0.5)]">AUTOMATE EVERYTHING. PAY NOTHING.</p>
                </div>
                <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                  <span className="font-mono text-xs text-neutral-400">AUTHOR: H. RIVERA</span>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Binding edge */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/80 via-white/5 to-transparent z-40 shadow-[2px_0_10px_rgba(0,0,0,0.5)]"></div>
            </div>
            
            {/* Glowing shadow base */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-purple-600/30 blur-[40px] rounded-full"></div>
          </motion.div>
        </section>

        <Marquee />

        {/* BENTO BOX ARCHITECTURE SECTION */}
        <section className="w-full max-w-7xl mx-auto py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Master the Open-Source Tech Stack</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              This isn't theory. It's a technical blueprint for building a cash-flowing machine using pure code, AI agents, and free-tier scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[250px]">
            {/* Bento 1: Large - Terminal */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-1 bg-white/[0.02] border border-white/10 rounded-3xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700"></div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" /> Autonomous Lead Generation
              </h3>
              <TerminalTyping />
            </motion.div>

            {/* Bento 2: Small - AI Agents */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Agent Teams</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Deploy local and cloud LLMs to process leads, generate personalized cold emails, and handle customer support.
              </p>
            </motion.div>

            {/* Bento 3: Small - Scraping */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-1 md:row-span-1 bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 border border-green-500/20">
                <Cloud className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Playwright Scraping</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Build headless crawlers to extract B2B leads from LinkedIn and Google Maps. Bypass rate limits at zero cost.
              </p>
            </motion.div>

            {/* Bento 4: Wide - Infrastructure */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-1 bg-white/[0.02] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px]"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                  <CreditCard className="w-6 h-6 text-orange-400" />
                </div>
                <div className="w-12 h-12 bg-zinc-500/10 rounded-2xl flex items-center justify-center border border-zinc-500/20">
                  <Server className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/20">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Stripe & Auth Integration</h3>
              <p className="text-neutral-400 leading-relaxed max-w-xl relative z-10">
                Set up frictionless checkout flows, handle webhooks, and manage subscriptions seamlessly with Next.js App Router and edge deployments.
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0a0a0c]/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden sm:block">
            <h3 className="text-white font-bold">The Zero-Cost Agency</h3>
            <p className="text-sm text-neutral-400">Instant PDF Access + Code Templates</p>
          </div>
          <button 
            onClick={handleCheckout}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Buy Now for $49
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Spacer for sticky footer */}
      <div className="h-24"></div>
      
      {/* Global css addition for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: fit-content;
        }
      `}} />
    </div>
  );
}
