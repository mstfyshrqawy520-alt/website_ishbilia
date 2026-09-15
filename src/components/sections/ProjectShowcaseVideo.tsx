'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function ProjectShowcaseVideo() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();

  return (
    <section className="section-rhythm relative w-full overflow-hidden" id="video-showcase-section">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-10 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>{isAr ? 'تصوير جوي من الموقع' : 'Aerial View from Site'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? (
              <>مشروع إشبيلية <span className="gold-gradient-text">1518</span></>
            ) : (
              <>Ishbilia Project <span className="gold-gradient-text">1518</span></>
            )}
          </h2>

          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto font-body">
            {isAr
              ? 'شاهد بنفسك الموقع الاستثنائي للقطعة والمنطقة المحيطة بها من تصوير جوي حقيقي.'
              : 'See for yourself the exceptional plot location and surrounding area from real aerial footage.'}
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
          {/* Decorative gold corners */}
          <div className="absolute top-0 start-0 w-16 h-16 border-t-2 border-s-2 border-ish-gold/50 rounded-tl-3xl z-10 pointer-events-none" />
          <div className="absolute top-0 end-0 w-16 h-16 border-t-2 border-e-2 border-ish-gold/50 rounded-tr-3xl z-10 pointer-events-none" />
          <div className="absolute bottom-0 start-0 w-16 h-16 border-b-2 border-s-2 border-ish-gold/50 rounded-bl-3xl z-10 pointer-events-none" />
          <div className="absolute bottom-0 end-0 w-16 h-16 border-b-2 border-e-2 border-ish-gold/50 rounded-br-3xl z-10 pointer-events-none" />

          {/* Ambient glow behind video */}
          <div className="absolute -inset-4 bg-ish-gold/[0.06] blur-3xl rounded-3xl pointer-events-none" />

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full aspect-video object-cover"
          >
            <source src="/images/projects/1518.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          {/* Live badge */}
          <div className="absolute top-4 start-4 z-10">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white font-bold border border-white/20 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {isAr ? 'تصوير جوي حقيقي' : 'Real Aerial Footage'}
            </span>
          </div>

          {/* Project info at bottom */}
          <div className="absolute bottom-4 start-4 end-4 z-10 flex items-end justify-between">
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl font-headline drop-shadow-lg">
                {isAr ? 'قطعة 1518 - المنطقة 35' : 'Plot 1518 - Zone 35'}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm drop-shadow-md">
                {isAr ? 'مدينة السادات • موقع استثنائي 📍' : 'Sadat City • Exceptional Location 📍'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
