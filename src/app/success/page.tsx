"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download, Home, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-200 font-sans flex items-center justify-center p-4 selection:bg-green-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[70%] h-[70%] bg-green-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl bg-black/60 border border-white/10 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-2xl shadow-[0_0_80px_rgba(34,197,94,0.1)] overflow-hidden"
      >
        {/* Glow effect inside card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="mx-auto w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/5 rounded-full flex items-center justify-center mb-8 border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.2)]"
        >
          <CheckCircle2 className="w-12 h-12 text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tighter drop-shadow-sm">
          Payment Successful!
        </h1>
        
        <p className="text-neutral-400 text-lg mb-10 leading-relaxed font-medium">
          Welcome to the club. You're one step closer to building a 6-figure agency with zero overhead. Your technical blueprint is ready.
        </p>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-8 text-left flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1">The Zero-Cost Agency V2.0</h3>
            <p className="text-sm text-neutral-400 mb-3">184 Pages • Full Code Templates • Private Discord</p>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
              />
            </div>
            {mounted && (
              <p className="text-xs text-green-400 mt-2 font-mono flex items-center gap-1 opacity-80">
                <CheckCircle2 className="w-3 h-3" /> Ready for download
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="/The_Zero_Cost_Agency.pdf"
            download
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Full Access
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-neutral-400 hover:text-white transition-colors font-medium rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
