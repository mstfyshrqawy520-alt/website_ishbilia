'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';

// Custom Animated Number component for statistics
function AnimatedNumber({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    const duration = 1800;
    const steps = 45;
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
  }, [target, hasStarted]);

  useEffect(() => {
    const el = nodeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {prefix}{count.toLocaleString('en-US')}{suffix}
    </span>
  );
}

// 7 Pillars of Absolute Trust
const trustPillars = [
  {
    number: '01',
    titleAr: 'التراخيص الرسمية قبل أول صبة (+2000 رخصة معتمدة)',
    titleEn: 'Official Permits Prior to First Concrete Pour',
    taglineAr: 'صفر مخالفات بنائية وصفر قرارات إزالة في تاريخنا بالكامل',
    taglineEn: 'Zero building violations and zero demolition notices in our entire history',
    descAr:
      'لا نضع طوبة واحدة في الموقع قبل استخراج رخصة بناء رسمية وموافقات جهاز تنمية مدينة السادات. نلتزم التزاماً حرفياً بنسب البناء والردود والارتفاعات المقررة، مما يضمن أمان استثمارك وصحة أوراقك مدى الحياة.',
    descEn:
      'Not a single brick is laid before official building permits from Sadat City Authority are issued. We strictly comply with setback margins and height codes, ensuring permanent title and investment safety.',
    highlightAr: 'أكثر من 2000 رخصة معتمدة دون مخالفة واحدة',
    highlightEn: 'Over 2,000 approved licenses with zero infractions',
  },
  {
    number: '02',
    titleAr: 'التزام تعاقدي صارم بمواعيد التسليم',
    titleEn: 'Binding Contractual Delivery Timelines',
    taglineAr: 'جدول زمني تفصيلي بمراحل موثقة وغرامات تأخير ملزمة قانونياً',
    taglineEn: 'Detailed milestone schedule with legally binding delay penalties',
    descAr:
      'ندرك أن وقتك هو رأس مالك. نعتمد نظام إدارة مشروعات حازماً يربط كل مرحلة بتوقيت محدد، وتتضمن عقودنا شروطاً وغرامات تأخير واضحة تضمن لك استلام وحدتك أو مشروعك في الموعد المحدد دون مماطلة.',
    descEn:
      'We recognize that your time is capital. Our disciplined project management binds each milestone to rigid deadlines, backed by clear contractual penalties guaranteeing punctual handover.',
    highlightAr: 'مواعيد تسليم مقدسة وغرامات تأخير تعاقدية',
    highlightEn: 'Punctual handover with binding contractual clauses',
  },
  {
    number: '03',
    titleAr: 'جودة هندسية خاضعة لاختبارات المعامل المعتمدة',
    titleEn: 'Engineering Quality Backed by Certified Lab Tests',
    taglineAr: 'خرسانات جاهزة B350 وحديد تسليح عز مطابق لكود الزلازل المصري',
    taglineEn: 'Certified B350 ready-mix concrete & Ezz steel compliant with Egyptian Seismic Code',
    descAr:
      'لا نعتمد على التقديرات العشوائية؛ كل مرحلة صب تخضع لاختبارات الهبوط (Slump Test) وكسر مكعبات الخرسانة بعد 7 و28 يوماً في معامل معتمدة، مع استخدام حديد تسليح نخب أول خالٍ من الصدأ لضمان صلابة تدوم لأجيال.',
    descEn:
      'Zero guesswork; every concrete batch undergoes on-site slump tests and 7/28-day crushing tests in certified labs, alongside premium rust-free rebar engineered for multi-generational durability.',
    highlightAr: 'تقارير فحص معملية رسمية لكل مرحلة صب',
    highlightEn: 'Official lab verification for every concrete pour',
  },
  {
    number: '04',
    titleAr: 'تسعير عادل ومقايسة ملزمة دون مفاجآت مالية',
    titleEn: 'Transparent Pricing & Binding Itemized Quotations',
    taglineAr: 'ما يُكتب في العقد هو النهائي... لا زيادات فجائية في منتصف الطريق',
    taglineEn: 'Contractual prices are final... zero unforeseen mid-construction cost spikes',
    descAr:
      'نحمي عملاءنا من تقلبات السوق عبر دراسات تكلفة دقيقة وشراء مسبق للخامات الأساسية بالتنسيق مع كبار الموردين. نلتزم بالميزانية والمقايسة المتفق عليها ولا نطلب أي فروق أسعار مفاجئة.',
    descEn:
      'We shield clients from market volatility through meticulous cost modeling and pre-hedged procurement with leading suppliers, honoring agreed budgets with zero surprise add-ons.',
    highlightAr: 'شفافية مالية تامة ومقايسات هندسية دقيقة',
    highlightEn: 'Absolute financial transparency & binding bills of quantities',
  },
  {
    number: '05',
    titleAr: 'تسليم كامل العدادات والمرافق الرسمية المشروعة',
    titleEn: 'Full Official Utilities & Meters Handover',
    taglineAr: 'كهرباء، مياه، مصاعد إيطالية، ومداخل رخام جاهزة للاستخدام الفوري',
    taglineEn: 'Electricity, water, Italian elevators, and marble lobbies ready for immediate occupancy',
    descAr:
      'لا نترك العميل يصارع البيروقراطية الحكومية وحده. نسلم المشروعات كاملة العدادات الرسمية (كهرباء ومياه)، مع تشطيب فندقي متكامل للمداخل والسلالم، ومصاعد كهربائية مستوردة تخضع للفحص والتشغيل.',
    descEn:
      'We never leave clients to navigate bureaucracy alone. Handover includes official electric & water meters, hotel-grade lobbies, and fully operational imported elevators.',
    highlightAr: 'مبنى متكامل المرافق وجاهز للسكن الفوري',
    highlightEn: 'Fully hooked-up infrastructure ready for immediate living',
  },
  {
    number: '06',
    titleAr: 'أعلى عائد رأسمالي وقيمة استثمارية مستدامة',
    titleEn: 'Highest Capital Appreciation & Long-Term Resale Value',
    taglineAr: 'وحدات إشبيلية ترتفع قيمتها بمعدل 25% – 35% أسرع في سوق السادات',
    taglineEn: 'Ishbilia properties appreciate 25% – 35% faster across Sadat City real estate',
    descAr:
      'التميز المعماري للواجهات، وحسن اختيار المواقع في أرقى المناطق السكنية (المنطقة 21، 14، وغيرها)، والتشطيبات الفاخرة تجعل وحدات إشبيلية الأسهل في إعادة البيع والأعلى في العائد الإيجاري.',
    descEn:
      'Signature facade design, prime site selection across top districts (Zones 21, 14, etc.), and luxury finishes make Ishbilia residences easiest to resell and highest in rental yield.',
    highlightAr: 'قيمة تحفظ أموالك وتنمو مع توسع المدينة',
    highlightEn: 'Assets that protect your wealth and grow with urban expansion',
  },
  {
    number: '07',
    titleAr: 'خدمة ما بعد البيع وإدارة الصيانة المستمرة',
    titleEn: 'Dedicated After-Sales Care & Facilities Management',
    taglineAr: 'علاقتنا تبدأ بعد التسليم... صيانة دورية ومتابعة لاتحاد الشاغلين',
    taglineEn: 'Our relationship begins at handover... ongoing maintenance & HOA stewardship',
    descAr:
      'المبنى الذي لا تتم صيانته يفقد قيمته سريعاً. لذلك نوفر فريق صيانة متخصصاً لما بعد التسليم لمتابعة المصاعد، إنارة الواجهات، عزل الأسطح، وتأسيس اتحاد شاغلين يحافظ على بهاء الصرح لعشرات السنين.',
    descEn:
      'An unmanaged building rapidly loses value. We provide a specialized post-handover facilities team overseeing elevators, facade lighting, roof insulation, and HOA formation.',
    highlightAr: 'صيانة دورية تحفظ بهاء المبنى لأجيال',
    highlightEn: 'Routine care ensuring multi-generational prestige',
  },
];

