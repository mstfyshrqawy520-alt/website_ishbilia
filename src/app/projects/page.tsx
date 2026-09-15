'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { projectsData, Project, getProjectLocationUrl } from '@/data/projects';
import ProjectModal from '@/components/projects/ProjectModal';

type FilterType =
  | 'all'
  | 'zone-22'
  | 'rawda-rayhan'
  | 'zone-35'
  | 'zone-29'
  | 'zone-21'
  | 'gardens'
  | 'available';

export default function ProjectsPage() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter tabs configuration
  const filterTabs: { id: FilterType; labelAr: string; labelEn: string; badge?: string }[] = [
    { id: 'all', labelAr: 'كافة المشروعات', labelEn: 'All Projects' },
    { id: 'zone-22', labelAr: 'المنطقة الذهبية (22)', labelEn: 'The Golden Zone (22)' },
    { id: 'rawda-rayhan', labelAr: 'الروضة والريحان', labelEn: 'Al-Rawda & Al-Rayhan' },
    { id: 'zone-35', labelAr: 'المنطقة 35 (الجامعة)', labelEn: 'Zone 35 (University)' },
    { id: 'zone-29', labelAr: 'المنطقة 29', labelEn: 'Zone 29' },
    { id: 'zone-21', labelAr: 'المنطقة 21', labelEn: 'Zone 21' },
    { id: 'gardens', labelAr: 'أرضي بحديقة خاصة 🌿', labelEn: 'Ground with Garden 🌿' },
    { id: 'available', labelAr: 'متاح للحجز الآن', labelEn: 'Available Now' }
  ];

  // Filtering & search logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // District / Category Filter
      let matchesFilter = true;
      if (activeFilter === 'zone-22') {
        matchesFilter = project.zone.includes('الذهبية') || project.zone.includes('22');
      } else if (activeFilter === 'rawda-rayhan') {
        matchesFilter = project.zone.includes('الروضة') || project.zone.includes('الريحان');
      } else if (activeFilter === 'zone-35') {
        matchesFilter = project.zone.includes('35');
      } else if (activeFilter === 'zone-29') {
        matchesFilter = project.zone.includes('29');
      } else if (activeFilter === 'zone-21') {
        matchesFilter = project.zone.includes('21');
      } else if (activeFilter === 'gardens') {
        matchesFilter = project.units.some((u) => u.gardenArea && u.gardenArea > 0);
      } else if (activeFilter === 'available') {
        matchesFilter = project.status === 'available';
      }

      if (!matchesFilter) return false;

      // Text / Search Filter
      if (!searchQuery.trim()) return true;
      const query = searchQuery.trim().toLowerCase();

      return (
        project.plotNumber.toLowerCase().includes(query) ||
        project.title.toLowerCase().includes(query) ||
        project.titleEn.toLowerCase().includes(query) ||
        project.zone.toLowerCase().includes(query) ||
        project.zoneEn.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.locationHighlights.some((h) => h.toLowerCase().includes(query)) ||
        project.units.some(
          (u) =>
            u.name.toLowerCase().includes(query) ||
            u.orientation.toLowerCase().includes(query) ||
            u.features.some((f) => f.toLowerCase().includes(query))
        )
      );
    });
  }, [activeFilter, searchQuery]);

  // Featured flagship project (198 in Zone 35 or 1518)
  const featuredProject = projectsData.find((p) => p.plotNumber === '198') || projectsData[0];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 section-navy relative overflow-hidden">
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-ish-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold animate-pulse" />
            <span>{isAr ? 'محفظة المشروعات المعتمدة 2026/2027' : 'Verified Project Portfolio 2026/2027'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ish-white mb-6 font-headline">
            {isAr ? (
              <>
                مشروعات إشبيلية <span className="gold-gradient-text">في مدينة السادات</span>
              </>
            ) : (
              <>
                Ishbilia Architectural Projects in <span className="gold-gradient-text">Sadat City</span>
              </>
            )}
          </h1>

          <div className="gold-line max-w-xs mx-auto mb-6" />

          <p className="text-ish-gray text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-body">
            {isAr
              ? 'اكتشف أكثر من 20 مشروعاً عمرانياً استثنائياً في أرقى أحياء السادات (المنطقة الذهبية، الروضة والريحان، المنطقة 35، المنطقة 29، والمنطقة 21)، مع مخططات هندسية دقيقة وحدائق خاصة تصل حتى 197 م².'
              : 'Discover over 20 prime architectural developments across Sadat City’s top districts (The Golden Zone, Al-Rawda & Al-Rayhan, Zone 35, Zone 29, and Zone 21), featuring precise floor plans and private gardens up to 197m².'}
          </p>
        </div>
      </section>

      {/* Featured Spotlight Project */}
      {featuredProject && (
        <section className="py-10 section-dark border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-ish-navy/90 via-ish-dark to-ish-black border border-ish-gold/40 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -end-24 w-96 h-96 bg-ish-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image Preview */}
                <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-xl overflow-hidden border border-white/15 shadow-xl group">
                  <Image
                    src={featuredProject.facadeImage}
                    alt={featuredProject.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ish-black/95 via-transparent to-transparent" />
                  <div className="absolute top-4 start-4">
                    <span className="px-3 py-1 bg-ish-gold text-ish-black font-bold text-xs rounded-md shadow">
                      {isAr ? 'مشروع أيقوني • متاح للحجز' : 'Flagship Project • Booking Open'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-xs text-ish-white">
                    <span className="font-semibold bg-ish-navy/90 px-2.5 py-1 rounded">
                      {isAr ? `قطعة ${featuredProject.plotNumber} • ${featuredProject.zone}` : `Plot ${featuredProject.plotNumber} • ${featuredProject.zoneEn}`}
                    </span>
                    <span className="text-ish-gold font-bold">
                      {isAr ? 'واجهة دابل فيس ناصية صريحة' : 'Prime Double-Face Corner'}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <span className="text-xs font-semibold text-ish-gold tracking-widest uppercase">
                      {isAr ? 'موقع استراتيجي أمام بوابة جامعة السادات ومول جولدن ليف' : 'Prime University & Mall Frontage'}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ish-white mt-1 font-headline">
                      {isAr ? featuredProject.title : featuredProject.titleEn}
                    </h2>
                    <p className="text-ish-gray-light text-sm sm:text-base mt-3 leading-relaxed font-body">
                      {isAr ? featuredProject.description : featuredProject.descriptionEn}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                    {(isAr ? featuredProject.locationHighlights : featuredProject.locationHighlightsEn).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-ish-white/90">
                        <span className="text-ish-gold shrink-0">📍</span>
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick specs pill */}
                  <div className="flex flex-wrap gap-2 pt-2 text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-ish-white font-medium">
                      {isAr ? 'مساحات: 132م² - 185م²' : 'Areas: 132m² - 185m²'}
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-emerald-400 font-medium">
                      {isAr ? 'حدائق خاصة ومداخل مستقلة' : 'Private Gardens & Entrances'}
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-ish-gold font-medium">
                      {isAr ? '3 غرف نوم • حتى 4 حمامات' : '3 Beds • Up to 4 Baths'}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <Link
                      href={`/projects/${featuredProject.slug}`}
                      className="btn-gold text-xs sm:text-sm py-2.5 px-6 rounded-lg shadow-lg inline-flex items-center gap-2 font-bold"
                    >
                      <span>{isAr ? 'استعراض المخططات والوحدات' : 'Explore Floor Plans & Units'}</span>
                      <span>←</span>
                    </Link>

                    <a
                      href={featuredProject.googleMapsUrl || getProjectLocationUrl(featuredProject.plotNumber)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs sm:text-sm py-2.5 px-4 rounded-lg inline-flex items-center gap-1.5 border-ish-gold/40 text-ish-gold hover:bg-ish-gold/15 transition-all"
                      title={isAr ? 'فتح موقع القطعة الفعلي على Google Maps' : 'Open Location on Google Maps'}
                    >
                      <span>📍</span>
                      <span>{isAr ? 'موقع القطعة Google Maps' : 'Google Maps Pin'}</span>
                      <span className="text-xs">↗</span>
                    </a>

                    <a
                      href={`https://wa.me/${featuredProject.salesWhatsapp}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار وحجز وحدة في ${featuredProject.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs sm:text-sm py-2.5 px-5 rounded-lg inline-flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                      </svg>
                      <span>{isAr ? 'مبيعات المشروع واتساب' : 'WhatsApp Sales'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Interactive Controls: Search Bar & District Filters */}
      <section className="py-8 section-dark sticky top-16 z-30 bg-ish-navy/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Search Input */}
          <div className="max-w-xl mx-auto relative">
            <span className="absolute start-4 top-1/2 -translate-y-1/2 text-ish-gold text-lg">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isAr
                  ? 'ابحث برقم القطعة (مثل: 578، 198، 1164) أو المنطقة أو ميزة (حديقة، ناصية)...'
                  : 'Search by plot number (e.g. 578, 198, 1164), district or feature...'
              }
              className="w-full bg-ish-black/70 border border-white/20 focus:border-ish-gold rounded-full py-3 ps-12 pe-10 text-sm text-ish-white placeholder:text-ish-gray focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute end-4 top-1/2 -translate-y-1/2 text-ish-gray hover:text-ish-white text-xs bg-white/10 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* District Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  type="button"
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 shadow-sm ${
                    isActive
                      ? 'bg-ish-gold text-ish-black shadow-ish-gold/25 font-bold scale-105'
                      : 'bg-white/5 text-ish-gray-light hover:bg-white/10 hover:text-ish-white border border-white/10'
                  }`}
                >
                  <span>{isAr ? tab.labelAr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* Result Count Indicator */}
          <div className="flex items-center justify-between text-xs text-ish-gray px-2">
            <span>
              {isAr
                ? `عرض ${filteredProjects.length} مشروع من إجمالي ${projectsData.length}`
                : `Showing ${filteredProjects.length} of ${projectsData.length} projects`}
            </span>
            {searchQuery && (
              <span className="text-ish-gold">
                {isAr ? `نتائج البحث عن: "${searchQuery}"` : `Search results for: "${searchQuery}"`}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 p-8">
              <span className="text-5xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-ish-white mb-2">
                {isAr ? 'لم نجد أي مشروع يطابق هذا البحث' : 'No projects match your search'}
              </h3>
              <p className="text-sm text-ish-gray mb-6">
                {isAr
                  ? 'جرب البحث برقم قطعة مختلف أو إعادة تعيين الفلاتر.'
                  : 'Try searching with another plot number or reset your filters.'}
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="btn-gold text-xs py-2 px-6 rounded-full"
              >
                {isAr ? 'عرض كافة المشروعات' : 'View All Projects'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                // Calculate specs
                const groundWithGarden = project.units.find((u) => u.gardenArea && u.gardenArea > 0);
                const maxGarden = project.units.reduce((max, u) => Math.max(max, u.gardenArea || 0), 0);
                const areas = project.units.map((u) => u.area).filter((a) => a > 0);
                const minArea = areas.length ? Math.min(...areas) : null;
                const maxArea = areas.length ? Math.max(...areas) : null;

                return (
                  <div
                    key={project.id}
                    className="project-card group glass-card rounded-xl overflow-hidden hover:-translate-y-1.5 transition-all duration-500 border border-white/10 hover:border-ish-gold/50 flex flex-col justify-between shadow-lg"
                  >
                    {/* Card Media Header */}
                    <div>
                      <Link href={`/projects/${project.slug}`} className="block relative h-60 bg-ish-black overflow-hidden">
                        <Image
                          src={project.facadeImage}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-transparent to-transparent opacity-85" />
                        
                        {/* Status Badge */}
                        <div className="absolute top-3.5 start-3.5">
                          <span className="text-[11px] px-2.5 py-1 bg-ish-black/85 backdrop-blur rounded-md text-ish-gold font-bold border border-ish-gold/30">
                            {isAr ? project.statusLabel : project.statusLabelEn}
                          </span>
                        </div>

                        {/* Plot & Zone Badge */}
                        <div className="absolute bottom-3 start-3.5 flex items-center gap-1.5">
                          <span className="text-xs font-bold text-ish-white bg-ish-navy/90 px-2.5 py-0.5 rounded border border-white/10">
                            {isAr ? `قطعة ${project.plotNumber}` : `Plot ${project.plotNumber}`}
                          </span>
                          <span className="text-xs text-ish-gold bg-ish-black/90 px-2 py-0.5 rounded border border-ish-gold/20">
                            {isAr ? project.zone : project.zoneEn}
                          </span>
                        </div>
                      </Link>

                      {/* Card Body */}
                      <div className="p-6">
                        <Link href={`/projects/${project.slug}`}>
                          <h3 className="text-ish-white font-bold text-lg mb-2 group-hover:text-ish-gold transition-colors font-headline">
                            {isAr ? project.title : project.titleEn}
                          </h3>
                        </Link>

                        {/* Key Location Proximity */}
                        {project.locationHighlights.length > 0 && (
                          <div className="flex items-center gap-1.5 text-xs text-ish-gray-light mb-3">
                            <span className="text-ish-gold">📍</span>
                            <span className="truncate">
                              {isAr ? project.locationHighlights[0] : project.locationHighlightsEn[0]}
                            </span>
                          </div>
                        )}

                        <p className="text-xs text-ish-gray line-clamp-2 mb-4 leading-relaxed font-body">
                          {isAr ? project.description : project.descriptionEn}
                        </p>

                        {/* Specs Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-4 text-[11px]">
                          {minArea && (
                            <span className="px-2.5 py-1 rounded bg-white/5 text-ish-white font-medium border border-white/5">
                              {minArea === maxArea ? `${minArea} م²` : `${minArea} - ${maxArea} م²`}
                            </span>
                          )}

                          {maxGarden > 0 && (
                            <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
                              {isAr ? `حديقة حتى ${maxGarden} م²` : `Garden up to ${maxGarden}m²`}
                            </span>
                          )}

                          {project.units.length > 0 && (
                            <span className="px-2.5 py-1 rounded bg-ish-gold/10 text-ish-gold font-medium border border-ish-gold/20">
                              {isAr ? `${project.units.length} وحدات تفصيلية` : `${project.units.length} Units`}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="p-6 pt-0 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-xs font-bold text-ish-white hover:text-ish-gold flex items-center gap-1 transition-colors py-2"
                      >
                        <span>{isAr ? 'المخططات والتفاصيل' : 'Plans & Details'}</span>
                        <span className="rtl:rotate-180">→</span>
                      </Link>

                      <div className="flex items-center gap-1.5">
                        <a
                          href={project.googleMapsUrl || getProjectLocationUrl(project.plotNumber)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-ish-gold/10 hover:bg-ish-gold/25 text-ish-gold border border-ish-gold/30 text-xs font-bold transition-all shadow-sm cursor-pointer"
                          title={isAr ? 'فتح موقع القطعة الفعلي على Google Maps' : 'Open Location on Google Maps'}
                        >
                          <span>📍</span>
                          <span>{isAr ? 'اللوكيشن' : 'GPS'}</span>
                          <span className="text-[10px] opacity-70">↗</span>
                        </a>

                        <a
                          href={`https://wa.me/${project.salesWhatsapp}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار وحجز وحدة في ${project.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all"
                          title={isAr ? 'تواصل مع مسؤول المبيعات' : 'WhatsApp Sales'}
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                          </svg>
                          <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-navy text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? 'هل تبحث عن وحدة بمواصفات معينة أو ترغب في تطوير أرضك؟' : 'Looking for a Custom Unit or Want to Develop Your Land?'}
          </h2>
          <p className="text-ish-gray mb-8 text-base leading-relaxed font-body">
            {isAr
              ? 'فريق إشبيلية الهندسي والاستشاري جاهز لمساعدتك في اختيار أنسب فرصة استثمارية تلائم ميزانيتك أو دراسة أرضك للشراكة والتطوير.'
              : 'Our engineering and consulting team is ready to help you select the ideal investment tailored to your budget or analyze your land for partnership.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/consultation" className="btn-gold rounded-lg font-bold">
              {t.nav.consultation}
            </Link>
            <Link href="/#land-owners" className="btn-outline rounded-lg font-bold">
              {t.nav.developLand}
            </Link>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
