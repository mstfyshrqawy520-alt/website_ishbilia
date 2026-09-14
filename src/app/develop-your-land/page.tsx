'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';

// Available architectural plans for demonstration
const blueprintTabs = [
  {
    id: 'ground',
    title: 'مخطط الدور الأرضي والحدائق الخاصة',
    titleEn: 'Ground Floor & Private Gardens Blueprint',
    subtitle: 'تصميم ذكي يوفر مداخل مستقلة وحدائق حتى 110م² للشقق الأرضية لتعظيم العائد البيعي',
    image: '/images/projects/project-1518-ground-floor.png',
    features: [
      'مدخل خاص منفصل لكل شقة أرضية',
      'حدائق مسوّرة مستقلة تمنح خصوصية الفيلات',
      'عزل رطوبة ومياه بدرجة فندقية لحماية الأساسات',
      'تقسيم هندسي يعزل منطقة الضيوف عن غرف النوم'
    ]
  },
  {
    id: 'typical',
    title: 'مخطط الأدوار المتكررة الفاخرة',
    titleEn: 'Typical Luxury Floors Blueprint',
    subtitle: 'استغلال 100% للمساحة المرخصة دون أي هدر في الممرات مع توجيه بحري لجميع الواجهات',
    image: '/images/projects/project-1518-typical-floor.png',
    features: [
      'تراس بانورامي لكل وحدة بواجهة بحرية صريحة',
      'ريسبشن مفتوح 3 قطع بتهوية طبيعية ممتازة',
      'جناح ماستر متكامل بحمام وغرفة ملابس خاصة',
      'مطبخ واسع وموزع بشكل يخدم الريسبشن وغرف المعيشة'
    ]
  },
  {
    id: 'location',
    title: 'الموقع العام والاشتراطات التخطيطية',
    titleEn: 'Site Masterplan & Regulations',
    subtitle: 'تطبيق أقصى اشتراطات البناء المعتمدة من جهاز مدينة السادات لرفع المساحة البيعية',
    image: '/images/projects/project-1518-location.png',
    features: [
      'التزام كامل بارتدادات الشوارع ونسب البناء القصوى',
      'مداخل فندقية واسعة ومواقف سيارات منظمة',
      'استغلال استثنائي للناصية المزدوجة والمحاور المحيطة',
      'دراسة بيئية مدروسة لحركة الشمس والرياح الشمالية'
    ]
  }
];