// Materials & Engineering Lab Benchmarks
const materialsList = [
  {
    categoryAr: 'الخرسانة المسلحة والأساسات',
    categoryEn: 'Reinforced Concrete & Foundations',
    specAr: 'خرسانة جاهزة معتمدة (B250 - B350) مع إضافات السيكا لمقاومة الرطوبة والأملاح.',
    specEn: 'Certified ready-mix (B250 - B350) with Sika additives for salt and moisture resistance.',
    icon: '🏗️',
  },
  {
    categoryAr: 'حديد التسليح الإنشائي',
    categoryEn: 'Structural Steel Rebar',
    specAr: 'حديد عالي المقاومة خالٍ تماماً من الصدأ والتآكل من مصانع عز والسويس للصلب.',
    specEn: 'High-tensile, rust-free certified steel sourced directly from Ezz and Suez mills.',
    icon: '🔩',
  },
  {
    categoryAr: 'العزل المائي والحراري المعتمد',
    categoryEn: 'Certified Waterproofing & Thermal Insulation',
    specAr: 'لفائف بيتومين معتمدة 4 مم مع حماية كاملة للأسطح، الحمامات، وغرف المياه.',
    specEn: '4mm certified bituminous membrane with complete waterproofing for roofs and wet areas.',
    icon: '🛡️',
  },
  {
    categoryAr: 'التأسيسات الكهروميكانيكية',
    categoryEn: 'Plumbing & Electrical Infrastructure',
    specAr: 'مواسير الشريف المعتمدة باختبارات الضغط الهيدروليكي + كابلات السويدي الأصلية 100%.',
    specEn: 'Pressure-tested El-Sherif piping + 100% authentic El-Sewedy copper cabling.',
    icon: '⚡',
  },
  {
    categoryAr: 'الواجهات والمداخل والسلالم',
    categoryEn: 'Lobbies, Facades & Marble Work',
    specAr: 'رخام وجرانيت طبيعي إمبراطوري وتشطيبات واجهات بدهانات خارجية مقاومة للعوامل الجوية.',
    specEn: 'Polished imperial natural marble and exterior coatings engineered against weathering.',
    icon: '🏛️',
  },
  {
    categoryAr: 'المصاعد وأنظمة الأمان',
    categoryEn: 'Elevators & Safety Engineering',
    specAr: 'مصاعد إيطالية وأوروبية مستوردة بأنظمة توقف اضطراري أوتوماتيكي وأعلى معايير الهدوء.',
    specEn: 'Imported European elevators equipped with automatic emergency landing and safety sensors.',
    icon: '🛗',
  },
];

