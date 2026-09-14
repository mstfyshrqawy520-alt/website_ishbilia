'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function LandOwners() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();

  // Interactive Simulator State
  const [district, setDistrict] = useState('zone-21');
  const [plotArea, setPlotArea] = useState<number>(500);
  const [facadeType, setFacadeType] = useState('corner');

  // Calculation estimates (without hardcoding profit ratios)
  const getCalculatedSpecs = () => {
    // Standard building footprint in Sadat City is around 50% to 55% ground, typical 55% to 60%
    const footprint = Math.round(plotArea * 0.55);
    // Typical residential building: Ground + 3 typical floors + roof service
    const estUnits = plotArea >= 700 ? '10 - 12 وحدة فاخرة' : plotArea >= 500 ? '8 - 10 وحدات فاخرة' : '6 - 8 وحدات فاخرة';
    const estUnitsEn = plotArea >= 700 ? '10 - 12 Luxury Units' : plotArea >= 500 ? '8 - 10 Luxury Units' : '6 - 8 Luxury Units';
    const gardenArea = plotArea >= 500 ? 'حدائق خاصة تصل إلى 110م²' : 'حدائق خاصة تصل إلى 75م²';
    const gardenAreaEn = plotArea >= 500 ? 'Private gardens up to 110m²' : 'Private gardens up to 75m²';

    return {
      footprint,
      estUnits: isAr ? estUnits : estUnitsEn,
      gardenArea: isAr ? gardenArea : gardenAreaEn,
      floors: isAr ? 'بدروم + أرضي + 3 أدوار متكررة + غرف سطح' : 'Basement + Ground + 3 Typical Floors + Roof'
    };
  };

  const specs = getCalculatedSpecs();

  const handleWhatsAppInquiry = () => {
    const districtName =
      district === 'zone-21'
        ? 'المنطقة 21 (حي النخبة والفيلات)'
        : district === 'zone-29'
        ? 'المنطقة 29 (بجوار جامعة السادات)'
        : district === 'zone-14'
        ? 'المنطقة 14 (الحي السكني الخدمي)'
        : 'منطقة أخرى بالسادات';

    const facadeName =
      facadeType === 'corner'
        ? 'ناصية بحري على شارعين'
        : facadeType === 'front-north'
        ? 'واجهة بحري صريحة'
        : 'شارع رئيسي';

    const text = isAr
      ? `*طلب دراسة شراكة وتطوير أرض — إشبيلية*
📍 *المنطقة بالسادات:* ${districtName}
📐 *المساحة التقريبية:* ${plotArea} م²
🏛️ *نوع الواجهة:* ${facadeName}
🤝 أمتلك هذه الأرض وأرغب في ترتيب جلسة استشارية بمقر الشركة لمناقشة دراسة الجدوى وتفاصيل الشراكة بالتراضي.`
      : `*Land Development & Joint Venture Inquiry — Ishbilia*
📍 *Zone:* ${districtName}
📐 *Approx Area:* ${plotArea} m²
🏛️ *Facade:* ${facadeName}
🤝 I own this plot and would like to schedule an executive meeting to review feasibility and flexible partnership terms.`;

    window.open(`https://wa.me/201032032286?text=${encodeURIComponent(text)}`, '_blank');
  };

  const roadmapSteps = [
    {
      step: '01',
      titleAr: 'المعاينة الميدانية وفحص التراخيص',
      titleEn: 'Site Inspection & Zoning Audit',
      timeAr: 'خلال 48 ساعة',
      timeEn: 'Within 48 Hours',
      descAr: 'معاينة الموقع على الطبيعة ومراجعة الكود والاشتراطات الرسمية بجهاز مدينة السادات مجاناً.',
      descEn: 'On-site topography review and municipal zoning audit with Sadat City Authority, free of charge.'
    },
    {
      step: '02',
      titleAr: 'دراسة الجدوى والمخططات الأولية',
      titleEn: 'Feasibility & Architectural Blueprint',
      timeAr: 'خلال 5 أيام عمل',
      timeEn: 'Within 5 Business Days',
      descAr: 'إعداد مقترح معماري ثلاثي الأبعاد وتحديد المساحات والوحدات بما يحقق أقصى استغلال للأرض.',
      descEn: '3D architectural proposals and space planning to maximize unit desirability and land utility.'
    },
    {
      step: '03',
      titleAr: 'جلسة الاتفاق وتوثيق بنود الشراكة',
      titleEn: 'Executive JV Meeting & Agreement',
      timeAr: 'جلسة VIP بالمقر',
      timeEn: 'VIP Headquarters Session',
      descAr: 'مناقشة مرنة وعادلة لصيغة الشراكة وتوزيع الوحدات وتوثيق جدول زمني ملزم بغرامات تأخير.',
      descEn: 'Flexible, mutually agreed partnership terms and unit allocation, backed by enforceable deadlines.'
    },
    {
      step: '04',
      titleAr: 'استخراج التراخيص والتمويل الذاتي',
      titleEn: 'Full Permitting & Self-Financing',
      timeAr: 'تمويل 100% على إشبيلية',
      timeEn: '100% Funded by Ishbilia',
      descAr: 'تتكفل إشبيلية بكافة رسوم التراخيص ونقابة المهندسين والتمويل الكامل للبناء بخامات B350.',
      descEn: 'Ishbilia covers 100% of licensing fees, syndicate approvals, and B350 concrete construction.'
    },
    {
      step: '05',
      titleAr: 'التسليم وتشغيل العدادات والتسويق',
      titleEn: 'Handover, Active Meters & Sales Support',
      timeAr: 'تسليم مفتاح فوري',
      timeEn: 'Turnkey Handover',
      descAr: 'تسليم وحداتك جاهزة بالسكن بكامل العدادات والمرافق الرسمية مع خيار مساعدتك في تسويقها.',
      descEn: 'Turnkey handover of your residences with operational meters and optional sales support.'
    }
  ];

  return (
    <section
      className="relative overflow-hidden w-full scroll-mt-28 bg-gradient-to-b from-ish-black via-[var(--bg-secondary)] to-ish-black"
      style={{ paddingBlock: 'clamp(80px, 9vw, 140px)' }}
      id="land-owners"
    >
      {/* Neoclassical Islamic Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px),
            repeating-linear-gradient(45deg, transparent, transparent 28px, rgba(212,175,55,0.5) 28px, rgba(212,175,55,0.5) 29px),
            repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(212,175,55,0.5) 28px, rgba(212,175,55,0.5) 29px)
          `,
        }}
      />

      {/* Gold Ambient Glows */}
      <div className="absolute top-1/4 start-1/4 w-[500px] h-[500px] bg-ish-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 end-1/4 w-[500px] h-[500px] bg-ish-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* 1. Grand Header */}
        <div ref={sectionRef} className="reveal-up text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ish-gold/15 border border-ish-gold/40 text-ish-gold text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-ish-gold/10">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>{isAr ? 'بوابة شراكات التطوير العقاري • مدينة السادات' : 'Land Joint Venture & Development • Sadat City'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ish-white mb-6 leading-tight font-headline">
            {isAr ? (
              <>
                حوّل أرضك الفضاء إلى <span className="gold-gradient-text">صرح معماري فاخر</span>
              </>
            ) : (
              <>
                Transform Your Vacant Plot into a <span className="gold-gradient-text">Luxury Architectural Landmark</span>
              </>
            )}
          </h2>

          <div className="gold-line max-w-xs mx-auto mb-6" />

          <p className="text-ish-gray-light text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-body">
            {isAr
              ? 'شراكة تطوير متكاملة بتكلفة صفرية على مالك الأرض. تتكفل إشبيلية بنسبة 100% بكافة مصاريف التراخيص والرسومات، التنفيذ الخرساني B350، والتشطيبات الفاخرة، مع صيغ مشاركة مرنة يتم الاتفاق عليها في جلسة استشارية خاصة.'
              : 'Zero-cost partnership for landowners. Ishbilia fully funds 100% of licensing fees, engineering, B350 concrete construction, and finishes, with flexible terms tailored in an executive consultation.'}
          </p>
        </div>

        {/* 2. Interactive Land Valuation & Specs Simulator */}
        <div className="glass-card rounded-2xl border border-ish-gold/30 p-6 sm:p-10 shadow-2xl bg-gradient-to-br from-ish-gold/10 via-ish-black to-ish-black max-w-5xl mx-auto mb-20 relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-1">
                {isAr ? 'حاسبة التطوير والاشتراطات التفاعلية' : 'Interactive Land Development Simulator'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ish-white font-headline">
                {isAr ? 'احسب إمكانيات ومخرجات البناء لقطعة أرضك' : 'Estimate Allowable Build Specifications for Your Plot'}
              </h3>
            </div>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-ish-gold/20 text-ish-gold font-bold border border-ish-gold/30 shrink-0">
              {isAr ? 'كود جهاز مدينة السادات' : 'Sadat City Building Code'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls Side (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select District */}
              <div>
                <label className="block text-xs font-bold text-ish-gold mb-2">
                  {isAr ? '1. اختر المنطقة بمدينة السادات:' : '1. Select Sadat City Zone:'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'zone-21', nameAr: 'المنطقة 21 (النخبة)', nameEn: 'Zone 21 (Elite)' },
                    { id: 'zone-29', nameAr: 'المنطقة 29 (الجامعة)', nameEn: 'Zone 29 (Univ)' },
                    { id: 'zone-14', nameAr: 'المنطقة 14 (الخدمي)', nameEn: 'Zone 14 (Services)' },
                  ].map((z) => (
                    <button
                      key={z.id}
                      type="button"
                      onClick={() => setDistrict(z.id)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                        district === z.id
                          ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md shadow-ish-gold/20'
                          : 'bg-ish-black/70 border-white/10 text-ish-white hover:border-ish-gold/40'
                      }`}
                    >
                      {isAr ? z.nameAr : z.nameEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Plot Area Slider / Quick Buttons */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-ish-gold">
                    {isAr ? '2. مساحة قطعة الأرض:' : '2. Plot Area:'}
                  </label>
                  <span className="text-base font-black text-ish-white font-mono bg-ish-black/90 px-3 py-1 rounded-lg border border-white/10">
                    {plotArea} م²
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[400, 500, 600, 800].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setPlotArea(val)}
                      className={`py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        plotArea === val
                          ? 'bg-ish-gold/25 border-ish-gold text-ish-gold'
                          : 'bg-white/5 border-white/10 text-ish-gray-light hover:border-white/20'
                      }`}
                    >
                      {val} م²
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min="350"
                  max="1200"
                  step="25"
                  value={plotArea}
                  onChange={(e) => setPlotArea(Number(e.target.value))}
                  className="w-full accent-ish-gold cursor-pointer"
                />
              </div>

              {/* Select Facade Type */}
              <div>
                <label className="block text-xs font-bold text-ish-gold mb-2">
                  {isAr ? '3. طبيعة موقع والواجهة:' : '3. Facade Orientation:'}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'corner', nameAr: 'ناصية بحري (شارعين)', nameEn: 'North Corner' },
                    { id: 'front-north', nameAr: 'واجهة بحري صريحة', nameEn: 'Direct North' },
                    { id: 'main-street', nameAr: 'شارع رئيسي واسع', nameEn: 'Main Boulevard' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFacadeType(f.id)}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center ${
                        facadeType === f.id
                          ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md'
                          : 'bg-ish-black/70 border-white/10 text-ish-white hover:border-ish-gold/40'
                      }`}
                    >
                      {isAr ? f.nameAr : f.nameEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results & Specs Display (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-ish-black/95 border border-ish-gold/40 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <span className="text-xs text-ish-gray-light">
                    {isAr ? 'المواصفات البنائية التقديرية' : 'Estimated Specifications'}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">
                    {isAr ? '● جاهزة للتنفيذ' : '● Ready'}
                  </span>
                </div>

                <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <span className="text-ish-gray-light">{isAr ? 'النموذج الإنشائي:' : 'Structural Typology:'}</span>
                    <span className="font-bold text-ish-white text-end">{specs.floors}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <span className="text-ish-gray-light">{isAr ? 'عدد الوحدات المقدر:' : 'Estimated Units:'}</span>
                    <span className="font-bold text-ish-gold font-mono">{specs.estUnits}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <span className="text-ish-gray-light">{isAr ? 'الحدائق الخاصة:' : 'Private Gardens:'}</span>
                    <span className="font-bold text-ish-white">{specs.gardenArea}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-ish-gold/10 border border-ish-gold/30">
                    <span className="block text-xs font-bold text-ish-gold mb-1">
                      {isAr ? 'صيغة الشراكة وتوزيع الوحدات:' : 'Partnership & Allocation:'}
                    </span>
                    <span className="text-xs text-ish-gray-light block leading-relaxed">
                      {isAr
                        ? 'تُحدد نسب وتوزيع الوحدات بالتراضي التام في جلسة استشارية خاصة بما يلائم موقع القطعة وتميزها.'
                        : 'Terms and unit allocation are tailored collaboratively in an executive consultation based on your plot uniqueness.'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-ish-gold/25 cursor-pointer"
              >
                <span>💬</span>
                <span>{isAr ? 'طلب دراسة جدوى وتنسيق موعد ميتنج عبر واتساب' : 'Request Feasibility & Meeting on WhatsApp'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. The 5-Stage Zero-Cost Roadmap */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'خريطة الشراكة الواضحة' : 'The 5-Stage Partnership Roadmap'}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'كيف نطوّر أرضك خطوة بخطوة بتكلفة صفرية عليك؟' : 'How We Develop Your Land with Zero Financial Burden'}
            </h3>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {roadmapSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all group flex flex-col justify-between relative shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span className="text-2xl font-black gold-gradient-text font-mono block mb-2">
                    {step.step}
                  </span>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-ish-gold font-semibold mb-3">
                    {isAr ? step.timeAr : step.timeEn}
                  </span>
                  <h4 className="font-bold text-base text-ish-white mb-2 font-headline group-hover:text-ish-gold transition-colors">
                    {isAr ? step.titleAr : step.titleEn}
                  </h4>
                  <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                    {isAr ? step.descAr : step.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[10px] text-ish-gold font-bold flex items-center gap-1">
                  <span>✓</span>
                  <span>{isAr ? 'التزام تعاقدي كامل' : 'Contractual Guarantee'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. The 4 Ironclad Guarantees for Land Owners */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'ميثاق الأمان والنزاهة' : 'Ironclad Guarantees for Landowners'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-ish-white mb-3 font-headline">
              {isAr ? '4 ضمانات حديدية تحمي حقك وراحة بالك' : '4 Ironclad Guarantees Protecting Your Asset'}
            </h3>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex items-start gap-4 hover:border-ish-gold/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl shrink-0">
                💰
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'تمويل ذاتي 100% بدون انتظار بيع' : '100% Self-Financed Execution'}
                </h4>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {isAr
                    ? 'مشروعاتنا لا تعتمد على أموال الحجوزات أو البيع المسبق؛ أعمال الحفر والخرسانات والتشطيب ممولة بالكامل من ميزانية إشبيلية المعتمدة.'
                    : 'Our projects never stall waiting for off-plan buyers; excavation, structural concrete, and finishes are 100% self-funded.'}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex items-start gap-4 hover:border-ish-gold/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl shrink-0">
                ⏱️
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'غرامات تأخير موثقة في العقد الرسمي' : 'Contractually Enforceable Delay Penalties'}
                </h4>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {isAr
                    ? 'نثبت في بنود عقد الشراكة غرامات تأخير شهرية محددة وملزمة قانونياً لصالحك، لأن الالتزام بالجدول الزمني أمانة نحافظ عليها.'
                    : 'We document binding monthly delay penalties directly in the partnership contract to guarantee timeline discipline.'}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex items-start gap-4 hover:border-ish-gold/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl shrink-0">
                🔬
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'إشراف معملي وتسليم مكعبات الخرسانة B350' : 'Certified Lab Tests & B350 Concrete'}
                </h4>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {isAr
                    ? 'يتم أخذ مكعبات اختبار معملية لكل صبة خرسانية تحت إشراف استشاري نقابة المهندسين وتسليم نسخ رسمية منها لمالك الأرض.'
                    : 'Official cube compression laboratory test certificates are delivered to the landowner for every single concrete pour.'}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex items-start gap-4 hover:border-ish-gold/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl shrink-0">
                ⚡
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'تسليم كامل العدادات والمرافق الرسمية' : 'Turnkey Utilities & Official Meters'}
                </h4>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {isAr
                    ? 'تستلم وحدات حصتك مع تشغيل كامل لعدادات الكهرباء والمياه الرسمية والمصاعد، دون أي إجراءات إدارية معقدة أو مصاريف مستترة.'
                    : 'Receive your units with active electricity, water meters, and elevators operational with zero hidden administrative hassles.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Direct Action Console with Land JV Director */}
        <div className="glass-card rounded-2xl border border-ish-gold/30 p-8 sm:p-12 shadow-2xl bg-gradient-to-r from-ish-gold/10 via-ish-black to-ish-gold/10 text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-2">
            🤝 {isAr ? 'تواصل مباشر مع الإدارة العليا' : 'Direct Access to Executive Leadership'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? 'جاهز لمناقشة شراكة أرضك؟ نسعد بلقائك' : 'Ready to Discuss Your Land Partnership?'}
          </h3>
          <p className="text-xs sm:text-sm text-ish-gray-light max-w-xl mx-auto mb-8 font-body">
            {isAr
              ? 'تفضل بالتواصل المباشر مع مدير إدارة شراكات الأراضي أو احجز جلسة ميتنج في صالة كبار الزوار بجنة مول.'
              : 'Contact our Land JV Director directly or book an executive meeting at our Jannah Mall VIP Lounge.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+201032032286"
              className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center gap-2 shadow-lg shadow-ish-gold/25 cursor-pointer"
              dir="ltr"
            >
              <span>📞</span>
              <span>+20 10 32032286</span>
              <span className="text-xs bg-ish-black/20 px-2 py-0.5 rounded text-ish-black">
                {isAr ? 'مدير الأراضي' : 'JV Director'}
              </span>
            </a>

            <button
              type="button"
              onClick={handleWhatsAppInquiry}
              className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>💬</span>
              <span>{isAr ? 'محادثة واتساب مخصصة للأراضي' : 'Direct Land WhatsApp'}</span>
            </button>

            <Link
              href="/consultation"
              className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-white glass-card border border-white/20 hover:border-ish-gold transition-all flex items-center gap-2"
            >
              <span>🗓️</span>
              <span>{isAr ? 'حجز ميتنج رسمي بالمقر' : 'Schedule VIP Meeting'}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
