'use client';

import { useState, useId } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';

// Service types and interfaces
interface ServiceItem {
  id: string;
  number: string;
  category: ('landowners' | 'investors' | 'homebuyers' | 'contracting')[];
  titleAr: string;
  titleEn: string;
  taglineAr: string;
  taglineEn: string;
  descriptionAr: string;
  descriptionEn: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
  standardsAr: string[];
  standardsEn: string[];
  ctaTextAr: string;
  ctaTextEn: string;
  whatsappMessageAr: string;
  whatsappMessageEn: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'development',
    number: '01',
    category: ['landowners', 'investors'],
    titleAr: 'التطوير العقاري الشامل',
    titleEn: 'Comprehensive Real Estate Development',
    taglineAr: 'من دراسة الفكرة والجدوى حتى تسليم الوحدات وتشغيل المرافق',
    taglineEn: 'From initial feasibility to turnkey handover and asset operation',
    descriptionAr:
      'إدارة متكاملة لدورة حياة المشروع العقاري السكني والتجاري. نتولى دراسة السوق، التخطيط الاستثماري، التراخيص، وإدارة دورة المبيعات مع تحقيق أقصى عائد مستدام لكل متر مربع.',
    descriptionEn:
      'Full lifecycle management of residential and commercial developments. We handle market research, investment planning, licensing, construction, and sales for maximum sustainable returns.',
    deliverablesAr: [
      'دراسة جدوى تسويقية ومالية متكاملة',
      'مخططات هندسية معتمدة من جهاز مدينة السادات',
      'إدارة كاملة لعمليات البيع والتسويق',
      'تسليم كامل المرافق وإدارة اتحاد الشاغلين',
    ],
    deliverablesEn: [
      'Full financial and market feasibility study',
      'Approved engineering master plans from Sadat Authority',
      'Complete marketing & sales lifecycle management',
      'Utility connection & facility management handover',
    ],
    standardsAr: ['أعلى كود عمراني معتمد', 'عوائد استثمارية محسوبة', 'أمان قانوني تعاقدي'],
    standardsEn: ['Approved urban planning code', 'Calculated ROI models', 'Total contractual security'],
    ctaTextAr: 'طلب دراسة تطوير مشروع',
    ctaTextEn: 'Request Development Study',
    whatsappMessageAr: 'مرحباً، أود الاستفسار عن خدمة التطوير العقاري الشامل لمشروع في مدينة السادات.',
    whatsappMessageEn: 'Hello, I would like to inquire about full-cycle real estate development in Sadat City.',
  },
  {
    id: 'construction',
    number: '02',
    category: ['contracting', 'landowners'],
    titleAr: 'البناء والتشييد الإنشائي',
    titleEn: 'General Contracting & Structural Construction',
    taglineAr: 'تنفيذ خرساني وهندسي صارم يطابق الكود المصري للزلازل والأحمال',
    taglineEn: 'Rigorous structural engineering adhering to Egyptian Building & Seismic Codes',
    descriptionAr:
      'تنفيذ الهياكل الخرسانية وأعمال البناء بأعلى مواصفات هندسية. نستخدم خرسانة جاهزة معتمدة تخضع لاختبارات كسر المكعبات في معامل معتمدة، مع حديد تسليح مطابق ومراقبة جودة صارمة في الموقع.',
    descriptionEn:
      'Execution of reinforced concrete frames and masonry with high-grade engineering rigor. We utilize certified ready-mix concrete tested in authorized labs, verified rebar, and continuous site QA/QC.',
    deliverablesAr: [
      'هيكل خرساني متكامل بأعلى درجات مقاومة الضغط',
      'تقارير دورية معتمدة لاختبارات جودة الخرسانة',
      'تنفيذ مطابق للرسومات الإنشائية بدون تفاوتات',
      'جدول زمني ملزم بمراحل صب محددة',
    ],
    deliverablesEn: [
      'Complete reinforced concrete structure with optimal stress resistance',
      'Certified lab test reports for all concrete batches',
      'Zero-tolerance execution matching structural drawings',
      'Binding timeline with milestone site inspections',
    ],
    standardsAr: ['خرسانة جاهزة معتمدة (B250 - B350)', 'حديد تسليح عز / السويس', 'إشراف استشاري دائم'],
    standardsEn: ['Certified ready-mix concrete', 'Ezz / Suez certified steel', 'Continuous consultant supervision'],
    ctaTextAr: 'طلب مقايسة أعمال إنشائية',
    ctaTextEn: 'Request Structural Quotation',
    whatsappMessageAr: 'مرحباً، أريد طلب مقايسة لبناء هيكل خرساني وتشييد لموقعي بمدينة السادات.',
    whatsappMessageEn: 'Hello, I would like to request a structural construction quotation in Sadat City.',
  },
  {
    id: 'licensing',
    number: '03',
    category: ['contracting', 'landowners'],
    titleAr: 'استخراج التراخيص والموافقات الرسمية',
    titleEn: 'Official Building Permits & Licensure',
    taglineAr: 'أكثر من 2000 رخصة معتمدة في جهاز مدينة السادات بسجل ناصع 100%',
    taglineEn: 'Over 2,000 approved licenses in Sadat City with a 100% spotless track record',
    descriptionAr:
      'نرفع عن كاهلك عبء الإجراءات الإدارية والبيروقراطية. نقوم بإعداد الرسومات التنفيذية، استخراج صلاحية الموقع، رخصة البناء، وموافقات الحماية المدنية والمجمعة العشرية بسرعة قياسية وأمان قانوني تام.',
    descriptionEn:
      'We remove bureaucratic friction entirely. We prepare working drawings, site validity clearances, building permits, civil defense approvals, and insurance warranties with unmatched speed and safety.',
    deliverablesAr: [
      'رخصة بناء رسمية صادرة ومعتمدة من جهاز السادات',
      'شهادة صلاحية الموقع للبناء والمطابقة التخطيطية',
      'ملف مجمعة عشرية ووثيقة تأمين معتمدة',
      'شهادة مطابقة بيئية وحماية مدنية إن لزم الأمر',
    ],
    deliverablesEn: [
      'Official building permit issued by Sadat City Authority',
      'Site validity & zoning clearance certificate',
      'Decennial insurance policy & approved dossier',
      'Civil defense & environmental clearances',
    ],
    standardsAr: ['صفر مخالفات أو ردود', 'التزام باشتراطات هيئة المجتمعات', 'سرعة إنجاز قياسية'],
    standardsEn: ['Zero setback infractions', 'Strict NUCA regulations compliance', 'Record processing speed'],
    ctaTextAr: 'استشارة تراخيص فورية',
    ctaTextEn: 'Inquire About Licensing',
    whatsappMessageAr: 'مرحباً، لدي قطعة أرض وأحتاج إنهاء إجراءات رخصة البناء في جهاز مدينة السادات.',
    whatsappMessageEn: 'Hello, I have a land plot and need assistance securing building permits in Sadat City.',
  },
  {
    id: 'architecture',
    number: '04',
    category: ['homebuyers', 'landowners'],
    titleAr: 'التصميم المعماري والواجهات الفاخرة',
    titleEn: 'Architectural & Luxury Facade Design',
    taglineAr: 'توازن بصري، خصوصية تامة، وتوزيع مساحات ذكي يمنع أي هدر داخلي',
    taglineEn: 'Visual harmony, absolute privacy, and intelligent layout optimization',
    descriptionAr:
      'نصمم واجهات كلاسيكية وعصرية تمنح المبنى هيبة وفخامة دائمة، مع تصميم معماري داخلي يراعي مسارات الحركة، التهوية والإضاءة الطبيعية، والتوزيع الذي يعطي كل متر مربع قيمته واستقلاليته.',
    descriptionEn:
      'We design classical and contemporary facades that imbue buildings with enduring prestige, alongside internal floorplans engineered for natural ventilation, sunlight, and zero wasted corridors.',
    deliverablesAr: [
      'تصميمات ثلاثية الأبعاد (3D Renders) تفصيلية للواجهات',
      'مخططات معمارية تنفيذية كاملة لكافة الأدوار',
      'لوحات توزيع الإضاءة، التكييفات، والمسارات الخدمية',
      'جدول تفصيلي بالمواد وألوان الدهانات الخارجية',
    ],
    deliverablesEn: [
      'High-resolution 3D renders of all facades',
      'Comprehensive working architectural floorplans',
      'HVAC, lighting, and service routing blueprints',
      'Detailed exterior finish & material specification schedule',
    ],
    standardsAr: ['فخامة نيوكلاسيك وعصرية', 'استغلال 100% للمساحة', 'مراعاة اتجاه الرياح والشمس'],
    standardsEn: ['Neoclassical & contemporary elegance', '100% spatial efficiency', 'Optimized solar & wind orientation'],
    ctaTextAr: 'طلب تصميم معماري',
    ctaTextEn: 'Request Architectural Design',
    whatsappMessageAr: 'مرحباً، أرغب في استشارة لتصميم واجهات ومخططات معمارية لمبنى سكني في السادات.',
    whatsappMessageEn: 'Hello, I would like an architectural consultation for a residential building in Sadat City.',
  },
  {
    id: 'finishes',
    number: '05',
    category: ['homebuyers', 'contracting'],
    titleAr: 'التشطيبات الخارجية والداخلية الفندقية',
    titleEn: 'Exterior & Interior Hotel-Grade Finishes',
    taglineAr: 'خامات تدوم طويلاً: رخام طبيعي، دهانات مقاومة للعوامل الجوية، ومصاعد إيطالية',
    taglineEn: 'Enduring materials: natural marble, weather-resistant coatings, and Italian elevators',
    descriptionAr:
      'المبنى الفاخر يُعرف من تفاصيله. نستخدم دهانات خارجية متطورة مقاومة للحرارة والرطوبة والأملاح، ومداخل رخام طبيعي إمبراطوري مضاءة بشكل غير مباشر، ومصاعد مستوردة بأعلى معايير الأمان والهدوء.',
    descriptionEn:
      'Prestige is reflected in the details. We utilize weather-resistant external coatings resisting heat and moisture, imperial marble lobbies with indirect lighting, and whisper-quiet imported elevators.',
    deliverablesAr: [
      'واجهات منتهية بأحدث خامات الجرافيت والأحجار والكرانيش',
      'مداخل وسلالم من الرخام والجرانيت الطبيعي الفاخر',
      'تركيب مصاعد كهربائية أوروبية بشهادة ضمان وسرعة فائقة',
      'إنارة معمارية خارجية مدروسة لإبراز جمال المبنى ليلاً',
    ],
    deliverablesEn: [
      'Facades finished with durable stone, graphite, and cornices',
      'Lobbies & staircases in polished natural marble & granite',
      'European elevators installed with safety certificates',
      'Architectural LED illumination highlighting night aesthetics',
    ],
    standardsAr: ['رخام مستورد ومحلي نخب أول', 'دهانات مقاومة للتقلبات الجوية', 'عزل مائي تام للواجهات'],
    standardsEn: ['Premium natural marble', 'Weatherproof exterior coatings', 'Complete facade water sealing'],
    ctaTextAr: 'طلب مواصفات التشطيب',
    ctaTextEn: 'Request Finish Specs',
    whatsappMessageAr: 'مرحباً، أود معرفة مواصفات وباقات تشطيب الواجهات والمداخل في مشروعات إشبيلية.',
    whatsappMessageEn: 'Hello, I want to learn more about facade and lobby finish packages by Ishbilia.',
  },
  {
    id: 'management',
    number: '06',
    category: ['contracting', 'investors'],
    titleAr: 'إدارة المشروعات والإشراف الهندسي',
    titleEn: 'Project Management & Construction Supervision',
    taglineAr: 'رقابة ميدانية يومية وإدارة ميزانية صارمة تضمن تسليم المشروع في موعده',
    taglineEn: 'Daily site oversight and strict cost controls ensuring on-schedule completion',
    descriptionAr:
      'نظام إدارة مشاريع احترافي يضمن التنسيق بين كافة بنود العمل (الحفر، الخرسانات، المباني، التأسيسات، التشطيبات). مهندسونا الاستشاريون متواجدون بالموقع لضمان عدم حدوث أي انحراف عن المخطط أو الميزانية.',
    descriptionEn:
      'Professional project management harmonizing all construction phases (excavation, concrete, MEP, finishes). Resident engineers oversee site activities to prevent schedule drift and cost overruns.',
    deliverablesAr: [
      'تقارير دورية موثقة بالصور عن نسبة الإنجاز الفعلي',
      'إدارة المشتريات ومطابقة الخامات الموردة للموقع',
      'مراقبة الجدول الزمني والإنفاق المالي لكل مرحلة',
      'محاضر استلام هندسية لكل بند قبل الانتقال لما بعده',
    ],
    deliverablesEn: [
      'Periodic progress reports with photographic documentation',
      'Procurement management and material verification on site',
      'Milestone timeline and budget tracking',
      'Engineering sign-off certificates for each work phase',
    ],
    standardsAr: ['نظام إدارة جودة متكامل', 'إشراف استشاري مقيم', 'شفافية مالية تامة'],
    standardsEn: ['Integrated QA/QC system', 'Resident supervisory engineers', 'Transparent financial reporting'],
    ctaTextAr: 'طلب إدارة وإشراف هندسي',
    ctaTextEn: 'Request Site Management',
    whatsappMessageAr: 'مرحباً، لدي مشروع قيد التنفيذ وأحتاج إشرافاً وإدارة هندسية متخصصة في مدينة السادات.',
    whatsappMessageEn: 'Hello, I have an ongoing construction site and need specialized project supervision in Sadat City.',
  },
  {
    id: 'land-partnership',
    number: '07',
    category: ['landowners', 'investors'],
    titleAr: 'تطوير ومشاركة الأراضي (طوّر أرضك معنا)',
    titleEn: 'Joint-Venture Land Development',
    taglineAr: 'حوّل أرضك إلى صرح سكني فاخر بأعلى نسبة أرباح دون أي مجهود تنفيذي منك',
    taglineEn: 'Transform your land into a luxury landmark with peak profit sharing and zero stress',
    descriptionAr:
      'نموذج الشراكة العادل والمثبت نجاحه في مدينة السادات. تقدم الأرض ونتولى نحن التمويل، التراخيص، التصميم، البناء، والتسويق، مع توزيع عادل للوحدات والأرباح بعقود قانونية موثقة تضمن حقك بالكامل.',
    descriptionEn:
      'The proven, equitable joint-venture model in Sadat City. You contribute the land, while we finance, license, design, construct, and sell—sharing units or returns under ironclad legal contracts.',
    deliverablesAr: [
      'عقد شراكة قانوني موثق ومفصل يحدد حصص كل طرف بدقة',
      'تحمل إشبيلية لكافة تكاليف التراخيص والرسومات والتنفيذ',
      'تسليم حصتك من الوحدات بتشطيبات واجهات فندقية ومرافق كاملة',
      'حساب بنكي مشترك وتقارير دورية واضحة للشركاء',
    ],
    deliverablesEn: [
      'Notarized, crystal-clear joint-venture agreement',
      'Ishbilia covers 100% of licensing, design, and construction costs',
      'Handover of your unit share with premium facades & utilities',
      'Transparent escrow accounts and routine partner reporting',
    ],
    standardsAr: ['شراكة عادلة ومثبتة', 'صفر مخاطرة تشغيلية للمالك', 'حماية الملكية 100%'],
    standardsEn: ['Equitable proven partnership', 'Zero operational risk for owner', '100% property protection'],
    ctaTextAr: 'تقديم أرض للشراكة',
    ctaTextEn: 'Submit Land for Partnership',
    whatsappMessageAr: 'مرحباً، أمتلك قطعة أرض في السادات وأرغب في مناقشة تفاصيل المشاركة والتطوير العقاري معكم.',
    whatsappMessageEn: 'Hello, I own a land parcel in Sadat City and would like to explore a development partnership.',
  },
  {
    id: 'advisory',
    number: '08',
    category: ['investors', 'homebuyers'],
    titleAr: 'الاستشارات ودراسات الجدوى العقارية',
    titleEn: 'Real Estate Feasibility & Investment Advisory',
    taglineAr: 'بيانات حقيقية من واقع السوق تضمن توجيه رأس مالك نحو أعلى الفرص عائداً وأماناً',
    taglineEn: 'Real ground data ensuring your capital is directed towards highest yield and safety',
    descriptionAr:
      'خبرة 20 عاماً في جغرافية مدينة السادات ومستقبل التوسع العمراني فيها نضعها بين يديك. نساعدك في تقييم الأراضي، توقع أسعار المتر، اختيار أفضل المناطق السكنية والاستثمارية، وتوقيت الشراء والبيع.',
    descriptionEn:
      'Two decades of mastery across Sadat City geography and future growth corridors at your disposal. We assist with land valuation, price-per-meter forecasting, prime neighborhood selection, and exit timing.',
    deliverablesAr: [
      'تقرير دراسة جدوى استثمارية شامل (ROI & Payback Period)',
      'تحليل مقارن للأسعار في مختلف مناطق السادات (14، 21، 29، إلخ)',
      'استشارات قانونية للتأكد من سلامة موقف الأرض أو الوحدة',
      'ترشيح أفضل الفرص الحصرية المتاحة للاستثمار الفوري',
    ],
    deliverablesEn: [
      'Comprehensive ROI and capital payback feasibility report',
      'Comparative pricing index across Sadat districts (Zones 14, 21, 29, etc.)',
      'Legal verification ensuring clean title and regulatory status',
      'Curated exclusive investment opportunities ready for acquisition',
    ],
    standardsAr: ['أرقام واقعية بلا مبالغة', 'رؤية مستقبلية للمدينة', 'سرية استثمارية تامة'],
    standardsEn: ['Grounded metrics without hype', 'Forward-looking urban vision', 'Strict client confidentiality'],
    ctaTextAr: 'حجز جلسة استشارة استثمارية',
    ctaTextEn: 'Book Investment Session',
    whatsappMessageAr: 'مرحباً، أريد حجز جلسة استشارة عقارية لمناقشة فرص الاستثمار في مدينة السادات.',
    whatsappMessageEn: 'Hello, I would like to book a consultation regarding investment opportunities in Sadat City.',
  },
];

