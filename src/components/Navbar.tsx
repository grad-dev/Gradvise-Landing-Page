'use client';

import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Menu', path: '/menu' },
  { label: 'Services', path: '/services' },
  { label: 'Restaurant', path: '/restaurant' },
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_8px_32px_-8px_rgba(0,0,0,0.08)]'
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-8 h-8 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-xl rotate-[6deg] group-hover:rotate-[12deg] transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-sm tracking-tight">G</span>
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-black group-hover:text-primary transition-colors duration-200">
                Gradvise
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    href={item.path}
                    className={`relative text-[13px] font-bold px-4 py-2 rounded-full transition-all duration-200 group ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-primary" />
                    )}
                    {/* Hover background */}
                    <span className="absolute inset-0 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="relative">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 h-9 px-5 rounded-full bg-black text-white text-[13px] font-bold hover:bg-primary transition-all duration-300 group shadow-sm"
              >
                Get in touch
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              {/* Mobile burger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden relative w-9 h-9 rounded-xl flex items-center justify-center text-black hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                <span
                  className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
                >
                  <X className="w-5 h-5" />
                </span>
                <span
                  className={`absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}
                >
                  <Menu className="w-5 h-5" />
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* Bottom border line — subtle red accent on scroll */}
        <div
          className={`absolute bottom-0 inset-x-0 h-px transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'linear-gradient(90deg, transparent, oklch(63% 0.25 35 / 0.3), transparent)' }}
        />
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-16 left-3 right-3 bg-white rounded-[20px] shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
            mobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2'
          }`}
        >
          {/* Nav links */}
          <div className="p-3">
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-150 group ${
                    isActive
                      ? 'bg-red-50 text-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${
                      isActive ? 'text-primary' : 'text-gray-300'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mx-3" />

          {/* CTA */}
          <div className="p-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-black text-white text-sm font-bold hover:bg-primary transition-all duration-300 group"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content hiding under fixed navbar */}
      <div className="h-16" />
    </>
  );
}
