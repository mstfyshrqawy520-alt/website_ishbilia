'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function OurStoryPage() {
  const { t, lang } = useLanguage();
  const chaptersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (!prefersReduced) {
              el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
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

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 section-navy relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(200,165,77,1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ish-gold text-sm tracking-[0.15em] uppercase mb-4">
            {t.story.sectionTitle}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ish-white mb-8">
            {t.story.title}
          </h1>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-ish-gray text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            {t.story.intro}
          </p>
          <p className="gold-gradient-text text-xl font-bold max-w-2xl mx-auto">
            {t.story.introHighlight}
          </p>
        </div>
      </section>

      {/* Chapters Timeline */}
      <section className="py-16 section-dark relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[2px] bg-gradient-to-b from-ish-gold/40 via-ish-gold/20 to-ish-gold/40 md:-translate-x-[1px]" />

          {/* Chapters */}
          {t.story.chapters.map((chapter, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                ref={setChapterRef(index)}
                className="relative mb-20 last:mb-0"
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="chapter-dot" />
                </div>

                {/* Content Card */}
                <div className={`md:w-[45%] ${isEven ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'} ps-16 md:ps-0`}>
                  {/* Large Chapter Number */}
                  <div className="relative">
                    <span className="chapter-number opacity-100 text-ish-gold/[0.08]" style={{ position: 'relative' }}>
                      {chapter.number}
                    </span>
                  </div>

                  <div className="glass-card rounded-sm p-8 -mt-8 relative z-[1]">
                    <h3 className="text-ish-gold font-bold text-xl sm:text-2xl mb-4">
                      {chapter.title}
                    </h3>
                    <p className="text-ish-gray text-base leading-relaxed">
                      {chapter.content}
                    </p>

                    {/* Chapter 4 special stat */}
                      {chapter.number === '04' && (
                      <div className="mt-6 p-4 bg-ish-gold/5 border border-ish-gold/20 rounded-sm">
                        <span className="text-3xl font-bold gold-gradient-text">2000+</span>
                        <p className="text-ish-gold text-sm mt-1">
                          {lang === 'ar' ? 'رخصة' : 'Licenses'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 section-navy relative">
        <div className="gold-line w-full absolute top-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ish-gray text-lg leading-relaxed mb-8">
            {t.story.closing}
          </p>
          <p className="gold-gradient-text text-2xl sm:text-3xl font-bold mb-10">
            {t.story.closingHighlight}
          </p>
          <Link
            href="/contact"
            className="btn-gold rounded-sm inline-block"
            id="story-cta"
          >
            {t.contactCta.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