// Comparison data: Traditional contractor vs Ishbilia
const comparisonItems = [
  {
    aspectAr: 'التراخيص والموافقات',
    aspectEn: 'Licensing & Permits',
    traditionalAr: 'احتمال وجود مخالفات بنائية، تعدي على الردود، أو توقف الأعمال لغياب الرخصة.',
    traditionalEn: 'Risk of setback violations, building without permits, or costly regulatory stops.',
    ishbiliaAr: 'رخصة بناء رسمية 100% صادرة من جهاز السادات قبل صب أول خرسانة.',
    ishbiliaEn: '100% verified building permit from Sadat Authority before first concrete pour.',
  },
  {
    aspectAr: 'جودة واختبارات الخرسانة',
    aspectEn: 'Concrete Quality & Testing',
    traditionalAr: 'خلط يدوي أو اعتماد على توريد غير مفحوص معملياً لتقليل التكلفة.',
    traditionalEn: 'Manual mixing or uncertified batching without compressive strength tests.',
    ishbiliaAr: 'خرسانة جاهزة معتمدة تخضع لاختبارات كسر مكعبات معملية موثقة.',
    ishbiliaEn: 'Certified ready-mix concrete backed by accredited laboratory crushing reports.',
  },
  {
    aspectAr: 'الالتزام المالي والميزانية',
    aspectEn: 'Budget & Cost Transparency',
    traditionalAr: 'مقايسات وهمية ومطالبات مستمرة بمبالغ إضافية أثناء العمل.',
    traditionalEn: 'Vague estimates leading to repeated unforeseen cost demands mid-construction.',
    ishbiliaAr: 'عقود هندسية واضحة ومقايسة تفصيلية ملزمة دون مفاجآت مالية.',
    ishbiliaEn: 'Transparent binding engineering contracts and itemized bills of quantities.',
  },
  {
    aspectAr: 'مواعيد وجدول التسليم',
    aspectEn: 'Timeline & Punctuality',
    traditionalAr: 'تأخيرات متكررة تمتد لشهور وسنوات دون تعويض أو رقابة.',
    traditionalEn: 'Chronic project delays stretching over months and years with no recourse.',
    ishbiliaAr: 'جدول زمني محدد بمراحل تسليم موثقة وغرامات تأخير ملزمة قانونياً.',
    ishbiliaEn: 'Fixed timeline with milestone deliverables and binding contractual clauses.',
  },
  {
    aspectAr: 'المرافق والعدادات الرسمية',
    aspectEn: 'Utilities & Handover',
    traditionalAr: 'ترك المالك يواجه بمفرده مراجعات الكهرباء والماء ومشاكل الشبكات.',
    traditionalEn: 'Client is left to struggle through utility connections and grid issues.',
    ishbiliaAr: 'تسليم كامل العدادات، المداخل الرخام، المصاعد، وشبكات الصرف جاهزة 100%.',
    ishbiliaEn: 'Handover complete with official electric/water meters, elevators, and lobbies.',
  },
  {
    aspectAr: 'خدمة ما بعد البيع والضمان',
    aspectEn: 'After-Sales & Warranty',
    traditionalAr: 'انقطاع تام للتواصل بمجرد استلام الدفعة الأخيرة وعدم تحمل المسؤولية.',
    traditionalEn: 'Complete radio silence after final payment with zero structural warranty.',
    ishbiliaAr: 'فريق صيانة دورية، ضمانات إنشائية معتمدة، ومتابعة لاتحاد الشاغلين.',
    ishbiliaEn: 'Periodic maintenance team, certified warranties, and ongoing HOA support.',
  },
];

