'use client';

import { motion } from 'framer-motion';
import { Workflow, ArrowRight, CheckCircle2, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const integrations = [
  { name: 'Toast POS', category: 'Point of Sale', description: 'The most popular restaurant POS. Plateio connects via Toast\'s native API, syncing every order, menu change, and labor clock-in in real-time.', badge: 'Native API', color: 'bg-orange-50 border-orange-100' },
  { name: 'Square for Restaurants', category: 'Point of Sale', description: 'Full order history, menu sync, and payment data pulled directly from Square. Works with both the Counter and KDS hardware.', badge: 'Native API', color: 'bg-blue-50 border-blue-100' },
  { name: 'Clover', category: 'Point of Sale', description: 'Connect your Clover terminal in minutes. All order items, modifiers, and discounts are captured and flow into your Plateio dashboard automatically.', badge: 'Native API', color: 'bg-green-50 border-green-100' },
  { name: 'Lightspeed Restaurant', category: 'Point of Sale', description: 'Used widely in full-service restaurants and hotels. Plateio\'s Lightspeed connection includes floor plan sync and table-level analytics.', badge: 'Native API', color: 'bg-purple-50 border-purple-100' },
  { name: 'OpenTable', category: 'Reservations', description: 'Guest reservation data from OpenTable flows directly into Plateio Guest Profiles, pre-populating party size, preferences, and special occasion notes.', badge: 'Direct Sync', color: 'bg-red-50 border-red-100' },
  { name: 'Resy', category: 'Reservations', description: 'Two-way sync between Resy and Plateio means your team can see reservation context in the Kitchen, and guest behavior from the dining room in Resy.', badge: 'Direct Sync', color: 'bg-yellow-50 border-yellow-100' },
  { name: 'DoorDash', category: 'Delivery', description: 'DoorDash orders appear on your Smart KDS alongside dine-in tickets, with channel-specific timing rules to manage delivery windows accurately.', badge: 'Auto-Import', color: 'bg-gray-50 border-gray-200' },
  { name: 'Uber Eats', category: 'Delivery', description: 'Full order visibility for every Uber Eats ticket. Delivery ETA data is surfaced to your kitchen team to help prioritize order timing.', badge: 'Auto-Import', color: 'bg-gray-50 border-gray-200' },
  { name: 'QuickBooks Online', category: 'Accounting', description: 'Daily revenue, COGS, and labor summaries sync automatically to QuickBooks — eliminating manual journal entries and month-end reconciliation pain.', badge: 'Auto-Sync', color: 'bg-gray-50 border-gray-200' },
];

const categories = ['All', 'Point of Sale', 'Reservations', 'Delivery', 'Accounting'];

const stats = [
  { value: '30+', label: 'Native Integrations' },
  { value: '< 5 min', label: 'Average Setup Time' },
  { value: '100%', label: 'Real-Time Data Sync' },
  { value: '0', label: 'Manual Data Entry Required' },
];

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-20 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <Workflow className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Integrations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            Plug in. Don't{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">rip and replace.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Plateio is designed to sit on top of your existing tech stack. Connect your POS, reservations platform, and delivery apps in minutes — no IT department needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-3.5 px-8 hover:bg-primary transition-all duration-300 group">
              Request an Integration <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

        {/* Category Filter Labels */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map(cat => (
            <span key={cat} className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${cat === 'All' ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}>
              {cat}
            </span>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {integrations.map((intg, i) => (
            <motion.div
              key={intg.name}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.07 * i + 0.3 }}
              className={`group border rounded-[28px] p-7 hover:shadow-lg transition-all ${intg.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{intg.category}</p>
                  <h3 className="text-lg font-black text-black">{intg.name}</h3>
                </div>
                <span className="shrink-0 bg-white border border-gray-200 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-full">{intg.badge}</span>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-5">{intg.description}</p>
              <div className="flex items-center gap-2 text-green-600 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Integration</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 md:p-10">
            <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-black text-black tracking-tight mb-3">Open API for custom builds</h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-6">Don't see your system on the list? Plateio offers a fully-documented REST API with webhooks, so your dev team can connect any platform in hours, not months.</p>
            <a href="#" className="inline-flex items-center text-sm font-bold text-black hover:text-primary transition-colors group">
              Read the API Docs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-black border border-black rounded-[32px] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight mb-3">Enterprise-grade security</h2>
              <p className="text-white/60 font-medium leading-relaxed mb-6">All integration data is transmitted over TLS 1.3 and stored with AES-256 encryption. We are SOC 2 Type II certified and GDPR compliant.</p>
              <Link href="/contact" className="inline-flex items-center text-sm font-bold text-white hover:text-primary transition-colors group">
                Talk to our security team <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-primary to-orange-400 rounded-[40px] p-10 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Missing an integration? Let us know.</h2>
          <p className="text-white/80 font-medium mb-8 max-w-xl mx-auto">We add new integrations every month based on customer demand. Submit a request and we'll prioritize it.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black font-bold rounded-full py-3.5 px-8 hover:bg-gray-100 transition-colors group">
            Request an Integration <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

