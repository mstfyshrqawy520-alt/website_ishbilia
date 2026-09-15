'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { usePlotMapModal } from '@/context/PlotMapContext';
import { plotLocationsData, projectsData, Project } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageProvider';

// Dynamic import with SSR disabled to prevent window is not defined errors with Leaflet
const LeafletMapInner = dynamic(() => import('./LeafletMapInner'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center bg-zinc-950 text-ish-gold gap-3">
      <div className="w-10 h-10 border-3 border-ish-gold/30 border-t-ish-gold rounded-full animate-spin" />
      <span className="text-sm font-bold animate-pulse">جاري تحميل خريطة القطع التفاعلية...</span>
    </div>
  ),
});

export default function AllPlotsMapModal() {
  const { isOpen, activePlot, closePlotMap, setActivePlot } = usePlotMapModal();
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const [zoneFilter, setZoneFilter] = useState<string>('all');
  const [mapTheme, setMapTheme] = useState<'streets' | 'satellite'>('streets');

  // Ensure an active plot is always selected
  const currentPlot = activePlot || '198';

  // Find if this plot has a corresponding project
  const matchedProject: Project | undefined = projectsData.find(
    (p) => p.plotNumber === currentPlot
  );

  const currentPlotData = plotLocationsData[currentPlot];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePlotMap();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, closePlotMap]);

  if (!isOpen) return null;

  // Derive zone name
  const getZoneLabel = (plot: string) => {
    if (['198', '190', '235', '60'].includes(plot)) return isAr ? 'المنطقة 35 • أمام جامعة السادات' : 'Zone 35 • Facing Sadat Univ.';
    if (['421', '578', '584', '623', '1254', '1378', '1445', '1500'].includes(plot)) return isAr ? 'المنطقة 14 • الروضة والريحان' : 'Zone 14 • Rawda & Rayhan';
    if (
      [
        '1518',
        '1490',
        '1488',
        '1483',
        '1413',
        '1372',
        '1371',
        '1341',
        '1317',
        '1307',
        '1301',
        '1297',
        '1220',
        '1167',
        '1165',
        '1164',
        '1152',
        '1064',
      ].includes(plot)
    ) {
      return isAr ? 'المنطقة 21 و 22 • المنطقة الذهبية' : 'Zone 21 & 22 • Golden Zone';
    }
    return isAr ? 'مدينة السادات • موقع استراتيجي' : 'Sadat City • Prime Axis';
  };

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `السلام عليكم، أنا مهتم بقطعة رقم ${currentPlot} في ${getZoneLabel(currentPlot)}، وأود حجز موعد معاينة ميدانية للموقع على الطبيعة.`
      : `Hello, I am interested in Plot ${currentPlot} (${getZoneLabel(currentPlot)}). Please schedule an on-site visit.`
  );

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-[92vh] max-h-[920px] bg-zinc-950 border border-ish-gold/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-xl shrink-0 border border-ish-gold/30">
              🗺️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-ish-white font-headline">
                  {isAr ? 'خريطة أراضي ومشروعات إشبيلية التفاعلية' : 'Ishbilia Interactive Plots Map'}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-ish-gold/20 text-ish-gold border border-ish-gold/40 text-[10px] font-bold">
                  {isAr ? '35 قطعة حقيقية' : '35 Real Plots'}
                </span>
              </div>
              <p className="text-xs text-ish-gray-light">
                {isAr
                  ? 'جميع القطع موضحة على الخريطة • القطعة المحددة يشار إليها بسهم ذهبي كبير'
                  : 'All plots displayed on map • Selected plot marked with a large arrow'}
              </p>
            </div>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {/* Quick Plot Jump Selector */}
            <div className="flex items-center gap-1.5 bg-zinc-900 px-2.5 py-1.5 rounded-xl border border-white/10">
              <span className="text-xs text-ish-gray-light font-bold">📍 {isAr ? 'انتقل لقطعة:' : 'Plot:'}</span>
              <select
                value={currentPlot}
                onChange={(e) => setActivePlot(e.target.value)}
                className="bg-transparent text-ish-gold font-bold text-xs focus:outline-none cursor-pointer"
              >
                {Object.keys(plotLocationsData).map((p) => (
                  <option key={p} value={p} className="bg-zinc-900 text-ish-white">
                    {isAr ? `قطعة ${p}` : `Plot ${p}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Map Theme Toggle: Streets / Satellite */}
            <button
              type="button"
              onClick={() => setMapTheme(mapTheme === 'streets' ? 'satellite' : 'streets')}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-ish-white text-xs font-bold border border-white/20 transition-all cursor-pointer flex items-center gap-1.5"
              title={isAr ? 'التبديل بين خريطة الشوارع والقمر الصناعي' : 'Toggle Streets / Satellite'}
            >
              <span>{mapTheme === 'streets' ? '🛰️' : '🗺️'}</span>
              <span>{mapTheme === 'streets' ? (isAr ? 'قمر صناعي' : 'Satellite') : (isAr ? 'شوارع' : 'Streets')}</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={closePlotMap}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-red-500/80 text-white flex items-center justify-center transition-colors text-base font-bold cursor-pointer shrink-0"
              title={isAr ? 'إغلاق الخريطة' : 'Close'}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Filter Strip (Zones) */}
        <div className="px-3 sm:px-5 py-2.5 bg-zinc-900/80 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 text-xs">
          <span className="text-ish-gray-light font-bold shrink-0">
            {isAr ? 'تصفية المناطق:' : 'Filter Zones:'}
          </span>
          {[
            { id: 'all', labelAr: 'كل القطع (35)', labelEn: 'All Plots (35)' },
            { id: '35', labelAr: 'المنطقة 35 (جامعة السادات)', labelEn: 'Zone 35 (Sadat Univ.)' },
            { id: '21', labelAr: 'المنطقة 21 و 22 (الذهبية)', labelEn: 'Zone 21 & 22' },
            { id: '14', labelAr: 'المنطقة 14 (الروضة والريحان)', labelEn: 'Zone 14' },
            { id: 'other', labelAr: 'محاور ومناطق أخرى', labelEn: 'Other Axes' },
          ].map((z) => (
            <button
              key={z.id}
              type="button"
              onClick={() => setZoneFilter(z.id)}
              className={`px-3 py-1 rounded-lg font-bold whitespace-nowrap transition-all cursor-pointer ${
                zoneFilter === z.id
                  ? 'bg-ish-gold text-zinc-950 shadow-md font-black'
                  : 'bg-white/5 text-ish-gray-light hover:bg-white/10 hover:text-white'
              }`}
            >
              {isAr ? z.labelAr : z.labelEn}
            </button>
          ))}
        </div>

        {/* Map Canvas Area */}
        <div className="relative flex-1 w-full bg-zinc-950 overflow-hidden">
          <LeafletMapInner
            activePlot={currentPlot}
            onSelectPlot={(p) => setActivePlot(p)}
            zoneFilter={zoneFilter}
            mapTheme={mapTheme}
          />

          {/* Floating Selected Plot Card on Map */}
          <div className="absolute bottom-3 start-3 end-3 sm:end-auto sm:max-w-md bg-zinc-950/95 backdrop-blur-md border-2 border-ish-gold/50 rounded-2xl p-4 shadow-2xl z-[1000] text-ish-white space-y-3 pointer-events-auto">
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-zinc-950 font-black text-xs">
                    {isAr ? `قطعة ${currentPlot}` : `Plot ${currentPlot}`}
                  </span>
                  <span className="text-[11px] text-ish-gold font-bold">
                    {getZoneLabel(currentPlot)}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-headline mt-1">
                  {matchedProject
                    ? isAr
                      ? matchedProject.title
                      : matchedProject.titleEn
                    : isAr
                    ? `أرض مميزة — قطعة ${currentPlot} بمدينة السادات`
                    : `Prime Plot ${currentPlot} - Sadat City`}
                </h4>
              </div>

              {matchedProject?.facadeImage && (
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/15 shrink-0">
                  <Image
                    src={matchedProject.facadeImage}
                    alt={matchedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* GPS & Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {/* Direct Google Maps GPS Button */}
              {currentPlotData?.mapsUrl && (
                <a
                  href={currentPlotData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-ish-gold text-zinc-950 font-black text-xs flex items-center justify-center gap-1.5 hover:bg-amber-300 transition-all shadow-md cursor-pointer"
                >
                  <span className="text-sm">🧭</span>
                  <span>{isAr ? 'فتح في Google Maps (GPS)' : 'Open in Google Maps'}</span>
                  <span className="font-mono text-[10px]">↗</span>
                </a>
              )}

              {/* WhatsApp On-Site Visit Button */}
              <a
                href={`https://wa.me/201010722349?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>💬</span>
                <span>{isAr ? 'حجز معاينة ميدانية' : 'Book Site Visit'}</span>
              </a>
            </div>

            {/* Project Details Link if available */}
            {matchedProject && (
              <div className="pt-1 text-center border-t border-white/10">
                <Link
                  href={`/projects/${matchedProject.slug}`}
                  onClick={closePlotMap}
                  className="text-xs text-ish-gold hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>{isAr ? 'عرض تفاصيل ومخططات هذا المشروع بالكامل' : 'View Full Project Details'}</span>
                  <span>←</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
