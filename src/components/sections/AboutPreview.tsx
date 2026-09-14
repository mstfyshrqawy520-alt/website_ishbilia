'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function AboutPreview() {
  const { t, lang } = useLanguage();
  const sectionRef = useScrollReveal();
  const isAr = lang === 'ar';

  return (
    <section className="section-rhythm section-secondary relative w-full" id="about-preview">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div ref={sectionRef} className="reveal-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{t.about.sectionTitle}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-6 leading-tight">
              {t.about.title}
            </h2>
            <div className="gold-line-left mb-8" />
            <p className="text-ish-gray-light text-base sm:text-lg leading-relaxed mb-8">
              {t.about.description}
            </p>
            <Link
              href="/about"
              className="btn-outline rounded-full inline-block text-sm sm:text-base font-bold px-8 py-3 shadow-lg hover:shadow-ish-gold/20"
              id="about-cta"
            >
              {isAr ? 'تعرف على قصة إشبيلية ورؤيتنا' : 'Discover Our Story & Vision'}
            </Link>
          </div>

          {/* Visual - Luxury Architectural Showcase with Gradient Mask */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 group"
              style={{
                maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%), linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            >
              <Image
                src="/images/hero-cinematic.jpg"
                alt="Ishbilia Architecture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent" />

              {/* Gold Corner Accents */}
              <div className="absolute top-4 start-4 w-8 h-8 border-t-2 border-s-2 border-ish-gold/60 pointer-events-none" />
              <div className="absolute bottom-4 end-4 w-8 h-8 border-b-2 border-e-2 border-ish-gold/60 pointer-events-none" />

              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 start-6 end-6 p-4 rounded-xl glass-card flex items-center justify-between shadow-xl">
                <div>
                  <span className="block text-2xl font-black gold-gradient-text leading-tight">
                    +2000
                  </span>
                  <span className="text-xs text-ish-gray-light font-medium">
                    {isAr ? 'رخصة صادرة ومعتمدة بمدينة السادات' : 'Approved Licenses in Sadat City'}
                  </span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold border border-ish-gold/30">
                  {isAr ? 'ريادة معمارية' : 'Architectural Leadership'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
