'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import SectionDivider from '@/components/ui/SectionDivider';
import GoogleMapShowcase from '@/components/sections/GoogleMapShowcase';

type InquiryType = 'residential' | 'land' | 'commercial' | 'engineering';

export default function ContactPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  // Form State
  const [inquiryType, setInquiryType] = useState<InquiryType>('residential');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('zone-21');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // VIP Tour Modal / Selected Project
  const [tourProject, setTourProject] = useState('1518');
  const [tourDate, setTourDate] = useState('');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Inquiry tabs definition
  const inquiryTabs = [
    {
      id: 'residential' as InquiryType,
      labelAr: 'حجز وحدة سكنية (شقق / دوبلكس / بنتهاوس)',
      labelEn: 'Luxury Residential Booking',
      icon: '🏢',
      defaultMsg: 'أرغب في الاستفسار عن تفاصيل وأسعار الوحدات المتاحة في مشروعات إشبيلية السكنية.'
    },
    {
      id: 'land' as InquiryType,
      labelAr: 'تطوير ومشاركة أرض (Land Joint Venture)',
      labelEn: 'Land Joint Venture & Development',
      icon: '📐',
      defaultMsg: 'أمتلك قطعة أرض في مدينة السادات وأرغب في دراسة فرصة تطويرها بنظام المشاركة مع إشبيلية.'
    },
    {
      id: 'commercial' as InquiryType,
      labelAr: 'استثمار تجاري وإداري (مشروع بلازا 810)',
      labelEn: 'Commercial & Administrative Plaza',
      icon: '💼',
      defaultMsg: 'أرغب في الاستفسار عن المساحات التجارية والإدارية المتاحة بمشروع إشبيلية بلازا (قطعة 810).'
    },
    {
      id: 'engineering' as InquiryType,
      labelAr: 'استشارة هندسية وتراخيص مجانية',
      labelEn: 'Free Engineering & Licensing Advisory',
      icon: '🏗️',
      defaultMsg: 'أرغب في حجز استشارة هندسية لمراجعة اشتراطات البناء والتراخيص في مدينة السادات.'
    }
  ];

  // WhatsApp generation for the form
  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const activeTabObj = inquiryTabs.find((t) => t.id === inquiryType);
    const targetPhone = inquiryType === 'land' ? '201032032286' : '201010722349';

    const text = isAr
      ? `*طلب تواصل واستشارة جديدة من موقع إشبيلية*
📌 *نوع الطلب:* ${activeTabObj?.labelAr}
👤 *الاسم:* ${fullName || 'غير محدد'}
📱 *الهاتف:* ${phone || 'غير محدد'}
📧 *البريد:* ${email || 'غير محدد'}
📍 *المنطقة المفضلة بالسادات:* ${district === 'zone-21' ? 'المنطقة 21' : district === 'zone-14' ? 'المنطقة 14' : 'المنطقة 29'}
⏰ *الوقت المفضل للتواصل:* ${preferredTime === 'morning' ? 'صباحاً (9 ص - 2 م)' : 'مساءً (2 م - 9 م)'}
📝 *التفاصيل:* ${message || activeTabObj?.defaultMsg}`
      : `*New Contact & Inquiry Request - Ishbilia Developments*
📌 *Topic:* ${activeTabObj?.labelEn}
👤 *Name:* ${fullName || 'N/A'}
📱 *Phone:* ${phone || 'N/A'}
📧 *Email:* ${email || 'N/A'}
📍 *Preferred District:* ${district}
⏰ *Preferred Time:* ${preferredTime}
📝 *Message:* ${message || activeTabObj?.defaultMsg}`;

    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  const handleRegularSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Site Tour WhatsApp
  const handleSiteTourWhatsApp = () => {
    const projName =
      tourProject === '1518'
        ? 'مشروع 1518 (المنطقة 29)'
        : tourProject === '1490'
        ? 'مشروع 1490 (المنطقة الذهبية)'
        : 'مشروع إشبيلية بلازا (قطعة 810)';
    const text = isAr
      ? `السلام عليكم، أرغب في حجز موعد جولة معاينة ميدانية لمرافقة مهندس الموقع في *${projName}* ${tourDate ? `بتاريخ: ${tourDate}` : ''}. يرجى تأكيد الموعد.`
      : `Hello, I would like to schedule an escorted on-site tour for *${projName}* ${tourDate ? `on ${tourDate}` : ''}. Please confirm availability.`;

    window.open(`https://wa.me/201010722349?text=${encodeURIComponent(text)}`, '_blank');
  };

  // FAQs Data
  const faqs = [
    {
      qAr: 'كيف يمكنني حجز موعد لمعاينة مشروعات إشبيلية على أرض الواقع؟',
      qEn: 'How can I schedule an on-site visit to Ishbilia projects?',
      aAr: 'يمكنك حجز موعد المعاينة مباشرة عبر أداة المعاينة الميدانية في هذه الصفحة أو عبر واتساب. توفر إشبيلية سيارة خاصة وفريقاً هندسياً لمرافقتك إلى موقع المشروع وشرح أدق التفاصيل الإنشائية والمعمارية.',
      aEn: 'You can schedule directly through the Site Tour tool on this page or via WhatsApp. We provide a private vehicle and a supervising engineer to escort you on-site and present all technical details.'
    },
    {
      qAr: 'لو عندي قطعة أرض في السادات، كيف يتم التنسيق لتقييمها ودراسة الشراكة؟',
      qEn: 'If I own a plot in Sadat City, how do we proceed with evaluation and JV partnership?',
      aAr: 'تواصل مباشرة مع إدارة شراكات الأراضي عبر الهاتف (01032032286) أو عبر واتساب وأرسل رقم القطعة والمنطقة وصورة محضر الاستلام. يُعد استشاريونا دراسة جدوى أولية مجانية توضح المخطط المعماري ونموذج المشاركة العادل خلال 48 ساعة.',
      aEn: 'Contact our Land JV desk directly (01032032286) or via WhatsApp with the plot number, zone, and handover document. Our engineers prepare a complimentary feasibility study within 48 hours.'
    },
    {
      qAr: 'هل تتوفر خدمة خاصة واستشارات للمصريين العاملين بالخارج (المغتربين)؟',
      qEn: 'Do you offer specialized services and remote processing for expatriates?',
      aAr: 'نعم بكل تأكيد؛ نخصص مكتباً لخدمة المغتربين للتواصل عبر مكالمات الفيديو، وإرسال جولات مصورة دورية للمشروعات، وتسهيل الإجراءات التعاقدية الرسمية والتوكيلات وتوثيق جهاز مدينة السادات.',
      aEn: 'Absolutely; we have a dedicated desk for overseas clients with video consultations, bi-weekly photo/video milestone reports, and streamlined power-of-attorney documentation.'
    },
    {
      qAr: 'ما هي مواعيد العمل الرسمية واستقبال الزوار في المقر الرئيسي؟',
      qEn: 'What are the official working hours at Ishbilia Headquarters?',
      aAr: 'يستقبلكم فريقنا يومياً من السبت إلى الخميس من الساعة 9:00 صباحاً حتى 9:00 مساءً في صالة كبار الزوار (جنة مول، الدور الثالث، المنطقة الثامنة). يوم الجمعة مخصص للمواعيد والمعاينات المسبقة الحجز.',
      aEn: 'Our headquarters welcomes you Saturday through Thursday, 9:00 AM to 9:00 PM at our VIP Lounge (Jannah Mall, 3rd Floor, Zone 8). Fridays are reserved for pre-booked tours.'
    }
  ];

  return (
    <div className="min-h-screen bg-ish-black text-ish-white font-body selection:bg-ish-gold selection:text-ish-black">
      {/* 1. Cinematic Hero Section */}
      <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 w-full overflow-hidden isolate">
        {/* Architectural Twilight Palace Backdrop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/hero-cinematic.jpg"
            alt="Ishbilia Headquarters Contact"
            fill
            priority
            className="object-cover object-center brightness-[0.25] contrast-[1.15]"
            sizes="100vw"
          />
        </div>

        {/* Soft Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-ish-black pointer-events-none" />
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-ish-gold/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
          {/* VIP Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ish-gold/15 border border-ish-gold/40 text-ish-gold text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-ish-gold/10 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>{isAr ? 'خدمة عملاء النخبة والمستثمرين • مدينة السادات' : 'Elite Client & Investor Concierge • Sadat City'}</span>
          </div>

          {/* Majestic Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ish-white mb-6 leading-tight tracking-tight font-headline">
            {isAr ? (
              <>
                تواصل مع <span className="gold-gradient-text">صُنّاع التميز المعماري</span>
              </>
            ) : (
              <>
                Connect with <span className="gold-gradient-text">Architectural Mastery</span>
              </>
            )}
          </h1>

          <div className="gold-line max-w-xs mx-auto mb-6" />

          <p className="text-ish-gray-light text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-body">
            {isAr
              ? 'سواء كنت ترغب في حجز أرقى الوحدات السكنية، تطوير قطعة أرضك بنظام المشاركة، أو استشارة استثمارية متخصصة — فريقنا الاستشاري في خدمتك على مدار الساعة.'
              : 'Whether you wish to reserve a luxury residence, develop your plot in a joint venture, or require expert real estate advisory — our leadership is at your service.'}
          </p>

          {/* Response Time Guarantee Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border border-ish-gold/40 bg-ish-black/80 shadow-2xl backdrop-blur-xl mb-10">
            <span className="text-lg">⚡</span>
            <span className="text-xs sm:text-sm font-bold text-ish-white">
              {isAr
                ? 'ميثاق سرعة الاستجابة: نلتزم بالرد خلال 15 دقيقة في أوقات العمل'
                : 'Punctuality Charter: Guaranteed response within 15 minutes during business hours'}
            </span>
          </div>

          {/* Quick Access Floating Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <a
              href="tel:+201010722349"
              className="glass-card p-3 sm:p-4 rounded-xl border border-white/10 hover:border-ish-gold/60 transition-all duration-300 group hover:-translate-y-1 text-center"
            >
              <div className="w-9 h-9 rounded-lg bg-ish-gold/15 text-ish-gold flex items-center justify-center mx-auto mb-2 text-base">
                📞
              </div>
              <span className="block text-xs text-ish-gray-light">{isAr ? 'الخط الساخن' : 'Direct Call'}</span>
              <span className="block text-xs sm:text-sm font-bold text-ish-white font-mono" dir="ltr">
                01010722349
              </span>
            </a>

            <a
              href="https://wa.me/201010722349?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D8%A7%D8%AA%20%D8%A5%D8%B4%D8%A8%D9%8A%D9%84%D9%8A%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 sm:p-4 rounded-xl border border-emerald-500/30 hover:border-emerald-400/70 transition-all duration-300 group hover:-translate-y-1 text-center bg-emerald-950/20"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2 text-base">
                💬
              </div>
              <span className="block text-xs text-ish-gray-light">{isAr ? 'محادثة فورية' : 'WhatsApp'}</span>
              <span className="block text-xs sm:text-sm font-bold text-emerald-400">
                {isAr ? 'واتساب مبيعات' : 'Sales Chat'}
              </span>
            </a>

            <a
              href="mailto:ishbilia1210@gmail.com"
              className="glass-card p-3 sm:p-4 rounded-xl border border-white/10 hover:border-ish-gold/60 transition-all duration-300 group hover:-translate-y-1 text-center"
            >
              <div className="w-9 h-9 rounded-lg bg-ish-gold/15 text-ish-gold flex items-center justify-center mx-auto mb-2 text-base">
                ✉️
              </div>
              <span className="block text-xs text-ish-gray-light">{isAr ? 'البريد الرسمي' : 'Official Email'}</span>
              <span className="block text-xs sm:text-sm font-bold text-ish-white truncate">
                ishbilia1210
              </span>
            </a>

            <a
              href="#headquarters"
              className="glass-card p-3 sm:p-4 rounded-xl border border-white/10 hover:border-ish-gold/60 transition-all duration-300 group hover:-translate-y-1 text-center"
            >
              <div className="w-9 h-9 rounded-lg bg-ish-gold/15 text-ish-gold flex items-center justify-center mx-auto mb-2 text-base">
                🏛️
              </div>
              <span className="block text-xs text-ish-gray-light">{isAr ? 'المقر الرئيسي' : 'Headquarters'}</span>
              <span className="block text-xs sm:text-sm font-bold text-ish-gold">
                {isAr ? 'جنة مول • السادات' : 'Jannah Mall'}
              </span>
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 2. Smart Multi-Department Interactive Inquiry Desk */}
      <section className="section-rhythm section-secondary relative w-full" id="inquiry-desk">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'استمارة الاستشارة الذكية' : 'Smart Consultation Desk'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'حدد مسار اهتمامك ليصل طلبك للإدارة المختصة فوراً' : 'Select Your Inquiry to Route Directly to Leadership'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-sm sm:text-base max-w-2xl mx-auto font-body">
              {isAr
                ? 'اختر طبيعة طلبك وسيقوم المستشار الهندسي أو الاستثماري المختص بالرد عليك بدراسة تفصيلية.'
                : 'Select the nature of your interest for a tailored study from our specialized executives.'}
            </p>
          </div>

          {/* Department Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8 max-w-5xl mx-auto">
            {inquiryTabs.map((tab) => {
              const isActive = inquiryType === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setInquiryType(tab.id);
                    setIsSubmitted(false);
                  }}
                  className={`p-4 rounded-xl text-start transition-all duration-300 flex items-center gap-3 border shadow-md cursor-pointer ${
                    isActive
                      ? 'bg-ish-gold text-ish-black border-ish-gold-light shadow-ish-gold/25 font-bold scale-[1.02]'
                      : 'glass-card text-ish-white/90 border-white/10 hover:border-ish-gold/40 hover:bg-white/5'
                  }`}
                >
                  <span className="text-2xl">{tab.icon}</span>
                  <span className="text-xs sm:text-sm leading-snug font-bold">
                    {isAr ? tab.labelAr : tab.labelEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Form Container */}
          <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="text-center py-12 px-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-ish-gold/20 border border-ish-gold text-ish-gold flex items-center justify-center text-3xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'تم استلام طلبك باهتمام بالغ!' : 'Inquiry Received with Utmost Priority!'}
                </h3>
                <p className="text-ish-gray-light text-sm sm:text-base max-w-md mx-auto mb-6">
                  {isAr
                    ? 'سيقوم المستشار المختص من إدارة إشبيلية بالتواصل معك هاتفياً أو عبر واتساب خلال أقل من 15 دقيقة.'
                    : 'Our dedicated consultant will contact you via phone or WhatsApp in under 15 minutes.'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline rounded-full px-6 py-2 text-xs font-bold"
                >
                  {isAr ? 'إرسال استفسار آخر' : 'Submit Another Request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegularSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isAr ? 'أدخل اسمك الكريم' : 'Enter your full name'}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/70 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'رقم الهاتف (مفعل واتساب) *' : 'Phone Number (WhatsApp Active) *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={isAr ? '010XXXXXXXX' : '+20 10X XXX XXXX'}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/70 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                      dir="ltr"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-ish-gray-light mb-2">
                      {isAr ? 'البريد الإلكتروني (اختياري)' : 'Email Address (Optional)'}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@mail.com"
                      className="w-full px-4 py-3 rounded-xl bg-ish-black/70 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                      dir="ltr"
                    />
                  </div>

                  {/* Preferred District in Sadat */}
                  <div>
                    <label className="block text-xs font-bold text-ish-gold mb-2">
                      {isAr ? 'المنطقة المفضلة بمدينة السادات' : 'Preferred Sadat City District'}
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors"
                    >
                      <option value="zone-21">
                        {isAr ? 'المنطقة 21 (حي النخبة والفيلات - مشروع 1490)' : 'Zone 21 (Elite & Villas - Project 1490)'}
                      </option>
                      <option value="zone-29">
                        {isAr ? 'المنطقة 29 (بجوار جامعة السادات - مشروع 1518)' : 'Zone 29 (Near University - Project 1518)'}
                      </option>
                      <option value="zone-14">
                        {isAr ? 'المنطقة 14 (الحي السكني والخدمي - مشروع 810)' : 'Zone 14 (Services Corridor - Project 810)'}
                      </option>
                      <option value="other">
                        {isAr ? 'مناطق أخرى بمدينة السادات' : 'Other Sadat City Zones'}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Time */}
                <div>
                  <label className="block text-xs font-bold text-ish-gold mb-2">
                    {isAr ? 'الوقت المفضل للتواصل الهاتفي' : 'Preferred Call Time'}
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPreferredTime('morning')}
                      className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                        preferredTime === 'morning'
                          ? 'bg-ish-gold/20 border-ish-gold text-ish-gold'
                          : 'bg-ish-black/50 border-white/10 text-ish-gray-light hover:border-white/20'
                      }`}
                    >
                      ☀️ {isAr ? 'صباحاً (9:00 ص – 2:00 م)' : 'Morning (9 AM – 2 PM)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredTime('evening')}
                      className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                        preferredTime === 'evening'
                          ? 'bg-ish-gold/20 border-ish-gold text-ish-gold'
                          : 'bg-ish-black/50 border-white/10 text-ish-gray-light hover:border-white/20'
                      }`}
                    >
                      🌙 {isAr ? 'مساءً (2:00 م – 9:00 م)' : 'Evening (2 PM – 9 PM)'}
                    </button>
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label className="block text-xs font-bold text-ish-gold mb-2">
                    {isAr ? 'تفاصيل الاستفسار أو بيانات الأرض / الوحدة' : 'Inquiry Details or Plot/Unit Specs'}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      isAr
                        ? 'اكتب أي متطلبات أو أسئلة ترغب في مناقشتها مع المستشار المختص...'
                        : 'Enter any specific requirements or questions for our consultants...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-ish-black/70 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

                {/* Dual Submit Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 shadow-xl shadow-ish-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01]"
                  >
                    <span>💬</span>
                    <span>{isAr ? 'إرسال وتواصل فوري عبر واتساب' : 'Instant Send via WhatsApp'}</span>
                    <span className="text-lg">←</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto py-4 px-8 rounded-xl font-bold text-sm text-ish-white glass-card border border-white/20 hover:border-ish-gold hover:text-ish-gold transition-all cursor-pointer"
                  >
                    <span>{isAr ? 'إرسال طلب استشارة رسمي' : 'Submit Official Request'}</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-ish-gray-light">
                  🔒 {isAr ? 'جميع بياناتك تخضع لسرية تامة ولن يتم مشاركتها مطلقاً.' : 'Your data is strictly confidential.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Specialized Department Directory & Direct Lines */}
      <section className="section-rhythm section-primary relative w-full" id="departments">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'دليل الإدارات المتخصصة' : 'Department Direct Access'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'الخطوط المباشرة لإدارات شركة إشبيلية' : 'Direct Hotlines to Ishbilia Divisions'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-sm sm:text-base max-w-2xl mx-auto font-body">
              {isAr
                ? 'تواصل مباشرة مع قيادات ومسؤولي الإدارة المعنية بطلبك لتسريع الإجراءات والحصول على أدق إجابة.'
                : 'Direct access to division heads to expedite procedures and receive definitive answers.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dept 1: Sales */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mb-4 group-hover:bg-ish-gold/25 transition-colors">
                  🏢
                </div>
                <span className="text-[11px] font-bold text-ish-gold uppercase tracking-wider block mb-1">
                  {isAr ? 'إدارة المبيعات وحجز الوحدات' : 'VIP Sales Division'}
                </span>
                <h3 className="text-lg font-bold text-ish-white mb-3 font-headline">
                  {isAr ? 'معاينات المشروعات وأسعار الوحدات' : 'Project Showings & Unit Pricing'}
                </h3>
                <p className="text-xs text-ish-gray-light leading-relaxed mb-4 font-body">
                  {isAr
                    ? 'حجز ومعاينات مشروعات 1518 و 1490 و 810، عروض الأسعار وأنظمة التقسيط والتسليم.'
                    : 'Showings for 1518, 1490, and 810, price quotations, and customized payment schedules.'}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <a
                  href="tel:+201010722349"
                  className="w-full py-2.5 px-3 rounded-lg bg-ish-black border border-white/10 hover:border-ish-gold text-xs font-bold text-ish-white flex items-center justify-between transition-colors"
                  dir="ltr"
                >
                  <span className="text-ish-gold">📞</span>
                  <span>+20 10 10722349</span>
                </a>
                <a
                  href="https://wa.me/201010722349?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/50 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>💬</span>
                  <span>{isAr ? 'محادثة فورية واتساب' : 'WhatsApp Chat'}</span>
                </a>
              </div>
            </div>

            {/* Dept 2: Land JV */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mb-4 group-hover:bg-ish-gold/25 transition-colors">
                  📐
                </div>
                <span className="text-[11px] font-bold text-ish-gold uppercase tracking-wider block mb-1">
                  {isAr ? 'إدارة شراكات وملاك الأراضي' : 'Land Joint Venture Desk'}
                </span>
                <h3 className="text-lg font-bold text-ish-white mb-3 font-headline">
                  {isAr ? 'تقييم الأراضي ونماذج الشراكة' : 'Plot Valuation & JV Modeling'}
                </h3>
                <p className="text-xs text-ish-gray-light leading-relaxed mb-4 font-body">
                  {isAr
                    ? 'دراسات الجدوى الأولية، نماذج المشاركة 50/50، وتقييم قطع الأراضي السكنية والتجارية بالسادات.'
                    : 'Initial feasibility studies, 50/50 partnership models, and plot appraisals across Sadat City.'}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <a
                  href="tel:+201032032286"
                  className="w-full py-2.5 px-3 rounded-lg bg-ish-black border border-white/10 hover:border-ish-gold text-xs font-bold text-ish-white flex items-center justify-between transition-colors"
                  dir="ltr"
                >
                  <span className="text-ish-gold">📞</span>
                  <span>+20 10 32032286</span>
                </a>
                <a
                  href="https://wa.me/201032032286?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%86%D8%A7%20%D9%85%D8%A7%D9%84%D9%83%20%D8%A3%D8%B1%D8%B6%20%D9%88%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AF%D8%B1%D8%A7%D8%B3%D8%A9%20%D8%B4%D8%B1%D8%A7%D9%83%D8%A9%20%D9%85%D8%B9%D9%83%D9%85"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/50 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>💬</span>
                  <span>{isAr ? 'محادثة مسؤول الشراكات' : 'JV Director Chat'}</span>
                </a>
              </div>
            </div>

            {/* Dept 3: Engineering */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mb-4 group-hover:bg-ish-gold/25 transition-colors">
                  🏗️
                </div>
                <span className="text-[11px] font-bold text-ish-gold uppercase tracking-wider block mb-1">
                  {isAr ? 'الإدارة الهندسية والاستشارية' : 'Engineering & Site Supervision'}
                </span>
                <h3 className="text-lg font-bold text-ish-white mb-3 font-headline">
                  {isAr ? 'المطابقة والتراخيص والكود' : 'Code Compliance & Blueprint Audits'}
                </h3>
                <p className="text-xs text-ish-gray-light leading-relaxed mb-4 font-body">
                  {isAr
                    ? 'تقارير المواقع الميدانية، إشراف نقابة المهندسين، ومواصفات خرسانة B350 وضبط الجودة.'
                    : 'Field site audit reports, syndicate engineering supervision, and B350 concrete certifications.'}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <a
                  href="tel:+201010722349"
                  className="w-full py-2.5 px-3 rounded-lg bg-ish-black border border-white/10 hover:border-ish-gold text-xs font-bold text-ish-white flex items-center justify-between transition-colors"
                  dir="ltr"
                >
                  <span className="text-ish-gold">📐</span>
                  <span>+20 10 10722349</span>
                </a>
                <Link
                  href="/why-ishbilia"
                  className="w-full py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-ish-gold hover:bg-white/10 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>🔬</span>
                  <span>{isAr ? 'مختبر المواد وميثاق الثقة' : 'Lab Specs & Charter'}</span>
                </Link>
              </div>
            </div>

            {/* Dept 4: Client Care & Contracts */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mb-4 group-hover:bg-ish-gold/25 transition-colors">
                  📜
                </div>
                <span className="text-[11px] font-bold text-ish-gold uppercase tracking-wider block mb-1">
                  {isAr ? 'خدمة العملاء والتعاقدات' : 'Client Care & Contracts'}
                </span>
                <h3 className="text-lg font-bold text-ish-white mb-3 font-headline">
                  {isAr ? 'تسليم العقود والعدادات' : 'Official Handover & Meters'}
                </h3>
                <p className="text-xs text-ish-gray-light leading-relaxed mb-4 font-body">
                  {isAr
                    ? 'تسليم العقود الرسمية، إجراءات عدادات الكهرباء والمياه، وخدمات ما بعد البيع والصيانة.'
                    : 'Contract issuance, electricity & water meter procedures, and post-handover property care.'}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <a
                  href="mailto:ishbilia1210@gmail.com"
                  className="w-full py-2.5 px-3 rounded-lg bg-ish-black border border-white/10 hover:border-ish-gold text-xs font-bold text-ish-white flex items-center justify-between transition-colors truncate"
                  dir="ltr"
                >
                  <span className="text-ish-gold">✉️</span>
                  <span className="truncate">ishbilia1210@gmail.com</span>
                </a>
                <div className="text-center">
                  <span className="text-[10px] text-ish-gray-light block">
                    {isAr ? 'متاح السبت – الخميس 9ص – 9م' : 'Sat – Thu: 9 AM – 9 PM'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. VIP Site Tour Scheduler */}
      <section className="section-rhythm section-secondary relative w-full overflow-hidden" id="site-tour">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 end-1/4 -translate-y-1/2 w-96 h-96 bg-ish-gold/5 rounded-full blur-3xl pointer-events-none" />

        <div className="section-container relative z-10">
          <div className="glass-card rounded-2xl border border-ish-gold/30 p-8 sm:p-12 shadow-2xl bg-gradient-to-br from-ish-gold/10 via-ish-black to-ish-gold/5 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Info & Promise (6 cols) */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ish-gold/20 text-ish-gold text-xs font-bold border border-ish-gold/40 mb-4">
                  <span>🚗</span>
                  <span>{isAr ? 'جولة ميدانية خاصة VIP' : 'Escorted VIP Site Tour'}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ish-white mb-4 font-headline">
                  {isAr ? (
                    <>
                      عاين مشروعاتنا <span className="gold-gradient-text">على أرض الواقع</span> بمرافقة مهندس الموقع
                    </>
                  ) : (
                    <>
                      Experience our projects <span className="gold-gradient-text">On-Site</span> with our Chief Engineer
                    </>
                  )}
                </h2>

                <p className="text-ish-gray-light text-sm sm:text-base leading-relaxed mb-6 font-body">
                  {isAr
                    ? 'نوفر لك جولة خاصة بسيارة إشبيلية لزيارة مشروعاتنا في المنطقة 29، المنطقة الذهبية، أو المنطقة المركزية. اطلع بنفسك على جودة الخرسانات، التشطيبات، والحدائق.'
                    : 'We arrange a private vehicle to inspect our developments across Zone 29, the Golden Zone, or Central Axis. See the concrete quality and craftsmanship firsthand.'}
                </p>

                <div className="space-y-2.5 text-xs sm:text-sm text-ish-white/90 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="text-ish-gold">✓</span>
                    <span>{isAr ? 'سيارة خاصة واستقبال من المقر الرئيسي أو نقطة تجمع' : 'Private vehicle escort from our HQ'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-ish-gold">✓</span>
                    <span>{isAr ? 'مهندس تنفيذي لشرح كافة التفاصيل الإنشائية' : 'Supervising engineer to explain structural specs'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-ish-gold">✓</span>
                    <span>{isAr ? 'إمكانية معاينة نماذج الوحدات المسلمة فعلياً' : 'Walkthrough delivered model apartments'}</span>
                  </div>
                </div>
              </div>

              {/* Right: Quick Interactive Tour Booker (6 cols) */}
              <div className="lg:col-span-6 p-6 rounded-xl bg-ish-black/90 border border-white/15 shadow-2xl">
                <h3 className="text-base font-bold text-ish-gold mb-4 flex items-center gap-2">
                  <span>🗓️</span>
                  <span>{isAr ? 'تأكيد موعد المعاينة الميدانية' : 'Book Your Site Tour'}</span>
                </h3>

                {/* Select Project */}
                <div className="mb-4">
                  <label className="block text-xs font-bold text-ish-gray-light mb-2">
                    {isAr ? 'اختر المشروع المراد معاينته:' : 'Select Project to Tour:'}
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: '1518', nameAr: 'مشروع 1518 (المنطقة 29 - تم التسليم 100%)', nameEn: 'Project 1518 (Zone 29 - 100% Delivered)' },
                      { id: '1490', nameAr: 'مشروع 1490 (المنطقة الذهبية - تشطيبات 90%)', nameEn: 'Project 1490 (Golden Zone - 90% Finishes)' },
                      { id: '810', nameAr: 'مشروع بلازا 810 (المنطقة المركزية - تجاري وإداري)', nameEn: 'Plaza 810 (Central Axis - Commercial)' }
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setTourProject(p.id)}
                        className={`w-full p-3 rounded-lg text-xs font-bold text-start transition-all cursor-pointer border flex items-center justify-between ${
                          tourProject === p.id
                            ? 'bg-ish-gold text-ish-black border-ish-gold font-black'
                            : 'bg-white/5 border-white/10 text-ish-white hover:border-ish-gold/40'
                        }`}
                      >
                        <span>{isAr ? p.nameAr : p.nameEn}</span>
                        {tourProject === p.id && <span>✓</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="mb-5">
                  <label className="block text-xs font-bold text-ish-gray-light mb-2">
                    {isAr ? 'التاريخ المفضل (اختياري):' : 'Preferred Date (Optional):'}
                  </label>
                  <input
                    type="date"
                    value={tourDate}
                    onChange={(e) => setTourDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-ish-black border border-white/15 text-ish-white text-xs focus:border-ish-gold focus:outline-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSiteTourWhatsApp}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-ish-gold/25 cursor-pointer"
                >
                  <span>🚗</span>
                  <span>{isAr ? 'تأكيد حجز المعاينة الميدانية عبر واتساب' : 'Confirm Site Tour via WhatsApp'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. Headquarters & Direction Navigator */}
      <section className="section-rhythm section-primary relative w-full" id="headquarters">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'المقر الرئيسي وصالة كبار الزوار' : 'Corporate HQ & VIP Lounge'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'تفضل بزيارتنا في قلب مدينة السادات' : 'Visit Ishbilia Headquarters in Sadat City'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
            <p className="text-ish-gray text-sm sm:text-base max-w-2xl mx-auto font-body">
              {isAr
                ? 'نرحب بكم في صالة استقبال كبار الزوار لمناقشة مخططات المشروعات ودراسات جدوى الأراضي في أجواء راقية تليق بكم.'
                : 'We welcome you to our VIP Reception Lounge to review project blueprints and land feasibility studies.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Info Card (6 cols) */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ish-white font-headline">
                      {isAr ? 'المقر الإداري الرئيسي — جنة مول' : 'Corporate Headquarters — Jannah Mall'}
                    </h3>
                    <span className="text-xs text-ish-gold font-medium">
                      {isAr ? 'مدينة السادات • المنوفية • مصر' : 'Sadat City • Monufia • Egypt'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-ish-gray-light mb-6 font-body">
                  <div className="p-4 rounded-xl bg-ish-black/70 border border-white/10">
                    <span className="block text-ish-white font-bold mb-1">
                      {isAr ? 'العنوان التفصيلي:' : 'Detailed Address:'}
                    </span>
                    <span>
                      {isAr
                        ? 'المنطقة الثامنة، جنة مول، الدور الثالث، بجوار البريد ومطعم قصر السلام، مدينة السادات.'
                        : 'Zone 8, Jannah Mall, 3rd Floor, adjacent to the Post Office & Qasr Al-Salam, Sadat City.'}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-ish-black/70 border border-white/10">
                    <span className="block text-ish-white font-bold mb-1">
                      {isAr ? 'ساعات العمل واستقبال العملاء:' : 'Working Hours & VIP Reception:'}
                    </span>
                    <span className="block text-ish-gold font-semibold">
                      {isAr ? 'السبت إلى الخميس: 9:00 صباحاً – 9:00 مساءً' : 'Saturday to Thursday: 9:00 AM – 9:00 PM'}
                    </span>
                    <span className="text-[11px] text-ish-gray-light">
                      {isAr ? 'الجمعة: مواعيد ومعاينات ميدانية مسبقة الحجز' : 'Friday: Pre-booked site tours only'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Sadat+City+Jannah+Mall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-bold text-xs text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>🗺️</span>
                  <span>{isAr ? 'فتح في Google Maps' : 'Open in Google Maps'}</span>
                </a>

                <a
                  href="https://wa.me/201010722349?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D9%8A%D8%B1%D8%AC%D9%89%20%D8%A5%D8%B1%D8%B3%D8%A7%D9%84%20%D9%85%D9%88%D9%82%D8%B9%20%D8%A7%D9%84%D9%85%D9%82%D8%B1%20%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%20(Location%20Pin)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl font-bold text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all flex items-center justify-center gap-2"
                >
                  <span>📍</span>
                  <span>{isAr ? 'إرسال اللوكيشن عبر واتساب' : 'Send Location Pin'}</span>
                </a>
              </div>
            </div>

            {/* Visual Location Showcase Card (6 cols) */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-ish-black via-ish-black/90 to-ish-gold/10">
              <div>
                <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-2">
                  {isAr ? 'موقع استراتيجي بقلب السادات' : 'Strategic Heart of Sadat City'}
                </span>
                <h3 className="text-xl font-bold text-ish-white mb-4 font-headline">
                  {isAr ? 'سهولة الوصول من كافة محاور المدينة' : 'Seamless Connectivity from All Arteries'}
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-ish-white/90 mb-6">
                  <li className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-ish-gold/20 text-ish-gold flex items-center justify-center text-xs shrink-0">1</span>
                    <span>{isAr ? 'دقيقة واحدة من المحور المركزي لمدينة السادات' : '1 minute from the Central Axis'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-ish-gold/20 text-ish-gold flex items-center justify-center text-xs shrink-0">2</span>
                    <span>{isAr ? 'بجوار مجمع الخدمات ومكتب بريد السادات الرئيسي' : 'Adjacent to Sadat Main Post Complex'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-ish-gold/20 text-ish-gold flex items-center justify-center text-xs shrink-0">3</span>
                    <span>{isAr ? 'أماكن انتظار سيارات واسعة ومجانية أمام المول' : 'Spacious free parking directly in front'}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-ish-gold/20 text-ish-gold flex items-center justify-center text-xs shrink-0">4</span>
                    <span>{isAr ? 'مصاعد كهربائية وصالة مكيفة مجهزة بالكامل' : 'Elevators and fully air-conditioned lounge'}</span>
                  </li>
                </ul>
              </div>

              {/* VIP Reception Protocol */}
              <div className="p-4 rounded-xl bg-ish-gold/10 border border-ish-gold/30">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">☕</span>
                  <div>
                    <h4 className="text-xs font-bold text-ish-gold">
                      {isAr ? 'بروتوكول ضيافة كبار العملاء' : 'VIP Hospitality Protocol'}
                    </h4>
                    <p className="text-[11px] text-ish-gray-light">
                      {isAr
                        ? 'تفضل بزيارتنا لتناول القهوة ومناقشة تفاصيل استثمارك في خصوصية تامة.'
                        : 'Join us for premium coffee and review your investment in absolute discretion.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Interactive Google Maps Embed with HQ & Project Zone Switcher */}
          <div className="mt-10 max-w-5xl mx-auto w-full">
            <GoogleMapShowcase />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. Four Pillars of Client Commitment */}
      <section className="section-rhythm section-secondary relative w-full" id="client-charter">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'ميثاق خدمة العميل' : 'Client Service Charter'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'التزامات إشبيلية الراسخة تجاه كل عميل وشريك' : 'Ishbilia Commitments to Every Client & Partner'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/40 transition-all text-center">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-base font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'استجابة خلال 15 دقيقة' : '15-Minute Response'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'نلتزم بالرد السريع والاحترافي على استفساراتكم خلال ساعات العمل دون أي تأخير.'
                  : 'Fast, professional replies to all inquiries during official hours without delays.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/40 transition-all text-center">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-base font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'سرية وخصوصية مطلقة' : 'Absolute Discretion'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'حماية كاملة لبيانات العملاء وملاك الأراضي والمستثمرين وسرية كافة المفاوضات.'
                  : 'Complete protection of client information, plot documents, and negotiation privacy.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/40 transition-all text-center">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mx-auto mb-4">
                📐
              </div>
              <h3 className="text-base font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'استشارة هندسية مجانية' : 'Complimentary Advisory'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'دراسة أولية ومراجعة للاشتراطات البنائية والتراخيص دون أي التزام مالي مسبق.'
                  : 'Free initial zoning audits and regulatory feasibility with zero financial obligation.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/40 transition-all text-center">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mx-auto mb-4">
                👑
              </div>
              <h3 className="text-base font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'إشراف الإدارة العليا' : 'Direct Executive Oversight'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'متابعة شخصية من قيادات الشركة التنفيذية لضمان أعلى درجات المصداقية والرضا.'
                  : 'Personal attention from senior executive leadership to ensure utmost transparency.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. Frequently Asked Questions (Accordion) */}
      <section className="section-rhythm section-primary relative w-full" id="contact-faqs">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'إجابات سريعة' : 'Quick Answers'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'الأسئلة الشائعة قبل التواصل' : 'Frequently Asked Questions'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-ish-white font-headline">
                      {isAr ? faq.qAr : faq.qEn}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-ish-gold/15 text-ish-gold flex items-center justify-center text-sm shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-ish-gold text-ish-black font-bold' : ''
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body border-t border-white/5 animate-fade-in">
                      {isAr ? faq.aAr : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Social Channels Strip */}
          <div className="mt-16 text-center">
            <h3 className="text-xs font-bold text-ish-gold uppercase tracking-wider mb-4">
              {isAr ? 'تابعنا على المنصات الرسمية' : 'Follow Ishbilia Developments'}
            </h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/Ishbilia.realestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full glass-card border border-white/15 text-ish-white hover:text-ish-gold hover:border-ish-gold text-xs font-bold transition-all flex items-center gap-2"
              >
                <span>📘</span>
                <span>Facebook</span>
              </a>

              <a
                href="https://tiktok.com/@ishbilia23"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full glass-card border border-white/15 text-ish-white hover:text-ish-gold hover:border-ish-gold text-xs font-bold transition-all flex items-center gap-2"
              >
                <span>🎵</span>
                <span>TikTok</span>
              </a>

              <a
                href="https://wa.me/201010722349"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full glass-card border border-emerald-500/30 text-emerald-400 hover:border-emerald-400 text-xs font-bold transition-all flex items-center gap-2 bg-emerald-950/20"
              >
                <span>💬</span>
                <span>WhatsApp Channel</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