// The 5 Guarantees Charter
const guaranteesCharter = [
  {
    titleAr: 'ضمان السلامة الإنشائية للهيكل',
    titleEn: 'Structural Safety Guarantee',
    descAr: 'تعهد مكتوب بسلامة الأساسات والأعمدة والأسقف الخرسانية ومطابقتها للكود المصري للأحمال.',
    descEn: 'Written commitment guaranteeing foundations, columns, and slabs conform to Egyptian Code.',
  },
  {
    titleAr: 'ضمان قانونية وصحة التراخيص',
    titleEn: '100% Legal Title & Permit Guarantee',
    descAr: 'ضمان صدور رخصة البناء ومطابقة الردود ونسب البناء دون أي مخالفة أو غرامة لاحقة.',
    descEn: 'Guarantee of official building permit issuance with zero setback infractions or future penalties.',
  },
  {
    titleAr: 'ضمان ثبات الميزانية والمقايسة',
    titleEn: 'Fixed Budget & No Hidden Fees',
    descAr: 'التزام بالمبلغ المتفق عليه في العقد دون أي طلبات مادية غير متوقعة أو فروق أسعار فجائية.',
    descEn: 'Commitment to the agreed contractual sum with zero surprise mid-construction cost spikes.',
  },
  {
    titleAr: 'ضمان تسليم العدادات والمرافق',
    titleEn: 'Full Utility Meters Handover',
    descAr: 'تسليم كامل العدادات الرسمية (كهرباء ومياه) والمصاعد والمداخل دون تأخير إداري.',
    descEn: 'Handover of all official utility meters and elevators ready for occupancy without delay.',
  },
  {
    titleAr: 'ضمان العزل وجودة التشطيبات',
    titleEn: 'Finishes & Waterproofing Warranty',
    descAr: 'شهادة ضمان معتمدة على أعمال العزل المائي للأسطح والحمامات وجودة الدهانات الخارجية.',
    descEn: 'Certified warranty covering roof/wet-area waterproofing and exterior facade coating integrity.',
  },
];

