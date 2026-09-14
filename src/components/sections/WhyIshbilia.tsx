'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

interface GuaranteePillar {
  badge: string;
  badgeEn: string;
  title: string;
  titleEn: string;
  stat: string;
  statLabel: string;
  statLabelEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
}

const guaranteePillars: GuaranteePillar[] = [
  {
    badge: 'ترخيص قانوني رسمي',
    badgeEn: 'Official Legal License',
    title: 'الترخيص قبل أول صبة خرسانية',
    titleEn: 'Permits Before the First Pour',
    stat: '+2000',
    statLabel: 'رخصة بناء معتمدة بالسادات',
    statLabelEn: 'Approved licenses in Sadat City',
    description:
      'لا نضع حجراً إلا بعد صدور الترخيص الرسمي واستيفاء كافة الموافقات من جهاز تنمية مدينة السادات وهيئة المجتمعات، لحماية استثمارك بنسبة 100%.',
    descriptionEn:
      'We never break ground before official building permits are fully granted by Sadat City Authority, ensuring 100% legal security.',
    icon: '📜'
  },
  {
    badge: 'معايير الكود الإنشائي',
    badgeEn: 'Structural Code Standards',
    title: 'خرسانة جاهزة B350 معتمدة معملياً',
    titleEn: 'Lab-Certified B350 Ready-Mix Concrete',
    stat: 'B350',
    statLabel: 'إجهاد خرساني فائق المقاومة',
    statLabelEn: 'High-strength structural grade',
    description:
      'اعتماد خرسانات مسلحة من محطات مركزية معتمدة مع أخذ مكعبات اختبار معملية دورية تحت إشراف نقابة المهندسين لمقاومة الأحمال والزلازل.',
    descriptionEn:
      'Ready-mix concrete from certified batching plants with mandatory lab cube compression tests under Egyptian Engineers Syndicate supervision.',
    icon: '🏗️'
  },
  {
    badge: 'جاهزية السكن الفوري',
    badgeEn: 'Immediate Move-In Ready',
    title: 'تسليم العدادات والمرافق مع المفتاح',
    titleEn: 'Official Utilities Delivered with Keys',
    stat: '100%',
    statLabel: 'تشغيل كامل للعدادات والمصاعد',
    statLabelEn: 'Operational meters and elevators',
    description:
      'استلم وحدتك بكامل عدادات الكهرباء والمياه الرسمية وبنية الصرف والاتصالات مشغلة فوراً، دون أي انتظار أو رسوم مستترة بعد التعاقد.',
    descriptionEn:
      'Receive your residence with all official electricity and water meters active, elevators operational, and zero hidden handover fees.',
    icon: '⚡'
  },
  {
    badge: 'احترام التعاقد',
    badgeEn: 'Contractual Punctuality',
    title: 'غرامات تأخير موثقة لحماية العميل',
    titleEn: 'Contractually Enforced Penalty Clauses',
    stat: '0%',
    statLabel: 'تهاون في الجداول الزمنية',
    statLabelEn: 'Tolerance for project delays',
    description:
      'نلتزم بمواعيد تسليم دقيقة ونثبت بنود غرامات تأخير شهرية واجبة النفاذ في العقود الرسمية لضمان حقك وراحة بالك التامة.',
    descriptionEn:
      'We strictly honor timeline commitments with enforceable monthly penalty clauses documented directly in your sales contract.',
    icon: '⏱️'
  }
];

export default function WhyIshbilia() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();

  return (
    <section className="section-rhythm section-secondary relative w-full overflow-hidden" id="why-ishbilia-section">
      {/* Subtle Ambient Gold Glow */}
      <div className="absolute top-1/2 start-1/4 -translate-y-1/2 w-96 h-96 bg-ish-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
            <span>{isAr ? 'ميثاق الثقة والأمان الاستثماري' : 'Trust Charter & Engineering Security'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4 font-headline">
            {isAr ? (
              <>
                لماذا يختار صفوة العملاء والمستثمرين <span className="gold-gradient-text">إشبيلية</span>؟
              </>
            ) : (
              <>
                Why Discerning Investors <span className="gold-gradient-text">Trust Ishbilia</span>
              </>
            )}
          </h2>

          <div className="gold-line max-w-xs mx-auto mb-5" />

          <p className="text-ish-gray text-base sm:text-lg max-w-2xl mx-auto font-body">
            {isAr
              ? 'معايير هندسية صارمة وضمانات قانونية حاسمة تجعل من كل وحدة صرحاً عقارياً آمناً ومربحاً لأجيال.'
              : 'Rigorous engineering benchmarks and legally binding guarantees that turn every residence into an enduring, generational asset.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
          {guaranteePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 group hover:-translate-y-2 hover:border-ish-gold/60 transition-all duration-300 border border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Background Accent Pill */}
              <div className="absolute top-0 end-0 p-6 opacity-10 text-4xl select-none group-hover:scale-125 transition-transform duration-300">
                {pillar.icon}
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold border border-ish-gold/30">
                    <span>{pillar.icon}</span>
                    <span>{isAr ? pillar.badge : pillar.badgeEn}</span>
                  </span>

                  <div className="text-end">
                    <span className="text-2xl sm:text-3xl font-black gold-gradient-text font-mono block">
                      {pillar.stat}
                    </span>
                    <span className="text-[10px] text-ish-gray-light font-medium block">
                      {isAr ? pillar.statLabel : pillar.statLabelEn}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-ish-white mb-3 group-hover:text-ish-gold transition-colors font-headline">
                  {isAr ? pillar.title : pillar.titleEn}
                </h3>

                <p className="text-ish-gray-light text-sm sm:text-base leading-relaxed font-body">
                  {isAr ? pillar.description : pillar.descriptionEn}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-xs text-ish-gold font-bold">
                <span>✓</span>
                <span>{isAr ? 'ضمان رسمي موثق في بنود التعاقد' : 'Formally certified in sales agreement'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to full Why-Ishbilia Page */}
        <div className="text-center">
          <Link
            href="/why-ishbilia"
            className="btn-primary rounded-full inline-flex items-center gap-2 text-sm sm:text-base font-bold px-8 py-3.5 shadow-xl shadow-ish-gold/20 hover:scale-105 transition-all"
          >
            <span>{isAr ? 'اطلع على ميثاق الضمانات الخمس ومختبر المواد بالكامل' : 'Explore the 5 Guarantees Charter & Engineering Lab'}</span>
            <span className="text-lg">←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