// Partnership models
const partnershipModels = [
  {
    id: 'jv',
    title: 'نظام المشاركة بالأرض (Joint Venture)',
    badge: 'الأكثر طلباً وربحية',
    highlight: 'أعلى عائد استثماري دون دفع سيولة نقدية',
    desc: 'المالك يقدم قطعة الأرض، وإشبيلية تتكفل بالكامل بجميع مراحل التصميم المعماري، التراخيص الحكومية، أعمال البناء والتشطيبات، والتسويق الاحترافي، مع اقتسام الوحدات أو الأرباح بنسبة عادلة وموثقة.',
    benefits: [
      'لا يتكلف صاحب الأرض أي مصاريف بنائية أو تمويلية',
      'عقد مشاركة موثق ومحمٍ بنخبة مستشارين قانونيين متخصصين',
      'تسليم وحدات مشطبة أو نصف مشطبة بأعلى جودة لمالك الأرض',
      'أرباح متوقعة تفوق بيع الأرض كاش بنسبة تصل إلى 40 - 60%'
    ],
    suitableFor: 'ملاك الأراضي الراغبين في مضاعفة ثروتهم دون تحمل مخاطر التنفيذ والعمالة.'
  },
  {
    id: 'epc',
    title: 'إدارة وتطوير الإنشاءات (Turnkey / EPC)',
    badge: 'إشراف هندسي معتمد',
    highlight: 'بناء متكامل لحساب المالك بأقل تكلفة',
    desc: 'يتولى المالك تمويل مشروعه الخاص، بينما تتولى إشبيلية كشركة تطوير عقاري مسجلة كافة الإجراءات التنفيذية: استخراج التراخيص، إعداد المخططات، التعاقدات وتوريد الخامات بأعلى خصومات الشركات، والإشراف الهندسي الكامل حتى تسليم المفتاح.',
    benefits: [
      'توفير حتى 25% من تكلفة الإنشاء بفضل أسعار توريدات إشبيلية المركزية',
      'جدول زمني صارم ملزم بغرامات تأخير لصالح المالك',
      'تقارير أسبوعية وشهرية مدعمة باختبارات جودة الخرسانة المعملية',
      'ضمان شامل على الهيكل الخرساني والتشطيبات والمصاعد'
    ],
    suitableFor: 'من يمتلك السيولة ويريد بناء عقاره الخاص بجودة شركات التطوير الكبرى دون الوقوع في مشاكل مقاولي الباطن.'
  },
  {
    id: 'cash',
    title: 'الشراء المباشر للأرض كاش (Cash Acquisition)',
    badge: 'تسييل نقدي فوري',
    highlight: 'أعلى تقييم سوقي عادل في مدينة السادات',
    desc: 'إذا كنت تفضل بيع الأرض والحصول على سيولة مالية فورية، تقدم لك إشبيلية تقييماً عقارياً هندسياً مجانياً وشراءً مباشراً بدون وسطاء مع إنهاء إجراءات التنازل القانوني في جهاز المدينة بأسرع وقت.',
    benefits: [
      'دفع كاش وفوري بدون مماطلة أو دفعات طويلة الأجل',
      'تسعير واقعي مبني على دراسات سعر المتر الحالية والمستقبلية',
      'إنهاء سليم لمعاملات التنازل والضرائب العقارية بجهاز السادات',
      'إتمام الصفقة بالكامل في غضون أيام معدودة'
    ],
    suitableFor: 'من يرغب في بيع أرضه فوراً وتوجيه السيولة لاستثمارات أخرى أو تسوية التزامات.'
  },
  {
    id: 'hybrid',
    title: 'النموذج الهجين (سيولة نقدية + وحدات)',
    badge: 'مرونة قصوى',
    highlight: 'أمان نقدي فوري مع حصة أرباح مستقبلية',
    desc: 'مزيج يجمع بين الأمان والربح: يستلم صاحب الأرض جزءاً من قيمة أرضه نقدياً فور التعاقد لتأمين متطلباته، بينما يدخل الجزء المتبقي كحصة مشاركة في المشروع ليحصل على وحدات سكنية أو تجارية تحقق له عائداً تراكمياً.',
    benefits: [
      'تأمين سيولة نقدية فورية عند كتابة العقد',
      'الاستفادة من القفزة السعرية للمشروع بعد بنائه وتسليمه',
      'تنوع في المحفظة المالية بين الكاش والأصول العقارية المدرّة للدخل',
      'تحديد الوحدات الخاصة بالمالك في المخططات مسبقاً'
    ],
    suitableFor: 'ملاك الأراضي الذين يحتاجون مبلغاً نقدياً حالياً ولا يرغبون في تضييع فرصة المكاسب المستقبلية للتطوير.'
  }
];

// Legal guarantees
const legalGuarantees = [
  {
    title: 'الملكية تظل باسمك',
    desc: 'لا يتم نقل ملكية الأرض للشركة؛ العقد ينص بوضوح على أن الأرض ملكك، وإشبيلية مطور ومقاول منفذ بحق الإدارة والبيع المشترك فقط.',
    icon: 'shield'
  },
  {
    title: 'عقد مشاركة موثق ومحكم',
    desc: 'صيغة قانونية رصينة ومراجعة بنخبة من كبار المحامين المتخصصين في قوانين هيئة المجتمعات العمرانية وجهاز مدينة السادات.',
    icon: 'doc'
  },
  {
    title: 'جدول زمني ملزم وغرامات تأخير',
    desc: 'نلتزم بتاريخ تسليم محدد بدقة بالأيام، مع شرط جزائي وغرامة تأخير شهرية لصالح صاحب الأرض في حال أي تأخير خارج القوة القاهرة.',
    icon: 'clock'
  },
  {
    title: 'تراخيص معتمدة ومطابقة للكود',
    desc: 'خبرتنا في إنهاء أكثر من 2000 رخصة تضمن صدور تراخيص البناء والمطابقة بأسماء الملاك ووفق المخططات المتفق عليها دون تعطيل.',
    icon: 'license'
  },
  {
    title: 'إشراف معملي ومطابقة الخرسانات',
    desc: 'سحب مكعبات خرسانية واختبارها في معامل هندسية معتمدة لكل سقف وعمود، وتزويد المالك بنسخ موثقة من نتائج الاختبارات.',
    icon: 'check'
  },
  {
    title: 'حساب بنكي مشترك وشفافية كاملة',
    desc: 'إيداع أموال الحجوزات والمبيعات ومتابعة التدفقات المالية للمشروع بشفافية تامة وفق نسب الشراكة المتفق عليها.',
    icon: 'bank'
  }
];

