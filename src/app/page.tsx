"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [price, setPrice] = useState(49);
  const [sales, setSales] = useState(5);
  const [monthlyRev, setMonthlyRev] = useState(7350);
  const [yearlyRev, setYearlyRev] = useState(88200);

  useEffect(() => {
    const m = price * sales * 30;
    const y = m * 12;
    setMonthlyRev(m);
    setYearlyRev(y);
  }, [price, sales]);

  return (
    <div className="antialiased selection:bg-brand selection:text-black min-h-screen relative">
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #050505; color: #FFFFFF; overflow-x: hidden; scroll-behavior: smooth; }
        .glass-nav { background: rgba(5, 5, 5, 0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        .glass-card { background: rgba(26, 26, 26, 0.4); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); }
        .glass-panel { background: linear-gradient(145deg, rgba(26, 26, 26, 0.8) 0%, rgba(17, 17, 17, 0.9) 100%); border: 1px solid rgba(255, 255, 255, 0.05); }
        .text-gradient { background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #10B981 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-gradient-alt { background: linear-gradient(135deg, #10B981 0%, #34D399 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .glow-btn { box-shadow: 0 0 25px rgba(245, 158, 11, 0.4); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
        .glow-btn::after { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(transparent, rgba(255,255,255,0.3), transparent); transform: rotate(45deg); transition: 0.5s; opacity: 0; }
        .glow-btn:hover { box-shadow: 0 0 40px rgba(245, 158, 11, 0.6); transform: translateY(-3px) scale(1.02); }
        .glow-btn:hover::after { opacity: 1; left: 100%; }
        .btn-secondary { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); transition: all 0.3s; }
        .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.2); transform: translateY(-2px); }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #F59E0B; }
      `}} />

      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-accent/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  PUBLISH<span className="text-brand">FAST</span>
              </div>
              <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-300">
                  <a href="#how-it-works" className="hover:text-white transition-colors">The Pipeline</a>
                  <a href="#roi" className="hover:text-white transition-colors">ROI Calculator</a>
                  <a href="#pricing" className="hover:text-white transition-colors">Deploy</a>
              </div>
              <a href="#start" className="bg-brand text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform hidden md:block glow-btn">
                  Start Scaling
              </a>
          </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-brand/30 text-sm font-semibold text-brand mb-10 animate-fade-in-up shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse"></span>
              Accepting 3 new experts this week
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Monetize Your Mind.<br/>
              <span className="text-gradient">Fully Automated.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We extract your expertise, write a premium e-book, design high-converting funnels, and deploy automated Stripe integrations in <span className="text-white font-bold border-b-2 border-brand">72 hours</span>. You just collect the payouts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#pricing" className="bg-brand text-black px-10 py-5 rounded-full font-black text-xl glow-btn w-full sm:w-auto flex items-center justify-center gap-3 tracking-wide">
                  Deploy Your Funnel
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#roi" className="btn-secondary px-10 py-5 rounded-full font-bold text-xl text-white w-full sm:w-auto flex items-center justify-center gap-2">
                  Calculate ROI
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </a>
          </div>
          
          {/* Social Proof */}
          <div className="mt-24 pt-12 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-sm text-gray-500 font-bold mb-8 uppercase tracking-[0.2em]">Engineered for creators monetizing at scale</p>
              <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="text-2xl font-black font-serif flex items-center gap-2"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg> Forbes</div>
                  <div className="text-2xl font-black flex items-center gap-2"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> TechCrunch</div>
                  <div className="text-2xl font-black italic flex items-center gap-2"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg> WIRED</div>
              </div>
          </div>
      </header>

      {/* The Framework */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dark-900/80 z-[-1]"></div>
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-brand/20 to-transparent hidden md:block"></div>
          
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">The Speed-to-Wealth Pipeline</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium">From zero to automated Stripe deposits in 3 straightforward steps. Zero writing required.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="glass-card p-10 rounded-3xl relative overflow-hidden group hover:border-brand/50 hover:bg-white/[0.02] transition-all duration-300">
                      <div className="absolute -top-10 -right-10 text-[150px] font-black text-white/[0.03] group-hover:text-brand/[0.05] transition-colors leading-none">1</div>
                      <div className="w-16 h-16 bg-gradient-to-br from-dark-700 to-dark-900 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-brand shadow-lg">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                      </div>
                      <h3 className="text-2xl font-black mb-4 tracking-tight text-white">The Brain Dump</h3>
                      <p className="text-gray-400 text-lg leading-relaxed font-medium">Hop on a 90-minute recorded strategy call. We interview you, extract your unique frameworks, and map the exact high-converting table of contents.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="glass-card p-10 rounded-3xl relative overflow-hidden group hover:border-brand/50 hover:bg-white/[0.02] transition-all duration-300 transform md:translate-y-8">
                      <div className="absolute -top-10 -right-10 text-[150px] font-black text-white/[0.03] group-hover:text-brand/[0.05] transition-colors leading-none">2</div>
                      <div className="w-16 h-16 bg-gradient-to-br from-dark-700 to-dark-900 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-brand shadow-lg">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      </div>
                      <h3 className="text-2xl font-black mb-4 tracking-tight text-white">Ghostwriting & Design</h3>
                      <p className="text-gray-400 text-lg leading-relaxed font-medium">Our AI-assisted editorial team writes and formats your e-book. We design a premium cover and internal layout that screams high-ticket authority.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="glass-card p-10 rounded-3xl relative overflow-hidden group hover:border-brand-accent/50 hover:bg-white/[0.02] transition-all duration-300 transform md:translate-y-16">
                      <div className="absolute -top-10 -right-10 text-[150px] font-black text-white/[0.03] group-hover:text-brand-accent/[0.05] transition-colors leading-none">3</div>
                      <div className="w-16 h-16 bg-gradient-to-br from-dark-700 to-dark-900 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-brand-accent shadow-lg">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h3 className="text-2xl font-black mb-4 tracking-tight text-white">Launch & Monetize</h3>
                      <p className="text-gray-400 text-lg leading-relaxed font-medium">We deliver a coded landing page, Stripe links, and automated email delivery. Connect your domain, drive traffic, and watch the notifications roll in.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi" className="py-24 relative">
          <div className="max-w-4xl mx-auto px-6">
              <div className="glass-panel p-10 md:p-14 rounded-[40px] border border-brand/20 relative overflow-hidden shadow-2xl">
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px]"></div>
                  
                  <div className="text-center mb-10 relative z-10">
                      <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Calculate Your <span className="text-gradient-alt">Profit Engine</span></h2>
                      <p className="text-gray-400 text-lg">See exactly how fast this pays for itself.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                      <div className="space-y-8">
                          <div>
                              <label className="flex justify-between text-sm font-bold text-gray-300 mb-3">
                                  <span>E-Book Price ($)</span>
                                  <span className="text-brand">{price}</span>
                              </label>
                              <input 
                                type="range" 
                                min="19" max="199" 
                                value={price} 
                                onChange={(e) => setPrice(parseInt(e.target.value))}
                                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-brand" 
                              />
                          </div>
                          <div>
                              <label className="flex justify-between text-sm font-bold text-gray-300 mb-3">
                                  <span>Daily Sales</span>
                                  <span className="text-brand">{sales}</span>
                              </label>
                              <input 
                                type="range" 
                                min="1" max="50" 
                                value={sales} 
                                onChange={(e) => setSales(parseInt(e.target.value))}
                                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-brand" 
                              />
                          </div>
                          <div className="pt-4 border-t border-white/10">
                              <p className="text-sm text-gray-400 font-medium">It only takes a handful of sales a day to build a lucrative passive income stream.</p>
                          </div>
                      </div>

                      <div className="bg-dark-900/80 rounded-3xl p-8 border border-white/5 flex flex-col justify-center">
                          <div className="mb-6">
                              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Monthly Automated Revenue</p>
                              <div className="text-5xl md:text-6xl font-black text-brand-accent tracking-tighter">${monthlyRev.toLocaleString()}</div>
                          </div>
                          <div>
                              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Yearly Projection</p>
                              <div className="text-3xl font-bold text-white tracking-tight">${yearlyRev.toLocaleString()}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-dark-900/50">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">One Price. <span className="text-gradient">Total Automation.</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium mb-16">No retainers. No equity. Just a hyper-optimized digital asset you own forever.</p>

              <div className="max-w-lg mx-auto glass-card p-1 rounded-[40px] relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand via-yellow-500 to-brand-accent rounded-[40px] blur opacity-30 animate-pulse-slow"></div>
                  <div className="bg-dark-800 rounded-[38px] p-10 relative z-10 border border-white/10">
                      <h3 className="text-2xl font-black text-white mb-2">The Funnel Build</h3>
                      <p className="text-brand font-bold mb-8 text-sm uppercase tracking-widest">Done-For-You System</p>
                      
                      <div className="text-6xl font-black mb-8 tracking-tighter">$2,997<span className="text-xl text-gray-500 font-medium tracking-normal">/one-time</span></div>
                      
                      <ul className="space-y-5 text-left mb-10">
                          <li className="flex items-start gap-3">
                              <svg className="w-6 h-6 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                              <span className="text-gray-300 font-medium">90-Min Strategy & Extraction Call</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <svg className="w-6 h-6 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                              <span className="text-gray-300 font-medium">Complete E-Book Ghostwriting (up to 10k words)</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <svg className="w-6 h-6 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                              <span className="text-gray-300 font-medium">Premium Cover & Interior Layout Design</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <svg className="w-6 h-6 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                              <span className="text-gray-300 font-medium">High-Converting Next.js Landing Page</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <svg className="w-6 h-6 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                              <span className="text-gray-300 font-medium">Stripe Payment & Email Delivery Automation</span>
                          </li>
                      </ul>

                      <button className="w-full bg-brand text-black py-5 rounded-full font-black text-xl glow-btn transition-all">
                          Secure Your Spot
                      </button>
                      <p className="text-center text-xs text-gray-500 mt-4 font-medium">Delivered in 72 hours. 100% Satisfaction Guarantee.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-black mb-4 md:mb-0 flex items-center gap-2">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  PUBLISH<span className="text-brand">FAST</span>
              </div>
              <p className="text-gray-500 text-sm font-medium">© 2026 PublishFast Agency. Built for speed and profit.</p>
          </div>
      </footer>
    </div>
  );
}
