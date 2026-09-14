'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Districts Data
const districts = [
  {
    id: 'zone8',
    name: 'المنطقة الثامنة (قلب الخدمات والمولات)',
    tag: 'الأعلى كثافة وعائداً تجارياً',
    desc: 'المركز التجاري والحيوي الأول في مدينة السادات؛ تضم كبرى المولات (مثل جنة مول، مقر شركة إشبيلية)، المجمعات البنكية، المطاعم والأنشطة الإدارية والطبية.',
    roi: 'عائد إيجاري تجاري سنوي يصل إلى 14 - 18%',
    features: [
      'أعلى طلب تجاري وإداري في كامل المدينة',
      'كثافة سكانية مرتفعة تضمن نجاح أي نشاط خدمي أو عيادات',
      'شوارع رئيسية ومحاور ربط تربط شرق المدينة بغربها',
      'مقر المقار الرئيسية للشركات والمصالح الحيوية'
    ],
    suitableFor: 'المستثمرين الراغبين في عيادات، مكاتب إدارية، أو محلات تجارية تدر إيجاراً دورياً فورياً.'
  },
  {
    id: 'zone29',
    name: 'المنطقة 29 (أرقى السكن المجاور للجامعة)',
    tag: 'الوجهة المفضلة للنخبة وسكن الجامعة',
    desc: 'واحدة من أرقى وأهدأ المناطق السكنية بمدينة السادات؛ تمتاز بقربها الشديد من جامعة مدينة السادات، وتخطيطها المنظم ذو الشوارع العريضة والواجهات البحرية والمساحات الخضراء.',
    roi: 'ارتفاع في قيمة الأصل الرأسمالي بنسبة تتجاوز 25% سنوياً',
    features: [
      'خطوات معدودة من كليات جامعة مدينة السادات',
      'مجمع خدمات متكامل (مسجد، مدرسة، حضانة، مراكز طبية وتسوق)',
      'عمارات سكنية فاخرة بتصاميم نيوكلاسيكية وحدائق مستقلة',
      'طلب إيجاري استثنائي من أعضاء هيئة التدريس والأطباء'
    ],
    suitableFor: 'العائلات الباحثة عن سكن راقٍ ذي خصوصية عالية، أو المستثمرين الباحثين عن إيجار فندقي وأكاديمي مرتفع.'
  },
  {
    id: 'golden',
    name: 'المنطقة الذهبية والمحور المركزي',
    tag: 'شريان الاستثمار والتجارة',
    desc: 'تقع على امتداد المحور المركزي وطريق الأكسدة، وتمثل حلقة الوصل الاستراتيجية الكبرى التي تجمع بين المشروعات السكنية الراقية والأنشطة الخدمية والتجارية الاستثمارية.',
    roi: 'أسرع معدل نمو في سعر المتر التجاري بالمدينة',
    features: [
      'إطلالات مباشرة على المحاور الرئيسية وسهولة الحركة',
      'تنوع الأنشطة بين مولات ومراكز أعمال وعمارات راقية',
      'بنية تحتية متطورة وشبكات مرافق حديثة',
      'قريبة من المجمعات السكنية الجديدة والامتدادات المستقبلية'
    ],
    suitableFor: 'الراغبين في شراء محال تجارية أو شقق ذات واجهات مفتوحة على محاور حيوية ذات قيمة متصاعدة.'
  },
  {
    id: 'zone11',
    name: 'المنطقة الحادية عشرة ومناطق الفيلات',
    tag: 'هدوء وخصوصية وسكن عائلي',
    desc: 'تتميز بطابع منخفض الكثافة يغلب عليه الفيلات والمنازل المستقلة والمساحات الخضراء الواسعة، وتعد خياراً مثالياً لمن ينشد الراحة والهدوء التام.',
    roi: 'استقرار عقاري وقيمة احتفاظ عالية على المدى الطويل',
    features: [
      'كثافة بنائية وسكانية منخفضة وخصوصية قصوى',
      'شوارع مشجرة وحدائق داخلية بين المربعات السكنية',
      'قريبة من المدارس والمرافق العامة للمدينة',
      'تصاميم تلبي متطلبات العائلات الكبيرة'
    ],
    suitableFor: 'السكن العائلي الدائم والباحثين عن بيئة هادئة بعيدة عن صخب المناطق التجارية.'
  },
  {
    id: 'expansions',
    name: 'مناطق التوسعات والامتدادات الحديثة',
    tag: 'فرص اقتناص الأراضي بأسعار الدخول',
    desc: 'المناطق التي يطرحها جهاز مدينة السادات ضمن خطط التطوير العمراني 2026 - 2030؛ تمثل أفضل فرصة لاقتناص أراضٍ بأسعار مبدئية ومضاعفة قيمتها مع دخول المرافق وتطور العمران.',
    roi: 'مضاعفة رأس المال (Capital Gain) خلال 3 - 5 سنوات',
    features: [
      'أسعار متر تنافسية تتيح الدخول برؤوس أموال متوسطة',
      'مخططات معتمدة من هيئة المجتمعات العمرانية',
      'فرص ممتازة للشراكة وتطوير الأراضي مع إشبيلية مبكراً',
      'أسبقية اختيار النواصي والمواقع المميزة'
    ],
    suitableFor: 'المستثمرين الاستراتيجيين الذين يفضلون تجميد أموالهم في أراضٍ ترتفع قيمتها أضعافاً مع اكتمال العمران.'
  }
];

