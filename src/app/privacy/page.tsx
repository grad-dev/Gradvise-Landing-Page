'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Server, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: `Plateio Inc. ("Plateio," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and services.

By accessing or using the Plateio platform, you agree to the collection and use of information in accordance with this policy. If you disagree with the terms, please do not access the service.`,
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include:

• Name, email address, and contact details
• Restaurant name, size, and business information
• Payment information (processed securely by Stripe; we do not store raw card numbers)
• Guest data you import or that is generated through your use of the platform (e.g., order history, guest profiles)
• Usage data, log data, and device identifiers

We also collect data automatically when you use our services, including your IP address, browser type, pages visited, and actions taken within the platform.`,
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:

• Provide, operate, and improve the Plateio platform
• Process transactions and send related information including purchase confirmations and invoices
• Send promotional communications (you may opt out at any time)
• Monitor and analyze usage trends to improve your experience
• Detect, investigate, and prevent fraudulent transactions and other illegal activities
• Comply with legal obligations

We do not sell or rent your personal data to third parties for their marketing purposes.`,
  },
  {
    id: 'data-sharing',
    title: '4. Data Sharing & Disclosure',
    content: `We may share your information with:

• Service Providers: Third-party vendors who perform services on our behalf (e.g., Stripe for payments, AWS for hosting, SendGrid for email delivery). These providers are contractually obligated to protect your data.
• Business Partners: With your explicit consent, we may share data with POS providers or delivery platforms you connect to Plateio.
• Legal Requirements: We may disclose information if required by law or in good faith belief that such action is necessary to comply with legal process, protect our rights, or protect the safety of others.
• Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred.

We will never sell your personal data or your guests' data to advertisers or data brokers.`,
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    content: `We implement industry-standard security measures to protect your information:

• All data is encrypted at rest using AES-256 encryption
• All data in transit is protected with TLS 1.3
• We are SOC 2 Type II certified, audited annually by an independent third party
• We maintain a bug bounty program and conduct regular penetration testing
• Access to production systems is restricted to authorized personnel using multi-factor authentication

No method of transmission over the internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your data, but cannot guarantee absolute security.`,
  },
  {
    id: 'your-rights',
    title: '6. Your Rights & Choices',
    content: `Depending on your location, you may have the following rights regarding your personal data:

• Access: Request a copy of the personal data we hold about you
• Correction: Request that we correct inaccurate or incomplete data
• Deletion: Request that we delete your personal data (subject to legal retention requirements)
• Portability: Request a machine-readable copy of your data for transfer to another service
• Opt-out: Unsubscribe from marketing communications at any time via the link in any email

To exercise these rights, please contact our privacy team at gradviseofficial@gmail.com. We will respond to all requests within 30 days.`,
  },
  {
    id: 'cookies',
    title: '7. Cookies & Tracking',
    content: `We use cookies and similar tracking technologies to track activity on our service and hold certain information. For detailed information on how we use cookies and your choices, please see our Cookie Policy.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some features of our service may not function properly.`,
  },
  {
    id: 'contact',
    title: '8. Contact Us',
    content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us:

Email: gradviseofficial@gmail.com

Last updated: May 1, 2026`,
  },
];

const highlights = [
  { icon: Shield, title: 'SOC 2 Type II', desc: 'Independently audited annually' },
  { icon: Lock, title: 'AES-256 Encryption', desc: 'All data encrypted at rest' },
  { icon: Server, title: 'TLS 1.3 in Transit', desc: 'Secure data transmission' },
  { icon: Eye, title: 'No Data Selling', desc: 'Your data is never sold' },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <Shield className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Privacy Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            We take your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">privacy seriously.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            We built Plateio on a foundation of trust. Your data and your guests' data belong to you — period. This policy explains exactly how we handle it.
          </p>
        </motion.div>

        {/* Security Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.2 }}
              className="bg-gray-50 border border-gray-100 rounded-[20px] p-5 text-center"
            >
              <div className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3">
                <h.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm font-black text-black mb-1">{h.title}</p>
              <p className="text-xs text-gray-500 font-medium">{h.desc}</p>
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
          <h2 className="text-2xl font-black text-black tracking-tight mb-3">Have privacy questions?</h2>
          <p className="text-gray-500 font-medium mb-6">Our privacy team responds to all inquiries within 2 business days.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-3.5 px-8 hover:bg-primary transition-all duration-300 group">
            Contact Privacy Team <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

