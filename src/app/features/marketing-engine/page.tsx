'use client';

import { motion } from 'framer-motion';
import { Mail, Zap, ArrowRight, BarChart3, Target, RefreshCw, MessageSquare, Star } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const campaigns = [
  { name: 'Win-Back', trigger: 'Guest inactive for 30, 60, or 90 days', result: '1 in 3 guests returns', color: 'bg-red-50 border-red-100' },
  { name: 'Birthday Reward', trigger: 'Guest\'s birthday month begins', result: '4.2× redemption rate vs. standard promo', color: 'bg-orange-50 border-orange-100' },
  { name: 'Post-Visit Thank You', trigger: '2 hours after a dine-in visit closes', result: '+18% review collection rate', color: 'bg-yellow-50 border-yellow-100' },
  { name: 'Low Spend Alert', trigger: 'Loyal guest hasn\'t ordered in 2 weeks', result: '27% average increase in visit frequency', color: 'bg-blue-50 border-blue-100' },
];

const features = [
  { icon: Zap, title: 'Behavior-Triggered Automation', desc: 'Campaigns fire automatically based on real guest behavior — not generic schedules. Every message is sent at exactly the right moment.' },
  { icon: MessageSquare, title: 'Email & SMS in One Tool', desc: 'Design and send both email and SMS campaigns from the same dashboard. Use the right channel for the right moment without switching tools.' },
  { icon: Target, title: 'Dynamic Segmentation', desc: 'Automatically group guests by spend level, visit frequency, favorite menu items, or days since last visit. No manual list-building.' },
  { icon: BarChart3, title: 'Revenue Attribution', desc: 'See exactly how much revenue each campaign has generated. Know your ROI down to the dollar, not just open rates.' },
  { icon: RefreshCw, title: 'A/B Testing Built In', desc: 'Test subject lines, send times, and offer amounts automatically. The winning variant gets deployed to the rest of your list.' },
  { icon: Star, title: 'Review Generation', desc: 'Automatically prompt satisfied guests to leave Google or Yelp reviews, boosting your local SEO and online reputation.' },
];

const stats = [
  { value: '34%', label: 'Avg. Win-Back Rate' },
  { value: '8.6×', label: 'Average Email ROI' },
  { value: '48%', label: 'Higher Email Open Rate vs. Industry' },
  { value: '2.4M+', label: 'Campaigns Sent' },
];

export default function MarketingEnginePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-20 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <Mail className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Marketing Engine</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            Marketing that runs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">while you sleep.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Plateio's Marketing Engine automatically sends the right message to the right guest at the right time — turning one-time visitors into lifelong regulars without any manual effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-3.5 px-8 hover:bg-primary transition-all duration-300 group">
              Start Free Trial <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center bg-gray-50 border border-gray-200 text-black font-bold rounded-full py-3.5 px-8 hover:border-gray-300 transition-all duration-300">
              All Features
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

        {/* Campaign Examples */}
        <div className="mb-24">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-3">Pre-built campaigns, ready to launch</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Activate any of these proven campaigns in one click. No copywriting, no coding required.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {campaigns.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}
                className={`border rounded-[28px] p-7 ${c.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-black text-black">{c.name}</h3>
                  <span className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full">Auto</span>
                </div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Trigger:</p>
                <p className="text-sm text-gray-500 font-medium mb-4">{c.trigger}</p>
                <p className="text-sm text-gray-600 font-semibold mb-1">Result:</p>
                <p className="text-sm font-black text-black">{c.result}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-24">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-3">Everything you need to grow</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">A complete marketing toolkit, purpose-built for restaurants.</p>
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
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-3">Start winning back guests today.</h2>
            <p className="text-white/60 font-medium max-w-lg">Free 30-day trial. No credit card required. Full access to every campaign template.</p>
          </div>
          <Link href="/contact" className="relative z-10 whitespace-nowrap inline-flex items-center justify-center bg-white text-black font-bold rounded-full py-3.5 px-8 hover:bg-gray-100 transition-colors group">
            Start Free Trial <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