// 5 Engineering standards
const engineeringStandards = [
  {
    number: '01',
    titleAr: 'مطابقة الكود المصري للأحمال والزلازل',
    titleEn: 'Egyptian Seismic & Load Code Compliance',
    descAr: 'تصميم القواعد والأساسات والأعمدة لتحمل أقصى درجات الأمان الإنشائي.',
    descEn: 'Foundations, footings, and shear columns designed for peak structural safety.',
  },
  {
    number: '02',
    titleAr: 'حديد تسليح معتمد عالي الإجهاد',
    titleEn: 'Certified High-Tensile Steel Rebar',
    descAr: 'استخدام حديد معتمد خالٍ من الصدأ والتآكل من كبرى المصانع الوطنية (عز / السويس).',
    descEn: 'Rust-free certified high-yield rebar sourced directly from top national mills.',
  },
  {
    number: '03',
    titleAr: 'عزل مائي وحراري متعدد الطبقات',
    titleEn: 'Multi-Layer Moisture & Thermal Insulation',
    descAr: 'عزل تام للأسطح والحمامات وخزانات المياه بأفضل لفائف البيتومين والعوازل المعتمدة.',
    descEn: 'Full waterproofing for roofs, bathrooms, and basements using premium membranes.',
  },
  {
    number: '04',
    titleAr: 'تأسيسات كهروميكانيكية بضمانات معتمدة',
    titleEn: 'Certified MEP Installations with Warranties',
    descAr: 'مواسير وتمديدات معتمدة (الشريف / السويدي) تخضع لاختبارات ضغط المياه والعزل الكهربي.',
    descEn: 'Approved piping and cabling tested under hydrostatic pressure and certified.',
  },
  {
    number: '05',
    titleAr: 'مداخل رخام طبيعي ومصاعد إيطالية',
    titleEn: 'Natural Marble Lobbies & Italian Elevators',
    descAr: 'رخام إمبراطوري وتشطيبات فندقية أنيقة ومصاعد مجهزة بأحدث أنظمة التوقف الآمن.',
    descEn: 'Imperial natural marble lobbies and elevators equipped with emergency landing systems.',
  },
];

