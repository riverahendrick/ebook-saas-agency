"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { BookOpen, CheckCircle, Star, Zap, TrendingUp, Users, ArrowRight, ShieldCheck } from "lucide-react";

// Fade in up animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[60%] h-[40%] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      {/* Sticky Buy Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-4 font-bold text-white shadow-[0_0_40px_-10px_rgba(99,102,241,0.8)] transition-all hover:bg-indigo-400 hover:shadow-[0_0_60px_-15px_rgba(99,102,241,1)]"
          onClick={() => alert("Redirecting to Stripe...")}
        >
          <span>Buy Now for $9</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-8">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-md">
            <Zap className="h-4 w-4" />
            <span>The ultimate playbook for scaling</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400">
              The Zero-Cost Agency
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 pb-2">
              Automating B2B Lead Gen with AI
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 mb-12 leading-relaxed">
            Stop paying for expensive ads and agencies. Learn the exact AI-driven systems to generate qualified B2B leads on autopilot without spending a dime on acquisition.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-neutral-950 font-bold text-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              onClick={() => {
                document.getElementById('buy-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Instant Access
              <BookOpen className="h-5 w-5" />
            </button>
            <p className="text-sm text-neutral-500 flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" /> Secure checkout via Stripe
            </p>
          </motion.div>
        </motion.section>

        {/* Social Proof */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-32 pt-16 border-t border-white/10 text-center"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-8">
            Trusted by 2,000+ Founders & Agencies
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
            <div className="text-xl font-bold flex items-center gap-2"><TrendingUp/> ACME Corp</div>
            <div className="text-xl font-bold flex items-center gap-2"><Users/> TechFlow</div>
            <div className="text-xl font-bold flex items-center gap-2"><Zap/> BoltScale</div>
            <div className="text-xl font-bold flex items-center gap-2"><Star/> NovaLead</div>
          </motion.div>
        </motion.section>

        {/* What You Will Learn */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-40"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">What's Inside The Playbook?</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">A step-by-step breakdown of the exact frameworks used to book 50+ qualified meetings per month using free AI tools.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Scraping",
                description: "Extract highly-targeted leads from LinkedIn and Google Maps using open-source tools.",
                icon: <Zap className="h-6 w-6 text-indigo-400" />
              },
              {
                title: "Hyper-Personalization at Scale",
                description: "Use LLMs to craft unique cold emails that actually get replies, automated via n8n/Make.",
                icon: <BookOpen className="h-6 w-6 text-purple-400" />
              },
              {
                title: "Infrastructure Setup",
                description: "Configure domains, DNS records (SPF, DKIM, DMARC), and warm-up systems to guarantee 99% deliverability.",
                icon: <CheckCircle className="h-6 w-6 text-blue-400" />
              },
              {
                title: "The Multi-Channel Sequence",
                description: "Omnichannel strategies combining email, LinkedIn, and Twitter to stay top-of-mind.",
                icon: <TrendingUp className="h-6 w-6 text-indigo-400" />
              },
              {
                title: "Automated Follow-ups",
                description: "Set up triggers to automatically follow up with prospects who clicked but didn't book.",
                icon: <Users className="h-6 w-6 text-purple-400" />
              },
              {
                title: "Objection Handling Prompts",
                description: "Copy-paste ChatGPT prompts to instantly draft responses to common sales objections.",
                icon: <ShieldCheck className="h-6 w-6 text-blue-400" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group"
              >
                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-40"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Real Results</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Don't just take our word for it.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Jenkins",
                role: "Founder, GrowthLabs",
                content: "I implemented chapter 3 over the weekend. By Tuesday, I had 4 qualified meetings booked with zero ad spend. The AI personalization frameworks are insane.",
              },
              {
                name: "David Chen",
                role: "B2B Consultant",
                content: "Best $9 I've ever spent. The cold email infrastructure guide alone saved me hours of headaches and prevented my domains from getting burned.",
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative"
              >
                <div className="flex gap-1 mb-6 text-indigo-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-lg text-neutral-300 mb-8 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-300 border border-indigo-500/30">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section 
          id="buy-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-40 text-center relative"
        >
          <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full z-0" />
          <motion.div variants={fadeInUp} className="relative z-10 p-12 sm:p-20 rounded-3xl border border-indigo-500/20 bg-neutral-900/50 backdrop-blur-xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to scale your agency?</h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-xl mx-auto">Get immediate access to the 100+ page playbook, templates, and automation workflows.</p>
            <div className="flex flex-col items-center gap-4">
              <button 
                className="px-10 py-5 rounded-full bg-white text-neutral-950 font-extrabold text-xl hover:bg-neutral-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95"
                onClick={() => alert("Redirecting to Stripe...")}
              >
                Get The eBook for $9
              </button>
              <p className="text-neutral-500 flex items-center gap-2 mt-4">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Instant PDF & Notion Template Access
              </p>
            </div>
          </motion.div>
        </motion.section>
        
        {/* Footer */}
        <footer className="mt-40 border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} The Zero-Cost Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