// FAQ Data categorized by Tabs
const faqCategories = [
  {
    id: 'licensing',
    name: 'تراخيص وأوراق الأراضي',
    badge: 'تراخيص وبناء',
    questions: [
      {
        q: 'ما هي المستندات الأساسية المطلوبة لاستخراج رخصة بناء في جهاز مدينة السادات؟',
        a: 'تتطلب الإجراءات الرسمية: (1) محضر استلام قطعة الأرض وسند الملكية أو التخصيص، (2) شهادة صلاحية الموقع للبناء الصادرة من جهاز المدينة، (3) الرسومات المعمارية والإنشائية المعتمدة من مهندس نقابي واستشاري، (4) وثيقة التأمين على الأعمال الإنشائية (إن تطلبت المساحة أو الارتفاع)، (5) سداد الرسوم المقررة للمرافق ورسوم التراخيص. وتتولى إشبيلية إنهاء كافة هذه البنود نيابة عن المالك بالكامل استناداً لخبرتها في +2000 رخصة.'
      },
      {
        q: 'ما هي مهلة البناء المحددة من جهاز المدينة، وكيف يتفادى المالك سحب الأرض؟',
        a: 'يحدد جهاز مدينة السادات مهلاً زمنية محددة (تتراوح عادة بين 3 إلى 5 سنوات من تاريخ الاستلام) لإتمام بناء الهيكل الخرساني والواجهات الخارجية وتشطيب السور والمدخل لإصدار محضر المطابقة. في حال ضيق الوقت، يعد التعاقد مع مطور معتمد كإشبيلية أسرع وسيلة لبدء الحفر والصب فوراً وتفادي غرامات التأخير أو مخاطر سحب الأرض.'
      },
      {
        q: 'كيف يتم نقل الملكية أو التنازل عن قطعة الأرض في جهاز السادات بشكل قانوني آمن؟',
        a: 'يتم التنازل حصرياً داخل مقر جهاز مدينة السادات بحضور المتنازل والمتنازل إليه أو بتوكيل رسمي يبيح التنازل في الجهاز. يُشترط سداد كافة الأقساط المستحقة ورسوم التنازل المحددة من هيئة المجتمعات العمرانية، والحصول على شهادة براءة ذمة مالية وموقف عقاري وتنفيذي سليم.'
      },
      {
        q: 'ما هي شروط الردود والارتفاعات ونسب البناء المعتمدة في السادات؟',
        a: 'في المناطق السكنية العادية، تكون النسبة البنائية للدور الأرضي عادة 50% إلى 55% من مساحة الأرض، وتزيد في الأدوار المتكررة بنسبة 10% بفضل البروزات والتراسات. الارتفاع المعتمد غالباً ما يكون (أرضي + 3 أدوار متكررة + غرف سطح بنسبة 25%) مع الالتزام بالردود الأمامية (3م) والجانبية والخلفية (2.5م إلى 3م) وفق اشتراطات كل مجاورة.'
      }
    ]
  },
  {
    id: 'partnership',
    name: 'شراكة وتطوير الأراضي (JV)',
    badge: 'شراكة الأراضي',
    questions: [
      {
        q: 'ما هي النسبة المعتادة للمشاركة بين مالك الأرض وشركة إشبيلية؟',
        a: 'تتراوح نسبة المشاركة عادة بين 40% إلى 50% لمالك الأرض، وتحدد بدقة بناءً على عوامل هندسية وجغرافية: (موقع الأرض، واجهة بحري أم قبلي، ناصية أم واجهة مفردة، عرض الشارع، والاشتراطات التجارية أم السكنية). تُحدد حصة كل طرف بوحدات محددة بأرقامها ومواقعها في العقد والمخطط الهندسي المعتمد.'
      },
      {
        q: 'هل تنتقل ملكية الأرض لشركة إشبيلية أثناء فترة التنفيذ؟',
        a: 'قطعاً لا. تظل الأرض مسجلة باسم المالك في جهاز مدينة السادات حتى اكتمال المشروع وتسليم الوحدات. عقد المشاركة هو عقد مدني وتجاري موثق يمنح إشبيلية حق التطوير والإنشاء والترخيص والبيع فقط، دون المساس بأصل ملكية الأرض، وهي ميزة الأمان الكبرى التي يفضلها عملاؤنا.'
      },
      {
        q: 'ما هي الضمانات التي يحصل عليها صاحب الأرض لضمان عدم تأخر المشروع؟',
        a: 'يحصل المالك على عقد مشاركة قانوني يتضمن جدولاً زمنياً دقيقاً ومفصلاً لمراحل العمل (الحفر، الأساسات، الخرسانات، المباني، الواجهات، التسليم)، مع شرط جزائي واضح يفرض غرامة مالية شهرية لصالح المالك عن أي تأخير غير ناتج عن قوة قاهرة، فضلاً عن تقارير مصورة واختبارات دورية للجودة.'
      },
      {
        q: 'هل يتحمل صاحب الأرض أي مبالغ مالية أثناء تنفيذ المشروع؟',
        a: 'في نموذج «المشاركة بالأرض - Joint Venture»، لا يدفع صاحب الأرض أي مبالغ مالية إطلاقاً. تتكفل شركة إشبيلية بنفقات التصميم، استخراج التراخيص، توريد مواد البناء، العمالة، والإشراف الهندسي بالكامل وحتى إنهاء التشطيبات وتسليم الخدمات.'
      }
    ]
  },
  {
    id: 'buying',
    name: 'شراء الوحدات والاستثمار الفردي',
    badge: 'شراء واستثمار',
    questions: [
      {
        q: 'ما هي خطط السداد وتسهيلات الدفع المتوفرة في مشروعات إشبيلية؟',
        a: 'توفر إشبيلية أنظمة سداد مرنة تتناسب مع احتياجات المستثمرين: مقدمات تبدأ من 20% أو 25% مع فترات سداد ميسرة تمتد من سنتين حتى 4 سنوات بدون فوائد بنكية، بالإضافة إلى خصومات خاصة مميزة في حال السداد الكاش الفوري.'
      },
      {
        q: 'ما هي مواصفات تسليم الوحدات (نصف تشطيب والتشطيب الكامل)؟',
        a: 'في نظام «نصف تشطيب الفاخر»: نسلم الوحدة بحلوق خشبية مثبتة، محارة ناعمة مخدومة بأسمنت عالي الجودة، تأسيس سباكة وكهرباء بأجود المواسير والأسلاك المعتمدة، أبواب مصفحة للوحدات، وواجهات نيوكلاسيكية ومداخل رخامية ومصاعد إيطالية تعمل فور الاستلام. كما نوفر باقات تشطيب كامل سوبر لوكس لمن يرغب.'
      },
      {
        q: 'هل يمكن للمشتري إعادة بيع وحدته (Resale) قبل استكمال كافة الأقساط؟',
        a: 'نعم، تتيح إشبيلية لعملائها إمكانية إعادة بيع الوحدة بعد سداد نسبة المقدم والأقساط المستحقة، مع توفير الدعم التسويقي اللازم ومساعدة المشتري في نقل الملكية بشكل قانوني سليم، للاستفادة من فرق السعر والمكسب الرأسمالي المتحقق.'
      },
      {
        q: 'ما هو العائد الإيجاري المتوقع عند استثمار شقة سكنية في السادات؟',
        a: 'نظراً لوجود جامعة مدينة السادات، مستشفيات عامة وخاصة، والمناطق الصناعية الضخمة التي تضم آلاف المهندسين والخبراء، فإن الطلب الإيجاري على الشقق الفاخرة مرتفع للغاية، بمتوسط عائد إيجاري سنوي يتراوح بين 9% إلى 13% من قيمة العقار، وهو من أعلى المعدلات على مستوى المدن الجديدة.'
      }
    ]
  }
];

