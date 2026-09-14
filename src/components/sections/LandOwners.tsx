'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function LandOwners() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();

  // Custom Plot Data State (Entered directly by the landowner - we have zero prior assumptions)
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [plotNumber, setPlotNumber] = useState('');
  const [plotZone, setPlotZone] = useState('المنطقة 21');
  const [customZone, setCustomZone] = useState('');
  const [plotArea, setPlotArea] = useState('');
  const [facadeWidth, setFacadeWidth] = useState('');
  const [plotDepth, setPlotDepth] = useState('');
  const [streetWidth, setStreetWidth] = useState('20م');
  const [facadeType, setFacadeType] = useState('corner');
  const [plotUsage, setPlotUsage] = useState('residential');
  const [handoverStatus, setHandoverStatus] = useState('received');
  const [licenseStatus, setLicenseStatus] = useState('no-license');
  const [ownerNotes, setOwnerNotes] = useState('');

  // Effective Zone Name
  const effectiveZone = plotZone === 'custom' ? (customZone || (isAr ? 'منطقة مخصصة' : 'Custom Zone')) : plotZone;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const facadeText =
      facadeType === 'corner'
        ? (isAr ? 'ناصية على شارعين' : 'Corner on two streets')
        : facadeType === 'north'
        ? (isAr ? 'واجهة بحري صريحة' : 'Direct North-facing')
        : facadeType === 'garden'
        ? (isAr ? 'إطلالة على حديقة / ممشى' : 'Garden / Promenade view')
        : (isAr ? 'شارع رئيسي واسع' : 'Main Boulevard');

    const usageText =
      plotUsage === 'residential'
        ? (isAr ? 'عمارة سكنية فاخرة (بدروم + أرضي + متكرر)' : 'Luxury Residential Building')
        : plotUsage === 'villa'
        ? (isAr ? 'فيلا سكنية خاصة / توين هاوس' : 'Private Villa / Twin House')
        : plotUsage === 'commercial'
        ? (isAr ? 'مبنى تجاري / إداري / خدمي' : 'Commercial / Mixed-Use')
        : (isAr ? 'طبقاً لاشتراطات تخصيص الجهاز' : 'Per Authority Zoning Code');

    const handoverText =
      handoverStatus === 'received'
        ? (isAr ? 'تم استلام الأرض ومحضر الاستلام ساري' : 'Plot received with valid handover document')
        : (isAr ? 'قيد إجراءات الاستلام من الجهاز' : 'Handover in progress with Sadat Authority');

    const licenseText =
      licenseStatus === 'no-license'
        ? (isAr ? 'أرض فضاء بدون رخصة (تتولى إشبيلية استخراجها بالكامل مجاناً)' : 'Vacant plot without permit (Ishbilia extracts it)')
        : licenseStatus === 'licensed'
        ? (isAr ? 'صادر لها رخصة بناء سارية' : 'Valid building license already issued')
        : (isAr ? 'رخصة قيد التعديل أو التجديد' : 'License under renewal / modification');

    const text = isAr
      ? `*طلب دراسة وتطوير قطعة أرض خاصة — إشبيلية*
📌 *بيانات مالك الأرض:*
👤 *الاسم:* ${ownerName || 'غير محدد'}
📱 *الهاتف:* ${ownerPhone || 'غير محدد'}

🏛️ *مواصفات القطعة المُدخلة من المالك:*
📍 *المنطقة / الحي بالسادات:* ${effectiveZone}
🔢 *رقم القطعة:* ${plotNumber ? `قطعة ${plotNumber}` : 'غير محدد'}
📐 *المساحة الفعلية:* ${plotArea ? `${plotArea} م²` : 'غير محددة'}
📏 *الأبعاد:* ${facadeWidth ? `واجهة ${facadeWidth}م` : ''} ${plotDepth ? `× عمق ${plotDepth}م` : ''} ${!facadeWidth && !plotDepth ? 'سيتم مراجعتها من الرفع المساحي' : ''}
🛣️ *عرض الشارع والواجهة:* عرض ${streetWidth} — ${facadeText}
🏗️ *نوع النشاط والتخصيص:* ${usageText}
📜 *موقف محضر الاستلام:* ${handoverText}
📑 *موقف التراخيص:* ${licenseText}

💬 *رغبة وتطلعات المالك للشراكة:*
${ownerNotes || 'أرغب في مراجعة الاشتراطات وتحديد موعد ميتنج خاص لمناقشة صيغة الشراكة وتوزيع الوحدات بالتراضي وبمرونة كاملة.'}`
      : `*Private Plot Development & Feasibility Request — Ishbilia*
📌 *Landowner Details:*
👤 *Name:* ${ownerName || 'N/A'}
📱 *Phone:* ${ownerPhone || 'N/A'}

🏛️ *Plot Specifications Entered by Owner:*
📍 *Sadat Zone / District:* ${effectiveZone}
🔢 *Plot Number:* ${plotNumber || 'To be specified'}
📐 *Exact Area:* ${plotArea ? `${plotArea} m²` : 'N/A'}
📏 *Dimensions:* ${facadeWidth ? `Facade ${facadeWidth}m` : ''} ${plotDepth ? `× Depth ${plotDepth}m` : ''}
🛣️ *Street & Facade:* Width ${streetWidth} — ${facadeText}
🏗️ *Usage Type:* ${usageText}
📜 *Handover Status:* ${handoverText}
📑 *License Status:* ${licenseText}

💬 *Owner Vision & Notes:*
${ownerNotes || 'Requesting a zoning audit and a private executive meeting to agree on flexible, collaborative JV terms.'}`;

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
      {/* Neoclassical Geometric Pattern Overlay */}
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
        <div ref={sectionRef} className="reveal-up text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ish-gold/15 border border-ish-gold/40 text-ish-gold text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-ish-gold/10">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>{isAr ? 'بوابة ملاك الأراضي المستقلة • مدينة السادات' : 'Independent Landowners Portal • Sadat City'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ish-white mb-6 leading-tight font-headline">
            {isAr ? (
              <>
                أرضك ملكك وأنت صاحب القرار.. <br className="hidden sm:inline" />
                <span className="gold-gradient-text">حوّلها إلى صرح معماري فاخر</span>
              </>
            ) : (
              <>
                Your Land, Your Vision.. <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Transform It into a Luxury Landmark</span>
              </>
            )}
          </h2>

          <div className="gold-line max-w-xs mx-auto mb-6" />

          <p className="text-ish-gray-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-body">
            {isAr
              ? 'نحن لا نملك أي بيانات مسبقة عن أرضك ولا نفرض أي نماذج جاهزة لمشاريعنا. أدخل بيانات ومواصفات قطعتك الخاصة بدقة، ليتولى فريقنا الهندسي دراستها مجاناً في جهاز مدينة السادات، ثم نلتقي بك في ميتنج مغلق لنحدد معاً صيغة الشراكة وتوزيع الوحدات بالتراضي وبأقصى درجات المرونة.'
              : 'Every plot is independent and unique. Enter your exact land specifications directly; our engineering team will audit municipal zoning at Sadat City Authority for free, followed by an executive consultation to collaboratively agree on flexible, customized JV terms.'}
          </p>
        </div>

        {/* 2. Detailed Plot Submission & Assessment Form */}
        <div className="glass-card rounded-2xl border border-ish-gold/30 p-6 sm:p-10 shadow-2xl bg-gradient-to-br from-ish-gold/10 via-ish-black to-ish-black max-w-5xl mx-auto mb-20 relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-1">
                {isAr ? 'ملف تسجيل وتوثيق بيانات قطعة أرضك الخاصة' : 'Independent Land Dossier Submission'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ish-white font-headline">
                {isAr ? 'أدخل تفاصيل قطعتك كما وردت بمحضر استلامك' : 'Enter Your Plot Details as per Handover Document'}
              </h3>
            </div>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-ish-gold/20 text-ish-gold font-bold border border-ish-gold/30 shrink-0">
              {isAr ? 'فحص هندسي مجاني بالجهاز خلال 48 ساعة' : 'Complimentary Audit in 48h'}
            </span>
          </div>

          <form onSubmit={handleWhatsAppSend}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Form: Landowner Direct Input Fields (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                {/* Row 1: Owner Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'اسم مالك الأرض الكريم *' : 'Landowner Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder={isAr ? 'أدخل اسمك الكريم' : 'Your full name'}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'رقم الهاتف (مفعل واتساب للتواصل) *' : 'Phone (WhatsApp Active) *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      placeholder={isAr ? '010XXXXXXXX' : '+20 10X XXX XXXX'}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none font-mono"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Row 2: Plot Number & Zone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'رقم قطعة الأرض (بمحضر الاستلام أو الإخطار) *' : 'Plot Number *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={plotNumber}
                      onChange={(e) => setPlotNumber(e.target.value)}
                      placeholder={isAr ? 'مثال: قطعة 1205 أو 740' : 'e.g. Plot 1205'}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'المنطقة / الحي بمدينة السادات *' : 'Sadat City District / Zone *'}
                    </label>
                    <select
                      value={plotZone}
                      onChange={(e) => setPlotZone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                    >
                      <option value="المنطقة 21">{isAr ? 'المنطقة 21 (حي النخبة والفيلات)' : 'Zone 21 (Elite & Villas)'}</option>
                      <option value="المنطقة 29">{isAr ? 'المنطقة 29 (بجوار جامعة السادات)' : 'Zone 29 (University District)'}</option>
                      <option value="المنطقة 14">{isAr ? 'المنطقة 14 (الحي السكني الخدمي)' : 'Zone 14 (Integrated Corridor)'}</option>
                      <option value="المنطقة 11">{isAr ? 'المنطقة 11' : 'Zone 11'}</option>
                      <option value="المنطقة 7">{isAr ? 'المنطقة 7' : 'Zone 7'}</option>
                      <option value="المنطقة 25">{isAr ? 'المنطقة 25' : 'Zone 25'}</option>
                      <option value="المنطقة المركزية">{isAr ? 'المنطقة المركزية (تجاري / إداري)' : 'Central Axis (Commercial/Admin)'}</option>
                      <option value="custom">{isAr ? 'منطقة أخرى / مجاورة أخرى (اكتبها يدوياً)' : 'Other Zone (Specify manually)'}</option>
                    </select>

                    {plotZone === 'custom' && (
                      <input
                        type="text"
                        required
                        value={customZone}
                        onChange={(e) => setCustomZone(e.target.value)}
                        placeholder={isAr ? 'اكتب اسم أو رقم المنطقة / المجاورة بالسادات' : 'Enter zone or neighborhood name in Sadat'}
                        className="w-full mt-2 px-4 py-2.5 rounded-xl bg-ish-black/90 border border-ish-gold text-ish-white text-xs focus:outline-none"
                      />
                    )}
                  </div>
                </div>

                {/* Row 3: Exact Plot Area & Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'المساحة الفعلية (م²) *' : 'Exact Area (m²) *'}
                    </label>
                    <input
                      type="number"
                      required
                      value={plotArea}
                      onChange={(e) => setPlotArea(e.target.value)}
                      placeholder={isAr ? 'مثال: 450 أو 520 أو 640' : 'e.g. 520'}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors font-mono"
                      min="100"
                      max="10000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ish-gray-light mb-2">
                      {isAr ? 'عرض الواجهة (متر):' : 'Facade Width (m):'}
                    </label>
                    <input
                      type="number"
                      value={facadeWidth}
                      onChange={(e) => setFacadeWidth(e.target.value)}
                      placeholder={isAr ? 'مثال: 20م' : 'e.g. 20m'}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ish-gray-light mb-2">
                      {isAr ? 'العمق (متر):' : 'Depth (m):'}
                    </label>
                    <input
                      type="number"
                      value={plotDepth}
                      onChange={(e) => setPlotDepth(e.target.value)}
                      placeholder={isAr ? 'مثال: 25م' : 'e.g. 25m'}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Row 4: Street Width & Usage Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'عرض الشارع أمام القطعة:' : 'Street Width in Front:'}
                    </label>
                    <select
                      value={streetWidth}
                      onChange={(e) => setStreetWidth(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                    >
                      <option value="12م">{isAr ? 'شارع 12 متراً' : '12-meter street'}</option>
                      <option value="15م">{isAr ? 'شارع 15 متراً' : '15-meter street'}</option>
                      <option value="20م">{isAr ? 'شارع 20 متراً' : '20-meter street'}</option>
                      <option value="24م">{isAr ? 'شارع 24 متراً' : '24-meter street'}</option>
                      <option value="30م فأكثر">{isAr ? 'شارع 30 متراً أو محور رئيسي' : '30-meter or main boulevard'}</option>
                      <option value="ناصية شارعين">{isAr ? 'ناصية تطل على شارعين' : 'Corner on two streets'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'نوع التخصيص أو النشاط المستهدف:' : 'Zoning / Target Usage:'}
                    </label>
                    <select
                      value={plotUsage}
                      onChange={(e) => setPlotUsage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                    >
                      <option value="residential">{isAr ? 'عمارة سكنية فاخرة (بدروم + أرضي + متكرر)' : 'Luxury Residential Building'}</option>
                      <option value="villa">{isAr ? 'فيلا سكنية خاصة / توين هاوس' : 'Private Villa / Twin House'}</option>
                      <option value="commercial">{isAr ? 'مبنى تجاري / إداري / خدمي' : 'Commercial / Admin Building'}</option>
                      <option value="per-code">{isAr ? 'طبقاً لكود وتخصيص الجهاز للقطعة' : 'Per Sadat Authority Allocation'}</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Facade Type Buttons */}
                <div>
                  <label className="block text-xs font-bold text-ish-gold mb-2">
                    {isAr ? 'طبيعة وموقع الواجهة:' : 'Facade Orientation & View:'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'corner', nameAr: 'ناصية على شارعين', nameEn: 'Corner (2 streets)' },
                      { id: 'north', nameAr: 'واجهة بحري صريحة', nameEn: 'Direct North' },
                      { id: 'garden', nameAr: 'إطلالة حديقة / ممشى', nameEn: 'Garden View' },
                      { id: 'main', nameAr: 'شارع رئيسي واسع', nameEn: 'Main Boulevard' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFacadeType(f.id)}
                        className={`p-2.5 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                          facadeType === f.id
                            ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md font-black'
                            : 'bg-ish-black/70 border-white/10 text-ish-white hover:border-ish-gold/40'
                        }`}
                      >
                        {isAr ? f.nameAr : f.nameEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 6: Handover & Licensing Status */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'موقف محضر استلام الأرض من الجهاز:' : 'Handover Document Status:'}
                    </label>
                    <select
                      value={handoverStatus}
                      onChange={(e) => setHandoverStatus(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white text-xs sm:text-sm focus:border-ish-gold focus:outline-none"
                    >
                      <option value="received">{isAr ? 'تم الاستلام ومحضر الاستلام ساري' : 'Received & Valid'}</option>
                      <option value="pending">{isAr ? 'قيد إنهاء إجراءات الاستلام من الجهاز' : 'Handover in progress'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'موقف رخصة البناء:' : 'Building License Status:'}
                    </label>
                    <select
                      value={licenseStatus}
                      onChange={(e) => setLicenseStatus(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white text-xs sm:text-sm focus:border-ish-gold focus:outline-none"
                    >
                      <option value="no-license">{isAr ? 'أرض فضاء بدون رخصة (تتولى إشبيلية استخراجها)' : 'No license (Ishbilia extracts it)'}</option>
                      <option value="licensed">{isAr ? 'صادر لها رخصة بناء سارية' : 'Valid license already issued'}</option>
                      <option value="renewal">{isAr ? 'رخصة قيد التجديد أو التعديل' : 'License under renewal'}</option>
                    </select>
                  </div>
                </div>

                {/* Row 7: Notes & Vision */}
                <div>
                  <label className="block text-xs font-bold text-ish-gray-light mb-2">
                    {isAr ? 'رؤيتك وتطلعاتك الخاصة للشراكة أو أي متطلبات محددة (اختياري):' : 'Your Vision or Specific Requests (Optional):'}
                  </label>
                  <textarea
                    rows={2}
                    value={ownerNotes}
                    onChange={(e) => setOwnerNotes(e.target.value)}
                    placeholder={
                      isAr
                        ? 'مثال: عدد الشقق المطلوبة لسكني العائلي الخاص، الرغبة في بيع الباقي، أو أي شروط خاصة بك...'
                        : 'e.g. Desired family residences, sales preferences, or custom architectural requests...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-xs focus:border-ish-gold focus:outline-none leading-relaxed"
                  />
                </div>
              </div>

              {/* Right: Live Custom Dossier & Executive Meeting Summary (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-ish-black/95 border border-ish-gold/40 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span className="text-xs text-ish-gold font-bold">
                      📋 {isAr ? 'ملف قطعة أرضك الخاصة' : 'Your Private Plot Dossier'}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {isAr ? '● مراجعة مجانية بالجهاز' : '● Free Authority Audit'}
                    </span>
                  </div>

                  {/* Dynamic entered summary */}
                  <div className="space-y-3 mb-5 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-ish-gray-light">{isAr ? 'المالك ورقم القطعة:' : 'Owner & Plot #:'}</span>
                      <span className="font-bold text-ish-white font-mono">
                        {plotNumber ? (isAr ? `قطعة ${plotNumber}` : `Plot ${plotNumber}`) : (isAr ? 'أدخل رقم القطعة' : 'Enter number')}
                        {ownerName ? ` • ${ownerName}` : ''}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                      <span className="text-ish-gray-light">{isAr ? 'الموقع والمساحة:' : 'Zone & Area:'}</span>
                      <span className="font-bold text-ish-gold">
                        {effectiveZone} {plotArea ? `• ${plotArea} م²` : (isAr ? '• أدخل المساحة' : '• Enter area')}
                      </span>
                    </div>

                    {(facadeWidth || plotDepth) && (
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-ish-gray-light">{isAr ? 'الأبعاد والشارع:' : 'Dimensions & Street:'}</span>
                        <span className="font-bold text-ish-white font-mono">
                          {facadeWidth ? `${facadeWidth}م واجهة` : ''} {plotDepth ? `× ${plotDepth}م عمق` : ''} • {streetWidth}
                        </span>
                      </div>
                    )}

                    {/* Crucial Section: Zero assumptions on percentages */}
                    <div className="p-3.5 rounded-xl bg-ish-gold/10 border border-ish-gold/30">
                      <span className="block text-xs font-bold text-ish-gold mb-1">
                        🤝 {isAr ? 'صيغة الشراكة وتوزيع الوحدات (مرنة بالتراضي):' : 'Partnership Formula & Unit Allocation:'}
                      </span>
                      <p className="text-[11px] text-ish-gray-light leading-relaxed">
                        {isAr
                          ? 'الموضوع مرن تماماً ولا توجد نسب مفروضة مسبقاً؛ نسب الشراكة وتوزيع الأدوار والوحدات تُحدد بالتراضي التام في جلسة استشارية خاصة (ميتنج مغلق) بما يلائم خصوصية وتميز قطعتك ورغبتك الشخصية.'
                          : '100% flexible; joint venture formulas and unit shares are mutually agreed upon during a private VIP consultation based on your plot merits and personal requirements.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-ish-gray-light space-y-1.5">
                      <div className="flex items-center gap-1.5 text-ish-gold font-bold">
                        <span>✓</span>
                        <span>{isAr ? 'دراسة اشتراطات جهاز السادات مجاناً' : 'Complimentary Sadat zoning audit'}</span>
                      </div>
                      <p className="text-[10.5px] text-ish-gray-light leading-relaxed">
                        {isAr
                          ? 'يتولى مهندسونا مراجعة الردود والنسبة البنائية الرسمية لقطعتك وإعداد مقترح معماري 3D مجاناً بالكامل.'
                          : 'Our architects audit official setbacks and building ratios, delivering a 3D proposal free of charge.'}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-ish-gray-light">
                      💰 {isAr ? 'تمويل 100% ذاتي على إشبيلية لكافة التراخيص وتكاليف البناء والتشطيب دون أي أعباء مالية عليك.' : '100% self-financed by Ishbilia with zero cost on landowner.'}
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-4 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-ish-gold/25 cursor-pointer"
                >
                  <span>💬</span>
                  <span>{isAr ? 'إرسال بيانات قطعتك وتحديد موعد ميتنج عبر واتساب' : 'Submit Plot & Schedule Meeting via WhatsApp'}</span>
                  <span>←</span>
                </button>
              </div>
            </div>
          </form>
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

            <a
              href="https://wa.me/201032032286?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D8%A7%D9%84%D9%83%20%D8%A3%D8%B1%D8%B6%20%D9%81%D9%8A%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%A7%D8%AA%20%D9%88%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%B4%D8%B1%D8%A7%D9%83%D8%A9%20%D9%85%D8%B9%20%D8%A5%D8%B4%D8%A8%D9%8A%D9%84%D9%8A%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>💬</span>
              <span>{isAr ? 'محادثة واتساب مخصصة للأراضي' : 'Direct Land WhatsApp'}</span>
            </a>

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
