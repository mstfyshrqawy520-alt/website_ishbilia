'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageProvider';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { key: 'home', labelAr: 'الرئيسية', labelEn: 'Home', href: '/' },
  { key: 'about', labelAr: 'عن إشبيلية', labelEn: 'About Us', href: '/about' },
  { key: 'services', labelAr: 'خدماتنا', labelEn: 'Services', href: '/services' },
  { key: 'projects', labelAr: 'مشاريعنا', labelEn: 'Projects', href: '/projects' },
  { key: 'whyIshbilia', labelAr: 'لماذا إشبيلية', labelEn: 'Why Ishbilia', href: '/why-ishbilia' },
  { key: 'contact', labelAr: 'تواصل معنا', labelEn: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const { toggleLanguage, lang } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // Only hide/show after passing the hero area (~100px)
      if (scrollY > 100) {
        if (scrollY > lastScrollY + 5) {
          // Scrolling DOWN → hide
          setHidden(true);
        } else if (scrollY < lastScrollY - 5) {
          // Scrolling UP → show
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          hidden && !mobileOpen
            ? '-translate-y-full'
            : 'translate-y-0'
        } ${
          scrolled
            ? 'bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-ish-gold/20 shadow-xl shadow-black/50 py-3'
            : 'bg-black/20 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo & Brand Name */}
          <div className="flex-1 flex justify-start items-center">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              id="header-logo"
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-ish-gold/40 shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.jpg"
                  alt="Ishbilia Logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-ish-gold font-bold text-lg sm:text-xl tracking-wide leading-tight group-hover:text-ish-gold-light transition-colors">
                  {lang === 'ar' ? 'أشبيلية' : 'ISHBILIA'}
                </span>
                <span className="text-[10px] text-ish-gray-light tracking-wider uppercase leading-none mt-0.5">
                  {lang === 'ar' ? 'للتطوير العقاري' : 'Real Estate'}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links with Equal Spacing & Thin Gold Underline */}
          <nav
            className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 shrink-0"
            id="desktop-nav"
          >
            {navLinks.map(({ labelAr, labelEn, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm py-2 px-1 relative group transition-colors duration-200 outline-none focus:outline-none focus:ring-0 select-none ${
                    isActive
                      ? 'text-ish-gold font-bold'
                      : 'text-ish-white/90 hover:text-ish-gold font-medium'
                  }`}
                >
                  <span className="relative z-10">{lang === 'ar' ? labelAr : labelEn}</span>
                  {/* Clean thin gold underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-ish-gold transition-all duration-300 pointer-events-none ${
                      isActive
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Actions: Refined Language Switch + CTA */}
          <div className="flex-1 flex justify-end items-center gap-3">
            {/* Consultation CTA Button - Gold Pill with Calendar Icon */}
            <Link
              href="/consultation"
              className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2 rounded-full bg-gradient-to-r from-ish-gold-light to-ish-gold text-ish-black hover:brightness-110 shadow-md hover:shadow-ish-gold/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              id="header-cta"
            >
              <svg
                className="w-4 h-4 text-ish-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5"
                />
              </svg>
              <span>{lang === 'ar' ? 'طلب استشارة' : 'Consultation'}</span>
            </Link>

            {/* Language Switcher - Dark Capsule with Gold Indicator Dot */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:border-ish-gold/50 transition-all duration-300"
              id="lang-toggle"
              aria-label="Switch Language"
            >
              <span className="w-2 h-2 rounded-full bg-ish-gold" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-ish-gold hover:bg-white/5 transition-colors focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <span
                  className={`block h-0.5 w-6 bg-ish-gold rounded transition-all duration-300 ${
                    mobileOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-ish-gold rounded transition-all duration-300 ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-ish-gold rounded transition-all duration-300 ${
                    mobileOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ish-black/98 backdrop-blur-2xl lg:hidden flex flex-col"
            id="mobile-menu"
          >
            <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-white/10">
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setMobileOpen(false)}
              >
                <div className="w-9 h-9 rounded-full bg-ish-gold/15 border border-ish-gold/40 flex items-center justify-center text-ish-gold shrink-0">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5m0 0L12 5.25l7.5 5.25" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-ish-gold font-bold text-lg tracking-wide leading-tight">
                    {lang === 'ar' ? 'أشبيلية' : 'ISHBILIA'}
                  </span>
                  <span className="text-[10px] text-ish-gray-light tracking-wider uppercase leading-none mt-0.5">
                    {lang === 'ar' ? 'للتطوير العقاري' : 'Real Estate'}
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full bg-white/5 border border-ish-gold/30 text-ish-gold hover:bg-ish-gold/20 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-5 py-6 px-6 overflow-y-auto">
              {navLinks.map(({ labelAr, labelEn, href }, index) => {
                const isActive = pathname === href;
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-xl font-medium transition-colors ${
                        isActive
                          ? 'text-ish-gold font-bold'
                          : 'text-ish-white/90 hover:text-ish-gold'
                      }`}
                    >
                      {lang === 'ar' ? labelAr : labelEn}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="w-full max-w-xs mt-4 pt-4 border-t border-white/10 flex flex-col gap-3"
              >
                <Link
                  href="/consultation"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 text-center text-sm font-bold rounded-full bg-gradient-to-r from-ish-gold to-ish-gold-dark text-ish-black shadow-lg"
                >
                  {lang === 'ar' ? 'طلب استشارة' : 'Consultation'}
                </Link>

                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileOpen(false);
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold rounded-full border border-ish-gold/40 text-ish-gold hover:bg-ish-gold/10"
                >
                  {lang === 'ar' ? 'English' : 'عربي'}
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
