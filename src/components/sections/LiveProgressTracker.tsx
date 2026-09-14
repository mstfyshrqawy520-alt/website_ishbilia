'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

interface ProgressProject {
  id: string;
  slug: string;
  plot: string;
  title: string;
  titleEn: string;
  zone: string;
  zoneEn: string;
  progressPercentage: number;
  currentPhase: string;
  currentPhaseEn: string;
  statusBadge: string;
  statusBadgeEn: string;
  image: string;
  milestones: { labelAr: string; labelEn: string; progress: number }[];
  whatsappContact: string;
}

const progressProjectsData: ProgressProject[] = [
  {
    id: 'proj-1518',
    slug: 'ishbilia-1518-zone-29',
    plot: '1518',
    title: 'مشروع إشبيلية 1518',
    titleEn: 'Ishbilia 1518 Project',
    zone: 'المنطقة 29 • واجهة بحري ناصية',
    zoneEn: 'Zone 29 • Prime North Corner',
    progressPercentage: 100,
    currentPhase: 'تم التسليم وتشغيل كافة العدادات والمرافق الرسمية بالكامل.',
    currentPhaseEn: 'Delivered with all official meters and utilities operational.',
    statusBadge: 'مكتمل ومسلّم 100%',
    statusBadgeEn: 'Delivered 100%',
    image: '/images/projects/project-1518-clean-facade.jpg',
    milestones: [
      { labelAr: 'الهيكل الإنشائي والخرسانات B350', labelEn: 'Structural Frame & Concrete', progress: 100 },
      { labelAr: 'المباني والعزل المائي والحراري', labelEn: 'Masonry & Insulation', progress: 100 },
      { labelAr: 'الواجهة الكلاسيكية والدهانات الفاخرة', labelEn: 'Neoclassical Facade', progress: 100 },
      { labelAr: 'المرافق والعدادات والمصعد الإيطالي', labelEn: 'Utilities & Elevator', progress: 100 }
    ],
    whatsappContact: '201010722349'
  },
  {
    id: 'proj-1490',
    slug: 'ishbilia-1490-golden-zone',
    plot: '1490',
    title: 'مشروع إشبيلية 1490',
    titleEn: 'Ishbilia 1490 Project',
    zone: 'المنطقة الذهبية • شارع رئيسي',
    zoneEn: 'Golden Zone • Main Boulevard',
    progressPercentage: 90,
    currentPhase: 'التشطيبات الخارجية للواجهة وتجهيز المدخل الرخامي الفندقي.',
    currentPhaseEn: 'Exterior facade finishing and luxury marble lobby execution.',
    statusBadge: 'مرحلة التشطيبات النهائية 90%',
    statusBadgeEn: 'Final Finishing 90%',
    image: '/images/projects/project-1490-clean-facade.jpg',
    milestones: [
      { labelAr: 'الهيكل الإنشائي والأساسات', labelEn: 'Structural Foundation', progress: 100 },
      { labelAr: 'أعمال البناء والتأسيس الكهربائي', labelEn: 'Masonry & Electrical Prep', progress: 100 },
      { labelAr: 'الواجهات الخارجية والكرانيش', labelEn: 'Exterior Facade & Moldings', progress: 90 },
      { labelAr: 'المداخل واللاندسكيب والحدائق', labelEn: 'Lobbies & Landscaping', progress: 75 }
    ],
    whatsappContact: '201032032286'
  },
  {
    id: 'proj-810',
    slug: 'ishbilia-commercial-plaza',
    plot: '810',
    title: 'مشروع إشبيلية بلازا (810)',
    titleEn: 'Ishbilia Plaza 810',
    zone: 'المنطقة المركزية • محور استراتيجي',
    zoneEn: 'Central Zone • Strategic Axis',
    progressPercentage: 80,
    currentPhase: 'أعمال المباني المتقدمة والتجهيزات الكهروميكانيكية.',
    currentPhaseEn: 'Advanced masonry & electromechanical infrastructure.',
    statusBadge: 'مرحلة متقدمة 80%',
    statusBadgeEn: 'Advanced Phase 80%',
    image: '/images/projects/project-810-clean-facade.jpg',
    milestones: [
      { labelAr: 'الهيكل الإنشائي والأسقف', labelEn: 'Concrete Structure', progress: 100 },
      { labelAr: 'المباني والقواطع الداخلية', labelEn: 'Internal Partitions', progress: 90 },
      { labelAr: 'التأسيسات الكهروميكانيكية', labelEn: 'Electromechanical', progress: 70 },
      { labelAr: 'الواجهات وتجاليد الزجاج', labelEn: 'Glass Facades & Cladding', progress: 60 }
    ],
    whatsappContact: '201032032286'
  }
];

