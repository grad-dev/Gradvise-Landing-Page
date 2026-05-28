'use client';

import { motion } from 'framer-motion';
import { Building2, ChevronRight, Store, Building, Landmark, Quote } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function RestaurantPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Hero Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto pt-10">
          <motion.div initial="initial" animate="animate" variants={fadeUp}>
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
               <Building2 className="w-4 h-4" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase">For Operators</span>
             </div>
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
               Real ROI for <br className="hidden md:block" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">real restaurants.</span>
             </h1>
             <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
               Software is an investment, not an expense. Discover how top-tier hospitality groups are leveraging Plateio to increase margins, retain staff, and drive massive guest loyalty.
             </p>
          </motion.div>
        </div>

        {/* ROI Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 max-w-5xl mx-auto">
           {[
             { stat: "+24%", label: "Average Check Size", desc: "Driven by smart AI upselling." },
             { stat: "-15h", label: "Admin Work Saved", desc: "Per week, per manager." },
             { stat: "3x", label: "Repeat Visits", desc: "Boosted by automated CRM." }
           ].map((metric, i) => (
             <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + (i * 0.1) }} className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-lg text-center group hover:border-red-100 transition-all">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-500 mb-4 group-hover:from-primary group-hover:to-orange-500 transition-all duration-500">{metric.stat}</div>
                <h3 className="text-lg font-bold text-black mb-2">{metric.label}</h3>
                <p className="text-gray-500 font-medium text-sm">{metric.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Case Studies */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Case Studies</h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Don't just take our word for it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-[32px] border border-gray-100 p-8 md:p-10">
               <Quote className="w-10 h-10 text-primary mb-6 opacity-50" />
               <p className="text-xl text-black font-medium leading-relaxed mb-8">
                 "Before Plateio, we were paying for Resy, Mailchimp, 7Shifts, and Toast separately. Now everything talks to each other. Our FOH staff spends less time staring at iPads and more time looking at guests. Revenue is up 18%."
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop" alt="Sarah Jenkins" />
                 </div>
                 <div>
                   <div className="font-bold text-black">Sarah Jenkins</div>
                   <div className="text-sm text-gray-500">Owner, The Rustic Spoon</div>
                 </div>
               </div>
            </div>
            <div className="bg-gray-50 rounded-[32px] border border-gray-100 p-8 md:p-10">
               <Quote className="w-10 h-10 text-primary mb-6 opacity-50" />
               <p className="text-xl text-black font-medium leading-relaxed mb-8">
                 "The automated marketing engine paid for the entire Plateio subscription in the first week. We sent a targeted 'We Miss You' text to guests who hadn't visited in 60 days and drove 40 covers on a Tuesday night."
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=100&h=100&fit=crop" alt="Marcus Chen" />
                 </div>
                 <div>
                   <div className="font-bold text-black">Marcus Chen</div>
                   <div className="text-sm text-gray-500">Director of Ops, Memento Group</div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Built for any size */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Built For Any Scale</h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">From single-unit passion projects to multi-state enterprise groups.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:border-primary/30 transition-colors">
              <Store className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-3">Single Location</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">Perfect for independent operators looking to professionalize their tech stack and drive profitability without hiring an IT guy.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:border-primary/30 transition-colors">
              <Building className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-3">Multi-Unit Groups</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">Manage menus, reporting, and marketing across 2-10 locations from a single dashboard. Compare store performance instantly.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:border-primary/30 transition-colors">
              <Landmark className="w-8 h-8 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-3">Enterprise</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">Franchise-level permissions, advanced API access, custom SSO, and dedicated success managers for massive operations.</p>
            </div>
          </div>
        </div>

        {/* Operator CTA */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="max-w-4xl mx-auto bg-black rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/20 blur-[100px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Ready to join the elite?</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto relative z-10 font-medium">
            Get a tailored demo of Plateio based on your restaurant's specific service model and size.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
             <Link href="/demo" className="w-full sm:w-auto bg-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all">
               Book a Custom Demo
             </Link>
             <Link href="/pricing" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all flex items-center justify-center group">
               View Pricing <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