// FAQs Data
const faqsData = [
  {
    qAr: 'كيف تضمن إشبيلية عدم وجود أي مخالفات بنائية في مشروعاتها؟',
    qEn: 'How does Ishbilia guarantee zero building code violations?',
    aAr: 'نبدأ أي مشروع بعد استخراج رخصة بناء رسمية صادرة من جهاز تنمية مدينة السادات، ونلتزم بنسب البناء والردود والارتفاعات المحددة بدقة متناهية. لا نقوم بأي تعديل يخالف الرخصة، مما يضمن لعملائنا سلامة أوراقهم وصحة الموقف القانوني لوحداتهم للأبد.',
    aEn: 'Every project breaks ground only after securing official building permits from Sadat City Authority. We strictly adhere to zoning setbacks and height limits. Zero illegal alterations guarantees lifelong title security.',
  },
  {
    qAr: 'ما هي آلية الشراكة وتطوير الأراضي مع إشبيلية؟',
    qEn: 'What is the joint-venture land development process with Ishbilia?',
    aAr: 'يقوم فريقنا الهندسي بمعاينة الأرض وعمل دراسة جدوى فنية وتصميم أولي لعرضه على المالك. عند الاتفاق، يُصاغ عقد شراكة قانوني موثق يحدد حصة المالك من الوحدات أو الأرباح، وتتولى إشبيلية تمويل وبناء وتشطيب المشروع بالكامل حتى استلام المفاتيح والعدادات.',
    aEn: 'Our engineering team surveys your plot, crafts a feasibility plan, and drafts architectural concepts. Upon agreement, a legally binding contract allocates your unit share. Ishbilia funds, licenses, constructs, and finishes the entire development.',
  },
  {
    qAr: 'هل يمكن التعاقد معكم لتنفيذ مرحلة محددة فقط (مثل الهيكل الخرساني أو الواجهات)؟',
    qEn: 'Can I contract Ishbilia for specific stages (e.g. concrete frame or facades only)?',
    aAr: 'نعم بكل تأكيد. نقدم خدمات المقاولات العامة المتخصصة؛ يمكنك التعاقد معنا على تنفيذ الهيكل الخرساني فقط، أو تشطيب الواجهات والمداخل، أو إدارة الإشراف الهندسي واستخراج التراخيص، مع الحفاظ على نفس معايير الجودة والالتزام بالجدول الزمني.',
    aEn: 'Absolutely. We offer tailored contracting packages: concrete frame only, exterior facade and lobby finishing, or licensing and site supervision—all adhering to our rigid quality benchmarks.',
  },
  {
    qAr: 'ما هي مدة تنفيذ العمارة السكنية الكاملة في مدينة السادات؟',
    qEn: 'What is the typical completion timeframe for a residential building?',
    aAr: 'يستغرق تنفيذ العمارة السكنية المكونة من أرضي و3 أدوار متكررة عادة بين 10 إلى 14 شهراً، تشمل صب الهيكل الخرساني بالكامل، أعمال المباني، تشطيب الواجهات الفاخرة، المداخل الرخام، وتركيب المصاعد والعدادات الرسمية.',
    aEn: 'A typical multi-story residential building (ground + 3 floors) takes approximately 10 to 14 months, including complete concrete works, masonry, facade finishing, marble lobbies, elevators, and utility hookups.',
  },
  {
    qAr: 'كيف تضمن الشركة الالتزام بالميزانية المتفق عليها دون زيادة؟',
    qEn: 'How does Ishbilia prevent budget overruns during construction?',
    aAr: 'نعمل بنظام المقايسة الهندسية المحددة والبنود الواضحة في العقد. نقوم بدراسة أسعار الخامات وحجزها مقدماً بالتنسيق مع الموردين المعتمدين لتفادي تقلبات السوق، ونقدم للعميل تقارير مالية شفافة عن كل مرحلة.',
    aEn: 'We operate on precise bills of quantities and explicit contractual milestones. Materials are pre-hedged with certified suppliers to buffer against market inflation, ensuring zero unexpected financial demands.',
  },
];

