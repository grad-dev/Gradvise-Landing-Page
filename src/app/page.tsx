'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Settings, Users, Truck, Sparkles, TrendingUp, ChevronRight, Activity, ShieldCheck, Zap, Clock, Star, ChefHat, BarChart3, MessageCircle, Check, Smartphone, Brain, PieChart } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Animation Configurations
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center w-full overflow-hidden bg-white selection:bg-primary/20 selection:text-primary pt-24 font-sans">
      
      {/* ── PREMIUM HERO SECTION ── */}
      <section className="w-full pt-6 pb-12 min-h-[85vh] flex items-center relative px-4 md:px-6">
        {/* Soft Background Meshes */}
        <div className="absolute top-[-10%] right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/10 via-orange-100/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-100/20 to-primary/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Hero Text (Left) */}
            <div className="lg:col-span-6 flex flex-col items-start z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-widest uppercase">The Restaurant Revenue OS</span>
              </motion.div>

              <motion.h1
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black tracking-tight text-black leading-[1.05] mb-4"
              >
                <motion.span variants={staggerItem} className="block">Turn Every</motion.span>
                <motion.span variants={staggerItem} className="block text-gray-300">Table Into A</motion.span>
                <motion.span variants={staggerItem} className="block">Revenue <span className="text-primary text-gradient">Engine</span></motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-500 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-medium"
              >
                Not just a QR menu tool. A powerful operating system that upsells every order, builds CRM profiles instantly, and automatically runs marketing to fill slow hours.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <Link
                  href="/start"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-gradient-hero px-10 text-base font-bold text-white shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-100 px-8 text-base font-bold text-black hover:bg-gray-50 hover:border-gray-200 transition-all gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 w-full"
              >
                <div className="flex items-center gap-3 bg-gray-50/80 p-2 pr-4 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-md">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black mb-0.5">Automated Upsells</div>
                    <div className="text-xs text-gray-500">Increase check size by 20%</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50/80 p-2 pr-4 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-md">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black mb-0.5">Smart CRM Profiles</div>
                    <div className="text-xs text-gray-500">Know every guest by name</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visuals (Right) */}
            <div className="lg:col-span-6 relative h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
              
              {/* Central Phone Mockup (Owner Dashboard & KDS) */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-30"
              >
                <div className="w-[260px] h-[520px] bg-white rounded-[40px] border-[10px] border-slate-900 shadow-2xl overflow-hidden flex flex-col animate-[float_5s_ease-in-out_infinite]">
                {/* Dynamic Island Notch */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
                  <div className="w-28 h-5 bg-slate-900 rounded-b-[16px]" />
                </div>
                {/* Phone Top Bar */}
                <div className="pt-2 px-5 flex justify-between text-[10px] font-bold text-black mb-4 z-40 bg-white">
                  <span>9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <Activity className="w-3 h-3 text-primary animate-pulse" />
                    <div className="w-4 h-2.5 border border-black rounded-sm p-[1px]"><div className="w-2/3 h-full bg-black rounded-[1px]"/></div>
                  </div>
                </div>

                <div className="flex-1 bg-white px-4 pb-4 overflow-y-auto hide-scrollbar">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6 bg-gray-50 rounded-full p-1.5 pr-4">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"><span className="text-xs">📊</span></div>
                       <div>
                         <div className="text-[9px] text-gray-400">Live Overview</div>
                         <div className="text-xs font-bold leading-none">Today's Shift</div>
                       </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shadow-sm"><span className="text-xs">⚙️</span></div>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold mb-4 leading-tight">
                    Revenue <span className="text-gray-400 font-light">Performance</span><br/>Is Up Today <span className="text-primary">✨</span>
                  </h3>

                  {/* High-Level Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-primary/5 rounded-[20px] p-3 border border-primary/20">
                       <div className="text-[10px] font-bold text-primary mb-1">Total Sales</div>
                       <div className="text-xl font-black text-black">$4,285</div>
                    </div>
                    <div className="bg-gray-50 rounded-[20px] p-3 border border-gray-100">
                       <div className="text-[10px] font-bold text-gray-500 mb-1">Active Tables</div>
                       <div className="text-xl font-black text-black">18/24</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xs font-bold">Live Kitchen Tickets</div>
                    <div className="text-[10px] text-gray-400">View KDS &gt;</div>
                  </div>

                  {/* KDS Ticket Cards */}
                  <div className="flex flex-col gap-3 mb-6">
                    {/* Ticket 1 */}
                    <div className="bg-gray-50 rounded-[20px] p-3 flex flex-col relative border border-gray-100">
                      <div className="absolute top-2 right-2 bg-black/80 text-white text-[8px] px-2 py-0.5 rounded-full z-10 flex items-center gap-1"><Clock className="w-2 h-2"/> Table 12</div>
                      <div className="px-1 pt-1">
                        <div className="font-bold text-sm leading-tight mb-1">Spicy Tuna Roll</div>
                        <div className="flex gap-1 mb-3">
                           <span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md">+ Avocado</span>
                           <span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md">+ Spicy Mayo</span>
                        </div>
                        <div className="flex justify-between items-end border-t border-gray-200 pt-2">
                          <div className="font-black text-xs text-gray-500">Ticket #104</div>
                          <div className="text-[10px] font-bold text-white bg-green-500 px-3 py-1 rounded-full shadow-sm animate-pulse">Cooking</div>
                        </div>
                      </div>
                    </div>
                    {/* Ticket 2 */}
                    <div className="bg-gray-50 rounded-[20px] p-3 flex flex-col relative border border-gray-100">
                      <div className="absolute top-2 right-2 bg-black/80 text-white text-[8px] px-2 py-0.5 rounded-full z-10 flex items-center gap-1"><Clock className="w-2 h-2"/> Table 4</div>
                      <div className="px-1 pt-1">
                        <div className="font-bold text-sm leading-tight mb-1">Truffle Burger</div>
                        <div className="flex gap-1 mb-3">
                           <span className="text-[9px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md">+ Extra Cheese</span>
                        </div>
                        <div className="flex justify-between items-end border-t border-gray-200 pt-2">
                          <div className="font-black text-xs text-gray-500">Ticket #105</div>
                          <div className="text-[10px] font-bold text-black bg-gray-200 px-3 py-1 rounded-full">Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-4 inset-x-4 bg-black rounded-[24px] h-14 flex justify-between items-center px-6 z-40 shadow-xl">
                  <div className="w-10 h-10 bg-primary rounded-full flex justify-center items-center text-white shadow-lg shadow-primary/30"><BarChart3 className="w-5 h-5"/></div>
                  <div className="w-10 h-10 flex justify-center items-center text-white/50 hover:text-white transition-colors"><ChefHat className="w-5 h-5"/></div>
                  <div className="w-10 h-10 flex justify-center items-center text-white/50 hover:text-white transition-colors"><MessageCircle className="w-5 h-5"/></div>
                  <div className="w-10 h-10 flex justify-center items-center text-white/50 hover:text-white transition-colors"><Users className="w-5 h-5"/></div>
                </div>
                </div>
              </motion.div>

              {/* Floating Large Image Background (Contextual B2B Image) */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 50 }}
                className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-[50px] overflow-hidden shadow-2xl z-20 hidden md:block"
              >
                <div className="w-full h-full animate-[float-slow_12s_ease-in-out_infinite]">
                  <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover scale-110" alt="Busy Restaurant Kitchen" />
                </div>
              </motion.div>

              {/* Floating UI Badges (Glassmorphism) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-16 -left-12 z-40 bg-white/90 backdrop-blur-xl border border-white/50 p-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500"><TrendingUp className="w-5 h-5"/></div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Upsell Revenue</div>
                  <div className="text-sm font-black text-black">+22% MoM</div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT BANNER ── */}
      <section className="w-full py-10 bg-white border-y border-gray-100 flex flex-col items-center overflow-hidden">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by 1000+ Independent Restaurants</h3>
        <div className="relative flex w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] w-max">
            {/* Map 4 times to ensure seamless infinite scrolling on all screens */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="font-serif text-xl font-bold text-black">Kimbo's Grill</span>
                <span className="font-serif text-xl font-bold text-black">The Truffle Bar</span>
                <span className="font-serif text-xl font-black tracking-tighter text-black">OAK & IRON</span>
                <span className="font-serif text-xl font-bold text-black">Sushi Central</span>
                <span className="font-serif text-xl font-bold text-black">Luigi's</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVER SECTION (Premium Split Layout) ── */}
      <section className="w-full py-32 bg-gray-50 relative" id="about">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-[48px] p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center shadow-xl shadow-gray-200/50 border border-gray-100">
            
            {/* Left Mockup Showcase */}
            <motion.div {...fadeUp} className="flex justify-center relative w-full h-[550px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[40px] -z-10" />
              <div className="w-[280px] h-full bg-white rounded-[40px] border-[8px] border-slate-900 shadow-2xl overflow-hidden flex flex-col">
                <div className="h-full bg-white flex flex-col pt-10 px-5 gap-4 relative">
                   <div className="absolute top-0 inset-x-0 h-6 flex justify-center"><div className="w-24 h-4 bg-slate-900 rounded-b-xl"/></div>
                   <div className="text-xl font-serif font-bold leading-tight mt-4">CRM Profile <br/>Sarah Jenkins</div>
                   
                   <div className="bg-black text-white rounded-2xl p-4 flex flex-col items-start mx-2 shadow-lg mt-4">
                     <div className="font-bold text-sm mb-1 text-primary">High-Value Regular</div>
                     <div className="text-xs text-gray-300">Visited 14 times</div>
                     <div className="text-[10px] text-gray-400 mt-2">Favorite: Truffle Burger</div>
                   </div>
                   
                   <div className="mt-6">
                     <div className="text-xs font-bold mb-3 text-black">Automated Actions</div>
                     <div className="flex flex-col gap-2">
                       <div className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 flex items-center justify-between shadow-sm">
                         <div className="flex items-center gap-2"><span className="text-sm">📧</span><span className="text-[10px] font-bold">Lapsed Campaign (Sent)</span></div>
                         <Check className="w-3 h-3 text-emerald-500" />
                       </div>
                       <div className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-3 flex items-center justify-between shadow-sm">
                         <div className="flex items-center gap-2"><span className="text-sm">🎁</span><span className="text-[10px] font-bold">Birthday Reward</span></div>
                         <div className="w-3 h-3 rounded-full border border-gray-300" />
                       </div>
                     </div>
                   </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-12 -right-8 z-40 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-black text-black">Zero Data Entry</div>
                  <div className="text-[10px] font-bold text-gray-400">Profiles built instantly</div>
                </div>
              </motion.div>

            </motion.div>
            
            {/* Right Content */}
            <div className="flex flex-col items-start">
              <motion.h2 {...fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-black tracking-tight">
                <span className="text-gray-400 font-light">Know Your Real</span><br />
                Margin <span className="text-gray-400 font-light">— Not Just</span><br />
                Your Revenue
              </motion.h2>
              <motion.p {...fadeUp} className="text-gray-500 text-base md:text-lg mb-10 max-w-md leading-relaxed font-medium">
                We connect restaurant owners with their true revenue potential through a seamless, smart, and user-friendly operating system focused on measurable growth.
              </motion.p>
              
              <motion.div {...fadeUp}>
                <Link href="/about" className="inline-flex h-14 items-center justify-center rounded-full bg-black text-white px-8 font-bold text-sm hover:bg-gray-800 hover:scale-[1.02] transition-all shadow-lg shadow-black/20 gap-2">
                  <span className="w-4 h-4 border border-white rounded-full flex items-center justify-center"><ArrowRight className="w-2.5 h-2.5" /></span>
                  Explore Features
                </Link>
              </motion.div>

              <motion.div {...fadeUp} className="grid grid-cols-3 gap-6 md:gap-10 mt-16 w-full border-t border-gray-100 pt-10">
                <div>
                  <div className="text-3xl md:text-4xl font-black text-black mb-1">15+</div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Premium<br/>Modules</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-primary mb-1">20%</div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Higher Avg<br/>Check Size</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-black mb-1">95%</div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Owner<br/>Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT PICTURE: PREMIUM BENTO GRID (The Revenue Engine) ── */}
      <section className="w-full py-32 bg-gray-50 relative overflow-hidden" id="features">
        {/* Subtle Grid Texture Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        
        {/* Ambient background glow for the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div {...fadeUp} className="text-center mb-20 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-black mb-6 shadow-sm relative z-10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-gray-500">Platform Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight relative z-10">The Revenue <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-500 drop-shadow-sm">Engine</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg relative z-10">A complete platform built to close revenue leaks, understand your guests, and automate your marketing.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* BENTO 1: Automated Upsells (Col Span 8) */}
            <motion.div {...fadeUp} className="lg:col-span-8 bg-white rounded-[40px] border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(255,50,50,0.12)] transition-all duration-500 overflow-hidden relative group p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
              {/* Background red ambient glow inside card */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/10 to-orange-400/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 max-w-lg mb-8">
                <div className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-red-600 font-black text-6xl md:text-8xl mb-4 tracking-tighter drop-shadow-sm">+20%</div>
                <h3 className="text-3xl font-bold text-black mb-4">Average Order Value</h3>
                <p className="text-gray-500 text-lg leading-relaxed">Our smart ordering system automatically suggests high-margin add-ons based on the guest's cart. You don't train staff to upsell; the OS does it perfectly every time.</p>
              </div>

              {/* Graphic: POS Upsell Flow */}
              <div className="relative z-10 w-full max-w-md bg-gray-50 border border-gray-200 rounded-[24px] p-6 shadow-md group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-4">
                   <div className="font-bold text-black">Guest Cart</div>
                   <div className="text-primary font-black text-xl">$24.00</div>
                </div>
                <div className="mb-4">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">AI Suggests: Frequently bought together</div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between bg-white border border-primary/20 rounded-xl p-3 shadow-sm cursor-pointer hover:border-primary transition-colors">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-xl text-primary font-bold">+</div>
                         <div className="font-bold text-sm text-black">Add Truffle Fries</div>
                      </div>
                      <div className="font-black text-primary text-sm">+$6.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BENTO 2: Smart CRM (Col Span 4) */}
            <motion.div {...fadeUp} className="lg:col-span-4 bg-gradient-to-br from-primary to-red-600 rounded-[40px] shadow-[0_20px_50px_-12px_rgba(255,50,50,0.4)] overflow-hidden relative group p-8 md:p-10 flex flex-col justify-between min-h-[400px]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px]" />
              
              <div className="relative z-10 mb-8">
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 font-black text-6xl md:text-8xl mb-4 tracking-tighter drop-shadow-md">100%</div>
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-sm">Guest Capture</h3>
                <p className="text-white/90 text-lg leading-relaxed">Stop relying on punch cards. Every order builds a rich guest profile.</p>
              </div>

              {/* Graphic: Guest Profile */}
              <div className="relative z-10 w-full bg-white rounded-[24px] p-5 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                 <div className="flex gap-4 items-center mb-4">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">MR</div>
                   <div>
                     <div className="font-bold text-black text-lg leading-tight">Mike Ross</div>
                     <div className="text-[10px] font-bold text-primary tracking-wide uppercase">VIP Regular</div>
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <div className="text-[10px] text-gray-500 font-bold mb-1">Visits</div>
                      <div className="font-black text-xl text-black">42</div>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                      <div className="text-[10px] text-primary font-bold mb-1">Lifetime Value</div>
                      <div className="font-black text-xl text-primary">$3,420</div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* BENTO 3: Flash Deals (Col Span 5) */}
            <motion.div {...fadeUp} className="lg:col-span-5 bg-white rounded-[40px] border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(255,50,50,0.12)] overflow-hidden relative group p-8 md:p-10 flex flex-col justify-between min-h-[400px] transition-shadow duration-500">
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-[80px]" />
              
              <div className="relative z-10 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm"><Zap className="w-8 h-8 fill-primary" /></div>
                <h3 className="text-3xl font-bold text-black mb-4">Fill Slow Hours</h3>
                <p className="text-gray-500 text-lg leading-relaxed">Dead Tuesday at 3 PM? The engine automatically texts a Flash Deal to lapsed diners.</p>
              </div>

              {/* Graphic: Chart Spike */}
              <div className="relative z-10 w-full mt-auto">
                 <div className="flex items-end gap-2 h-32 border-b border-gray-200 pb-2 relative">
                    <div className="w-full bg-gray-100 rounded-t-md h-[40%]" />
                    <div className="w-full bg-gray-100 rounded-t-md h-[30%]" />
                    <div className="w-full bg-gray-100 rounded-t-md h-[20%]" />
                    <div className="w-full bg-primary/20 rounded-t-md h-[10%] relative group-hover:bg-primary/40 transition-colors">
                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 text-[10px] font-bold px-2 py-1 rounded shadow-md whitespace-nowrap text-black z-20">SMS Sent</div>
                    </div>
                    <div className="w-full bg-gradient-to-t from-primary/80 to-primary rounded-t-md h-[70%] group-hover:h-[85%] transition-all duration-700 delay-100 shadow-sm" />
                    <div className="w-full bg-gradient-to-t from-primary/90 to-red-600 rounded-t-md h-[90%] group-hover:h-[100%] transition-all duration-700 delay-200 shadow-sm" />
                 </div>
                 <div className="flex justify-between text-[10px] font-bold text-gray-400 mt-2">
                   <span>12 PM</span>
                   <span>3 PM</span>
                   <span>6 PM</span>
                 </div>
              </div>
            </motion.div>

            {/* BENTO 4: Margin Control (Col Span 7) */}
            <motion.div {...fadeUp} className="lg:col-span-7 bg-white rounded-[40px] border border-gray-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-12px_rgba(255,50,50,0.12)] overflow-hidden relative group p-8 md:p-12 flex flex-col md:flex-row gap-8 justify-between min-h-[400px] transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-[80px]" />
              
              <div className="relative z-10 max-w-sm flex flex-col justify-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-red-600 font-black text-6xl md:text-8xl mb-4 tracking-tighter drop-shadow-sm">0%</div>
                <h3 className="text-3xl font-bold text-black mb-4">Lost Tickets</h3>
                <p className="text-gray-500 text-lg leading-relaxed">Direct KDS integration means perfectly synchronized prep times and live food cost deduction per plate.</p>
              </div>

              {/* Graphic: KDS Tickets */}
              <div className="relative z-10 w-full md:w-1/2 h-full flex items-center justify-center">
                 <div className="w-full max-w-[280px] space-y-4">
                    <div className="bg-white border-2 border-primary/20 rounded-2xl p-5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] -rotate-2 group-hover:rotate-0 transition-transform duration-500 relative z-20">
                      <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                        <span className="font-black text-xl text-black">Table 12</span>
                        <span className="bg-red-50 text-primary font-bold text-xs px-3 py-1.5 rounded-md border border-red-100 shadow-sm">08:45</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3"><div className="w-4 h-4 rounded border-2 border-gray-300" /><span className="font-bold text-sm text-black">2x Wagyu Burger</span></div>
                        <div className="flex items-center gap-3 text-primary font-bold pl-7 text-xs">↳ No Onions, Extra Sauce</div>
                        <div className="flex items-center gap-3"><div className="w-4 h-4 rounded border-2 border-gray-300" /><span className="font-bold text-sm text-black">1x Truffle Fries</span></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm opacity-60 translate-x-4">
                      <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-3">
                        <span className="font-black text-xl text-gray-400">Table 04</span>
                        <span className="bg-gray-200 text-gray-500 font-bold text-xs px-3 py-1.5 rounded-md">02:10</span>
                      </div>
                      <div className="w-3/4 h-4 bg-gray-200 rounded mb-3" />
                      <div className="w-1/2 h-4 bg-gray-200 rounded" />
                    </div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (PREMIUM CIRCULAR) ── */}
      <section className="w-full py-32 bg-gray-50 relative overflow-hidden" id="services">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.h2 {...fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-black tracking-tight">
             <span className="text-gray-400 font-light">How Our</span> Revenue Operating<br/>
             <span className="text-black">System</span> <span className="text-gray-400 font-light">Works</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-gray-500 max-w-2xl mx-auto mb-24 text-base font-medium">
            Your guests get a frictionless ordering experience, while you capture every detail to fuel your automated marketing campaigns.
          </motion.p>

          <div className="relative max-w-5xl mx-auto h-[650px] flex items-center justify-center mt-12">
            {/* SVG Connecting Ring */}
            <svg className="absolute inset-0 m-auto w-[700px] h-[700px] pointer-events-none -z-10" viewBox="0 0 700 700">
              <circle cx="350" cy="350" r="348" fill="none" stroke="var(--border)" strokeWidth="2" strokeDasharray="12 12" className="animate-[spin_60s_linear_infinite]" />
            </svg>

            {/* Center POS Mockup */}
            <motion.div 
              {...fadeUp}
              className="z-20 w-[260px] h-[550px] bg-white rounded-[40px] border-[8px] border-slate-900 shadow-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50"><div className="w-24 h-4 bg-slate-900 rounded-b-xl"/></div>
              <div className="bg-primary text-white p-6 pt-12">
                 <div className="text-3xl font-black mb-1">+20%</div>
                 <div className="text-xs font-bold opacity-80 uppercase tracking-widest">Revenue Growth</div>
              </div>
              <div className="h-full bg-white p-5 flex flex-col">
                 <div className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl mb-3 flex items-center justify-between px-4">
                   <div className="text-xs font-bold">Smart Upsells</div><Check className="w-4 h-4 text-emerald-500" />
                 </div>
                 <div className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl mb-3 flex items-center justify-between px-4">
                   <div className="text-xs font-bold">CRM Captured</div><Check className="w-4 h-4 text-emerald-500" />
                 </div>
                 <div className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl mb-3 flex items-center justify-between px-4">
                   <div className="text-xs font-bold">Campaign Ready</div><Check className="w-4 h-4 text-emerald-500" />
                 </div>
              </div>
            </motion.div>

            {/* 4 Premium Cards placed in a circle */}
            <motion.div {...fadeUp} className="absolute top-0 left-0 xl:-left-12 bg-white border border-blue-100 p-6 rounded-3xl shadow-xl w-64 text-left group hover:-translate-y-2 transition-transform">
               <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4 shadow-lg float-right group-hover:bg-blue-500 transition-colors"><Smartphone className="w-5 h-5"/></div>
               <h4 className="font-bold text-base text-black clear-both mb-2">Guests Scan & Order</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Diners browse visual menus, accept smart upsells, and self-pay seamlessly.</p>
            </motion.div>

            <motion.div {...fadeUp} className="absolute top-0 right-0 xl:-right-12 bg-white border border-orange-100 p-6 rounded-3xl shadow-xl w-64 text-left group hover:-translate-y-2 transition-transform">
               <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4 shadow-lg float-right group-hover:bg-orange-500 transition-colors"><ChefHat className="w-5 h-5"/></div>
               <h4 className="font-bold text-base text-black clear-both mb-2">Kitchen Receives</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Orders route instantly to the KDS, eliminating handwritten tickets and errors.</p>
            </motion.div>

            <motion.div {...fadeUp} className="absolute bottom-0 left-0 xl:-left-12 bg-white border border-gray-200 p-6 rounded-3xl shadow-xl w-64 text-left group hover:-translate-y-2 transition-transform">
               <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4 shadow-lg float-right group-hover:bg-primary transition-colors"><Zap className="w-5 h-5"/></div>
               <h4 className="font-bold text-base text-black clear-both mb-2">AI Campaigns Trigger</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Automated marketing runs in the background to fill slow hours and bring diners back.</p>
            </motion.div>

            <motion.div {...fadeUp} className="absolute bottom-0 right-0 xl:-right-12 bg-white border border-purple-100 p-6 rounded-3xl shadow-xl w-64 text-left group hover:-translate-y-2 transition-transform">
               <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4 shadow-lg float-right group-hover:bg-purple-500 transition-colors"><BarChart3 className="w-5 h-5"/></div>
               <h4 className="font-bold text-base text-black clear-both mb-2">True Margin Control</h4>
               <p className="text-xs text-gray-500 leading-relaxed">Live recipe costing tracks exactly which dishes are driving your profit.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ELEVATED TESTIMONIALS ── */}
      <section className="w-full py-32 bg-white" id="restaurant">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="flex flex-col items-start pr-8">
              <motion.h2 {...fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-8 leading-[1.1] tracking-tight">
                What Our Happy<br />
                <span className="text-black">Owners Are Saying</span>
              </motion.h2>
              <motion.p {...fadeUp} className="text-gray-500 text-lg mb-16 max-w-md font-medium leading-relaxed">
                Restaurant owners consistently share how Gradvise has cut their operational chaos and grown their revenue on autopilot.
              </motion.p>
              
              <motion.div {...fadeUp} className="bg-gray-50 rounded-[32px] p-10 shadow-sm relative w-full border border-gray-100 max-w-lg">
                <div className="absolute -top-8 left-10 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-xl z-10">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" alt="Ayesha Khan" />
                </div>
                <div className="text-black font-serif text-5xl mb-4 mt-4 leading-none">"</div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium mb-8">
                  The automated CRM alone paid for the system in a week. I wake up to a database of my regular customers, and the platform sends them offers on slow days.
                </p>
                <div className="text-right text-sm font-black text-black uppercase tracking-wider">— Ayesha Khan</div>
              </motion.div>
            </div>

            <motion.div {...fadeUp} className="relative h-[600px] w-full rounded-[48px] overflow-hidden shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Restaurant Interior" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 inset-x-0 p-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 z-10">
                <div>
                  <div className="flex gap-1.5 mb-4 bg-black/40 backdrop-blur-md w-fit px-3 py-1.5 rounded-full border border-white/10">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <div className="text-white text-3xl font-black leading-tight">
                    The Truffle Bar<br/>
                    <span className="font-light opacity-90">Downtown District</span>
                  </div>
                </div>
                <button className="bg-white text-black text-sm font-black px-8 py-4 rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
                  Read Case Study
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── HIGH IMPACT BOTTOM CTA ── */}
      <section className="w-full pt-16 pb-32 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            {...fadeUp}
            className="bg-black rounded-[56px] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-12 lg:p-20 relative border border-gray-800 shadow-2xl"
          >
            {/* Center Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 flex-1 px-4 py-12 lg:py-0 w-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                Start Your Free Trial<br/>
                & Fill <span className="text-primary text-gradient">Your Tables</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-medium">
                Transform your restaurant into a digital powerhouse. Setup takes under an hour, with no credit card required.
              </p>
              <Link href="/download" className="bg-primary text-white font-black text-base px-10 py-4 rounded-full shadow-[0_0_40px_-10px_rgba(255,78,33,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,78,33,0.7)] hover:scale-105 transition-all">
                Start 14-Day Free Trial
              </Link>
            </div>

            {/* Right Dynamic Shape (SaaS KDS View) */}
            <div className="hidden lg:flex w-[320px] h-[380px] bg-white rounded-[40px] p-6 flex-col items-center justify-start shadow-2xl z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full border-b border-gray-100 pb-4 mb-4 flex justify-between items-center">
                 <div className="text-black font-bold text-lg">Live KDS</div>
                 <div className="text-xs font-bold text-white bg-green-500 px-3 py-1 rounded-full">Online</div>
              </div>
              
              <div className="w-full bg-gray-50 rounded-2xl p-4 border border-gray-100 mb-3">
                 <div className="flex justify-between items-center mb-2">
                   <div className="text-sm font-bold text-black">Table 12</div>
                   <div className="text-xs text-primary font-bold">Ticket #205</div>
                 </div>
                 <div className="text-xs text-gray-500 mb-1">Truffle Burger</div>
                 <div className="text-[10px] text-gray-400 ml-2">+ Extra Truffle</div>
              </div>
              <div className="w-full bg-gray-50 rounded-2xl p-4 border border-gray-100">
                 <div className="flex justify-between items-center mb-2">
                   <div className="text-sm font-bold text-black">Table 4</div>
                   <div className="text-xs text-primary font-bold">Ticket #206</div>
                 </div>
                 <div className="text-xs text-gray-500 mb-1">Spicy Tuna Roll</div>
                 <div className="text-[10px] text-gray-400 ml-2">+ Avocado</div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>

    </div>
  );
}
