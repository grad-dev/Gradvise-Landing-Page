'use client';

import { Menu, X, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Menu', path: '/menu' },
  { label: 'Services', path: '/services' },
  { label: 'Restaurant', path: '/restaurant' },
  { label: 'Blog', path: '/blog' },
];

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div 
            className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out rounded-full ${
              scrolled 
                ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] border border-gray-200/50 h-16 max-w-5xl px-6' 
                : 'bg-transparent h-16 max-w-7xl px-4'
            }`}
          >

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary rounded-xl rotate-[10deg] group-hover:rotate-[20deg] scale-95 group-hover:scale-105 opacity-20 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                  <span className="text-white font-black text-sm tracking-tight">G</span>
                </div>
              </div>
              <span className={`text-xl font-black tracking-tighter transition-colors duration-200 ${scrolled ? 'text-black group-hover:text-primary' : 'text-black group-hover:text-primary'}`}>
                Plateio
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    className="relative text-[14px] font-bold px-5 py-2 rounded-full transition-all duration-300 group overflow-hidden"
                  >
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                    {/* Hover background */}
                    <span className={`absolute inset-0 rounded-full transition-opacity duration-300 -z-10 ${isActive ? 'bg-red-50 opacity-100' : 'bg-gray-100 opacity-0 group-hover:opacity-100'}`} />
                    <span className={`relative transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-600 group-hover:text-black'}`}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-black text-white text-sm font-bold hover:bg-primary transition-all duration-300 group shadow-lg shadow-black/10 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>

              {/* Mobile burger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-black hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
                aria-label="Toggle menu"
              >
                <span
                  className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
                >
                  <X className="w-5 h-5 text-primary" />
                </span>
                <span
                  className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                >
                  <Menu className="w-5 h-5" />
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col justify-end"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full bg-white rounded-t-[32px] shadow-2xl p-6 pb-12 flex flex-col gap-2"
            >
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
              
              <div className="flex flex-col gap-2 mb-6">
                {navLinks.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.label}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl text-base font-black transition-all duration-200 ${
                        isActive
                          ? 'bg-red-50 text-primary'
                          : 'text-gray-800 bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isActive ? 'text-primary' : 'text-gray-400'
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-red-600 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content hiding under fixed navbar */}
      <div className="h-24" />
    </>
  );
}

