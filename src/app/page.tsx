"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, ArrowRight, BookOpen, Shield, TrendingUp } from "lucide-react";

export default function LandingPage() {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-8">
              <Zap className="w-4 h-4 mr-2" /> Outsmart Your Competition
            </span>
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-50 sm:text-7xl">
              The Zero-Cost Agency:
              <span className="block text-indigo-400 mt-2">Automating B2B Lead Gen with AI</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl tracking-tight text-slate-300">
              Stop paying thousands for unreliable leads. Learn the exact, step-by-step AI automation systems to build an unstoppable B2B lead generation machine—all on autopilot.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <motion.button
                onClick={handleCheckout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-lg font-bold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)]"
              >
                Buy Now - $9
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            <p className="mt-4 text-sm text-slate-400 font-medium">Secure checkout via Stripe • Instant lifetime access</p>
          </motion.div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 sm:py-24 bg-slate-900/50 relative border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">What's Inside The Blueprint</h2>
            <p className="mt-4 text-lg text-slate-400">Everything you need to set up your automated agency from scratch.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Outreach Scripts",
                description: "Copy-paste prompts to generate hyper-personalized emails that actually get replies.",
                icon: BookOpen,
              },
              {
                title: "Scraping Secrets",
                description: "Find thousands of verified decision-maker emails without paying for expensive SaaS tools.",
                icon: Shield,
              },
              {
                title: "Automated Workflows",
                description: "Connect Zapier, Make, and OpenAI to run your entire lead gen system while you sleep.",
                icon: Zap,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col gap-6 rounded-3xl bg-slate-900 p-8 ring-1 ring-white/10 shadow-xl hover:ring-indigo-500/30 transition-all hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-white/10">
                  <feature.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-50">{feature.title}</h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to scale your agency?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
            Join hundreds of founders who have completely automated their client acquisition. Price increases soon.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6">
            <motion.button
              onClick={handleCheckout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center rounded-full bg-white px-10 py-5 text-xl font-bold text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Get Instant Access - $9
              <TrendingUp className="ml-3 h-6 w-6 text-indigo-600 group-hover:scale-110 transition-transform" />
            </motion.button>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
              <CheckCircle className="h-5 w-5 text-emerald-400" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
