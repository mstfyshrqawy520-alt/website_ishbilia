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
  googleMapsUrl?: string;
  latitude?: number;
  longitude?: number;
  units: ProjectUnit[];
}

export interface PlotLocationData {
  mapsUrl: string;
  lat: number;
  lng: number;
}

export const plotLocationsData: Record<string, PlotLocationData> = {
  '190': {
    mapsUrl: 'https://www.google.com/maps/place/@30.404335284308647,30.542269804257387',
    lat: 30.40433528,
    lng: 30.5422698,
  },
  '1297': {
    mapsUrl: 'https://maps.app.goo.gl/XXkV9v9Z4qXX7f4U9?g_st=ac',
    lat: 30.404543,
    lng: 30.522331,
  },
  '1301': {
    mapsUrl: 'https://maps.app.goo.gl/BjZ7eJy6sWoLRcCM7',
    lat: 30.404785,
    lng: 30.522646,
  },
  '1413': {
    mapsUrl: 'https://www.google.com/maps/place/@30.402329637405412,30.525985404248303',
    lat: 30.40232964,
    lng: 30.5259854,
  },
  '1483': {
    mapsUrl: 'https://www.google.com/maps/place/@30.400329965285977,30.522626597956965',
    lat: 30.40032997,
    lng: 30.5226266,
  },
  '638': {
    mapsUrl: 'https://www.google.com/maps/place/@30.39522078947298,30.519550532487614',
    lat: 30.39522079,
    lng: 30.51955053,
  },
  '1164': {
    mapsUrl: 'https://www.google.com/maps/place/@30.399340730999047,30.518392420266576',
    lat: 30.39934073,
    lng: 30.51839242,
  },
  '1152': {
    mapsUrl: 'https://www.google.com/maps/place/@30.40011866950386,30.51746933105071',
    lat: 30.40011867,
    lng: 30.51746933,
  },
  '810': {
    mapsUrl: 'https://www.google.com/maps/place/@30.39241300455798,30.51136930000694',
    lat: 30.392413,
    lng: 30.5113693,
  },
  '1518': {
    mapsUrl: 'https://www.google.com/maps/place/@30.401066359537644,30.52534984199647',
    lat: 30.40106636,
    lng: 30.52534984,
  },
  '814': {
    mapsUrl: 'https://www.google.com/maps/place/@30.39269884159403,30.51169453052786',
    lat: 30.39269884,
    lng: 30.51169453,
  },
  '198': {
    mapsUrl: 'https://www.google.com/maps/place/@30.40558632060105,30.543658629288966',
    lat: 30.40558632,
    lng: 30.54365863,
  },
  '235': {
    mapsUrl: 'https://www.google.com/maps/place/@30.406836296697154,30.54510211226871',
    lat: 30.4068363,
    lng: 30.54510211,
  },
  '1165': {
    mapsUrl: 'https://www.google.com/maps/place/@30.399192042358578,30.518616716815426',
    lat: 30.39919204,
    lng: 30.51861672,
  },
  '1220': {
    mapsUrl: 'https://www.google.com/maps/place/@30.401071126575825,30.52025912589329',
    lat: 30.40107113,
    lng: 30.52025913,
  },
  '1317': {
    mapsUrl: 'https://www.google.com/maps/place/@30.40442542336392,30.524228145567214',
    lat: 30.40442542,
    lng: 30.52422815,
  },
  '1307': {
    mapsUrl: 'https://www.google.com/maps/place/@30.405221842667352,30.523288955958044',
    lat: 30.40522184,
    lng: 30.52328896,
  },
  '1167': {
    mapsUrl: 'https://www.google.com/maps/place/@30.399294627872127,30.51901487599778',
    lat: 30.39929463,
    lng: 30.51901488,
  },
  '1064': {
    mapsUrl: 'https://www.google.com/maps/place/@30.398534319849045,30.519717098356796',
    lat: 30.39853432,
    lng: 30.5197171,
  },
  '1341': {
    mapsUrl: 'https://www.google.com/maps/place/@30.403788421607263,30.522743741790194',
    lat: 30.40378842,
    lng: 30.52274374,
  },
  '1371': {
    mapsUrl: 'https://www.google.com/maps/place/@30.401884914512813,30.52317720509968',
    lat: 30.40188491,
    lng: 30.52317721,
  },
  '421': {
    mapsUrl: 'https://www.google.com/maps/place/@30.395363004766864,30.495304067558834',
    lat: 30.395363,
    lng: 30.49530407,
  },
  '623': {
    mapsUrl: 'https://www.google.com/maps/place/@30.40052253903674,30.494768991724754',
    lat: 30.40052254,
    lng: 30.49476899,
  },
  '1500': {
    mapsUrl: 'https://www.google.com/maps/place/@30.406802818713647,30.487449978743673',
    lat: 30.40680282,
    lng: 30.48744998,
  },
  '584': {
    mapsUrl: 'https://www.google.com/maps/place/@30.399285174794876,30.49674780262689',
    lat: 30.39928517,
    lng: 30.4967478,
  },
  '60': {
    mapsUrl: 'https://www.google.com/maps/place/@30.40149430187148,30.547385635898344',
    lat: 30.4014943,
    lng: 30.54738564,
  },
  '1490': {
    mapsUrl: 'https://www.google.com/maps/place/@30.400951449103722,30.522890573723487',
    lat: 30.40095145,
    lng: 30.52289057,
  },
  '1445': {
    mapsUrl: 'https://www.google.com/maps/place/@30.404200338242635,30.491005287276092',
    lat: 30.40420034,
    lng: 30.49100529,
  },
  '578': {
    mapsUrl: 'https://www.google.com/maps/place/@30.398660234671667,30.496927815048345',
    lat: 30.39866023,
    lng: 30.49692782,
  },
  '696': {
    mapsUrl: 'https://www.google.com/maps/place/@30.392624264405274,30.5143675707549',
    lat: 30.39262426,
    lng: 30.51436757,
  },
  '1372': {
    mapsUrl: 'https://www.google.com/maps/place/@30.402029931649526,30.522924700189503',
    lat: 30.40202993,
    lng: 30.5229247,
  },
  '1254': {
    mapsUrl: 'https://www.google.com/maps/place/@30.403566962596525,30.491762740129936',
    lat: 30.40356696,
    lng: 30.49176274,
  },
  '659': {
    mapsUrl: 'https://www.google.com/maps/place/@30.395485491773474,30.517205555931042',
    lat: 30.39548549,
    lng: 30.51720556,
  },
  '1378': {
    mapsUrl: 'https://www.google.com/maps/place/@30.400516559816882,30.4883000595583',
    lat: 30.40051656,
    lng: 30.48830006,
  },
  '1488': {
    mapsUrl: 'https://www.google.com/maps/place/@30.40081385349643,30.52276266207326',
    lat: 30.40081385,
    lng: 30.52276266,
  },
};