export default function ServicesPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  // State for audience filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // State for project estimator
  const [estService, setEstService] = useState<string>('partnership');
  const [estArea, setEstArea] = useState<number>(500);

  // State for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Accessible IDs for tabs
  const tabListId = useId();

  // Filtered services
  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === 'all') return true;
    return service.category.includes(selectedCategory as any);
  });

  // Calculation logic for quick estimator
  const getEstimatorResult = () => {
    switch (estService) {
      case 'partnership':
        return {
          titleAr: 'تطوير وشراكة أرض بنظام إشبيلية المتكامل',
          titleEn: 'Joint-Venture Land Development Program',
          timeframeAr: '10 – 14 شهراً حتى تسليم الوحدات والعدادات',
          timeframeEn: '10 – 14 months to complete unit handover',
          stepsAr: [
            'معاينة ميدانية فورية ودراسة التربة والموقع',
            'إعداد التصميمات المعمارية واستخراج رخصة البناء الرسمية',
            'تنفيذ الهيكل الخرساني والتشطيبات الفندقية بتمويل إشبيلية',
            'تسليم حصة المالك من الوحدات السكنية جاهزة للمعيشة أو البيع',
          ],
          stepsEn: [
            'Immediate site survey & soil testing',
            'Architectural blueprinting & official permit issuance',
            'Concrete execution & luxury finishing funded by Ishbilia',
            'Handover of owner unit quota with full utility connections',
          ],
        };
      case 'construction':
        return {
          titleAr: 'مقاولات تنفيذ إنشائي وهيكل خرساني',
          titleEn: 'Full Structural & Concrete Execution',
          timeframeAr: '4 – 6 أشهر للهيكل الخرساني والمباني بالكامل',
          timeframeEn: '4 – 6 months for complete concrete structure & masonry',
          stepsAr: [
            'مراجعة المخططات الإنشائية ومطابقة الكود المصري',
            'حفر الأساسات والإحلال وصب الخرسانة العادية والمسلحة',
            'صب الأعمدة والأسقف واختبارات كسر المكعبات المعملية',
            'بناء الحوائط وأعمال العزل المائي الشامل للقواعد والأسطح',
          ],
          stepsEn: [
            'Structural drawing review & code compliance verification',
            'Excavation, replacement soil, plain & reinforced footings',
            'Columns, slabs, and certified lab cube test verification',
            'Masonry walls & thorough foundation/roof waterproofing',
          ],
        };
      case 'facades':
        return {
          titleAr: 'تشطيب واجهات فندقية ومداخل رخام ومصاعد',
          titleEn: 'Hotel-Grade Facades, Marble Lobbies & Elevators',
          timeframeAr: '2 – 3 أشهر للواجهات والمدخل بالكامل',
          timeframeEn: '2 – 3 months for exterior facades and entrance lobby',
          stepsAr: [
            'تصميم معماري 3D للواجهات والمدخل قبل البدء',
            'تأسيس دهانات مقاومة للعوامل الجوية وأحجار وديكورات نيوكلاسيك',
            'تشطيب المدخل والسلالم بالرخام والجرانيت الطبيعي مع الإضاءة',
            'تركيب واختبار المصعد الكهربائي المستورد وتسليمه جاهزاً',
          ],
          stepsEn: [
            '3D architectural renders of facade and entrance before work',
            'Application of weather-resistant exterior coatings & stone accents',
            'Lobby and stair finishing with polished marble and ambient lights',
            'Installation, commissioning & handover of imported elevator',
          ],
        };
      case 'licensing':
        return {
          titleAr: 'استخراج رخصة البناء والموافقات التنظيمية',
          titleEn: 'Building Permit Issuance & Regulatory Approvals',
          timeframeAr: '3 – 6 أسابيع حتى استلام الرخصة المعتمدة',
          timeframeEn: '3 – 6 weeks to final official license receipt',
          stepsAr: [
            'استخراج شهادة صلاحية الموقع للبناء من جهاز السادات',
            'إعداد المخططات الهندسية المعمارية والإنشائية والصحية والكهربية',
            'تقديم الملف للمجمعة العشرية واستخراج وثيقة التأمين',
            'استلام رخصة البناء الرسمية دون أي تأخير أو مخالفات',
          ],
          stepsEn: [
            'Securing site zoning validity clearance from Sadat Authority',
            'Drafting architectural, structural, sanitary, and MEP blueprints',
            'Filing with the Decennial Insurance Bureau for warranty',
            'Handing over the official certified building permit',
          ],
        };
      default:
        return {
          titleAr: 'استشارة وتطوير متكامل',
          titleEn: 'Integrated Development Consultation',
          timeframeAr: 'حسب حجم ومواصفات المشروع',
          timeframeEn: 'Customized based on project scale',
          stepsAr: ['معاينة الموقع', 'إعداد المقايسة', 'التنفيذ', 'التسليم'],
          stepsEn: ['Site survey', 'Quotation', 'Execution', 'Handover'],
        };
    }
  };

  const estResult = getEstimatorResult();

  return (
    <div className="bg-ish-black text-ish-white min-h-screen selection:bg-ish-gold selection:text-black">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION                                                */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-ish-black via-[#0D1522] to-ish-black border-b border-white/10">
        {/* Subtle architectural background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Image
            src="/images/hero-cinematic.jpg"
            alt="Ishbilia Services"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ish-black via-ish-black/80 to-ish-black/90" />
        </div>

        {/* Ambient gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-ish-gold/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-ish-gold/5">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>
              {isAr
                ? 'منظومة هندسية وتنفيذية شاملة تحت سقف واحد'
                : 'Integrated Engineering & Execution Ecosystem Under One Roof'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-ish-white mb-8 tracking-tight leading-[1.15]">
            {isAr ? (
              <>
                من الفكرة إلى المفتاح... <br className="hidden sm:inline" />
                <span className="gold-gradient-text">خدمات هندسية تبني القيمة</span> وتحمي استثمارك
              </>
            ) : (
              <>
                From Blueprint to Key Handover... <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Engineering Services</span> That Guard Your Assets
              </>
            )}
          </h1>

          <div className="gold-line max-w-xs mx-auto mb-8" />

          <p className="text-ish-gray-light text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal mb-10 text-balance">
            {isAr
              ? 'نضع خبرة أكثر من 20 عاماً في مدينة السادات وسجل يتجاوز 2000 رخصة معتمدة في خدمتك؛ لنمنح مشروعك الدقة الإنشائية، الفخامة المعمارية، والأمان القانوني الكامل.'
              : 'Two decades of field mastery in Sadat City with over 2,000 approved licenses, delivering structural precision, luxury architecture, and absolute legal safety for your development.'}
          </p>

          {/* Quick Trust Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-center">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black gold-gradient-text block mb-0.5">+2000</span>
              <span className="text-xs text-ish-gray">{isAr ? 'رخصة بناء معتمدة' : 'Official Permits'}</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black gold-gradient-text block mb-0.5">+20 عاماً</span>
              <span className="text-xs text-ish-gray">{isAr ? 'خبرة هندسية تراكمية' : 'Years Experience'}</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black gold-gradient-text block mb-0.5">100%</span>
              <span className="text-xs text-ish-gray">{isAr ? 'إشراف استشاري مقيم' : 'Consultant Supervision'}</span>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black gold-gradient-text block mb-0.5">صفر</span>
              <span className="text-xs text-ish-gray">{isAr ? 'مخالفات أو نزاعات قانونية' : 'Legal Infractions'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE AUDIENCE SELECTOR (FILTER TABS)                           */}
      {/* ========================================================================= */}
      <section className="py-10 bg-[#0B0F19] sticky top-20 z-30 border-b border-white/10 backdrop-blur-xl bg-ish-black/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-start">
              <span className="text-xs text-ish-gold font-bold uppercase tracking-wider block">
                {isAr ? 'اختر مسارك لتحديد الخدمات الأنسب لك' : 'Select Your Profile'}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-ish-white">
                {isAr ? 'تصفح خدمات إشبيلية حسب صفة طلبك:' : 'Filter Services by Your Requirement:'}
              </h2>
            </div>

            {/* Filter buttons */}
            <div
              id={tabListId}
              role="tablist"
              aria-label={isAr ? 'تصنيفات الخدمات' : 'Service categories'}
              className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10"
            >
              {[
                { key: 'all', labelAr: 'كافة الخدمات (8)', labelEn: 'All Services (8)' },
                { key: 'landowners', labelAr: 'ملاك الأراضي', labelEn: 'Landowners' },
                { key: 'investors', labelAr: 'المستثمرون', labelEn: 'Investors' },
                { key: 'contracting', labelAr: 'المقاولات والتراخيص', labelEn: 'Contracting & Permits' },
                { key: 'homebuyers', labelAr: 'راغبو السكن والتشطيب', labelEn: 'Homeowners' },
              ].map((tab) => {
                const isActive = selectedCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(tab.key)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-ish-gold text-ish-black shadow-lg shadow-ish-gold/20'
                        : 'text-ish-gray-light hover:text-ish-gold hover:bg-white/5'
                    }`}
                  >
                    {isAr ? tab.labelAr : tab.labelEn}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COMPREHENSIVE SERVICE PILLARS (8 EXPANDED DETAILED CARDS)             */}
      {/* ========================================================================= */}
      <section className="py-24 bg-ish-black relative overflow-hidden" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'دليل الخدمات التفصيلي' : 'Detailed Service Catalog'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ish-white mt-2 mb-4">
              {isAr ? 'باقات العمل والتنفيذ الهندسي' : 'Engineering & Execution Packages'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'كل خدمة تشمل مخرجات موثقة ومعايير هندسية صارمة مع إشراف استشاري دائم'
                : 'Every service is bundled with documented deliverables and strict Egyptian Code compliance'}
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Top Number & Tag */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center text-ish-gold font-black text-2xl group-hover:scale-110 group-hover:bg-ish-gold/20 transition-all">
                    {service.number}
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-ish-gold font-bold">
                    {isAr ? 'خدمة معتمدة' : 'Certified Service'}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                    {isAr ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-xs text-ish-gold font-semibold mb-4">
                    {isAr ? service.taglineAr : service.taglineEn}
                  </p>
                  <p className="text-sm text-ish-gray leading-relaxed mb-6">
                    {isAr ? service.descriptionAr : service.descriptionEn}
                  </p>

                  {/* Deliverables Box */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                    <h4 className="text-xs font-bold text-ish-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-ish-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{isAr ? 'مخرجات الخدمة التي تستلمها:' : 'Key Official Deliverables:'}</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-ish-gray-light">
                      {(isAr ? service.deliverablesAr : service.deliverablesEn).map((deliv, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-ish-gold shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Standards Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {(isAr ? service.standardsAr : service.standardsEn).map((std, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-ish-gray border border-white/5 font-medium"
                      >
                        ✓ {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={`/consultation?service=${service.id}`}
                    className="btn-gold rounded-full px-5 py-2.5 text-xs font-bold shadow-md shadow-ish-gold/15"
                  >
                    {isAr ? service.ctaTextAr : service.ctaTextEn}
                  </Link>

                  <a
                    href={`https://wa.me/201010722349?text=${encodeURIComponent(
                      isAr ? service.whatsappMessageAr : service.whatsappMessageEn
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 text-xs font-bold transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                    </svg>
                    <span>{isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPARISON MATRIX (TRADITIONAL CONTRACTOR VS ISHBILIA)                 */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#090D15] relative border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'المقارنة الحاسمة' : 'The Definitive Comparison'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-2 mb-4">
              {isAr ? 'البناء العشوائي أم منظومة إشبيلية المتكاملة؟' : 'Traditional Contractors vs Ishbilia System'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'لماذا يفضل مئات الملاك والمستثمرين في مدينة السادات إسناد مشاريعهم لمنظومة إشبيلية؟'
                : 'Why discerning owners and investors in Sadat City choose Ishbilia over independent subcontractors'}
            </p>
          </div>

          {/* Comparison Table / Cards */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Aspect Title */}
                <div className="lg:col-span-3">
                  <span className="text-xs text-ish-gold font-bold uppercase tracking-wider block mb-1">
                    {isAr ? `البند ${index + 1}` : `Criteria ${index + 1}`}
                  </span>
                  <h3 className="text-lg font-bold text-ish-white">
                    {isAr ? item.aspectAr : item.aspectEn}
                  </h3>
                </div>

                {/* Traditional Side (Warning/Negative) */}
                <div className="lg:col-span-4 p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-xs sm:text-sm text-red-200/80 leading-relaxed">
                  <div className="flex items-center gap-2 text-red-400 font-bold mb-1">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{isAr ? 'المقاول التقليدي / العمل الفردي' : 'Traditional Contractor'}</span>
                  </div>
                  {isAr ? item.traditionalAr : item.traditionalEn}
                </div>

                {/* Ishbilia Side (Positive/Gold) */}
                <div className="lg:col-span-5 p-4 rounded-xl bg-ish-gold/10 border border-ish-gold/40 text-xs sm:text-sm text-ish-white font-medium leading-relaxed">
                  <div className="flex items-center gap-2 text-ish-gold font-bold mb-1">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{isAr ? 'منظومة إشبيلية للتطوير العقاري' : 'Ishbilia Integrated System'}</span>
                  </div>
                  {isAr ? item.ishbiliaAr : item.ishbiliaEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE 5-STEP EXECUTION ROADMAP                                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-ish-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'منهجية العمل' : 'Our Methodology'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-2 mb-4">
              {isAr ? 'مسار تنفيذ أي مشروع في 5 محطات' : 'Project Lifecycle in 5 Clear Stages'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'وضوح كامل في كل خطوة هندسية وتنفيذية مع تقارير دورية تضمن راحة بالك'
                : 'Complete transparency through every engineering milestone, keeping you fully informed'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                titleAr: 'المعاينة والجدوى',
                titleEn: 'Feasibility Survey',
                descAr: 'فحص الموقع، دراسة التربة، وتحديد النموذج الأمثل للمشروع وميزانيته.',
                descEn: 'Site survey, soil testing, and optimal architectural-financial modeling.',
              },
              {
                step: '02',
                titleAr: 'المخططات والتراخيص',
                titleEn: 'Blueprints & Permits',
                descAr: 'إعداد الرسومات 3D واستخراج رخصة البناء وموافقات جهاز السادات.',
                descEn: 'Drafting 3D plans and issuing official building permits from Sadat Authority.',
              },
              {
                step: '03',
                titleAr: 'التنفيذ وضبط الجودة',
                titleEn: 'Structural QA/QC',
                descAr: 'صب الخرسانات المسلحة والبناء مع اختبارات المعامل المعتمدة.',
                descEn: 'Casting reinforced concrete frame with continuous certified lab testing.',
              },
              {
                step: '04',
                titleAr: 'التشطيبات والمرافق',
                titleEn: 'Finishing & Utilities',
                descAr: 'تشطيب الواجهات الفاخرة، المداخل الرخام، المصاعد، وتوصيل العدادات.',
                descEn: 'Hotel-grade facades, natural marble lobbies, elevators, and utility hookups.',
              },
              {
                step: '05',
                titleAr: 'التسليم والضمانات',
                titleEn: 'Handover & Warranty',
                descAr: 'محضر استلام هندسي رسمي، تسليم المفاتيح، وخدمة ما بعد البيع.',
                descEn: 'Official sign-off certificate, key delivery, and ongoing HOA maintenance.',
              },
            ].map((st, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center text-ish-gold font-black text-lg mb-4 group-hover:bg-ish-gold/20 transition-colors">
                    {st.step}
                  </div>
                  <h3 className="text-lg font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                    {isAr ? st.titleAr : st.titleEn}
                  </h3>
                  <p className="text-xs text-ish-gray leading-relaxed">
                    {isAr ? st.descAr : st.descEn}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-ish-gold font-semibold">
                  {isAr ? `المحطة ${i + 1}` : `Stage ${i + 1}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ENGINEERING STANDARDS & QUALITY COMMITMENTS                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#090D15] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'الأمان الإنشائي' : 'Structural Safety'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ish-white mt-2 mb-4">
              {isAr ? 'معايير الجودة الخمسة في إشبيلية' : 'The 5 Core Engineering Standards'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-base sm:text-lg">
              {isAr
                ? 'اشتراطات تقنية لا نقبل فيها بأي تنازل لضمان صلابة المبنى وقيمته لعشرات السنين'
                : 'Uncompromising engineering specifications ensuring lifelong durability and asset value'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {engineeringStandards.map((std, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/40 transition-all duration-300 text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-full bg-ish-gold/10 border border-ish-gold/30 flex items-center justify-center text-ish-gold font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                  {std.number}
                </div>
                <h3 className="text-base font-bold text-ish-white mb-2 group-hover:text-ish-gold transition-colors">
                  {isAr ? std.titleAr : std.titleEn}
                </h3>
                <p className="text-xs text-ish-gray leading-relaxed">
                  {isAr ? std.descAr : std.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE PROJECT ESTIMATOR CALCULATOR                              */}
      {/* ========================================================================= */}
      <section className="py-24 bg-ish-black relative overflow-hidden" id="project-estimator">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-14 border border-ish-gold/40 bg-gradient-to-br from-[#121A28]/95 to-[#0A0F17]/95 shadow-2xl backdrop-blur-xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs sm:text-sm px-4 py-1.5 rounded-full bg-ish-gold/15 text-ish-gold font-bold inline-block mb-3 border border-ish-gold/30">
                {isAr ? 'أداة تقدير سريعة' : 'Quick Project Estimator'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-ish-white mb-3">
                {isAr ? 'حاسبة خطوات وجدول مشروعك' : 'Interactive Project Feasibility Planner'}
              </h2>
              <p className="text-xs sm:text-sm text-ish-gray">
                {isAr
                  ? 'اختر نوع الخدمة والمساحة التقديرية لتتعرف فوراً على المنهجية والجدول الزمني الموصى به'
                  : 'Select your service type and land area to instantly review the project roadmap'}
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-ish-gold uppercase tracking-wider mb-3">
                  {isAr ? '1. ما هي الخدمة التي تحتاجها؟' : '1. Select Needed Service'}
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'partnership', labelAr: 'تطوير وشراكة أرض', labelEn: 'Land Partnership' },
                    { id: 'construction', labelAr: 'مقاولة بناء كاملة', labelEn: 'Full Construction' },
                    { id: 'facades', labelAr: 'تشطيب واجهات ومداخل', labelEn: 'Facades & Lobby' },
                    { id: 'licensing', labelAr: 'استخراج رخصة بناء', labelEn: 'Permits Only' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setEstService(s.id)}
                      className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                        estService === s.id
                          ? 'bg-ish-gold text-ish-black border-ish-gold shadow-md shadow-ish-gold/20'
                          : 'bg-white/5 text-ish-white border-white/10 hover:border-ish-gold/40'
                      }`}
                    >
                      {isAr ? s.labelAr : s.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-ish-gold uppercase tracking-wider">
                    {isAr ? '2. المساحة التقريبية:' : '2. Estimated Area:'}
                  </label>
                  <span className="text-sm font-black text-ish-white tabular-nums">
                    {estArea} {isAr ? 'متر مربع' : 'sqm'}
                  </span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={2000}
                  step={50}
                  value={estArea}
                  onChange={(e) => setEstArea(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-ish-gold mb-4"
                />
                <div className="flex justify-between text-[10px] text-ish-gray">
                  <span>200 {isAr ? 'م²' : 'sqm'}</span>
                  <span>500 {isAr ? 'م²' : 'sqm'}</span>
                  <span>1,000 {isAr ? 'م²' : 'sqm'}</span>
                  <span>2,000+ {isAr ? 'م²' : 'sqm'}</span>
                </div>
              </div>
            </div>

            {/* Estimator Dynamic Result Box */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-ish-gold/30 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-4">
                <div>
                  <span className="text-xs text-ish-gold font-bold">
                    {isAr ? 'الخطة الموصى بها:' : 'Recommended Plan:'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-ish-white">
                    {isAr ? estResult.titleAr : estResult.titleEn}
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-ish-gold/15 text-ish-gold text-xs font-bold border border-ish-gold/30 self-start sm:self-auto">
                  ⏱️ {isAr ? estResult.timeframeAr : estResult.timeframeEn}
                </div>
              </div>

              {/* Steps list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {(isAr ? estResult.stepsAr : estResult.stepsEn).map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-ish-gray-light">
                    <span className="w-5 h-5 rounded-full bg-ish-gold/20 text-ish-gold font-bold flex items-center justify-center shrink-0 text-[11px]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Quote for Estimator */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/201010722349?text=${encodeURIComponent(
                  isAr
                    ? `مرحباً، قمت باستخدام حاسبة المشروع لمساحة ${estArea} م² لخدمة "${estResult.titleAr}" وأريد طلب مقايسة وتفاصيل دقيقة من إشبيلية.`
                    : `Hello, I used your project planner for ${estArea} sqm (${estResult.titleEn}) and would like a formal quotation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-sm transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                </svg>
                <span>{isAr ? 'إرسال لطلب مقايسة عبر واتساب' : 'Send for Quotation via WhatsApp'}</span>
              </a>

              <Link
                href="/consultation"
                className="btn-outline rounded-full px-8 py-3.5 text-sm font-semibold border-white/20 hover:border-ish-gold hover:text-ish-gold transition-all"
              >
                {isAr ? 'حجز موعد استشارة مع مهندس' : 'Schedule Engineer Meeting'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SERVICES FAQS (EXPANDABLE ACCORDION)                                  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#090E16] relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-ish-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
              {isAr ? 'الأسئلة الشائعة' : 'Frequent Inquiries'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ish-white mt-2 mb-4">
              {isAr ? 'إجابات واضحة حول خدماتنا' : 'Answers Regarding Our Services'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, index) => {
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
      {/* 9. ELITE CONVERSION & CONSULTATION CTA BANNER                            */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-ish-black via-[#0D1524] to-ish-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-ish-gold/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121A28]/95 to-[#0A0F17]/95 border border-ish-gold/40 shadow-2xl shadow-black/80 backdrop-blur-xl">
            <span className="text-xs sm:text-sm px-4 py-1.5 rounded-full bg-ish-gold/15 text-ish-gold font-bold inline-block mb-6 border border-ish-gold/30">
              {isAr ? 'استشارة مجانية مع الاستشاري الهندسي' : 'Free Engineering Consultation'}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ish-white mb-6 leading-tight">
              {isAr ? (
                <>
                  مشروعك القادم يستحق دقة إشبيلية... <br className="hidden sm:inline" />
                  <span className="gold-gradient-text">دعنا نبدأ دراسة موقعك وتخطيطه اليوم</span>
                </>
              ) : (
                <>
                  Your Next Project Deserves Ishbilia Precision... <br className="hidden sm:inline" />
                  <span className="gold-gradient-text">Let Us Survey & Plan Your Site Today</span>
                </>
              )}
            </h2>

            <p className="text-ish-gray-light text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {isAr
                ? 'سواء كنت مالك أرض ترغب في التطوير المشترك، أو تبحث عن مقاول موثوق لإنجاز الهيكل الخرساني والتراخيص، خبراؤنا جاهزون لتقديم المشورة الفنية الدقيقة.'
                : 'Whether you own land seeking a joint venture, or require a proven contractor for concrete execution and permits, our senior engineers are ready to assist.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/consultation"
                className="btn-gold rounded-full px-8 py-4 text-base font-bold shadow-xl shadow-ish-gold/25"
              >
                {isAr ? 'طلب استشارة ومقايسة فنية مجانية' : 'Request Free Engineering Consultation'}
              </Link>

              <a
                href="https://wa.me/201010722349?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A5%D8%B4%D8%A8%D9%8A%D9%84%D9%8A%D8%A9%20%D9%84%D9%84%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D9%8A%20%D9%81%D9%8A%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%A7%D8%AA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 text-base font-bold transition-all duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
                </svg>
                <span>{isAr ? 'محادثة فورية مع المستشار الهندسي' : 'Chat with Chief Engineer'}</span>
              </a>

              <Link
                href="/projects"
                className="btn-outline rounded-full px-8 py-4 text-base font-semibold border-white/20 hover:border-ish-gold hover:text-ish-gold transition-all"
              >
                {isAr ? 'تصفح سابقة أعمالنا' : 'View Realized Projects'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
