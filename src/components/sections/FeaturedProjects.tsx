'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';
import { projectsData, Project } from '@/data/projects';
import ProjectModal from '@/components/projects/ProjectModal';

type FilterType = 'all' | 'apartments' | 'gardens' | 'commercial';

export default function FeaturedProjects() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filterTabs: { id: FilterType; labelAr: string; labelEn: string; icon: string }[] = [
    { id: 'all', labelAr: 'كافة المشروعات', labelEn: 'All Projects', icon: '🏛️' },
    { id: 'apartments', labelAr: 'شقق سكنية فاخرة', labelEn: 'Luxury Apartments', icon: '🏢' },
    { id: 'gardens', labelAr: 'أرضي بحديقة خاصة', labelEn: 'Ground with Garden', icon: '🌿' },
    { id: 'commercial', labelAr: 'تجاري وإداري وبنتهاوس', labelEn: 'Commercial & Penthouse', icon: '💼' },
  ];

  // Filter logic
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'apartments') {
      return project.units.some((u) => u.floor === 'typical');
    }
    if (activeFilter === 'gardens') {
      return project.units.some((u) => u.gardenArea && u.gardenArea > 0);
    }
    if (activeFilter === 'commercial') {
      return project.type.includes('تجاري') || project.id === 'project-plaza';
    }
    return true;
  });

  const displayedProjects = filteredProjects.slice(0, 6);

  return (
    <section className="section-rhythm section-secondary relative scroll-mt-28 w-full overflow-hidden" id="projects-section">
      {/* Background Ambience */}
      <div className="absolute top-1/2 end-0 w-96 h-96 bg-ish-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-12 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
            <span>{isAr ? 'محفظة المشروعات المعتمدة' : 'Verified Project Portfolio'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? (
              <>
                مشروعات إشبيلية <span className="gold-gradient-text">الاستثمارية الفاخرة</span>
              </>
            ) : (
              <>
                Ishbilia <span className="gold-gradient-text">Flagship Investment Projects</span>
              </>
            )}
          </h2>

          <div className="gold-line max-w-xs mx-auto mb-5" />

          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto font-body">
            {isAr
              ? 'مواقع استثنائية في أكثر مناطق مدينة السادات تميزاً، بتصميمات نيوكلاسيكية ومخططات تلبي كافة متطلبات الراحة والخصوصية العائلية.'
              : 'Exceptional locations in prime Sadat City districts, featuring neoclassical architecture and floor plans tailored for elite family living.'}
          </p>
        </div>

        {/* 1. Unit Selector / Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                type="button"
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
                  isActive
                    ? 'bg-ish-gold text-ish-black border border-ish-gold-light shadow-ish-gold/25 scale-105'
                    : 'glass-card text-ish-white/90 border border-white/10 hover:border-ish-gold/40 hover:bg-white/5'
                }`}
                aria-pressed={isActive}
              >
                <span>{tab.icon}</span>
                <span>{isAr ? tab.labelAr : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {displayedProjects.map((project) => {
            const totalUnits = project.units.length;
            const minArea = project.units.length > 0 ? Math.min(...project.units.map((u) => u.area)) : 140;
            const maxArea = project.units.length > 0 ? Math.max(...project.units.map((u) => u.area)) : 220;
            const hasGardens = project.units.some((u) => u.gardenArea && u.gardenArea > 0);

            const whatsappDirectBooking = `https://wa.me/${project.salesWhatsapp}?text=${encodeURIComponent(
              isAr
                ? `السلام عليكم، أرغب في حجز موعد معاينة والاستفسار عن الوحدات المتاحة في ${project.title} (${project.zone})`
                : `Hello, I would like to book a site tour and inquire about units in ${project.titleEn} (${project.zoneEn})`
            )}`;

            return (
              <div
                key={project.id}
                className="group glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-ish-gold/60 flex flex-col hover:shadow-[0_20px_50px_rgba(202,160,82,0.2)] w-full relative"
              >
                {/* Image Container with Luxury Badges */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-ish-black cursor-pointer block"
                >
                  <Image
                    src={project.facadeImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-ish-black/20 to-transparent opacity-90" />

                  {/* Status Badge */}
                  <div className="absolute top-4 start-4">
                    <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-ish-black/80 backdrop-blur-md text-ish-gold font-bold border border-ish-gold/40 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{isAr ? project.statusLabel : project.statusLabelEn}</span>
                    </span>
                  </div>

                  {/* Plot & Zone Tag */}
                  <div className="absolute bottom-3 start-4">
                    <span className="text-xs text-ish-white bg-ish-black/85 px-3 py-1 rounded-md backdrop-blur-md border border-white/15 font-mono">
                      {isAr ? `قطعة ${project.plotNumber} • ${project.zone}` : `Plot ${project.plotNumber} • ${project.zoneEn}`}
                    </span>
                  </div>

                  {/* Quick Expand Button */}
                  <div className="absolute top-4 end-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-8 h-8 rounded-full bg-ish-black/80 text-ish-gold flex items-center justify-center text-sm border border-ish-gold/40">
                      ↗
                    </span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/30">
                  <div>
                    <Link href={`/projects/${project.slug}`}>
                      <h3
                        className="text-ish-white font-bold text-xl mb-2.5 group-hover:text-ish-gold transition-colors font-headline cursor-pointer"
                      >
                        {isAr ? project.title : project.titleEn}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-ish-gray-light line-clamp-2 mb-4 leading-relaxed font-body">
                      {isAr ? project.description : project.descriptionEn}
                    </p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-ish-black/60 border border-white/5 mb-4 text-xs font-body">
                      <div>
                        <span className="text-ish-gray-light block text-[11px]">
                          {isAr ? 'المساحات المتاحة:' : 'Available Areas:'}
                        </span>
                        <span className="font-bold text-ish-white">
                          {minArea}م² - {maxArea}م²
                        </span>
                      </div>

                      <div>
                        <span className="text-ish-gray-light block text-[11px]">
                          {isAr ? 'طبيعة الوحدات:' : 'Unit Types:'}
                        </span>
                        <span className="font-bold text-ish-gold">
                          {hasGardens
                            ? isAr
                              ? 'أرضي بحديقة + متكرر'
                              : 'Ground + Typical'
                            : isAr
                            ? 'أدوار متكررة وتجاري'
                            : 'Typical & Commercial'}
                        </span>
                      </div>
                    </div>

                    {/* Highlights Pill */}
                    <div className="space-y-1.5 mb-5 text-xs text-ish-gray-light font-body">
                      {(isAr ? project.locationHighlights : project.locationHighlightsEn).slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ish-gold shrink-0" />
                          <span className="leading-tight truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-2.5">
                    {/* Primary Action: Navigate to Dedicated Project Page */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="w-full sm:flex-1 py-2.5 px-4 rounded-xl text-xs font-bold text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md hover:shadow-ish-gold/20 cursor-pointer"
                    >
                      <span>{isAr ? 'تفاصيل المشروع والمخططات' : 'Project Blueprint Page'}</span>
                      <span className="text-sm">↗</span>
                    </Link>

                    {/* Secondary Action: Direct WhatsApp Booking */}
                    <a
                      href={whatsappDirectBooking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-2.5 px-3.5 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>💬</span>
                      <span>{isAr ? 'معاينة' : 'Tour'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="btn-gold rounded-full inline-flex items-center gap-2 text-sm sm:text-base font-bold px-8 py-3.5 shadow-xl hover:scale-105 transition-all"
          >
            <span>
              {isAr
                ? `استعراض كافة المشروعات والمخططات التفصيلية (${projectsData.length} مشروع)`
                : `Explore All Projects & Blueprints (${projectsData.length} Projects)`}
            </span>
            <span>←</span>
          </Link>
        </div>
      </div>

      {/* Project Details & Floor Plans Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
