'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { motion } from 'framer-motion';

export default function Hero() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.2}px) scale(1.03)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-[760px] lg:h-screen lg:min-h-[780px] lg:max-h-[1080px] w-full flex flex-col justify-between items-center overflow-hidden isolate"
      id="hero"
    >
      {/* 1. Luminous Architectural Sunset Palace Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-100 ease-out"
      >
        <Image
          src="/images/hero-cinematic.jpg"
          alt="شركة إشبيلية للتطوير العقاري - مشروعات معمارية فاخرة"
          fill
          priority
          className="object-cover object-center brightness-[0.92] contrast-[1.05]"
          sizes="100vw"
        />
      </div>

      {/* 2. Soft Contrast Vignette Overlays (keeps sunset & glowing palace visible, like in the mockup) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40 pointer-events-none" />

      {/* Spacing top to account for header */}
      <div className="pt-24 sm:pt-28" />

      {/* 3. Center Stage Content (Floating Open Design - Exactly matching mockup) */}
      <div className="section-container relative z-10 text-center my-auto flex flex-col items-center">
        {/* Elegant Kicker Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-ish-gold/50 text-ish-gold text-xs sm:text-sm font-medium mb-5 shadow-lg"
        >
          <span className="text-ish-gold font-bold">✦</span>
          <span>
            {isAr
              ? 'تطوير عقاري بمعايير استثنائية - مدينة السادات'
              : 'Exceptional Real Estate Development - Sadat City'}
          </span>
          <span className="text-ish-gold font-bold">✦</span>
        </motion.div>

        {/* Big Dominant Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hero-3d-title text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black leading-[1.18] text-ish-white mb-5 tracking-tight"
        >
          {isAr ? (
            <>
              نصنع <span className="gold-gradient-text">المستقبل</span> <span className="gold-gradient-text">ونبني</span> الثقة
            </>
          ) : (
            <>
              Building the <span className="gold-gradient-text">Future</span>, Crafting <span className="gold-gradient-text">Trust</span>
            </>
          )}
        </motion.h1>

        {/* Subtitle Paragraph with 3D Text Shadow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="hero-3d-text text-white/95 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-medium"
        >
          {isAr ? (
            <>
              مشروعات سكنية وتجارية بتصميم مميز، تنفيذ موثوق، وقيمة تحافظ على مكانتها
              <br className="hidden sm:inline" />
              {' '}في مدينة السادات
            </>
          ) : (
            <>
              Residential & commercial developments with distinctive design, reliable execution,
              <br className="hidden sm:inline" />
              and lasting value in Sadat City
            </>
          )}
        </motion.p>

        {/* Dual Action CTA Buttons (Centered Side-by-Side) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-3.5 sm:gap-5 mb-10"
        >
          {/* Primary CTA (Right in RTL): Discover Projects */}
          <Link
            href="/projects"
            className="btn-gold rounded-full text-sm sm:text-base font-bold px-7 sm:px-9 py-3.5 shadow-xl shadow-black/60 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
            id="hero-cta-primary"
          >
            <span>{isAr ? 'اكتشف مشروعاتنا' : 'Explore Our Projects'}</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Secondary CTA (Left in RTL): Develop Your Land */}
          <Link
            href="/#land-owners"
            className="rounded-full text-sm sm:text-base font-bold px-7 sm:px-9 py-3.5 bg-black/45 hover:bg-black/70 backdrop-blur-md border border-white/35 hover:border-ish-gold text-white shadow-xl shadow-black/60 flex items-center justify-center transition-all duration-300 hover:scale-105"
            id="hero-cta-secondary"
          >
            <span>{isAr ? 'طوّر أرضك معنا' : 'Develop Your Land'}</span>
          </Link>
        </motion.div>

        {/* 4. The 4 Stats Floating Bar with Exact Metrics and Line-Art Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="w-full max-w-4xl mx-auto rounded-2xl bg-black/40 backdrop-blur-xl border border-ish-gold/30 px-4 sm:px-8 py-4 shadow-2xl shadow-black/80 flex flex-wrap items-center justify-between sm:justify-around gap-4"
        >
          {/* Stat 1: +2000 رخصة معتمدة */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 rounded-xl bg-ish-gold/15 border border-ish-gold/35 flex items-center justify-center text-ish-gold shrink-0">
              <svg className="w-5 h-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5m0 0L12 5.25l7.5 5.25" />
              </svg>
            </div>
            <div className="text-start">
              <span className="block text-xl sm:text-2xl font-black text-white leading-tight" dir="ltr">
                +2000
              </span>
              <span className="block text-[11px] sm:text-xs text-ish-gray-light font-medium whitespace-nowrap">
                {isAr ? 'رخصة معتمدة' : 'Approved Licenses'}
              </span>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-px bg-white/15" />

          {/* Stat 2: 3 مشروعات مميزة */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 rounded-xl bg-ish-gold/15 border border-ish-gold/35 flex items-center justify-center text-ish-gold shrink-0">
              <svg className="w-5 h-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <div className="text-start">
              <span className="block text-xl sm:text-2xl font-black text-white leading-tight">
                3
              </span>
              <span className="block text-[11px] sm:text-xs text-ish-gray-light font-medium whitespace-nowrap">
                {isAr ? 'مشروعات مميزة' : 'Featured Projects'}
              </span>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-px bg-white/15" />

          {/* Stat 3: 9 مراحل متكاملة */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 rounded-xl bg-ish-gold/15 border border-ish-gold/35 flex items-center justify-center text-ish-gold shrink-0">
              <svg className="w-5 h-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-start">
              <span className="block text-xl sm:text-2xl font-black text-white leading-tight">
                9
              </span>
              <span className="block text-[11px] sm:text-xs text-ish-gray-light font-medium whitespace-nowrap">
                {isAr ? 'مراحل عمل متكاملة' : 'Integrated Stages'}
              </span>
            </div>
          </div>

          <div className="hidden md:block h-8 w-px bg-white/15" />

          {/* Stat 4: 110م² حدائق خاصة */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 rounded-xl bg-ish-gold/15 border border-ish-gold/35 flex items-center justify-center text-ish-gold shrink-0">
              <svg className="w-5 h-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </div>
            <div className="text-start">
              <span className="block text-xl sm:text-2xl font-black text-white leading-tight">
                110م²
              </span>
              <span className="block text-[11px] sm:text-xs text-ish-gray-light font-medium whitespace-nowrap">
                {isAr ? 'حدائق خاصة' : 'Private Gardens'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. Bottom Scroll Down Indicator */}
      <div className="relative z-10 pb-5 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-ish-gray-light text-[11px] tracking-wider uppercase font-semibold">
            {isAr ? 'إستكشف عالم أشبيلية' : 'Explore Ishbilia World'}
          </span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-ish-gold to-transparent animate-pulse" />
        </motion.div>
      </div>

      {/* Seamless bottom fade — no hard edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-secondary)] via-[var(--bg-secondary)]/60 to-transparent pointer-events-none" />
    </section>
  );
}
