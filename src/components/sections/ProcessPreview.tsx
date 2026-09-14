'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function ProcessPreview() {
  const { t, lang } = useLanguage();
  const sectionRef = useScrollReveal();

  return (
    <section className="section-rhythm section-primary relative overflow-hidden w-full" id="process-preview">
      <div className="section-container">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
            <span>{t.process.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
            {t.process.title}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-6" />
          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto">
            {t.process.description}
          </p>
        </div>

        {/* ===== Horizontal Glowing Timeline (Desktop) ===== */}
        <div className="hidden lg:block w-full">
          {/* The glowing horizontal line */}
          <div className="relative">
            {/* Main glowing line spanning full width */}
            <div className="absolute top-6 left-0 right-0 h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-ish-gold/20 via-ish-gold/60 to-ish-gold/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ish-gold/30 to-transparent blur-md" />
            </div>

            {/* 9 Steps distributed with space-between across full width */}
            <div className="relative flex items-start justify-between">
              {t.process.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center group" style={{ width: '10%' }}>
                  {/* Glowing Dot */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--bg-primary)] border-2 border-ish-gold/40 flex items-center justify-center mb-4 group-hover:border-ish-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-500 cursor-default">
                    <span className="text-ish-gold font-bold text-sm">{step.number}</span>
                    {/* Pulse ring on hover */}
                    <div className="absolute inset-0 rounded-full border border-ish-gold/0 group-hover:border-ish-gold/40 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                  </div>

                  {/* Step Card Below */}
                  <div className="glass-card rounded-xl p-3 text-center w-full group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-[10px] text-ish-gold/60 font-semibold block mb-1">
                      {lang === 'ar' ? `المرحلة ${step.number}` : `Phase ${step.number}`}
                    </span>
                    <h4 className="text-ish-white font-bold text-xs leading-snug group-hover:text-ish-gold transition-colors duration-200">
                      {step.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Vertical Glowing Timeline (Mobile / Tablet) ===== */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Vertical glowing line */}
            <div className="absolute start-6 top-0 bottom-0 w-[2px]">
              <div className="w-full h-full bg-gradient-to-b from-transparent via-ish-gold/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ish-gold/30 to-transparent blur-md" />
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {t.process.steps.map((step, index) => (
                <div key={index} className="relative flex items-center gap-4 group">
                  {/* Dot */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--bg-primary)] border-2 border-ish-gold/40 flex items-center justify-center shrink-0 group-hover:border-ish-gold group-hover:shadow-[0_0_16px_rgba(212,175,55,0.4)] transition-all duration-400">
                    <span className="text-ish-gold font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-card rounded-xl p-4 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <span className="text-[10px] text-ish-gold/60 font-semibold block mb-0.5">
                      {lang === 'ar' ? `المرحلة ${step.number}` : `Phase ${step.number}`}
                    </span>
                    <h4 className="text-ish-white font-bold text-sm leading-snug group-hover:text-ish-gold transition-colors duration-200">
                      {step.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/our-story"
            className="btn-gold rounded-full inline-block px-9 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-ish-gold/20"
            id="process-cta"
          >
            {t.process.viewFull}
          </Link>
        </div>
      </div>
    </section>
  );
}
