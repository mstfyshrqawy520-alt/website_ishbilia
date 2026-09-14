'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function PortfolioPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const galleryItems = [
    {
      title: isAr ? 'الواجهة المعمارية ثلاثية الأبعاد - مشروع 1518' : '3D Architectural Facade - Project 1518',
      category: isAr ? 'تصميم واجهات نيوكلاسيك' : 'Neoclassical Facade Design',
      image: '/images/projects/project-1518-facade.png',
      desc: isAr ? 'تصميم أندلسي نيوكلاسيكي يجمع بين فخامة الأقواس وراحة التراسات مع واجهة بحري ناصية.' : 'Andalusian neoclassical design with luxury arches and balconies on a prime corner.'
    },
    {
      title: isAr ? 'المخطط التنفيذي - الدور المتكرر (3 وحدات فاخرة)' : 'Floor Plan - Typical Floor (3 Units)',
      category: isAr ? 'مخططات هندسية معمارية' : 'Architectural Floor Plans',
      image: '/images/projects/project-1518-typical-floor.png',
      desc: isAr ? 'توزيع هندسي دقيق يستغل كل متر، مع تهوية بحرية طبيعية وخصوصية تامة للغرف.' : 'Optimized layout maximizing space, natural ventilation, and complete bedroom privacy.'
    },
    {
      title: isAr ? 'المخطط الهندسي - الدور الأرضي والحدائق الخاصة' : 'Floor Plan - Ground Floor & Private Gardens',
      category: isAr ? 'مخططات تقسيم واستغلال المساحات' : 'Ground Floor Layout',
      image: '/images/projects/project-1518-ground-floor.png',
      desc: isAr ? 'مداخل خاصة للوحدات الأرضية وحدائق مستقلة تصل إلى 111 م² تمنح شعور الفيلا المستقلة.' : 'Private entrances and gardens up to 111m² offering an independent villa lifestyle.'
    },
    {
      title: isAr ? 'الرفع المساحي ودراسة الموقع المعتمدة - المنطقة 29' : 'Survey & Approved Location Study - Zone 29',
      category: isAr ? 'تخطيط ودراسات جدوى جغرافية' : 'Location & Feasibility Studies',
      image: '/images/projects/project-1518-location.png',
      desc: isAr ? 'دراسة دقيقة للموقع بالنسبة لجامعة السادات والمحاور المركزية ومجمعات الخدمات.' : 'Detailed site analysis relative to Sadat University and major axes.'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 section-navy relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ish-gold text-sm tracking-[0.15em] uppercase mb-4 font-semibold">
            {isAr ? 'معرض الأعمال والمخططات الهندسية' : 'Architectural Portfolio & Blueprints'}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ish-white mb-6">
            {isAr ? 'سابقة أعمال ووثائق مشروعات إشبيلية' : 'Ishbilia Portfolio & Project Records'}
          </h1>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-ish-gray text-lg leading-relaxed max-w-2xl mx-auto">
            {isAr
              ? 'نماذج معتمدة من تصميماتنا المعمارية، والمخططات التنفيذية للأدوار والوحدات، ودراسات المواقع الجغرافية في مدينة السادات.'
              : 'Approved architectural designs, execution blueprints, and location studies across Sadat City.'}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-lg overflow-hidden border border-white/10 hover:border-ish-gold/40 transition-all duration-500 group"
              >
                <div className="relative h-80 sm:h-96 w-full bg-ish-black overflow-hidden flex items-center justify-center p-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 start-4">
                    <span className="text-xs px-3 py-1 rounded bg-ish-black/80 backdrop-blur text-ish-gold font-bold border border-ish-gold/30">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-ish-dark">
                  <h3 className="text-ish-white font-bold text-lg sm:text-xl mb-2 group-hover:text-ish-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ish-gray leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-xs text-ish-gray">
                      {isAr ? 'شركة إشبيلية للتطوير العقاري' : 'Ishbilia Real Estate Development'}
                    </span>
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-ish-gold hover:underline flex items-center gap-1"
                    >
                      {isAr ? 'معاينة بالحجم الكامل' : 'Full Size Preview'}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-8 rounded-xl bg-gradient-to-r from-ish-navy/40 via-ish-dark to-ish-navy/40 border border-ish-gold/30">
            <h3 className="text-2xl font-bold text-ish-white mb-3">
              {isAr ? 'هل تريد استلام الملف الكامل والمخططات بصيغة PDF؟' : 'Want the Complete Project Brochure in PDF?'}
            </h3>
            <p className="text-ish-gray text-sm max-w-xl mx-auto mb-6">
              {isAr
                ? 'تواصل مع فريق مبيعات إشبيلية مباشرة لاستلام كتالوج المشروعات والمخططات التنفيذية والأسعار الحالية.'
                : 'Contact Ishbilia sales team directly to receive the full project catalog and blueprints.'}
            </p>
            <a
              href="https://wa.me/201010722349?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%85%D9%84%D9%81%20%D9%88%D9%85%D8%AE%D8%B7%D8%B7%D8%A7%D8%AA%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D8%A7%D8%AA%20%D8%A5%D8%B4%D8%A8%D9%8A%D9%84%D9%8A%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-sm inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
              </svg>
              {isAr ? 'طلب كتالوج المشروعات عبر واتساب (01010722349)' : 'Request Catalog via WhatsApp'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
