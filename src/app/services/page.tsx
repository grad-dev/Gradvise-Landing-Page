'use client';

import { motion } from 'framer-motion';
import { Layers, Workflow, Mail, Users, ArrowRight, Package, Clock, BarChart4 } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Hero Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto pt-10">
          <motion.div initial="initial" animate="animate" variants={fadeUp}>
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
               <Layers className="w-4 h-4" />
               <span className="text-xs font-bold tracking-[0.2em] uppercase">Unified Ecosystem</span>
             </div>
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
               Everything you need. <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Nothing you don't.</span>
             </h1>
             <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
               Stop taping together five different software subscriptions. Plateio provides a seamless suite of services that talk to each other natively, reducing costs and eliminating data silos.
             </p>
          </motion.div>
        </div>

        {/* Expanded Bento Grid for Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
           
           {/* Marketing */}
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gray-50 rounded-[32px] border border-gray-100 p-8 flex flex-col group hover:border-red-100 hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-black mb-6 group-hover:text-primary transition-colors">
               <Mail className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black tracking-tight text-black mb-3">Marketing Engine</h2>
             <p className="text-gray-500 font-medium leading-relaxed">
               Automated email and SMS campaigns triggered by guest behavior. Win back lost guests before they realize they've been gone.
             </p>
           </motion.div>

           {/* CRM */}
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gray-50 rounded-[32px] border border-gray-100 p-8 flex flex-col group hover:border-red-100 hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-black mb-6 group-hover:text-primary transition-colors">
               <Users className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black tracking-tight text-black mb-3">Guest Profiles (CRM)</h2>
             <p className="text-gray-500 font-medium leading-relaxed">
               Every order, allergy, and anniversary tracked automatically. Treat every first-time visitor like a 10-year regular.
             </p>
           </motion.div>

           {/* Inventory */}
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-gray-50 rounded-[32px] border border-gray-100 p-8 flex flex-col group hover:border-red-100 hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-black mb-6 group-hover:text-primary transition-colors">
               <Package className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black tracking-tight text-black mb-3">Smart Inventory</h2>
             <p className="text-gray-500 font-medium leading-relaxed">
               Theoretical vs. actual variance tracking. Know exactly where your food cost is bleeding in real-time.
             </p>
           </motion.div>
           
           {/* Labor */}
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-gray-50 rounded-[32px] border border-gray-100 p-8 flex flex-col group hover:border-red-100 hover:shadow-lg transition-all">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-black mb-6 group-hover:text-primary transition-colors">
               <Clock className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black tracking-tight text-black mb-3">Labor Scheduling</h2>
             <p className="text-gray-500 font-medium leading-relaxed">
               AI-driven schedules based on projected sales volume. Never be understaffed during a rush or overstaffed on a Tuesday.
             </p>
           </motion.div>
           
           {/* Analytics */}
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-gray-50 rounded-[32px] border border-gray-100 p-8 flex flex-col group hover:border-red-100 hover:shadow-lg transition-all md:col-span-2 lg:col-span-2">
             <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-black mb-6 group-hover:text-primary transition-colors">
               <BarChart4 className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black tracking-tight text-black mb-3">Enterprise Analytics Dashboard</h2>
             <p className="text-gray-500 font-medium leading-relaxed max-w-2xl">
               Consolidate data across all your locations into one crystal-clear dashboard. Monitor labor percentages, COGS, and revenue per available seat hour (RevPASH) from your phone, anywhere in the world.
             </p>
           </motion.div>

        </div>

        {/* Deep Integrations (Full Width) */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="w-full bg-black rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 max-w-2xl mb-8 md:mb-0">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
              <Workflow className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">Deep POS Integrations</h2>
            <p className="text-gray-400 font-medium leading-relaxed text-lg">
              Already use Toast, Square, or Stripe? Plateio plugs right into your existing Point of Sale system via native APIs so you don't have to rip and replace your hardware.
            </p>
          </div>
          <Link href="/demo" className="relative z-10 whitespace-nowrap inline-flex items-center justify-center bg-white text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
            Explore Integrations <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

