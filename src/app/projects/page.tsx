'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { projectsData, Project } from '@/data/projects';
import ProjectModal from '@/components/projects/ProjectModal';

export default function ProjectsPage() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  const [activeFilter, setActiveFilter] = useState<'all' | 'available' | 'residential' | 'commercial'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'available') return p.status === 'available';
    if (activeFilter === 'residential') return p.type.includes('سكني') || p.typeEn.includes('Residential');
    if (activeFilter === 'commercial') return p.type.includes('تجاري') || p.typeEn.includes('Commercial');
    return true;
  });

  const featuredProject = projectsData[0]; // 1518

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 section-navy relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ish-gold text-sm tracking-[0.15em] uppercase mb-4 font-semibold">
            {t.projects.sectionTitle}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ish-white mb-6">
            {isAr ? 'مشروعات إشبيلية المعمارية' : 'Ishbilia Architectural Projects'}
          </h1>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-ish-gray text-lg leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'مجموعة متميزة من المشروعات السكنية والتجارية المطورة بأعلى المعايير الهندسية في أفضل مناطق مدينة السادات.'
              : 'A curated collection of residential and commercial developments engineered to the highest standards across Sadat City.'}
          </p>
        </div>
      </section>

      {/* Featured Spotlight: Project 1518 */}
      <section className="py-12 section-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-xl bg-gradient-to-br from-ish-navy/90 via-ish-dark to-ish-black border border-ish-gold/40 shadow-2xl relative overflow-hidden">
            {/* Architectural Grid Watermark */}
            <div className="absolute -top-24 -end-24 w-96 h-96 bg-ish-gold/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Preview */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-lg overflow-hidden border border-white/15 shadow-xl group">
                <Image
                  src={featuredProject.facadeImage}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ish-black/90 via-transparent to-transparent" />
                <div className="absolute top-4 start-4">
                  <span className="px-3 py-1 bg-ish-gold text-ish-black font-bold text-xs rounded shadow">
                    {isAr ? 'المشروع الأبرز • متاح للحجز' : 'Featured • Booking Open'}
                  </span>
                </div>
                <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-xs text-ish-white">
                  <span>{isAr ? 'قطعة 1518 • المنطقة 29' : 'Plot 1518 • Zone 29'}</span>
                  <span className="text-ish-gold font-semibold">
                    {isAr ? 'واجهة بحري ناصية صريحة' : 'Prime North Corner'}
                  </span>
                </div>
              </div>

              {/* Details & Action */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs font-semibold text-ish-gold tracking-widest uppercase">
                    {isAr ? 'فرصة استثمارية وسكنية نادرة' : 'Rare Investment Opportunity'}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mt-1">
                    {isAr ? featuredProject.title : featuredProject.titleEn}
                  </h2>
                  <p className="text-ish-gray-light text-sm sm:text-base mt-3 leading-relaxed">
                    {isAr ? featuredProject.description : featuredProject.descriptionEn}
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {(isAr ? featuredProject.locationHighlights : featuredProject.locationHighlightsEn).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-ish-white/90">
                      <svg className="w-4 h-4 text-ish-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Quick specs pill */}
                <div className="flex flex-wrap gap-2 pt-2 text-xs">
                  <span className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-ish-white font-medium">
                    {isAr ? 'مساحات: 139م² - 201م²' : 'Areas: 139m² - 201m²'}
                  </span>
                  <span className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-emerald-400 font-medium">
                    {isAr ? 'حدائق خاصة حتى 111م²' : 'Private Gardens up to 111m²'}
                  </span>
                  <span className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-ish-gold font-medium">
                    {isAr ? '3 غرف نوم • 2-3 حمام' : '3 Bedrooms • 2-3 Baths'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="btn-gold text-sm py-2.5 px-6 rounded-sm shadow-lg"
                  >
                    {isAr ? 'استعراض المخططات والوحدات' : 'Explore Floor Plans & Units'}
                  </button>

                  <a
                    href={`https://wa.me/201010722349?text=${encodeURIComponent('السلام عليكم، أود الاستفسار وحجز وحدة في مشروع إشبيلية 1518')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2.5 px-5 rounded-sm inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                    </svg>
                    {isAr ? 'مبيعات المشروع واتساب' : 'WhatsApp Sales'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-ish-gold text-ish-black'
                  : 'bg-white/5 text-ish-gray hover:bg-white/10'
              }`}
            >
              {isAr ? 'كافة المشروعات' : 'All Projects'}
            </button>
            <button
              onClick={() => setActiveFilter('available')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'available'
                  ? 'bg-ish-gold text-ish-black'
                  : 'bg-white/5 text-ish-gray hover:bg-white/10'
              }`}
            >
              {isAr ? 'متاح للحجز الآن' : 'Available for Booking'}
            </button>
            <button
              onClick={() => setActiveFilter('residential')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'residential'
                  ? 'bg-ish-gold text-ish-black'
                  : 'bg-white/5 text-ish-gray hover:bg-white/10'
              }`}
            >
              {isAr ? 'سكني فاخر' : 'Luxury Residential'}
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'commercial'
                  ? 'bg-ish-gold text-ish-black'
                  : 'bg-white/5 text-ish-gray hover:bg-white/10'
              }`}
            >
              {isAr ? 'تجاري وإداري' : 'Commercial & Admin'}
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="project-card group glass-card rounded-md overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-white/10 hover:border-ish-gold/50 cursor-pointer flex flex-col"
              >
                <div className="relative h-64 bg-ish-black overflow-hidden">
                  <Image
                    src={project.facadeImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 start-4">
                    <span className="text-xs px-3 py-1 bg-ish-black/80 backdrop-blur rounded text-ish-gold font-bold border border-ish-gold/30">
                      {isAr ? project.statusLabel : project.statusLabelEn}
                    </span>
                  </div>
                  <div className="absolute bottom-3 start-4">
                    <span className="text-xs text-ish-white/90 bg-ish-navy/80 px-2 py-0.5 rounded">
                      {isAr ? `قطعة ${project.plotNumber}` : `Plot ${project.plotNumber}`}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-ish-white font-bold text-xl mb-2 group-hover:text-ish-gold transition-colors">
                      {isAr ? project.title : project.titleEn}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-ish-gray mb-3">
                      <svg className="w-4 h-4 text-ish-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{isAr ? `${project.city} • ${project.zone}` : `${project.cityEn} • ${project.zoneEn}`}</span>
                    </div>
                    <p className="text-xs text-ish-gray line-clamp-3 mb-4 leading-relaxed">
                      {isAr ? project.description : project.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-ish-gold font-semibold">
                      {project.units.length > 0
                        ? isAr
                          ? `${project.units.length} وحدات مفصلة`
                          : `${project.units.length} Detailed Units`
                        : isAr
                        ? 'مساحات متعددة'
                        : 'Multiple Spaces'}
                    </span>
                    <span className="text-xs font-bold text-ish-white group-hover:text-ish-gold flex items-center gap-1">
                      {isAr ? 'عرض التفاصيل' : 'View Details'}
                      <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-ish-white mb-4">
            {isAr ? 'هل تبحث عن وحدة أو ترغب في تطوير أرضك؟' : 'Looking for a Unit or Want to Develop Your Land?'}
          </h2>
          <p className="text-ish-gray mb-8">
            {isAr
              ? 'فريق إشبيلية الهندسي والاستشاري جاهز لمساعدتك في اختيار أنسب فرصة استثمارية أو دراسة أرضك.'
              : 'Our engineering and consulting team is ready to help you select the ideal investment or study your plot.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/consultation" className="btn-gold rounded-sm">
              {t.nav.consultation}
            </Link>
            <Link href="/#land-owners" className="btn-outline rounded-sm">
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
