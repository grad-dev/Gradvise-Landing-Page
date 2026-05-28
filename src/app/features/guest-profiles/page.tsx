'use client';

import { motion } from 'framer-motion';
import { Users, Heart, ArrowRight, Calendar, Star, ShoppingBag, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const profileData = [
  { label: 'Favorite Dish', value: 'Truffle Risotto' },
  { label: 'Dietary Restrictions', value: 'Gluten-free' },
  { label: 'Lifetime Spend', value: '$3,842' },
  { label: 'Total Visits', value: '47 visits' },
  { label: 'Last Visit', value: 'May 15, 2026' },
  { label: 'Average Order Value', value: '$81.75' },
  { label: 'Preferred Day', value: 'Friday evenings' },
  { label: 'Anniversary', value: 'June 3rd' },
];

const features = [
  { icon: ShoppingBag, title: 'Automatic Order Tracking', desc: 'Every dine-in, takeout, and delivery order is captured and added to the guest\'s profile automatically — no manual data entry required.' },
  { icon: Calendar, title: 'Important Date Capture', desc: 'Birthdays and anniversaries are collected through your booking system and order flow, enabling perfectly-timed personal outreach.' },
  { icon: Star, title: 'Preference Learning', desc: 'The system identifies each guest\'s favorite dishes, dietary restrictions, and seating preferences over time, without any surveys.' },
  { icon: Heart, title: 'Allergy & Dietary Flags', desc: 'Critical allergy information is prominently displayed on the guest profile and surfaced automatically when that guest books a table.' },
  { icon: Zap, title: 'Front-of-House Integration', desc: 'When a guest checks in, your host or server sees a brief profile summary — "birthday this month", "usually orders the salmon" — right on the POS.' },
  { icon: BarChart3, title: 'Cohort Analysis', desc: 'Understand how different guest segments (new, loyal, lapsed) are trending in terms of spend, frequency, and satisfaction over time.' },
];

const stats = [
  { value: '100%', label: 'Automatic Data Capture' },
  { value: '3.4×', label: 'Higher Repeat Visit Rate' },
  { value: '94%', label: 'Guest Satisfaction Score' },
  { value: '$81', label: 'Avg Spend Uplift Per Personalized Visit' },
];

export default function GuestProfilesPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-20 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <Users className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Guest Profiles (CRM)</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            Treat every guest like{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">your best regular.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Plateio automatically builds a rich, living profile for every guest — capturing their orders, preferences, allergies, and special dates — so you can deliver a personal experience at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-3.5 px-8 hover:bg-primary transition-all duration-300 group">
              See It in Action <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center bg-gray-50 border border-gray-200 text-black font-bold rounded-full py-3.5 px-8 hover:border-gray-300 transition-all duration-300">
              All Features
            </Link>
          </div>
        </motion.div>

        {/* Profile Card Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="max-w-3xl mx-auto mb-24 bg-gray-50 border border-gray-200 rounded-[32px] overflow-hidden"
        >
          <div className="bg-black px-8 py-5 flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center text-white font-black text-lg">J</div>
            <div>
              <p className="text-white font-black text-base">Jennifer Walsh</p>
              <p className="text-white/50 text-xs font-medium">Guest since March 2022 · VIP Member</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              {[1,2,3,4,5].map(n => <Star key={n} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
            </div>
          </div>
          <div className="p-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {profileData.map(({ label, value }) => (
              <div key={label} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
                <p className="text-sm font-black text-black leading-snug">{value}</p>
              </div>
            ))}
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

        {/* Features Grid */}
        <div className="mb-24">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-3">The complete guest intelligence platform</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Everything you need to know about your guests, automatically collected and organized.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}
                className="bg-gray-50 rounded-[24px] border border-gray-100 p-7 hover:border-red-200 hover:shadow-md transition-all"
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
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-3">Know your guests better than they know themselves.</h2>
            <p className="text-white/60 font-medium max-w-lg">Start building rich guest profiles from day one. No data migration required.</p>
          </div>
          <Link href="/contact" className="relative z-10 whitespace-nowrap inline-flex items-center justify-center bg-white text-black font-bold rounded-full py-3.5 px-8 hover:bg-gray-100 transition-colors group">
            Start Free Trial <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

