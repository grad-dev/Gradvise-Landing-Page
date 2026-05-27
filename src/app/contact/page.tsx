'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const faqs = [
  { q: 'How long does onboarding take?', a: 'Most restaurants are fully onboarded and live within 3–5 business days. Our team handles all the technical setup.' },
  { q: 'Do you offer a free trial?', a: 'Yes — we offer a 30-day free trial with no credit card required. You get full access to all features during that period.' },
  { q: 'What POS systems do you integrate with?', a: 'We natively integrate with Toast, Square, Clover, Lightspeed, and Stripe Terminal, with more on the way.' },
  { q: 'Is my data secure?', a: 'All data is encrypted at rest and in transit using AES-256 and TLS 1.3. We are SOC 2 Type II certified.' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', restaurant: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.firstName} ${form.lastName} – ${form.restaurant}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nRestaurant: ${form.restaurant}\n\n${form.message}`
    );
    window.location.href = `mailto:gradviseofficial@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <Mail className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            We're here to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">help you grow.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Have a question or want a demo? Drop us a message and we'll get back to you.
          </p>

          {/* Email pill */}
          <motion.a
            href="mailto:gradviseofficial@gmail.com"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-gray-50 border border-gray-200 rounded-full hover:border-primary hover:bg-red-50 transition-all duration-300 group"
          >
            <div className="w-8 h-8 bg-red-50 border border-red-100 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <span className="text-base font-black text-black tracking-tight group-hover:text-primary transition-colors">
              gradviseofficial@gmail.com
            </span>
          </motion.a>
        </motion.div>

        {/* Form + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}
            className="lg:col-span-3 bg-gray-50 rounded-[32px] border border-gray-100 p-8 md:p-10"
          >
            <h2 className="text-2xl font-black text-black tracking-tight mb-2">Send us a message</h2>
            <p className="text-gray-500 font-medium mb-8">Fill in the form and we'll get back to you as soon as possible.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-[24px] p-10 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-black text-black mb-2">Message sent!</h3>
                <p className="text-gray-500 font-medium text-sm">Your email client should have opened with the message pre-filled. We'll reply as soon as we can.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">First Name</label>
                    <input name="firstName" type="text" required placeholder="Jane" value={form.firstName} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Last Name</label>
                    <input name="lastName" type="text" required placeholder="Smith" value={form.lastName} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Your Email</label>
                  <input name="email" type="email" required placeholder="jane@restaurantname.com" value={form.email} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">Restaurant Name</label>
                  <input name="restaurant" type="text" placeholder="The Golden Fork" value={form.restaurant} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-2">How can we help?</label>
                  <textarea name="message" required rows={4} placeholder="Tell us about your restaurant and what you need..." value={form.message} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-4 px-8 hover:bg-primary transition-all duration-300 group">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-400 font-medium">
                  Sends to <span className="font-bold text-gray-600">gradviseofficial@gmail.com</span>
                </p>
              </form>
            )}
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100">
              <h3 className="text-xl font-black text-black mb-6">Quick Answers</h3>
              <div className="space-y-6">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <p className="text-sm font-black text-black mb-2">{q}</p>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

