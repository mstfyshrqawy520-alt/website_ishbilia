'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { projectsData, Project, ProjectUnit } from '@/data/projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  // Find project by slug or ID or plotNumber
  const project: Project =
    projectsData.find(
      (p) =>
        p.slug === slug ||
        p.id === slug ||
        p.plotNumber === slug ||
        p.slug.includes(slug) ||
        p.id.includes(slug)
    ) || projectsData[0];

  // Active View Tab in Gallery
  const [activeTab, setActiveTab] = useState<'facade' | 'ground' | 'typical' | 'location'>('facade');
  const [selectedUnit, setSelectedUnit] = useState<ProjectUnit | null>(project.units[0] || null);

  // Calculator State for this Project
  const [calcDownPayment, setCalcDownPayment] = useState<number>(20);
  const [calcPeriodMonths, setCalcPeriodMonths] = useState<number>(36);
  const basePricePerMeter = 16500; // Estimated baseline price per m² in Sadat premier zones
  const activeArea = selectedUnit ? selectedUnit.area : 150;
  const totalEstimatedPrice = activeArea * basePricePerMeter;
  const downPaymentAmount = Math.round(totalEstimatedPrice * (calcDownPayment / 100));
  const remainingAmount = totalEstimatedPrice - downPaymentAmount;
  const quarterlyInstallment = Math.round(remainingAmount / (calcPeriodMonths / 3));

  const currentImage =
    activeTab === 'facade'
      ? project.facadeImage
      : activeTab === 'ground'
      ? project.groundFloorImage || project.facadeImage
      : activeTab === 'typical'
      ? project.typicalFloorImage || project.facadeImage
      : project.locationImage || project.facadeImage;

  const handleUnitBookingWhatsApp = (unit: ProjectUnit) => {
    const message = isAr
      ? `*طلب حجز واستفسار عن وحدة في ${project.title}*
🏛️ *المشروع:* ${project.title} (قطعة ${project.plotNumber} - ${project.zone})
🏢 *الوحدة:* ${unit.name}
📐 *المساحة:* ${unit.area} م² ${unit.gardenArea ? `+ حديقة خاصة ${unit.gardenArea} م²` : ''}
🛏️ *التقسيم:* ${unit.bedrooms} غرف نوم • ${unit.bathrooms} حمامات
🧭 *الواجهة:* ${unit.orientation}
أرجو تزويدي بالأسعار الرسمية المتاحة وجدول أنظمة السداد وتنسيق موعد معاينة ميدانية.`
      : `*Booking & Inquiry Request for ${project.titleEn}*
🏛️ *Project:* ${project.titleEn} (Plot ${project.plotNumber} - ${project.zoneEn})
🏢 *Unit:* ${unit.nameEn}
📐 *Area:* ${unit.area} m² ${unit.gardenArea ? `+ Garden ${unit.gardenArea} m²` : ''}
🛏️ *Layout:* ${unit.bedrooms} Beds • ${unit.bathrooms} Baths
🧭 *Orientation:* ${unit.orientationEn}
Please provide official pricing, installment plans, and arrange a site inspection.`;

    window.open(`https://wa.me/20${project.salesWhatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-ish-white pt-28 pb-20">
      {/* 1. Breadcrumbs & Top Bar */}
      <div className="section-container relative z-10 mb-6">
        <nav className="flex items-center gap-2 text-xs text-ish-gray-light font-body py-2">
          <Link href="/" className="hover:text-ish-gold transition-colors">
            {isAr ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-ish-gold transition-colors">
            {isAr ? 'المشروعات' : 'Projects'}
          </Link>
          <span>/</span>
          <span className="text-ish-gold font-bold">{isAr ? project.title : project.titleEn}</span>
        </nav>
      </div>

      {/* 2. Hero Architectural Spotlight */}
      <section className="section-container relative z-10 mb-16">
        <div className="glass-card rounded-3xl border border-ish-gold/30 p-6 sm:p-10 shadow-2xl bg-gradient-to-br from-ish-gold/10 via-ish-black to-ish-black relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Viewer (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative h-80 sm:h-[450px] w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-ish-black group">
                <Image
                  src={currentImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Status Badges */}
                <div className="absolute top-4 start-4 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-ish-black/85 backdrop-blur-md text-ish-gold font-bold text-xs border border-ish-gold/40 shadow-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isAr ? project.statusLabel : project.statusLabelEn}</span>
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-ish-gold/90 text-ish-black font-black text-xs shadow-lg">
                    {isAr ? `قطعة ${project.plotNumber}` : `Plot ${project.plotNumber}`}
                  </span>
                </div>

                <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-xs text-ish-white">
                  <span className="font-mono bg-ish-black/80 px-3 py-1 rounded-lg border border-white/10">
                    {isAr ? project.zone : project.zoneEn} • {isAr ? project.city : project.cityEn}
                  </span>
                  <span className="text-ish-gold font-bold bg-ish-black/80 px-3 py-1 rounded-lg border border-white/10">
                    {isAr ? 'كود زلازل B350' : 'B350 Seismic Code'}
                  </span>
                </div>
              </div>

              {/* View Selector Tabs */}
              <div className="grid grid-cols-4 gap-2 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab('facade')}
                  className={`py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                    activeTab === 'facade'
                      ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md font-black'
                      : 'bg-ish-black/70 border-white/10 text-ish-white hover:border-ish-gold/40'
                  }`}
                >
                  🏢 {isAr ? 'الواجهة الفاخرة' : 'Facade'}
                </button>

                {project.groundFloorImage && (
                  <button
                    type="button"
                    onClick={() => setActiveTab('ground')}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      activeTab === 'ground'
                        ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md font-black'
                        : 'bg-ish-black/70 border-white/10 text-ish-white hover:border-ish-gold/40'
                    }`}
                  >
                    🌿 {isAr ? 'الدور الأرضي والحدائق' : 'Ground Floor'}
                  </button>
                )}

                {project.typicalFloorImage && (
                  <button
                    type="button"
                    onClick={() => setActiveTab('typical')}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      activeTab === 'typical'
                        ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md font-black'
                        : 'bg-ish-black/70 border-white/10 text-ish-white hover:border-ish-gold/40'
                    }`}
                  >
                    📐 {isAr ? 'الأدوار المتكررة' : 'Typical Floors'}
                  </button>
                )}

                {project.locationImage && (
                  <button
                    type="button"
                    onClick={() => setActiveTab('location')}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                      activeTab === 'location'
                        ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md font-black'
                        : 'bg-ish-black/70 border-white/10 text-ish-white hover:border-ish-gold/40'
                    }`}
                  >
                    📍 {isAr ? 'الموقع والمعالم' : 'Location Map'}
                  </button>
                )}
              </div>
            </div>

            {/* Quick Dossier & Highlights (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold text-xs font-semibold mb-3 border border-ish-gold/30">
                  <span>🏛️</span>
                  <span>{isAr ? project.type : project.typeEn}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-ish-white font-headline leading-tight mb-4">
                  {isAr ? project.title : project.titleEn}
                </h1>

                <p className="text-ish-gray-light text-sm sm:text-base leading-relaxed font-body mb-6">
                  {isAr ? project.description : project.descriptionEn}
                </p>

                {/* Location Highlights List */}
                <div className="space-y-2.5 mb-6">
                  <h3 className="text-xs font-bold text-ish-gold uppercase tracking-wider mb-2">
                    {isAr ? 'المزايا الجغرافية والموقع الاستراتيجي:' : 'Strategic Location Highlights:'}
                  </h3>
                  {(isAr ? project.locationHighlights : project.locationHighlightsEn).map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ish-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-ish-gold shrink-0 mt-2" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Specs Strip */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
                  <div>
                    <span className="text-ish-gray-light block mb-0.5">{isAr ? 'المساحات السكنية:' : 'Residential Areas:'}</span>
                    <span className="text-sm font-bold text-ish-white font-mono">
                      {project.units.length > 0
                        ? `${Math.min(...project.units.map((u) => u.area))}م² - ${Math.max(...project.units.map((u) => u.area))}م²`
                        : isAr ? 'مساحات مرنة' : 'Flexible'}
                    </span>
                  </div>
                  <div>
                    <span className="text-ish-gray-light block mb-0.5">{isAr ? 'الحدائق الخاصة:' : 'Private Gardens:'}</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">
                      {isAr ? 'تصل إلى 111 م²' : 'Up to 111 m²'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/20${project.salesWhatsapp}?text=${encodeURIComponent(
                    isAr
                      ? `السلام عليكم، أرغب في حجز ميعاد معاينة لمشروع ${project.title} والاستفسار عن الوحدات المتاحة.`
                      : `Hello, I want to schedule a site inspection for ${project.titleEn} and inquire about available units.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-ish-gold/20 cursor-pointer"
                >
                  <span>💬</span>
                  <span>{isAr ? 'حجز معاينة ميدانية عبر واتساب' : 'Schedule Site Visit via WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${project.salesPhone}`}
                  className="py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm text-ish-white bg-white/5 border border-white/20 hover:border-ish-gold transition-all flex items-center justify-center gap-2 cursor-pointer font-mono"
                  dir="ltr"
                >
                  <span>📞</span>
                  <span>{project.salesPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Architectural Specs & Engineering Standards */}
      <section className="section-container relative z-10 mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs font-bold mb-3">
            <span>🔬</span>
            <span>{isAr ? 'المواصفات الفنية والهندسية' : 'Engineering Specifications'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-ish-white font-headline">
            {isAr ? 'أعلى معايير الأمان الإنشائي والتشطيب الفندقي' : 'Peak Structural Safety & Hotel-Grade Finishes'}
          </h2>
          <div className="gold-line max-w-xs mx-auto mt-3 mb-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-ish-gold/40 transition-colors">
            <div className="text-2xl mb-3 text-ish-gold">🏗️</div>
            <h3 className="font-bold text-base text-ish-white mb-1.5 font-headline">
              {isAr ? 'كود الزلازل وخرسانات B350' : 'B350 Seismic Concrete'}
            </h3>
            <p className="text-xs text-ish-gray-light leading-relaxed font-body">
              {isAr
                ? 'تنفيذ الهيكل الإنشائي بالكامل بخرسانات جاهزة معتمدة تخضع لاختبارات كسر المكعبات تحت إشراف استشاري نقابة المهندسين.'
                : 'Full reinforced concrete frame using B350 ready-mix with mandatory lab compression tests.'}
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-ish-gold/40 transition-colors">
            <div className="text-2xl mb-3 text-ish-gold">🛗</div>
            <h3 className="font-bold text-base text-ish-white mb-1.5 font-headline">
              {isAr ? 'مصعد إيطالي متطور' : 'Italian Elevator System'}
            </h3>
            <p className="text-xs text-ish-gray-light leading-relaxed font-body">
              {isAr
                ? 'مصاعد كهربائية أوروبية وإيطالية فائقة الهدوء مزودة بنظام هبوط طوارئ أوتوماتيكي (ARD) لأقرب دور عند انقطاع التيار.'
                : 'Whisper-quiet imported elevators equipped with automatic rescue devices for complete peace of mind.'}
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-ish-gold/40 transition-colors">
            <div className="text-2xl mb-3 text-ish-gold">🏛️</div>
            <h3 className="font-bold text-base text-ish-white mb-1.5 font-headline">
              {isAr ? 'مداخل رخامية فندقية' : 'Luxury Marble Lobbies'}
            </h3>
            <p className="text-xs text-ish-gray-light leading-relaxed font-body">
              {isAr
                ? 'مداخل وسلالم مكسوة بالرخام والجرانيت الطبيعي المستورد، مع إضاءات ليد مخفية ومرايا فاخرة تعكس الفخامة منذ اللحظة الأولى.'
                : 'Natural imported imperial marble staircases and lobbies with concealed LED accent illumination.'}
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-ish-gold/40 transition-colors">
            <div className="text-2xl mb-3 text-ish-gold">🛡️</div>
            <h3 className="font-bold text-base text-ish-white mb-1.5 font-headline">
              {isAr ? 'عزل حراري ومائي كامل' : 'Thermal & Moisture Envelope'}
            </h3>
            <p className="text-xs text-ish-gray-light leading-relaxed font-body">
              {isAr
                ? 'عزل مائي متكامل للأسطح والواجهات ببيتومين معتمد ومواد عازلة للحرارة لحماية المبنى وتخفيض استهلاك الطاقة.'
                : 'Multi-layer thermal and waterproofing protecting roofs, foundations, and exterior facades.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Floor Plans & Available Units Catalog */}
      {project.units.length > 0 && (
        <section className="section-container relative z-10 mb-16" id="units-catalog">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-1">
                {isAr ? 'الوحدات والمساحات المتاحة للحجز' : 'Available Residences & Layouts'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ish-white font-headline">
                {isAr ? 'اختر وحدتك المثالية بمواصفاتها الدقيقة' : 'Select Your Ideal Floor Plan'}
              </h2>
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-ish-gold/15 text-ish-gold font-bold border border-ish-gold/30">
              {isAr ? `${project.units.length} وحدات مصممة بأعلى استغلال` : `${project.units.length} Tailored Residences`}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Units List (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {project.units.map((unit) => (
                <div
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedUnit?.id === unit.id
                      ? 'bg-ish-gold/15 border-ish-gold shadow-lg shadow-ish-gold/10'
                      : 'bg-ish-black/70 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-ish-white">{isAr ? unit.name : unit.nameEn}</span>
                    <span className="text-xs font-black text-ish-gold font-mono">{unit.area} م²</span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[11px] text-ish-gray-light">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      🛏️ {unit.bedrooms} {isAr ? 'غرف' : 'Beds'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      🚿 {unit.bathrooms} {isAr ? 'حمام' : 'Baths'}
                    </span>
                    {unit.gardenArea && (
                      <span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-bold">
                        🌿 {isAr ? `حديقة ${unit.gardenArea} م²` : `Garden ${unit.gardenArea} m²`}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 font-mono">
                      🧭 {isAr ? unit.orientation : unit.orientationEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Unit Details & Booking Card (7 cols) */}
            {selectedUnit && (
              <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-ish-gold/30 bg-gradient-to-br from-ish-gold/5 via-ish-black to-ish-black flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div>
                      <span className="text-xs text-ish-gold font-bold block mb-0.5">
                        {isAr ? 'تفاصيل الوحدة المختارة' : 'Selected Unit Blueprint Details'}
                      </span>
                      <h3 className="text-xl font-bold text-ish-white font-headline">
                        {isAr ? selectedUnit.name : selectedUnit.nameEn}
                      </h3>
                    </div>
                    <div className="text-end">
                      <span className="text-2xl font-black text-ish-gold font-mono block">
                        {selectedUnit.area} م²
                      </span>
                      {selectedUnit.gardenArea && (
                        <span className="text-xs text-emerald-400 font-semibold block">
                          + حديقة {selectedUnit.gardenArea} م²
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-ish-gray-light uppercase mb-3">
                      {isAr ? 'مميزات وخصائص هذه الوحدة:' : 'Exclusive Unit Features:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {(isAr ? selectedUnit.features : selectedUnit.featuresEn).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-ish-gold font-bold">✓</span>
                          <span className="text-ish-white/90">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Orientation & Floor info */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-ish-black border border-white/10 text-xs mb-6">
                    <div>
                      <span className="text-ish-gray-light block text-[11px]">{isAr ? 'الدور:' : 'Floor:'}</span>
                      <span className="font-bold text-ish-white">
                        {selectedUnit.floor === 'ground' ? (isAr ? 'الأرضي المرتفع' : 'Elevated Ground') : (isAr ? 'علوي متكرر' : 'Typical Floor')}
                      </span>
                    </div>
                    <div>
                      <span className="text-ish-gray-light block text-[11px]">{isAr ? 'اتجاه الواجهة:' : 'Orientation:'}</span>
                      <span className="font-bold text-ish-gold">
                        {isAr ? selectedUnit.orientation : selectedUnit.orientationEn}
                      </span>
                    </div>
                    <div>
                      <span className="text-ish-gray-light block text-[11px]">{isAr ? 'الغرف والحمامات:' : 'Rooms & Baths:'}</span>
                      <span className="font-bold text-ish-white">
                        {selectedUnit.bedrooms} {isAr ? 'نوم' : 'Beds'} • {selectedUnit.bathrooms} {isAr ? 'حمام' : 'Baths'}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleUnitBookingWhatsApp(selectedUnit)}
                  className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-ish-gold/25 cursor-pointer"
                >
                  <span>💬</span>
                  <span>{isAr ? `طلب حجز ${selectedUnit.name} وجدول الأقساط عبر واتساب` : `Book ${selectedUnit.nameEn} via WhatsApp`}</span>
                  <span>←</span>
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. Interactive Payment Calculator Tailored for This Project */}
      <section className="section-container relative z-10 mb-16">
        <div className="glass-card rounded-3xl border border-ish-gold/30 p-6 sm:p-10 shadow-2xl bg-gradient-to-br from-ish-gold/10 via-ish-black to-ish-black">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-1">
              {isAr ? 'حاسبة خطط السداد التقديرية' : 'Estimated Payment Plan Calculator'}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-ish-white font-headline">
              {isAr ? `احسب قسط وحدتك في ${project.title}` : `Calculate Installments for ${project.titleEn}`}
            </h2>
            <p className="text-xs text-ish-gray-light mt-1">
              {isAr ? 'مقدمات مرنة تبدأ من 15% وفترات سداد ميسرة تصل إلى 48 شهراً بدون فوائد بنكية معقدة.' : 'Flexible down payments from 15% with installment plans up to 48 months.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Down payment selection */}
              <div>
                <label className="block text-xs font-bold text-ish-gold mb-2">
                  {isAr ? 'نسبة المقدم المرغوبة:' : 'Down Payment Percentage:'}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[15, 20, 25, 30].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setCalcDownPayment(pct)}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        calcDownPayment === pct
                          ? 'bg-ish-gold text-ish-black border-ish-gold font-black shadow-md'
                          : 'bg-ish-black/80 border-white/10 text-ish-white hover:border-ish-gold/40'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Installment period selection */}
              <div>
                <label className="block text-xs font-bold text-ish-gold mb-2">
                  {isAr ? 'مدة التقسيط:' : 'Installment Duration:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { months: 24, labelAr: '24 شهراً (سنتان)', labelEn: '24 Months' },
                    { months: 36, labelAr: '36 شهراً (3 سنوات)', labelEn: '36 Months' },
                    { months: 48, labelAr: '48 شهراً (4 سنوات)', labelEn: '48 Months' },
                  ].map((p) => (
                    <button
                      key={p.months}
                      type="button"
                      onClick={() => setCalcPeriodMonths(p.months)}
                      className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        calcPeriodMonths === p.months
                          ? 'bg-ish-gold text-ish-black border-ish-gold font-black shadow-md'
                          : 'bg-ish-black/80 border-white/10 text-ish-white hover:border-ish-gold/40'
                      }`}
                    >
                      {isAr ? p.labelAr : p.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-ish-gray-light leading-relaxed">
                💡 {isAr ? 'يتم تخصيص خطة السداد بدقة في ميتنج التعاقد وفقاً للوحدة المختارة مع إمكانية دفعات سنوية مرنة تخفض قيمة الأقساط الشهرية.' : 'Payment schedules are finalized in our VIP meeting with optional annual balloon payments reducing monthly rates.'}
              </div>
            </div>

            {/* Results Display (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-ish-black border border-ish-gold/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <span className="text-ish-gray-light">{isAr ? 'المساحة المحسوبة:' : 'Calculated Area:'}</span>
                <span className="font-bold text-ish-white font-mono">{activeArea} م²</span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <span className="text-ish-gray-light">{isAr ? 'قيمة المقدم التقديرية:' : 'Estimated Down Payment:'}</span>
                <span className="font-bold text-ish-gold font-mono text-base">
                  {downPaymentAmount.toLocaleString()} ج.م
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                <span className="text-ish-gray-light">{isAr ? 'القسط الربع سنوي:' : 'Quarterly Installment:'}</span>
                <span className="font-bold text-emerald-400 font-mono text-lg">
                  {quarterlyInstallment.toLocaleString()} ج.م
                </span>
              </div>

              <div className="text-[11px] text-ish-gray text-center pt-1">
                {isAr ? 'القسط الشهري المكافئ تقريباً:' : 'Approximate Monthly Equivalent:'}{' '}
                <strong className="text-ish-white font-mono">{Math.round(quarterlyInstallment / 3).toLocaleString()} ج.م</strong>
              </div>

              <a
                href={`https://wa.me/20${project.salesWhatsapp}?text=${encodeURIComponent(
                  isAr
                    ? `السلام عليكم، أرغب في تأكيد خطة سداد لمشروع ${project.title}: مساحة ${activeArea}م² بمقدم ${calcDownPayment}% وتقسيط على ${calcPeriodMonths} شهراً.`
                    : `Hello, I want to confirm payment plan for ${project.titleEn}: Area ${activeArea}m², Down payment ${calcDownPayment}%, over ${calcPeriodMonths} months.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer mt-2"
              >
                <span>💬</span>
                <span>{isAr ? 'تأكيد خطة السداد وحجز الوحدة' : 'Confirm Plan via WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Direct VIP Executive Consultation Footer */}
      <section className="section-container relative z-10 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-ish-white font-headline">
            {isAr ? 'هل تود معاينة المشروع على الطبيعة؟' : 'Would You Like an On-Site Tour?'}
          </h3>
          <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed">
            {isAr
              ? 'تفضل بحجز جولة معاينة خاصة بصحبة أحد مهندسي واستشاريي إشبيلية للاطلاع على جودة الخرسانات وموقع القطعة والمداخل.'
              : 'Book an executive site walkthrough with Ishbilia engineers to inspect concrete finishes and prime location.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/consultation"
              className="py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-white glass-card border border-white/20 hover:border-ish-gold transition-all"
            >
              {isAr ? 'حجز ميتنج بمقر الشركة بجنة مول' : 'Book Meeting at Ganna Mall HQ'}
            </Link>

            <Link
              href="/projects"
              className="py-3 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-gold bg-ish-black border border-ish-gold/30 hover:border-ish-gold transition-all"
            >
              {isAr ? 'استعراض باقي مشروعات إشبيلية' : 'Browse All Projects'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
