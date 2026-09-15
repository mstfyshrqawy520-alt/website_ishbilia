'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';

interface OpportunityItem {
  id: string;
  badgeAr: string;
  badgeEn: string;
  badgeType: 'urgent' | 'hot' | 'exclusive' | 'cash';
  titleAr: string;
  titleEn: string;
  highlightAr: string;
  highlightEn: string;
  projectSlug: string;
  whatsappMessageAr: string;
  whatsappMessageEn: string;
  salesWhatsapp: string;
}

const opportunities: OpportunityItem[] = [
  {
    id: 'opp-1518',
    badgeAr: '⚡ فرصة استثنائية',
    badgeEn: '⚡ Rare Opportunity',
    badgeType: 'urgent',
    titleAr: 'مشروع 1518 (المنطقة 21)',
    titleEn: 'Project 1518 (Zone 21)',
    highlightAr: 'متبقي وحدة واحدة فقط دور متكرر واجهة بحري غير مجروحة!',
    highlightEn: 'Only 1 typical floor north-facing unit remaining!',
    projectSlug: 'ishbilia-1518-zone-21',
    whatsappMessageAr: 'السلام عليكم، استفسر عن الوحدة المتبقية الأخيرة في مشروع 1518 بالمنطقة 21 لحجز معاينة عاجلة.',
    whatsappMessageEn: 'Hello, inquiring about the last remaining unit in Project 1518, Zone 21 for urgent inspection.',
    salesWhatsapp: '201016144927',
  },
  {
    id: 'opp-198',
    badgeAr: '🔥 إقبال مرتفع',
    badgeEn: '🔥 High Demand',
    badgeType: 'hot',
    titleAr: 'مشروع 198 (المنطقة 35 واجهة الجامعة)',
    titleEn: 'Project 198 (Zone 35 University View)',
    highlightAr: 'تم حجز 75% من المشروع — متبقي وحدتين أرضي بحديقة خاصة!',
    highlightEn: '75% booked — only 2 ground units with private garden left!',
    projectSlug: 'ishbilia-198-zone-35',
    whatsappMessageAr: 'السلام عليكم، أرغب في حجز وحدة أرضي بحديقة في مشروع 198 أمام جامعة السادات قبل اكتمال الحجز.',
    whatsappMessageEn: 'Hello, I want to reserve a ground floor garden unit in Project 198 before sold out.',
    salesWhatsapp: '201016144927',
  },
  {
    id: 'opp-1490',
    badgeAr: '📍 طرح حصري مبكر',
    badgeEn: '📍 Exclusive Release',
    badgeType: 'exclusive',
    titleAr: 'مشروع 1490 (المنطقة 21)',
    titleEn: 'Project 1490 (Zone 21)',
    highlightAr: 'خصم خاص وتسهيلات سداد لأول 3 متعاقدين هذا الشهر!',
    highlightEn: 'Special launch discount & payment perks for the first 3 bookings this month!',
    projectSlug: 'ishbilia-1490-zone-21',
    whatsappMessageAr: 'السلام عليكم، أود الاستفادة من الخصم الخاص وتسهيلات الحجز المبكر لمشروع 1490 بالمنطقة 21.',
    whatsappMessageEn: 'Hello, I want to claim early booking perks for Project 1490, Zone 21.',
    salesWhatsapp: '201016144927',
  },
  {
    id: 'opp-cash',
    badgeAr: '💎 عرض الكاش المباشر',
    badgeEn: '💎 Cash Special',
    badgeType: 'cash',
    titleAr: 'عروض السداد الفوري إشبيلية',
    titleEn: 'Ishbilia Instant Cash Deals',
    highlightAr: 'خصم استثنائي فوري يصل إلى 12% عند السداد الكاش للوحدات الجاهزة.',
    highlightEn: 'Up to 12% instant cash discount on turnkey ready-to-deliver units.',
    projectSlug: 'ishbilia-1518-zone-21',
    whatsappMessageAr: 'السلام عليكم، أود الاستفسار عن تفاصيل خصم السداد الكاش (12%) والمشاريع المتاحة للتسليم الفوري.',
    whatsappMessageEn: 'Hello, inquiring about the 12% cash discount details on ready-to-deliver units.',
    salesWhatsapp: '201016144927',
  },
];

export default function UrgencyTicker() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % opportunities.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = opportunities[currentIndex];

  const getCleanWhatsappUrl = (phone: string, text: string) => {
    const raw = (phone || '201016144927').replace(/[^0-9]/g, '');
    const cleanPhone = raw.startsWith('20') ? raw : raw.startsWith('0') ? `2${raw}` : `20${raw}`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  const getBadgeStyle = (type: OpportunityItem['badgeType']) => {
    switch (type) {
      case 'urgent':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-rose-500/10';
      case 'hot':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-amber-500/10';
      case 'exclusive':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-emerald-500/10';
      case 'cash':
        return 'bg-ish-gold/20 text-ish-gold border-ish-gold/40 shadow-ish-gold/10';
    }
  };

  return (
    <div
      className="relative z-30 w-full bg-gradient-to-r from-zinc-950 via-ish-black to-zinc-950 border-y border-ish-gold/25 py-2.5 px-4 overflow-hidden backdrop-blur-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glow effects */}
      <div className="absolute top-0 start-1/4 w-48 h-full bg-ish-gold/[0.04] blur-xl pointer-events-none" />
      <div className="absolute top-0 end-1/4 w-48 h-full bg-rose-500/[0.03] blur-xl pointer-events-none" />

      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Live indicator & ticker message */}
        <div className="flex items-center gap-3 w-full md:w-auto flex-1 min-w-0">
          {/* Pulsing Live Dot */}
          <div className="flex items-center gap-1.5 shrink-0 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
              {isAr ? 'مباشر من إدارة المبيعات' : 'Live Sales Ticker'}
            </span>
          </div>

          {/* Current Opportunity Banner */}
          <div className="flex items-center gap-2 flex-wrap min-w-0 flex-1 transition-all duration-300">
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-md border shrink-0 ${getBadgeStyle(
                current.badgeType
              )}`}
            >
              {isAr ? current.badgeAr : current.badgeEn}
            </span>

            <strong className="text-xs sm:text-sm font-bold text-ish-white shrink-0 font-headline">
              {isAr ? current.titleAr : current.titleEn}:
            </strong>

            <span className="text-xs text-ish-gray-light truncate font-body">
              {isAr ? current.highlightAr : current.highlightEn}
            </span>
          </div>
        </div>

        {/* CTA & Switcher Buttons */}
        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          {/* Quick WhatsApp Lead Trigger */}
          <a
            href={getCleanWhatsappUrl(
              current.salesWhatsapp,
              isAr ? current.whatsappMessageAr : current.whatsappMessageEn
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-ish-gold to-amber-400 text-ish-black text-xs font-bold hover:brightness-110 transition-all flex items-center gap-1.5 shadow-md shadow-ish-gold/20 cursor-pointer shrink-0"
          >
            <span>💬</span>
            <span>{isAr ? 'حجز الفرصة قبل النفاذ' : 'Claim Opportunity'}</span>
            <span>←</span>
          </a>

          {/* Dots Indicator */}
          <div className="hidden sm:flex items-center gap-1 ps-2">
            {opportunities.map((opp, idx) => (
              <button
                key={opp.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-5 bg-ish-gold' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Opportunity ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
