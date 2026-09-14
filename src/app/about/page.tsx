'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';

// Custom animated counter using IntersectionObserver
function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    const duration = 1800;
    const steps = 45;
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
  }, [target, hasStarted]);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {prefix}{count.toLocaleString('en-US')}{suffix}
    </span>
  );
}

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';
  const chaptersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (!prefersReduced) {
              el.style.transition =
                'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)';
            }
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    chaptersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setChapterRef = (index: number) => (el: HTMLDivElement | null) => {
    chaptersRef.current[index] = el;
  };

  // Chapter Icons mapping for visual richness
  const chapterIcons = [
    // 01: Planning
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    // 02: Location
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    // 03: Architecture & Design
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    // 04: Licensure & Legal
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    // 05: Pricing & Feasibility
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    // 06: Structural Execution
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    // 07: Finishes & Quality Control
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    // 08: Meters & Services Handover
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    // 09: After-Sales Service
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  ];

  return (
    <div className="bg-ish-black text-ish-white min-h-screen selection:bg-ish-gold selection:text-black">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION                                                */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden bg-gradient-to-b from-ish-black via-[#0D1522] to-ish-black">
        {/* Architectural backdrop */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Image
            src="/images/hero-cinematic.jpg"
            alt="Ishbilia Real Estate Development"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-ish-black/80 to-ish-black/90" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-ish-gold/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-ish-gold/5">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>
              {isAr
                ? 'تأسست في مدينة السادات • ريادة البناء والهندسة المعمارية'
                : 'Founded in Sadat City • Engineering & Architectural Excellence'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-ish-white mb-8 tracking-tight leading-[1.15]">
            {isAr ? (
              <>
                نبني <span className="gold-gradient-text">مدينة أفضل</span>...
                <br className="hidden sm:inline" /> مشروعاً بعد مشروع
              </>
            ) : (
              <>
                Building a <span className="gold-gradient-text">Better City</span>...
                <br className="hidden sm:inline" /> One Project at a Time
              </>
            )}
          </h1>

          <div className="gold-line max-w-xs mx-auto mb-8" />

          <p className="text-ish-gray-light text-base sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-normal mb-10 text-balance">
            {isAr
              ? 'منذ أكثر من 20 عاماً، تضع شركة إشبيلية معايير متقدمة في التطوير العقاري والهندسة الإنشائية في مدينة السادات، ملتزمين بالشفافية الكاملة والتسليم المتقن.'
              : 'For over 20 years, Ishbilia has set the standard in real estate development and structural engineering across Sadat City, committed to absolute transparency and perfection.'}
          </p>

          {/* Quick Nav / Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#brand-story"
              className="btn-gold rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-ish-gold/20 flex items-center gap-2 group transition-all"
            >
              <span>{isAr ? 'اكتشف قصة إشبيلية' : 'Discover Our Story'}</span>
              <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <Link
              href="/contact"
              className="btn-outline rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold border-white/20 hover:border-ish-gold hover:text-ish-gold transition-all"
            >
              {isAr ? 'تواصل مع الإدارة' : 'Contact Management'}
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS BAR (ANIMATED COUNTERS)                                         */}
      {/* ========================================================================= */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-ish-gold/30 bg-[#0c121c]/90 backdrop-blur-xl shadow-2xl shadow-black/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/10 text-center">
            {/* Stat 1 */}
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black gold-gradient-text tracking-tight mb-2">
                <AnimatedNumber target={2000} prefix="+" />
              </div>
              <p className="text-ish-white font-bold text-sm sm:text-base mb-1">
                {isAr ? 'رخصة صادرة ومعتمدة' : 'Official Issued Licenses'}
              </p>
              <p className="text-xs text-ish-gray">
                {isAr ? 'خبرة معتمدة لدى جهاز مدينة السادات' : 'Accredited with Sadat Authority'}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black gold-gradient-text tracking-tight mb-2">
                <AnimatedNumber target={20} prefix="+" />
              </div>
              <p className="text-ish-white font-bold text-sm sm:text-base mb-1">
                {isAr ? 'عاماً من الخبرة الهندسية' : 'Years of Engineering Legacy'}
              </p>
              <p className="text-xs text-ish-gray">
                {isAr ? 'تأسست وانطلقت عام 2005' : 'Established in 2005'}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black gold-gradient-text tracking-tight mb-2">
                <AnimatedNumber target={50} prefix="+" />
              </div>
              <p className="text-ish-white font-bold text-sm sm:text-base mb-1">
                {isAr ? 'مشروع قائم ومسلّم' : 'Completed Landmark Projects'}
              </p>
              <p className="text-xs text-ish-gray">
                {isAr ? 'واجهات فندقية وتشطيبات متفوقة' : 'Hotel-grade facades & finishes'}
              </p>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black gold-gradient-text tracking-tight mb-2">
                <span>0%</span>
              </div>
              <p className="text-ish-white font-bold text-sm sm:text-base mb-1">
                {isAr ? 'نزاعات قانونية أو تأخيرات' : 'Legal Disputes or Delays'}
              </p>
              <p className="text-xs text-ish-gray">
                {isAr ? 'التزام صارم بالعقود والمواصفات' : 'Strict contractual compliance'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHO WE ARE (SPLIT LAYOUT WITH REAL ARCHITECTURE IMAGE)                 */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ish-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column (Project Image Card) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-ish-gold/30 shadow-2xl group">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <Image
                    src="/images/projects/project-1518-clean-facade.jpg"
                    alt="مشروع 1518 - إشبيلية للتطوير العقاري"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ish-black/90 via-ish-black/20 to-transparent" />
                </div>

                {/* Floating Tag */}
                <div className="absolute bottom-6 start-6 end-6 p-5 rounded-xl bg-ish-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-ish-gold font-bold uppercase tracking-wider block mb-1">
                      {isAr ? 'من واقع التنفيذ الفعلي' : 'Real Construction Quality'}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-ish-white">
                      {isAr ? 'مشروع 1518 — المنطقة السكنية 21' : 'Project 1518 — Residential Zone 21'}
                    </h4>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold border border-ish-gold/30">
                    {isAr ? 'تم التسليم' : 'Delivered'}
                  </span>
                </div>
              </div>

              {/* Decorative Glow behind the image */}
              <div className="absolute -bottom-8 -end-8 w-64 h-64 bg-ish-gold/10 blur-3xl rounded-full pointer-events-none" />
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
                <span>{isAr ? 'هويتنا الهندسية' : 'Our Engineering Identity'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-6 leading-tight">
                {isAr ? (
                  <>
                    لسنا مجرد مطورين... <br />
                    <span className="gold-gradient-text">نحن نصنع معالم سكنية تعيش لأجيال</span>
                  </>
                ) : (
                  <>
                    More than developers... <br />
                    <span className="gold-gradient-text">We build landmarks that last for generations</span>
                  </>
                )}
              </h2>

              <p className="text-ish-gray-light text-base sm:text-lg leading-relaxed mb-8">
                {isAr
                  ? 'من أكثر العوامل التي ترسم ملامح المدن الجديدة هي مصداقية وجودة المطورين فيها. كل لبنة نضعها اليوم تصبح جزءاً من ذاكرة مدينة السادات وهويتها المعمارية غداً. لذلك قررت إشبيلية أن تبقى معاييرها الهندسية والتنفيذية فوق كل المساومات.'
                  : 'What defines the prestige of any growing city is the integrity of its builders. Every structure we erect today shapes Sadat City for generations. That is why Ishbilia refuses any compromises on materials, engineering rigor, and client commitments.'}
              </p>

              {/* 3 Value Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ish-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center text-ish-gold shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-ish-white font-bold text-base mb-1">
                      {isAr ? 'دقة معمارية وإنشائية طبقاً للكود المصري' : 'Egyptian Building Code Compliance'}
                    </h3>
                    <p className="text-sm text-ish-gray leading-relaxed">
                      {isAr
                        ? 'اختبارات خرسانية دورية، حديد تسليح مطابق للأصول، وعزل حراري ورطوبي كامل للأسطح والواجهات.'
                        : 'Routine concrete test lab reports, certified rebar, and multi-layer thermal and water insulation.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ish-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center text-ish-gold shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-ish-white font-bold text-base mb-1">
                      {isAr ? 'ملفات قانونية وتراخيص معتمدة 100%' : '100% Certified Legal Dossiers'}
                    </h3>
                    <p className="text-sm text-ish-gray leading-relaxed">
                      {isAr
                        ? 'كل مشروع يبدأ برخصة بناء رسمية صادرة من جهاز المدينة، بلا أي مخالفات أو تعديات على الردود.'
                        : 'Every project breaks ground with fully issued government permits, with zero setback infractions.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ish-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center text-ish-gold shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-ish-white font-bold text-base mb-1">
                      {isAr ? 'احترام جدول التسليم واستقرار المرافق' : 'Timely Delivery & Full Utilities'}
                    </h3>
                    <p className="text-sm text-ish-gray leading-relaxed">
                      {isAr
                        ? 'تسليم كامل العدادات، المداخل الفندقية الفاخرة، المصاعد الإيطالية، والمتابعة لما بعد السكن.'
                        : 'Hotel-style marble entrances, Italian elevators, utilities connections, and attentive post-handover care.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PILLARS & CORE VALUES (4 LUXURY CARDS)                                */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#090D14] relative border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'المبادئ التوجيهية' : 'Guiding Principles'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-3 mb-4">
              {isAr ? 'الركائز والقيم المؤسسية' : 'Core Pillars & Corporate Values'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'الأسس التي بنى عليها مهندسونا ثقة مئات العائلات والمستثمرين في مدينة السادات'
                : 'The structural foundations upon which we earned the trust of hundreds of families in Sadat City'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Vision */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center mb-6 text-ish-gold group-hover:scale-110 group-hover:bg-ish-gold/20 transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ish-white mb-3 group-hover:text-ish-gold transition-colors">
                  {t.about.vision}
                </h3>
                <p className="text-ish-gray text-sm leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-ish-gold/80 font-semibold">
                {isAr ? 'الريادة والمرجعية الأولى' : 'Top Industry Reference'}
              </div>
            </div>

            {/* 2. Mission */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center mb-6 text-ish-gold group-hover:scale-110 group-hover:bg-ish-gold/20 transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ish-white mb-3 group-hover:text-ish-gold transition-colors">
                  {t.about.mission}
                </h3>
                <p className="text-ish-gray text-sm leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-ish-gold/80 font-semibold">
                {isAr ? 'قيمة مضافة مستدامة' : 'Sustainable Added Value'}
              </div>
            </div>

            {/* 3. Expertise */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center mb-6 text-ish-gold group-hover:scale-110 group-hover:bg-ish-gold/20 transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ish-white mb-3 group-hover:text-ish-gold transition-colors">
                  {t.about.expertise}
                </h3>
                <p className="text-ish-gray text-sm leading-relaxed">
                  {t.about.expertiseText}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-ish-gold/80 font-semibold">
                {isAr ? 'إشراف هندسي صارم' : 'Strict Engineering Oversight'}
              </div>
            </div>

            {/* 4. Core Values */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center mb-6 text-ish-gold group-hover:scale-110 group-hover:bg-ish-gold/20 transition-all">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ish-white mb-3 group-hover:text-ish-gold transition-colors">
                  {isAr ? 'القيم المؤسسية' : 'Core Values'}
                </h3>
                <p className="text-ish-gray text-sm leading-relaxed">
                  {isAr
                    ? 'الشفافية المطلقة في العقود، الأمانة في استخدام أفضل الخامات، الصدق في مواعيد التسليم، وخدمة ما بعد البيع المستمرة.'
                    : 'Uncompromising contractual transparency, ethical procurement of materials, delivery punctuality, and attentive after-sales service.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-ish-gold/80 font-semibold">
                {isAr ? 'ميثاق شرف مهني' : 'Professional Code of Honor'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GALLERY SHOWCASE (REAL PROJECTS HIGHLIGHT)                             */}
      {/* ========================================================================= */}
      <section className="py-24 bg-ish-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
                {isAr ? 'سجل الإنجازات الواقعية' : 'Real Construction Portfolio'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-2">
                {isAr ? 'مشروعات تجسد فلسفتنا المعمارية' : 'Projects Embodying Our Philosophy'}
              </h2>
            </div>
            <Link
              href="/projects"
              className="btn-outline rounded-full px-6 py-2.5 text-sm self-start md:self-auto hover:border-ish-gold hover:text-ish-gold transition-all"
            >
              {isAr ? 'تصفح كافة المشروعات' : 'View All Projects'} &larr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group shadow-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/projects/project-1518-clean-facade.jpg"
                  alt="مشروع 1518"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-transparent to-transparent" />
                <span className="absolute top-4 start-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-ish-gold text-xs font-bold border border-ish-gold/30">
                  {isAr ? 'المنطقة السكنية 21' : 'District 21'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                  {isAr ? 'مشروع 1518 — واجهة نيوكلاسيك' : 'Project 1518 — Neoclassical Facade'}
                </h3>
                <p className="text-sm text-ish-gray mb-4">
                  {isAr
                    ? 'تصميم معماري متوازن مع مداخل رخام إمبراطورية ومصاعد بانورامية.'
                    : 'Balanced architectural proportions with imperial marble lobbies and panoramic elevators.'}
                </p>
                <div className="flex items-center justify-between text-xs text-ish-gold pt-3 border-t border-white/5 font-semibold">
                  <span>{isAr ? 'وحدات دوبلكس وشقق فاخرة' : 'Duplexes & Luxury Units'}</span>
                  <Link href="/projects/project-1518" className="hover:underline">
                    {isAr ? 'التفاصيل' : 'Details'} &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group shadow-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/projects/project-1490-clean-facade.jpg"
                  alt="مشروع 1490"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-transparent to-transparent" />
                <span className="absolute top-4 start-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-ish-gold text-xs font-bold border border-ish-gold/30">
                  {isAr ? 'المنطقة السكنية 21' : 'District 21'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                  {isAr ? 'مشروع 1490 — فخامة سكنية عصرية' : 'Project 1490 — Contemporary Elegance'}
                </h3>
                <p className="text-sm text-ish-gray mb-4">
                  {isAr
                    ? 'إطلالة بحرية مفتوحة وتوزيع داخلي ذكي يمنح كل غرفة خصوصية وإضاءة طبيعية.'
                    : 'Open panoramic orientation and smart internal flow ensuring natural lighting and privacy.'}
                </p>
                <div className="flex items-center justify-between text-xs text-ish-gold pt-3 border-t border-white/5 font-semibold">
                  <span>{isAr ? 'مساحات متنوعة واستلام رسمي' : 'Multiple layouts & Handover ready'}</span>
                  <Link href="/projects/project-1490" className="hover:underline">
                    {isAr ? 'التفاصيل' : 'Details'} &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group shadow-xl">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/projects/project-810-clean-facade.jpg"
                  alt="مشروع 810"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-transparent to-transparent" />
                <span className="absolute top-4 start-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-ish-gold text-xs font-bold border border-ish-gold/30">
                  {isAr ? 'المنطقة السكنية 14' : 'District 14'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                  {isAr ? 'مشروع 810 — رونق معماري مستدام' : 'Project 810 — Sustainable Prestige'}
                </h3>
                <p className="text-sm text-ish-gray mb-4">
                  {isAr
                    ? 'موقع حيوي متميز قريب من كافة الخدمات الرئيسية مع جراجات خاصة وتأمين إلكتروني.'
                    : 'Prime residential location close to core city facilities with private parking.'}
                </p>
                <div className="flex items-center justify-between text-xs text-ish-gold pt-3 border-t border-white/5 font-semibold">
                  <span>{isAr ? 'كامل العدادات والموافقات' : 'Full meters & Utility connections'}</span>
                  <Link href="/projects/project-810" className="hover:underline">
                    {isAr ? 'التفاصيل' : 'Details'} &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. THE 9 CHAPTERS BRAND STORY (ENHANCED INTERACTIVE TIMELINE)              */}
      {/* ========================================================================= */}
      <section className="py-28 bg-[#090E16] relative overflow-hidden" id="brand-story">
        {/* Background Architectural Blueprint Lines */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(200,165,77,1) 60px, rgba(200,165,77,1) 61px), repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(200,165,77,1) 60px, rgba(200,165,77,1) 61px)`,
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Story Intro */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {t.story.sectionTitle}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-3 mb-6">
              {t.story.title}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray text-base sm:text-lg leading-relaxed mb-6">
              {t.story.intro}
            </p>
            <p className="gold-gradient-text text-lg sm:text-2xl font-bold">
              {t.story.introHighlight}
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Line with gold gradient */}
            <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-gradient-to-b from-ish-gold via-ish-gold/40 to-ish-gold md:-translate-x-[1px]" />

            {/* The 9 Chapters */}
            {t.story.chapters.map((chapter, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={setChapterRef(index)}
                  className="relative mb-20 last:mb-0"
                  style={{ opacity: 0, transform: 'translateY(40px)' }}
                >
                  {/* Timeline Dot with Custom Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 top-6">
                    <div className="w-10 h-10 rounded-full bg-ish-black border-2 border-ish-gold flex items-center justify-center text-ish-gold shadow-[0_0_15px_rgba(200,165,77,0.3)]">
                      {chapterIcons[index] || <span className="w-2.5 h-2.5 rounded-full bg-ish-gold" />}
                    </div>
                  </div>

                  {/* Chapter Card */}
                  <div
                    className={`md:w-[46%] ${
                      isEven ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                    } ps-16 md:ps-0`}
                  >
                    {/* Chapter Number Backdrop */}
                    <div className="relative select-none">
                      <span className="chapter-number opacity-10 text-ish-gold text-6xl font-black block -mb-4">
                        {chapter.number}
                      </span>
                    </div>

                    <div className="glass-card rounded-2xl p-6 sm:p-8 relative z-[1] border border-white/10 hover:border-ish-gold/50 transition-all duration-300 shadow-xl">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold border border-ish-gold/25">
                          {isAr ? `المرحلة ${chapter.number}` : `Phase ${chapter.number}`}
                        </span>
                      </div>

                      <h3 className="text-ish-white font-bold text-xl sm:text-2xl mb-4">
                        {chapter.title}
                      </h3>

                      <p className="text-ish-gray text-sm sm:text-base leading-relaxed">
                        {chapter.content}
                      </p>

                      {/* Chapter 4 special license stat */}
                      {chapter.number === '04' && (
                        <div className="mt-6 p-4 bg-ish-gold/10 border border-ish-gold/30 rounded-xl flex items-center gap-4">
                          <span className="text-3xl sm:text-4xl font-black gold-gradient-text">
                            +2000
                          </span>
                          <div>
                            <p className="text-ish-gold font-bold text-sm sm:text-base">
                              {isAr ? 'رخصة صادرة ومعتمدة رسمياً' : 'Official Issued Licenses'}
                            </p>
                            <p className="text-xs text-ish-gray">
                              {isAr ? 'خبرة عملية تضمن سلاسة الإجراءات وسلامة الملكية 100%' : 'Practical field mastery ensuring legal safety'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Memorable Story Closing Quote */}
          <div className="mt-24 text-center p-8 sm:p-14 rounded-2xl bg-gradient-to-r from-ish-gold/10 via-ish-gold/5 to-ish-gold/10 border border-ish-gold/40 shadow-2xl relative backdrop-blur-md">
            <p className="text-ish-gray-light text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              {t.story.closing}
            </p>

            <blockquote className="gold-gradient-text text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 max-w-2xl mx-auto leading-tight">
              &ldquo;{t.story.closingHighlight}&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-ish-gray max-w-xl mx-auto">
              {isAr
                ? 'إشبيلية للتطوير العقاري — التزام بالأصل، وارتقاء بالمستقبل.'
                : 'Ishbilia Real Estate Development — Faithful to roots, elevated for the future.'}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. LEADERSHIP & ENGINEERING BOARD (NEW SECTION)                          */}
      {/* ========================================================================= */}
      <section className="py-24 bg-ish-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'فريق العمل والخبرات' : 'Leadership & Board'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-2 mb-4">
              {isAr ? 'القيادة والمنظومة الهندسية' : 'Executive & Engineering Council'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'عقول هندسية واستشارية بخبرات متراكمة تقود كل خطوة تنفيذية من المخطط وحتى المفتاح'
                : 'Experienced engineering leaders directing every execution step from blueprints to key handover'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 text-center flex flex-col items-center group shadow-xl">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ish-gold/20 via-ish-gold/5 to-transparent border-2 border-ish-gold/50 flex items-center justify-center mb-6 text-ish-gold group-hover:scale-105 transition-transform shadow-lg shadow-ish-gold/10">
                <svg className="w-12 h-12 text-ish-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold mb-3">
                {isAr ? 'الإدارة العليا' : 'Executive Board'}
              </span>
              <h3 className="text-xl font-bold text-ish-white mb-1">
                {isAr ? 'رئيس مجلس الإدارة والمؤسس' : 'Chairman & Founder'}
              </h3>
              <p className="text-xs text-ish-gold font-medium mb-4">
                {isAr ? 'أكثر من 22 عاماً في التنمية العمرانية' : '22+ Years in Urban Development'}
              </p>
              <p className="text-sm text-ish-gray leading-relaxed mb-6">
                {isAr
                  ? '«رؤيتنا لإشبيلية لم تكن يوماً مجرد تشييد جدران، بل خلق بيئة معيشية تحفظ كرامة الساكن وأموال المستثمر للأبد.»'
                  : '"Our vision was never merely erecting walls, but cultivating living spaces that honor the resident and safeguard investments."'}
              </p>
              <div className="mt-auto w-full pt-4 border-t border-white/5 flex justify-center gap-4 text-xs text-ish-gray">
                <span>{isAr ? 'تخطيط استراتيجي' : 'Strategic Planning'}</span>
                <span>•</span>
                <span>{isAr ? 'حوكمة وتطوير' : 'Governance'}</span>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 text-center flex flex-col items-center group shadow-xl">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ish-gold/20 via-ish-gold/5 to-transparent border-2 border-ish-gold/50 flex items-center justify-center mb-6 text-ish-gold group-hover:scale-105 transition-transform shadow-lg shadow-ish-gold/10">
                <svg className="w-12 h-12 text-ish-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold mb-3">
                {isAr ? 'القطاع الهندسي' : 'Engineering Sector'}
              </span>
              <h3 className="text-xl font-bold text-ish-white mb-1">
                {isAr ? 'رئيس قطاع المشروعات والتنفيذ' : 'Chief Project & Construction Officer'}
              </h3>
              <p className="text-xs text-ish-gold font-medium mb-4">
                {isAr ? 'استشاري إدارة تشييد وضبط جودة' : 'Quality Assurance & Site Engineering'}
              </p>
              <p className="text-sm text-ish-gray leading-relaxed mb-6">
                {isAr
                  ? '«لا نقبل بأي هامش خطأ في الخرسانات أو العزل. كل متر مكعب يخضع للاختبار المعملي قبل الصب وبعده.»'
                  : '"Zero margin of error in structural concrete and insulation. Every cubic meter undergoes rigorous laboratory testing."'}
              </p>
              <div className="mt-auto w-full pt-4 border-t border-white/5 flex justify-center gap-4 text-xs text-ish-gray">
                <span>{isAr ? 'إشراف ميداني' : 'Field Supervision'}</span>
                <span>•</span>
                <span>{isAr ? 'مطابقة الكود' : 'Code Compliance'}</span>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 text-center flex flex-col items-center group shadow-xl">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ish-gold/20 via-ish-gold/5 to-transparent border-2 border-ish-gold/50 flex items-center justify-center mb-6 text-ish-gold group-hover:scale-105 transition-transform shadow-lg shadow-ish-gold/10">
                <svg className="w-12 h-12 text-ish-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold mb-3">
                {isAr ? 'التراخيص والشؤون القانونية' : 'Legal & Licensure Affairs'}
              </span>
              <h3 className="text-xl font-bold text-ish-white mb-1">
                {isAr ? 'مدير التراخيص والشؤون التنظيمية' : 'Head of Regulatory & Licensing'}
              </h3>
              <p className="text-xs text-ish-gold font-medium mb-4">
                {isAr ? 'خبير إجراءات هيئة المجتمعات العمرانية' : 'Expert in NUCA Regulations'}
              </p>
              <p className="text-sm text-ish-gray leading-relaxed mb-6">
                {isAr
                  ? '«سجلنا الذي يتجاوز 2000 رخصة معتمدة هو شهادة ثقة رسمية بأن كل شبر في مشروعات إشبيلية محمي وموثق بالقانون.»'
                  : '"Our record of 2,000+ approved permits is official testament that every meter in our projects is legally fortified."'}
              </p>
              <div className="mt-auto w-full pt-4 border-t border-white/5 flex justify-center gap-4 text-xs text-ish-gray">
                <span>{isAr ? 'أمان قانوني' : 'Legal Security'}</span>
                <span>•</span>
                <span>{isAr ? 'توثيق رسمي' : 'Official Certifications'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CLIENT & INVESTOR TESTIMONIALS (NEW SECTION)                          */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#090D15] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'شهادات نعتز بها' : 'Testimonials & Trust'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-2 mb-4">
              {isAr ? 'ماذا يقول عملاؤنا وشركاؤنا؟' : 'What Our Clients & Partners Say'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'تجارب حقيقية لملاك وحدات وشركاء تطوير اختاروا إشبيلية وبنوا معنا قصص نجاحهم'
                : 'Genuine feedback from homeowners and investors who partnered with Ishbilia'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative">
              <div>
                {/* 5 Gold Stars */}
                <div className="flex gap-1 text-ish-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-ish-white text-base sm:text-lg leading-relaxed mb-6 italic">
                  {isAr
                    ? '«استلمت وحدتي في مشروع 1518 في الموعد المتفق عليه تماماً، ومستوى تشطيب الواجهات والمداخل الرخام فاق التوقعات. الشفافية والمصداقية في التعامل نادرة هذه الأيام.»'
                    : '"I received my unit in Project 1518 on schedule. The marble lobby and facade finishes exceeded all expectations. True transparency and honor."'}
                </blockquote>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ish-gold/15 text-ish-gold font-bold flex items-center justify-center text-sm">
                  {isAr ? 'م.ط' : 'T.A'}
                </div>
                <div>
                  <h4 className="text-ish-white font-bold text-sm">
                    {isAr ? 'م. طارق عبد الرحمن' : 'Eng. Tarek Abdulrahman'}
                  </h4>
                  <p className="text-xs text-ish-gray">
                    {isAr ? 'مالك وحدة سكنية — المنطقة 21' : 'Unit Owner — District 21'}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative">
              <div>
                <div className="flex gap-1 text-ish-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-ish-white text-base sm:text-lg leading-relaxed mb-6 italic">
                  {isAr
                    ? '«شاركت مع إشبيلية بنظام تطوير أرض في مدينة السادات. الاحترافية في استخراج التراخيص وإدارة مراحل البناء حققت لي أعلى عائد استثماري دون أي عناء قانوني أو تنفيذي.»'
                    : '"I partnered with Ishbilia under a joint land development model. Their swift licensing and site management yielded top returns with zero legal worries."'}
                </blockquote>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ish-gold/15 text-ish-gold font-bold flex items-center justify-center text-sm">
                  {isAr ? 'أ.س' : 'S.F'}
                </div>
                <div>
                  <h4 className="text-ish-white font-bold text-sm">
                    {isAr ? 'أ. سامح الفقي' : 'Mr. Sameh El-Fiqy'}
                  </h4>
                  <p className="text-xs text-ish-gray">
                    {isAr ? 'مستثمر وشريك تطوير أرض' : 'Investor & Land Partner'}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative">
              <div>
                <div className="flex gap-1 text-ish-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-ish-white text-base sm:text-lg leading-relaxed mb-6 italic">
                  {isAr
                    ? '«أكثر ما طمأنني هو استلام كافة عدادات الكهرباء والمياه رسمياً والتعامل الاحترافي لخدمة ما بعد البيع. إشبيلية اسم يستحق الثقة بكل جدارة.»'
                    : '"What gave me peace of mind was official utility meters handover and professional after-sales follow-up. Ishbilia is truly worthy of trust."'}
                </blockquote>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ish-gold/15 text-ish-gold font-bold flex items-center justify-center text-sm">
                  {isAr ? 'د.م' : 'M.N'}
                </div>
                <div>
                  <h4 className="text-ish-white font-bold text-sm">
                    {isAr ? 'د. محمود النجار' : 'Dr. Mahmoud El-Naggar'}
                  </h4>
                  <p className="text-xs text-ish-gray">
                    {isAr ? 'مالك وحدة في مشروع 1490' : 'Unit Owner — Project 1490'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. ACCREDITATIONS & INSTITUTIONAL PARTNERS (NEW SECTION)                  */}
      {/* ========================================================================= */}
      <section className="py-20 bg-ish-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-ish-gold text-xs uppercase tracking-widest font-semibold">
              {isAr ? 'الموثوقية والجهات الرسمية' : 'Official Accreditations'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-ish-white mt-2">
              {isAr ? 'جهات الاعتماد والشركاء المؤسسيين' : 'Regulatory Bodies & Partners'}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ish-gold/30 transition-colors text-center">
              <div className="w-12 h-12 rounded-full bg-ish-gold/10 text-ish-gold mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-ish-white font-bold text-sm sm:text-base mb-1">
                {isAr ? 'جهاز تنمية مدينة السادات' : 'Sadat City Authority'}
              </h4>
              <p className="text-xs text-ish-gray">
                {isAr ? 'تراخيص بناء ومطابقة اشتراطات' : 'Building Permits & Codes'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ish-gold/30 transition-colors text-center">
              <div className="w-12 h-12 rounded-full bg-ish-gold/10 text-ish-gold mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h4 className="text-ish-white font-bold text-sm sm:text-base mb-1">
                {isAr ? 'هيئة المجتمعات العمرانية' : 'New Urban Communities'}
              </h4>
              <p className="text-xs text-ish-gray">
                {isAr ? 'تخطيط عمراني وتخصيص معتمد' : 'Accredited Urban Masterplanning'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ish-gold/30 transition-colors text-center">
              <div className="w-12 h-12 rounded-full bg-ish-gold/10 text-ish-gold mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-ish-white font-bold text-sm sm:text-base mb-1">
                {isAr ? 'نقابة المهندسين المصرية' : 'Syndicate of Engineers'}
              </h4>
              <p className="text-xs text-ish-gray">
                {isAr ? 'استشاريون ونقابات هندسية معتمدة' : 'Chartered Engineers'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-ish-gold/30 transition-colors text-center">
              <div className="w-12 h-12 rounded-full bg-ish-gold/10 text-ish-gold mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-ish-white font-bold text-sm sm:text-base mb-1">
                {isAr ? 'معامل فحص الخرسانة والتربة' : 'Soil & Concrete Test Labs'}
              </h4>
              <p className="text-xs text-ish-gray">
                {isAr ? 'شهادات ضبط الجودة ومقاومة الضغط' : 'Certified QA & Stress Testing'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. ELITE CONSULTATION & FINAL CTA BANNER                                */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-ish-black via-[#0D1524] to-ish-black relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-ish-gold/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121A28]/95 to-[#0A0F17]/95 border border-ish-gold/40 shadow-2xl shadow-black/80 backdrop-blur-xl">
            <span className="text-xs sm:text-sm px-4 py-1.5 rounded-full bg-ish-gold/15 text-ish-gold font-bold inline-block mb-6 border border-ish-gold/30">
              {isAr ? 'ابدأ خطوتك العقارية بثقة' : 'Take Your Step with Confidence'}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ish-white mb-6 leading-tight">
              {isAr ? (
                <>
                  هل تمتلك أرضاً أو تبحث عن <br className="hidden sm:inline" />
                  <span className="gold-gradient-text">وحدة سكنية فاخرة في مدينة السادات؟</span>
                </>
              ) : (
                <>
                  Own land or seeking a <br className="hidden sm:inline" />
                  <span className="gold-gradient-text">luxury home in Sadat City?</span>
                </>
              )}
            </h2>

            <p className="text-ish-gray-light text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {isAr
                ? 'فريقنا الهندسي والاستشاري مستعد لتقديم دراسة جدوى فنية مجانية، أو ترتيب جولة ميدانية لمشروعاتنا القائمة في أرقى مناطق مدينة السادات.'
                : 'Our engineering consultants are ready to provide a complimentary feasibility study or arrange a private site tour across our premier developments.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-gold rounded-full px-8 py-4 text-base font-bold shadow-xl shadow-ish-gold/25"
              >
                {isAr ? 'طلب استشارة هندسية مجانية' : 'Request Free Consultation'}
              </Link>

              <a
                href="https://wa.me/201010722349"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 text-base font-bold transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                </svg>
                <span>{isAr ? 'محادثة مباشرة عبر واتساب' : 'WhatsApp Us Now'}</span>
              </a>

              <Link
                href="/projects"
                className="btn-outline rounded-full px-8 py-4 text-base font-semibold border-white/20 hover:border-ish-gold hover:text-ish-gold transition-all"
              >
                {isAr ? 'استكشف المشروعات' : 'Explore Projects'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
