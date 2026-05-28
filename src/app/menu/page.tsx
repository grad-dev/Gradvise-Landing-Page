'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Utensils, Zap, BarChart3, Smartphone, Wifi, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function MenuPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto pt-10">
          <motion.div initial="initial" animate="animate" variants={fadeUp}>
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
               <Zap className="w-4 h-4" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase">Smart Menu System</span>
             </div>
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
               Menus that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">upsell</span> automatically.
             </h1>
             <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
               Replace static PDFs with intelligent digital menus that learn your guests' preferences and automatically suggest high-margin pairings. Built for speed, beauty, and revenue.
             </p>
             <Link href="/demo" className="inline-flex items-center justify-center bg-black text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg hover:bg-primary transition-all duration-300">
               See the Menu in Action <ArrowRight className="w-5 h-5 ml-2" />
             </Link>
          </motion.div>
        </div>
        
        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {[
             { title: "Dynamic Pricing", desc: "Adjust prices automatically based on demand, time of day, or inventory levels.", icon: BarChart3 },
             { title: "Beautiful Photography", desc: "Showcase your dishes with full-bleed, retina-ready image support.", icon: Utensils },
             { title: "Instant Updates", desc: "86 a dish in one tap. Your menu updates instantly across all QR codes and tablets.", icon: Zap }
           ].map((feature, i) => (
             <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-red-100 hover:bg-red-50/50 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-black group-hover:text-primary transition-colors">
                   <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Deep Dive Section */}
        <div className="mb-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="order-2 lg:order-1 bg-gray-50 rounded-[40px] h-[400px] border border-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="w-[200px] h-[400px] bg-white shadow-2xl rounded-[30px] border-[8px] border-black absolute -bottom-10 rotate-12 flex flex-col pt-6 px-4">
                  <div className="w-full h-24 bg-gray-100 rounded-xl mb-4" />
                  <div className="w-3/4 h-4 bg-gray-200 rounded-full mb-2" />
                  <div className="w-1/2 h-4 bg-gray-200 rounded-full mb-6" />
                  <div className="w-full h-12 bg-primary/20 rounded-xl" />
                </div>
             </div>
             <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-black text-black mb-6">Menu Engineering AI</h2>
                <p className="text-lg text-gray-500 font-medium leading-relaxed mb-6">
                  Stop relying on servers to remember the perfect wine pairing. Plateio analyzes historical order data to automatically recommend the highest-converting add-ons right on the guest's phone.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 font-bold"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Auto-suggests pairings based on cart contents</li>
                  <li className="flex items-center text-gray-700 font-bold"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Highlights high-margin items dynamically</li>
                  <li className="flex items-center text-gray-700 font-bold"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> A/B tests item placement for maximum revenue</li>
                </ul>
             </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl md:text-4xl font-black text-black mb-6">Real-Time Syncing</h2>
                <p className="text-lg text-gray-500 font-medium leading-relaxed mb-6">
                  No more apologizing for out-of-stock items. When the kitchen 86's a dish on the KDS, it instantly disappears from every digital menu in the restaurant.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700 font-bold"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Millisecond-fast WebSockets updates</li>
                  <li className="flex items-center text-gray-700 font-bold"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Works seamlessly on slow cellular connections</li>
                  <li className="flex items-center text-gray-700 font-bold"><CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Syncs instantly with existing POS inventory</li>
                </ul>
             </div>
             <div className="bg-gray-50 rounded-[40px] h-[400px] border border-gray-100 flex items-center justify-center relative overflow-hidden">
                <Wifi className="w-32 h-32 text-gray-200" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}

