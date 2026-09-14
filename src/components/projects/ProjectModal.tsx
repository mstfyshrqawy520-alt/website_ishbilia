'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project, ProjectUnit } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageProvider';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const [activeTab, setActiveTab] = useState<'overview' | 'plans' | 'location'>('overview');
  const [selectedFloor, setSelectedFloor] = useState<'ground' | 'typical'>('ground');
  const [selectedUnit, setSelectedUnit] = useState<ProjectUnit | null>(null);

  if (!isOpen || !project) return null;

  const groundUnits = project.units.filter((u) => u.floor === 'ground');
  const typicalUnits = project.units.filter((u) => u.floor === 'typical');
  const displayedUnits = selectedFloor === 'ground' ? groundUnits : typicalUnits;

  const currentFloorImage =
    selectedFloor === 'ground' ? project.groundFloorImage : project.typicalFloorImage;

  const whatsappUrl = `https://wa.me/${project.salesWhatsapp}?text=${encodeURIComponent(
    isAr
      ? `مرحباً، أود الاستفسار وحجز وحدة في ${project.title} (${project.zone} - ${project.city})`
      : `Hello, I would like to inquire about booking a unit in ${project.titleEn} (${project.zoneEn})`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-ish-black/85 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl bg-ish-dark border border-ish-gold/30 rounded-lg shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-ish-black/50">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-ish-gold/20 text-ish-gold font-semibold border border-ish-gold/30">
                {isAr ? project.statusLabel : project.statusLabelEn}
              </span>
              <span className="text-xs text-ish-gray">
                {isAr ? `${project.city} • ${project.zone}` : `${project.cityEn} • ${project.zoneEn}`}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ish-white">
              {isAr ? project.title : project.titleEn}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-ish-gray hover:text-ish-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-ish-black/30 px-4 sm:px-6 gap-2 sm:gap-6 overflow-x-auto text-sm">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 font-medium transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-ish-gold text-ish-gold'
                : 'border-transparent text-ish-gray hover:text-ish-white'
            }`}
          >
            {isAr ? 'الواجهة والمعلومات' : 'Overview & Facade'}
          </button>

          {project.units.length > 0 && (
            <button
              onClick={() => setActiveTab('plans')}
              className={`py-3 font-medium transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'plans'
                  ? 'border-ish-gold text-ish-gold'
                  : 'border-transparent text-ish-gray hover:text-ish-white'
              }`}
            >
              {isAr ? 'مخططات الأدوار والشقق' : 'Floor Plans & Units'}
            </button>
          )}

          {project.locationImage && (
            <button
              onClick={() => setActiveTab('location')}
              className={`py-3 font-medium transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'location'
                  ? 'border-ish-gold text-ish-gold'
                  : 'border-transparent text-ish-gray hover:text-ish-white'
              }`}
            >
              {isAr ? 'الموقع الاستراتيجي' : 'Strategic Location'}
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Facade Image */}
              <div className="relative w-full h-72 sm:h-96 rounded-md overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src={project.facadeImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ish-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 start-4 end-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 bg-ish-black/80 backdrop-blur-md rounded border border-ish-gold/40 text-ish-gold text-sm font-semibold">
                    {isAr ? `واجهة معمارية ناصية بحري` : `North-facing Corner Facade`}
                  </span>
                  <span className="text-xs text-ish-gray-light bg-ish-black/70 px-3 py-1 rounded">
                    {isAr ? `قطعة رقم ${project.plotNumber}` : `Plot ${project.plotNumber}`}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/5 border border-white/10 rounded-md p-4 sm:p-5">
                <h4 className="text-ish-gold font-bold text-lg mb-2">
                  {isAr ? 'نبذة عن المشروع' : 'Project Overview'}
                </h4>
                <p className="text-ish-gray-light leading-relaxed text-sm sm:text-base">
                  {isAr ? project.description : project.descriptionEn}
                </p>
              </div>

              {/* Key Location Highlights */}
              <div>
                <h4 className="text-ish-white font-bold text-base mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ish-gold" />
                  {isAr ? 'أهم مميزات الموقع والاستثمار' : 'Key Investment & Location Features'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(isAr ? project.locationHighlights : project.locationHighlightsEn).map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded bg-white/[0.03] border border-white/5"
                      >
                        <svg
                          className="w-5 h-5 text-ish-gold shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm text-ish-gray-light">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FLOOR PLANS & UNITS */}
          {activeTab === 'plans' && (
            <div className="space-y-6">
              {/* Floor Switcher Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedFloor('ground');
                    setSelectedUnit(null);
                  }}
                  className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
                    selectedFloor === 'ground'
                      ? 'bg-ish-gold text-ish-black shadow-md'
                      : 'bg-white/5 text-ish-gray hover:bg-white/10'
                  }`}
                >
                  {isAr ? 'الدور الأرضي (مع حدائق)' : 'Ground Floor (with gardens)'}
                </button>

                <button
                  onClick={() => {
                    setSelectedFloor('typical');
                    setSelectedUnit(null);
                  }}
                  className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
                    selectedFloor === 'typical'
                      ? 'bg-ish-gold text-ish-black shadow-md'
                      : 'bg-white/5 text-ish-gray hover:bg-white/10'
                  }`}
                >
                  {isAr ? 'الدور المتكرر (العلوي)' : 'Typical Floor'}
                </button>
              </div>

              {/* Floor Plan Image */}
              {currentFloorImage && (
                <div className="relative w-full h-80 sm:h-[420px] bg-ish-black/90 border border-white/10 rounded-md overflow-hidden shadow-inner flex items-center justify-center p-2">
                  <Image
                    src={currentFloorImage}
                    alt={isAr ? `مخطط ${selectedFloor}` : `Floor plan`}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-3 end-3 bg-ish-black/80 backdrop-blur px-3 py-1 rounded text-xs text-ish-gold border border-ish-gold/20">
                    {isAr
                      ? selectedFloor === 'ground'
                        ? 'مخطط الدور الأرضي الهندسي'
                        : 'مخطط الدور المتكرر الهندسي'
                      : 'Architectural Floor Plan'}
                  </div>
                </div>
              )}

              {/* Units List on This Floor */}
              <div className="space-y-3">
                <h4 className="text-ish-white font-bold text-base flex items-center justify-between">
                  <span>
                    {isAr
                      ? `الوحدات المتاحة في ${selectedFloor === 'ground' ? 'الدور الأرضي' : 'الدور المتكرر'}`
                      : `Units available on this floor`}
                  </span>
                  <span className="text-xs text-ish-gold">
                    {isAr ? `${displayedUnits.length} وحدات` : `${displayedUnits.length} units`}
                  </span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayedUnits.map((unit) => (
                    <div
                      key={unit.id}
                      onClick={() => setSelectedUnit(unit)}
                      className={`p-4 rounded-md border cursor-pointer transition-all ${
                        selectedUnit?.id === unit.id
                          ? 'border-ish-gold bg-ish-gold/10'
                          : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-bold text-ish-white text-base">
                          {isAr ? unit.name : unit.nameEn}
                        </h5>
                        <span className="text-sm font-bold text-ish-gold px-2 py-0.5 rounded bg-ish-gold/10">
                          {unit.area} م²
                        </span>
                      </div>

                      {unit.gardenArea && (
                        <div className="mb-2 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          {isAr ? `حديقة خاصة بمساحة ${unit.gardenArea} م²` : `Private Garden: ${unit.gardenArea}m²`}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 text-xs text-ish-gray mb-3">
                        <span className="px-2 py-1 bg-white/5 rounded">
                          {isAr ? `${unit.bedrooms} غرف نوم` : `${unit.bedrooms} Bedrooms`}
                        </span>
                        <span className="px-2 py-1 bg-white/5 rounded">
                          {isAr ? `${unit.bathrooms} حمام` : `${unit.bathrooms} Baths`}
                        </span>
                        <span className="px-2 py-1 bg-white/5 rounded">
                          {isAr ? unit.orientation : unit.orientationEn}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(isAr ? unit.features : unit.featuresEn).map((f, i) => (
                          <span key={i} className="text-[11px] px-2 py-0.5 bg-white/5 text-ish-gray-light rounded">
                            {f}
                          </span>
                        ))}
                      </div>

                      <a
                        href={`https://wa.me/${project.salesWhatsapp}?text=${encodeURIComponent(
                          isAr
                            ? `السلام عليكم، أود حجز والاستفسار عن ${unit.name} بمساحة ${unit.area}م² في ${project.title} (${project.zone})`
                            : `Hello, I'm interested in booking ${unit.nameEn} (${unit.area}m²) in ${project.titleEn}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-ish-gold hover:text-ish-gold-light transition-colors mt-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                        </svg>
                        {isAr ? 'احجز هذه الوحدة عبر واتساب' : 'Book this unit via WhatsApp'}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: STRATEGIC LOCATION */}
          {activeTab === 'location' && project.locationImage && (
            <div className="space-y-6">
              <div className="relative w-full h-80 sm:h-[450px] bg-ish-black border border-white/10 rounded-md overflow-hidden shadow-lg flex items-center justify-center">
                <Image
                  src={project.locationImage}
                  alt={isAr ? 'خريطة الموقع المعتمدة' : 'Approved Location Map'}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded bg-white/5 border border-white/10 text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-ish-gold/10 text-ish-gold flex items-center justify-center">
                    🎓
                  </div>
                  <h5 className="font-bold text-ish-white text-sm mb-1">
                    {isAr ? 'جامعة مدينة السادات' : 'Sadat University'}
                  </h5>
                  <p className="text-xs text-ish-gray">
                    {isAr ? 'خطوات معدودة من الحرم الجامعي' : 'Steps from campus'}
                  </p>
                </div>

                <div className="p-4 rounded bg-white/5 border border-white/10 text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-ish-gold/10 text-ish-gold flex items-center justify-center">
                    🏥
                  </div>
                  <h5 className="font-bold text-ish-white text-sm mb-1">
                    {isAr ? 'مجمع خدمات المنطقة' : 'Services Complex'}
                  </h5>
                  <p className="text-xs text-ish-gray">
                    {isAr ? 'ثاني نمرة من المسجد والمدرسة والمركز الطبي' : '2nd plot from full services'}
                  </p>
                </div>

                <div className="p-4 rounded bg-white/5 border border-white/10 text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-ish-gold/10 text-ish-gold flex items-center justify-center">
                    🛣️
                  </div>
                  <h5 className="font-bold text-ish-white text-sm mb-1">
                    {isAr ? 'المحاور الرئيسية' : 'Main Axes'}
                  </h5>
                  <p className="text-xs text-ish-gray">
                    {isAr ? 'ثالث نمرة من المحور المركزي وطريق الأكسدة' : 'Direct access to main axes'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA Bar */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-ish-black/70 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-ish-gray">{isAr ? 'قسم المبيعات والحجوزات:' : 'Sales & Booking:'}</span>
            <a
              href={`tel:${project.salesPhone}`}
              className="text-sm font-bold text-ish-gold hover:underline"
            >
              {project.salesPhone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs sm:text-sm py-2 px-4 rounded-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
              </svg>
              {isAr ? 'تواصل مع المبيعات واتساب' : 'WhatsApp Sales'}
            </a>

            <Link
              href="/consultation"
              className="btn-outline text-xs sm:text-sm py-2 px-4 rounded-sm"
              onClick={onClose}
            >
              {isAr ? 'طلب استشارة أو معاينة' : 'Book a Consultation'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
