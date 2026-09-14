'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

interface District {
  id: string;
  code: string;
  name: string;
  nameEn: string;
  tag: string;
  tagEn: string;
  description: string;
  descriptionEn: string;
  growthRate: string;
  rentalYield: string;
  character: string;
  characterEn: string;
  projectsInDistrict: string[];
  projectsInDistrictEn: string[];
  keyFeatures: string[];
  keyFeaturesEn: string[];
  idealFor: string;
  idealForEn: string;
}

const districtsData: District[] = [
  {
    id: 'zone-21',
    code: '21',
    name: 'المنطقة 21 — حي النخبة والفيلات',
    nameEn: 'Zone 21 — Elite & Villa Quarter',
    tag: 'أرقى أحياء السادات السكنية',
    tagEn: 'Sadat City’s Premier Residential Zone',
    description:
      'المنطقة السكنية الأكثر رقياً وهدوءاً في مدينة السادات. تتميز بالطابع المعماري الفاخر، الكثافة السكانية المنخفضة، الشوارع العريضة التي تصل إلى 30 متراً، وتوافر الحدائق الخاصة التي تمنح كل عقار خصوصية ملكية مطلقة.',
    descriptionEn:
      'The most prestigious and serene residential area in Sadat City. Renowned for luxury architectural character, low population density, wide 30m streets, and spacious private gardens providing royal privacy.',
    growthRate: '+28% سنوياً',
    rentalYield: '10% - 12%',
    character: 'فيلات وعمارات سكنية خاصة بطراز كلاسيكي راقٍ',
    characterEn: 'Neoclassical private residences & villas',
    projectsInDistrict: ['مشروع إشبيلية 1490 (المنطقة الذهبية)', 'مشروع إشبيلية 1518 (قريب من المحاور)'],
    projectsInDistrictEn: ['Ishbilia 1490 (Golden Zone)', 'Ishbilia 1518 (Strategic Access)'],
    keyFeatures: [
      'شوارع عريضة تتراوح بين 24م و 30م مع مساحات تشجير واسعة',
      'بنية تحتية وشبكات مرافق متطورة ومكتملة بنسبة 100%',
      'خلو تام من أي أنشطة صناعية أو تجارية صاخبة لضمان أعلى هدوء',
      'إقبال مرتفع جداً من كبار العائلات وصفوة المستثمرين'
    ],
    keyFeaturesEn: [
      'Wide 24m to 30m boulevards with rich landscaping',
      '100% completed modern infrastructure and utilities',
      'Completely free from industrial or noisy commercial activities',
      'High demand among distinguished families and elite investors'
    ],
    idealFor: 'السكن العائلي الفاخر، والاحتفاظ بأصل عقاري يعظم قيمته لأجيال.',
    idealForEn: 'Luxury family residence and multi-generational wealth preservation.'
  },
  {
    id: 'zone-14',
    code: '14',
    name: 'المنطقة 14 — الحي السكني المتكامل',
    nameEn: 'Zone 14 — Integrated Residential Hub',
    tag: 'شريان الحياة السكني والخدمي',
    tagEn: 'Vibrant Residential & Services Corridor',
    description:
      'القلب السكني النابض لمدينة السادات؛ يجمع بين الراحة العائلية والاقتراب الفوري من كافة مجمعات الخدمات والمدارس والمراكز الطبية. يوفر طلباً استثمارياً وإيجارياً مستمراً طوال العام بمعدلات إشغال قياسية.',
    descriptionEn:
      'The bustling residential heart of Sadat City; combining comfortable family living with instant proximity to educational complexes, medical facilities, and commercial services with year-round rental demand.',
    growthRate: '+25% سنوياً',
    rentalYield: '12% - 15%',
    character: 'حي حيوي متكامل الخدمات يجمع السكن الراقي والأنشطة الإدارية',
    characterEn: 'Vibrant integrated community with premium residences',
    projectsInDistrict: ['مشروع إشبيلية بلازا (قطعة 810) — تجاري وإداري وسكني'],
    projectsInDistrictEn: ['Ishbilia Plaza (Plot 810) — Mixed Commercial & Admin'],
    keyFeatures: [
      'خطوات معدودة من كبرى المجمعات التعليمية والمدارس النموذجية',
      'قرب مباشر من المراكز الطبية والعيادات المتخصصة والمستشفيات',
      'عائد إيجاري هو الأعلى في المدينة بفضل الإقبال السكني المستمر',
      'سهولة الوصول إلى المحاور الرئيسية ووسط المدينة'
    ],
    keyFeaturesEn: [
      'Walking distance from premier schools and education zones',
      'Immediate access to specialized medical clinics and hospitals',
      'Highest rental yields driven by continuous resident demand',
      'Seamless connectivity to central Sadat City boulevards'
    ],
    idealFor: 'الاستثمار الإيجاري السريع والعائد الدوري المرتفع مع الحفاظ على رأس المال.',
    idealForEn: 'Immediate rental income and maximum recurring yield.'
  },
  {
    id: 'zone-29',
    code: '29',
    name: 'المنطقة 29 — محور التوسع والفرص الواعدة',
    nameEn: 'Zone 29 — Growth & Future Axis',
    tag: 'مستقبل الاستثمار العقاري الواعد',
    tagEn: 'High-Appreciation Expansion Corridor',
    description:
      'الامتداد العمراني الحديث والأسرع صعوداً في مدينة السادات؛ بجوار جامعة مدينة السادات وثاني نمرة من مجمع خدمات المنطقة. تمثل الخيار الذهبي لمضاعفة رأس المال بفضل أسعار الشراء الحالية والنمو المتسارع للمنطقة.',
    descriptionEn:
      'The modern, fastest-appreciating urban expansion in Sadat City; located right next to Sadat City University and steps from the community services complex. The golden choice for rapid capital appreciation.',
    growthRate: '+32% سنوياً',
    rentalYield: '11% - 14%',
    character: 'عمران حديث متطور يمثل الوجهة الأولى للتوسع السكني الجامعي',
    characterEn: 'Modern district representing prime university-adjacent growth',
    projectsInDistrict: ['مشروع إشبيلية 1518 (واجهة بحري ناصية على شارعين رئيسيين)'],
    projectsInDistrictEn: ['Ishbilia 1518 (Prime North-Facing Corner Facade)'],
    keyFeatures: [
      'موقع استراتيجي على بعد دقائق من جامعة السادات والمحور المركزي',
      'ثاني نمرة من مجمع الخدمات الرئيسي (مسجد - مدرسة - مركز تجاري)',
      'أعلى معدل تصاعد في القيمة السعرية للمتر المربع بالمدينة',
      'مخططات معمارية مرنة مع حدائق خاصة وتراسات مفتوحة واسعة'
    ],
    keyFeaturesEn: [
      'Minutes from Sadat City University and the Old Central Axis',
      'Second plot from major community services hub',
      'Highest capital appreciation rate per square meter in the city',
      'Flexible architectural layouts with large private gardens'
    ],
    idealFor: 'المستثمر الباحث عن أعلى نمو رأسمالي (Capital Gain) خلال 2-3 سنوات.',
    idealForEn: 'Investors seeking maximum capital gain over the next 2-3 years.'
  }
];

