'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

interface VideoPlot {
  id: string;
  tabLabelAr: string;
  tabLabelEn: string;
  titleAr: string;
  titleEn: string;
  zoneAr: string;
  zoneEn: string;
  videoSrc: string;
  descriptionAr: string;
  descriptionEn: string;
  whatsappMessageAr: string;
  whatsappMessageEn: string;
}

const videoPlots: VideoPlot[] = [
  {
    id: '1518',
    tabLabelAr: 'قطعة 1518',
    tabLabelEn: 'Plot 1518',
    titleAr: 'مشروع إشبيلية 1518',
    titleEn: 'Ishbilia Project 1518',
    zoneAr: 'المنطقة 21 • موقع استثنائي',
    zoneEn: 'Zone 21 • Exceptional Location',
    videoSrc: '/videos/projects/1518.mp4',
    descriptionAr: 'تصوير جوي يوضح الموقع الفريد لقطعة 1518 وتميزها المعماري والمحاور المحيطة بها.',
    descriptionEn: 'Aerial drone footage showcasing the unique location of plot 1518 and surrounding avenues.',
    whatsappMessageAr: 'السلام عليكم، شاهدت فيديو التصوير الجوي لقطعة 1518 وأرغب في حجز موعد للمعاينة على الطبيعة.',
    whatsappMessageEn: 'Hello, I watched the aerial video for Plot 1518 and would like to schedule a site tour.',
  },
  {
    id: '198',
    tabLabelAr: 'قطعة 198 (الجامعة)',
    tabLabelEn: 'Plot 198 (University)',
    titleAr: 'مشروع إشبيلية 198 — دابل فيس ناصية',
    titleEn: 'Ishbilia Project 198 — Double Face Corner',
    zoneAr: 'المنطقة 35 • مباشرة أمام بوابة جامعة السادات',
    zoneEn: 'Zone 35 • Facing Sadat University Main Gate',
    videoSrc: '/videos/projects/198.mp4',
    descriptionAr: 'موقع حيوي واستثماري استثنائي مباشرة على المحور المركزي وأمام بوابة جامعة مدينة السادات.',
    descriptionEn: 'Prime investment location directly on the Central Axis facing Sadat University.',
    whatsappMessageAr: 'السلام عليكم، استفسر عن مشروع 198 أمام جامعة السادات بعد مشاهدة فيديو الموقع الجوي.',
    whatsappMessageEn: 'Hello, inquiring about Project 198 facing Sadat University after watching the drone tour.',
  },
  {
    id: '1164',
    tabLabelAr: 'قطعة 1164',
    tabLabelEn: 'Plot 1164',
    titleAr: 'مشروع إشبيلية 1164',
    titleEn: 'Ishbilia Project 1164',
    zoneAr: 'مدينة السادات • منطقة مميزة',
    zoneEn: 'Sadat City • Premier District',
    videoSrc: '/videos/projects/1164.mp4',
    descriptionAr: 'معاينة جوية شاملة لموقع قطعة 1164 ونسب الإشغال والبنية التحتية المحيطة بالمنطقة.',
    descriptionEn: 'Comprehensive aerial survey of plot 1164 showing neighborhood infrastructure.',
    whatsappMessageAr: 'السلام عليكم، أود الاستفسار عن تفاصيل وموقع قطعة 1164 في مدينة السادات.',
    whatsappMessageEn: 'Hello, inquiring about details and availability for Plot 1164 in Sadat City.',
  },
  {
    id: '1165',
    tabLabelAr: 'قطعة 1165',
    tabLabelEn: 'Plot 1165',
    titleAr: 'مشروع إشبيلية 1165',
    titleEn: 'Ishbilia Project 1165',
    zoneAr: 'مدينة السادات • موقع استراتيجي',
    zoneEn: 'Sadat City • Strategic Location',
    videoSrc: '/videos/projects/1165.mp4',
    descriptionAr: 'تصوير دقيق يبرز إطلالة وأبعاد القطعة 1165 وسهولة الوصول إليها من المحاور الرئيسية.',
    descriptionEn: 'Detailed drone footage highlighting plot 1165 orientation and easy accessibility.',
    whatsappMessageAr: 'السلام عليكم، أود الاستفسار عن الوحدات المتاحة في قطعة 1165 بمدينة السادات.',
    whatsappMessageEn: 'Hello, inquiring about available units in Plot 1165 Sadat City.',
  },
  {
    id: '1307',
    tabLabelAr: 'قطعة 1307',
    tabLabelEn: 'Plot 1307',
    titleAr: 'مشروع إشبيلية 1307',
    titleEn: 'Ishbilia Project 1307',
    zoneAr: 'مدينة السادات • إطلالة مفتوحة',
    zoneEn: 'Sadat City • Open View',
    videoSrc: '/videos/projects/1307.mp4',
    descriptionAr: 'استكشف قطعة 1307 ومحيطها العمراني الراقي وتخطيط الشوارع المحيطة.',
    descriptionEn: 'Explore plot 1307 and its high-end residential neighborhood layout.',
    whatsappMessageAr: 'السلام عليكم، أرغب في الاستفسار وحجز موعد لمعاينة قطعة 1307 على الطبيعة.',
    whatsappMessageEn: 'Hello, I want to inquire and schedule an inspection for Plot 1307.',
  },
  {
    id: 'rawda',
    tabLabelAr: 'مشروع الروضة',
    tabLabelEn: 'Al-Rawda Project',
    titleAr: 'مشروع إشبيلية — حي الروضة',
    titleEn: 'Ishbilia Project — Al-Rawda',
    zoneAr: 'مدينة السادات • حي سكني راقٍ',
    zoneEn: 'Sadat City • Prestigious Residential Area',
    videoSrc: '/videos/projects/rawda.mp4',
    descriptionAr: 'جولة جوية حصرية توضح تميز موقع مشروع الروضة والخدمات والمساحات المحيطة به.',
    descriptionEn: 'Exclusive aerial tour showcasing Al-Rawda project location and surrounding amenities.',
    whatsappMessageAr: 'السلام عليكم، أود الاستفسار عن مشروع الروضة بمدينة السادات ومعاينة الموقع.',
    whatsappMessageEn: 'Hello, inquiring about Al-Rawda project in Sadat City and site inspection.',
  },
];