export default function DevelopYourLandPage() {
  const { t, lang } = useLanguage();
  const isAr = lang === 'ar';

  // State for Blueprint Tabs
  const [activeTab, setActiveTab] = useState('ground');

  // State for Interactive Land Calculator
  const [calcArea, setCalcArea] = useState(500);
  const [calcZone, setCalcZone] = useState('zone29');
  const [calcType, setCalcType] = useState('residential');

  // Calculator Logic
  const getZoneMultiplier = () => {
    switch (calcZone) {
      case 'zone8': return 1.35; // Most commercial / high-density
      case 'zone29': return 1.2; // Premium residential near university
      case 'golden': return 1.25; // Main axis
      default: return 1.1;
    }
  };

  const getBaseMeterPrice = () => {
    if (calcType === 'commercial') return 28000;
    return 13500; // residential
  };

  const builtRatio = calcType === 'commercial' ? 0.6 : 0.5; // percentage of land area for ground
  const groundFloorArea = Math.round(calcArea * builtRatio);
  const typicalFloorArea = Math.round(groundFloorArea * 1.1); // cantilevers
  const totalFloors = calcType === 'commercial' ? 3 : 4; // ground + 3 floors
  const totalBuiltArea = groundFloorArea + (typicalFloorArea * (totalFloors - 1));
  const estimatedUnits = Math.round(totalBuiltArea / (calcType === 'commercial' ? 70 : 160));
  const estimatedTotalValue = totalBuiltArea * getBaseMeterPrice() * getZoneMultiplier();
  const ownerSharePercentage = 45; // average 45% of total project value or built units
  const estimatedOwnerValue = Math.round(estimatedTotalValue * (ownerSharePercentage / 100));

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    landLocation: '',
    landArea: '',
    ownershipType: 'ملكية تامة مسجلة',
    partnershipModel: 'مشاركة بالأرض (JV)',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const lastSubmit = useRef(0);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'الرجاء إدخال الاسم الكريم';
    if (!formData.phone.trim()) newErrors.phone = 'الرجاء إدخال رقم الهاتف للتواصل';
    else if (!/^[\+]?[0-9\s\-]{8,15}$/.test(formData.phone.trim())) newErrors.phone = 'رقم الهاتف غير صحيح';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (Date.now() - lastSubmit.current < 5000) return;

    if (!validate()) return;

    setStatus('sending');
    lastSubmit.current = Date.now();
    await new Promise(resolve => setTimeout(resolve, 1400));
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const currentTab = blueprintTabs.find(b => b.id === activeTab) || blueprintTabs[0];

  return (
    <div className="w-full bg-[var(--bg-primary)] text-ish-white overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[var(--bg-primary)]/95 to-[var(--bg-primary)] pointer-events-none" />
        
        {/* Subtle geometric grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px)`
          }}
        />

        <div className="section-container relative z-10 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ish-gold/10 border border-ish-gold/35 text-ish-gold text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>بوابة الشراكة وتطوير الأراضي — إشبيلية للتطوير العقاري</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ish-white mb-6 leading-tight max-w-4xl mx-auto">
            حوّل أرضك في مدينة السادات إلى <span className="gold-gradient-text">صرح استثماري وأرباح قياسية</span>
          </h1>

          <p className="text-ish-gray-light text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            نقدم لملاك الأراضي شراكة استراتيجية متكاملة: نتكفل بالتراخيص، التصميم المعماري النيوكلاسيكي الفاخر، وأعمال البناء والتسويق بنظام المشاركة مع ضمان حفظ ملكيتك 100% وتحقيق أعلى عائد على المتر.
          </p>

          {/* Quick Stat Pill Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="glass-card p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">+2000</span>
              <span className="text-xs text-ish-gray-light font-medium mt-1 block">رخصة صادرة ومعتمدة</span>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">20 عاماً</span>
              <span className="text-xs text-ish-gray-light font-medium mt-1 block">خبرة هندسية بمدينة السادات</span>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">0%</span>
              <span className="text-xs text-ish-gray-light font-medium mt-1 block">نزاعات وقضايا قانونية</span>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">+45%</span>
              <span className="text-xs text-ish-gray-light font-medium mt-1 block">متوسط زيادة عائد المشاركة</span>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#land-form"
              className="btn-gold rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-ish-gold/25 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>طلب دراسة جدوى ومعاينة مجانية لأرضك</span>
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#calculator"
              className="btn-outline rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-lg inline-block"
            >
              احسب عائد أرضك التقديري
            </a>
          </div>
        </div>
      </section>

      {/* 2. Four Partnership Models */}
      <section className="py-20 w-full bg-[var(--bg-secondary)] border-b border-white/5" id="models">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>خيارات مرنة تناسب كل صاحب أرض</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              نماذج الشراكة والاستثمار في الأراضي
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg leading-relaxed">
              سواء كنت تبحث عن أعلى عائد مستقبلي دون أن تدفع جنيهاً، أو ترغب في سيولة نقدية فورية، نوفر لك 4 صيغ تعاقدية قانونية تضمن حقوقك بالكامل.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {partnershipModels.map((model) => (
              <div
                key={model.id}
                className="glass-card rounded-2xl p-7 sm:p-9 border border-white/10 hover:border-ish-gold/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold border border-ish-gold/30">
                      {model.badge}
                    </span>
                    <span className="text-xs text-ish-gray-light font-medium">
                      {model.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-ish-white mb-4 group-hover:text-ish-gold transition-colors font-headline">
                    {model.title}
                  </h3>

                  <p className="text-sm text-ish-gray-light leading-relaxed mb-6 font-body">
                    {model.desc}
                  </p>

                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                    <h4 className="text-xs uppercase tracking-wider text-ish-gold font-bold mb-2">أهم المزايا:</h4>
                    {model.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ish-white/90">
                        <svg className="w-4 h-4 text-ish-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 bg-white/[0.02] -mx-7 -mb-7 sm:-mx-9 sm:-mb-9 p-5 rounded-b-2xl">
                  <p className="text-xs text-ish-gray">
                    <strong className="text-ish-gold">النموذج مناسب لـ: </strong>
                    {model.suitableFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Architectural Blueprints & Floor Plans Showcase */}
      <section className="py-20 w-full bg-[var(--bg-primary)] border-b border-white/5" id="blueprints">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>مخططات حقيقية من مشروعات إشبيلية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              كيف يرفع التصميم المعماري الذكي قيمة أرضك؟
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg">
              قطعة الأرض الواحدة يمكن أن تباع بـ 15 مليوناً أو بـ 25 مليوناً بناءً على عبقرية المخططات الهندسية. شاهِد كيف نوزع المساحات ونبتكر مزايا حصرية ترفع سعر المتر.
            </p>
          </div>

          {/* Blueprint Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {blueprintTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-ish-gold text-ish-black border-ish-gold shadow-lg shadow-ish-gold/25 scale-105'
                    : 'bg-white/5 text-ish-gray-light border-white/10 hover:border-ish-gold/40 hover:text-ish-white'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active Blueprint Display Card */}
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Blueprint Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-[420px] rounded-xl overflow-hidden bg-black/60 border border-white/15 group">
              <Image
                src={currentTab.image}
                alt={currentTab.title}
                fill
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute top-3 end-3 px-3 py-1 rounded bg-black/80 backdrop-blur text-[11px] text-ish-gold border border-ish-gold/30">
                مخطط هندسي تنفيذي معتمد
              </div>
            </div>

            {/* Description & Engineering Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-ish-gold font-bold block mb-2">
                  تحليل المخطط الهندسي
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-ish-white mb-3">
                  {currentTab.title}
                </h3>
                <p className="text-sm text-ish-gray-light leading-relaxed">
                  {currentTab.subtitle}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-xs text-ish-gold font-bold uppercase tracking-wider">
                  مزايا استثمارية تضاعف الإقبال وسرعة البيع:
                </h4>
                {currentTab.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ish-white">
                    <div className="w-5 h-5 rounded-full bg-ish-gold/15 border border-ish-gold/30 flex items-center justify-center text-ish-gold shrink-0 text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="#land-form"
                  className="btn-outline rounded-full text-xs sm:text-sm font-bold px-6 py-2.5 inline-flex items-center gap-2"
                >
                  <span>اطلب عمل مخطط مبدئي لأرضك مجاناً</span>
                  <svg className="w-3.5 h-3.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Land Feasibility Calculator */}
      <section className="py-20 w-full bg-[var(--bg-secondary)] border-b border-white/5" id="calculator">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>أداة تقديرية فورية</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              حاسبة القيمة والعائد التقديري لأرضك
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg">
              اختر مساحة وموقع أرضك في مدينة السادات لتتعرف على التقديرات الإنشائية الأولية وحصتك المتوقعة في المشروع.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-ish-white border-b border-white/10 pb-4">
                معطيات قطعة الأرض
              </h3>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-ish-white">مساحة الأرض الإجمالية:</label>
                  <span className="text-lg font-black text-ish-gold font-mono" dir="ltr">{calcArea} م²</span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={2000}
                  step={25}
                  value={calcArea}
                  onChange={(e) => setCalcArea(Number(e.target.value))}
                  className="w-full accent-ish-gold cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-ish-gray mt-1">
                  <span>300 م²</span>
                  <span>1000 م²</span>
                  <span>2000 م²</span>
                </div>
              </div>

              {/* Location Select */}
              <div>
                <label className="block text-sm font-semibold text-ish-white mb-2">المنطقة الجغرافية بالسادات:</label>
                <select
                  value={calcZone}
                  onChange={(e) => setCalcZone(e.target.value)}
                  className="form-input rounded-xl text-sm"
                >
                  <option value="zone29">المنطقة 29 (بجوار جامعة السادات - سكني مميز)</option>
                  <option value="zone8">المنطقة الثامنة (جنة مول - كثافة وتجاري عالي)</option>
                  <option value="golden">المنطقة الذهبية (المحور المركزي والمولات)</option>
                  <option value="other">مناطق سكنية وامتدادات أخرى</option>
                </select>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold text-ish-white mb-2">النشاط المستهدف:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCalcType('residential')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      calcType === 'residential'
                        ? 'bg-ish-gold text-ish-black border-ish-gold'
                        : 'bg-white/5 border-white/10 text-ish-gray-light hover:text-white'
                    }`}
                  >
                    سكني فاخر (عمارة / ميني كمبوند)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcType('commercial')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      calcType === 'commercial'
                        ? 'bg-ish-gold text-ish-black border-ish-gold'
                        : 'bg-white/5 border-white/10 text-ish-gray-light hover:text-white'
                    }`}
                  >
                    تجاري إداري (بلازا / عيادات ومحلات)
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-ish-gold/10 border border-ish-gold/20 text-xs text-ish-gray-light leading-relaxed">
                ℹ️ <strong>ملاحظة فنية:</strong> الحسابات مبنية على متوسط اشتراطات جهاز مدينة السادات لكود البناء الحديث وتحديثات أسعار السوق لعام 2026.
              </div>
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-ish-gold/40 shadow-2xl shadow-black/60 relative overflow-hidden">
              <div className="absolute top-0 end-0 bg-gradient-to-l from-ish-gold/20 to-transparent w-40 h-40 pointer-events-none blur-2xl" />

              <h3 className="text-xl font-bold text-ish-white border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
                <span>النتائج التقديرية لتطوير الأرض</span>
                <span className="text-xs px-2.5 py-1 rounded bg-ish-gold/20 text-ish-gold font-bold">تقدير مبدئي</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs sm:text-sm text-ish-gray-light">المساحة البنائية الإجمالية المرخصة:</span>
                  <span className="text-base sm:text-lg font-bold text-ish-white font-mono" dir="ltr">
                    ~ {totalBuiltArea.toLocaleString()} م²
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs sm:text-sm text-ish-gray-light">عدد الوحدات المتوقعة:</span>
                  <span className="text-base sm:text-lg font-bold text-ish-white font-mono" dir="ltr">
                    ~ {estimatedUnits} {calcType === 'commercial' ? 'محل / مكتب' : 'شقة فاخرة'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-xs sm:text-sm text-ish-gray-light">القيمة السوقية المتوقعة للمشروع:</span>
                  <span className="text-base sm:text-lg font-bold text-ish-gold font-mono" dir="ltr">
                    ~ {(estimatedTotalValue / 1000000).toFixed(1)} مليون ج.م
                  </span>
                </div>

                {/* Highlight: Owner Share */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-ish-gold/20 to-black border border-ish-gold/50 text-center mt-6">
                  <span className="block text-xs uppercase tracking-widest text-ish-gold font-bold mb-1">
                    عائد وقيمة حصة صاحب الأرض التقديرية بنظام المشاركة:
                  </span>
                  <span className="block text-2xl sm:text-4xl font-black text-white font-mono my-2" dir="ltr">
                    ~ {(estimatedOwnerValue / 1000000).toFixed(1)} مليون ج.م
                  </span>
                  <span className="block text-[11px] text-ish-gray-light">
                    (أو ما يعادلها من وحدات سكنية / تجارية مشطبة بالكامل بريع استثماري دوري)
                  </span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#land-form"
                  className="btn-gold rounded-full w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>طلب دراسة جدوى دقيقة ومعاينة الموقع على الطبيعة</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The 6 Legal & Engineering Guarantees */}
      <section className="py-20 w-full bg-[var(--bg-primary)] border-b border-white/5" id="guarantees">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>الثقة قبل أي تعاقد</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              الضمانات القانونية والهندسية الستة
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg">
              في إشبيلية، سمعتنا وشفافيتنا على مدار 20 عاماً هي رأسمالنا الأكبر. نضع بين يديك منظومة تعاقدية تحمي كل متر من أرضك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {legalGuarantees.map((g, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-7 border border-white/10 hover:border-ish-gold/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-ish-gold/15 border border-ish-gold/30 flex items-center justify-center text-ish-gold font-bold text-lg mb-5">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-ish-white mb-3 font-headline">
                  {g.title}
                </h3>
                <p className="text-sm text-ish-gray-light leading-relaxed font-body">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case Studies from Real Land Plots */}
      <section className="py-20 w-full bg-[var(--bg-secondary)] border-b border-white/5" id="case-studies">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>أراضٍ تحولت إلى واقع</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              قصص نجاح واقعية مع ملاك الأراضي
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg">
              نماذج لأراضٍ استلمتها إشبيلية كأرض فضاء، وتم استخراج تراخيصها وبناؤها وتسليم حصة أصحابها بالكامل.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            {/* Case 1: 1518 */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/projects/project-1518-clean-facade.jpg"
                    alt="مشروع إشبيلية 1518"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 start-3 px-3 py-1 rounded bg-black/80 text-xs text-ish-gold border border-ish-gold/30">
                    المنطقة 29 • قطعة 1518
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ish-white mb-2">مشروع إشبيلية 1518</h3>
                  <p className="text-xs text-ish-gray-light mb-4 leading-relaxed">
                    أرض ناصية بحري تم تحويلها إلى عمارة نيوكلاسيكية مع تخصيص شقق أرضية بحدائق مستقلة 110م² ما حقق سرعة بيع قياسية للمالك.
                  </p>
                  <div className="space-y-1.5 text-xs text-ish-white/90 border-t border-white/10 pt-3">
                    <div className="flex justify-between">
                      <span className="text-ish-gray">طبيعة الشراكة:</span>
                      <span className="font-bold text-ish-gold">مشاركة بنسبة من الوحدات</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ish-gray">مدة التنفيذ:</span>
                      <span className="font-bold">14 شهراً</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2: 1490 */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/projects/project-1490-clean-facade.jpg"
                    alt="مشروع إشبيلية 1490"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 start-3 px-3 py-1 rounded bg-black/80 text-xs text-ish-gold border border-ish-gold/30">
                    المنطقة الذهبية • قطعة 1490
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ish-white mb-2">مشروع إشبيلية 1490</h3>
                  <p className="text-xs text-ish-gray-light mb-4 leading-relaxed">
                    استغلال موقع الأرض الحيوي على بعد 150 متراً من طريق الأكسدة لإنشاء وحدات إدارية وسكنية راقية استهدفت أعضاء هيئة التدريس والأطباء.
                  </p>
                  <div className="space-y-1.5 text-xs text-ish-white/90 border-t border-white/10 pt-3">
                    <div className="flex justify-between">
                      <span className="text-ish-gray">طبيعة الشراكة:</span>
                      <span className="font-bold text-ish-gold">مقاولة متكاملة تسليم مفتاح</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ish-gray">العائد المحقق:</span>
                      <span className="font-bold">+55% مقارنة بسعر السوق</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3: 810 Plaza */}
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between">
              <div>
                <div className="relative h-56 w-full">
                  <Image
                    src="/images/projects/project-810-clean-facade.jpg"
                    alt="إشبيلية بلازا 810"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 start-3 px-3 py-1 rounded bg-black/80 text-xs text-ish-gold border border-ish-gold/30">
                    المنطقة المركزية • قطعة 810
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ish-white mb-2">إشبيلية بلازا (تجاري وإداري)</h3>
                  <p className="text-xs text-ish-gray-light mb-4 leading-relaxed">
                    تطوير مجمع تجاري وإداري متكامل صُمم بأحدث معايير الأنشطة الطبية والشركات مع توفير واجهات زجاجية مزدوجة ومواقف سيارات.
                  </p>
                  <div className="space-y-1.5 text-xs text-ish-white/90 border-t border-white/10 pt-3">
                    <div className="flex justify-between">
                      <span className="text-ish-gray">طبيعة الشراكة:</span>
                      <span className="font-bold text-ish-gold">مشاركة استثمارية وتأجير</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ish-gray">عائد إيجاري دوري:</span>
                      <span className="font-bold">مستمر سنوياً</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Steps from Handshake to Key */}
      <section className="py-20 w-full bg-[var(--bg-primary)] border-b border-white/5">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ish-white mb-4">
              كيف تبدأ الشراكة؟ 5 خطوات مدروسة ومريحة
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
            {[
              { step: '01', title: 'إرسال بيانات الأرض', desc: 'تسجيل مساحة ورقم القطعة والموقع في النموذج أدناه أو عبر واتساب.' },
              { step: '02', title: 'المعاينة ودراسة الجدوى', desc: 'فريقنا الهندسي يعاين الموقع على الطبيعة ويعد دراسة جدوى مبدئية مجاناً.' },
              { step: '03', title: 'جلسة التنسيق والعرض', desc: 'جلسة بمقر إشبيلية لمناقشة المخططات المعمارية ونسب المشاركة المناسبة لك.' },
              { step: '04', title: 'توقيع العقد والتراخيص', desc: 'صياغة العقد القانوني واستخراج تراخيص البناء الرسمية من جهاز السادات.' },
              { step: '05', title: 'البناء واستلام العوائد', desc: 'انطلاق أعمال الحفر والخرسانات ومتابعة دورية حتى التسليم والأرباح.' },
            ].map((s, i) => (
              <div key={i} className="glass-card p-5 rounded-xl border border-white/10 text-center flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-ish-gold font-mono block mb-2">{s.step}</span>
                  <h4 className="text-sm font-bold text-ish-white mb-2">{s.title}</h4>
                </div>
                <p className="text-xs text-ish-gray-light leading-relaxed mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. The Lead Application Form */}
      <section className="py-20 w-full bg-[var(--bg-secondary)]" id="land-form">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>خطوتك الأولى تبدأ هنا</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ish-white mb-4">
              اطلب دراسة جدوى ومعاينة هندسية مجانية لأرضك
            </h2>
            <p className="text-ish-gray-light text-sm sm:text-base max-w-xl mx-auto">
              سجل تفاصيل أرضك، وسيقوم المستشار الهندسي لإشبيلية بالتواصل معك خلال 24 ساعة لترتيب المعاينة ودراسة الفرصة الاستثمارية.
            </p>
          </div>

          {status === 'success' ? (
            <div className="glass-card rounded-2xl p-10 text-center border border-ish-gold/40">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-ish-gold/15 border border-ish-gold/40 flex items-center justify-center text-ish-gold text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-ish-white mb-3">تم استلام بيانات أرضك بنجاح!</h3>
              <p className="text-ish-gray-light text-base max-w-md mx-auto mb-6">
                شكراً لثقتك في إشبيلية. بدأ فريقنا الهندسي بالفعل بمراجعة المخططات التخطيطية للمنطقة وسنتواصل معك هاتفياً لمناقشة التفاصيل.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-gold rounded-full px-8 py-2.5 text-xs sm:text-sm font-bold"
              >
                تقديم أرض أخرى
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 sm:p-12 border border-white/10 space-y-6">
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ish-white text-xs sm:text-sm font-semibold mb-2">اسم مالك الأرض الكريم *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input rounded-xl text-sm ${errors.name ? 'error' : ''}`}
                    placeholder="مثال: م. أحمد عبد الرحمن"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-ish-white text-xs sm:text-sm font-semibold mb-2">رقم الهاتف (واتساب) *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input rounded-xl text-sm ${errors.phone ? 'error' : ''}`}
                    placeholder="010xxxxxxxx"
                    dir="ltr"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ish-white text-xs sm:text-sm font-semibold mb-2">موقع الأرض ورقم القطعة</label>
                  <input
                    type="text"
                    name="landLocation"
                    value={formData.landLocation}
                    onChange={handleChange}
                    className="form-input rounded-xl text-sm"
                    placeholder="مثال: المنطقة 29، قطعة 1500، ناصية"
                  />
                </div>

                <div>
                  <label className="block text-ish-white text-xs sm:text-sm font-semibold mb-2">المساحة التقريبية (م²)</label>
                  <input
                    type="text"
                    name="landArea"
                    value={formData.landArea}
                    onChange={handleChange}
                    className="form-input rounded-xl text-sm"
                    placeholder="مثال: 550 م²"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ish-white text-xs sm:text-sm font-semibold mb-2">نموذج الشراكة المفضل</label>
                  <select
                    name="partnershipModel"
                    value={formData.partnershipModel}
                    onChange={handleChange}
                    className="form-input rounded-xl text-sm"
                  >
                    <option value="مشاركة بالأرض (JV)">نظام المشاركة بالأرض (Joint Venture)</option>
                    <option value="إدارة وتنفيذ (Turnkey)">إدارة وتنفيذ لحساب المالك (Turnkey)</option>
                    <option value="بيع كاش فوري">بيع كاش فوري لإشبيلية</option>
                    <option value="مزيج كاش ووحدات">نموذج هجين (سيولة نقدية + وحدات)</option>
                    <option value="استشارة مفتوحة">أفضل مناقشة الخيارات مع المهندس</option>
                  </select>
                </div>

                <div>
                  <label className="block text-ish-white text-xs sm:text-sm font-semibold mb-2">نوع الملكية والمستندات</label>
                  <select
                    name="ownershipType"
                    value={formData.ownershipType}
                    onChange={handleChange}
                    className="form-input rounded-xl text-sm"
                  >
                    <option value="ملكية تامة مسجلة">ملكية تامة مسجلة بجهاز المدينة</option>
                    <option value="محضر استلام وتخصيص">محضر استلام وتخصيص حديث</option>
                    <option value="توكيل رسمي ساري">توكيل رسمي قابل للتعامل</option>
                    <option value="ورثة / شراكة">ملكية ورثة / عدة شركاء</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-ish-white text-xs sm:text-sm font-semibold mb-2">تفاصيل أو طلبات خاصة (اختياري)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="form-input rounded-xl text-sm min-h-[90px] resize-y"
                  placeholder="اكتب أي معلومات إضافية عن رغبتك أو المواعيد المناسبة للتواصل معك..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold rounded-full w-full py-4 text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-2xl shadow-ish-gold/25 hover:scale-[1.02] transition-all disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner" />
                    <span>جاري إرسال البيانات وإعداد ملف المعاينة...</span>
                  </>
                ) : (
                  <span>إرسال طلب دراسة الجدوى والمعاينة المجانية</span>
                )}
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-ish-gray pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400">🔒</span>
                  <span>بيانات أرضك وسريتها محمية بالكامل</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-ish-gold">⚡</span>
                  <span>الرد والمتابعة خلال أقل من 24 ساعة</span>
                </span>
                <span>•</span>
                <a
                  href="https://wa.me/201010722349?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D9%84%D8%AF%D9%8A%20%D9%82%D8%B7%D8%B9%D8%A9%20%D8%A3%D8%B1%D8%B6%20%D9%81%D9%8A%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%AA%20%D9%88%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%B4%D8%A7%D9%88%D8%B1%20%D8%AD%D9%88%D9%84%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%D9%87%D8%A7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ish-gold hover:underline font-bold"
                >
                  أو تواصل فوراً عبر واتساب
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
