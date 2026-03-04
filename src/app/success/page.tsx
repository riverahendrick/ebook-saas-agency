"use client";

import { motion } from "framer-motion";
import { Download, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4 sm:p-8 font-sans overflow-hidden relative">
      {/* Background gradients for premium dark mode */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full opacity-50 mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full opacity-40 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl bg-black/40 border border-white/10 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-3xl shadow-2xl overflow-hidden"
      >
        {/* Subtle inner top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-10"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500 pb-2 leading-tight">
            Congratulations on securing The Zero-Cost Agency Blueprint.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-10"
        >
          <a
            href="/The_Zero_Cost_Agency.pdf"
            download
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Glowing effect behind button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
            
            <div className="relative z-10 flex items-center justify-center gap-3 bg-white text-black font-semibold text-lg w-full px-10 py-5 rounded-xl">
              <Download className="w-6 h-6" />
              <span>Download Blueprint</span>
            </div>
          </a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full text-left"
          >
            <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                  LEGAL NOTICE: This document is digitally watermarked and licensed exclusively to the original purchaser. Unauthorized distribution, resale, or sharing of this copyrighted material is strictly prohibited and will be met with immediate legal action under the DMCA.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
