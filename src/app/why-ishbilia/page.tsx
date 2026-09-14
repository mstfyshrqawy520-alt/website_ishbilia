'use client';

import Link from 'next/link';
import { useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useCountUpOnView } from '@/lib/motion/useScrollAnimation';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const startCount = useCallback(() => {
    if (started) return;
    setStarted(true);
    const duration = 2000;
    const steps = 60;
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
    }, duration / steps);
  }, [target, started]);

  useCountUpOnView(counterRef, startCount);

  return (
    <div ref={counterRef} className="text-6xl sm:text-7xl font-bold gold-gradient-text mb-2">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function WhyIshbiliaPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 section-navy relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ish-gold text-sm tracking-[0.15em] uppercase mb-4">
            {t.why.sectionTitle}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ish-white mb-6">
            {t.why.title}
          </h1>
          <div className="gold-line max-w-xs mx-auto" />
        </div>
      </section>

      {/* Stat Highlight */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedCounter target={2000} suffix="+" />
          <p className="text-ish-gold text-xl font-semibold">{t.why.items[0].title}</p>
          <p className="text-ish-gray text-base mt-2 max-w-lg mx-auto">{t.why.items[0].description}</p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 section-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.why.items.slice(1).map((item, index) => (
              <div key={index} className="glass-card rounded-sm p-8 text-center hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 mx-auto rounded-full bg-ish-gold/10 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 border-2 border-ish-gold rotate-45" />
                </div>
                <h3 className="text-ish-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-ish-gray text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote from brand story */}
      <section className="py-20 section-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass-card rounded-sm p-10">
            <svg className="w-10 h-10 text-ish-gold/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-ish-white text-xl sm:text-2xl leading-relaxed italic mb-6">
              {t.story.chapters[4].content.split('.').slice(0, 2).join('.') + '.'}
            </p>
            <div className="gold-line-left mx-auto" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="gold-gradient-text text-2xl font-bold mb-8">{t.contactCta.closing}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consultation" className="btn-gold rounded-sm">{t.nav.consultation}</Link>
            <Link href="/our-story" className="btn-outline rounded-sm">{t.nav.ourStory}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
