'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

interface DistrictProject {
  titleAr: string;
  titleEn: string;
  slug: string;
  highlightAr: string;
  highlightEn: string;
}

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
  projectsInDistrict: DistrictProject[];
  keyFeatures: string[];
  keyFeaturesEn: string[];
  idealFor: string;
  idealForEn: string;
}

const districtsData: District[] = [
  {
    id: 'zone-22',
    code: '22',
    name: 'المنطقة 22 — المنطقة الذهبية',
    nameEn: 'Zone 22 — The Golden Zone',
    tag: 'الوجهة الأكثر طلباً وقيمة استثمارية',
    tagEn: 'Top-Demanded Golden Real Estate Corridor',
    description:
      'قلب المنطقة الذهبية في مدينة السادات؛ الخيار الأفضل لصفوة العائلات والمستثمرين. تجمع بين الهدوء الراقي وقربها الشديد من مدرسة فيوتشر، نادي City Club، مدرسة التعليم الأساسي، وقوس خدمات المولات الكبرى.',
    descriptionEn:
      'The heart of Sadat City’s Golden Zone; the prime choice for elite families and discerning investors. Combines high serenity with walking proximity to Future School, City Club, and the Malls Arc.',
    growthRate: '+30% سنوياً',
    rentalYield: '11% - 13%',
    character: 'عمارات وفيلات فاخرة محاطة بحدائق خاصة وأرقى مجمعات الخدمات والتعليم',
    characterEn: 'Luxury residences surrounded by private gardens & educational hubs',
    projectsInDistrict: [
      {
        titleAr: 'مشروع إشبيلية 1164',
        titleEn: 'Ishbilia 1164',
        slug: 'ishbilia-1164-golden-zone',
        highlightAr: 'مباشرة على منطقة الخدمات والمولات • حدائق حتى 123 م²',
        highlightEn: 'Overlooking Malls & Services • Gardens up to 123m²'
      },
      {
        titleAr: 'مشروع إشبيلية 1152',
        titleEn: 'Ishbilia 1152',
        slug: 'ishbilia-1152-golden-zone',
        highlightAr: '150م من مدرسة فيوتشر وCity Club • حديقة محيطة 97 م²',
        highlightEn: '150m from Future School & City Club • 97m² Garden'
      },
      {
        titleAr: 'مشروع إشبيلية 1064',
        titleEn: 'Ishbilia 1064',
        slug: 'ishbilia-1064-golden-zone',
        highlightAr: '30م من قوس المولات • شقق أرضي 214 م²',
        highlightEn: '30m from Malls Arc • 214m² Ground Units'
      },
      {
        titleAr: 'مشروع إشبيلية 1167 و 1165 و 1220 و 1490',
        titleEn: 'Ishbilia 1167, 1165, 1220 & 1490',
        slug: 'ishbilia-1490-golden-zone',
        highlightAr: 'مواقع متميزة بجوار المدارس ومحور الأكسدة',
        highlightEn: 'Prime plots next to schools & Oxidation Rd'
      }
    ],
    keyFeatures: [
      '150 متر فقط من مدرسة فيوتشر ومقر نادي City Club الرياضي',
      '30 متر من قوس خدمات ومولات المنطقة الذهبية المتكاملة',
      'حدائق خاصة تحيط بالوحدات تصل مساحاتها إلى 123 م²',
      'بنية تحتية متطورة وشوارع فسيحة ذات طابع معماري نيوكلاسيكي موحد'
    ],
    keyFeaturesEn: [
      '150m from Future International School & City Club',
      'Only 30m from the Golden Zone shopping & business arc',
      'Surrounding private gardens reaching up to 123m²',
      'Modern infrastructure and wide boulevards with neoclassical flair'
    ],
    idealFor: 'السكن العائلي الفاخر، والقرب الفوري من نوادي ومدارس النخبة.',
    idealForEn: 'Luxury family residence near top tier schools and sports clubs.'
  },
  {
    id: 'rawda-rayhan',
    code: 'الروضة',
    name: 'الروضة والريحان — محور جامعة الريادة',
    nameEn: 'Al-Rawda & Al-Rayhan — University & Parks Axis',
    tag: 'مباشرة أمام الفاصل والمسطحات الخضراء',
    tagEn: 'Directly Facing Green Parks & Central Divider',
    description:
      'موقع إستثنائي مباشرة أمام الفاصل النموذجي بين حيي الروضة والريحان، على بعد خطوات من طريق الأكسدة والمحور المركزي الجديد وجامعة الريادة ومسجد الروضة، مع تميز استثنائي في مساحات الحدائق الخاصة التي تصل إلى 197 م².',
    descriptionEn:
      'An exceptional location fronting the green central divider between Al-Rawda & Al-Rayhan, steps from Oxidation Road, Al-Rayada University, and Al-Rawda Mosque, boasting gardens up to 197m².',
    growthRate: '+33% سنوياً',
    rentalYield: '12% - 15%',
    character: 'قصور وعمارات سكنية ذات واجهات غير مجروحة تطل على مسطحات خضراء',
    characterEn: 'Open facade residences fronting lush landscaped corridors',
    projectsInDistrict: [
      {
        titleAr: 'مشروع إشبيلية 578',
        titleEn: 'Ishbilia 578',
        slug: 'ishbilia-578-rawda-rayhan',
        highlightAr: 'مباشرة أمام الفاصل • 100م من الأكسدة ومسجد الروضة • حديقة 115 م²',
        highlightEn: 'On divider • 100m from Oxidation Rd • 115m² Garden'
      },
      {
        titleAr: 'مشروع إشبيلية 584',
        titleEn: 'Ishbilia 584',
        slug: 'ishbilia-584-rawda-rayhan',
        highlightAr: 'شقق متكرر ناصية 196 م² بـ 4 تراسات • حدائق حتى 97 م²',
        highlightEn: '196m² Corner Units with 4 Terraces • Gardens up to 97m²'
      },
      {
        titleAr: 'مشروع إشبيلية 637',
        titleEn: 'Ishbilia 637',
        slug: 'ishbilia-637-rawda-rayhan',
        highlightAr: 'مباشرة أمام الميدان الفاصل ومسطح أخضر • حديقة 124 م²',
        highlightEn: 'Facing Grand Roundabout & Park • 124m² Garden'
      },
      {
        titleAr: 'مشروع إشبيلية 1445 و 1500 و 623 و 421',
        titleEn: 'Ishbilia 1445, 1500, 623 & 421',
        slug: 'ishbilia-1445-rawda-rayhan',
        highlightAr: 'فيلات أرضية كاملة 234 م² وحدائق خاصة حتى 197 م²',
        highlightEn: 'Full 234m² Ground Villas with 197m² Gardens'
      }
    ],
    keyFeatures: [
      'مباشرة أمام الفاصل الخلاب بين الروضة والريحان والميدان الرئيسي',
      '100-150 متر فقط من طريق الأكسدة الحيوي ومسجد الروضة الكبير',
      '200 متر من جامعة الريادة و50 متر من المحور المركزي الجديد',
      'أكبر مساحات حدائق خاصة في مدينة السادات (تصل إلى 197 م² للوحدة)'
    ],
    keyFeaturesEn: [
      'Directly on the scenic green divider and central roundabout',
      '100-150m from Oxidation Road and Al-Rawda Mosque',
      '200m from Al-Rayada University and 50m from New Central Axis',
      'Largest private gardens in Sadat City (reaching 197m²)'
    ],
    idealFor: 'عشاق المساحات الخضراء المفتوحة والخصوصية الملكية وقرب الجامعات.',
    idealForEn: 'Lovers of private gardens, open greenery, and university proximity.'
  },
  {
    id: 'zone-35',
    code: '35',
    name: 'المنطقة 35 — واجهة الجامعة ومول جولدن ليف',
    nameEn: 'Zone 35 — University & Golden Leaf Frontage',
    tag: 'مباشرة على المحور المركزي وبوابة الجامعة',
    tagEn: 'Direct Central Axis & University Gate Frontage',
    description:
      'الموقع الاستراتيجي الأبرز المواجه مباشرة لجامعة مدينة السادات ومول وكومبوند جولدن ليف. قطع دابل فيس ناصية غير مجروحة تمنحك قيمة استثمارية فورية وسهولة مطلقة للوصول لكافة المعالم.',
    descriptionEn:
      'The prime commercial-residential corridor directly facing Sadat City University and Golden Leaf Mall & Compound, featuring unblocked double-face corner plots right on the Central Axis.',
    growthRate: '+31% سنوياً',
    rentalYield: '13% - 16%',
    character: 'واجهات دابل فيس ناصية نيوكلاسيكية على الشارع والمحور المركزي',
    characterEn: 'Double-face corner neoclassical residences on Central Axis',
    projectsInDistrict: [
      {
        titleAr: 'مشروع إشبيلية 198',
        titleEn: 'Ishbilia 198',
        slug: 'ishbilia-198-zone-35',
        highlightAr: 'دابل فيس ناصية • 130م من بوابة الجامعة • 70م من جولدن ليف',
        highlightEn: 'Double-Face Corner • 130m to University • 70m to Mall'
      },
      {
        titleAr: 'مشروع إشبيلية 190',
        titleEn: 'Ishbilia 190',
        slug: 'ishbilia-190-zone-35',
        highlightAr: 'واجهة غير مجروحة • 140م من بوابة الجامعة • 100م من المول',
        highlightEn: 'Open View • 140m to University Gate • 100m to Mall'
      },
      {
        titleAr: 'مشروع إشبيلية 162',
        titleEn: 'Ishbilia 162',
        slug: 'ishbilia-162-zone-35',
        highlightAr: 'ثاني نمرة من المحور المركزي • 400م من الجامعة • مداخل خاصة',
        highlightEn: '2nd plot from Central Axis • 400m to University'
      }
    ],
    keyFeatures: [
      '130-140 متر فقط من بوابة جامعة مدينة السادات الرئيسية',
      '70-100 متر من مول وكومبوند جولدن ليف الخدمي المتكامل',
      '400 متر من مستشفى جامعة مدينة السادات التخصصي',
      'واجهات دابل فيس ناصية صريحة غير مجروحة مباشرة على المحور'
    ],
    keyFeaturesEn: [
      '130-140m from Sadat City University main gate',
      '70-100m from Golden Leaf Integrated Mall & Compound',
      '400m from Sadat University Specialized Hospital',
      'Prime double-face corner plots with unblocked vistas on Central Axis'
    ],
    idealFor: 'الاستثمار ذو العائد الإيجاري الأسرع (سكني وأكاديمي) وموقع لا يتكرر.',
    idealForEn: 'Immediate academic & executive rental yields in a flagship location.'
  },
  {
    id: 'zone-29',
    code: '29',
    name: 'المنطقة 29 — المحور الجامعي وطريق الأكسدة',
    nameEn: 'Zone 29 — University & Oxidation Axis',
    tag: 'أول نمرة على طريق الأكسدة وسور الجامعة',
    tagEn: 'Direct Frontage on Oxidation Road & University Wall',
    description:
      'الامتداد العمراني الحديث والأسرع صعوداً في مدينة السادات؛ يقع مباشرة على طريق الأكسدة الحيوي والمحور المركزي الجديد، وعلى بعد خمس قطع فقط من سور الجامعة (130م)، بجوار نادي سات الترفيهي.',
    descriptionEn:
      'The modern, fastest-appreciating urban expansion in Sadat City; directly on Oxidation Road & New Central Axis, just 130m from the university wall, next to SAT Sports Club.',
    growthRate: '+34% سنوياً',
    rentalYield: '12% - 14%',
    character: 'عمران حديث متطور يجمع القرب الجامعي المباشر وأحدث المخططات المعمارية',
    characterEn: 'Modern university-adjacent district with high capital appreciation',
    projectsInDistrict: [
      {
        titleAr: 'مشروع إشبيلية 1297',
        titleEn: 'Ishbilia 1297',
        slug: 'ishbilia-1297-zone-29',
        highlightAr: 'أول نمرة على الأكسدة • 130م من الجامعة • 100م من نادي سات',
        highlightEn: '1st plot on Oxidation Rd • 130m to University'
      },
      {
        titleAr: 'مشروع إشبيلية 1307',
        titleEn: 'Ishbilia 1307',
        slug: 'ishbilia-1307-zone-29',
        highlightAr: 'مباشرة أمام الجامعة وعلى طريق الأكسدة مباشرة',
        highlightEn: 'Directly in front of University on Oxidation Rd'
      },
      {
        titleAr: 'مشروع إشبيلية 1317',
        titleEn: 'Ishbilia 1317',
        slug: 'ishbilia-1317-zone-29',
        highlightAr: 'أمام الجامعة • 150م من الأكسدة • حدائق خاصة حتى 123 م²',
        highlightEn: 'Facing University • 150m from Oxidation • 123m² Gardens'
      },
      {
        titleAr: 'مشروعات 1371 و 1372 و 1413 و 1483 و 1518',
        titleEn: 'Projects 1371, 1372, 1413, 1483 & 1518',
        slug: 'ishbilia-1518-zone-29',
        highlightAr: 'ميدان فاصل 22 و 29 • بحري ناصية صريحة على شارعين',
        highlightEn: 'Zone 22/29 divider • Prime North Corner on two boulevards'
      }
    ],
    keyFeatures: [
      'مباشرة على طريق الأكسدة وخامس نمرة من سور الجامعة (130م فقط)',
      '380 متر من مستشفى الجامعة و 100 متر من نادي سات الرياضي',
      'على الميدان الفاصل بين المنطقتين 22 و 29 بالقرب من قوس الخدمات',
      'أعلى معدل نمو سنوي في القيمة السعرية للمتر المربع بمدينة السادات'
    ],
    keyFeaturesEn: [
      'Directly on Oxidation Road, 5th plot from University wall (130m)',
      '380m from University Hospital and 100m from SAT Sports Club',
      'On the Zone 22 & 29 divider roundabout near the services arc',
      'Fastest annual capital appreciation rate in Sadat City'
    ],
    idealFor: 'المستثمر الباحث عن أعلى نمو رأسمالي (Capital Gain) ومضاعفة رأس المال.',
    idealForEn: 'Investors seeking maximum capital appreciation over 2-3 years.'
  },
  {
    id: 'zone-21',
    code: '21',
    name: 'المنطقة 21 — حي النخبة والفيلات والخدمات',
    nameEn: 'Zone 21 — Elite & Villa Quarter',
    tag: 'أرقى أحياء السادات السكنية الهادئة',
    tagEn: 'Sadat City’s Premier Residential Quarter',
    description:
      'المنطقة السكنية الأكثر رقياً وهدوءاً؛ تتميز بالشوارع العريضة، الكثافة السكانية المنخفضة، القرب من فاصل الـ 14 والـ 21 وفاصل الـ 21 والـ 22، و3 دقائق فقط من مدرسة فيوتشر ونادي City Club.',
    descriptionEn:
      'The most serene residential quarter in Sadat City, known for wide boulevards, low density, proximity to 14/21 and 21/22 dividers, and just 3 minutes from Future School & City Club.',
    growthRate: '+28% سنوياً',
    rentalYield: '10% - 12%',
    character: 'فيلات وعمارات سكنية فاخرة بمداخل خاصة وشوارع بعرض 24م - 30م',
    characterEn: 'Neoclassical private residences with 24-30m wide boulevards',
    projectsInDistrict: [
      {
        titleAr: 'مشروع إشبيلية 696',
        titleEn: 'Ishbilia 696',
        slug: 'ishbilia-696-zone-21',
        highlightAr: 'خطوات من الأكسدة وفاصل 14/21 • حدائق 120 م² • شقق 207 م²',
        highlightEn: 'Steps from Oxidation & 14/21 divider • 120m² Garden'
      },
      {
        titleAr: 'مشروع إشبيلية 659 و 657',
        titleEn: 'Ishbilia 659 & 657',
        slug: 'ishbilia-659-zone-21',
        highlightAr: 'ميدان فاصل 21 و 22 • 60م من قوس المولات • غرف غسيل مستقلة',
        highlightEn: 'Zone 21/22 Roundabout • 60m from Malls Arc'
      },
      {
        titleAr: 'مشروعات 638 و 786 و 814',
        titleEn: 'Ishbilia 638, 786 & 814',
        slug: 'ishbilia-638-zone-21',
        highlightAr: 'رابع نمرة من الأكسدة • شقق متكرر كبرى حتى 217 م²',
        highlightEn: '4th plot from Oxidation • Grand units up to 217m²'
      }
    ],
    keyFeatures: [
      'شوارع عريضة تتراوح بين 24م و 30م مع مساحات تشجير واسعة',
      '60 متر فقط من قوس المولات و3 دقائق من نادي City Club ومدرسة فيوتشر',
      'رابع وخامس نمرة من طريق الأكسدة وسور جامعة مدينة السادات',
      'بنية تحتية مكتملة 100% وخلو تام من أي أنشطة صناعية أو صاخبة'
    ],
    keyFeaturesEn: [
      'Wide 24m to 30m boulevards with rich landscaping',
      'Only 60m from Malls Arc and 3 min from City Club & Future School',
      '4th & 5th plot from Oxidation Road & University wall',
      '100% completed infrastructure with absolute tranquility'
    ],
    idealFor: 'السكن العائلي الهادئ الدائم والاحتفاظ بأصل عقاري يعظم قيمته لأجيال.',
    idealForEn: 'Permanent serene family living and multi-generational wealth preservation.'
  }
];

