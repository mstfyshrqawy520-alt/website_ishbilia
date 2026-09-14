export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
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
  stepsAr: { title: string; desc: string; duration: string }[];
  stepsEn: { title: string; desc: string; duration: string }[];
  faqsAr: { q: string; a: string }[];
  faqsEn: { q: string; a: string }[];
  ctaTextAr: string;
  ctaTextEn: string;
  whatsappMessageAr: string;
  whatsappMessageEn: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'development',
    slug: 'development',
    number: '01',
    category: ['landowners', 'investors'],
    titleAr: 'التطوير العقاري الشامل',
    titleEn: 'Comprehensive Real Estate Development',
    taglineAr: 'من دراسة الفكرة والجدوى حتى تسليم الوحدات وتشغيل المرافق',
    taglineEn: 'From initial feasibility to turnkey handover and asset operation',
    descriptionAr:
      'إدارة متكاملة لدورة حياة المشروع العقاري السكني والتجاري بمدينة السادات. نتولى دراسة السوق، التخطيط الاستثماري، التصميم المعماري، استخراج التراخيص، التنفيذ الذاتي، وإدارة دورة المبيعات مع تحقيق أقصى عائد مستدام لكل متر مربع.',
    descriptionEn:
      'Full lifecycle management of residential and commercial developments in Sadat City. We handle market research, investment planning, architecture, licensing, self-funded construction, and sales for maximum sustainable returns.',
    deliverablesAr: [
      'دراسة جدوى تسويقية وهندسية ومالية متكاملة',
      'مخططات معمارية وإنشائية معتمدة من جهاز مدينة السادات',
      'إدارة كاملة لعمليات البيع والتسويق واستقطاب المشترين',
      'تسليم كامل المرافق الرسمية وتشغيل العدادات وإدارة اتحاد الشاغلين',
      'شراكات مرنة مع ملاك الأراضي بتكلفة صفرية وتمويل ذاتي 100%',
    ],
    deliverablesEn: [
      'Full financial, architectural, and market feasibility study',
      'Approved engineering master plans from Sadat City Authority',
      'Complete marketing, branding, and sales lifecycle management',
      'Utility connections, operational meters, and HOA administration',
      'Zero-cost joint venture development for land owners with 100% funding',
    ],
    standardsAr: ['أعلى كود عمراني معتمد', 'عوائد استثمارية محسوبة', 'أمان قانوني تعاقدي', 'خرسانات كود الزلازل B350'],
    standardsEn: ['Approved urban planning code', 'Calculated ROI models', 'Total contractual security', 'B350 seismic concrete'],
    stepsAr: [
      { title: 'المعاينة والرفع المساحي', desc: 'معاينة الموقع ومراجعة اشتراطات جهاز مدينة السادات والردود القانونية.', duration: '48 ساعة' },
      { title: 'دراسة الجدوى والتصميم 3D', desc: 'إعداد المقترح المعماري ثلاثي الأبعاد وتوزيع المساحات والوحدات.', duration: '5 أيام عمل' },
      { title: 'التعاقد وتوثيق بنود الشراكة', desc: 'جلسة ميتنج مغلقة لصياغة العقد الرسمي وجدول التسليم والغرامات.', duration: 'جلسة VIP' },
      { title: 'التراخيص والتمويل الذاتي', desc: 'استخراج كافة التراخيص والبدء في التنفيذ الخرساني دون انتظار بيع.', duration: 'طبقاً للجدول' },
      { title: 'التسليم وتشغيل المرافق', desc: 'تسليم مفتاح فوري مع تشغيل عدادات الكهرباء والمياه والمصعد.', duration: 'تسليم فوري' },
    ],
    stepsEn: [
      { title: 'Survey & Zoning Audit', desc: 'On-site survey and municipal code audit with Sadat Authority.', duration: '48 Hours' },
      { title: '3D Feasibility Blueprint', desc: 'Architectural space planning and unit yield optimization.', duration: '5 Days' },
      { title: 'VIP Agreement & Contract', desc: 'Executive consultation to formalize partnership terms and penalties.', duration: 'VIP Session' },
      { title: 'Permitting & Execution', desc: 'Full licensing and 100% self-financed construction.', duration: 'Per Schedule' },
      { title: 'Turnkey Handover', desc: 'Delivery with active meters, elevator operation, and optional sales.', duration: 'Turnkey' },
    ],
    faqsAr: [
      { q: 'هل يتحمل مالك الأرض أي تكاليف في التطوير؟', a: 'لا، تتكفل إشبيلية بكافة رسوم التراخيص ونقابة المهندسين ومواد البناء والتشطيب بنسبة 100% دون أي أعباء مالية عليك.' },
      { q: 'كيف تُحدد نسبة الشراكة وتوزيع الوحدات؟', a: 'الموضوع مرن تماماً؛ نسب الشراكة وتوزيع الوحدات تُحدد بالتراضي التام في جلسة استشارية خاصة بما يلائم موقع وتميز قطعتك.' },
      { q: 'ما الضمانات على الالتزام بموعد التسليم؟', a: 'يتم تثبيت غرامات تأخير شهرية محددة وملزمة قانونياً لصالحك في بنود العقد الرسمي المعتمد.' },
    ],
    faqsEn: [
      { q: 'Does the landowner bear any development expenses?', a: 'No, Ishbilia self-finances 100% of permits, engineering syndicate fees, concrete, and finishes with zero cost on the owner.' },
      { q: 'How are partnership shares and unit allocation agreed?', a: 'Completely flexible; terms are collaboratively settled during a private executive VIP consultation based on your plot merits.' },
      { q: 'What guarantees ensure delivery on time?', a: 'Legally enforceable monthly delay penalties are codified directly into the partnership agreement.' },
    ],
    ctaTextAr: 'طلب دراسة تطوير مشروع',
    ctaTextEn: 'Request Development Study',
    whatsappMessageAr: 'مرحباً، أود الاستفسار عن خدمة التطوير العقاري الشامل وإمكانية دراسة قطعة أرض / مشروع في مدينة السادات.',
    whatsappMessageEn: 'Hello, I would like to inquire about full-cycle real estate development in Sadat City.',
  },
  {
    id: 'construction',
    slug: 'construction',
    number: '02',
    category: ['contracting', 'landowners'],
    titleAr: 'البناء والتشييد الإنشائي',
    titleEn: 'General Contracting & Structural Construction',
    taglineAr: 'تنفيذ خرساني وهندسي صارم يطابق الكود المصري للزلازل والأحمال',
    taglineEn: 'Rigorous structural engineering adhering to Egyptian Building & Seismic Codes',
    descriptionAr:
      'تنفيذ الهياكل الخرسانية وأعمال البناء بأعلى مواصفات هندسية تحت إشراف نخبة من استشاريي نقابة المهندسين. نستخدم خرسانة جاهزة معتمدة (B250 - B350) تخضع لاختبارات كسر المكعبات في معامل معتمدة، مع حديد تسليح مطابق ومراقبة جودة صارمة في الموقع.',
    descriptionEn:
      'Execution of reinforced concrete frames and masonry with high-grade engineering rigor. We utilize certified ready-mix concrete (B250 - B350) tested in authorized labs, verified rebar, and continuous site QA/QC under syndicate consultants.',
    deliverablesAr: [
      'هيكل خرساني متكامل بأعلى درجات مقاومة الضغط والأحمال الجانبية',
      'تقارير دورية معتمدة لاختبارات كسر مكعبات الخرسانة تسلم للمالك',
      'تنفيذ مطابق 100% للرسومات الإنشائية بدون أي انحرافات أو تفاوتات',
      'استخدام حديد تسليح نخب أول (عز / السويس) مع عزل القواعد والسملات',
      'جدول زمني ملزم بمراحل صب محددة وإشراف هندسي يومي',
    ],
    deliverablesEn: [
      'Complete reinforced concrete structure engineered for seismic and lateral stresses',
      'Official certified lab test certificates for all concrete batches delivered to client',
      'Zero-tolerance execution strictly matching structural blueprints',
      'Top-tier rebar (Ezz / Suez) with specialized subterranean waterproofing',
      'Binding timeline with milestone inspection reports and daily supervision',
    ],
    standardsAr: ['خرسانة جاهزة معتمدة (B250 - B350)', 'حديد تسليح عز / السويس', 'إشراف استشاري دائم', 'كود الزلازل المصري'],
    standardsEn: ['Certified ready-mix concrete', 'Ezz / Suez certified steel', 'Continuous consultant supervision', 'Egyptian Seismic Code'],
    stepsAr: [
      { title: 'أعمال الحفر والإحلال', desc: 'الحفر لمنسوب التأسيس المعتمد ودمك طبقات الإحلال واختبارات التربة.', duration: 'أسبوع' },
      { title: 'الأساسات والعزل', desc: 'صب الخرسانة العادية والمسلحة وعزل القواعد والسملات بمادة البيتومين.', duration: 'أسبوعين' },
      { title: 'الأعمدة والأسقف', desc: 'تنفيذ أعمدة البدروم والأدوار المتكررة والأسقف بنظام الفلات سلاب.', duration: 'شهرياً' },
      { title: 'أعمال المباني والعزل', desc: 'بناء الحوائط بالطوب المصمت والأسمنتي وعزل الواجهات والأسطح.', duration: 'مستمر' },
    ],
    stepsEn: [
      { title: 'Excavation & Soil Compaction', desc: 'Excavation to foundation grade, compaction, and proctor soil tests.', duration: '1 Week' },
      { title: 'Foundations & Sealing', desc: 'Pouring plain & reinforced footings with dual-coat bituminous waterproofing.', duration: '2 Weeks' },
      { title: 'Columns & Slabs', desc: 'Basement & typical floor columns with solid flat-slab systems.', duration: 'Monthly' },
      { title: 'Masonry & Insulation', desc: 'Perimeter brickwork, internal partitions, and thermal envelope sealing.', duration: 'Ongoing' },
    ],
    faqsAr: [
      { q: 'ما رتبة الخرسانة المستخدمة في مشروعاتكم؟', a: 'نستخدم خرسانة جاهزة رتبة B300 و B350 لضمان أعلى متانة ومقاومة للأحمال والزلازل.' },
      { q: 'هل يتسلم المالك نتائج اختبارات المعمل؟', a: 'نعم، يتم أخذ مكعبات اختبار لكل صبة وتسليم تقرير الفحص الصادر من المعمل المعتمد رسمياً.' },
    ],
    faqsEn: [
      { q: 'What concrete grade is utilized in Ishbilia structures?', a: 'We utilize B300 and B350 certified ready-mix concrete to guarantee seismic resilience and longevity.' },
      { q: 'Does the owner receive lab compression reports?', a: 'Yes, compression test cubes are crushed at 7 and 28 days with official lab certificates handed to the client.' },
    ],
    ctaTextAr: 'طلب مقايسة أعمال إنشائية',
    ctaTextEn: 'Request Structural Quotation',
    whatsappMessageAr: 'مرحباً، أريد طلب مقايسة لبناء هيكل خرساني وتشييد لموقعي بمدينة السادات.',
    whatsappMessageEn: 'Hello, I would like to request a structural construction quotation in Sadat City.',
  },
  {
    id: 'licensing',
    slug: 'licensing',
    number: '03',
    category: ['contracting', 'landowners'],
    titleAr: 'استخراج التراخيص والموافقات الرسمية',
    titleEn: 'Official Building Permits & Licensure',
    taglineAr: 'أكثر من 2000 رخصة معتمدة في جهاز مدينة السادات بسجل ناصع 100%',
    taglineEn: 'Over 2,000 approved licenses in Sadat City with a 100% spotless track record',
    descriptionAr:
      'نرفع عن كاهلك عبء الإجراءات الإدارية والبيروقراطية. نقوم بإعداد الرسومات التنفيذية، استخراج شهادة صلاحية الموقع، رخصة البناء، وموافقات الحماية المدنية والمجمعة العشرية بسرعة قياسية وأمان قانوني تام مع جهاز مدينة السادات.',
    descriptionEn:
      'We remove bureaucratic friction entirely. We prepare working drawings, site validity clearances, building permits, civil defense approvals, and insurance warranties with unmatched speed and safety at Sadat City Authority.',
    deliverablesAr: [
      'رخصة بناء رسمية صادرة ومعتمدة من جهاز مدينة السادات',
      'شهادة صلاحية الموقع للبناء والمطابقة التخطيطية والردود القانونية',
      'ملف مجمعة عشرية ووثيقة تأمين معتمدة تحمي أصلك العقاري',
      'شهادات السلامة الإنشائية ومطابقة الدفاع المدني',
      'تصاريح الحفر وتوصيل المرافق المؤقتة والدائمة',
    ],
    deliverablesEn: [
      'Official building permit issued by Sadat City Authority',
      'Site validity & zoning clearance certificate with setback audit',
      'Decennial insurance policy & approved technical dossier',
      'Structural safety clearances and civil defense approvals',
      'Excavation permits and temporary/permanent utility connections',
    ],
    standardsAr: ['صفر مخالفات أو ردود', 'التزام باشتراطات هيئة المجتمعات', 'سرعة إنجاز قياسية', 'سجل ناصع +2000 رخصة'],
    standardsEn: ['Zero setback infractions', 'Strict NUCA regulations compliance', 'Record processing speed', 'Spotless 2000+ permit record'],
    stepsAr: [
      { title: 'صلاحية الموقع', desc: 'استخراج شهادة صلاحية الموقع ومراجعة الردود واشتراطات المنطقة.', duration: 'خلال 7 أيام' },
      { title: 'الرسومات ونقابة المهندسين', desc: 'إعداد اللوحات المعمارية والإنشائية واعتمادها من النقابة.', duration: 'خلال 10 أيام' },
      { title: 'المجمعة العشرية', desc: 'مراجعة الحسابات الإنشائية وإصدار وثيقة التأمين للمبنى.', duration: 'خلال أسبوع' },
      { title: 'إصدار رخصة البناء', desc: 'سداد الرسوم واستلام الرخصة الرسمية من جهاز السادات لبدء الصب.', duration: 'رخصة رسمية' },
    ],
    stepsEn: [
      { title: 'Site Validity Clearance', desc: 'Procuring site clearance and verifying official setbacks per zone.', duration: '7 Days' },
      { title: 'Blueprints & Syndicate', desc: 'Preparing working drawings and gaining Engineers Syndicate stamps.', duration: '10 Days' },
      { title: 'Decennial Insurance', desc: 'Structural review and issuing mandatory ten-year insurance policy.', duration: '1 Week' },
      { title: 'Permit Issuance', desc: 'Settling municipal fees and receiving official construction license.', duration: 'Official License' },
    ],
    faqsAr: [
      { q: 'كم تستغرق إجراءات استخراج رخصة البناء بالسادات؟', a: 'بفضل خبرتنا المتراكمة وعلاقاتنا المؤسسية، تستغرق الإجراءات من 3 إلى 5 أسابيع عمل كحد أقصى.' },
      { q: 'هل تضمنون مطابقة الرسومات لاشتراطات الجهاز؟', a: 'نعم بنسبة 100%، نضمن خلو الملف من أي مخالفات ردود أو ارتفاعات.' },
    ],
    faqsEn: [
      { q: 'How long does securing a building permit take in Sadat?', a: 'Backed by our 20-year institutional experience, permits are typically finalized in 3 to 5 business weeks.' },
      { q: 'Do you guarantee compliance with building codes?', a: 'Yes 100%, we ensure zero setback infractions or non-compliant height ratios.' },
    ],
    ctaTextAr: 'استشارة تراخيص فورية',
    ctaTextEn: 'Inquire About Licensing',
    whatsappMessageAr: 'مرحباً، لدي قطعة أرض وأحتاج إنهاء إجراءات رخصة البناء في جهاز مدينة السادات.',
    whatsappMessageEn: 'Hello, I have a land plot and need assistance securing building permits in Sadat City.',
  },
  {
    id: 'architecture',
    slug: 'architecture',
    number: '04',
    category: ['homebuyers', 'landowners'],
    titleAr: 'التصميم المعماري والواجهات الفاخرة',
    titleEn: 'Architectural & Luxury Facade Design',
    taglineAr: 'توازن بصري، خصوصية تامة، وتوزيع مساحات ذكي يمنع أي هدر داخلي',
    taglineEn: 'Visual harmony, absolute privacy, and intelligent layout optimization',
    descriptionAr:
      'نصمم واجهات كلاسيكية وعصرية تمنح المبنى هيبة وفخامة دائمة، مع تصميم معماري داخلي يراعي مسارات الحركة، التهوية والإضاءة الطبيعية، والتوزيع الذي يعطي كل متر مربع قيمته واستقلاليته دون أي ممرات مهدرة.',
    descriptionEn:
      'We design classical and contemporary facades that imbue buildings with enduring prestige, alongside internal floorplans engineered for natural ventilation, sunlight, and zero wasted corridors.',
    deliverablesAr: [
      'تصميمات ثلاثية الأبعاد (3D Renders) واقعية فائقة الدقة للواجهات النهارية والليلية',
      'مخططات معمارية تنفيذية كاملة لكافة الأدوار والوحدات',
      'لوحات توزيع الإضاءة، التكييفات، والمسارات الخدمية المتكاملة',
      'جدول تفصيلي بالمواد، خامات الرخام، وألوان الدهانات الخارجية',
      'توزيع ذكي للمساحات يوفر حدائق خاصة واسعة وإطلالات بحرية مفتوحة',
    ],
    deliverablesEn: [
      'Photorealistic 3D daytime & nighttime facade renders',
      'Comprehensive working architectural floorplans for all floors and units',
      'HVAC, lighting, and service routing blueprints',
      'Detailed exterior finish, stone, and paint material schedules',
      'Intelligent layout optimization maximizing private gardens and north-facing vistas',
    ],
    standardsAr: ['فخامة نيوكلاسيك وعصرية', 'استغلال 100% للمساحة', 'مراعاة اتجاه الرياح والشمس', 'خصوصية ملكية مطلقة'],
    standardsEn: ['Neoclassical & contemporary elegance', '100% spatial efficiency', 'Optimized solar & wind orientation', 'Absolute privacy'],
    stepsAr: [
      { title: 'جلسة العصف الذهني والرؤية', desc: 'تحديد متطلبات العميل، المساحات، وطبيعة السكن والاستخدام.', duration: 'جلسة أولى' },
      { title: 'المقترح المعماري الأولي', desc: 'تقديم مساقط أفقية مبدئية توضح توزيع الشقق والغرف والمداخل.', duration: 'خلال 4 أيام' },
      { title: 'التصميم الثلاثي الأبعاد 3D', desc: 'تطوير الواجهات الخارجية بالكرانيش والرخام والإضاءة الليد.', duration: 'خلال أسبوع' },
      { title: 'اللوحات التنفيذية والتراخيص', desc: 'إخراج المخططات التنفيذية التفصيلية الجاهزة للتنفيذ بالموقع.', duration: 'تسليم كامل' },
    ],
    stepsEn: [
      { title: 'Discovery & Briefing', desc: 'Clarifying client vision, unit typology, and intended lifestyle.', duration: '1st Session' },
      { title: 'Conceptual Floorplans', desc: 'Drafting initial 2D layouts optimizing rooms, terraces, and entries.', duration: '4 Days' },
      { title: '3D Facade Development', desc: 'Modeling high-detail classical cornices, marble, and lighting.', duration: '1 Week' },
      { title: 'Working Blueprints', desc: 'Producing municipal-grade executive blueprints ready for construction.', duration: 'Final Delivery' },
    ],
    faqsAr: [
      { q: 'هل تراعي التصاميم اتجاه الواجهة البحري والشمس؟', a: 'نعم بدقة تامة، نوجه غرف المعيشة والتراسات الرئيسية للرياح الشمالية البحرية والإضاءة الطبيعية.' },
      { q: 'هل يمكن تعديل التقسيم الداخلي للشقق؟', a: 'نعم، نوفر مرونة هندسية تامة تتيح للعميل تخصيص المساحات وغرف الماستر.' },
    ],
    faqsEn: [
      { q: 'Do your designs maximize northern exposure and sunlight?', a: 'Yes meticulously, living areas and primary terraces are oriented towards prevailing north winds and natural daylight.' },
      { q: 'Can interior layouts be customized per unit?', a: 'Yes, our flat-slab engineering allows full interior wall flexibility to accommodate custom master suites.' },
    ],
    ctaTextAr: 'طلب تصميم معماري',
    ctaTextEn: 'Request Architectural Design',
    whatsappMessageAr: 'مرحباً، أرغب في استشارة لتصميم واجهات ومخططات معمارية لمبنى سكني في السادات.',
    whatsappMessageEn: 'Hello, I would like an architectural consultation for a residential building in Sadat City.',
  },
  {
    id: 'finishes',
    slug: 'finishes',
    number: '05',
    category: ['homebuyers', 'contracting'],
    titleAr: 'التشطيبات الخارجية والداخلية الفندقية',
    titleEn: 'Exterior & Interior Hotel-Grade Finishes',
    taglineAr: 'خامات تدوم طويلاً: رخام طبيعي، دهانات مقاومة للعوامل الجوية، ومصاعد إيطالية',
    taglineEn: 'Enduring materials: natural marble, weather-resistant coatings, and Italian elevators',
    descriptionAr:
      'المبنى الفاخر يُعرف من تفاصيله. نستخدم دهانات خارجية متطورة مقاومة للحرارة والرطوبة والأملاح، ومداخل رخام طبيعي إمبراطوري مضاءة بشكل غير مباشر، ومصاعد مستوردة بأعلى معايير الأمان والهدوء لتبقى واجهتك مشرقة لعشرات السنين.',
    descriptionEn:
      'Prestige is reflected in the details. We utilize weather-resistant external coatings resisting heat and moisture, imperial marble lobbies with indirect lighting, and whisper-quiet imported elevators built to endure for decades.',
    deliverablesAr: [
      'واجهات منتهية بأحدث خامات الجرافيت والأحجار والكرانيش المعالجة كيميائياً',
      'مداخل وسلالم من الرخام والجرانيت الطبيعي الفاخر مع مرايا مضيئة وإنارة خفية',
      'تركيب مصاعد كهربائية أوروبية وإيطالية متطورة مع نظام طوارئ ذكي',
      'أبواب مصفحة نخب أول وقطاعات ألوميتال جامبو عازلة للصوت والحرارة',
      'إنارة معمارية خارجية مدروسة لإبراز جمال وتفاصيل المبنى ليلاً',
    ],
    deliverablesEn: [
      'Facades finished with durable stone, treated graphite, and classical cornices',
      'Lobbies & staircases in polished natural imperial marble with indirect lighting',
      'Imported European/Italian elevators equipped with automatic rescue devices',
      'Top-tier armored security doors and jumbo acoustic insulated aluminum joinery',
      'Architectural LED illumination highlighting night aesthetics and building contours',
    ],
    standardsAr: ['رخام طبيعي نخب أول', 'دهانات مقاومة للتقلبات الجوية', 'عزل مائي تام للواجهات', 'مصاعد معتمدة'],
    standardsEn: ['Premium natural marble', 'Weatherproof exterior coatings', 'Complete facade water sealing', 'Certified elevators'],
    stepsAr: [
      { title: 'اختيار باقة التشطيب', desc: 'تحديد مستويات التشطيب والواجهات والمداخل الرخامية وفق الكتالوج.', duration: 'مرحلة أولى' },
      { title: 'أعمال التأسيسات والعزل', desc: 'عزل الواجهات والأسطح والتأسيسات الكهربائية ومجاري الصرف والتكييف.', duration: 'خلال أسبوعين' },
      { title: 'تنفيذ الواجهة والمداخل', desc: 'تركيب الرخام والكرانيش والدهانات المعمارية الخارجية والإنارة.', duration: 'خلال شهر' },
      { title: 'المصاعد والتسليم النهائي', desc: 'تركيب المصعد وتجربته وتسليم المبنى فندقياً في أبهى حلة.', duration: 'تسليم فندقي' },
    ],
    stepsEn: [
      { title: 'Finish Package Selection', desc: 'Choosing facade stones, marble lobby palettes, and fixtures.', duration: 'Stage 1' },
      { title: 'Sub-surface Waterproofing', desc: 'Applying waterproof basecoats, electrical conduit, and drainage.', duration: '2 Weeks' },
      { title: 'Facade & Lobby Fit-out', desc: 'Installing natural marble, cornices, weather coatings, and LED accents.', duration: '1 Month' },
      { title: 'Elevator & Turnkey Delivery', desc: 'Commissioning the elevator and executing hotel-grade handover.', duration: 'Turnkey Handover' },
    ],
    faqsAr: [
      { q: 'ما نوع المصاعد المعتمدة في مشروعاتكم؟', a: 'نستخدم مصاعد إيطالية وأوروبية بمحركات فائقة الهدوء وأجهزة طوارئ أوتوماتيكية تنزل لأقرب دور عند انقطاع الكهرباء.' },
      { q: 'هل الدهانات الخارجية مضمونة ضد الشمس والرطوبة؟', a: 'نعم، نستخدم خامات جوتن وجرافيت مقاومة للأشعة فوق البنفسجية والأملاح لضمان ثبات اللون.' },
    ],
    faqsEn: [
      { q: 'What brand of elevators do you install?', a: 'We install premium Italian/European gearless elevators with automatic rescue devices (ARD) for power outages.' },
      { q: 'Are facade paints guaranteed against sun and weathering?', a: 'Yes, we apply high-spec UV-resistant Jotun and acrylic graphite coatings guaranteeing vibrant color retention.' },
    ],
    ctaTextAr: 'طلب مواصفات التشطيب',
    ctaTextEn: 'Request Finish Specs',
    whatsappMessageAr: 'مرحباً، أود معرفة مواصفات وباقات تشطيب الواجهات والمداخل في مشروعات إشبيلية.',
    whatsappMessageEn: 'Hello, I want to learn more about facade and lobby finish packages by Ishbilia.',
  },
  {
    id: 'management',
    slug: 'management',
    number: '06',
    category: ['contracting', 'investors'],
    titleAr: 'إدارة المشروعات والإشراف الهندسي',
    titleEn: 'Project Management & Construction Supervision',
    taglineAr: 'رقابة ميدانية يومية وإدارة ميزانية صارمة تضمن تسليم المشروع في موعده',
    taglineEn: 'Daily site oversight and strict cost controls ensuring on-schedule completion',
    descriptionAr:
      'نظام إدارة مشاريع احترافي يضمن التنسيق الكامل بين كافة بنود العمل (الحفر، الخرسانات، المباني، التأسيسات الكهروميكانيكية، والتشطيبات). مهندسونا الاستشاريون متواجدون بالموقع لضمان عدم حدوث أي انحراف عن المخطط أو الجدول الزمني أو الميزانية المعتمدة.',
    descriptionEn:
      'Professional project management harmonizing all construction phases (excavation, concrete, MEP, finishes). Resident engineers oversee site activities to prevent schedule drift and cost overruns.',
    deliverablesAr: [
      'تقارير دورية موثقة بالصور ونتائج الفحوصات عن نسبة الإنجاز الفعلي للموقع',
      'إدارة المشتريات ومطابقة الخامات الموردة للموقع لأعلى المعايير الهندسية',
      'مراقبة الجدول الزمني والإنفاق المالي لكل مرحلة لمنع أي تكاليف إضافية',
      'استلام بنود الأعمال من مقاولي الباطن بمحاضر فنية رسمية معتمدة',
      'إدارة التشغيل بعد التسليم وتأسيس وتفعيل اتحاد الشاغلين',
    ],
    deliverablesEn: [
      'Periodic photo-documented progress reports and laboratory audit results',
      'Procurement management ensuring all delivered materials meet top engineering specs',
      'Strict milestone schedule and financial budget monitoring to eliminate cost overruns',
      'Rigorous subcontractor handover with official engineering inspection protocols',
      'Post-delivery property administration and HOA community establishment',
    ],
    standardsAr: ['إشراف هندسي يومي', 'مراقبة جودة صارمة (QA/QC)', 'التزام بالميزانية', 'تقارير أسبوعية شفافة'],
    standardsEn: ['Daily site supervision', 'Rigorous QA/QC controls', 'Strict budget compliance', 'Transparent weekly reports'],
    stepsAr: [
      { title: 'إعداد الجدول الزمني والميزانية', desc: 'وضع المخطط الزمني التفصيلي لمراحل المشروع وتوزيع التدفقات المالية.', duration: 'أسبوع' },
      { title: 'الإشراف الميداني اليومي', desc: 'متابعة استلام حديد التسليح والنجارة والخرسانات والمباني أولاً بأول.', duration: 'مستمر' },
      { title: 'الفحوصات واختبارات الجودة', desc: 'أخذ عينات الخرسانة واختبارات العزل المائي وتمديدات السباكة والكهرباء.', duration: 'أسبوعي' },
      { title: 'التسليم الابتدائي والنهائي', desc: 'معاينة المشروع الشاملة واستلامه وإعداد محاضر التشغيل الرسمية.', duration: 'تسليم رسمي' },
    ],
    stepsEn: [
      { title: 'Schedule & Budget Masterplan', desc: 'Establishing detailed Gantt charts and cash flow milestone projections.', duration: '1 Week' },
      { title: 'Daily Resident Supervision', desc: 'Inspect rebar placement, formwork, pouring, and masonry daily.', duration: 'Continuous' },
      { title: 'Quality & Stress Audits', desc: 'Concrete cube crushing, pressure plumbing checks, and insulation tests.', duration: 'Weekly' },
      { title: 'Final Handover Protocols', desc: 'Comprehensive site audit and formal handover certification.', duration: 'Official Handover' },
    ],
    faqsAr: [
      { q: 'هل تقدمون خدمة الإشراف على الأراضي الخاصة؟', a: 'نعم، يمكننا تولي إدارة وتنفيذ أو الإشراف الهندسي الكامل على قطعة أرضك الخاصة بمدينة السادات.' },
      { q: 'كيف يتابع العميل تطورات مشروعه؟', a: 'نرسل تقارير أسبوعية وشهرية مصورة توثق كل مرحلة صب وبناء بالتفصيل.' },
    ],
    faqsEn: [
      { q: 'Do you offer supervision services for private landowners?', a: 'Yes, we provide turnkey construction management or consulting supervision for private plots in Sadat City.' },
      { q: 'How does the client track project progress?', a: 'Clients receive weekly and monthly photo-documented milestone reports with verified engineer sign-offs.' },
    ],
    ctaTextAr: 'طلب إدارة وإشراف على مشروع',
    ctaTextEn: 'Request Project Management',
    whatsappMessageAr: 'مرحباً، أود استشارة مهندس لإدارة مشروع بناء وإشراف هندسي على موقع في السادات.',
    whatsappMessageEn: 'Hello, I would like an engineering consultation for construction management in Sadat City.',
  },
  {
    id: 'land',
    slug: 'land',
    number: '07',
    category: ['landowners', 'investors'],
    titleAr: 'تطوير ومشاركة الأراضي (طوّر أرضك معنا)',
    titleEn: 'Joint-Venture Land Development',
    taglineAr: 'حوّل أرضك إلى صرح سكني فاخر بأعلى عائد وأمان دون أي مجهود تنفيذي أو مالي منك',
    taglineEn: 'Transform your vacant plot into a luxury landmark with peak profit sharing and zero stress',
    descriptionAr:
      'نموذج الشراكة العادل والمثبت نجاحه في مدينة السادات. تقدم الأرض ونتولى نحن التمويل الكامل 100%، التراخيص، التصميم، البناء بخامات كود الزلازل B350، والتسويق، مع توزيع عادل ومرن للوحدات يُحدد بالتراضي التام في جلسة استشارية خاصة وبعقود موثقة.',
    descriptionEn:
      'The proven, equitable joint-venture model in Sadat City. You contribute the land, while we finance 100%, license, design, construct with B350 concrete, and market—sharing units under collaborative, legally binding contracts.',
    deliverablesAr: [
      'عقد شراكة قانوني موثق ومفصل يحدد حصص كل طرف بالتراضي التام',
      'تحمل إشبيلية لكافة تكاليف التراخيص والرسومات والتنفيذ بنسبة 100%',
      'تسليم حصتك من الوحدات بتشطيبات واجهات فندقية ومرافق وعدادات كاملة',
      'غرامات تأخير موثقة في العقد لضمان الانضباط التام بالجدول الزمني',
      'إشراف استشاري معملي وشهادات اختبار الخرسانة تسلم لمالك الأرض',
    ],
    deliverablesEn: [
      'Notarized joint-venture agreement collaboratively settling unit allocation',
      'Ishbilia self-finances 100% of permits, blueprints, and construction',
      'Handover of your units with active meters, elevators, and luxury facades',
      'Contractually enforceable delay penalties protecting your asset value',
      'Official accredited lab concrete testing certificates delivered to owner',
    ],
    standardsAr: ['شراكة عادلة ومرنة', 'صفر مخاطرة مالية للمالك', 'حماية الملكية 100%', 'تمويل ذاتي كامل'],
    standardsEn: ['Equitable flexible JV', 'Zero financial risk for owner', '100% legal title protection', 'Full self-financing'],
    stepsAr: [
      { title: 'معاينة وفحص الموقع', desc: 'رفع مساحي ومراجعة كود واشتراطات جهاز مدينة السادات مجاناً.', duration: '48 ساعة' },
      { title: 'المخططات والجدوى 3D', desc: 'إعداد مقترح معماري ثلاثي الأبعاد لتوزيع الوحدات والحدائق.', duration: '5 أيام' },
      { title: 'جلسة الاتفاق وتوثيق العقد', desc: 'ميتنج VIP لمناقشة نسب الشراكة بالتراضي وجدول التسليم.', duration: 'جلسة VIP' },
      { title: 'التراخيص والبناء والتسليم', desc: 'تمويل وتنفيذ كامل حتى تسليم المفتاح وتشغيل العدادات والمصعد.', duration: 'تسليم تعاقدي' },
    ],
    stepsEn: [
      { title: 'Zoning & Site Audit', desc: 'Complimentary site survey and municipal zoning analysis.', duration: '48 Hours' },
      { title: '3D Spatial Planning', desc: '3D architectural layout maximizing garden views and apartments.', duration: '5 Days' },
      { title: 'VIP JV Agreement', desc: 'Executive meeting to settle flexible partnership shares collaboratively.', duration: 'VIP Session' },
      { title: 'Permitting & Handover', desc: '100% funded execution with active meters and operational elevator.', duration: 'Contractual Delivery' },
    ],
    faqsAr: [
      { q: 'هل توجد نسب أرباح مفروضة مسبقاً؟', a: 'لا، الموضوع مرن تماماً وتُحدد نسب الشراكة وتوزيع الوحدات بالتراضي في ميتنج خاص بناء على موقع وتميز قطعتك.' },
      { q: 'ماذا لو تأخر التسليم؟', a: 'يتم تثبيت غرامات تأخير شهرية محددة وملزمة قانونياً لصالحك في بنود العقد الرسمي المعتمد.' },
    ],
    faqsEn: [
      { q: 'Are profit percentages predetermined?', a: 'No, partnership formulas and unit shares are flexible and agreed collaboratively during an executive VIP consultation.' },
      { q: 'What happens in case of project delay?', a: 'Strict, legally enforceable monthly delay penalties are codified directly in the partnership agreement.' },
    ],
    ctaTextAr: 'تقديم أرض للشراكة وتحديد موعد ميتنج',
    ctaTextEn: 'Submit Land for JV Consultation',
    whatsappMessageAr: 'مرحباً، أمتلك قطعة أرض في السادات وأرغب في مناقشة تفاصيل المشاركة والتطوير العقاري معكم.',
    whatsappMessageEn: 'Hello, I own a land parcel in Sadat City and would like to explore a development partnership.',
  },
  {
    id: 'advisory',
    slug: 'advisory',
    number: '08',
    category: ['investors', 'homebuyers'],
    titleAr: 'الاستشارات ودراسات الجدوى العقارية',
    titleEn: 'Real Estate Feasibility & Investment Advisory',
    taglineAr: 'بيانات حقيقية من واقع السوق تضمن توجيه رأس مالك نحو أعلى الفرص عائداً وأماناً',
    taglineEn: 'Real ground data ensuring your capital is directed towards highest yield and safety',
    descriptionAr:
      'خبرة 20 عاماً في جغرافية مدينة السادات ومستقبل التوسع العمراني فيها نضعها بين يديك. نساعدك في تقييم الأراضي، توقع أسعار المتر، اختيار أفضل المناطق السكنية والاستثمارية، وتوقيت الشراء والبيع لتحقيق أقصى عائد رأسمالي.',
    descriptionEn:
      'Two decades of mastery across Sadat City geography and future growth corridors at your disposal. We assist with land valuation, price-per-meter forecasting, prime neighborhood selection, and optimal exit timing.',
    deliverablesAr: [
      'تقرير دراسة جدوى استثمارية شامل يحدد معدلات العائد المتوقع وفترة استرداد رأس المال',
      'تحليل مقارن للأسعار في مختلف مناطق السادات (المنطقة 21، 29، 14، والمحور المركزي)',
      'استشارات قانونية وهندسية للتأكد من سلامة موقف الأرض أو الوحدة واشتراطات الجهاز',
      'ترشيح أفضل الفرص الحصرية المتاحة للاستثمار الفوري بسعر مرحلة الطرح الأولى',
      'خطط تخارج وإعادة بيع مدروسة تحقق أعلى أرباح رأسمالية',
    ],
    deliverablesEn: [
      'Comprehensive ROI and capital payback feasibility report',
      'Comparative pricing index across Sadat districts (Zones 14, 21, 29, and Central Axis)',
      'Legal & zoning verification ensuring clean title and compliance with Sadat Authority',
      'Curated exclusive investment opportunities ready for priority acquisition',
      'Strategic exit and resale advisory maximizing capital appreciation',
    ],
    standardsAr: ['أرقام واقعية بلا مبالغة', 'رؤية مستقبلية للمدينة', 'سرية استثمارية تامة', 'تحليل مخاطر متكامل'],
    standardsEn: ['Grounded metrics without hype', 'Forward-looking urban vision', 'Strict client confidentiality', 'Comprehensive risk analysis'],
    stepsAr: [
      { title: 'تحديد الأهداف الاستثمارية', desc: 'مناقشة حجم رأس المال، نوع الاستثمار المفضل (سكني/تجاري/أراضي)، والمدى الزمني.', duration: 'جلسة أولى' },
      { title: 'تحليل السوق والخيارات', desc: 'مقارنة الفرص المتاحة في أحياء السادات وتحديد متوسطات الأسعار والعائد المتوقع.', duration: 'خلال 3 أيام' },
      { title: 'الفحص القانوني والهندسي', desc: 'مراجعة أوراق الملكية والتراخيص واشتراطات جهاز مدينة السادات.', duration: 'خلال 48 ساعة' },
      { title: 'إعداد خطة التنفيذ والتخارج', desc: 'صياغة استراتيجية الشراء وجدول السداد وتوقيت إعادة البيع أو التأجير.', duration: 'تقرير استثماري' },
    ],
    stepsEn: [
      { title: 'Investor Profiling', desc: 'Clarifying capital capacity, asset preference, and horizon.', duration: '1st Session' },
      { title: 'Market Intelligence & Options', desc: 'Comparing Sadat zones, price trajectories, and projected yields.', duration: '3 Days' },
      { title: 'Legal & Zoning Due Diligence', desc: 'Auditing title deeds, permits, and municipal zoning with Sadat Authority.', duration: '48 Hours' },
      { title: 'Execution & Exit Roadmap', desc: 'Structuring acquisition, payment milestones, and optimal exit timing.', duration: 'Investment Dossier' },
    ],
    faqsAr: [
      { q: 'ما المناطق الأكثر جذباً للاستثمار السريع في السادات حالياً؟', a: 'المنطقة 29 تحقق أعلى عائد إيجاري بفضل قربها من الجامعة، والمنطقة 21 تحقق أعلى نمو في القيمة الرأسمالية للفيلات والشقق الفاخرة.' },
      { q: 'هل تقدمون استشارات مجانية؟', a: 'نعم، نوفر جلسة استشارية أولية مجانية لمناقشة أهدافك الاستثمارية بمقر الشركة بجنة مول.' },
    ],
    faqsEn: [
      { q: 'Which Sadat City zones offer peak returns?', a: 'Zone 29 yields highest rental cash flow due to university demand, while Zone 21 delivers peak capital appreciation for luxury residences.' },
      { q: 'Do you offer complimentary initial consultations?', a: 'Yes, we provide a complimentary introductory session at our Ganna Mall HQ.' },
    ],
    ctaTextAr: 'حجز جلسة استشارة استثمارية',
    ctaTextEn: 'Book Investment Advisory Session',
    whatsappMessageAr: 'مرحباً، أريد حجز جلسة استشارة عقارية لمناقشة فرص الاستثمار ودراسات الجدوى في مدينة السادات.',
    whatsappMessageEn: 'Hello, I would like to book a consultation regarding investment opportunities in Sadat City.',
  },
];
