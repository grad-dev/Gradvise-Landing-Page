'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto pt-10">
          <motion.div initial="initial" animate="animate" variants={fadeUp}>
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
               <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase">Our Mission</span>
             </div>
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
               We build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">engine</span> behind great restaurants.
             </h1>
             <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-medium">
               Gradvise was founded on a simple premise: chefs should focus on food, not fighting with chaotic, disjointed tech stacks. We're engineering the ultimate unified operating system for modern dining, designed by hospitality veterans for hospitality professionals.
             </p>
          </motion.div>
        </div>
        
        {/* Hero Image */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="w-full h-[400px] md:h-[500px] bg-gray-50 rounded-[32px] border border-gray-100 shadow-xl overflow-hidden relative group mb-32">
           <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" alt="Gradvise Team" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
             <div className="text-left max-w-xl">
                <div className="text-white text-2xl md:text-4xl font-bold tracking-tight mb-2">Built in San Francisco</div>
                <div className="text-white/80 font-medium text-lg">Powering high-growth operators worldwide.</div>
             </div>
           </div>
        </motion.div>

        {/* By The Numbers */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Gradvise By The Numbers</h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">The impact we've made across the hospitality industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "$2B+", label: "Orders Processed" },
              { num: "4,500+", label: "Restaurant Partners" },
              { num: "99.99%", label: "Platform Uptime" }
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-3xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.num}</div>
                <div className="text-gray-600 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Our Core Values</h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">We don't just build software. We build systems that respect the craft of hospitality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <Heart className="w-8 h-8 text-primary mb-6" />
               <h3 className="text-xl font-bold text-black mb-3">Guest-First Design</h3>
               <p className="text-gray-500 font-medium leading-relaxed">Everything we build is designed to remove friction between your staff and your guests, allowing true hospitality to shine through.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <Shield className="w-8 h-8 text-primary mb-6" />
               <h3 className="text-xl font-bold text-black mb-3">Bulletproof Reliability</h3>
               <p className="text-gray-500 font-medium leading-relaxed">During a Friday night dinner rush, software cannot fail. Our systems are built with enterprise-grade redundancy.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <Zap className="w-8 h-8 text-primary mb-6" />
               <h3 className="text-xl font-bold text-black mb-3">Frictionless Speed</h3>
               <p className="text-gray-500 font-medium leading-relaxed">Seconds matter in a kitchen. Our interfaces are optimized for zero lag and minimal taps.</p>
             </div>
             <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <Target className="w-8 h-8 text-primary mb-6" />
               <h3 className="text-xl font-bold text-black mb-3">Data-Driven Growth</h3>
               <p className="text-gray-500 font-medium leading-relaxed">We believe restaurants shouldn't have to guess. We provide actionable, crystal-clear analytics to drive profitability.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

