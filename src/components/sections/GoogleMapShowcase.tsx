'use client';

import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { usePlotMapModal } from '@/context/PlotMapContext';

interface MapLocation {
  id: string;
  nameAr: string;
  nameEn: string;
  typeAr: string;
  typeEn: string;
  query: string;
  directUrl?: string;
  addressAr: string;
  addressEn: string;
  badge: string;
  whatsappMessageAr: string;
  whatsappMessageEn: string;
}

const mapLocations: MapLocation[] = [
  {
    id: 'hq',
    nameAr: 'المقر الرئيسي — جنة مول',
    nameEn: 'Ishbilia HQ — Jannah Mall',
    typeAr: 'المقر الإداري والمبيعات',
    typeEn: 'Corporate HQ & Sales',
    query: 'جنة مول مدينة السادات',
    addressAr: 'المنطقة الثامنة، جنة مول، الدور الثالث، بجوار البريد وقصر السلام، مدينة السادات',
    addressEn: 'Zone 8, Jannah Mall, 3rd Floor, adjacent to the Post Office, Sadat City',
    badge: '🏢 المقر الرئيسي',
    whatsappMessageAr: 'السلام عليكم، أود زيارة المقر الرئيسي لإشبيلية في جنة مول، يرجى إرسال اللوكيشن وتأكيد الموعد.',
    whatsappMessageEn: 'Hello, I would like to visit Ishbilia HQ at Jannah Mall. Please confirm the pin and schedule.',
  },
  {
    id: 'zone-21',
    nameAr: 'مواقع مشروعات المنطقة 21 (قطعة 1518 و 1490)',
    nameEn: 'Zone 21 Projects (Plot 1518 & 1490)',
    typeAr: 'مشروعات سكنية فاخرة',
    typeEn: 'Luxury Residential',
    query: 'المنطقة 21 مدينة السادات',
    directUrl: 'https://www.google.com/maps/place/@30.401066359537644,30.52534984199647',
    addressAr: 'المنطقة 21، بالقرب من المحور المركزي والخدمات، مدينة السادات',
    addressEn: 'Zone 21, near Central Axis and core services, Sadat City',
    badge: '📍 مشروعات حية',
    whatsappMessageAr: 'السلام عليكم، أود استلام إحداثيات وموقع مشاريع إشبيلية بالمنطقة 21 (قطعة 1518 و 1490) لمعاينتها على الطبيعة.',
    whatsappMessageEn: 'Hello, please send the GPS location pin for Ishbilia Zone 21 projects (Plots 1518 & 1490).',
  },
  {
    id: 'zone-35',
    nameAr: 'مشروع 198 — المنطقة 35 (واجهة الجامعة)',
    nameEn: 'Project 198 — Zone 35 (University Front)',
    typeAr: 'موقع دابل فيس استراتيجي',
    typeEn: 'Strategic Double-Face Corner',
    query: 'جامعة مدينة السادات',
    directUrl: 'https://www.google.com/maps/place/@30.40558632060105,30.543658629288966',
    addressAr: 'المنطقة 35، مباشرة أمام بوابة جامعة مدينة السادات وبجوار مول جولدن ليف',
    addressEn: 'Zone 35, directly facing Sadat University Gate & Golden Leaf Mall',
    badge: '🎓 واجهة الجامعة',
    whatsappMessageAr: 'السلام عليكم، أود استلام لوكيشن مشروع 198 أمام جامعة السادات بالمنطقة 35.',
    whatsappMessageEn: 'Hello, please send the GPS location pin for Project 198 in front of Sadat University.',
  },
  {
    id: 'zone-14',
    nameAr: 'مواقع مشروعات المنطقة 14 (قطعة 421 و 584)',
    nameEn: 'Zone 14 Projects & Developments',
    typeAr: 'أحياء راقية متكاملة المرافق',
    typeEn: 'Premier Residential Districts',
    query: 'المنطقة 14 مدينة السادات',
    directUrl: 'https://www.google.com/maps/place/@30.395363004766864,30.495304067558834',
    addressAr: 'المنطقة 14، خطوات من المدارس والمحاور الرئيسية، مدينة السادات',
    addressEn: 'Zone 14, steps from schools & primary avenues, Sadat City',
    badge: '🌿 حي النرجس والصفوة',
    whatsappMessageAr: 'السلام عليكم، أود استلام لوكيشن مشروعات إشبيلية في المنطقة 14 بمدينة السادات.',
    whatsappMessageEn: 'Hello, please send the GPS location for Ishbilia Zone 14 developments.',
  },
];

