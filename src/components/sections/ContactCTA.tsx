'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function ContactCTA() {
  const { t, lang } = useLanguage();
  const sectionRef = useScrollReveal();
  const isAr = lang === 'ar';

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-primary)] w-full"
      style={{ paddingBlock: 'clamp(96px, 12vw, 160px)' }}
      id="contact-cta-section"
    >
      {/* Subtle Architectural Backing with Low Opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <Image
          src="/images/hero-cinematic.jpg"
          alt="Ishbilia Architecture Finale"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/70 to-transparent" />
      </div>

      <div className="section-container relative z-10 text-center">
        <div ref={sectionRef} className="reveal-up max-w-3xl mx-auto">
          {/* Eyebrow Label - Standardized Finale Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold animate-pulse" />
            <span>{isAr ? 'ختام القصة • إشبيلية' : 'The Finale • Ishbilia'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-6 leading-tight">
            {isAr ? 'كل فصل في رحلتنا كان وراه هدف واحد' : 'Every Chapter Had One Clear Purpose'}
          </h2>

          <div className="gold-line max-w-xs mx-auto mb-8" />

          <p className="text-ish-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            {t.contactCta.description}
          </p>

          <blockquote className="gold-gradient-text text-2xl sm:text-3xl md:text-4xl font-bold mb-10 max-w-2xl mx-auto leading-snug">
            {t.contactCta.closing}
          </blockquote>

          {/* High-Impact Primary CTA + Elegant Understated Secondary Action */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gold rounded-full text-base sm:text-lg font-bold px-10 py-4 shadow-2xl shadow-ish-gold/25 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
              id="final-cta-contact"
            >
              <span>{t.contactCta.cta}</span>
              <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/consultation"
              className="text-ish-gray-light hover:text-ish-gold text-xs sm:text-sm transition-colors duration-200 underline underline-offset-4 mt-2"
              id="final-cta-consultation"
            >
              {isAr ? 'أو احجز جلسة استشارة مجانية مع فريقنا الهندسي' : 'Or book a free consultation with our engineering team'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
