'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';
import { projectsData, Project } from '@/data/projects';
import ProjectModal from '@/components/projects/ProjectModal';

export default function FeaturedProjects() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section-rhythm section-secondary relative scroll-mt-28 w-full" id="projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
            <span>{t.projects.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
            {isAr ? 'أحدث مشروعاتنا الاستثمارية' : 'Our Featured Investment Projects'}
          </h2>
          <div className="gold-line max-w-xs mx-auto mb-6" />
          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto">
            {isAr
              ? 'مواقع استثنائية في أكثر مناطق مدينة السادات تميزاً، بتصميمات معمارية فاخرة ومخططات تلبي كافة متطلبات الراحة والخصوصية.'
              : 'Exceptional locations in prime Sadat City districts, featuring luxury architecture and floor plans tailored for comfort.'}
          </p>
        </div>

        {/* Real Projects Grid — centered symmetrically */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={isAr ? `عرض تفاصيل ${project.title}` : `View details for ${project.titleEn}`}
              className="project-card group glass-card rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-ish-gold/60 focus-within:border-ish-gold/70 flex flex-col hover:shadow-[0_20px_45px_rgba(202,160,82,0.22)] w-full"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-ish-black">
                <Image
                  src={project.facadeImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-transparent to-transparent opacity-80" />

                {/* Status Badge */}
                <div className="absolute top-4 start-4">
                  <span className="text-xs px-3 py-1 rounded bg-ish-black/80 backdrop-blur-md text-ish-gold font-bold border border-ish-gold/30">
                    {isAr ? project.statusLabel : project.statusLabelEn}
                  </span>
                </div>

                {/* Plot Tag */}
                <div className="absolute bottom-3 start-4">
                  <span className="text-xs text-ish-white/90 bg-ish-navy/80 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                    {isAr ? `قطعة ${project.plotNumber} • ${project.zone}` : `Plot ${project.plotNumber} • ${project.zoneEn}`}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-ish-white font-bold text-xl mb-2 group-hover:text-ish-gold transition-colors font-headline">
                    {isAr ? project.title : project.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-ish-gray-light line-clamp-3 mb-4 leading-relaxed min-h-[3.75rem] font-body">
                    {isAr ? project.description : project.descriptionEn}
                  </p>

                  {/* Highlights Pill */}
                  <div className="space-y-1.5 mb-5 text-xs text-ish-gray-light font-body">
                    {(isAr ? project.locationHighlights : project.locationHighlightsEn).slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-ish-gold shrink-0" />
                        <span className="leading-normal">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <span className="text-xs text-ish-gold font-semibold font-body bg-ish-gold/10 px-3 py-1.5 rounded-full border border-ish-gold/20">
                    {project.units.length > 0
                      ? isAr
                        ? `${project.units.length} وحدات متاحة`
                        : `${project.units.length} Units Available`
                      : isAr
                      ? 'مساحات متعددة'
                      : 'Multiple Spaces'}
                  </span>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="px-4 py-2 rounded-full text-xs font-bold text-ish-black bg-ish-gold hover:bg-ish-gold-light focus:outline-none focus:ring-2 focus:ring-ish-gold/50 transition-all duration-300 flex items-center gap-1.5 group/btn shadow-md shadow-ish-gold/20 hover:scale-105"
                    aria-label={isAr ? `احجز الآن في ${project.title}` : `Book Now - ${project.titleEn}`}
                  >
                    <span>{isAr ? 'احجز الآن' : 'Book Now'}</span>
                    <svg
                      className="w-3.5 h-3.5 rtl:rotate-180 transition-transform duration-300 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Dual CTAs */}
        <div className="text-center mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="btn-gold rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-ish-gold/20 inline-block"
            id="projects-view-all"
          >
            {isAr ? 'استعراض كافة المشروعات والمخططات' : 'View All Projects & Blueprints'}
          </Link>

          <a
            href="https://wa.me/201010722349?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AD%D8%AC%D8%B2%20%D9%88%D8%AD%D8%AF%D8%A7%D8%AA%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%A5%D8%B4%D8%A8%D9%8A%D9%84%D9%8A%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-lg inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
            </svg>
            <span>{isAr ? 'حجز فوري عبر واتساب' : 'Direct WhatsApp Booking'}</span>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