// Case Studies
const caseStudies = [
  {
    nameAr: 'أ. سامح عبد الفتاح',
    nameEn: 'Mr. Sameh Abdel-Fattah',
    roleAr: 'مالك أرض بالمنطقة 21 — شراكة تطوير عقاري',
    roleEn: 'Landowner in Zone 21 — Joint Venture Partner',
    quoteAr:
      '«كنت متخوفاً جداً من الدخول في شراكة على أرضي بعد تجارب سيئة سمعتها عن مقاولين توقفوا في منتصف العمل. مع إشبيلية، تم استخراج رخصة البناء الرسمية أولاً، وتم صب الهيكل في 5 أشهر فقط. استلمت حصتي من الشقق بتشطيبات واجهات فندقية وعدادات رسمية دون أن أدفع جنيهاً واحداً زيادة.»',
    quoteEn:
      '"I was terrified of joint ventures after hearing nightmare stories about contractors stopping midway. With Ishbilia, official permits were pulled first, and concrete was cast in just 5 months. I received my unit quota with hotel-grade finishes and utility meters without spending a penny extra."',
    metricAr: 'تم التسليم قبل الموعد بـ 3 أسابيع',
    metricEn: 'Handed over 3 weeks ahead of schedule',
  },
  {
    nameAr: 'د. أشرف المهدي',
    nameEn: 'Dr. Ashraf El-Mahdy',
    roleAr: 'طبيب ومستثمر مغترب — مشروع 1518',
    roleEn: 'Physician & Overseas Investor — Project 1518',
    quoteAr:
      '«بحكم عملي في الخارج، لم يكن بإمكاني التواجد في مدينة السادات لمتابعة البناء. إشبيلية قدمت لي تقارير دورية موثقة بالفيديو والصور وتقارير كسر مكعبات الخرسانة من المعمل. الشفافية والمصداقية كانت على أعلى مستوى، والوحدة زادت قيمتها السوقية بأكثر من 30% خلال سنة واحدة.»',
    quoteEn:
      '"Working abroad, I could not oversee construction on-site in Sadat City. Ishbilia provided bi-weekly photo/video updates and official lab concrete test reports. Transparency was flawless, and the property appreciated over 30% in just one year."',
    metricAr: 'عائد استثماري ورأسمالي +32%',
    metricEn: '+32% Capital Growth in Year One',
  },
  {
    nameAr: 'م. أحمد الشناوي',
    nameEn: 'Eng. Ahmed El-Shennawy',
    roleAr: 'مالك وحدة سكنية — مشروع 1490',
    roleEn: 'Homeowner — Project 1490',
    quoteAr:
      '«أهم ما لفت نظري كمهندس هو الدقة في تفاصيل التشطيب الخارجي والمداخل. الرخام الطبيعي المستخدم، المصعد الإيطالي، وعزل الأسطح يثبت أن إشبيلية لا تبحث عن التوفير الرخيص بل تبني اسماً يدوم. أعيش هنا منذ عامين والمبنى بحالته الأولى تماماً.»',
    quoteEn:
      '"As an engineer myself, what struck me was the uncompromising detail in exterior finishing and lobbies. Natural marble, Italian elevators, and roof insulation prove Ishbilia builds for posterity rather than cutting corners."',
    metricAr: 'استقرار تام للمرافق وخدمة ما بعد البيع',
    metricEn: 'Flawless utilities & responsive after-sales',
  },
];