export default function SadatDistrictsExplorer() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();
  const [activeDistrictId, setActiveDistrictId] = useState<string>('zone-21');

  const activeDistrict = districtsData.find((d) => d.id === activeDistrictId) || districtsData[0];

  return (
    <section className="section-rhythm section-primary relative w-full overflow-hidden" id="districts-explorer">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-ish-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-12 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold animate-pulse" />
            <span>{isAr ? 'خريطة الاستثمار والتميز' : 'Investment & Location Map'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? (
              <>
                مستكشف مناطق <span className="gold-gradient-text">مدينة السادات</span> الاستثمارية
              </>
            ) : (
              <>
                Explore <span className="gold-gradient-text">Sadat City</span> Investment Districts
              </>
            )}
          </h2>

          <div className="gold-line max-w-xs mx-auto mb-5" />

          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto font-body">
            {isAr
              ? 'اختر المنطقة لاكتشاف طابعها المعماري، عوائدها الاستثمارية، وأبرز مشروعات إشبيلية المتواجدة بها.'
              : 'Select a district to discover its architectural character, projected ROI, and featured Ishbilia projects.'}
          </p>
        </div>

        {/* 1. Interactive District Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          {districtsData.map((district) => {
            const isActive = district.id === activeDistrictId;
            return (
              <button
                key={district.id}
                onClick={() => setActiveDistrictId(district.id)}
                type="button"
                className={`relative px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-lg ${
                  isActive
                    ? 'bg-ish-gold text-ish-black shadow-ish-gold/30 scale-105 border border-ish-gold-light'
                    : 'glass-card text-ish-white/90 border border-white/10 hover:border-ish-gold/50 hover:bg-white/5'
                }`}
                aria-pressed={isActive}
              >
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black ${
                    isActive ? 'bg-ish-black text-ish-gold' : 'bg-ish-gold/20 text-ish-gold'
                  }`}
                >
                  {district.code}
                </span>
                <span>{isAr ? district.name.split('—')[0] : district.nameEn.split('—')[0]}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-ish-black animate-ping hidden sm:inline-block" />
                )}
              </button>
            );
          })}
        </div>

        {/* 2. Active District Deep-Dive Card (Glassmorphism Luxury Container) */}
        <div className="glass-card rounded-2xl border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Subtle Decorative Gold Grid Watermark */}
          <div className="absolute top-0 end-0 p-8 opacity-5 text-ish-gold font-mono font-black text-8xl pointer-events-none select-none">
            {activeDistrict.code}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: District Details & Highlights (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-ish-gold/15 text-ish-gold text-xs font-bold border border-ish-gold/30 mb-3">
                <span>{isAr ? activeDistrict.tag : activeDistrict.tagEn}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-ish-white mb-4 font-headline">
                {isAr ? activeDistrict.name : activeDistrict.nameEn}
              </h3>

              <p className="text-ish-gray-light text-base sm:text-lg leading-relaxed mb-6 font-body">
                {isAr ? activeDistrict.description : activeDistrict.descriptionEn}
              </p>

              {/* Key Features Bullet List */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs uppercase tracking-wider text-ish-gold font-bold mb-2">
                  {isAr ? 'أهم مقومات المنطقة:' : 'Key District Highlights:'}
                </h4>
                {(isAr ? activeDistrict.keyFeatures : activeDistrict.keyFeaturesEn).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-ish-white/90">
                    <div className="w-5 h-5 rounded-full bg-ish-gold/20 border border-ish-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-ish-gold text-xs">✓</span>
                    </div>
                    <span className="leading-normal">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Ideal For Box */}
              <div className="p-4 rounded-xl bg-ish-black/60 border border-ish-gold/25 flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <span className="block text-xs font-bold text-ish-gold mb-0.5">
                    {isAr ? 'الخيار الأمثل لـ:' : 'Ideal Strategy For:'}
                  </span>
                  <span className="text-xs sm:text-sm text-ish-white/90 font-medium">
                    {isAr ? activeDistrict.idealFor : activeDistrict.idealForEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Metrics, Ishbilia Projects & Action (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Stat Highlights Card */}
              <div className="rounded-xl p-6 bg-ish-black/80 border border-white/10 shadow-inner">
                <h4 className="text-xs uppercase tracking-wider text-ish-gray-light font-bold mb-4 flex items-center justify-between">
                  <span>{isAr ? 'مؤشرات الأداء الاستثماري' : 'Investment Metrics'}</span>
                  <span className="text-[10px] text-ish-gold font-mono">2026/2027</span>
                </h4>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">
                      {activeDistrict.growthRate}
                    </span>
                    <span className="text-xs text-ish-gray-light mt-1 block">
                      {isAr ? 'معدل النمو الرأسمالي' : 'Capital Appreciation'}
                    </span>
                  </div>

                  <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                    <span className="block text-2xl sm:text-3xl font-black text-emerald-400">
                      {activeDistrict.rentalYield}
                    </span>
                    <span className="text-xs text-ish-gray-light mt-1 block">
                      {isAr ? 'العائد الإيجاري السنوي' : 'Annual Rental Yield'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="block text-xs text-ish-gray-light mb-1">
                    {isAr ? 'الطابع والنمط المعماري:' : 'Architectural Typology:'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ish-white block">
                    {isAr ? activeDistrict.character : activeDistrict.characterEn}
                  </span>
                </div>
              </div>

              {/* Ishbilia Projects in this District */}
              <div className="rounded-xl p-5 bg-gradient-to-br from-ish-gold/15 via-ish-black/80 to-ish-black border border-ish-gold/30">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-ish-gold" />
                  <h4 className="text-xs font-bold text-ish-gold uppercase tracking-wider">
                    {isAr ? 'مشروعات إشبيلية في هذه المنطقة:' : 'Ishbilia Projects in this Zone:'}
                  </h4>
                </div>

                <ul className="space-y-2 mb-4">
                  {(isAr ? activeDistrict.projectsInDistrict : activeDistrict.projectsInDistrictEn).map(
                    (project, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs sm:text-sm font-bold text-ish-white flex items-center gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5"
                      >
                        <span className="text-ish-gold">🏛️</span>
                        <span>{project}</span>
                      </li>
                    )
                  )}
                </ul>

                <a
                  href="#projects-section"
                  className="w-full py-3 rounded-lg text-xs sm:text-sm font-bold text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-ish-gold/30 cursor-pointer"
                >
                  <span>{isAr ? 'استعراض الوحدات والمخططات المتاحة' : 'View Units & Floor Plans'}</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
