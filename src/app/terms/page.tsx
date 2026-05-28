'use client';

import { motion } from 'framer-motion';
import { FileText, ArrowRight, Shield, Scale } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Plateio platform, website, or any associated services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not access or use the Service.

These Terms apply to all visitors, users, and others who access or use the Service. If you are accessing the Service on behalf of a business or other entity, you represent that you have the authority to bind that entity to these Terms.`,
  },
  {
    id: 'account',
    title: '2. Account Registration & Responsibilities',
    content: `To use most features of the Service, you must register for an account. When you register, you agree to:

• Provide accurate, current, and complete information
• Maintain and promptly update your account information
• Maintain the security of your password and accept all risks of unauthorized access
• Promptly notify us if you discover or suspect any security breaches related to the Service

You are responsible for all activities that occur under your account. Plateio is not liable for any loss or damage arising from your failure to comply with the above requirements.`,
  },
  {
    id: 'subscription',
    title: '3. Subscription & Billing',
    content: `Plateio offers subscription-based access to the Service. By subscribing, you agree to pay all fees in accordance with the pricing and payment terms in effect when you subscribe.

• Subscriptions are billed monthly or annually, in advance
• You authorize Plateio to charge your payment method on a recurring basis
• All fees are non-refundable except as required by law or as explicitly stated in our Refund Policy
• We reserve the right to change pricing with 30 days' notice to existing subscribers
• Failure to pay may result in suspension or termination of your account

Your subscription will automatically renew unless you cancel at least 24 hours before the end of the current billing period.`,
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable Use',
    content: `You agree not to use the Service to:

• Violate any applicable law or regulation
• Infringe the intellectual property rights of others
• Transmit any harmful, offensive, or disruptive content
• Attempt to gain unauthorized access to any portion of the Service or its related systems
• Interfere with or disrupt the integrity or performance of the Service
• Use any automated means to scrape, crawl, or extract data from the Service
• Resell or sublicense access to the Service without written authorization from Plateio

Plateio reserves the right to terminate your access to the Service if we determine, in our sole discretion, that you have violated these terms.`,
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    content: `The Service and its original content, features, and functionality are owned by Plateio Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

You retain ownership of all data and content you upload to the Service ("Customer Data"). By uploading Customer Data, you grant Plateio a limited, non-exclusive license to use, process, and store that data solely to provide the Service.

You may not copy, modify, distribute, sell, or lease any part of the Service, nor may you reverse engineer or attempt to extract the source code of the Service.`,
  },
  {
    id: 'limitation',
    title: '6. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Plateio and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for:

• Any indirect, incidental, special, consequential, or punitive damages
• Any loss of profits, revenue, data, goodwill, or other intangible losses
• Any damages related to your access to, or inability to access, the Service

In no event shall Plateio's total liability to you for all claims relating to the Service exceed the amount paid by you to Plateio in the 12 months preceding the claim.`,
  },
  {
    id: 'termination',
    title: '7. Termination',
    content: `We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.

Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.

You may terminate your account at any time by contacting us. Upon termination, we will delete your data within 30 days, unless we are legally required to retain it.`,
  },
  {
    id: 'governing-law',
    title: '8. Governing Law & Disputes',
    content: `These Terms shall be governed and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.

Any dispute arising from these Terms shall first be attempted to be resolved through good-faith negotiation. If that fails, both parties agree to binding arbitration in New York, NY, administered by the American Arbitration Association.

You waive any right to a jury trial or to participate in a class-action lawsuit or class-wide arbitration.

Last updated: May 1, 2026. Contact: gradviseofficial@gmail.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <FileText className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Terms of Service</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            Clear terms,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">no surprises.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            We've written these terms in plain language so you know exactly what you're agreeing to. If you have questions, our team is always happy to explain.
          </p>
        </motion.div>

        {/* Key Points Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { icon: Shield, title: 'Your data is yours', desc: 'You own all your customer and restaurant data. We only use it to provide the service.' },
            { icon: Scale, title: 'Fair billing', desc: '30 days notice before any price changes. Cancel anytime. Data exported before account closure.' },
            { icon: FileText, title: 'Clear expectations', desc: 'We tell you exactly what you can and cannot do with the platform. No hidden gotchas.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.2 }}
              className="bg-gray-50 border border-gray-100 rounded-[24px] p-7"
            >
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-black text-black mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Policy Content */}
        <div className="space-y-10 mb-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i + 0.3 }}
              className="border-b border-gray-100 pb-10 last:border-0"
            >
              <h2 className="text-xl font-black text-black tracking-tight mb-4">{section.title}</h2>
              <div className="text-gray-600 font-medium leading-relaxed text-sm whitespace-pre-line">{section.content}</div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="bg-gray-50 border border-gray-100 rounded-[32px] p-10 text-center"
        >
          <h2 className="text-2xl font-black text-black tracking-tight mb-3">Have a legal question?</h2>
          <p className="text-gray-500 font-medium mb-6">Our legal team is happy to clarify any terms. Reach us at gradviseofficial@gmail.com.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-3.5 px-8 hover:bg-primary transition-all duration-300 group">
            Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