export default function SadatCityGuidePage() {
  const [selectedDistrict, setSelectedDistrict] = useState('zone29');
  const [activeFaqTab, setActiveFaqTab] = useState('licensing');
  const [openFaqIndices, setOpenFaqIndices] = useState<Record<string, boolean>>({
    'licensing-0': true,
    'partnership-0': true,
    'buying-0': true,
  });

  const toggleFaq = (key: string) => {
    setOpenFaqIndices(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activeDistrictData = districts.find(d => d.id === selectedDistrict) || districts[0];
  const activeFaqCategory = faqCategories.find(c => c.id === activeFaqTab) || faqCategories[0];

  return (
    <div className="w-full bg-[var(--bg-primary)] text-ish-white overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[var(--bg-primary)]/90 to-[var(--bg-primary)] pointer-events-none" />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212,175,55,1) 40px, rgba(212,175,55,1) 41px)`
          }}
        />

        <div className="section-container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ish-gold/10 border border-ish-gold/35 text-ish-gold text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>الدليل العقاري والاستثماري الشامل — مدينة السادات 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ish-white mb-6 leading-tight max-w-4xl mx-auto">
            دليلك الذكي للاستثمار العقاري في <span className="gold-gradient-text">مدينة السادات</span>
          </h1>

          <p className="text-ish-gray-light text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            تحليل شامل لأحياء المدينة الواعدة، أسعار الأراضي، اشتراطات تراخيص البناء الرسمية، ودراسات جدوى الاستثمار السكني والتجاري من واقع خبرة 20 عاماً لشركة إشبيلية للتطوير العقاري.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            <div className="glass-card p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">طريق مصر - إسكندرية</span>
              <span className="text-xs text-ish-gray-light font-medium mt-1 block">موقع استراتيجي وسهولة وصول</span>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">+30%</span>
              <span className="text-xs text-ish-gray-light font-medium mt-1 block">متوسط نمو سعر المتر سنوياً</span>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">جامعة السادات</span>
              <span className="text-xs text-ish-gray-light font-medium mt-1 block">طلب إيجاري أكاديمي دائم</span>
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-2xl sm:text-3xl font-black gold-gradient-text">أكبر قلعة صناعية</span>
              <span className="text-xs text-ish-gray-light font-medium mt-1 block">قوة شرائية واستثمارية هائلة</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#districts"
              className="btn-gold rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-ish-gold/25 hover:scale-105 transition-all duration-300"
            >
              استكشف خريطة الأحياء الاستثمارية
            </a>
            <a
              href="#faq"
              className="btn-outline rounded-full px-8 py-3.5 text-sm sm:text-base font-bold shadow-lg"
            >
              الأسئلة الشائعة والقانونية
            </a>
          </div>
        </div>
      </section>

      {/* 2. City Strategic Advantages */}
      <section className="py-20 w-full bg-[var(--bg-secondary)] border-b border-white/5">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>ركائز القوة والنمو</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              لماذا تعد مدينة السادات الحصان الرابح للاستثمار العقاري؟
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg">
              الجمع بين القاعدة الصناعية الكبرى والمؤسسات التعليمية والتخطيط العمراني الواسع يجعل من مدينة السادات بيئة عقارية آمنة ذات طلب حقيقي وليس مضاربياً.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-ish-gold/10 border border-ish-gold/25 flex items-center justify-center text-ish-gold text-2xl mb-6 group-hover:scale-110 transition-transform">
                🏙️
              </div>
              <h3 className="text-xl font-bold text-ish-white mb-3 font-headline">
                طلب حقيقي غير متوقف
              </h3>
              <p className="text-sm text-ish-gray-light leading-relaxed font-body">
                تضم السادات مئات المصانع الكبرى والشركات متعددة الجنسيات وآلاف الطلاب في كليات جامعة مدينة السادات؛ هذا يخلق طلباً مستمراً على الإيجار والشراء الفاخر للكوادر والأسر.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-ish-gold/10 border border-ish-gold/25 flex items-center justify-center text-ish-gold text-2xl mb-6 group-hover:scale-110 transition-transform">
                📈
              </div>
              <h3 className="text-xl font-bold text-ish-white mb-3 font-headline">
                أسعار أراضٍ ذات مساحة صعود
              </h3>
              <p className="text-sm text-ish-gray-light leading-relaxed font-body">
                بالمقارنة مع القاهرة الجديدة والشيخ زايد، ما زال سعر المتر في مدينة السادات يوفر نقطة دخول استثمارية منخفضة التكلفة مع إمكانات مضاعفة القيمة عند التطوير إلى عمارات ومشروعات فاخرة.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-ish-gold/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-ish-gold/10 border border-ish-gold/25 flex items-center justify-center text-ish-gold text-2xl mb-6 group-hover:scale-110 transition-transform">
                🛣️
              </div>
              <h3 className="text-xl font-bold text-ish-white mb-3 font-headline">
                شبكة محاور وبنية ذكية
              </h3>
              <p className="text-sm text-ish-gray-light leading-relaxed font-body">
                الموقع المباشر على طريق مصر - إسكندرية الصحراوي، والقرب من موانئ الدلتا الجافة والمطارات، يجعل الانتقال منها وإليها في غاية السرعة، مما يرسخ استقرار العائلات وأصحاب الأعمال.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. District-by-District Guide */}
      <section className="py-20 w-full bg-[var(--bg-primary)] border-b border-white/5" id="districts">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>خريطة وتحليل المناطق</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              دليل أحياء ومناطق السادات الاستثمارية
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg">
              لكل منطقة في مدينة السادات طبيعة استثمارية خاصة. استكشف أدناه مميزات كل منطقة لاختيار موقع وحدتك أو تطوير أرضك.
            </p>
          </div>

          {/* District Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {districts.map(d => (
              <button
                key={d.id}
                onClick={() => setSelectedDistrict(d.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  selectedDistrict === d.id
                    ? 'bg-ish-gold text-ish-black border-ish-gold shadow-lg shadow-ish-gold/25 scale-105'
                    : 'bg-white/5 text-ish-gray-light border-white/10 hover:border-ish-gold/40 hover:text-white'
                }`}
              >
                {d.name.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Active District Detail Card */}
          <div className="glass-card rounded-2xl p-7 sm:p-12 border border-ish-gold/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="text-xs px-3 py-1 rounded-full bg-ish-gold/15 text-ish-gold font-bold border border-ish-gold/30 inline-block mb-3">
                  {activeDistrictData.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-ish-white font-headline">
                  {activeDistrictData.name}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-start sm:text-end shrink-0">
                <span className="block text-[11px] text-ish-gray-light">معدل العائد الاستثماري التقديري:</span>
                <span className="block text-sm sm:text-base font-bold text-ish-gold mt-0.5">
                  {activeDistrictData.roi}
                </span>
              </div>
            </div>

            <p className="text-base text-ish-white/90 leading-relaxed mb-8 max-w-4xl">
              {activeDistrictData.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-ish-gold font-bold mb-3">
                  أهم المزايا والخصائص التخطيطية:
                </h4>
                {activeDistrictData.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ish-gray-light">
                    <div className="w-5 h-5 rounded-full bg-ish-gold/15 border border-ish-gold/30 flex items-center justify-center text-ish-gold shrink-0 text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-ish-gold font-bold mb-2">
                    الاستثمار الموصى به في هذه المنطقة:
                  </h4>
                  <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed">
                    {activeDistrictData.suitableFor}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-ish-gray">لديك أرض بهذه المنطقة؟</span>
                  <Link
                    href="/develop-your-land"
                    className="btn-gold rounded-full px-5 py-2 text-xs font-bold hover:scale-105 transition-transform inline-block"
                  >
                    طوّر أرضك معنا الآن
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Licensing & Building Code Guide */}
      <section className="py-20 w-full bg-[var(--bg-secondary)] border-b border-white/5" id="licensing">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>خبرة +2000 رخصة معتمدة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              دليل استخراج رخص البناء والاشتراطات الرسمية
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg">
              خطوات إنهاء التراخيص في جهاز مدينة السادات من الألف إلى الياء، دون الوقوع في أخطاء إدارية تعطل بدء التنفيذ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              {
                num: '01',
                title: 'شهادة الصلاحية والموقف العقاري',
                desc: 'مراجعة الموقف المالي للأرض في جهاز المدينة واستخراج بيان صلاحية الموقع للبناء وتحديد الارتفاعات والردود القانونية.'
              },
              {
                num: '02',
                title: 'إعداد الملف الهندسي والمخططات',
                desc: 'رسم المخططات المعمارية والإنشائية وشبكات الكهرباء والصحي ومطابقتها للكود المصري واشتراطات هيئة المجتمعات العمرانية.'
              },
              {
                num: '03',
                title: 'اعتماد المجمعة والتأمين',
                desc: 'مراجعة الرسومات لدى المجمعة العشرية للتأمين واستخراج وثيقة التأمين على الأعمال الإنشائية لحماية المنشأة قانونياً.'
              },
              {
                num: '04',
                title: 'صدور الترخيص وبدء التنفيذ',
                desc: 'سداد رسوم الجهاز واستلام الترخيص المعتمد وكتاب استلام الموقع لتنطلق أعمال الحفر والخرسانات فوراً دون أي مخالفة.'
              }
            ].map((step, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-ish-gold/50 transition-all duration-300">
                <span className="text-2xl font-black text-ish-gold font-mono block mb-3">{step.num}</span>
                <h3 className="text-base font-bold text-ish-white mb-2 font-headline">{step.title}</h3>
                <p className="text-xs text-ish-gray-light leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Interactive FAQ Accordion */}
      <section className="py-20 w-full bg-[var(--bg-primary)] border-b border-white/5" id="faq">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>إجابات وافية وموثقة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mb-4">
              بنك الأسئلة الشائعة والقانونية
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />
            <p className="text-ish-gray-light text-base sm:text-lg">
              إجابات مفصلة حول كل ما يخص تراخيص الأراضي، شروط جهاز السادات، اتفاقيات المشاركة، وضمانات شراء الوحدات.
            </p>
          </div>

          {/* FAQ Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFaqTab(cat.id)}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border flex items-center gap-2 ${
                  activeFaqTab === cat.id
                    ? 'bg-ish-gold text-ish-black border-ish-gold shadow-lg shadow-ish-gold/25 scale-105'
                    : 'bg-white/5 text-ish-gray-light border-white/10 hover:border-ish-gold/40 hover:text-white'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeFaqTab === cat.id ? 'bg-black/20 text-ish-black' : 'bg-white/10 text-ish-gold'}`}>
                  {cat.questions.length}
                </span>
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {activeFaqCategory.questions.map((faq, index) => {
              const key = `${activeFaqTab}-${index}`;
              const isOpen = !!openFaqIndices[key];

              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(key)}
                    className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none hover:bg-white/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-ish-white leading-snug font-headline">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-ish-gold/30 flex items-center justify-center text-ish-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-ish-gold text-ish-black' : 'bg-ish-gold/10'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-ish-gray-light leading-relaxed border-t border-white/5 pt-4 font-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Call to Action Finale */}
      <section className="py-20 w-full bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-primary)]">
        <div className="section-container max-w-4xl text-center">
          <div className="glass-card rounded-2xl p-8 sm:p-14 border border-ish-gold/30 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold animate-pulse" />
              <span>فريقنا الهندسي في خدمتك</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4">
              هل لديك استفسار محدد حول أرض أو استثمار في مدينة السادات؟
            </h2>

            <p className="text-sm sm:text-base text-ish-gray-light max-w-2xl mx-auto mb-8 leading-relaxed">
              يسعدنا استقبالك في مقر شركة إشبيلية (جنة مول - الدور الثالث) أو الرد على استفسارك هاتفياً وعبر واتساب مع استشاريين متخصصين في لوائح وتراخيص جهاز المدينة.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/201010722349?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D9%82%D8%B1%D8%A3%D8%AA%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1%20%D9%88%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%AD%D9%88%D9%84%20%D9%82%D8%B7%D8%B9%D8%A9%20%D8%A3%D8%B1%D8%B6%20/%20%D9%88%D8%AD%D8%AF%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold shadow-xl shadow-ish-gold/25 inline-flex items-center gap-2"
              >
                <span>محادثة واتساب فورية مع المستشار الهندسي</span>
              </a>

              <Link
                href="/develop-your-land"
                className="btn-outline rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold shadow-lg inline-block"
              >
                طلب دراسة جدوى لأرضك
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
