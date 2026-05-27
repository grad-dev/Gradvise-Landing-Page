'use client';

import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center w-full px-4">
      <div className="bg-black/95 backdrop-blur-md rounded-full pl-6 pr-3 py-2 flex items-center justify-between w-full max-w-5xl shadow-2xl border border-white/10">
        
        {/* Sleek Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-full bg-gradient-hero flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform" />
          <span className="text-xl font-bold font-serif tracking-tight text-white flex items-center gap-1">
            Gradvise
          </span>
        </Link>

        {/* Central Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          {[
            { label: 'About us', path: '#about' },
            { label: 'Menu', path: '#menu' },
            { label: 'Services', path: '#services' },
            { label: 'Restaurant', path: '#restaurant' },
          ].map((item, i) => (
            <Link
              key={item.label}
              href={item.path}
              className={`text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                i === 0 
                  ? 'bg-white text-black' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {i === 0 && <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mr-2 mb-0.5" />}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Panel */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-hero px-6 text-[13px] font-bold text-white shadow-md shadow-primary/20 hover:scale-[1.03] active:scale-[0.97] transition-all"
          >
            <div className="w-3.5 h-3.5 border border-white rounded-full flex items-center justify-center mr-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            Contact
          </Link>
        </div>

        {/* Mobile Toggle Trigger */}
        <button
          type="button"
          className="md:hidden w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors focus:outline-hidden"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-4.5 w-4.5" />
          ) : (
            <Menu className="h-4.5 w-4.5" />
          )}
        </button>

        {/* Mobile Flyout Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-16 inset-x-0 z-50 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden max-w-full shadow-2xl animate-in slide-in-from-top duration-300 overflow-hidden">
            <div className="py-6 flex flex-col space-y-2 px-4">
              <Link href="#about" className="text-sm font-bold text-white px-4 py-3 rounded-lg hover:bg-white/10" onClick={handleToggle}>About us</Link>
              <Link href="#menu" className="text-sm font-bold text-white px-4 py-3 rounded-lg hover:bg-white/10" onClick={handleToggle}>Menu</Link>
              <Link href="#services" className="text-sm font-bold text-white px-4 py-3 rounded-lg hover:bg-white/10" onClick={handleToggle}>Services</Link>
              <Link href="#restaurant" className="text-sm font-bold text-white px-4 py-3 rounded-lg hover:bg-white/10" onClick={handleToggle}>Restaurant</Link>
              <div className="h-px bg-white/10 w-full my-2" />
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-hero px-6 text-sm font-bold text-white shadow-lg shadow-primary/20 w-full text-center mt-2"
                onClick={handleToggle}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
