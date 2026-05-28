'use client';

import { motion } from 'framer-motion';
import { Cookie, ArrowRight, ToggleLeft, BarChart3, Shield } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const cookieTypes = [
  {
    icon: Shield,
    name: 'Strictly Necessary',
    tag: 'Always On',
    tagColor: 'bg-green-50 text-green-700',
    desc: 'These cookies are essential for the website and platform to function correctly. They enable core features like authentication, security, and session management. They cannot be disabled.',
    examples: ['Session token (keeps you logged in)', 'CSRF protection token', 'Load balancer cookie'],
  },
  {
    icon: BarChart3,
    name: 'Analytics & Performance',
    tag: 'Optional',
    tagColor: 'bg-blue-50 text-blue-700',
    desc: 'These cookies help us understand how visitors use our website and platform, so we can improve the experience. All data is aggregated and anonymous.',
    examples: ['Page views and session duration', 'Button click tracking', 'Error and crash reporting'],
  },
  {
    icon: ToggleLeft,
    name: 'Functional & Preference',
    tag: 'Optional',
    tagColor: 'bg-purple-50 text-purple-700',
    desc: 'These cookies allow us to remember your preferences and customize your experience, such as your language, theme, and dashboard layout settings.',
    examples: ['Preferred language', 'Dashboard layout settings', 'Notification preferences'],
  },
];

const sections = [
  {
    id: 'what-are-cookies',
    title: '1. What Are Cookies?',
    content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the website operators.

Cookies set by the website operator (in this case, Plateio) are called "first-party cookies." Cookies set by third parties (such as analytics services) are called "third-party cookies." Both types may be session cookies (deleted when you close your browser) or persistent cookies (stored for a set period of time).`,
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Cookies',
    content: `Plateio uses cookies for the following purposes:

• Authentication: To keep you signed in to your account and verify your identity securely.
• Security: To detect and prevent fraudulent activity and protect your account.
• Analytics: To understand how our website and platform are used, so we can improve performance and usability.
• Preferences: To remember your settings and personalize your experience.
• Communications: To understand how our email campaigns are performing (e.g., open rates, click-through rates).

We do not use cookies for advertising targeting or sell cookie data to third parties.`,
  },
  {
    id: 'third-party',
    title: '3. Third-Party Cookies',
    content: `Some cookies on our site are placed by third-party services we use. These currently include:

• Google Analytics: Used to measure website traffic and user behavior. Data is anonymized and aggregated. You can opt out using the Google Analytics Opt-out Browser Add-on.
• Stripe: Our payment processor places functional cookies to enable secure payment processing during checkout.
• Intercom: Our customer support tool uses cookies to power the live chat widget and help desk functionality.

These third-party providers have their own privacy policies governing how they use such information. We encourage you to review them.`,
  },
  {
    id: 'managing-cookies',
    title: '4. Managing & Deleting Cookies',
    content: `You have the right to accept or reject optional cookies. You can manage your cookie preferences in the following ways:

Browser Settings: Most browsers allow you to refuse cookies, delete existing cookies, or be notified when new cookies are set. Refer to your browser's help documentation for specific instructions:
• Chrome: Settings → Privacy and Security → Cookies and other site data
• Firefox: Options → Privacy & Security → Cookies and Site Data
• Safari: Preferences → Privacy → Manage Website Data
• Edge: Settings → Cookies and Site Permissions → Cookies and Site Data

Cookie Preference Center: You can also update your cookie preferences at any time by clicking "Cookie Settings" in the footer of our website.

Please note that disabling certain cookies may affect the functionality of the Plateio platform.`,
  },
  {
    id: 'updates',
    title: '5. Updates to This Policy',
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, law, or our business practices. When we make significant changes, we will notify you through the platform or by email.

The date at the bottom of this page indicates when this policy was last updated.

If you have questions about our use of cookies, please contact us at gradviseofficial@gmail.com.

Last updated: May 1, 2026`,
  },
];

export default function CookiesPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white pt-24 pb-20 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        {/* Hero */}
        <motion.div {...fadeUp} className="text-center mb-16 max-w-3xl mx-auto pt-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-primary mb-8 shadow-sm">
            <Cookie className="w-4 h-4" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Cookie Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-black mb-6 tracking-tighter leading-[1.1]">
            We use cookies.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Here's why.</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            We believe in full transparency about how we use cookies. This policy explains exactly what cookies we use, why we use them, and how you can control them.
          </p>
        </motion.div>

        {/* Cookie Types */}
        <div className="space-y-5 mb-16">
          {cookieTypes.map((type, i) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.2 }}
              className="bg-gray-50 border border-gray-100 rounded-[28px] p-7 md:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                <div className="w-11 h-11 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                  <type.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-lg font-black text-black">{type.name}</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${type.tagColor}`}>{type.tag}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{type.desc}</p>
                </div>
              </div>
              <div className="ml-0 sm:ml-[60px] bg-white border border-gray-100 rounded-xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Examples</p>
                <ul className="space-y-2">
                  {type.examples.map(ex => (
                    <li key={ex} className="text-sm text-gray-600 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 mb-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i + 0.4 }}
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
          <h2 className="text-2xl font-black text-black tracking-tight mb-3">Questions about cookies?</h2>
          <p className="text-gray-500 font-medium mb-6">We're happy to explain anything in plain language. Reach out any time.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white font-bold rounded-full py-3.5 px-8 hover:bg-primary transition-all duration-300 group">
            Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

