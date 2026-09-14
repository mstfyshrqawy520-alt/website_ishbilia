export interface ProjectUnit {
  id: string;
  name: string;
  nameEn: string;
  floor: 'ground' | 'typical';
  area: number; // m²
  gardenArea?: number; // m²
  bedrooms: number;
  bathrooms: number;
  orientation: string;
  orientationEn: string;
  features: string[];
  featuresEn: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  plotNumber: string;
  zone: string;
  zoneEn: string;
  city: string;
  cityEn: string;
  type: string;
  typeEn: string;
  status: 'available' | 'in-progress' | 'completed';
  statusLabel: string;
  statusLabelEn: string;
  description: string;
  descriptionEn: string;
  facadeImage: string;
  locationImage?: string;
  groundFloorImage?: string;
  typicalFloorImage?: string;
  locationHighlights: string[];
  locationHighlightsEn: string[];
  salesPhone: string;
  salesWhatsapp: string;
  units: ProjectUnit[];
}

export const projectsData: Project[] = [
  {
    id: 'project-1518',
    slug: 'ishbilia-1518-zone-29',
    title: 'مشروع إشبيلية 1518',
    titleEn: 'Ishbilia 1518 Project',
    plotNumber: '1518',
    zone: 'المنطقة 29',
    zoneEn: 'Zone 29',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز الآن',
    statusLabelEn: 'Available for Booking',
    description: 'فرصة استثمارية مميزة بموقع استثنائي وواجهة بحري ناصية على شارعين رئيسيين في قلب المنطقة 29، بتصميم نيوكلاسيكي فاخر وشقق بمساحات تلبي أعلى متطلبات الرفاهية والخصوصية.',
    descriptionEn: 'An exceptional investment opportunity in a prime location with a north-facing corner facade on two main streets in Zone 29, featuring neoclassical architecture and luxury apartments.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    locationImage: '/images/projects/project-1518-location.png',
    groundFloorImage: '/images/projects/project-1518-ground-floor.png',
    typicalFloorImage: '/images/projects/project-1518-typical-floor.png',
    salesPhone: '01010722349',
    salesWhatsapp: '201010722349',
    locationHighlights: [
      'خطوات معدودة من جامعة مدينة السادات',
      'ثاني نمرة من مجمع خدمات المنطقة 29 (مسجد - مدرسة - مركز طبي)',
      'ثالث نمرة من المحور المركزي القديم',
      'واجهة بحري ناصية صريحة على شارعين رئيسيين'
    ],
    locationHighlightsEn: [
      'Steps away from Sadat City University',
      'Second plot from Zone 29 Services Complex (Mosque, School, Nursery, Commercial & Medical)',
      'Third plot from Old Central Axis',
      'Prime north-facing corner facade on two main streets'
    ],
    units: [
      {
        id: '1518-u1',
        name: 'شقة 1 (أرضي أمامي بحري ناصية)',
        nameEn: 'Apt 1 (Ground Front North Corner)',
        floor: 'ground',
        area: 201,
        gardenArea: 85,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري ناصية',
        orientationEn: 'North Corner',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'ريسبشن كبير', 'مطبخ مستقل', 'حديقة خاصة 85 م²'],
        featuresEn: ['Private front entrance', 'Private rear entrance', 'Large reception', 'Separate kitchen', '85m² private garden']
      },
      {
        id: '1518-u2',
        name: 'شقة 2 (أرضي أمامي غربي)',
        nameEn: 'Apt 2 (Ground Front West)',
        floor: 'ground',
        area: 172,
        gardenArea: 111,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'أمامي غربي (ناحية 1519)',
        orientationEn: 'Front West (Facing 1519)',
        features: ['حديقة خاصة كبيرة 111 م²', 'ريسبشن كبير', '3 غرف نوم', '3 حمامات', 'مطبخ واسع'],
        featuresEn: ['Large private garden 111m²', 'Large reception', '3 bedrooms', '3 bathrooms', 'Spacious kitchen']
      },
      {
        id: '1518-u3',
        name: 'شقة 3 (علوي متكرر بحري غربي)',
        nameEn: 'Apt 3 (Typical Floor North-West)',
        floor: 'typical',
        area: 139,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري غربي (ناحية 1517)',
        orientationEn: 'North-West (Facing 1517)',
        features: ['إطلالة مميزة مفتوحة', 'ريسبشن كبير', '3 غرف نوم', '2 حمام', 'تراس واسع'],
        featuresEn: ['Open view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Spacious terrace']
      },
      {
        id: '1518-u4',
        name: 'شقة 4 (علوي متكرر بحري شرقي ناصية)',
        nameEn: 'Apt 4 (Typical Floor North-East Corner)',
        floor: 'typical',
        area: 169,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري شرقي ناصية',
        orientationEn: 'North-East Corner',
        features: ['فرندة كبيرة فاخرة', 'تراس إضافي', 'ريسبشن كبير جداً', '3 حمامات', 'أفضل إطلالة في المبنى'],
        featuresEn: ['Large luxury veranda', 'Additional terrace', 'Extra-large reception', '3 bathrooms', 'Prime view']
      },
      {
        id: '1518-u5',
        name: 'شقة 5 (علوي متكرر أمامي غربي)',
        nameEn: 'Apt 5 (Typical Floor Front West)',
        floor: 'typical',
        area: 154,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي غربي (ناحية 1519)',
        orientationEn: 'Front West (Facing 1519)',
        features: ['إطلالة متميزة', 'ريسبشن كبير', '3 غرف نوم', '2 حمام', 'تراس'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Terrace']
      }
    ]
  },
  {
    id: 'project-1490',
    slug: 'ishbilia-1490-golden-zone',
    title: 'مشروع إشبيلية 1490 (المنطقة الذهبية)',
    titleEn: 'Ishbilia 1490 (Golden Zone)',
    plotNumber: '1490',
    zone: 'المنطقة الذهبية',
    zoneEn: 'The Golden Zone',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'مشروع سكني استثنائي يقع في قلب المنطقة الذهبية على بعد 150 مترًا من طريق الأكسدة وبالقرب من جامعة مدينة السادات، يتميز بتنوع المساحات والحدائق الخاصة الكبيرة.',
    descriptionEn: 'An exceptional residential development located in the heart of the Golden Zone, 150m from Oxidation Road and near Sadat City University.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'موقع استثنائي في المنطقة الذهبية الأكثر طلباً',
      'على بعد 150 مترًا فقط من طريق الأكسدة الحيوي',
      'بالقرب من الحرم الجامعي لجامعة مدينة السادات',
      'حدائق خاصة تصل إلى 110 م² للوحدات الأرضية'
    ],
    locationHighlightsEn: [
      'Exceptional location in the highly demanded Golden Zone',
      'Just 150 meters from Oxidation Road',
      'Close to Sadat City University campus',
      'Private gardens up to 110m² for ground units'
    ],
    units: [
      {
        id: '1490-u1',
        name: 'شقة أرضي خلفي مع حديقة',
        nameEn: 'Ground Rear with Garden',
        floor: 'ground',
        area: 134,
        gardenArea: 110,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي هادئ',
        orientationEn: 'Quiet Rear',
        features: ['حديقة خاصة ضخمة 110 م²', '3 غرف نوم', '2 حمام', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Huge private garden 110m²', '3 bedrooms', '2 bathrooms', 'Large reception', 'Terrace']
      },
      {
        id: '1490-u2',
        name: 'شقة أرضي أمامي (ناحية 1491)',
        nameEn: 'Ground Front (Facing 1491)',
        floor: 'ground',
        area: 139,
        gardenArea: 17,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي (ناحية 1491)',
        orientationEn: 'Front (Facing 1491)',
        features: ['حديقة أمامية 17 م²', '3 غرف نوم', '2 حمام', 'مطبخ مستقل', 'ريسبشن كبير'],
        featuresEn: ['Front garden 17m²', '3 bedrooms', '2 bathrooms', 'Separate kitchen', 'Large reception']
      },
      {
        id: '1490-u3',
        name: 'شقة علوي متكرر 167 م²',
        nameEn: 'Typical Floor 167m²',
        floor: 'typical',
        area: 167,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'علوي أمامي / ناصية',
        orientationEn: 'Upper Front / Corner',
        features: ['مساحة واسعة 167 م²', '3 غرف نوم', 'ريسبشن كبير جداً', '2 تراس', 'مطبخ عائلي كبير'],
        featuresEn: ['Spacious 167m²', '3 bedrooms', 'Extra-large reception', '2 terraces', 'Large family kitchen']
      }
    ]
  },
  {
    id: 'project-plaza',
    slug: 'ishbilia-commercial-plaza',
    title: 'إشبيلية بلازا (تجاري وإداري)',
    titleEn: 'Ishbilia Plaza (Commercial & Admin)',
    plotNumber: '810',
    zone: 'المنطقة المركزية',
    zoneEn: 'Central Zone',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'تجاري - إداري',
    typeEn: 'Commercial & Administrative',
    status: 'in-progress',
    statusLabel: 'قيد التخطيط والتنفيذ',
    statusLabelEn: 'Under Planning & Execution',
    description: 'مجمع تجاري وإداري متكامل مصمم بأحدث المعايير العصرية ليخدم الأنشطة التجارية والعيادات الطبية والمقرات الإدارية في مدينة السادات.',
    descriptionEn: 'Integrated commercial and administrative complex designed with modern standards to serve commercial, clinic, and corporate activities.',
    facadeImage: '/images/projects/project-810-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'موقع استراتيجي على محور رئيسي',
      'تصميم مخصص لخدمة المقرات الإدارية والعيادات الطبية',
      'مساحات تجارية متنوعة مع واجهات زجاجية واسعة'
    ],
    locationHighlightsEn: [
      'Strategic location on main axis',
      'Dedicated design for administrative offices and clinics',
      'Versatile commercial spaces with broad glass facades'
    ],
    units: []
  }
];
