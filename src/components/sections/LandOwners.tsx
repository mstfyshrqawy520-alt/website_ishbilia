'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function LandOwners() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal();

  return (
    <section
      className="relative overflow-hidden w-full"
      style={{ paddingBlock: 'clamp(80px, 10vw, 144px)' }}
      id="land-owners"
    >
      {/* Full-width background with navy gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ish-navy/60 via-[var(--bg-primary)] to-[var(--bg-secondary)]" />

      {/* Islamic/Neoclassical Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px),
            repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(212,175,55,0.5) 28px, rgba(212,175,55,0.5) 29px),
            repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(212,175,55,0.5) 28px, rgba(212,175,55,0.5) 29px)
          `,
        }}
      />

      {/* Subtle gold gradient glow at edges */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ish-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ish-gold/30 to-transparent" />

      <div className="section-container relative z-10 text-center">
        <div ref={sectionRef} className="reveal-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
            <span>{t.landOwners.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-6">
            {t.landOwners.title}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-ish-gray text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {t.landOwners.description}
          </p>

          {/* Glowing Gold CTA Button */}
          <Link
            href="/consultation"
            className="btn-gold rounded-full inline-block text-base sm:text-lg font-bold px-10 py-4 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.45)] hover:scale-105 transition-all duration-300"
            id="land-owners-cta"
          >
            {t.landOwners.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
