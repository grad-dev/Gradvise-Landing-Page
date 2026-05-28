'use client';

import { motion } from 'framer-motion';
import { Monitor, Zap, Clock, CheckCircle2, ArrowRight, BarChart3, Wifi } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const howItWorks = [
  { step: '01', title: 'Orders flow in automatically', desc: 'The moment a guest places an order — dine-in, takeout, or delivery — it instantly appears on the Smart KDS without any manual input from your staff.' },
  { step: '02', title: 'Items are routed to the right station', desc: 'Plateio learns your kitchen layout and automatically sends each item to the correct prep station: grill, fry, cold, or expo. No more lost tickets.' },
  { step: '03', title: 'Timers track every item in real-time', desc: 'Color-coded timers turn yellow, then red when items are taking longer than expected, giving your expo chef instant visibility into what needs attention.' },
  { step: '04', title: 'Every second is captured as data', desc: 'Every prep time, delay, and modification is recorded. Over time, the system identifies your slowest menu items, peak bottleneck hours, and top-performing stations.' },
];

const features = [
  { icon: Zap, title: 'Sub-second order delivery', desc: 'Orders appear on the screen in under 500 milliseconds of the guest tapping "Place Order." No lag, no dropped tickets.' },
  { icon: Clock, title: 'Smart timer coloring', desc: 'Configurable color thresholds (green → yellow → red) ensure your team never loses track of order timing during a rush.' },
  { icon: BarChart3, title: 'Live throughput dashboard', desc: 'Monitor tickets per hour, average ticket time, and station load in real-time from any device in the building.' },
  { icon: Wifi, title: 'Offline-first architecture', desc: 'Designed to work even if your internet drops mid-service. All orders queue locally and sync the moment connectivity is restored.' },
  { icon: Monitor, title: 'Multi-screen management', desc: 'Run up to 12 independent KDS screens per location, each showing only the items relevant to that station.' },
  { icon: CheckCircle2, title: 'One-tap item completion', desc: 'Chefs mark individual items or entire tickets complete with a single tap, triggering a notification to your front-of-house team.' },
];

const stats = [
  { value: '22%', label: 'Faster Average Ticket Time' },
  { value: '99.8%', label: 'Order Accuracy Rate' },
  { value: '0', label: 'Dropped Tickets Per Month' },
  { value: '< 2 hrs', label: 'Setup Time' },
];

export default function SmartKDSPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-20 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <Monitor className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Smart KDS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            Your kitchen's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">command center.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Plateio's Smart Kitchen Display System eliminates paper tickets, reduces errors, and gives your expo chef full real-time visibility into every order in the building.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-3.5 px-8 hover:bg-primary transition-all duration-300 group">
              Book a Demo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center bg-gray-50 border border-gray-200 text-black font-bold rounded-full py-3.5 px-8 hover:border-gray-300 transition-all duration-300">
              View All Features
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.2 }}
              className="bg-gray-50 rounded-[24px] border border-gray-100 p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-black text-black mb-2">{s.value}</p>
              <p className="text-sm text-gray-500 font-semibold">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-3">How Smart KDS works</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">From order placement to plate pickup — every step is tracked and optimized.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}
                className="flex gap-6 p-7 bg-white border border-gray-100 rounded-[28px] hover:border-red-200 hover:shadow-md transition-all"
              >
                <span className="text-3xl font-black text-gray-100 leading-none shrink-0">{step.step}</span>
                <div>
                  <h3 className="text-base font-black text-black mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-3">Everything included</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">No add-ons, no hidden fees. Every feature below is included in your subscription.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}
                className="group bg-gray-50 rounded-[24px] border border-gray-100 p-7 hover:border-red-200 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-black text-black mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="bg-black rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-3">See Smart KDS live in your kitchen.</h2>
            <p className="text-white/60 font-medium max-w-lg">Schedule a 20-minute demo and we'll show you exactly how Smart KDS will fit into your current workflow.</p>
          </div>
          <Link href="/contact" className="relative z-10 whitespace-nowrap inline-flex items-center justify-center bg-white text-black font-bold rounded-full py-3.5 px-8 hover:bg-gray-100 transition-colors group">
            Book Free Demo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