export function getProjectLocationUrl(plotNumber: string): string {
  const loc = plotLocationsData[plotNumber];
  if (loc && loc.mapsUrl) {
    return loc.mapsUrl;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`مدينة السادات قطعة ${plotNumber}`)}`;
}

const rawProjectsData: Project[] = [
  // ==========================================
  // المنطقة 35 (Zone 35) - واجهة الجامعة ومول جولدن ليف
  // ==========================================
  {
    id: 'project-198',
    slug: 'ishbilia-198-zone-35',
    title: 'مشروع إشبيلية 198 (دابل فيس ناصية)',
    titleEn: 'Ishbilia 198 (Double-Face Corner)',
    plotNumber: '198',
    zone: 'المنطقة 35',
    zoneEn: 'Zone 35',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز الآن',
    statusLabelEn: 'Available for Booking',
    description: 'قطعة دابل فيس ناصية في موقع استثنائي لا يُضاهى في قلب مدينة السادات بالمنطقة 35، تقع مباشرة أمام جامعة مدينة السادات وأمام مول وكومبوند جولدن ليف وعلى المحور المركزي مباشرة.',
    descriptionEn: 'An exceptional double-face corner development in Zone 35, directly facing Sadat City University, Golden Leaf Mall & Compound, and situated right on the Central Axis.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01016144927',
    salesWhatsapp: '201016144927',
    locationHighlights: [
      '130 متر فقط من بوابة جامعة مدينة السادات',
      '70 متر من مول وكومبوند جولدن ليف المتكامل',
      '400 متر من مستشفى جامعة مدينة السادات',
      'مباشرة على المحور المركزي قطعة دابل فيس ناصية غير مجروحة'
    ],
    locationHighlightsEn: [
      '130m from Sadat City University main gate',
      '70m from Golden Leaf Mall & Compound',
      '400m from Sadat University Hospital',
      'Directly on the Central Axis - Double-face corner plot'
    ],
    units: [
      {
        id: '198-u1',
        name: 'شقة أرضي بحري غربي مع حديقة',
        nameEn: 'Ground North-West with Private Garden',
        floor: 'ground',
        area: 185,
        gardenArea: 110,
        bedrooms: 3,
        bathrooms: 4,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['مدخل أمامي خاص', 'حديقة خاصة', 'ريسبشن كبير', '3 غرف نوم', '4 حمامات', 'مطبخ مستقل', 'تراس'],
        featuresEn: ['Private front entrance', 'Private garden', 'Large reception', '3 bedrooms', '4 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '198-u2',
        name: 'شقة أرضي بحري شرقي مع حديقة',
        nameEn: 'Ground North-East with Private Garden',
        floor: 'ground',
        area: 185,
        gardenArea: 105,
        bedrooms: 3,
        bathrooms: 4,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['مدخل أمامي خاص', 'حديقة خاصة', 'ريسبشن كبير جداً', '3 غرف نوم', '4 حمامات', 'مطبخ مستقل', 'تراس'],
        featuresEn: ['Private front entrance', 'Private garden', 'Extra-large reception', '3 bedrooms', '4 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '198-u3',
        name: 'شقة متكرر بحري غربي (إطلالة مميزة)',
        nameEn: 'Typical Floor North-West (Prime View)',
        floor: 'typical',
        area: 145,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['ريسبشن كبير', '3 غرف نوم', '3 حمامات', 'مطبخ', 'تراس أمامي', 'تراس خلفي'],
        featuresEn: ['Large reception', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Front terrace', 'Rear terrace']
      },
      {
        id: '198-u4',
        name: 'شقة متكرر بحري شرقي (مساحة كبرى)',
        nameEn: 'Typical Floor North-East (Grand Layout)',
        floor: 'typical',
        area: 170,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['ريسبشن كبير جداً', '3 غرف نوم', '3 حمامات', 'مطبخ واسع', 'تراس أمامي', 'تراس جانبي'],
        featuresEn: ['Extra-large reception', '3 bedrooms', '3 bathrooms', 'Spacious kitchen', 'Front terrace', 'Side terrace']
      },
      {
        id: '198-u5',
        name: 'شقة متكرر 132 م²',
        nameEn: 'Typical Floor 132m²',
        floor: 'typical',
        area: 132,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري مميز',
        orientationEn: 'Distinctive North',
        features: ['ريسبشن كبير', '3 غرف نوم', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      }
    ]
  },
  {
    id: 'project-190',
    slug: 'ishbilia-190-zone-35',
    title: 'مشروع إشبيلية 190 (دابل فيس أمام الجامعة)',
    titleEn: 'Ishbilia 190 (Double-Face University Front)',
    plotNumber: '190',
    zone: 'المنطقة 35',
    zoneEn: 'Zone 35',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'قطعة دابل فيس ذات واجهة غير مجروحة في مكان استراتيجي تضعك في قلب مدينة السادات بالمنطقة 35 مباشرة أمام جامعة مدينة السادات وعلى المحور المركزي.',
    descriptionEn: 'A prime double-face residence with open panoramic facades in Zone 35, situated directly in front of Sadat City University on the Central Axis.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01026640478',
    salesWhatsapp: '201026640478',
    locationHighlights: [
      '140 متر من بوابة جامعة مدينة السادات',
      '100 متر من مول جولدن ليف',
      '400 متر من مستشفى جامعة مدينة السادات',
      'مباشرة على المحور المركزي - واجهة دابل فيس غير مجروحة'
    ],
    locationHighlightsEn: [
      '140m from Sadat City University Gate',
      '100m from Golden Leaf Mall',
      '400m from Sadat University Hospital',
      'Direct on Central Axis with unblocked vistas'
    ],
    units: [
      {
        id: '190-u1',
        name: 'شقة أرضي بحري غربي بمدخل خاص وحديقة',
        nameEn: 'Ground North-West Private Entrance & Garden',
        floor: 'ground',
        area: 180,
        gardenArea: 95,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['مدخل أمامي خاص', 'حديقة خاصة', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', '2 تراس'],
        featuresEn: ['Private front entrance', 'Private garden', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', '2 terraces']
      },
      {
        id: '190-u2',
        name: 'شقة أرضي بحري شرقي بمدخلين وحديقة',
        nameEn: 'Ground North-East Dual Entrances & Garden',
        floor: 'ground',
        area: 180,
        gardenArea: 100,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'حديقة خاصة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Private front entrance', 'Private rear entrance', 'Private garden', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '190-u3',
        name: 'شقة متكرر بحري غربي 153 م²',
        nameEn: 'Typical Floor North-West 153m²',
        floor: 'typical',
        area: 153,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس أمامي'],
        featuresEn: ['Prime view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Front terrace']
      },
      {
        id: '190-u4',
        name: 'شقة متكرر بحري شرقي 148 م²',
        nameEn: 'Typical Floor North-East 148m²',
        floor: 'typical',
        area: 148,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس أمامي'],
        featuresEn: ['Prime view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Front terrace']
      },
      {
        id: '190-u5',
        name: 'شقة متكرر 134 م²',
        nameEn: 'Typical Floor 134m²',
        floor: 'typical',
        area: 134,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري مميز',
        orientationEn: 'North View',
        features: ['ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      }
    ]
  },
  {
    id: 'project-162',
    slug: 'ishbilia-162-zone-35',
    title: 'مشروع إشبيلية 162 (ثاني نمرة من المحور المركزي)',
    titleEn: 'Ishbilia 162 (Central Axis Corner)',
    plotNumber: '162',
    zone: 'المنطقة 35',
    zoneEn: 'Zone 35',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'قطعة ناصية تقع في مكان استراتيجي لا يُضاهى بالمنطقة 35، ثاني نمرة من المحور المركزي حيث القرب من كافة الخدمات والجامعة وكومبوند جولدن ليف.',
    descriptionEn: 'A prime corner plot in Zone 35, just second plot from the Central Axis, moments away from Sadat City University and Golden Leaf compound.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01016144927',
    salesWhatsapp: '201016144927',
    locationHighlights: [
      'ثاني نمرة من المحور المركزي لمدينة السادات',
      '400 متر من بوابة جامعة مدينة السادات',
      '200 متر من كومبوند ومول جولدن ليف',
      '700 متر من مستشفى جامعة مدينة السادات'
    ],
    locationHighlightsEn: [
      'Second plot from Central Axis',
      '400m from Sadat City University gate',
      '200m from Golden Leaf Compound & Mall',
      '700m from Sadat University Hospital'
    ],
    units: [
      {
        id: '162-u1',
        name: 'شقة أرضي مدخل خاص 130 م²',
        nameEn: 'Ground Floor Private Entrance 130m²',
        floor: 'ground',
        area: 130,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري',
        orientationEn: 'North',
        features: ['مدخل خاص', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Private entrance', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '162-u2',
        name: 'شقة أرضي بمدخل وحديقة خاصة 135 م²',
        nameEn: 'Ground Floor Garden & Private Entrance 135m²',
        floor: 'ground',
        area: 135,
        gardenArea: 80,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['مدخل خاص', 'حديقة خاصة', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', '2 تراس'],
        featuresEn: ['Private entrance', 'Private garden', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', '2 terraces']
      },
      {
        id: '162-u3',
        name: 'شقة أرضي بمدخل وحديقة خاصة 135 م² (نموذج ب)',
        nameEn: 'Ground Floor Garden & Private Entrance 135m² (Type B)',
        floor: 'ground',
        area: 135,
        gardenArea: 85,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['مدخل خاص', 'حديقة خاصة', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', '2 تراس'],
        featuresEn: ['Private entrance', 'Private garden', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', '2 terraces']
      },
      {
        id: '162-u4',
        name: 'شقة متكرر بحري شرقي 140 م²',
        nameEn: 'Typical North-East 140m²',
        floor: 'typical',
        area: 140,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس أمامي'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Front terrace']
      },
      {
        id: '162-u5',
        name: 'شقة متكرر بحري غربي 140 م²',
        nameEn: 'Typical North-West 140m²',
        floor: 'typical',
        area: 140,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس أمامي'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Front terrace']
      }
    ]
  },

  // ==========================================
  // حي الروضة والريحان (Al-Rawda & Al-Rayhan)
  // ==========================================
  {
    id: 'project-578',
    slug: 'ishbilia-578-rawda-rayhan',
    title: 'مشروع إشبيلية 578 (الفاصل بين الروضة والريحان)',
    titleEn: 'Ishbilia 578 (Al-Rawda & Al-Rayhan Divider)',
    plotNumber: '578',
    zone: 'الروضة والريحان',
    zoneEn: 'Al-Rawda & Al-Rayhan',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز الآن',
    statusLabelEn: 'Available for Booking',
    description: 'موقع استثنائي مباشرة أمام الفاصل بين الروضة والريحان، وعلى بعد خطوات من طريق الأكسدة والمحور المركزي الجديد ومسجد الروضة، مع حدائق خاصة ضخمة تصل إلى 115 م².',
    descriptionEn: 'An exceptional location directly in front of the divider between Al-Rawda and Al-Rayhan, steps from Oxidation Road and New Central Axis, featuring private gardens up to 115m².',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الفاصل بين حي الروضة وحي الريحان',
      '100 متر فقط من طريق الأكسدة الحيوي',
      '100 متر من مسجد الروضة الكبير',
      'على بعد خطوات من المحور المركزي الجديد'
    ],
    locationHighlightsEn: [
      'Directly on the divider between Al-Rawda & Al-Rayhan',
      '100m from Oxidation Road',
      '100m from Al-Rawda Mosque',
      'Steps from the New Central Axis'
    ],
    units: [
      {
        id: '578-u1',
        name: 'شقة أرضي خلفي مع حديقة 115 م²',
        nameEn: 'Ground Rear with 115m² Garden',
        floor: 'ground',
        area: 140,
        gardenArea: 115,
        bedrooms: 3,
        bathrooms: 1,
        orientation: 'خلفي هادئ',
        orientationEn: 'Quiet Rear',
        features: ['حديقة خاصة ضخمة 115 م²', 'مدخل خاص', 'غرفة غسيل مستقلة', '3 غرف نوم', 'حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Huge private garden 115m²', 'Private entrance', 'Laundry room', '3 bedrooms', 'Bathroom', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '578-u2',
        name: 'شقة أرضي أمامي بحري (149 م² + حديقة 36 م²)',
        nameEn: 'Ground Front North (149m² + 36m² Garden)',
        floor: 'ground',
        area: 149,
        gardenArea: 36,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري ناحية 581',
        orientationEn: 'Front North facing 581',
        features: ['مساحة واسعة 149 م²', 'حديقة خاصة 36 م²', 'مدخل خاص', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Spacious 149m²', '36m² private garden', 'Private entrance', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '578-u3',
        name: 'شقة أرضي أمامي ناصية ممر (120 م² + حديقة 29 م²)',
        nameEn: 'Ground Front Corner (120m² + 29m² Garden)',
        floor: 'ground',
        area: 120,
        gardenArea: 29,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي يمين ناصية ممر',
        orientationEn: 'Front Right corridor corner',
        features: ['حديقة خاصة 29 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private garden 29m²', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '578-u4',
        name: 'شقة علوي متكرر ناصية 139 م²',
        nameEn: 'Typical Floor Corner 139m²',
        floor: 'typical',
        area: 139,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'ناصية ناحية ممر',
        orientationEn: 'Corner facing corridor',
        features: ['3 تراسات بإطلالات مفتوحة', '3 غرف نوم', '2 حمام', 'ريسبشن كبير جداً', 'مطبخ'],
        featuresEn: ['3 panoramic terraces', '3 bedrooms', '2 bathrooms', 'Large reception', 'Kitchen']
      },
      {
        id: '578-u5',
        name: 'شقة علوي بحري خلفي 123 م²',
        nameEn: 'Typical North Rear 123m²',
        floor: 'typical',
        area: 123,
        bedrooms: 3,
        bathrooms: 1,
        orientation: 'بحري خلفي ناحية 581',
        orientationEn: 'North Rear facing 581',
        features: ['3 غرف نوم', 'حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['3 bedrooms', 'Bathroom', 'Kitchen', 'Large reception', 'Terrace']
      }
    ]
  },
  {
    id: 'project-584',
    slug: 'ishbilia-584-rawda-rayhan',
    title: 'مشروع إشبيلية 584 (مباشرة على الفاصل)',
    titleEn: 'Ishbilia 584 (Direct On Al-Rawda/Al-Rayhan Divider)',
    plotNumber: '584',
    zone: 'الروضة والريحان',
    zoneEn: 'Al-Rawda & Al-Rayhan',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع مميز وفرصة استثمارية لا تتكرر مباشرة أمام الفاصل بين الروضة والريحان، على بعد 100 متر من طريق الأكسدة، مع شقق تصل مساحاتها إلى 196 م² وأربعة تراسات.',
    descriptionEn: 'A prime development directly facing the Al-Rawda and Al-Rayhan divider, 100m from Oxidation Road, offering grand apartments up to 196m² with four terraces.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الفاصل بين الروضة والريحان',
      '100 متر من طريق الأكسدة الحيوي',
      '100 متر من مسجد الروضة الكبير',
      'شقق أرضي بحدائق خاصة 83م² - 97م² ومدخل خاص'
    ],
    locationHighlightsEn: [
      'Directly in front of Al-Rawda & Al-Rayhan divider',
      '100m from Oxidation Road',
      '100m from Al-Rawda Mosque',
      'Ground units with private gardens 83m² - 97m²'
    ],
    units: [
      {
        id: '584-u1',
        name: 'شقة أرضي خلفي (169 م² + حديقة 93 م²)',
        nameEn: 'Ground Rear (169m² + 93m² Garden)',
        floor: 'ground',
        area: 169,
        gardenArea: 93,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي',
        orientationEn: 'Rear',
        features: ['مدخل خاص', 'حديقة خاصة 93 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '93m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '584-u2',
        name: 'شقة أرضي أمامي يسار (164 م² + حديقة 97 م²)',
        nameEn: 'Ground Front Left (164m² + 97m² Garden)',
        floor: 'ground',
        area: 164,
        gardenArea: 97,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'أمامي يسار',
        orientationEn: 'Front Left',
        features: ['مدخل خاص', 'حديقة خاصة 97 م²', '3 غرف نوم', '3 حمامات', 'مطبخ واسع', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '97m² garden', '3 bedrooms', '3 bathrooms', 'Spacious kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '584-u3',
        name: 'شقة أرضي ناصية (158 م² + حديقة 83 م²)',
        nameEn: 'Ground Corner (158m² + 83m² Garden)',
        floor: 'ground',
        area: 158,
        gardenArea: 83,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي ناصية',
        orientationEn: 'Front Corner',
        features: ['مدخل خاص', 'حديقة خاصة 83 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '83m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '584-u4',
        name: 'شقة علوي أمامي ناصية 196 م² (4 تراسات)',
        nameEn: 'Typical Front Corner 196m² (4 Terraces)',
        floor: 'typical',
        area: 196,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'أمامي ناصية صريحة',
        orientationEn: 'Front Corner',
        features: ['مساحة ملكية 196 م²', '4 تراسات واسعة', '3 غرف نوم', '3 حمامات', 'ريسبشن كبير جداً', 'مطبخ عائلي'],
        featuresEn: ['Palatial 196m²', '4 expansive terraces', '3 bedrooms', '3 bathrooms', 'Extra-large reception', 'Family kitchen']
      }
    ]
  },
  {
    id: 'project-637',
    slug: 'ishbilia-637-rawda-rayhan',
    title: 'مشروع إشبيلية 637 (أمام الميدان الفاصل ومسطح أخضر)',
    titleEn: 'Ishbilia 637 (Facing Grand Roundabout & Green Park)',
    plotNumber: '637',
    zone: 'الروضة والريحان',
    zoneEn: 'Al-Rawda & Al-Rayhan',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع إستثنائي مباشرة أمام الميدان الفاصل بين الروضة والريحان، 150 متر من طريق الأكسدة، خطوات من جامعة الريادة، إطلالة مباشرة على مسطح أخضر كبير وحدائق خاصة حتى 124 م².',
    descriptionEn: 'Directly in front of the grand roundabout separating Al-Rawda & Al-Rayhan, 150m from Oxidation Road and near Al-Rayada University, overlooking a lush green park.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الميدان الفاصل بين الروضة والريحان',
      '150 متر من طريق الأكسدة الحيوي',
      'على بعد خطوات من جامعة الريادة',
      'إطلالة بانورامية مباشرة على مسطح أخضر كبير'
    ],
    locationHighlightsEn: [
      'Directly facing the Al-Rawda/Al-Rayhan central roundabout',
      '150m from Oxidation Road',
      'Walking distance to Al-Rayada University',
      'Panoramic view overlooking green landscaped park'
    ],
    units: [
      {
        id: '637-u1',
        name: 'شقة أرضي أمامي مسطح أخضر (148 م² + حديقة 124 م²)',
        nameEn: 'Ground Front Park View (148m² + 124m² Garden)',
        floor: 'ground',
        area: 148,
        gardenArea: 124,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري على المسطح الأخضر',
        orientationEn: 'Front North overlooking Park',
        features: ['حديقة خاصة ضخمة 124 م²', 'إطلالة على المسطح الأخضر', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['Huge 124m² private garden', 'Park view', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      },
      {
        id: '637-u2',
        name: 'شقة أرضي أمامي (162 م² + حديقة 36 م²)',
        nameEn: 'Ground Front Right (162m² + 36m² Garden)',
        floor: 'ground',
        area: 162,
        gardenArea: 36,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي يمين ناحية 636',
        orientationEn: 'Front Right facing 636',
        features: ['مدخل خاص', 'حديقة خاصة 36 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '36m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '637-u3',
        name: 'شقة أول علوي أمامي بحري مسطح 166 م²',
        nameEn: '1st Floor Front North Park View 166m²',
        floor: 'typical',
        area: 166,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري ناحية مسطح',
        orientationEn: 'Front North facing park',
        features: ['إطلالة بانورامية على المسطح الأخضر', '3 تراسات', '3 غرف نوم', '2 حمام', 'ريسبشن كبير', 'مطبخ'],
        featuresEn: ['Panoramic park view', '3 terraces', '3 bedrooms', '2 bathrooms', 'Large reception', 'Kitchen']
      },
      {
        id: '637-u4',
        name: 'شقة علوي أمامي 162 م²',
        nameEn: 'Typical Floor Front 162m²',
        floor: 'typical',
        area: 162,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي يسار ناحية 638',
        orientationEn: 'Front Left facing 638',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      }
    ]
  },
  {
    id: 'project-623',
    slug: 'ishbilia-623-rawda',
    title: 'مشروع إشبيلية 623 (ناصية الروضة على الفاصل)',
    titleEn: 'Ishbilia 623 (Al-Rawda Corner on Divider)',
    plotNumber: '623',
    zone: 'الروضة والريحان',
    zoneEn: 'Al-Rawda & Al-Rayhan',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'ناصية بحري على ممر تضعك بالقرب من مناطق الخدمات والفاصل بين الروضة والريحان، وحدات أرضية بحدائق خاصة استثنائية تصل إلى 132.9 م².',
    descriptionEn: 'A prime north corner on a pedestrian corridor, directly in front of Al-Rawda & Al-Rayhan divider with outstanding private gardens up to 132.9m².',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'ناصية بحري على ممر بجوار منطقة الخدمات',
      'مباشرة أمام الفاصل بين الروضة والريحان',
      'سهولة الوصول إلى كافة الطرق والمحاور الرئيسية',
      'حدائق خاصة أرضية تصل إلى 132.9 م²'
    ],
    locationHighlightsEn: [
      'North corner on corridor near services area',
      'Directly on the Al-Rawda & Al-Rayhan divider',
      'Easy access to main boulevards and services',
      'Private ground gardens up to 132.9m²'
    ],
    units: [
      {
        id: '623-u1',
        name: 'شقة أرضي أمامي (167 م² + حديقة 132.9 م²)',
        nameEn: 'Ground Front (167m² + 132.9m² Garden)',
        floor: 'ground',
        area: 167,
        gardenArea: 132.9,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'أمامي ناحية 624',
        orientationEn: 'Front facing 624',
        features: ['مدخل خاص', 'حديقة خاصة عملاقة 132.9 م²', '3 غرف', '3 حمامات', 'ريسبشن', 'مطبخ', 'تراس'],
        featuresEn: ['Private entrance', 'Huge 132.9m² garden', '3 bedrooms', '3 bathrooms', 'Reception', 'Kitchen', 'Terrace']
      },
      {
        id: '623-u2',
        name: 'شقة أرضي بحري شرقي (193 م² + حديقة 99.5 م²)',
        nameEn: 'Ground North-East (193m² + 99.5m² Garden)',
        floor: 'ground',
        area: 193,
        gardenArea: 99.5,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['حديقة خاصة 99.5 م²', '3 غرف', '2 حمام', 'ريسبشن كبير', 'مطبخ', 'تراس'],
        featuresEn: ['Private garden 99.5m²', '3 bedrooms', '2 bathrooms', 'Large reception', 'Kitchen', 'Terrace']
      },
      {
        id: '623-u3',
        name: 'شقة أرضي بحري غربي (195 م² + حديقة 97.9 م²)',
        nameEn: 'Ground North-West (195m² + 97.9m² Garden)',
        floor: 'ground',
        area: 195,
        gardenArea: 97.9,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['مدخل خاص', 'حديقة خاصة 97.9 م²', '3 غرف', '2 حمام', 'ريسبشن كبير', 'مطبخ', 'تراس'],
        featuresEn: ['Private entrance', 'Private garden 97.9m²', '3 bedrooms', '2 bathrooms', 'Large reception', 'Kitchen', 'Terrace']
      },
      {
        id: '623-u4',
        name: 'شقة متكرر أمامي بحري وسط 183 م²',
        nameEn: 'Typical Front North Center 183m²',
        floor: 'typical',
        area: 183,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري وسط',
        orientationEn: 'Front North Center',
        features: ['ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', '2 تراس'],
        featuresEn: ['Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', '2 terraces']
      },
      {
        id: '623-u5',
        name: 'شقة متكرر أمامي بحري شرقي ناصية 172 م²',
        nameEn: 'Typical North-East Corner 172m²',
        floor: 'typical',
        area: 172,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري شرقي ناصية',
        orientationEn: 'North-East Corner',
        features: ['ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', '3 تراسات'],
        featuresEn: ['Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', '3 terraces']
      }
    ]
  },
  {
    id: 'project-1445',
    slug: 'ishbilia-1445-rawda-rayhan',
    title: 'مشروع إشبيلية 1445 (قصور وفيلات الروضة والريحان)',
    titleEn: 'Ishbilia 1445 (Al-Rawda Signature Residences)',
    plotNumber: '1445',
    zone: 'الروضة والريحان',
    zoneEn: 'Al-Rawda & Al-Rayhan',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع إستثنائي مباشرة أمام الفاصل بين الروضة والريحان، وبالقرب من طريق الأكسدة ومسجد الروضة والمحور المركزي الجديد، يتميز بفيلا أرضية كاملة بمساحة 234 م² وحديقة خاصة 197 م².',
    descriptionEn: 'Prestigious development on the Al-Rawda & Al-Rayhan divider, near Oxidation Road and Central Axis, offering a full ground villa apartment of 234m² with a massive 197m² private garden.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الفاصل بين الروضة والريحان',
      'خطوات من طريق الأكسدة والمحور المركزي الجديد',
      'بالقرب من مسجد الروضة والخدمات المتكاملة',
      'حديقة خاصة ملكية تصل إلى 197 م²'
    ],
    locationHighlightsEn: [
      'Directly on the Al-Rawda & Al-Rayhan divider',
      'Steps from Oxidation Road and New Central Axis',
      'Near Al-Rawda Mosque and community services',
      'Royal private garden up to 197m²'
    ],
    units: [
      {
        id: '1445-u1',
        name: 'فيلا أرضية كاملة (234 م² + حديقة 197 م²)',
        nameEn: 'Full Ground Villa Unit (234m² + 197m² Garden)',
        floor: 'ground',
        area: 234,
        gardenArea: 197,
        bedrooms: 4,
        bathrooms: 4,
        orientation: 'كامل الواجهة - بحري ناصية',
        orientationEn: 'Full Facade North Corner',
        features: ['حديقة خاصة عملاقة 197 م²', 'مدخل خاص', '4 غرف نوم', '4 حمامات', 'غرفة معيشة مستقلة', 'غرفة غسيل', 'ريسبشن كبير', '5 تراسات'],
        featuresEn: ['Massive 197m² private garden', 'Private entrance', '4 bedrooms', '4 bathrooms', 'Separate living room', 'Laundry room', 'Grand reception', '5 terraces']
      },
      {
        id: '1445-u2',
        name: 'شقة أرضي يمين ممر (141 م² + حديقة 123 م²)',
        nameEn: 'Ground Right Corridor (141m² + 123m² Garden)',
        floor: 'ground',
        area: 141,
        gardenArea: 123,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي يمين ناحية ممر',
        orientationEn: 'Front Right facing corridor',
        features: ['حديقة خاصة 123 م²', 'مدخل خاص', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن', '3 تراسات'],
        featuresEn: ['Private garden 123m²', 'Private entrance', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Reception', '3 terraces']
      },
      {
        id: '1445-u3',
        name: 'شقة علوي ناصية ممر 166 م²',
        nameEn: 'Typical Floor Corridor Corner 166m²',
        floor: 'typical',
        area: 166,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'علوي ناصية ممر',
        orientationEn: 'Upper Corridor Corner',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس واسع'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Spacious terrace']
      }
    ]
  },
  {
    id: 'project-1500',
    slug: 'ishbilia-1500-rawda-rayhan',
    title: 'مشروع إشبيلية 1500 (الموقع الاستثنائي على الفاصل)',
    titleEn: 'Ishbilia 1500 (Prime Location on Divider)',
    plotNumber: '1500',
    zone: 'الروضة والريحان',
    zoneEn: 'Al-Rawda & Al-Rayhan',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'مشروع سكني استثماري مميز مباشرة أمام الفاصل بين الروضة والريحان، بالقرب من طريق الأكسدة ومسجد الروضة والمحور المركزي الجديد.',
    descriptionEn: 'Distinguished residential project on Al-Rawda & Al-Rayhan divider, close to Oxidation Road, Al-Rawda Mosque, and New Central Axis.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الفاصل بين الروضة والريحان',
      'بالقرب من طريق الأكسدة والمحور المركزي الجديد',
      'خطوات من مسجد الروضة والخدمات',
      'حدائق خاصة 69 م² - 126 م² وشقق متكرر حتى 193 م²'
    ],
    locationHighlightsEn: [
      'Directly on Al-Rawda & Al-Rayhan divider',
      'Near Oxidation Road and New Central Axis',
      'Steps from Al-Rawda Mosque',
      'Private gardens 69m² - 126m² and upper units up to 193m²'
    ],
    units: [
      {
        id: '1500-u1',
        name: 'شقة أرضي ناصية مع حديقة 126 م²',
        nameEn: 'Ground Corner with 126m² Garden',
        floor: 'ground',
        area: 193,
        gardenArea: 126,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي ناصية',
        orientationEn: 'Front Corner',
        features: ['مدخل خاص', 'حديقة خاصة 126 م²', 'غرفة معيشة', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['Private entrance', '126m² garden', 'Living room', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      },
      {
        id: '1500-u2',
        name: 'شقة أرضي أمامي (145 م² + حديقة 69 م²)',
        nameEn: 'Ground Front (145m² + 69m² Garden)',
        floor: 'ground',
        area: 145,
        gardenArea: 69,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي ناحية 1499',
        orientationEn: 'Front facing 1499',
        features: ['مدخل خاص', 'حديقة خاصة 69 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن', '2 تراس'],
        featuresEn: ['Private entrance', '69m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Reception', '2 terraces']
      },
      {
        id: '1500-u3',
        name: 'شقة علوي ناصية 193 م²',
        nameEn: 'Typical Floor Corner 193m²',
        floor: 'typical',
        area: 193,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'علوي ناصية',
        orientationEn: 'Upper Corner',
        features: ['مساحة واسعة 193 م²', '3 غرف نوم', '3 حمامات', 'مطبخ كبير', 'ريسبشن واسع', '2 تراس'],
        featuresEn: ['Spacious 193m²', '3 bedrooms', '3 bathrooms', 'Large kitchen', 'Spacious reception', '2 terraces']
      }
    ]
  },
  {
    id: 'project-421',
    slug: 'ishbilia-421-rawda',
    title: 'مشروع إشبيلية 421 (بجوار جامعة الريادة وطريق الأكسدة)',
    titleEn: 'Ishbilia 421 (Near Al-Rayada University & Oxidation Rd)',
    plotNumber: '421',
    zone: 'الروضة والريحان',
    zoneEn: 'Al-Rawda & Al-Rayhan',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'فرصة إستثمارية مميزة بموقع استثنائي ثاني نمرة من طريق الأكسدة وعلى بعد 200 متر من جامعة الريادة و50 متر من المحور المركزي الجديد مباشرة أمام مسطح أخضر كبير.',
    descriptionEn: 'Prime investment opportunity just second plot from Oxidation Road, 200m from Al-Rayada University and 50m from New Central Axis directly facing a large green park.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      '200 متر من جامعة الريادة',
      '25 متر فقط من طريق الأكسدة (ثاني نمرة)',
      '50 متر من المحور المركزي الجديد',
      'مباشرة أمام مسطح أخضر كبير وحدائق خاصة حتى 88 م²'
    ],
    locationHighlightsEn: [
      '200m from Al-Rayada University',
      '25m from Oxidation Road (2nd plot)',
      '50m from the New Central Axis',
      'Directly facing grand green park with gardens up to 88m²'
    ],
    units: [
      {
        id: '421-u1',
        name: 'شقة أرضي بحري غربي (141 م² + حديقة 55 م²)',
        nameEn: 'Ground North-West (141m² + 55m² Garden)',
        floor: 'ground',
        area: 141,
        gardenArea: 55,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'حديقة خاصة 55 م²', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ'],
        featuresEn: ['Private front entrance', 'Private rear entrance', '55m² garden', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen']
      },
      {
        id: '421-u2',
        name: 'شقة أرضي بحري شرقي (142 م² + حديقة 85 م²)',
        nameEn: 'Ground North-East (142m² + 85m² Garden)',
        floor: 'ground',
        area: 142,
        gardenArea: 85,
        bedrooms: 2,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['مدخل خاص', 'حديقة خاصة 85 م²', 'ريسبشن', '2 غرف', '2 حمام', 'مطبخ'],
        featuresEn: ['Private entrance', '85m² garden', 'Reception', '2 bedrooms', '2 bathrooms', 'Kitchen']
      },
      {
        id: '421-u3',
        name: 'شقة أرضي بحري شرقي (137 م² + حديقة 88 م²)',
        nameEn: 'Ground North-East (137m² + 88m² Garden)',
        floor: 'ground',
        area: 137,
        gardenArea: 88,
        bedrooms: 3,
        bathrooms: 1,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'حديقة خاصة 88 م²', 'ريسبشن', '3 غرف', 'حمام', 'مطبخ'],
        featuresEn: ['Private front entrance', 'Private rear entrance', '88m² garden', 'Reception', '3 bedrooms', 'Bathroom', 'Kitchen']
      },
      {
        id: '421-u4',
        name: 'شقة متكرر بحري غربي 177 م²',
        nameEn: 'Typical North-West 177m²',
        floor: 'typical',
        area: 177,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '3 حمام', 'مطبخ', '2 تراس'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '3 bathrooms', 'Kitchen', '2 terraces']
      },
      {
        id: '421-u5',
        name: 'شقة متكرر بحري شرقي 166 م²',
        nameEn: 'Typical North-East 166m²',
        floor: 'typical',
        area: 166,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      }
    ]
  },

  // ==========================================
  // المنطقة 21 (Zone 21) - حي النخبة والخدمات
  // ==========================================
  {
    id: 'project-696',
    slug: 'ishbilia-696-zone-21',
    title: 'مشروع إشبيلية 696 (فاصل الـ 14 والـ 21)',
    titleEn: 'Ishbilia 696 (Zone 14 & 21 Divider)',
    plotNumber: '696',
    zone: 'المنطقة 21',
    zoneEn: 'Zone 21',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز الآن',
    statusLabelEn: 'Available for Booking',
    description: 'موقع استثنائي بالمنطقة 21 على بعد خطوات من طريق الأكسدة وفاصل الـ 14 والـ 21، و3 دقائق من مدرسة فيوتشر ونادي City Club، تطل مباشرة على منطقة الخدمات.',
    descriptionEn: 'Prime location in Zone 21 steps from Oxidation Road and the 14/21 divider, 3 minutes from Future School & City Club, overlooking Zone 21 services.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      '3 دقائق من مدرسة فيوتشر ونادي City Club',
      'خطوات من طريق الأكسدة والفاصل بين 14 و 21',
      'تطل مباشرة على منطقة خدمات الـ 21 المتكاملة',
      'حدائق خاصة تصل إلى 120 م² وشقق أرضي حتى 207 م²'
    ],
    locationHighlightsEn: [
      '3 minutes from Future School and City Club',
      'Steps from Oxidation Road and 14/21 divider',
      'Directly overlooking Zone 21 services hub',
      'Private gardens up to 120m² with ground units up to 207m²'
    ],
    units: [
      {
        id: '696-u1',
        name: 'شقة أرضي خلفي (207 م² + حديقة 120 م²)',
        nameEn: 'Ground Rear (207m² + 120m² Garden)',
        floor: 'ground',
        area: 207,
        gardenArea: 120,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي هادئ',
        orientationEn: 'Quiet Rear',
        features: ['مدخل خاص', 'حديقة خاصة 120 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['Private entrance', '120m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      },
      {
        id: '696-u2',
        name: 'شقة أرضي أمامي (171 م² + حديقة 30 م²)',
        nameEn: 'Ground Front (171m² + 30m² Garden)',
        floor: 'ground',
        area: 171,
        gardenArea: 30,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي',
        orientationEn: 'Front',
        features: ['مدخل خاص', 'حديقة خاصة 30 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '30m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '696-u3',
        name: 'شقة علوي خلفي 150 م²',
        nameEn: 'Typical Floor Rear 150m²',
        floor: 'typical',
        area: 150,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'علوي خلفي',
        orientationEn: 'Upper Rear',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '696-u4',
        name: 'شقة علوي أمامي 140 م²',
        nameEn: 'Typical Floor Front 140m²',
        floor: 'typical',
        area: 140,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'علوي أمامي يمين',
        orientationEn: 'Upper Front Right',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Reception', 'Terrace']
      }
    ]
  },
  {
    id: 'project-659',
    slug: 'ishbilia-659-zone-21',
    title: 'مشروع إشبيلية 659 (ميدان فاصل الـ 21 والـ 22)',
    titleEn: 'Ishbilia 659 (Facing Zone 21 & 22 Roundabout)',
    plotNumber: '659',
    zone: 'المنطقة 21',
    zoneEn: 'Zone 21',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع استثنائي مباشرة أمام الميدان الفاصل بين الـ 21 والـ 22، وعلى بعد 120 متر من طريق الأكسدة وقوس الخدمات.',
    descriptionEn: 'Prime location directly in front of the roundabout separating Zone 21 & 22, 120m from Oxidation Road and services arc.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الميدان الفاصل بين الـ 21 والـ 22',
      '120 متر من طريق الأكسدة',
      'خطوات من قوس الخدمات والمولات',
      'حدائق خاصة أرضية حتى 115 م²'
    ],
    locationHighlightsEn: [
      'Directly facing the Zone 21 & 22 divider roundabout',
      '120m from Oxidation Road',
      'Steps from the Services and Malls Arc',
      'Private ground gardens up to 115m²'
    ],
    units: [
      {
        id: '659-u1',
        name: 'شقة أرضي خلفي (139 م² + حديقة 115 م²)',
        nameEn: 'Ground Rear (139m² + 115m² Garden)',
        floor: 'ground',
        area: 139,
        gardenArea: 115,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي',
        orientationEn: 'Rear',
        features: ['حديقة خاصة 115 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['Private garden 115m²', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      },
      {
        id: '659-u2',
        name: 'شقة أرضي أمامي (139 م² + حديقة 41 م²)',
        nameEn: 'Ground Front (139m² + 41m² Garden)',
        floor: 'ground',
        area: 139,
        gardenArea: 41,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي ناحية 662',
        orientationEn: 'Front facing 662',
        features: ['حديقة خاصة 41 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['Private garden 41m²', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      },
      {
        id: '659-u3',
        name: 'شقة علوي أمامي 159 م²',
        nameEn: 'Typical Floor Front 159m²',
        floor: 'typical',
        area: 159,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي ناحية 662',
        orientationEn: 'Front facing 662',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس واسع'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Spacious terrace']
      }
    ]
  },
  {
    id: 'project-657',
    slug: 'ishbilia-657-zone-21',
    title: 'مشروع إشبيلية 657 (أمام الميدان وقوس المولات)',
    titleEn: 'Ishbilia 657 (Malls Arc & Roundabout)',
    plotNumber: '657',
    zone: 'المنطقة 21',
    zoneEn: 'Zone 21',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع إستثنائي مباشرة أمام الميدان الفاصل بين الـ 21 والـ 22، 120 متر من طريق الأكسدة، و60 متر فقط من قوس المولات التجاري المتكامل.',
    descriptionEn: 'Prime location directly in front of the Zone 21 & 22 roundabout, 120m from Oxidation Road and just 60m from the vibrant Malls Arc.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الميدان الفاصل بين الـ 21 والـ 22',
      '60 متر فقط من قوس المولات والمحلات التجارية',
      '120 متر من طريق الأكسدة',
      'شقق متكرر فاخرة مع غرفة غسيل مستقلة وتراسات متعددة'
    ],
    locationHighlightsEn: [
      'Directly in front of Zone 21 & 22 roundabout',
      'Only 60m from Malls Arc commercial area',
      '120m from Oxidation Road',
      'Luxury typical units with laundry room and multiple terraces'
    ],
    units: [
      {
        id: '657-u1',
        name: 'شقة أرضي أمامي مدخل خاص (166 م² + حديقة 45 م²)',
        nameEn: 'Ground Front Private Entrance (166m² + 45m² Garden)',
        floor: 'ground',
        area: 166,
        gardenArea: 45,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'أمامي ناحية 660',
        orientationEn: 'Front facing 660',
        features: ['مدخل خاص', 'حديقة خاصة 45 م²', '3 غرف نوم', '3 حمامات', 'مطبخ', 'ريسبشن كبير'],
        featuresEn: ['Private entrance', '45m² garden', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Large reception']
      },
      {
        id: '657-u2',
        name: 'شقة علوي أمامي يمين 181 م²',
        nameEn: 'Typical Floor Front Right 181m²',
        floor: 'typical',
        area: 181,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'علوي أمامي يمين ناحية 660',
        orientationEn: 'Upper Front Right facing 660',
        features: ['مساحة 181 م²', 'غرفة غسيل مستقلة', '3 غرف نوم', '3 حمامات', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Spacious 181m²', 'Independent laundry room', '3 bedrooms', '3 bathrooms', 'Large reception', 'Terrace']
      },
      {
        id: '657-u3',
        name: 'شقة علوي أمامي يسار 180 م²',
        nameEn: 'Typical Floor Front Left 180m²',
        floor: 'typical',
        area: 180,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'علوي أمامي يسار ناحية 656',
        orientationEn: 'Upper Front Left facing 656',
        features: ['مساحة 180 م²', 'غرفة غسيل مستقلة', '3 غرف نوم', '3 حمامات', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['Spacious 180m²', 'Independent laundry room', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      }
    ]
  },
  {
    id: 'project-638',
    slug: 'ishbilia-638-zone-21',
    title: 'مشروع إشبيلية 638 (المنطقة الذهبية والمركز التجاري)',
    titleEn: 'Ishbilia 638 (Commercial & Residential Axis)',
    plotNumber: '638',
    zone: 'المنطقة 21',
    zoneEn: 'Zone 21',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'مشروع استثماري وتجاري سكني بالمنطقة 21 بالقرب من المحور المركزي الجديد وطريق الأكسدة ونادي City Club ومدرسة فيوتشر.',
    descriptionEn: 'Mixed residential & investment project in Zone 21 close to the New Central Axis, Oxidation Road, City Club, and Future School.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'بالقرب من المحور المركزي الجديد وطريق الأكسدة',
      'دقائق من نادي City Club ومدرسة فيوتشر',
      'حدائق خاصة أرضية 78 م² و 115 م²',
      'شقق متكرر كبرى تصل إلى 217 م²'
    ],
    locationHighlightsEn: [
      'Near New Central Axis and Oxidation Road',
      'Minutes from City Club and Future School',
      'Private ground gardens 78m² and 115m²',
      'Expansive typical apartments up to 217m²'
    ],
    units: [
      {
        id: '638-u1',
        name: 'شقة أرضي بحري شرقي (190 م² + حديقة 115 م²)',
        nameEn: 'Ground North-East (190m² + 115m² Garden)',
        floor: 'ground',
        area: 190,
        gardenArea: 115,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['حديقة خاصة 115 م²', 'ريسبشن كبير', '3 غرف', '3 حمامات', 'مطبخ'],
        featuresEn: ['Private garden 115m²', 'Large reception', '3 bedrooms', '3 bathrooms', 'Kitchen']
      },
      {
        id: '638-u2',
        name: 'شقة أرضي بحري غربي (190 م² + حديقة 78 م²)',
        nameEn: 'Ground North-West (190m² + 78m² Garden)',
        floor: 'ground',
        area: 190,
        gardenArea: 78,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['حديقة خاصة 78 م²', 'ريسبشن كبير', '3 غرف', '3 حمامات', 'مطبخ'],
        featuresEn: ['Private garden 78m²', 'Large reception', '3 bedrooms', '3 bathrooms', 'Kitchen']
      },
      {
        id: '638-u3',
        name: 'شقة متكرر 217 م²',
        nameEn: 'Typical Floor Grand 217m²',
        floor: 'typical',
        area: 217,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري ناصية',
        orientationEn: 'North Corner',
        features: ['مساحة ملكية 217 م²', 'ريسبشن كبير', '3 غرف', '3 حمامات', 'مطبخ', '2 تراس'],
        featuresEn: ['Grand 217m²', 'Large reception', '3 bedrooms', '3 bathrooms', 'Kitchen', '2 terraces']
      }
    ]
  },
  {
    id: 'project-786',
    slug: 'ishbilia-786-zone-21',
    title: 'مشروع إشبيلية 786 (بجوار City Club والفاصل)',
    titleEn: 'Ishbilia 786 (Near City Club & Future School)',
    plotNumber: '786',
    zone: 'المنطقة 21',
    zoneEn: 'Zone 21',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع حيوي بالمنطقة 21 بالقرب من نادي City Club ومدرسة فيوتشر وفاصل الـ 14 والـ 21 وطريق الأكسدة.',
    descriptionEn: 'Dynamic residential development in Zone 21 near City Club, Future School, 14/21 divider, and Oxidation Road.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01026640478',
    salesWhatsapp: '201026640478',
    locationHighlights: [
      'خطوات من نادي City Club ومدرسة فيوتشر',
      'بالقرب من فاصل الـ 21 والـ 14 وطريق الأكسدة',
      'حدائق خاصة 70 م² و 118 م² بمدخل خاص',
      'شقق متكرر مع غرفة معيشة مستقلة ومساحات حتى 196 م²'
    ],
    locationHighlightsEn: [
      'Steps from City Club and Future School',
      'Near 21/14 divider and Oxidation Road',
      'Private gardens 70m² & 118m² with private entrances',
      'Typical floor units with separate living room up to 196m²'
    ],
    units: [
      {
        id: '786-u1',
        name: 'شقة أرضي (173 م² + حديقة 118 م²)',
        nameEn: 'Ground (173m² + 118m² Garden)',
        floor: 'ground',
        area: 173,
        gardenArea: 118,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي ناحية 788',
        orientationEn: 'Front facing 788',
        features: ['مدخل خاص', 'حديقة خاصة 118 م²', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Private entrance', '118m² garden', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '786-u2',
        name: 'شقة أرضي (173 م² + حديقة 70 م²)',
        nameEn: 'Ground (173m² + 70m² Garden)',
        floor: 'ground',
        area: 173,
        gardenArea: 70,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'ناحية 785',
        orientationEn: 'Facing 785',
        features: ['مدخل خاص', 'حديقة خاصة 70 م²', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Private entrance', '70m² garden', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '786-u3',
        name: 'شقة متكرر جنوبي غربي 196 م²',
        nameEn: 'Typical South-West 196m²',
        floor: 'typical',
        area: 196,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'جنوبي غربي ناحية 785',
        orientationEn: 'South-West facing 785',
        features: ['غرفة معيشة مستقلة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', '2 تراس'],
        featuresEn: ['Separate living room', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', '2 terraces']
      }
    ]
  },
  {
    id: 'project-814',
    slug: 'ishbilia-814-zone-21',
    title: 'مشروع إشبيلية 814 (رابع نمرة من الأكسدة وسور الجامعة)',
    titleEn: 'Ishbilia 814 (Near Oxidation Road & University Wall)',
    plotNumber: '814',
    zone: 'المنطقة 21',
    zoneEn: 'Zone 21',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع استثنائي يقع بالقرب من طريق الأكسدة الحيوي وجامعة مدينة السادات، رابع نمرة من طريق الأكسدة وخامس نمرة من سور الجامعة.',
    descriptionEn: 'Exceptional residential plot in Zone 21, 4th plot from Oxidation Road and 5th plot from Sadat City University perimeter wall.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01206279582',
    salesWhatsapp: '201206279582',
    locationHighlights: [
      'رابع نمرة من طريق الأكسدة الحيوي',
      'خامس نمرة من سور جامعة مدينة السادات',
      'بالقرب من منطقة خدمات متنوعة (مسجد - مدرسة - حضانة - تجاري وإداري)',
      'مداخل خاصة وشقق بمساحات عملية مدروسة'
    ],
    locationHighlightsEn: [
      '4th plot from Oxidation Road',
      '5th plot from Sadat City University wall',
      'Close to full community services (Mosque, School, Nursery, Commercial)',
      'Private entrances and well-planned family layouts'
    ],
    units: [
      {
        id: '814-u1',
        name: 'شقة أرضي أمامي بحري بمدخل خاص 130 م²',
        nameEn: 'Ground Front North Private Entrance 130m²',
        floor: 'ground',
        area: 130,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري',
        orientationEn: 'Front North',
        features: ['مدخل أمامي وجانبي خاص', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', 'تراس أمامي'],
        featuresEn: ['Dual private entrances', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Front terrace']
      },
      {
        id: '814-u2',
        name: 'شقة أرضي أمامي بحري 125 م²',
        nameEn: 'Ground Front North 125m²',
        floor: 'ground',
        area: 125,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري',
        orientationEn: 'Front North',
        features: ['مدخل أمامي خاص', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Private front entrance', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '814-u3',
        name: 'شقة متكرر أمامي بحري 145 م²',
        nameEn: 'Typical Front North 145m²',
        floor: 'typical',
        area: 145,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري',
        orientationEn: 'Front North',
        features: ['ريسبشن', '3 غرف', '2 حمام', 'مطبخ', 'تراس كبير'],
        featuresEn: ['Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large terrace']
      }
    ]
  },

  // ==========================================
  // المنطقة 22 (Zone 22 - المنطقة الذهبية)
  // ==========================================
  {
    id: 'project-1164',
    slug: 'ishbilia-1164-golden-zone',
    title: 'مشروع إشبيلية 1164 (مباشرة على منطقة الخدمات والمولات)',
    titleEn: 'Ishbilia 1164 (Overlooking Services & Malls Area)',
    plotNumber: '1164',
    zone: 'المنطقة الذهبية',
    zoneEn: 'The Golden Zone',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز الآن',
    statusLabelEn: 'Available for Booking',
    description: 'موقع إستثنائي يضعك مباشرة في قلب المنطقة الذهبية بالمنطقة 22، تطل مباشرة على مناطق الخدمات ومنطقة المولات، وعلى بعد 150 متر من طريق الأكسدة.',
    descriptionEn: 'Prime location in the heart of the Golden Zone (Zone 22), directly overlooking community services and mall complex, 150m from Oxidation Road.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'تطل مباشرة على مناطق الخدمات ومنطقة المولات',
      '150 متر فقط من طريق الأكسدة الحيوي',
      'حدائق خاصة أرضية تصل إلى 123 م²',
      'مداخل خاصة وغرف غسيل مستقلة'
    ],
    locationHighlightsEn: [
      'Directly overlooking services and shopping malls area',
      '150m from Oxidation Road',
      'Private ground gardens up to 123m²',
      'Private entrances and independent laundry rooms'
    ],
    units: [
      {
        id: '1164-u1',
        name: 'شقة أرضي أمامي (165 م² + حديقة ~123 م²)',
        nameEn: 'Ground Front (165m² + ~123m² Garden)',
        floor: 'ground',
        area: 165,
        gardenArea: 123,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'أمامي ناحية 1165',
        orientationEn: 'Front facing 1165',
        features: ['مدخل خاص', 'حديقة خاصة تقريباً 123 م²', '3 غرف نوم', '3 حمامات', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '~123m² garden', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '1164-u2',
        name: 'شقة أرضي ناصية ممر (145 م² + حديقة ~87 م²)',
        nameEn: 'Ground Corridor Corner (145m² + ~87m² Garden)',
        floor: 'ground',
        area: 145,
        gardenArea: 87,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'ناصية ممر',
        orientationEn: 'Corridor Corner',
        features: ['مدخل خاص', 'غرفة غسيل', 'حديقة خاصة ~87 م²', '3 غرف نوم', '3 حمامات', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', 'Laundry room', '~87m² garden', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '1164-u3',
        name: 'شقة علوي ناصية ممر 167 م²',
        nameEn: 'Typical Corridor Corner 167m²',
        floor: 'typical',
        area: 167,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'علوي أمامي يسار ناصية ممر',
        orientationEn: 'Upper Front Left Corridor Corner',
        features: ['مساحة 167 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['Spacious 167m²', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      },
      {
        id: '1164-u4',
        name: 'شقة علوي أمامي 149 م²',
        nameEn: 'Typical Front 149m²',
        floor: 'typical',
        area: 149,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي يمين ناحية 1165',
        orientationEn: 'Front Right facing 1165',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      }
    ]
  },
  {
    id: 'project-1152',
    slug: 'ishbilia-1152-golden-zone',
    title: 'مشروع إشبيلية 1152 (قلب المنطقة الذهبية)',
    titleEn: 'Ishbilia 1152 (Heart of Golden Zone)',
    plotNumber: '1152',
    zone: 'المنطقة الذهبية',
    zoneEn: 'The Golden Zone',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'يتوسط المنطقة الذهبية بالمنطقة 22 مما يجعله الخيار الأفضل، 150 متر من مدرسة فيوتشر ونادي City Club، و200 متر من مدرسة التعليم الأساسي.',
    descriptionEn: 'Centered in the Golden Zone (Zone 22), 150m from Future School and City Club, and 200m from the Basic Education School.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01033569365',
    salesWhatsapp: '201033569365',
    locationHighlights: [
      '150 متر من مدرسة فيوتشر ونادي City Club',
      '200 متر من مدرسة التعليم الأساسي بالمنطقة الذهبية',
      'خطوات من المحور المركزي الجديد وطريق الأكسدة',
      'حديقة خاصة محيطة 97 م² من جميع الجهات'
    ],
    locationHighlightsEn: [
      '150m from Future School and City Club',
      '200m from Basic Education School',
      'Steps from New Central Axis and Oxidation Road',
      'Surrounding 97m² private garden from all sides'
    ],
    units: [
      {
        id: '1152-u1',
        name: 'شقة أرضي بحديقة محيطة (135 م² + حديقة 97 م²)',
        nameEn: 'Ground with Surrounding Garden (135m² + 97m² Garden)',
        floor: 'ground',
        area: 135,
        gardenArea: 97,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري محيط',
        orientationEn: 'North Surrounding',
        features: ['حديقة خاصة 97 م² من جميع الجهات', 'مدخل خاص', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['97m² garden all-around', 'Private entrance', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '1152-u2',
        name: 'شقة متكرر أمامي 145 م²',
        nameEn: 'Typical Front 145m²',
        floor: 'typical',
        area: 145,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي',
        orientationEn: 'Front',
        features: ['ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس كبير'],
        featuresEn: ['Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large terrace']
      }
    ]
  },
  {
    id: 'project-1064',
    slug: 'ishbilia-1064-golden-zone',
    title: 'مشروع إشبيلية 1064 (ثاني نمرة من قوس الخدمات)',
    titleEn: 'Ishbilia 1064 (Next to Golden Zone Services Arc)',
    plotNumber: '1064',
    zone: 'المنطقة الذهبية',
    zoneEn: 'The Golden Zone',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'يقع ثاني نمرة من منطقة خدمات المحور المركزي بالمنطقة 22، 30 متر من قوس خدمات المولات، 160 متر من المحور المركزي، 200 متر من طريق الأكسدة.',
    descriptionEn: 'Second plot from Central Axis services in Zone 22, 30m from Golden Zone Malls Arc, 160m from Central Axis, 200m from Oxidation Road.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      '30 متر فقط من قوس خدمات (مولات) المنطقة الذهبية',
      'ثاني نمرة من منطقة خدمات المحور المركزي بالـ 22',
      '160 متر من المحور المركزي و 200 متر من الأكسدة',
      'شقق أرضي كبرى تصل إلى 214 م² و 4 غرف نوم'
    ],
    locationHighlightsEn: [
      'Just 30m from Golden Zone Malls Arc',
      'Second plot from Central Axis community services',
      '160m from Central Axis & 200m from Oxidation Rd',
      'Grand ground apartments up to 214m² with 4 bedrooms'
    ],
    units: [
      {
        id: '1064-u1',
        name: 'شقة أرضي كبرى 4 غرف (214 م² + حديقة 72 م²)',
        nameEn: 'Grand Ground 4-Bed (214m² + 72m² Garden)',
        floor: 'ground',
        area: 214,
        gardenArea: 72,
        bedrooms: 4,
        bathrooms: 2,
        orientation: 'بحري',
        orientationEn: 'North',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'حديقة خاصة 72 م²', 'ريسبشن كبير', '4 غرف نوم', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Private front entrance', 'Private rear entrance', '72m² garden', 'Large reception', '4 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '1064-u2',
        name: 'شقة أرضي بحري غربي (142 م² + حديقة 117 م²)',
        nameEn: 'Ground North-West (142m² + 117m² Garden)',
        floor: 'ground',
        area: 142,
        gardenArea: 117,
        bedrooms: 3,
        bathrooms: 1,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'حديقة خاصة 117 م²', 'ريسبشن', '3 غرف', 'حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Dual private entrances', '117m² garden', 'Reception', '3 bedrooms', 'Bathroom', 'Kitchen', 'Terrace']
      },
      {
        id: '1064-u3',
        name: 'شقة متكرر بحري شرقي 169 م²',
        nameEn: 'Typical North-East 169m²',
        floor: 'typical',
        area: 169,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', '2 تراس'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', '2 terraces']
      }
    ]
  },
  {
    id: 'project-1165',
    slug: 'ishbilia-1165-golden-zone',
    title: 'مشروع إشبيلية 1165 (بالقرب من الأكسدة ومسجد الـ 22)',
    titleEn: 'Ishbilia 1165 (Near Oxidation Rd & Mosque)',
    plotNumber: '1165',
    zone: 'المنطقة الذهبية',
    zoneEn: 'The Golden Zone',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع سكني مميز بالمنطقة 22 بالقرب من طريق الأكسدة ومدرسة فيوتشر ونادي City Club ومسجد الـ 22 ومنطقة خدمات المولات.',
    descriptionEn: 'Prime residential plot in Zone 22 close to Oxidation Road, Future School, City Club, and Zone 22 Mosque.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01010722349',
    salesWhatsapp: '201010722349',
    locationHighlights: [
      '150 متر من طريق الأكسدة ومدرسة فيوتشر',
      'بالقرب من نادي City Club ومسجد الـ 22',
      'حدائق خاصة 36 م² و 114 م²',
      'شقق أرضي حتى 208 م² مع مدخل خاص'
    ],
    locationHighlightsEn: [
      '150m from Oxidation Road & Future School',
      'Close to City Club and Zone 22 Mosque',
      'Private gardens 36m² and 114m²',
      'Ground units up to 208m² with private entrance'
    ],
    units: [
      {
        id: '1165-u1',
        name: 'شقة أرضي (165 م² + حديقة 114 م²)',
        nameEn: 'Ground (165m² + 114m² Garden)',
        floor: 'ground',
        area: 165,
        gardenArea: 114,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي هادئ',
        orientationEn: 'Quiet Rear',
        features: ['مدخل خاص', 'حديقة خاصة 114 م²', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ'],
        featuresEn: ['Private entrance', '114m² garden', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen']
      },
      {
        id: '1165-u2',
        name: 'شقة أرضي أمامي (208 م² + حديقة 36 م²)',
        nameEn: 'Ground Front (208m² + 36m² Garden)',
        floor: 'ground',
        area: 208,
        gardenArea: 36,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي',
        orientationEn: 'Front',
        features: ['مدخل خاص', 'حديقة خاصة 36 م²', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Private entrance', '36m² garden', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '1165-u3',
        name: 'شقة متكرر 148 م²',
        nameEn: 'Typical Floor 148m²',
        floor: 'typical',
        area: 148,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي مميز',
        orientationEn: 'Distinctive Front',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      }
    ]
  },
  {
    id: 'project-1167',
    slug: 'ishbilia-1167-golden-zone',
    title: 'مشروع إشبيلية 1167 (بجوار مدرسة الـ 22)',
    titleEn: 'Ishbilia 1167 (Beside Zone 22 School)',
    plotNumber: '1167',
    zone: 'المنطقة الذهبية',
    zoneEn: 'The Golden Zone',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'امتلك شقق فاخرة في أفخم المجمعات السكنية في قلب المنطقة الذهبية بالمنطقة 22، 200 متر من طريق الأكسدة، 150 متر من الخدمات، 100 متر من مدرسة الـ 22.',
    descriptionEn: 'Luxury residences in the heart of the Golden Zone (Zone 22), 200m from Oxidation Road, 150m from services, 100m from Zone 22 school.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01016144927',
    salesWhatsapp: '201016144927',
    locationHighlights: [
      '100 متر من مدرسة الـ 22',
      '150 متر من منطقة خدمات المنطقة الذهبية',
      '200 متر من طريق الأكسدة الحيوي',
      '950 متر من جامعة مدينة السادات'
    ],
    locationHighlightsEn: [
      '100m from Zone 22 school',
      '150m from Golden Zone services area',
      '200m from Oxidation Road',
      '950m from Sadat City University'
    ],
    units: [
      {
        id: '1167-u1',
        name: 'شقة أرضي بحري شرقي 4 غرف (190 م² + حديقة)',
        nameEn: 'Ground North-East 4-Bed (190m² + Garden)',
        floor: 'ground',
        area: 190,
        gardenArea: 90,
        bedrooms: 4,
        bathrooms: 2,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'حديقة خاصة', 'ريسبشن', '4 غرف نوم', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Dual private entrances', 'Private garden', 'Reception', '4 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '1167-u2',
        name: 'شقة متكرر بحري شرقي 200 م² (تراس أمامي وخلفي)',
        nameEn: 'Typical North-East 200m² (Front & Rear Terraces)',
        floor: 'typical',
        area: 200,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['مساحة 200 م²', 'ريسبشن كبير', '3 غرف', '3 حمامات', 'مطبخ', 'تراس أمامي', 'تراس خلفي'],
        featuresEn: ['Spacious 200m²', 'Large reception', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Front terrace', 'Rear terrace']
      }
    ]
  },
  {
    id: 'project-1220',
    slug: 'ishbilia-1220-golden-zone',
    title: 'مشروع إشبيلية 1220 (واجهة غير مجروحة بالمنطقة 22)',
    titleEn: 'Ishbilia 1220 (Open Facade in Golden Zone)',
    plotNumber: '1220',
    zone: 'المنطقة الذهبية',
    zoneEn: 'The Golden Zone',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'واجهة غير مجروحة ومساحات متنوعة بالمنطقة 22، 120 متر من مدرسة الـ 22 و50 متر من مدرسة فيوتشر ونادي City Club.',
    descriptionEn: 'Open unblocked facade in Zone 22, 120m from Zone 22 school and 50m from Future School & City Club.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01026640478',
    salesWhatsapp: '201026640478',
    locationHighlights: [
      '50 متر من مدرسة فيوتشر ونادي City Club',
      '120 متر من مدرسة الـ 22',
      'حدائق خاصة 35 م² و 118 م²',
      'بالقرب من طريق الأكسدة والمحور المركزي الجديد'
    ],
    locationHighlightsEn: [
      '50m from Future School and City Club',
      '120m from Zone 22 school',
      'Private gardens 35m² and 118m²',
      'Near Oxidation Road and New Central Axis'
    ],
    units: [
      {
        id: '1220-u1',
        name: 'شقة أرضي (165 م² + حديقة 118 م²)',
        nameEn: 'Ground (165m² + 118m² Garden)',
        floor: 'ground',
        area: 165,
        gardenArea: 118,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي هادئ',
        orientationEn: 'Quiet Rear',
        features: ['مدخل خاص', 'حديقة خاصة 118 م²', 'ريسبشن', '3 غرف', '2 حمام', 'مطبخ', '2 تراس'],
        featuresEn: ['Private entrance', '118m² garden', 'Reception', '3 bedrooms', '2 bathrooms', 'Kitchen', '2 terraces']
      },
      {
        id: '1220-u2',
        name: 'شقة متكرر 148 م²',
        nameEn: 'Typical Floor 148m²',
        floor: 'typical',
        area: 148,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي مميز',
        orientationEn: 'Distinctive Front',
        features: ['ريسبشن كبير', '3 غرف', '2 حمام', 'مطبخ', 'تراس'],
        featuresEn: ['Large reception', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Terrace']
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

  // ==========================================
  // المنطقة 29 (Zone 29) - المحور الجامعي وطريق الأكسدة
  // ==========================================
  {
    id: 'project-1297',
    slug: 'ishbilia-1297-zone-29',
    title: 'مشروع إشبيلية 1297 (مباشرة على طريق الأكسدة)',
    titleEn: 'Ishbilia 1297 (Direct On Oxidation Road)',
    plotNumber: '1297',
    zone: 'المنطقة 29',
    zoneEn: 'Zone 29',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز الآن',
    statusLabelEn: 'Available for Booking',
    description: 'أول نمرة مباشرة على طريق الأكسدة الحيوي والمحور المركزي الجديد، خامس نمرة من سور جامعة السادات (130م)، 380م من مستشفى الجامعة، و100م من نادي سات الرياضي.',
    descriptionEn: 'Directly on Oxidation Road and the New Central Axis, 5th plot from Sadat University wall (130m), 380m from University Hospital, 100m from SAT Sports Club.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01010722349',
    salesWhatsapp: '201010722349',
    locationHighlights: [
      'أول نمرة مباشرة على طريق الأكسدة والمحور المركزي الجديد',
      '130 متر فقط من جامعة مدينة السادات (خامس نمرة من السور)',
      '380 متر من مستشفى جامعة مدينة السادات',
      '100 متر من نادي سات الرياضي و 180 متر من أكبر مدينة ملاهي'
    ],
    locationHighlightsEn: [
      'Directly on Oxidation Road and New Central Axis',
      '130m from Sadat City University (5th plot from wall)',
      '380m from University Hospital',
      '100m from SAT Sports Club and 180m from Entertainment City'
    ],
    units: [
      {
        id: '1297-u1',
        name: 'شقة أرضي بحري شرقي (190 م² + حديقة 81 م²)',
        nameEn: 'Ground North-East (190m² + 81m² Garden)',
        floor: 'ground',
        area: 190,
        gardenArea: 81,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'حديقة خاصة 81 م²', 'ريسبشن', '3 غرف', '3 حمامات', 'مطبخ', 'تراس'],
        featuresEn: ['Dual private entrances', '81m² garden', 'Reception', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '1297-u2',
        name: 'شقة أرضي بحري غربي (190 م² + حديقة 125 م²)',
        nameEn: 'Ground North-West (190m² + 125m² Garden)',
        floor: 'ground',
        area: 190,
        gardenArea: 125,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['مدخل أمامي خاص', 'مدخل خلفي خاص', 'حديقة خاصة 125 م²', 'ريسبشن', '3 غرف', '3 حمامات', 'مطبخ', 'تراس'],
        featuresEn: ['Dual private entrances', '125m² garden', 'Reception', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Terrace']
      },
      {
        id: '1297-u3',
        name: 'شقة متكرر بحري شرقي 210 م²',
        nameEn: 'Typical North-East 210m²',
        floor: 'typical',
        area: 210,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري شرقي',
        orientationEn: 'North-East',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '3 حمامات', 'مطبخ', '2 تراس'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '3 bathrooms', 'Kitchen', '2 terraces']
      },
      {
        id: '1297-u4',
        name: 'شقة متكرر بحري غربي 210 م²',
        nameEn: 'Typical North-West 210m²',
        floor: 'typical',
        area: 210,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري غربي',
        orientationEn: 'North-West',
        features: ['إطلالة مميزة', 'ريسبشن كبير', '3 غرف', '3 حمامات', 'مطبخ', '2 تراس'],
        featuresEn: ['Distinctive view', 'Large reception', '3 bedrooms', '3 bathrooms', 'Kitchen', '2 terraces']
      }
    ]
  },
  {
    id: 'project-1307',
    slug: 'ishbilia-1307-zone-29',
    title: 'مشروع إشبيلية 1307 (مباشرة أمام الجامعة وعلى الأكسدة)',
    titleEn: 'Ishbilia 1307 (Direct University & Oxidation Road)',
    plotNumber: '1307',
    zone: 'المنطقة 29',
    zoneEn: 'Zone 29',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع إستثنائي يضعك مباشرة أمام جامعة مدينة السادات، ومباشرة على طريق الأكسدة، مع شقق ناصية فاخرة.',
    descriptionEn: 'Exceptional plot located directly in front of Sadat City University and directly on Oxidation Road, featuring luxury corner apartments.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الحرم الجامعي لجامعة مدينة السادات',
      'مباشرة على طريق الأكسدة الحيوي',
      'إطلالة مفتوحة غير مجروحة',
      'شقق ناصية مع 2-3 تراسات'
    ],
    locationHighlightsEn: [
      'Directly facing Sadat City University campus',
      'Directly situated on Oxidation Road',
      'Panoramic open unblocked views',
      'Corner units with 2-3 terraces'
    ],
    units: [
      {
        id: '1307-u1',
        name: 'شقة علوي ناصية 165 م²',
        nameEn: 'Typical Floor Corner 165m²',
        floor: 'typical',
        area: 165,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'علوي ناصية',
        orientationEn: 'Upper Corner',
        features: ['3 غرف نوم', '3 حمامات', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['3 bedrooms', '3 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      },
      {
        id: '1307-u2',
        name: 'شقة علوي 163 م²',
        nameEn: 'Typical Floor 163m²',
        floor: 'typical',
        area: 163,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'علوي ناحية 1306',
        orientationEn: 'Upper facing 1306',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '1307-u3',
        name: 'شقة علوي أمامي 137 م²',
        nameEn: 'Typical Floor Front 137m²',
        floor: 'typical',
        area: 137,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي يسار ناحية 1308',
        orientationEn: 'Front Left facing 1308',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      }
    ]
  },
  {
    id: 'project-1317',
    slug: 'ishbilia-1317-zone-29',
    title: 'مشروع إشبيلية 1317 (مباشرة أمام جامعة السادات)',
    titleEn: 'Ishbilia 1317 (Direct Facing Sadat University)',
    plotNumber: '1317',
    zone: 'المنطقة 29',
    zoneEn: 'Zone 29',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع إستثنائي يضعك مباشرة أمام جامعة مدينة السادات وعلى بعد 150 متر من طريق الأكسدة، مع حدائق خاصة أرضية تصل إلى 123 م².',
    descriptionEn: 'Prime location directly facing Sadat City University and 150m from Oxidation Road, offering private ground gardens up to 123m².',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام جامعة مدينة السادات',
      '150 متر فقط من طريق الأكسدة الحيوي',
      'حدائق خاصة أرضية تقريباً 87 م² و 123 م²',
      'مداخل خاصة وغرف غسيل مستقلة'
    ],
    locationHighlightsEn: [
      'Directly in front of Sadat City University',
      '150m from Oxidation Road',
      'Private ground gardens ~87m² and ~123m²',
      'Private entrances and independent laundry rooms'
    ],
    units: [
      {
        id: '1317-u1',
        name: 'شقة أرضي ممر (190 م² + حديقة ~123 م²)',
        nameEn: 'Ground Corridor (190m² + ~123m² Garden)',
        floor: 'ground',
        area: 190,
        gardenArea: 123,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'ناحية ممر',
        orientationEn: 'Facing Corridor',
        features: ['مدخل خاص', 'غرفة غسيل', 'حديقة خاصة ~123 م²', '3 غرف نوم', '3 حمامات', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', 'Laundry room', '~123m² garden', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '1317-u2',
        name: 'شقة أرضي بحري شرقي (180 م² + حديقة ~87 م²)',
        nameEn: 'Ground North-East (180m² + ~87m² Garden)',
        floor: 'ground',
        area: 180,
        gardenArea: 87,
        bedrooms: 3,
        bathrooms: 3,
        orientation: 'بحري شرقي ناحية 1318',
        orientationEn: 'North-East facing 1318',
        features: ['مدخل خاص', 'حديقة خاصة ~87 م²', '3 غرف نوم', '3 حمامات', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '~87m² garden', '3 bedrooms', '3 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '1317-u3',
        name: 'شقة علوي أمامي بحري غربي 167 م²',
        nameEn: 'Typical Front North-West 167m²',
        floor: 'typical',
        area: 167,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'بحري غربي ناحية ممر',
        orientationEn: 'North-West facing corridor',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      }
    ]
  },
  {
    id: 'project-1371',
    slug: 'ishbilia-1371-zone-29',
    title: 'مشروع إشبيلية 1371 (ميدان فاصل الـ 22 والـ 29)',
    titleEn: 'Ishbilia 1371 (Zone 22 & 29 Divider Roundabout)',
    plotNumber: '1371',
    zone: 'المنطقة 29',
    zoneEn: 'Zone 29',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع إستثنائي يضعك في قلب المنطقة الذهبية على الميدان الفاصل بين الـ 22 والـ 29، خطوات من جامعة السادات وطريق الأكسدة وقوس الخدمات.',
    descriptionEn: 'Exceptional plot situated in the Golden Zone on the roundabout separating Zone 22 & 29, steps from Sadat University, Oxidation Road, and services arc.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'على الميدان الفاصل بين الـ 22 والـ 29',
      'خطوات من جامعة مدينة السادات',
      'خطوات من طريق الأكسدة وقوس الخدمات',
      'حدائق خاصة أرضية تصل إلى 114 م² ومدخل خاص'
    ],
    locationHighlightsEn: [
      'On the Zone 22 & 29 divider roundabout',
      'Steps from Sadat City University',
      'Steps from Oxidation Road and services arc',
      'Private ground gardens up to 114m²'
    ],
    units: [
      {
        id: '1371-u1',
        name: 'شقة أرضي خلفي (165 م² + حديقة ~114 م²)',
        nameEn: 'Ground Rear (165m² + ~114m² Garden)',
        floor: 'ground',
        area: 165,
        gardenArea: 114,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي هادئ',
        orientationEn: 'Quiet Rear',
        features: ['مدخل خاص', 'حديقة خاصة ~114 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '~114m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '1371-u2',
        name: 'شقة أرضي أمامي (208 م² + حديقة ~35 م²)',
        nameEn: 'Ground Front (208m² + ~35m² Garden)',
        floor: 'ground',
        area: 208,
        gardenArea: 35,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي',
        orientationEn: 'Front',
        features: ['مدخل خاص', 'حديقة خاصة ~35 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير'],
        featuresEn: ['Private entrance', '~35m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception']
      },
      {
        id: '1371-u3',
        name: 'شقة علوي أمامي بحري 150 م²',
        nameEn: 'Typical Front North 150m²',
        floor: 'typical',
        area: 150,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري ناحية 1370',
        orientationEn: 'Front North facing 1370',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Reception', 'Terrace']
      }
    ]
  },
  {
    id: 'project-1372',
    slug: 'ishbilia-1372-zone-29',
    title: 'مشروع إشبيلية 1372 (ميدان الفاصل وقوس الخدمات)',
    titleEn: 'Ishbilia 1372 (Divider & Services Arc)',
    plotNumber: '1372',
    zone: 'المنطقة 29',
    zoneEn: 'Zone 29',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'على الميدان الفاصل بين الـ 22 والـ 29، خطوات من جامعة مدينة السادات وطريق الأكسدة، مع حدائق أرضية تصل إلى 121 م².',
    descriptionEn: 'On the roundabout dividing Zone 22 & 29, steps from Sadat University & Oxidation Road, with private ground gardens up to 121m².',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'على الميدان الفاصل بين الـ 22 والـ 29',
      'خطوات من جامعة مدينة السادات',
      'خطوات من طريق الأكسدة وقوس الخدمات',
      'حديقة خاصة أرضية تصل إلى 121 م²'
    ],
    locationHighlightsEn: [
      'On Zone 22 & 29 divider roundabout',
      'Steps from Sadat City University',
      'Steps from Oxidation Road and services arc',
      'Private ground garden up to 121m²'
    ],
    units: [
      {
        id: '1372-u1',
        name: 'شقة أرضي خلفي (168 م² + حديقة ~121 م²)',
        nameEn: 'Ground Rear (168m² + ~121m² Garden)',
        floor: 'ground',
        area: 168,
        gardenArea: 121,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي',
        orientationEn: 'Rear',
        features: ['مدخل خاص', 'حديقة خاصة ~121 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', '2 تراس'],
        featuresEn: ['Private entrance', '~121m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', '2 terraces']
      },
      {
        id: '1372-u2',
        name: 'شقة علوي أمامي بحري 141 م²',
        nameEn: 'Typical Front North 141m²',
        floor: 'typical',
        area: 141,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري يمين ناحية 1396',
        orientationEn: 'Front North Right facing 1396',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Reception', 'Terrace']
      }
    ]
  },
  {
    id: 'project-1413',
    slug: 'ishbilia-1413-zone-29',
    title: 'مشروع إشبيلية 1413 (مباشرة أمام جامعة السادات)',
    titleEn: 'Ishbilia 1413 (Direct University Front)',
    plotNumber: '1413',
    zone: 'المنطقة 29',
    zoneEn: 'Zone 29',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'موقع إستثنائي يضعك مباشرة أمام جامعة مدينة السادات، وعلى بعد 150 متر من طريق الأكسدة، شقق متكرر ناصية حتى 177 م² مع 4 تراسات.',
    descriptionEn: 'Prime project directly facing Sadat City University, 150m from Oxidation Road, offering grand corner typical apartments of 177m² with 4 terraces.',
    facadeImage: '/images/projects/project-1490-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'مباشرة أمام الحرم الجامعي لجامعة مدينة السادات',
      '150 متر فقط من طريق الأكسدة الحيوي',
      'شقق متكرر ناصية بمساحة 177 م² مع 4 تراسات',
      'حدائق خاصة أرضية تصل إلى 112 م² ومدخل خاص'
    ],
    locationHighlightsEn: [
      'Directly in front of Sadat City University campus',
      '150m from Oxidation Road',
      'Corner typical apartments of 177m² with 4 terraces',
      'Private ground gardens up to 112m²'
    ],
    units: [
      {
        id: '1413-u1',
        name: 'شقة أرضي خلفي (134 م² + حديقة 112 م²)',
        nameEn: 'Ground Rear (134m² + 112m² Garden)',
        floor: 'ground',
        area: 134,
        gardenArea: 112,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي',
        orientationEn: 'Rear',
        features: ['مدخل خاص', 'حديقة خاصة 112 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '112m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '1413-u2',
        name: 'شقة متكرر أمامي غربي ناصية ممر 177 م² (4 تراسات)',
        nameEn: 'Typical Front West Corridor Corner 177m² (4 Terraces)',
        floor: 'typical',
        area: 177,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي غربي على ممر',
        orientationEn: 'Front West on corridor',
        features: ['مساحة 177 م²', '4 تراسات واسعة', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير'],
        featuresEn: ['Spacious 177m²', '4 expansive terraces', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception']
      },
      {
        id: '1413-u3',
        name: 'شقة متكرر أمامي شرقي 151 م²',
        nameEn: 'Typical Front East 151m²',
        floor: 'typical',
        area: 151,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي شرقي ناحية 1410',
        orientationEn: 'Front East facing 1410',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      }
    ]
  },
  {
    id: 'project-1483',
    slug: 'ishbilia-1483-zone-29',
    title: 'مشروع إشبيلية 1483 (فاصل الـ 22 والـ 29)',
    titleEn: 'Ishbilia 1483 (Zone 22 & 29 Roundabout)',
    plotNumber: '1483',
    zone: 'المنطقة 29',
    zoneEn: 'Zone 29',
    city: 'مدينة السادات',
    cityEn: 'Sadat City',
    type: 'سكني فاخر',
    typeEn: 'Luxury Residential',
    status: 'available',
    statusLabel: 'متاح للحجز',
    statusLabelEn: 'Available for Booking',
    description: 'في قلب المنطقة الذهبية على الميدان الفاصل بين الـ 22 والـ 29، خطوات من جامعة مدينة السادات وطريق الأكسدة وقوس الخدمات.',
    descriptionEn: 'Golden Zone location on the roundabout dividing Zone 22 & 29, steps from Sadat University, Oxidation Road, and services arc.',
    facadeImage: '/images/projects/project-1518-clean-facade.jpg',
    salesPhone: '01032032286',
    salesWhatsapp: '201032032286',
    locationHighlights: [
      'على الميدان الفاصل بين الـ 22 والـ 29',
      'خطوات من جامعة مدينة السادات',
      'خطوات من طريق الأكسدة وقوس الخدمات',
      'حديقة خاصة أرضية تصل إلى 114 م² ومدخل خاص'
    ],
    locationHighlightsEn: [
      'On Zone 22 & 29 divider roundabout',
      'Steps from Sadat City University',
      'Steps from Oxidation Road and services arc',
      'Private ground garden up to 114m²'
    ],
    units: [
      {
        id: '1483-u1',
        name: 'شقة أرضي خلفي (167 م² + حديقة ~114 م²)',
        nameEn: 'Ground Rear (167m² + ~114m² Garden)',
        floor: 'ground',
        area: 167,
        gardenArea: 114,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'خلفي',
        orientationEn: 'Rear',
        features: ['مدخل خاص', 'حديقة خاصة ~114 م²', '3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['Private entrance', '~114m² garden', '3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      },
      {
        id: '1483-u2',
        name: 'شقة متكرر أمامي 150 م²',
        nameEn: 'Typical Front 150m²',
        floor: 'typical',
        area: 150,
        bedrooms: 3,
        bathrooms: 2,
        orientation: 'أمامي بحري ناحية 1484',
        orientationEn: 'Front North facing 1484',
        features: ['3 غرف نوم', '2 حمام', 'مطبخ', 'ريسبشن كبير', 'تراس'],
        featuresEn: ['3 bedrooms', '2 bathrooms', 'Kitchen', 'Large reception', 'Terrace']
      }
    ]
  },
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

  // ==========================================
  // المشروعات التجارية والإدارية
  // ==========================================
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

export const projectsData: Project[] = rawProjectsData.map((p) => {
  const loc = plotLocationsData[p.plotNumber];
  return {
    ...p,
    googleMapsUrl:
      loc?.mapsUrl ||
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `مدينة السادات قطعة ${p.plotNumber}`
      )}`,
    latitude: loc?.lat,
    longitude: loc?.lng,
  };
});
