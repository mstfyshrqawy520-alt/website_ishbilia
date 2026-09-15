'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';
import { projectsData, Project, ProjectUnit } from '@/data/projects';

// ─── Types ────────────────────────────────────────────────────────
interface UserPreferences {
  bedrooms: number | null;
  wantsGarden: boolean | null;
  preferredZone: string | null;
  areaRange: 'small' | 'medium' | 'large' | null;
}

interface MatchedUnit {
  project: Project;
  unit: ProjectUnit;
  score: number;
  reasons: string[];
  reasonsEn: string[];
}

// ─── Steps ─────────────────────────────────────────────────────────
const TOTAL_STEPS = 4;

export default function SmartUnitFinder() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();

  const [step, setStep] = useState(0); // 0 = intro, 1-4 = questions, 5 = results
  const [preferences, setPreferences] = useState<UserPreferences>({
    bedrooms: null,
    wantsGarden: null,
    preferredZone: null,
    areaRange: null,
  });
  const [animating, setAnimating] = useState(false);

  // ─── Unique zones from real data ────────────────────────────────
  const zones = useMemo(() => {
    const set = new Set<string>();
    projectsData.forEach((p) => set.add(p.zone));
    return Array.from(set);
  }, []);

  const zonesEn = useMemo(() => {
    const map = new Map<string, string>();
    projectsData.forEach((p) => map.set(p.zone, p.zoneEn));
    return map;
  }, []);

  // ─── Smart Matching Engine ──────────────────────────────────────
  const matchedUnits: MatchedUnit[] = useMemo(() => {
    if (step < 5) return [];

    const results: MatchedUnit[] = [];

    projectsData.forEach((project) => {
      project.units.forEach((unit) => {
        let score = 0;
        const reasons: string[] = [];
        const reasonsEn: string[] = [];

        // Bedrooms match
        if (preferences.bedrooms !== null) {
          if (unit.bedrooms === preferences.bedrooms) {
            score += 30;
            reasons.push(`${unit.bedrooms} غرف نوم كما طلبت`);
            reasonsEn.push(`${unit.bedrooms} bedrooms as requested`);
          } else if (Math.abs(unit.bedrooms - preferences.bedrooms) === 1) {
            score += 15;
            reasons.push(`${unit.bedrooms} غرف نوم (قريب من طلبك)`);
            reasonsEn.push(`${unit.bedrooms} bedrooms (close match)`);
          }
        }

        // Garden preference
        if (preferences.wantsGarden !== null) {
          const hasGarden = unit.gardenArea && unit.gardenArea > 0;
          if (preferences.wantsGarden && hasGarden) {
            score += 25;
            reasons.push(`حديقة خاصة ${unit.gardenArea}م²`);
            reasonsEn.push(`Private garden ${unit.gardenArea}m²`);
          } else if (!preferences.wantsGarden && !hasGarden) {
            score += 15;
            reasons.push('دور متكرر بدون حديقة');
            reasonsEn.push('Typical floor without garden');
          }
        }

        // Zone preference
        if (preferences.preferredZone !== null) {
          if (project.zone === preferences.preferredZone) {
            score += 25;
            reasons.push(`في ${project.zone} المفضلة لديك`);
            reasonsEn.push(`In your preferred ${project.zoneEn}`);
          }
        }

        // Area range match
        if (preferences.areaRange !== null) {
          const area = unit.area;
          if (preferences.areaRange === 'small' && area <= 140) {
            score += 20;
            reasons.push(`مساحة مناسبة ${area}م²`);
            reasonsEn.push(`Suitable area ${area}m²`);
          } else if (preferences.areaRange === 'medium' && area > 140 && area <= 180) {
            score += 20;
            reasons.push(`مساحة متوسطة مثالية ${area}م²`);
            reasonsEn.push(`Ideal medium area ${area}m²`);
          } else if (preferences.areaRange === 'large' && area > 180) {
            score += 20;
            reasons.push(`مساحة كبيرة فاخرة ${area}م²`);
            reasonsEn.push(`Large luxury area ${area}m²`);
          } else if (
            (preferences.areaRange === 'small' && area <= 160) ||
            (preferences.areaRange === 'medium' && (area > 120 && area <= 200)) ||
            (preferences.areaRange === 'large' && area > 160)
          ) {
            score += 10;
            reasons.push(`مساحة ${area}م² (قريبة من المطلوب)`);
            reasonsEn.push(`Area ${area}m² (close match)`);
          }
        }

        if (score > 0) {
          results.push({ project, unit, score, reasons, reasonsEn });
        }
      });
    });

    // Sort by score desc, then take top 5
    return results.sort((a, b) => b.score - a.score).slice(0, 5);
  }, [step, preferences]);

  // ─── Navigation ─────────────────────────────────────────────────
  const goNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s + 1);
      setAnimating(false);
    }, 300);
  };

  const goBack = () => {
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => Math.max(0, s - 1));
      setAnimating(false);
    }, 300);
  };

  const restart = () => {
    setAnimating(true);
    setTimeout(() => {
      setStep(0);
      setPreferences({ bedrooms: null, wantsGarden: null, preferredZone: null, areaRange: null });
      setAnimating(false);
    }, 300);
  };

  const selectAndNext = <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => {
    setPreferences((p) => ({ ...p, [key]: value }));
    goNext();
  };

  // ─── WhatsApp Share ─────────────────────────────────────────────
  const buildWhatsAppMessage = () => {
    if (matchedUnits.length === 0) return '';
    const top = matchedUnits[0];
    const msg = isAr
      ? `السلام عليكم، استخدمت مساعد اختيار الشقة الذكي في موقع إشبيلية وأعجبتني هذه الوحدة:\n\n🏠 ${top.project.title}\n📍 ${top.project.zone} - قطعة ${top.project.plotNumber}\n📐 المساحة: ${top.unit.area}م²\n🛏️ ${top.unit.bedrooms} غرف نوم\n${top.unit.gardenArea ? `🌿 حديقة: ${top.unit.gardenArea}م²\n` : ''}\nأرغب في الاستفسار عن هذه الوحدة وحجز موعد معاينة.`
      : `Hello, I used the Smart Unit Finder on Ishbilia website and I'm interested in:\n\n🏠 ${top.project.titleEn}\n📍 ${top.project.zoneEn} - Plot ${top.project.plotNumber}\n📐 Area: ${top.unit.area}m²\n🛏️ ${top.unit.bedrooms} bedrooms\n${top.unit.gardenArea ? `🌿 Garden: ${top.unit.gardenArea}m²\n` : ''}\nI'd like to inquire about this unit and book a tour.`;
    return `https://wa.me/${top.project.salesWhatsapp}?text=${encodeURIComponent(msg)}`;
  };

  // ─── Progress indicator ─────────────────────────────────────────
  const progressPercent = step === 0 ? 0 : step >= 5 ? 100 : (step / TOTAL_STEPS) * 100;

  return (
    <section
      className="section-rhythm relative scroll-mt-28 w-full overflow-hidden"
      id="smart-finder-section"
      style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(15,12,8,1) 50%, var(--bg-primary) 100%)' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 start-1/4 w-[500px] h-[500px] bg-ish-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-[400px] h-[400px] bg-ish-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-10 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold animate-pulse" />
            <span>{isAr ? 'أداة تفاعلية حصرية' : 'Exclusive Interactive Tool'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? (
              <>مساعد اختيار الشقة <span className="gold-gradient-text">الذكي</span></>
            ) : (
              <>Smart Unit <span className="gold-gradient-text">Finder</span></>
            )}
          </h2>

          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto font-body">
            {isAr
              ? 'جاوب على 4 أسئلة سريعة وهنرشحلك أنسب وحدة من مشاريعنا الحقيقية مباشرة!'
              : 'Answer 4 quick questions and we\'ll match you with your ideal unit from our real projects!'}
          </p>
        </div>

        {/* ═══════════ Main Card ═══════════ */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40">
            {/* Progress Bar */}
            {step > 0 && step <= TOTAL_STEPS && (
              <div className="h-1.5 bg-white/5 w-full">
                <div
                  className="h-full bg-gradient-to-r from-ish-gold to-ish-gold-light rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            )}

            <div className={`p-8 sm:p-10 transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>

              {/* ─── Step 0: Intro ────────────────────────────────── */}
              {step === 0 && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-ish-gold/15 border-2 border-ish-gold/40 flex items-center justify-center text-4xl">
                    🏠
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ish-white mb-3 font-headline">
                      {isAr ? 'مش عارف تختار؟ سيبها علينا!' : 'Not sure what to choose? Let us help!'}
                    </h3>
                    <p className="text-ish-gray text-sm sm:text-base max-w-md mx-auto font-body">
                      {isAr
                        ? 'في 30 ثانية بس هنساعدك تلاقي الشقة المثالية من مشاريع إشبيلية الحقيقية. جاهز؟'
                        : 'In just 30 seconds, we\'ll help you find your perfect apartment from real Ishbilia projects. Ready?'}
                    </p>
                  </div>
                  <button
                    onClick={goNext}
                    className="btn-gold rounded-full px-10 py-3.5 text-base font-bold inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>{isAr ? 'يلا نبدأ!' : "Let's Start!"}</span>
                    <span className="text-lg">🚀</span>
                  </button>
                </div>
              )}

              {/* ─── Step 1: Bedrooms ─────────────────────────────── */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-xs text-ish-gold font-bold mb-2 block">
                      {isAr ? `السؤال 1 من ${TOTAL_STEPS}` : `Question 1 of ${TOTAL_STEPS}`}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-ish-white font-headline">
                      {isAr ? 'كام غرفة نوم محتاج؟' : 'How many bedrooms do you need?'}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => selectAndNext('bedrooms', num)}
                        className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center gap-2 hover:scale-[1.03] ${
                          preferences.bedrooms === num
                            ? 'bg-ish-gold/20 border-ish-gold text-ish-gold shadow-lg shadow-ish-gold/20'
                            : 'bg-white/5 border-white/10 text-ish-white hover:border-ish-gold/40 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-3xl">🛏️</span>
                        <span className="text-2xl font-bold">{num}</span>
                        <span className="text-xs text-ish-gray">
                          {isAr ? `${num} غرف` : `${num} Rooms`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ─── Step 2: Garden ───────────────────────────────── */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-xs text-ish-gold font-bold mb-2 block">
                      {isAr ? `السؤال 2 من ${TOTAL_STEPS}` : `Question 2 of ${TOTAL_STEPS}`}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-ish-white font-headline">
                      {isAr ? 'عايز حديقة خاصة؟' : 'Do you want a private garden?'}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => selectAndNext('wantsGarden', true)}
                      className="p-6 rounded-2xl border bg-white/5 border-white/10 text-ish-white hover:border-ish-gold/40 hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col items-center gap-3 hover:scale-[1.03]"
                    >
                      <span className="text-4xl">🌿</span>
                      <span className="font-bold text-lg">
                        {isAr ? 'أيوه، أرضي بحديقة' : 'Yes, ground with garden'}
                      </span>
                      <span className="text-xs text-ish-gray">
                        {isAr ? 'مدخل خاص + حديقة خاصة' : 'Private entrance + garden'}
                      </span>
                    </button>
                    <button
                      onClick={() => selectAndNext('wantsGarden', false)}
                      className="p-6 rounded-2xl border bg-white/5 border-white/10 text-ish-white hover:border-ish-gold/40 hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col items-center gap-3 hover:scale-[1.03]"
                    >
                      <span className="text-4xl">🏢</span>
                      <span className="font-bold text-lg">
                        {isAr ? 'لا، دور متكرر' : 'No, typical floor'}
                      </span>
                      <span className="text-xs text-ish-gray">
                        {isAr ? 'إطلالة مفتوحة + سعر أقل' : 'Open view + lower price'}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* ─── Step 3: Zone ─────────────────────────────────── */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-xs text-ish-gold font-bold mb-2 block">
                      {isAr ? `السؤال 3 من ${TOTAL_STEPS}` : `Question 3 of ${TOTAL_STEPS}`}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-ish-white font-headline">
                      {isAr ? 'تفضّل أي منطقة؟' : 'Which zone do you prefer?'}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {zones.map((zone) => {
                      const count = projectsData.filter((p) => p.zone === zone).length;
                      return (
                        <button
                          key={zone}
                          onClick={() => selectAndNext('preferredZone', zone)}
                          className="p-4 rounded-2xl border bg-white/5 border-white/10 text-ish-white hover:border-ish-gold/40 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center gap-3 hover:scale-[1.02] text-start"
                        >
                          <span className="w-10 h-10 rounded-xl bg-ish-gold/15 border border-ish-gold/30 flex items-center justify-center text-lg shrink-0">
                            📍
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="font-bold block truncate">
                              {isAr ? zone : zonesEn.get(zone) || zone}
                            </span>
                            <span className="text-xs text-ish-gray">
                              {isAr ? `${count} مشروع متاح` : `${count} projects available`}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ─── Step 4: Area ─────────────────────────────────── */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-xs text-ish-gold font-bold mb-2 block">
                      {isAr ? `السؤال 4 من ${TOTAL_STEPS}` : `Question 4 of ${TOTAL_STEPS}`}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-ish-white font-headline">
                      {isAr ? 'تفضّل مساحة قد إيه؟' : 'What area size do you prefer?'}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { key: 'small' as const, icon: '📏', ar: 'مساحة عملية', en: 'Compact', subAr: 'حتى 140م²', subEn: 'Up to 140m²' },
                      { key: 'medium' as const, icon: '📐', ar: 'مساحة متوسطة', en: 'Medium', subAr: '140 - 180م²', subEn: '140 - 180m²' },
                      { key: 'large' as const, icon: '🏛️', ar: 'مساحة كبيرة', en: 'Large', subAr: 'أكثر من 180م²', subEn: 'Over 180m²' },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => selectAndNext('areaRange', opt.key)}
                        className="p-5 rounded-2xl border bg-white/5 border-white/10 text-ish-white hover:border-ish-gold/40 hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col items-center gap-2 hover:scale-[1.03]"
                      >
                        <span className="text-3xl">{opt.icon}</span>
                        <span className="font-bold">{isAr ? opt.ar : opt.en}</span>
                        <span className="text-xs text-ish-gold font-semibold">{isAr ? opt.subAr : opt.subEn}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ─── Step 5: Results ──────────────────────────────── */}
              {step === 5 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-3xl mb-4">
                      ✨
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-ish-white font-headline mb-1">
                      {isAr ? 'لقينالك أنسب الوحدات!' : 'We found your best matches!'}
                    </h3>
                    <p className="text-xs text-ish-gray">
                      {isAr
                        ? `${matchedUnits.length} وحدة مطابقة لاحتياجاتك من ${projectsData.length} مشروع`
                        : `${matchedUnits.length} matching units from ${projectsData.length} projects`}
                    </p>
                  </div>

                  {matchedUnits.length > 0 ? (
                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
                      {matchedUnits.map((match, index) => (
                        <div
                          key={`${match.project.id}-${match.unit.id}`}
                          className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                            index === 0
                              ? 'bg-ish-gold/10 border-ish-gold/40 shadow-lg shadow-ish-gold/10'
                              : 'bg-white/5 border-white/10'
                          }`}
                        >
                          {index === 0 && (
                            <div className="bg-ish-gold/20 px-4 py-1.5 text-center">
                              <span className="text-xs font-bold text-ish-gold">
                                {isAr ? '⭐ أفضل تطابق لك' : '⭐ Best Match for You'}
                              </span>
                            </div>
                          )}

                          <div className="p-4 flex gap-4">
                            {/* Image */}
                            <Link
                              href={`/projects/${match.project.slug}`}
                              className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-white/10"
                            >
                              <Image
                                src={match.project.facadeImage}
                                alt={match.project.title}
                                fill
                                className="object-cover"
                                sizes="80px"
                              />
                            </Link>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <Link href={`/projects/${match.project.slug}`}>
                                <h4 className="font-bold text-sm text-ish-white truncate hover:text-ish-gold transition-colors cursor-pointer">
                                  {isAr ? match.project.title : match.project.titleEn}
                                </h4>
                              </Link>
                              <p className="text-xs text-ish-gray mt-0.5 truncate">
                                {isAr ? match.unit.name : match.unit.nameEn}
                              </p>

                              {/* Match score */}
                              <div className="flex items-center gap-2 mt-2">
                                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-ish-gold to-emerald-400 rounded-full transition-all duration-700"
                                    style={{ width: `${match.score}%` }}
                                  />
                                </div>
                                <span className="text-xs font-bold text-ish-gold">{match.score}%</span>
                              </div>

                              {/* Reasons */}
                              <div className="flex flex-wrap gap-1 mt-2">
                                {(isAr ? match.reasons : match.reasonsEn).slice(0, 2).map((r, i) => (
                                  <span
                                    key={i}
                                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-ish-gray border border-white/5"
                                  >
                                    {r}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <span className="text-4xl block mb-3">😕</span>
                      <p className="text-ish-gray text-sm">
                        {isAr
                          ? 'للأسف مفيش وحدات مطابقة حالياً. جرّب اختيارات مختلفة!'
                          : 'No exact matches found. Try different preferences!'}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {matchedUnits.length > 0 && (
                      <a
                        href={buildWhatsAppMessage()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                      >
                        <span>💬</span>
                        <span>{isAr ? 'استفسر على واتساب' : 'Inquire on WhatsApp'}</span>
                      </a>
                    )}
                    <button
                      onClick={restart}
                      className="flex-1 py-3 px-5 rounded-xl text-sm font-bold text-ish-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>🔄</span>
                      <span>{isAr ? 'جرّب تاني' : 'Try Again'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Back button (not on intro or results) */}
              {step > 0 && step <= TOTAL_STEPS && (
                <button
                  onClick={goBack}
                  className="mt-6 text-xs text-ish-gray hover:text-ish-gold transition-colors flex items-center gap-1.5 mx-auto cursor-pointer"
                >
                  <span>←</span>
                  <span>{isAr ? 'الرجوع للسؤال السابق' : 'Go back'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Trust note */}
          <p className="text-center text-[11px] text-ish-gray/60 mt-4 font-body">
            {isAr
              ? '🔒 بياناتك آمنة تماماً — لا نحفظ أي معلومات شخصية'
              : '🔒 Your data is completely safe — we don\'t store any personal information'}
          </p>
        </div>
      </div>
    </section>
  );
}