// Decision FAQs
const decisionFaqs = [
  {
    qAr: 'هل سعر المتر لدى إشبيلية أعلى من المقاول التقليدي؟ ولماذا هو في الحقيقة استثمار أوفر؟',
    qEn: 'Is Ishbilia price-per-meter higher than traditional contractors? Why is it actually more cost-effective?',
    aAr: 'المقاول التقليدي غالباً ما يقدم سعراً مبدئياً منخفضاً لجذب العميل، ثم يفاجئه بمطالبات مستمرة بفروق أسعار، أو يخفض كميات الحديد والخرسانة، أو يترك العمارة بلا رخصة رسمية وعدادات فتتحمل أنت غرامات ورسوم باهظة لاحقاً. إشبيلية تقدم لك مقايسة هندسية متكاملة تشمل التراخيص والمواد المعتمدة والعدادات والتشطيبات الفندقية بسعر ثابت ملزم، مما يجعل التكلفة الإجمالية الحقيقية أوفر بكثير مع الحفاظ على قيمة عقارك.',
    aEn: 'Independent subcontractors often lure clients with low initial quotes, then spring surprise bills, skimp on rebar/concrete, or omit official permits and utility meters—leaving you with crippling fines. Ishbilia offers a comprehensive, fixed-price engineering package including permits, lab-tested materials, hotel-grade finishes, and utilities, saving substantial money in total real cost.',
  },
  {
    qAr: 'كيف تضمن إشبيلية عدم حدوث أي تأخير في مواعيد التسليم؟',
    qEn: 'How does Ishbilia guarantee strict adherence to delivery dates?',
    aAr: 'نعتمد على خطة تشغيلية واضحة ومسبقة لكل مشروع مع حجز وتأمين الخامات الأساسية من الموردين المعتمدين قبل البدء. كما تتضمن عقودنا جدولاً زمنياً ملزماً بمحطات صب وتشطيب موثقة، مع وضع غرامات تأخير تعاقدية تلزم الشركة أمام العميل.',
    aEn: 'We implement disciplined milestone operational scheduling and pre-hedge essential materials with certified vendors. Our contracts include binding milestone dates and explicit delay penalty clauses protecting the client.',
  },
  {
    qAr: 'كيف أتأكد من صحة أوراق التراخيص وسابقة الأعمال قبل التعاقد؟',
    qEn: 'How can I verify licenses and track record before signing contracts?',
    aAr: 'نرحب بزيارتك في مقرنا الرئيسي بمدينة السادات؛ حيث نضع بين يديك كافة المستندات الرسمية، نسخ الرخص المعتمدة لأكثر من 2000 مشروع، ومخططات مشروعاتنا القائمة. كما ننظم لك جولة ميدانية لمواقعنا المنفذة وقيد الإنشاء لتعاين جودة الخرسانات والتشطيبات بنفسك.',
    aEn: 'We welcome you to our headquarters in Sadat City, where all official dossiers, certified licenses from our 2,000+ portfolio, and engineering plans are open for inspection. We also arrange private site tours across active developments.',
  },
  {
    qAr: 'ما هي معاييركم في اختيار مواقع المشروعات بمدينة السادات؟',
    qEn: 'What are your criteria for site selection across Sadat City?',
    aAr: 'نختار قطع الأراضي في أرقى المناطق السكنية (مثل المنطقة 21، 14، والمناطق الأكثر طلباً)، مع التركيز على الواجهات البحرية، القرب من المحاور والخدمات الرئيسية، والشوارع الواسعة التي تضمن لساكني ومستثمري إشبيلية الخصوصية وسهولة الوصول وأعلى عائد رأسمالي.',
    aEn: 'We acquire plots across premier residential zones (such as Districts 21 and 14), prioritizing northern panoramic orientations, proximity to major thoroughfares and amenities, and wide avenues ensuring privacy and strong appreciation.',
  },
];