export default function LiveProgressTracker() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();

  return (
    <section className="section-rhythm section-primary relative w-full overflow-hidden" id="construction-progress">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ish-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-12 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isAr ? 'الشفافية الهندسية والميدانية' : 'Field Transparency & Execution'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? (
              <>
                متابعة حية <span className="gold-gradient-text">لنسب الإنجاز الإنشائي</span> في المشروعات
              </>
            ) : (
              <>
                Live <span className="gold-gradient-text">Construction Progress Tracker</span>
              </>
            )}
          </h2>

          <div className="gold-line max-w-xs mx-auto mb-5" />

          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto font-body">
            {isAr
              ? 'نؤمن بالشفافية المطلقة؛ نضع أمامك التقدم الإنشائي الحقيقي على أرض الواقع لمشروعاتنا بمدينة السادات خطوة بخطوة.'
              : 'Uncompromising transparency; track the verified on-ground construction progress of our Sadat City developments milestone by milestone.'}
          </p>
        </div>

        {/* Live Progress Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {progressProjectsData.map((project) => {
            const reportMessage = `السلام عليكم، أرغب في الحصول على أحدث تقرير مصور لنسب إنجاز ${project.title} (قطعة ${project.plot})`;
            const whatsappReportUrl = `https://wa.me/${project.whatsappContact}?text=${encodeURIComponent(reportMessage)}`;

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden border border-white/15 hover:border-ish-gold/50 transition-all duration-300 flex flex-col shadow-xl group hover:-translate-y-1.5"
              >
                {/* Image & Progress Overlay */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative h-56 w-full overflow-hidden bg-ish-black block cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-ish-black/30 to-transparent" />

                  {/* Percentage Floating Badge */}
                  <div className="absolute top-4 start-4">
                    <div className="px-3.5 py-1.5 rounded-full bg-ish-black/85 backdrop-blur-md border border-ish-gold/40 text-ish-gold font-mono font-black text-sm flex items-center gap-1.5 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{project.progressPercentage}%</span>
                    </div>
                  </div>

                  {/* Zone & Plot Tag */}
                  <div className="absolute bottom-3 start-4">
                    <span className="text-xs text-ish-white/90 bg-ish-black/80 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10 font-mono">
                      {isAr ? project.zone : project.zoneEn}
                    </span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="text-xl font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors font-headline cursor-pointer">
                        {isAr ? project.title : project.titleEn}
                      </h3>
                    </Link>

                    {/* Overall Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                        <span className="text-ish-gray-light">
                          {isAr ? 'الإنجاز الإجمالي:' : 'Overall Progress:'}
                        </span>
                        <span className="text-ish-gold font-mono">{project.progressPercentage}%</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 transition-all duration-1000"
                          style={{ width: `${project.progressPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Current Phase Alert */}
                    <div className="p-3 rounded-xl bg-ish-black/70 border border-white/10 mb-5 text-xs text-ish-white/90 font-body">
                      <span className="block text-ish-gold font-bold mb-0.5">
                        {isAr ? 'المرحلة التنفيذية الحالية:' : 'Current Execution Stage:'}
                      </span>
                      <span>{isAr ? project.currentPhase : project.currentPhaseEn}</span>
                    </div>

                    {/* Milestones List */}
                    <div className="space-y-2 mb-6">
                      {project.milestones.map((ms, idx) => (
                        <div key={idx} className="text-xs">
                          <div className="flex items-center justify-between text-ish-gray-light mb-1">
                            <span>{isAr ? ms.labelAr : ms.labelEn}</span>
                            <span className="font-mono text-ish-white/80">{ms.progress}%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-ish-gold/80"
                              style={{ width: `${ms.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {/* Primary Button: View Dedicated Project Page */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-ish-gold bg-white/5 border border-ish-gold/30 hover:bg-ish-gold hover:text-ish-black transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{isAr ? 'صفحة المشروع والمخططات الهندسية' : 'Project Blueprint & Specs'}</span>
                      <span>↗</span>
                    </Link>

                    {/* Action Button: WhatsApp Site Report */}
                    <a
                      href={whatsappReportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-ish-white bg-ish-black border border-white/15 hover:border-ish-gold/50 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>📋</span>
                      <span>{isAr ? 'طلب التقرير الهندسي المصور' : 'Request Photo Audit'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-ish-gold/30 bg-gradient-to-r from-ish-gold/10 via-ish-black to-ish-gold/10 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-start">
            <div className="w-12 h-12 rounded-xl bg-ish-gold/20 border border-ish-gold/40 flex items-center justify-center shrink-0">
              <span className="text-2xl">🔒</span>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-ish-white font-headline mb-1">
                {isAr
                  ? 'التزام تعاقدي: ربط دفعات السداد بنسب الإنجاز الفعلي على أرض الواقع'
                  : 'Contractual Commitment: Payments tied strictly to verified construction milestones'}
              </h4>
              <p className="text-xs sm:text-sm text-ish-gray-light font-body">
                {isAr
                  ? 'لا ندع مجالاً للمفاجآت؛ نضمن لك استثماراً آمناً مع إشراف نقابي معتمد وفحوصات معملية دورية لكل صبة خرسانية.'
                  : 'No surprises; guaranteed security with certified syndicate oversight and lab test certificates for every pour.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
