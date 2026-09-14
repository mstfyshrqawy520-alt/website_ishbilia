'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

function StatDisplay({ target, suffix = '+' }: { target: number | string; suffix?: string }) {
  const value = typeof target === 'number' ? target.toLocaleString('en-US') : target;

  return (
    <div
      className="inline-flex items-center gap-1 text-5xl sm:text-6xl font-black gold-gradient-text tracking-tight select-none"
      dir="ltr"
      aria-label={`${value}${suffix}`}
    >
      <span>{value}</span>
      <span>{suffix}</span>
    </div>
  );
}

export default function WhyIshbilia() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal();

  return (
    <section className="section-rhythm section-secondary relative w-full" id="why-ishbilia-section">
      <div className="section-container">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
            <span>{t.why.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
            {t.why.title}
          </h2>
          <div className="gold-line max-w-xs mx-auto" />
        </div>

        {/* Why Items with Interactive Hover & Gold Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {t.why.items.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-8 group hover:-translate-y-1.5 hover:border-ish-gold/50 transition-all duration-300 border border-white/10 shadow-lg"
            >
              {/* Counter for stat items */}
              {item.stat && (
                <div className="mb-4">
                  <StatDisplay
                    target={parseInt(item.stat)}
                    suffix={item.statSuffix}
                  />
                  <p className="text-ish-gold text-base font-bold mt-2">
                    {item.title}
                  </p>
                </div>
              )}

              {!item.stat && (
                <>
                  <div className="w-12 h-12 rounded-lg bg-ish-gold/10 border border-ish-gold/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-ish-gold/20 group-hover:border-ish-gold/40 transition-all duration-300">
                    <div className="w-5 h-5 border-2 border-ish-gold rotate-45" />
                  </div>
                  <h3 className="text-ish-white font-bold text-xl mb-3 group-hover:text-ish-gold transition-colors">
                    {item.title}
                  </h3>
                </>
              )}

              <p className="text-ish-gray text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
