'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function AboutPreview() {
  const { t, lang } = useLanguage();
  const sectionRef = useScrollReveal();
  const isAr = lang === 'ar';

  const pillars = [
    {
      title: isAr ? 'كود الزلازل والأحمال العالية' : 'Seismic & Load Standards',
      desc: isAr
        ? 'تصميم إنشائي متطور وخرسانات جاهزة B350 معتمدة معملياً لأعلى أمان إنشائي يدوم لأجيال.'
        : 'Advanced structural design & lab-tested B350 ready-mix concrete for generational safety.',
      icon: (
        <svg className="w-5 h-5 text-ish-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: isAr ? 'أمان العقود والتسجيل الرسمي' : 'Contract & Legal Security',
      desc: isAr
        ? 'تسلسل ملكية موثق وخلو تام من أي التزامات مع جهاز مدينة السادات وهيئة المجتمعات.'
        : 'Documented ownership chain with zero liabilities with Sadat City Authority & NUCA.',
      icon: (
        <svg className="w-5 h-5 text-ish-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: isAr ? 'سرعة التراخيص والانضباط الزمني' : 'Fast Licensing & Punctuality',
      desc: isAr
        ? 'سجل استثنائي بإصدار +2000 رخصة رسمية وتطبيق غرامات تأخير لصالح العميل بالعقد.'
        : 'Unmatched record of +2,000 approved licenses with contractually guaranteed delivery dates.',
      icon: (
        <svg className="w-5 h-5 text-ish-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-rhythm section-secondary relative w-full overflow-hidden" id="about-preview">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 start-1/4 -translate-y-1/2 w-96 h-96 bg-ish-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left / Primary: Narrative & Pillars (7 cols) */}
          <div ref={sectionRef} className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'عن إشبيلية للتطوير العقاري' : 'About Ishbilia Developments'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-ish-white mb-6 leading-tight font-headline">
              {isAr ? (
                <>
                  أكثر من <span className="gold-gradient-text">20 عاماً</span> من الريادة المعمارية وصناعة الثقة بمدينة السادات
                </>
              ) : (
                <>
                  Over <span className="gold-gradient-text">20 Years</span> of Architectural Mastery & Trust in Sadat City
                </>
              )}
            </h2>

            <div className="gold-line-left mb-6" />

            <p className="text-ish-gray-light text-base sm:text-lg leading-relaxed mb-8 font-body">
              {isAr
                ? 'منذ انطلاقتنا في مدينة السادات، أخذنا على عاتقنا إعادة تعريف التطوير العقاري عبر المزج بين فخامة العمارة النيوكلاسيكية وأعلى معايير الدقة الإنشائية. نحن لا نبيع مجرد أمتار مربعة، بل نبني أصولاً استثمارية مستدامة تزداد قيمتها مع الزمن.'
                : 'Since our inception in Sadat City, we committed to redefining real estate by merging neoclassical architectural grandeur with uncompromising structural engineering. We do not just build spaces; we create enduring investment assets.'}
            </p>

            {/* 3 Golden Advantage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-xl border border-white/10 hover:border-ish-gold/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center mb-3 group-hover:bg-ish-gold/20 transition-colors">
                    {p.icon}
                  </div>
                  <h3 className="text-ish-white font-bold text-sm sm:text-base mb-1.5 group-hover:text-ish-gold transition-colors font-headline">
                    {p.title}
                  </h3>
                  <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA to full About page */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="btn-primary rounded-full inline-flex items-center gap-2 text-sm sm:text-base font-bold px-8 py-3.5 shadow-lg shadow-ish-gold/20 hover:scale-105 transition-all"
                id="about-cta"
              >
                <span>{isAr ? 'اكتشف قصة إشبيلية ورؤيتنا' : 'Discover Our Story & Vision'}</span>
                <span className="text-lg">←</span>
              </Link>

              <Link
                href="/projects"
                className="btn-outline rounded-full inline-flex items-center gap-2 text-sm sm:text-base font-bold px-6 py-3.5 hover:border-ish-gold transition-all"
              >
                <span>{isAr ? 'استعرض مشروعاتنا' : 'View Our Projects'}</span>
              </Link>
            </div>
          </div>

          {/* Right / Secondary: Showcase Project 1518 with Luxury Frame (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Glow Border Frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-br from-ish-gold/50 via-white/10 to-ish-gold/20 shadow-2xl shadow-black/80">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-ish-black">
                  <Image
                    src="/images/projects/project-1518-clean-facade.jpg"
                    alt={isAr ? 'مشروع إشبيلية 1518 - واجهة كلاسيكية فاخرة' : 'Ishbilia 1518 Neoclassical Facade'}
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ish-black/90 via-ish-black/20 to-transparent" />

                  {/* Corner Ornaments */}
                  <div className="absolute top-3 start-3 w-6 h-6 border-t-2 border-s-2 border-ish-gold pointer-events-none" />
                  <div className="absolute top-3 end-3 w-6 h-6 border-t-2 border-e-2 border-ish-gold pointer-events-none" />
                  <div className="absolute bottom-3 start-3 w-6 h-6 border-b-2 border-s-2 border-ish-gold pointer-events-none" />
                  <div className="absolute bottom-3 end-3 w-6 h-6 border-b-2 border-e-2 border-ish-gold pointer-events-none" />

                  {/* Top Floating Badge: Plot & Status */}
                  <div className="absolute top-4 start-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ish-black/85 backdrop-blur-md text-ish-gold text-xs font-bold border border-ish-gold/40 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{isAr ? 'مشروع 1518 • تسليم كامل' : 'Project 1518 • Delivered'}</span>
                    </span>
                  </div>

                  {/* Bottom Floating Glassmorphism Spec Sheet */}
                  <div className="absolute bottom-4 start-4 end-4 p-4 rounded-xl glass-card border border-white/15 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-ish-gold font-bold">
                        {isAr ? 'المنطقة 29 • واجهة بحري ناصية' : 'Zone 29 • Prime North Corner'}
                      </span>
                      <span className="text-xs text-white/80 font-mono">
                        {isAr ? 'رخصة رقم 1518' : 'License #1518'}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/10">
                      <div>
                        <span className="block text-base font-black gold-gradient-text">100%</span>
                        <span className="text-[10px] text-ish-gray-light">{isAr ? 'نسبة الإنجاز' : 'Completed'}</span>
                      </div>
                      <div>
                        <span className="block text-base font-black text-ish-white">111م²</span>
                        <span className="text-[10px] text-ish-gray-light">{isAr ? 'حدائق خاصة' : 'Gardens'}</span>
                      </div>
                      <div>
                        <span className="block text-base font-black text-ish-gold">B350</span>
                        <span className="text-[10px] text-ish-gray-light">{isAr ? 'خرسانة جاهزة' : 'Concrete'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill Beside Image */}
              <div className="hidden sm:flex absolute -bottom-6 -start-6 p-4 rounded-2xl glass-card border border-ish-gold/40 shadow-2xl items-center gap-3 bg-ish-black/90 backdrop-blur-xl z-20">
                <div className="w-12 h-12 rounded-xl bg-ish-gold/20 border border-ish-gold/50 flex items-center justify-center shrink-0">
                  <span className="text-xl">🏆</span>
                </div>
                <div>
                  <div className="text-xl font-black gold-gradient-text leading-tight">+2000</div>
                  <div className="text-xs text-ish-gray-light font-medium">
                    {isAr ? 'رخصة صادرة ومعتمدة' : 'Approved Licenses'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
