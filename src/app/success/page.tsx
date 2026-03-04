"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download, Home } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-200 font-sans flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-green-900/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-lg bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl"
      >
        <div className="mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20">
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Payment Successful!
        </h1>
        
        <p className="text-neutral-400 text-lg mb-10">
          Thank you for your purchase. You're one step closer to building a 6-figure agency with zero overhead.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="/The_Zero_Cost_Agency.pdf"
            download
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download eBook
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-neutral-400 hover:text-white transition-colors font-medium"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}