export default function WhyIshbiliaPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-ish-black text-ish-white min-h-screen selection:bg-ish-gold selection:text-black">
      {/* ========================================================================= */}
      {/* 1. MANIFESTO HERO SECTION                                                */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden bg-gradient-to-b from-ish-black via-[#0D1522] to-ish-black border-b border-white/10">
        {/* Architectural backdrop */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Image
            src="/images/hero-cinematic.jpg"
            alt="لماذا إشبيلية للتطوير العقاري"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-ish-black/80 to-ish-black/90" />
        </div>

        {/* Ambient gold glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-ish-gold/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-ish-gold/5">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>
              {isAr ? 'في عالم العقارات... لا مجال للتجارب' : 'In Real Estate... There Is Zero Room for Error'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-ish-white mb-8 tracking-tight leading-[1.15]">
            {isAr ? (
              <>
                لماذا إشبيلية؟ <br className="hidden sm:inline" />
                <span className="gold-gradient-text">لأن كل متر تشتريه معنا</span> محمي بالهندسة والقانون
              </>
            ) : (
              <>
                Why Ishbilia? <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Every Meter You Own</span> Is Guarded by Code & Title
              </>
            )}
          </h1>

          <div className="gold-line max-w-xs mx-auto mb-8" />

          <p className="text-ish-gray-light text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal mb-10 text-balance">
            {isAr
              ? 'منذ أكثر من 20 عاماً، لم نبنِ مجرد جدران، بل أرسينا عقيدة هندسية صارمة في مدينة السادات: رخصة رسمية قبل أول صبة، خرسانات مفحوصة معملياً، تسعير ثابت ملزم، ومواعيد تسليم مقدسة.'
              : 'For over 20 years, we haven’t just erected walls; we instituted an uncompromising standard across Sadat City: official permits before breaking ground, lab-certified concrete, fixed pricing, and sacred deadlines.'}
          </p>

          {/* Quick Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {[
              isAr ? 'صفر مخالفات بنائية' : 'Zero Infractions',
              isAr ? '+2000 رخصة معتمدة' : '+2,000 Approved Licenses',
              isAr ? '100% إشراف استشاري مقيم' : '100% Consultant Oversight',
              isAr ? 'ضمان إنشائي ممتد' : 'Extended Structural Warranty',
            ].map((pill, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-ish-gold"
              >
                ✦ {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pillars"
              className="btn-gold rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-ish-gold/20 flex items-center gap-2 group transition-all"
            >
              <span>{isAr ? 'اكتشف ركائز الثقة السبع' : 'Discover the 7 Trust Pillars'}</span>
              <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <Link
              href="/consultation"
              className="btn-outline rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold border-white/20 hover:border-ish-gold hover:text-ish-gold transition-all"
            >
              {isAr ? 'حجز موعد استشارة هندسية' : 'Schedule Engineering Meeting'}
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE 7 PILLARS OF ABSOLUTE TRUST                                        */}
      {/* ========================================================================= */}
      <section className="py-24 bg-ish-black relative overflow-hidden" id="pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'معايير الاختيار' : 'Decision Benchmarks'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ish-white mt-2 mb-4">
              {isAr ? 'الركائز السبع للثقة المطلقة مع إشبيلية' : 'The 7 Pillars of Absolute Trust'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'لماذا يأتمننا مئات المستثمرين وملاك الأراضي والعائلات على أهم استثمارات حياتهم؟'
                : 'Why hundreds of investors, landowners, and families entrust us with their lifelong assets'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center text-ish-gold font-black text-xl group-hover:scale-110 group-hover:bg-ish-gold/20 transition-all">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-ish-gold font-bold">
                      {isAr ? 'ركيزة أساسية' : 'Core Pillar'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                    {isAr ? pillar.titleAr : pillar.titleEn}
                  </h3>

                  <p className="text-xs text-ish-gold font-medium mb-4">
                    {isAr ? pillar.taglineAr : pillar.taglineEn}
                  </p>

                  <p className="text-sm text-ish-gray leading-relaxed mb-6">
                    {isAr ? pillar.descAr : pillar.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-ish-white/90 font-bold">
                  <svg className="w-4 h-4 text-ish-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{isAr ? pillar.highlightAr : pillar.highlightEn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HARD METRICS / BY THE NUMBERS                                         */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#090D15] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs text-ish-gold font-bold uppercase tracking-wider block mb-2">
              {isAr ? 'حقائق موثقة' : 'Documented Proof'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ish-white">
              {isAr ? 'إشبيلية في أرقام حقيقية' : 'Ishbilia by the Real Numbers'}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text mb-1">
                <AnimatedNumber target={2000} prefix="+" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-ish-white mb-0.5">
                {isAr ? 'رخصة صادرة' : 'Issued Licenses'}
              </p>
              <p className="text-[11px] text-ish-gray">{isAr ? 'سجل ناصع بالجهاز' : 'With Sadat Authority'}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text mb-1">
                <AnimatedNumber target={20} prefix="+" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-ish-white mb-0.5">
                {isAr ? 'عاماً من الخبرة' : 'Years Experience'}
              </p>
              <p className="text-[11px] text-ish-gray">{isAr ? 'منذ عام 2005' : 'Since 2005'}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text mb-1">
                <AnimatedNumber target={50} prefix="+" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-ish-white mb-0.5">
                {isAr ? 'مشروع قائم ومسلّم' : 'Completed Landmarks'}
              </p>
              <p className="text-[11px] text-ish-gray">{isAr ? 'واجهات فندقية' : 'Hotel-grade facades'}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text mb-1">
                <span>0%</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-ish-white mb-0.5">
                {isAr ? 'مخالفات بنائية' : 'Code Violations'}
              </p>
              <p className="text-[11px] text-ish-gray">{isAr ? 'التزام 100% بالردود' : '100% legal compliance'}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text mb-1">
                <span>100%</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-ish-white mb-0.5">
                {isAr ? 'تسليم عدادات ومرافق' : 'Utility Hookups'}
              </p>
              <p className="text-[11px] text-ish-gray">{isAr ? 'جاهزة للمعيشة فوراً' : 'Ready for move-in'}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-3xl sm:text-4xl font-black gold-gradient-text mb-1">
                <span>98%</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-ish-white mb-0.5">
                {isAr ? 'رضا وتوصية العملاء' : 'Client Satisfaction'}
              </p>
              <p className="text-[11px] text-ish-gray">{isAr ? 'تجارب موثقة حقيقية' : 'Documented reviews'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE ENGINEERING LAB & MATERIALS BENCHMARK                             */}
      {/* ========================================================================= */}
      <section className="py-24 bg-ish-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'الشفافية الهندسية' : 'Engineering Transparency'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ish-white mt-2 mb-4">
              {isAr ? 'مختبر جودة الخامات التي لا نساوم عليها' : 'Our Quality & Materials Benchmark'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'لا نعتمد على البدائل الرخيصة؛ كل خامة تدخل موقع إشبيلية معتمدة ومختومة ومطابقة لأعلى المواصفات'
                : 'Zero cheap alternatives; every material entering an Ishbilia site is certified and tested'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materialsList.map((mat, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-7 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-4">{mat.icon}</div>
                  <h3 className="text-lg font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                    {isAr ? mat.categoryAr : mat.categoryEn}
                  </h3>
                  <p className="text-sm text-ish-gray leading-relaxed">
                    {isAr ? mat.specAr : mat.specEn}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-ish-gold font-bold flex items-center gap-1.5">
                  <span>✓ {isAr ? 'مواصفة قياسية ملزمة' : 'Binding Standard Spec'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE 5 GUARANTEES CHARTER                                               */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#090D14] relative border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'ميثاق الشرف' : 'Commitment Charter'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ish-white mt-2 mb-4">
              {isAr ? 'ميثاق الضمانات التعاقدية الخمس' : 'The 5 Contractual Guarantees'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'تعهدات رسمية نضعها في بنود عقودنا لحماية حقوقك الإنشائية والقانونية والمالية'
                : 'Binding written covenants in our contracts protecting your legal, financial, and structural rights'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {guaranteesCharter.map((guar, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 text-center flex flex-col items-center justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-ish-gold/15 border border-ish-gold/40 flex items-center justify-center text-ish-gold font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                    {isAr ? guar.titleAr : guar.titleEn}
                  </h3>
                  <p className="text-xs text-ish-gray leading-relaxed">
                    {isAr ? guar.descAr : guar.descEn}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-ish-gold font-bold">
                  {isAr ? 'مضمون تعاقدياً' : 'Contractually Sealed'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. REAL SUCCESS STORIES & TESTIMONIALS                                   */}
      {/* ========================================================================= */}
      <section className="py-24 bg-ish-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'تجارب حقيقية' : 'Verified Case Studies'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-2 mb-4">
              {isAr ? 'قصص واقعية ترويها تجارب عملائنا' : 'Real Stories from Our Partners'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'شهادات موثقة من واقع التنفيذ تعكس الفرق الحقيقي لمنظومة إشبيلية'
                : 'Documented experiences reflecting the tangible difference of the Ishbilia ecosystem'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1 text-ish-gold mb-4">
                    {[...Array(5)].map((_, sIdx) => (
                      <svg key={sIdx} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-sm sm:text-base text-ish-white leading-relaxed mb-6 italic">
                    {isAr ? cs.quoteAr : cs.quoteEn}
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs px-2.5 py-1 rounded bg-ish-gold/15 text-ish-gold font-bold inline-block mb-3">
                    {isAr ? cs.metricAr : cs.metricEn}
                  </div>
                  <h4 className="text-sm font-bold text-ish-white">{isAr ? cs.nameAr : cs.nameEn}</h4>
                  <p className="text-xs text-ish-gray">{isAr ? cs.roleAr : cs.roleEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. DECISION FAQS ACCORDION                                               */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#090D15] relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'إجابات حاسمة' : 'Decisive Inquiries'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ish-white mt-2 mb-4">
              {isAr ? 'أسئلة تدور في ذهنك قبل التعاقد' : 'Questions to Dispel All Doubt'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="space-y-4">
            {decisionFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-start flex items-center justify-between gap-4 font-bold text-ish-white hover:text-ish-gold transition-colors"
                  >
                    <span className="text-base sm:text-lg">{isAr ? faq.qAr : faq.qEn}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-ish-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-ish-gold/15' : ''
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-white/5 text-sm sm:text-base text-ish-gray leading-relaxed">
                      {isAr ? faq.aAr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. ELITE CONFIDENCE CTA                                                   */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-ish-black via-[#0D1524] to-ish-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-ish-gold/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121A28]/95 to-[#0A0F17]/95 border border-ish-gold/40 shadow-2xl shadow-black/80 backdrop-blur-xl">
            <span className="text-xs sm:text-sm px-4 py-1.5 rounded-full bg-ish-gold/15 text-ish-gold font-bold inline-block mb-6 border border-ish-gold/30">
              {isAr ? 'عقود ملزمة وأمان تام' : 'Binding Contracts & Total Security'}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ish-white mb-6 leading-tight">
              {isAr ? (
                <>
                  استثمارك لا يحتمل التجربة... <br className="hidden sm:inline" />
                  <span className="gold-gradient-text">اختر الثقة الهندسية المثبتة في مدينة السادات</span>
                </>
              ) : (
                <>
                  Your Capital Deserves Zero Guesswork... <br className="hidden sm:inline" />
                  <span className="gold-gradient-text">Choose Proven Engineering Trust in Sadat City</span>
                </>
              )}
            </h2>

            <p className="text-ish-gray-light text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {isAr
                ? 'فريقنا الاستشاري يرحب بزيارتك في مقرنا الرئيسي لمراجعة التراخيص وسابقة الأعمال، أو ترتيب جولة ميدانية لمواقعنا المنفذة وقيد الإنشاء.'
                : 'Our senior consultants welcome you to our headquarters to inspect certified licenses and past work, or arrange a private site tour across active developments.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/consultation"
                className="btn-gold rounded-full px-8 py-4 text-base font-bold shadow-xl shadow-ish-gold/25"
              >
                {isAr ? 'حجز جلسة استشارة ومراجعة تراخيص' : 'Book Permit & Engineering Review'}
              </Link>

              <a
                href="https://wa.me/201010722349?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AA%D8%B1%D8%AA%D9%8A%D8%A8%20%D8%B2%D9%8A%D8%A7%D8%B1%D8%A9%20%D9%85%D9%8A%D8%AF%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D8%A7%D8%AA%20%D8%A5%D8%B4%D8%A8%D9%8A%D9%84%D9%8A%D8%A9%20%D9%81%D9%8A%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%A7%D8%AA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 text-base font-bold transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                </svg>
                <span>{isAr ? 'ترتيب جولة ميدانية عبر واتساب' : 'Arrange Site Visit via WhatsApp'}</span>
              </a>

              <Link
                href="/projects"
                className="btn-outline rounded-full px-8 py-4 text-base font-semibold border-white/20 hover:border-ish-gold hover:text-ish-gold transition-all"
              >
                {isAr ? 'استكشف مشروعاتنا' : 'Explore Projects'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