export default function SadatDistrictsExplorer() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();
  const [activeDistrictId, setActiveDistrictId] = useState<string>('zone-22');

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
            <span>{isAr ? 'خريطة الاستثمار والتميز العقاري' : 'Investment & Location Map'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? (
              <>
                أحياء ومناطق <span className="gold-gradient-text">مدينة السادات</span> الاستثمارية
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
              ? 'اختر المنطقة لاكتشاف طابعها المعماري، عوائدها الاستثمارية، وأبرز مشروعات إشبيلية المتواجدة بها مع مخططاتها الدقيقة.'
              : 'Select a district to discover its architectural character, projected ROI, and featured Ishbilia projects with exact floor plans.'}
          </p>
        </div>

        {/* 1. Interactive District Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {districtsData.map((district) => {
            const isActive = district.id === activeDistrictId;
            return (
              <button
                key={district.id}
                onClick={() => setActiveDistrictId(district.id)}
                type="button"
                className={`relative px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer shadow-lg ${
                  isActive
                    ? 'bg-ish-gold text-ish-black shadow-ish-gold/30 scale-105 border border-ish-gold-light'
                    : 'glass-card text-ish-white/90 border border-white/10 hover:border-ish-gold/50 hover:bg-white/5'
                }`}
                aria-pressed={isActive}
              >
                <span
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${
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

        {/* 2. Active District Deep-Dive Card */}
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
                  {isAr ? 'أهم مقومات ومزايا المنطقة:' : 'Key District Highlights:'}
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
                    {isAr ? 'الخيار الاستثماري الأمثل لـ:' : 'Ideal Strategy For:'}
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

                <div className="space-y-2.5 mb-4">
                  {activeDistrict.projectsInDistrict.map((project, pIdx) => (
                    <Link
                      key={pIdx}
                      href={`/projects/${project.slug}`}
                      className="group block p-3 rounded-lg bg-white/5 hover:bg-ish-gold/10 border border-white/5 hover:border-ish-gold/40 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-bold text-ish-white group-hover:text-ish-gold transition-colors flex items-center gap-2">
                          <span>🏛️</span>
                          <span>{isAr ? project.titleAr : project.titleEn}</span>
                        </span>
                        <span className="text-ish-gold text-xs group-hover:translate-x-[-2px] transition-transform">
                          {isAr ? 'عرض ←' : 'View →'}
                        </span>
                      </div>
                      <p className="text-[11px] text-ish-gray-light ps-6">
                        {isAr ? project.highlightAr : project.highlightEn}
                      </p>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/projects"
                  className="w-full py-3 rounded-lg text-xs sm:text-sm font-bold text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-ish-gold/30 cursor-pointer"
                >
                  <span>{isAr ? 'استعراض كافة مشروعات إشبيلية والوحدات' : 'Explore All Ishbilia Projects'}</span>
                  <span>←</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
