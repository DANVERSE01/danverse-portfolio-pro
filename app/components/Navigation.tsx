'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about', color: 'from-blue-500 to-blue-600', number: '01' },
  { label: 'Services', href: '#services', color: 'from-yellow-500 to-orange-500', number: '02' },
  { label: 'Portfolio', href: '#portfolio', color: 'from-purple-500 to-purple-600', number: '03' },
  { label: 'Contact', href: '#contact', color: 'from-pink-500 to-rose-500', number: '04' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <nav className="relative bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 px-6 py-3 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <span className="text-white font-black text-lg">MA</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Muhammed<span className="text-cyan-400">Adel</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative group px-5 py-2.5 rounded-full bg-gradient-to-r ${item.color} hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg`}
              >
                <span className="absolute top-1.5 right-3 text-[10px] font-bold text-white/60">
                  {item.number}
                </span>
                <span className="text-white font-semibold text-sm">{item.label}</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
          >
            <span className="text-sm">Get Started</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">05</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-2xl rounded-3xl border border-white/10 p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-3 rounded-2xl bg-gradient-to-r ${item.color} hover:scale-105 transition-all duration-300 text-left`}
                >
                  <span className="absolute top-2 right-3 text-xs font-bold text-white/60">
                    {item.number}
                  </span>
                  <span className="text-white font-semibold">{item.label}</span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white font-bold hover:scale-105 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
