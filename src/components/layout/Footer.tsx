'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function Footer() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const [catalogPhone, setCatalogPhone] = useState('');

  const handleCatalogRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const message = isAr
      ? `*طلب كتالوج المشروعات وقوائم الأسعار الرسمية — إشبيلية*
📱 *رقم هاتف المستثمر:* ${catalogPhone || 'غير محدد'}
📋 *الطلب:* أرغب في استلام كتالوج مشروعات إشبيلية بمدينة السادات، المخططات الهندسية 3D، وتحديثات أسعار مرحلة الطرح الأولى فور صدورها.`
      : `*Request for Official Projects Catalog & Price Lists — Ishbilia*
📱 *Phone:* ${catalogPhone || 'N/A'}
📋 *Request:* Looking to receive the latest projects catalog in Sadat City, 3D floor plans, and priority launch pricing.`;

    window.open(`https://wa.me/201010722349?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const trustPillars = [
    {
      icon: '🏆',
      titleAr: '20+ عاماً ريادة معمارية',
      titleEn: '20+ Years Excellence',
      descAr: 'تاريخ راسخ بالسادات منذ 2004 في تشييد أرقى المشروعات السكنية.',
      descEn: 'Pioneering luxury residential developments in Sadat City since 2004.',
    },
    {
      icon: '🛡️',
      titleAr: 'تراخيص رسمية 100%',
      titleEn: '100% Official Licenses',
      descAr: 'لا بناء قبل صدور التراخيص وموافقة جهاز مدينة السادات ونقابة المهندسين.',
      descEn: 'Full permits issued by Sadat City Authority before the first concrete pour.',
    },
    {
      icon: '🔬',
      titleAr: 'كود الزلازل وخرسانات B350',
      titleEn: 'B350 Seismic Resistance',
      descAr: 'أعلى معاملات الأمان الإنشائي وإشراف معملي لاختبار مكعبات الخرسانة.',
      descEn: 'Maximum structural safety factors with certified lab test supervision.',
    },
    {
      icon: '⏱️',
      titleAr: 'غرامات تأخير موثقة',
      titleEn: 'Binding Delay Penalties',
      descAr: 'التزام زمني صارم ببنود العقد لحماية وقت وحقوق عملائنا ومستثمرينا.',
      descEn: 'Contractually enforceable delay penalties safeguarding your capital and time.',
    },
  ];

  const sadatDistricts = [
    {
      nameAr: 'المنطقة 21 (حي النخبة والفيلات)',
      nameEn: 'Zone 21 (Elite & Villas)',
      badgeAr: 'مشروع 1518 • 1205',
      badgeEn: 'Project 1518 & 1205',
      href: '/projects',
    },
    {
      nameAr: 'المنطقة 29 (الحي الجامعي)',
      nameEn: 'Zone 29 (University Hub)',
      badgeAr: 'أعلى عائد استثماري',
      badgeEn: 'Top Investment Yield',
      href: '/projects',
    },
    {
      nameAr: 'المنطقة 14 (الحي السكني الخدمي)',
      nameEn: 'Zone 14 (Integrated Corridor)',
      badgeAr: 'أقساط حتى 48 شهر',
      badgeEn: 'Up to 48 Months',
      href: '/projects',
    },
    {
      nameAr: 'المحور المركزي (جنة مول)',
      nameEn: 'Central Axis (Ganna Mall)',
      badgeAr: 'المقر الإداري الرئيسي',
      badgeEn: 'HQ & VIP Lounge',
      href: '/contact',
    },
  ];

  const quickPortals = [
    { labelAr: 'شقق وفيلات فاخرة للبيع بالسادات', labelEn: 'Luxury Residences for Sale', href: '/projects' },
    { labelAr: 'بوابة ملاك الأراضي (شراكات تطوير)', labelEn: 'Landowners JV Portal', href: '/#land-owners' },
    { labelAr: 'حجز ميتنج واستشارة VIP بالمقر', labelEn: 'Book VIP Executive Consultation', href: '/consultation' },
    { labelAr: 'ركائز الثقة وضمانات إشبيلية', labelEn: 'Why Ishbilia & Guarantees', href: '/why-ishbilia' },
    { labelAr: 'خدمات التشطيب والإدارة الهندسية', labelEn: 'Finishing & Project Management', href: '/services' },
    { labelAr: 'عن إشبيلية وقصة الـ 20 عاماً', labelEn: 'About Ishbilia & Our Heritage', href: '/about' },
  ];

  return (
    <footer className="relative bg-[#08080a] border-t border-ish-gold/25 overflow-hidden w-full text-ish-white" id="footer">
      {/* Background Architectural Watermark */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(212,175,55,1) 35px, rgba(212,175,55,1) 36px),
            repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(212,175,55,1) 35px, rgba(212,175,55,1) 36px),
            repeating-linear-gradient(45deg, transparent, transparent 25px, rgba(212,175,55,0.4) 25px, rgba(212,175,55,0.4) 26px)
          `,
        }}
      />
      <div className="absolute -top-40 start-1/4 w-[600px] h-[350px] bg-ish-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 end-1/4 w-[500px] h-[300px] bg-ish-gold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 1. Grand Pre-Footer VIP Call to Action Bar */}
      {/* ========================================================================= */}
      <div className="relative z-10 border-b border-ish-gold/20 bg-gradient-to-r from-ish-gold/15 via-ish-black/90 to-ish-gold/15 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-start">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/20 border border-ish-gold/40 text-ish-gold text-xs font-bold mb-3 shadow-md">
              <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
              <span>{isAr ? 'فرص استثمارية وسكنية مميزة بمدينة السادات' : 'Premier Residential & JV Opportunities in Sadat City'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-ish-white font-headline leading-tight mb-2">
              {isAr ? (
                <>
                  هل أنت مستعد للانتقال إلى <span className="gold-gradient-text">مستوى جديد من الفخامة؟</span>
                </>
              ) : (
                <>
                  Ready to Step into a <span className="gold-gradient-text">New Level of Architectural Luxury?</span>
                </>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
              {isAr
                ? 'سواء كنت تبحث عن شقة سكنية راقية بمقدم 15% وتسهيلات حتى 48 شهراً، أو ترغب في تطوير قطعة أرضك بنظام المشاركة بتكلفة صفرية وتمويل ذاتي كامل.'
                : 'Whether securing a luxury residence with 15% downpayment and flexible plans up to 48 months, or developing your vacant plot with zero-cost JV.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
            <Link
              href="/projects"
              className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all shadow-lg shadow-ish-gold/20 flex items-center gap-2 cursor-pointer"
            >
              <span>🏡</span>
              <span>{isAr ? 'تصفح المشروعات والوحدات' : 'Explore Residences'}</span>
            </Link>

            <Link
              href="/#land-owners"
              className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-white bg-white/5 border border-ish-gold/40 hover:bg-ish-gold/15 hover:border-ish-gold transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>🤝</span>
              <span>{isAr ? 'طوّر أرضك معنا' : 'Develop Your Plot'}</span>
            </Link>

            <Link
              href="/consultation"
              className="py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm text-ish-gold bg-ish-black border border-ish-gold/30 hover:border-ish-gold transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>🗓️</span>
              <span>{isAr ? 'حجز ميتنج VIP' : 'VIP Consultation'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. Institutional Trust Pillars Bar */}
      {/* ========================================================================= */}
      <div className="relative z-10 border-b border-white/10 bg-ish-black/60 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-ish-gold/15 border border-ish-gold/30 text-ish-gold flex items-center justify-center text-xl shrink-0 shadow-md">
                {pillar.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-ish-white font-headline mb-1">
                  {isAr ? pillar.titleAr : pillar.titleEn}
                </h4>
                <p className="text-[11.5px] text-ish-gray-light leading-relaxed font-body">
                  {isAr ? pillar.descAr : pillar.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. Main Footer Grid & Portals */}
      {/* ========================================================================= */}
      <div className="section-container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Col 1: Identity, Heritage & Official Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden border border-ish-gold/40 bg-ish-black shadow-lg shadow-ish-gold/15 p-1">
                <Image
                  src="/images/logo.jpg"
                  alt="Ishbilia Real Estate Development"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-ish-gold font-black text-2xl tracking-wide leading-tight group-hover:text-ish-gold-light transition-colors font-headline">
                  {isAr ? 'إشبيلية للتطوير العقاري' : 'ISHBILIA DEVELOPMENT'}
                </span>
                <span className="text-[11px] text-ish-gray-light tracking-widest uppercase font-semibold mt-0.5">
                  {isAr ? 'ريادة معمارية بمدينة السادات منذ 2004' : 'Sadat City Architectural Heritage since 2004'}
                </span>
              </div>
            </Link>

            <p className="text-ish-gray-light text-xs sm:text-sm leading-relaxed font-body max-w-md">
              {isAr
                ? 'شركة تطوير واستثمار عقاري رائدة؛ نصنع الفارق في المشهد المعماري لمدينة السادات عبر صروح هندسية فائقة الجودة، كود أمان زلازل B350، تشطيبات فندقية فاخرة، والتزام تعاقدي لا يقبل المساومة.'
                : 'Pioneering real estate development in Sadat City. Delivering high-spec neoclassical landmarks, B350 seismic engineering, luxury hotel-grade finishes, and disciplined contractual delivery.'}
            </p>

            {/* Official Registration Dossier */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5 text-xs text-ish-gray-light max-w-md">
              <div className="flex items-center gap-2 text-ish-gold font-bold text-[11px]">
                <span>🏛️</span>
                <span>{isAr ? 'التوثيق القانوني والاعتماد الرسمي:' : 'Official Corporate Accreditation:'}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1 text-ish-white/90">
                <div className="flex items-center gap-1">
                  <span className="text-ish-gray">س.ت:</span>
                  <span>44293 (رسمي)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-ish-gray">ب.ض:</span>
                  <span>معتمدة ومسجلة</span>
                </div>
              </div>
              <p className="text-[10.5px] text-ish-gray pt-1">
                {isAr ? 'خاضع لاشتراطات جهاز تنمية مدينة السادات وهيئة المجتمعات العمرانية' : 'Compliant with Sadat City Authority & NUCA Regulations'}
              </p>
            </div>
          </div>

          {/* Col 2: Sadat City Investment Districts Hub (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-ish-gold font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2 font-headline border-b border-ish-gold/20 pb-2">
              <span>📍</span>
              <span>{isAr ? 'مناطق السادات الاستثمارية' : 'Sadat Districts Hub'}</span>
            </h4>

            <ul className="space-y-3">
              {sadatDistricts.map((district, idx) => (
                <li key={idx}>
                  <Link
                    href={district.href}
                    className="group block p-2 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <div className="text-xs font-bold text-ish-white group-hover:text-ish-gold transition-colors flex items-center justify-between">
                      <span>{isAr ? district.nameAr : district.nameEn}</span>
                      <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-ish-gold/15 text-ish-gold border border-ish-gold/30 font-semibold shrink-0">
                        {isAr ? district.badgeAr : district.badgeEn}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-white/5">
              <Link
                href="/why-ishbilia"
                className="text-[11.5px] text-ish-gold/90 hover:text-ish-gold font-semibold flex items-center gap-1 group"
              >
                <span>{isAr ? 'استكشف معايير البناء واشتراطات السادات' : 'Explore Sadat Zoning & Building Standards'}</span>
                <span className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">←</span>
              </Link>
            </div>
          </div>

          {/* Col 3: Client & Investor Portals (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-ish-gold font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2 font-headline border-b border-ish-gold/20 pb-2">
              <span>🧭</span>
              <span>{isAr ? 'بوابات العملاء' : 'Client Portals'}</span>
            </h4>

            <ul className="space-y-2.5">
              {quickPortals.map((portal, idx) => (
                <li key={idx}>
                  <Link
                    href={portal.href}
                    className="text-xs text-ish-gray-light hover:text-ish-gold transition-colors duration-200 block py-1"
                  >
                    {isAr ? portal.labelAr : portal.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-ish-gold font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2 font-headline border-b border-ish-gold/20 pb-2">
              <span>🏢</span>
              <span>{isAr ? 'المقر وصالة كبار الزوار' : 'HQ & VIP Lounge'}</span>
            </h4>

            <div className="space-y-3.5 text-xs text-ish-gray-light">
              <div className="flex items-start gap-2.5">
                <span className="text-ish-gold text-base shrink-0 mt-0.5">📍</span>
                <p className="leading-relaxed font-body">
                  {isAr ? (
                    <>
                      <strong className="text-ish-white block mb-0.5">صالة كبار الزوار — جنة مول</strong>
                      المنطقة الثامنة، الدور الثالث، بجوار البريد ومطعم قصر السلام — مدينة السادات، المنوفية.
                    </>
                  ) : (
                    <>
                      <strong className="text-ish-white block mb-0.5">VIP Lounge — Ganna Mall</strong>
                      Zone 8, 3rd Floor, Near Post Office & Qasr El Salam — Sadat City.
                    </>
                  )}
                </p>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <span className="text-ish-gold text-base shrink-0">🕒</span>
                <div>
                  <span className="text-ish-white font-semibold block">
                    {isAr ? 'مواعيد العمل الرسمية:' : 'Official Working Hours:'}
                  </span>
                  <span className="text-[11px] text-ish-gray-light">
                    {isAr ? 'السبت إلى الخميس: 9:00 ص – 9:00 م' : 'Sat – Thu: 9:00 AM – 9:00 PM'}
                  </span>
                  <span className="block text-[10.5px] text-emerald-400 mt-0.5">
                    {isAr ? '● خدمة استشارات واتساب متاحة 24/7' : '● 24/7 WhatsApp Advisory Active'}
                  </span>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="space-y-1.5 pt-2">
                <a
                  href="tel:+201010722349"
                  className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-ish-gold/40 text-ish-white hover:text-ish-gold transition-colors font-mono text-xs"
                  dir="ltr"
                >
                  <span className="text-[10px] text-ish-gray font-body font-normal">
                    {isAr ? 'إدارة المبيعات والحجوزات' : 'Sales & Booking'}
                  </span>
                  <span className="font-bold">+20 10 10722349</span>
                </a>

                <a
                  href="tel:+201032032286"
                  className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 hover:border-ish-gold/40 text-ish-white hover:text-ish-gold transition-colors font-mono text-xs"
                  dir="ltr"
                >
                  <span className="text-[10px] text-ish-gray font-body font-normal">
                    {isAr ? 'إدارة شراكات الأراضي' : 'Land JV Director'}
                  </span>
                  <span className="font-bold">+20 10 32032286</span>
                </a>
              </div>

              {/* Google Maps Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=%D8%AC%D9%86%D8%A9+%D9%85%D9%88%D9%84+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%A7%D8%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-ish-gold/10 border border-ish-gold/30 hover:bg-ish-gold/20 text-ish-gold text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
              >
                <span>🗺️</span>
                <span>{isAr ? 'فتح موقع المقر على Google Maps' : 'Open HQ on Google Maps'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. VIP Investment Catalog & Launch Alerts (نادي مستثمري إشبيلية) */}
        {/* ========================================================================= */}
        <div className="glass-card rounded-2xl border border-ish-gold/30 p-6 sm:p-8 bg-gradient-to-r from-ish-gold/10 via-ish-black to-ish-gold/10 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-ish-gold/20 text-ish-gold text-[11px] font-bold mb-2">
                <span>⭐</span>
                <span>{isAr ? 'نادي مستثمري إشبيلية الحصري' : 'Exclusive Ishbilia Investors Circle'}</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-ish-white font-headline mb-1">
                {isAr ? 'استلم كتالوج المشروعات ومخططات الـ 3D وقوائم الأسعار الرسمية' : 'Receive the 3D Plans & Priority Launch Price Catalog'}
              </h4>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'كن أول من يعرف بمواعيد فتح الحجوزات للمشروعات الجديدة بمدينة السادات وأسعار مرحلة الطرح الأولى عبر واتساب مباشرة.'
                  : 'Be the first to access priority launch prices and newly zoned architectural projects across Sadat City.'}
              </p>
            </div>

            <form onSubmit={handleCatalogRequest} className="w-full lg:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="tel"
                  required
                  value={catalogPhone}
                  onChange={(e) => setCatalogPhone(e.target.value)}
                  placeholder={isAr ? 'أدخل رقم هاتفك / واتساب' : 'Enter WhatsApp Phone'}
                  className="flex-1 px-4 py-3 rounded-xl bg-ish-black/90 border border-white/20 text-ish-white text-xs focus:border-ish-gold focus:outline-none font-mono"
                  dir="ltr"
                />
                <button
                  type="submit"
                  className="py-3 px-5 rounded-xl font-bold text-xs text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-md shrink-0 cursor-pointer"
                >
                  <span>📥</span>
                  <span>{isAr ? 'استلم الكتالوج فوراً' : 'Get Catalog'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. Social Presence, Verified Channels & Back-To-Top */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Channels */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-ish-gold">
              {isAr ? 'تابعنا على المنصات الرسمية:' : 'Official Verified Channels:'}
            </span>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/Ishbilia.realestate/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-ish-white hover:text-ish-gold hover:bg-ish-gold/20 hover:border-ish-gold transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@ishbilia23"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-ish-white hover:text-ish-gold hover:bg-ish-gold/20 hover:border-ish-gold transition-all"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201010722349"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 hover:border-emerald-500/50 transition-all"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:ishbilia1210@gmail.com"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-ish-white hover:text-ish-gold hover:bg-ish-gold/20 hover:border-ish-gold transition-all"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Smooth Scroll To Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-ish-black border border-ish-gold/40 text-ish-gold hover:bg-ish-gold hover:text-ish-black transition-all font-bold text-xs shadow-md cursor-pointer group"
          >
            <span>{isAr ? 'العودة إلى أعلى الصفحة' : 'Back to Top'}</span>
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* 6. Sub-Footer Legal Bar & Copyright */}
        {/* ========================================================================= */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start text-[11.5px] text-ish-gray font-body">
          <p>
            © {new Date().getFullYear()} {isAr ? 'شركة إشبيلية للتطوير العقاري. جميع الحقوق محفوظة.' : 'Ishbilia Real Estate Development. All rights reserved.'}
          </p>

          <p className="text-ish-gold/80 italic font-medium">
            {isAr ? 'إشبيلية... اسمٌ نبنيه صرحاً بعد صرح بمدينة السادات' : 'Ishbilia... Building Landmarks Project after Project'}
          </p>
        </div>
      </div>
    </footer>
  );
}
