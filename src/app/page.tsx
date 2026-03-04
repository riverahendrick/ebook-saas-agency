"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star, Terminal, Bot, CreditCard, ChevronRight, Zap, ArrowRight } from "lucide-react";

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
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
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
        <section className="w-full max-w-7xl mx-auto pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
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
              Build a 6-Figure Agency <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                With Zero Overhead.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-xl">
              Stop paying for expensive SaaS tools. Learn how to deploy AI agents, automate client acquisition with Playwright, and collect payments via Stripe—all using open-source and free-tier infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleCheckout}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Buy the eBook - $49</span>
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

          {/* 3D Glowing eBook Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative perspective-1000 mx-auto w-full max-w-[400px]"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.15)] overflow-hidden group transform-gpu transition-all duration-700 hover:rotate-y-[-10deg] hover:rotate-x-[5deg]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Cover Design */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <Zap className="w-8 h-8 text-purple-400" />
                  <span className="text-xs font-mono text-neutral-500">O'REILLY STYLE</span>
                </div>
                <div>
                  <h2 className="text-4xl font-black text-white leading-none tracking-tighter mb-4">
                    The Zero-Cost<br/>Agency
                  </h2>
                  <p className="text-sm font-mono text-purple-300">AUTOMATE EVERYTHING. PAY NOTHING.</p>
                </div>
                <div className="pt-8 border-t border-white/10 flex justify-between items-end">
                  <span className="font-mono text-xs text-neutral-400">AUTHOR: H. RIVERA</span>
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Binding edge */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/60 to-transparent z-20"></div>
            </div>
          </motion.div>
        </section>

        {/* WHAT YOU WILL LEARN */}
        <section className="w-full max-w-7xl mx-auto py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Master the Stack of the Future</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              This isn't theory. It's a technical blueprint for building a cash-flowing machine using pure code and AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <Terminal className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Playwright Scraping</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Build headless crawlers to extract B2B leads from LinkedIn, Google Maps, and directories. Bypass rate limits and automate initial outreach at zero cost.
              </p>
              <ul className="space-y-2">
                {['Headless architecture', 'Proxy rotation strategies', 'DOM parsing techniques'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px]"></div>
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                <Bot className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous AI Agents</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Deploy local and cloud LLMs to process leads, generate personalized cold emails, and handle customer support logic entirely on autopilot.
              </p>
              <ul className="space-y-2">
                {['OpenClaw / MCP Integration', 'RAG for client data', 'Self-healing prompts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 border border-green-500/20">
                <CreditCard className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Stripe Integration</h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Set up frictionless checkout flows, handle webhooks, and manage subscriptions seamlessly without needing heavy backend frameworks.
              </p>
              <ul className="space-y-2">
                {['Checkout Sessions API', 'Webhook security', 'Automated fulfillment'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full max-w-7xl mx-auto py-24 border-t border-white/5">
          <h2 className="text-3xl font-bold text-center text-white mb-16">What early readers are saying</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Alex K.", role: "Solo Founder", text: "I fired my $2k/mo lead gen agency after reading chapter 3. The Playwright scripts alone are worth $500." },
              { name: "Sarah J.", role: "SaaS Dev", text: "Finally, a guide that doesn't just say 'use AI' but actually shows the raw code to wire up agents to Stripe webhooks." },
              { name: "Marcus T.", role: "Agency Owner", text: "We rebuilt our entire backend operations using the open-source stack recommended here. Margins went from 40% to 92%." }
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col justify-between">
                <p className="text-neutral-300 mb-6 font-medium">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">{t.name}</h4>
                    <span className="text-neutral-500 text-xs">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0a0a0c]/80 backdrop-blur-xl border-t border-white/10 transform translate-y-0 transition-transform">
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
    </div>
  );
}
