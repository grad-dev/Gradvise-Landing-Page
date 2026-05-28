'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, Heart, Rocket, Shield, Coffee, Send, User, Mail, FileText } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const perks = [
  { icon: Rocket, title: 'Equity from Day One', desc: "Join early and own a real piece of what we're building. Every team member gets meaningful equity." },
  { icon: Heart, title: 'Flexible & Remote', desc: 'Work from anywhere in the world. We care about output, not office hours.' },
  { icon: Coffee, title: 'Direct Impact', desc: 'With a team of two, your work ships fast and matters immediately. No bureaucracy, no waiting.' },
  { icon: Shield, title: 'Learn Everything', desc: 'In a small team you wear many hats — which means you grow faster than anywhere else.' },
];

const team = [
  { initials: 'A', role: 'Co-Founder & CEO', focus: 'Product strategy, restaurant operations, growth' },
  { initials: 'B', role: 'Co-Founder & CTO', focus: 'Engineering, infrastructure, integrations' },
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '21ac5179-2398-48f3-9b17-f333e4dbe3e9',
          subject: `Career Application – ${form.role || 'General'} – ${form.name}`,
          from_name: form.name,
          email: form.email,
          Role: form.role,
          Message: form.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-20 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <Briefcase className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Join the Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            Build the future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">restaurant tech.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            We're a two-person team on a mission to make restaurant operations beautiful and profitable. We move fast, ship daily, and solve real problems for real restaurant owners.
          </p>
        </motion.div>

        {/* Team Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="bg-black rounded-[40px] p-10 md:p-16 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
          <div className="relative z-10">
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-8 text-center">The Plateio Team</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {team.map((member) => (
                <div key={member.role} className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-400 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-5">
                    {member.initials}
                  </div>
                  <p className="text-white font-black text-base mb-1">{member.role}</p>
                  <p className="text-white/50 text-sm font-medium leading-relaxed">{member.focus}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/30 text-sm font-medium mt-8">We're small by design — so every new member truly shapes what we build.</p>
          </div>
        </motion.div>

        {/* Why Join */}
        <div className="mb-20">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-3">Why join at this stage?</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Early-stage means early opportunity. Here's what that looks like at Plateio.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.3 }}
                className="bg-gray-50 rounded-[24px] border border-gray-100 p-7 hover:border-red-200 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-black text-black mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-3">Say hello.</h2>
            <p className="text-gray-500 font-medium max-w-lg mx-auto">
              No open roles listed — because we'd rather hear from the right person than post a generic job description.
              Tell us who you are and what you'd love to build.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-[32px] p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Send className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-black mb-2">Message sent!</h3>
              <p className="text-gray-500 font-medium">We've received your application and will get back to you within 2–3 days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 md:p-10 space-y-5">
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  <User className="w-3.5 h-3.5" /> Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  <Mail className="w-3.5 h-3.5" /> Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  <Briefcase className="w-3.5 h-3.5" /> What would you love to do?
                </label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select an area...</option>
                  <option value="Engineering">Engineering / Development</option>
                  <option value="Design">Design / UX</option>
                  <option value="Marketing">Marketing / Growth</option>
                  <option value="Sales">Sales / Business Development</option>
                  <option value="Operations">Operations / Customer Success</option>
                  <option value="Other">Something else entirely</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  <FileText className="w-3.5 h-3.5" /> Tell us about yourself
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What have you built? What do you care about? Why Plateio? Drop a link to your portfolio or LinkedIn if you have one."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-4 px-8 hover:bg-primary transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Application'}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
              </button>

              <p className="text-center text-xs text-gray-400 font-medium">
                Sends to <span className="font-bold text-gray-600">gradviseofficial@gmail.com</span> · We reply within 2–3 days
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}