export default function GoogleMapShowcase() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const { openPlotMap } = usePlotMapModal();

  const [activeLocationId, setActiveLocationId] = useState<string>('hq');

  const active = mapLocations.find((l) => l.id === activeLocationId) || mapLocations[0];

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    active.query
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const googleMapsExternalUrl =
    active.directUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(active.query)}`;

  const cleanWhatsappNumber = '201010722349';

  return (
    <div className="w-full rounded-3xl overflow-hidden glass-card border border-ish-gold/30 shadow-2xl bg-gradient-to-br from-zinc-950 via-ish-black to-zinc-950">
      {/* Location Switcher Tabs Header */}
      <div className="p-4 sm:p-6 border-b border-white/10 bg-white/[0.02]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-xl shrink-0">
              📍
            </div>
            <div>
              <span className="text-[10px] font-bold text-ish-gold uppercase tracking-wider block">
                {isAr ? 'خريطة جوجل التفاعلية المباشرة' : 'Live Interactive Google Map'}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-ish-white font-headline">
                {isAr ? 'مواقع إشبيلية في مدينة السادات' : 'Ishbilia Locations in Sadat City'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center flex-wrap">
            <button
              type="button"
              onClick={() => openPlotMap(activeLocationId === 'zone-35' ? '198' : activeLocationId === 'zone-21' ? '1518' : activeLocationId === 'zone-14' ? '421' : '198')}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-ish-gold text-zinc-950 text-xs font-black transition-all flex items-center gap-1.5 shadow-md hover:scale-105 cursor-pointer border border-white/20"
            >
              <span>🗺️</span>
              <span>{isAr ? 'خريطة الـ 35 قطعة (بالأسهم)' : 'Interactive Plots Map'}</span>
              <span className="text-[10px]">⬇️</span>
            </button>

            <a
              href={googleMapsExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-ish-gold/15 hover:bg-ish-gold/25 text-ish-gold border border-ish-gold/40 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>🧭</span>
              <span>{isAr ? 'Google Maps' : 'Google Maps'}</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Location Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {mapLocations.map((loc) => {
            const isSelected = loc.id === activeLocationId;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveLocationId(loc.id)}
                className={`p-2.5 rounded-xl text-start border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md font-bold'
                    : 'bg-ish-black/70 border-white/10 text-ish-gray hover:text-ish-white hover:border-ish-gold/30'
                }`}
              >
                <span className="text-[10px] block opacity-80 mb-0.5">{loc.badge}</span>
                <strong className="text-xs truncate block">{isAr ? loc.nameAr : loc.nameEn}</strong>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Map Embed */}
      <div className="relative w-full h-[360px] sm:h-[440px] bg-ish-black">
        <iframe
          title={isAr ? active.nameAr : active.nameEn}
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />

        {/* Floating Active Info Overlay on Top of Map */}
        <div className="absolute bottom-4 start-4 end-4 sm:end-auto sm:max-w-md p-4 rounded-2xl bg-zinc-950/90 backdrop-blur-md border border-ish-gold/40 shadow-2xl text-xs space-y-2 pointer-events-auto">
          <div className="flex items-center justify-between">
            <span className="text-ish-gold font-bold text-[11px] flex items-center gap-1">
              <span>📍</span>
              <span>{isAr ? active.typeAr : active.typeEn}</span>
            </span>
            <span className="text-[10px] text-ish-gray font-mono">Sadat City</span>
          </div>

          <h4 className="text-sm font-bold text-ish-white font-headline leading-tight">
            {isAr ? active.nameAr : active.nameEn}
          </h4>

          <p className="text-ish-gray-light text-[11px] leading-relaxed">
            {isAr ? active.addressAr : active.addressEn}
          </p>

          <div className="pt-1 flex items-center gap-2">
            <a
              href={googleMapsExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-ish-gold text-ish-black font-bold text-center hover:bg-ish-gold-light transition-all flex items-center justify-center gap-1"
            >
              <span>🧭</span>
              <span>{isAr ? 'بدء التوجيه (Directions)' : 'Get Directions'}</span>
            </a>

            <a
              href={`https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(
                isAr ? active.whatsappMessageAr : active.whatsappMessageEn
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-lg bg-emerald-600 text-white font-bold text-center hover:bg-emerald-500 transition-all flex items-center justify-center gap-1"
              title={isAr ? 'إرسال اللوكيشن على واتساب' : 'Send Pin on WhatsApp'}
            >
              <span>💬</span>
              <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