export default function ProjectShowcaseVideo() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();

  const [activePlotId, setActivePlotId] = useState<string>('1518');
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activePlot = videoPlots.find((p) => p.id === activePlotId) || videoPlots[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted without user interaction
      });
    }
  }, [activePlotId]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleNext = () => {
    const currentIndex = videoPlots.findIndex((p) => p.id === activePlotId);
    const nextIndex = (currentIndex + 1) % videoPlots.length;
    setActivePlotId(videoPlots[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = videoPlots.findIndex((p) => p.id === activePlotId);
    const prevIndex = (currentIndex - 1 + videoPlots.length) % videoPlots.length;
    setActivePlotId(videoPlots[prevIndex].id);
  };

  const salesWhatsappNumber = '201016144927';

  return (
    <section className="section-rhythm relative w-full overflow-hidden" id="video-showcase-section">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 start-1/4 w-[500px] h-[500px] bg-ish-gold/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[110px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-8 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>{isAr ? 'تصوير جوي حي من مواقع المشروعات' : 'Live Aerial Drone Tours'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? (
              <>
                شاهد مواقع أراضينا <span className="gold-gradient-text">على الطبيعة</span>
              </>
            ) : (
              <>
                Explore Our Plot Locations <span className="gold-gradient-text">from Above</span>
              </>
            )}
          </h2>

          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto font-body">
            {isAr
              ? 'اختر أي قطعة لمعاينة موقعها الاستثنائي، أبعادها، ونسب الإشغال والمحاور المحيطة بها عبر تصوير جوي حقيقي.'
              : 'Select any plot to inspect its unique location, surroundings, and accessibility from real aerial footage.'}
          </p>
        </div>

        {/* ─── Interactive Plot Tabs (تبويبات القطع) ─── */}
        <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto mb-6 px-2">
          {videoPlots.map((plot) => {
            const isActive = plot.id === activePlotId;
            return (
              <button
                key={plot.id}
                type="button"
                onClick={() => setActivePlotId(plot.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-ish-gold to-amber-400 text-ish-black border-ish-gold shadow-lg shadow-ish-gold/25 scale-105 font-black'
                    : 'bg-zinc-900/80 border-white/10 text-ish-gray hover:text-ish-white hover:border-ish-gold/40 hover:bg-zinc-800'
                }`}
              >
                <span>🎬</span>
                <span>{isAr ? plot.tabLabelAr : plot.tabLabelEn}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-ish-black animate-ping" />}
              </button>
            );
          })}
        </div>

        {/* ─── Video Container ─── */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 group bg-black">
          {/* Decorative gold corners */}
          <div className="absolute top-0 start-0 w-16 h-16 border-t-2 border-s-2 border-ish-gold/50 rounded-tl-3xl z-20 pointer-events-none" />
          <div className="absolute top-0 end-0 w-16 h-16 border-t-2 border-e-2 border-ish-gold/50 rounded-tr-3xl z-20 pointer-events-none" />
          <div className="absolute bottom-0 start-0 w-16 h-16 border-b-2 border-s-2 border-ish-gold/50 rounded-bl-3xl z-20 pointer-events-none" />
          <div className="absolute bottom-0 end-0 w-16 h-16 border-b-2 border-e-2 border-ish-gold/50 rounded-br-3xl z-20 pointer-events-none" />

          {/* Ambient glow behind video */}
          <div className="absolute -inset-4 bg-ish-gold/[0.08] blur-3xl rounded-3xl pointer-events-none" />

          {/* Video Player */}
          <video
            ref={videoRef}
            key={activePlot.videoSrc}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="w-full aspect-video object-cover transition-opacity duration-500"
          >
            <source src={activePlot.videoSrc} type="video/mp4" />
          </video>

          {/* Gradient overlay at bottom & top */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none z-10" />

          {/* Top Bar: Live Badge & Sound Toggle */}
          <div className="absolute top-4 start-4 end-4 z-20 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white font-bold border border-white/20 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>{isAr ? 'تصوير جوي حي' : 'Live Drone View'}</span>
              </span>
              <span className="hidden sm:inline-flex text-xs px-2.5 py-1 rounded-full bg-ish-gold/20 text-ish-gold border border-ish-gold/40 font-bold backdrop-blur-md">
                {isAr ? activePlot.tabLabelAr : activePlot.tabLabelEn}
              </span>
            </div>

            {/* Sound Toggle Button */}
            <button
              type="button"
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-110"
              title={isMuted ? (isAr ? 'تشغيل الصوت' : 'Unmute') : (isAr ? 'كتم الصوت' : 'Mute')}
            >
              <span className="text-sm">{isMuted ? '🔇' : '🔊'}</span>
            </button>
          </div>

          {/* Next / Previous Overlay Arrows (Desktop & Mobile) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute top-1/2 start-3 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center opacity-70 hover:opacity-100 transition-all cursor-pointer backdrop-blur-md shadow-lg"
            aria-label="Previous plot"
          >
            <span>{isAr ? '→' : '←'}</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute top-1/2 end-3 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center opacity-70 hover:opacity-100 transition-all cursor-pointer backdrop-blur-md shadow-lg"
            aria-label="Next plot"
          >
            <span>{isAr ? '←' : '→'}</span>
          </button>

          {/* Bottom Info & Action Strip */}
          <div className="absolute bottom-4 start-4 end-4 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 pointer-events-auto">
            <div className="max-w-md">
              <h3 className="text-white font-bold text-lg sm:text-xl font-headline drop-shadow-md">
                {isAr ? activePlot.titleAr : activePlot.titleEn}
              </h3>
              <p className="text-ish-gold text-xs sm:text-sm font-semibold drop-shadow-md">
                {isAr ? activePlot.zoneAr : activePlot.zoneEn}
              </p>
              <p className="text-white/70 text-[11px] sm:text-xs line-clamp-1 mt-0.5">
                {isAr ? activePlot.descriptionAr : activePlot.descriptionEn}
              </p>
            </div>

            {/* Direct WhatsApp Site Tour Action */}
            <a
              href={`https://wa.me/${salesWhatsappNumber}?text=${encodeURIComponent(
                isAr ? activePlot.whatsappMessageAr : activePlot.whatsappMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 text-ish-black text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-xl shadow-ish-gold/25 shrink-0 cursor-pointer"
            >
              <span>💬</span>
              <span>{isAr ? 'حجز معاينة لهذه القطعة' : 'Book Tour for this Plot'}</span>
              <span>←</span>
            </a>
          </div>
        </div>

        {/* Quick Plot Counter Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-ish-gray">
          <span>{isAr ? 'معاينة جوية:' : 'Drone tour:'}</span>
          <span className="text-ish-gold font-bold font-mono">
            {videoPlots.findIndex((p) => p.id === activePlotId) + 1}
          </span>
          <span>/</span>
          <span className="font-mono">{videoPlots.length}</span>
          <span>{isAr ? 'مشروعات مصورة' : 'plots featured'}</span>
        </div>
      </div>
    </section>
  );
}
