'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';
import SectionDivider from '@/components/ui/SectionDivider';

type AdvisoryTrack = 'residential' | 'land' | 'commercial' | 'engineering';
type MeetingFormat = 'in-person' | 'zoom' | 'phone' | 'whatsapp';

export default function ConsultationPage() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  // Configurator State
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [track, setTrack] = useState<AdvisoryTrack>('residential');
  const [meetingFormat, setMeetingFormat] = useState<MeetingFormat>('in-person');
  const [preferredTime, setPreferredTime] = useState<'morning' | 'evening'>('morning');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('zone-21');
  const [budgetOrArea, setBudgetOrArea] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const advisoryTracks = [
    {
      id: 'residential' as AdvisoryTrack,
      titleAr: 'شراء وتملك سكني فاخر',
      titleEn: 'Luxury Residential Ownership',
      descAr: 'مقارنة الشقق الفاخرة، الدوبلكس بحديقة، والبنتهاوس بمشروعات إشبيلية لاختيار المسكن العائلي الأنسب.',
      descEn: 'Compare luxury apartments, ground duplexes with private gardens, and penthouses across Ishbilia projects.',
      icon: '🏛️'
    },
    {
      id: 'land' as AdvisoryTrack,
      titleAr: 'تطوير ومشاركة أرض (Land JV)',
      titleEn: 'Land Joint Venture & Development',
      descAr: 'دراسة جدوى أولية لقطعة أرضك، مراجعة اشتراطات جهاز السادات، ومناقشة نموذج الشراكة العادل 50/50.',
      descEn: 'Initial feasibility analysis, zoning audit with Sadat City Authority, and 50/50 joint-venture modeling.',
      icon: '📐'
    },
    {
      id: 'commercial' as AdvisoryTrack,
      titleAr: 'استثمار تجاري وإداري',
      titleEn: 'Commercial & Administrative Investment',
      descAr: 'حساب العوائد الإيجارية المتوقعة والنمو الرأسمالي لمشروع إشبيلية بلازا (قطعة 810) والأنشطة الإدارية.',
      descEn: 'Projected rental yields and capital gains for Ishbilia Plaza (Plot 810) commercial and clinic spaces.',
      icon: '💼'
    },
    {
      id: 'engineering' as AdvisoryTrack,
      titleAr: 'فحص تراخيص وكود إنشائي',
      titleEn: 'Regulatory & Structural Code Audit',
      descAr: 'استشارة هندسية لمراجعة التراخيص والمخططات المعمارية ومواصفات خرسانة B350 وفق الكود المصري.',
      descEn: 'Engineering review of building licenses, blueprint optimization, and B350 concrete standards.',
      icon: '🔬'
    }
  ];

  const meetingFormats = [
    {
      id: 'in-person' as MeetingFormat,
      titleAr: 'لقاء VIP بمقر الشركة الرئيسي',
      titleEn: 'VIP Meeting at Corporate HQ',
      descAr: 'استقبال في صالة كبار الزوار (جنة مول، الدور الثالث، السادات) لمناقشة المخططات وشرب القهوة.',
      descEn: 'VIP Reception Lounge at Jannah Mall, 3rd Floor, Sadat City to review blueprints and documents.',
      icon: '☕'
    },
    {
      id: 'zoom' as MeetingFormat,
      titleAr: 'مكالمة فيديو Zoom / Meet للمغتربين',
      titleEn: 'Zoom Video Call for Expatriates',
      descAr: 'جلسة استشارة تفاعلية عن بُعد للمصريين بالخارج مع مشاركة الشاشة واستعراض المخططات والموقع.',
      descEn: 'Interactive remote video consultation with screen sharing of blueprints, site videos, and legal docs.',
      icon: '💻'
    },
    {
      id: 'phone' as MeetingFormat,
      titleAr: 'اتصال هاتفي مباشر مع الاستشاري',
      titleEn: 'Direct Phone Advisory Call',
      descAr: 'اتصال تليفوني مجدول ومحدد مع المستشار الهندسي أو المالي لمناقشة استفساراتك بالتفصيل.',
      descEn: 'Scheduled, dedicated phone call with our senior structural or financial consultant.',
      icon: '📞'
    },
    {
      id: 'whatsapp' as MeetingFormat,
      titleAr: 'محادثة استشارية فورية عبر واتساب',
      titleEn: 'Direct WhatsApp Concierge',
      descAr: 'تبادل فوري للصور والمخططات ومواقع المشروعات عبر محادثة واتساب مخصصة.',
      descEn: 'Instant transmission of site photos, CAD blueprints, and locations via dedicated WhatsApp.',
      icon: '💬'
    }
  ];

  // WhatsApp formatted transmit
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackObj = advisoryTracks.find((t) => t.id === track);
    const formatObj = meetingFormats.find((f) => f.id === meetingFormat);
    const targetPhone = track === 'land' ? '201032032286' : '201010722349';

    const text = isAr
      ? `*طلب جلسة استشارة استثمارية وهندسية جديدة — إشبيلية*
🏛️ *مسار الاستشارة:* ${trackObj?.titleAr}
🤝 *صيغة اللقاء المفضلة:* ${formatObj?.titleAr}
⏰ *الوقت المفضل:* ${preferredTime === 'morning' ? 'صباحاً (9 ص - 2 م)' : 'مساءً (2 م - 9 م)'}
👤 *الاسم:* ${fullName || 'غير محدد'}
📱 *الهاتف:* ${phone || 'غير محدد'}
📧 *البريد:* ${email || 'غير محدد'}
📍 *المنطقة المستهدفة بالسادات:* ${district === 'zone-21' ? 'المنطقة 21' : district === 'zone-29' ? 'المنطقة 29' : district === 'zone-14' ? 'المنطقة 14' : 'أخرى'}
💰 *الميزانية / مساحة الأرض:* ${budgetOrArea || 'غير محدد'}
📝 *ملاحظات وتفاصيل:* ${notes || 'أرغب في ترتيب الجلسة ومناقشة الفرص المتاحة.'}`
      : `*New Executive Advisory Request — Ishbilia Developments*
🏛️ *Track:* ${trackObj?.titleEn}
🤝 *Meeting Format:* ${formatObj?.titleEn}
⏰ *Preferred Time:* ${preferredTime}
👤 *Name:* ${fullName || 'N/A'}
📱 *Phone:* ${phone || 'N/A'}
📧 *Email:* ${email || 'N/A'}
📍 *Target District:* ${district}
💰 *Budget / Area:* ${budgetOrArea || 'N/A'}
📝 *Notes:* ${notes || 'Looking forward to scheduling our consultation.'}`;

    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsSuccess(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const faqs = [
    {
      qAr: 'هل الجلسة الاستشارية مجانية تماماً وبدون التزامات مسبقة؟',
      qEn: 'Is the consultation session completely free and non-binding?',
      aAr: 'نعم بكل تأكيد؛ جلسة الاستشارة الأولية، مراجعة اشتراطات البناء، وفحص أوراق وتراخيص الأراضي مجانية تماماً كخدمة استثمارية ومجتمعية نقدمها لعملاء ومستثمري مدينة السادات.',
      aEn: 'Yes, absolutely. The initial consultation, regulatory audit, and feasibility review are 100% complimentary with zero financial obligation.'
    },
    {
      qAr: 'كيف يستفيد المغتربون بالخارج من الجلسات الاستشارية الأونلاين؟',
      qEn: 'How do overseas expatriates benefit from remote advisory sessions?',
      aAr: 'نوفر جلسات فيديو خاصة عبر Zoom أو Google Meet نتشارك فيها شاشة المخططات الهندسية، صور وفيديوهات التنفيذ الحي بالموقع، ونماذج العقود، مع إمكانية التنسيق المباشر مع ممثل العميل داخل مصر.',
      aEn: 'We host interactive video sessions via Zoom or Google Meet with blueprint screen-sharing, live site drone footage, and sample contract audits.'
    },
    {
      qAr: 'لو عندي قطعة أرض في السادات، هل تفحصون التراخيص قبل اتخاذ قرار الشراكة؟',
      qEn: 'If I own a plot in Sadat, will you audit permits before deciding on a JV?',
      aAr: 'نعم؛ يقوم استشاريونا بمراجعة الكود البنائي للمنطقة ونسب البناء المصرح بها من جهاز السادات، والتأكد من خلو القطعة من أي التزامات مالية أو قانونية، وتقديم تقرير مفصل لمالك الأرض.',
      aEn: 'Yes; our engineers review the municipal building code, setback limits, and clearance status with Sadat City Authority, providing a comprehensive report.'
    },
    {
      qAr: 'كم تستغرق الجلسة الاستشارية وما هي الترتيبات المطلوبة؟',
      qEn: 'How long does the consultation last and what preparations are needed?',
      aAr: 'تستغرق الجلسة عادةً بين 30 إلى 45 دقيقة. يكفيك إحضار أو إرسال أرقام قطع الأراضي أو متطلبات المساحات والميزانية التقديرية لتحقيق أقصى استفادة ممكنة.',
      aEn: 'Sessions typically run 30 to 45 minutes. Bringing your plot number, desired apartment specs, or budget parameters is all that is required.'
    }
  ];

  return (
    <div className="min-h-screen bg-ish-black text-ish-white font-body selection:bg-ish-gold selection:text-ish-black">
      {/* 1. Executive Advisory Hero */}
      <section className="relative pt-32 sm:pt-36 pb-20 w-full overflow-hidden isolate">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/images/hero-cinematic.jpg"
            alt="Ishbilia Advisory Hub"
            fill
            priority
            className="object-cover object-center brightness-[0.22] contrast-[1.2]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-ish-black pointer-events-none" />
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-ish-gold/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
          {/* Top Kicker */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ish-gold/15 border border-ish-gold/40 text-ish-gold text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-ish-gold/10">
            <span className="w-2 h-2 rounded-full bg-ish-gold animate-pulse" />
            <span>{isAr ? 'المكتب الاستشاري والهندسي المعتمد • مدينة السادات' : 'Accredited Real Estate & Engineering Advisory • Sadat City'}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ish-white mb-6 leading-tight font-headline">
            {isAr ? (
              <>
                جلسة استشارة <span className="gold-gradient-text">استثمارية وهندسية متخصصة</span>
              </>
            ) : (
              <>
                Executive <span className="gold-gradient-text">Real Estate & Engineering Advisory</span>
              </>
            )}
          </h1>

          <div className="gold-line max-w-xs mx-auto mb-6" />

          <p className="text-ish-gray-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-body">
            {isAr
              ? 'نضع بين يديك خبرة أكثر من 20 عاماً في التخطيط العمراني وتراخيص مدينة السادات لتمكينك من اتخاذ القرار الاستثماري الأمثل، سواء للتملك السكني أو شراكة وتطوير الأراضي.'
              : 'Over 20 years of urban planning and regulatory engineering in Sadat City, empowering you to make decisive investment moves in luxury residences or land joint ventures.'}
          </p>

          {/* 4 Trust Credentials Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="glass-card p-3 sm:p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-xl sm:text-2xl font-black gold-gradient-text font-mono">+20 عاماً</span>
              <span className="text-[11px] sm:text-xs text-ish-gray-light font-medium">
                {isAr ? 'خبرة هندسية وعقارية' : 'Engineering Experience'}
              </span>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-xl sm:text-2xl font-black text-ish-white font-mono">نقابة المهندسين</span>
              <span className="text-[11px] sm:text-xs text-ish-gray-light font-medium">
                {isAr ? 'إشراف استشاري معتمد' : 'Syndicate Supervision'}
              </span>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-xl sm:text-2xl font-black gold-gradient-text font-mono">+2000</span>
              <span className="text-[11px] sm:text-xs text-ish-gray-light font-medium">
                {isAr ? 'رخصة بناء بالسادات' : 'Approved Licenses'}
              </span>
            </div>

            <div className="glass-card p-3 sm:p-4 rounded-xl border border-white/10 text-center">
              <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-mono">100%</span>
              <span className="text-[11px] sm:text-xs text-ish-gray-light font-medium">
                {isAr ? 'مجانية وبدون أي التزام' : 'Complimentary Advisory'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 2. Three-Step Interactive Advisory Configurator */}
      <section className="section-rhythm section-secondary relative w-full" id="configurator">
        <div className="section-container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'مُهيّئ الجلسة الاستشارية الذكي' : 'Smart Advisory Configurator'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-3 font-headline">
              {isAr ? 'صمّم جلستك الاستشارية في 3 خطوات بسيطة' : 'Configure Your Advisory Session in 3 Simple Steps'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-6" />

            {/* Stepper Progress Bar */}
            <div className="flex items-center justify-center gap-3 max-w-md mx-auto mb-8">
              {[
                { s: 1, labelAr: 'المسار الاستشاري', labelEn: 'Advisory Track' },
                { s: 2, labelAr: 'صيغة اللقاء', labelEn: 'Meeting Format' },
                { s: 3, labelAr: 'بيانات التواصل', labelEn: 'Contact Details' }
              ].map((st) => (
                <div key={st.s} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStep(st.s as 1 | 2 | 3)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                      step === st.s
                        ? 'bg-ish-gold text-ish-black font-black scale-110 shadow-lg shadow-ish-gold/30'
                        : step > st.s
                        ? 'bg-emerald-500 text-ish-black'
                        : 'bg-white/10 text-ish-gray-light'
                    }`}
                  >
                    {step > st.s ? '✓' : st.s}
                  </button>
                  <span className={`text-xs hidden sm:inline font-semibold ${step === st.s ? 'text-ish-gold' : 'text-ish-gray-light'}`}>
                    {isAr ? st.labelAr : st.labelEn}
                  </span>
                  {st.s < 3 && <div className="w-6 sm:w-10 h-[2px] bg-white/10" />}
                </div>
              ))}
            </div>
          </div>

          {/* Configurator Box */}
          <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
            {isSuccess ? (
              <div className="text-center py-12 px-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-ish-gold/20 border border-ish-gold text-ish-gold flex items-center justify-center text-3xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'تم تأكيد طلب الجلسة الاستشارية بنجاح!' : 'Advisory Request Successfully Confirmed!'}
                </h3>
                <p className="text-ish-gray-light text-sm sm:text-base max-w-lg mx-auto mb-6">
                  {isAr
                    ? 'سيقوم المستشار المختص بإعداد دراسة أولية والتواصل معك لتأكيد الموعد النهائي للجلسة.'
                    : 'Our senior consultant will prepare a tailored study and contact you shortly to confirm the appointment.'}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setStep(1);
                    }}
                    className="btn-outline rounded-full px-6 py-2.5 text-xs font-bold"
                  >
                    {isAr ? 'طلب جلسة أخرى' : 'Request Another Session'}
                  </button>
                  <Link
                    href="/projects"
                    className="btn-primary rounded-full px-6 py-2.5 text-xs font-bold"
                  >
                    {isAr ? 'استعراض المشروعات الحالية' : 'View Projects'}
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                {/* STEP 1: Select Track */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-ish-white font-headline">
                        {isAr ? 'الخطوة 1: اختر مجال اهتمامك للاستشارة' : 'Step 1: Choose Your Advisory Area'}
                      </h3>
                      <span className="text-xs text-ish-gold font-mono">1 / 3</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {advisoryTracks.map((item) => {
                        const isSelected = track === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => setTrack(item.id)}
                            className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-ish-gold/15 border-ish-gold text-ish-white shadow-lg shadow-ish-gold/15 scale-[1.02]'
                                : 'bg-ish-black/50 border-white/10 hover:border-white/25 hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <span className="text-3xl">{item.icon}</span>
                              <div>
                                <h4 className="font-bold text-sm sm:text-base text-ish-white mb-1 font-headline">
                                  {isAr ? item.titleAr : item.titleEn}
                                </h4>
                                <p className="text-xs text-ish-gray-light leading-relaxed">
                                  {isAr ? item.descAr : item.descEn}
                                </p>
                              </div>
                            </div>
                            <div className="text-end pt-2 border-t border-white/5">
                              <span className={`text-xs font-bold ${isSelected ? 'text-ish-gold' : 'text-ish-gray-light'}`}>
                                {isSelected ? (isAr ? '● تم الاختيار' : '● Selected') : (isAr ? 'اختر هذا المسار ←' : 'Select ←')}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="py-3 px-8 rounded-xl font-bold text-sm text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-ish-gold/20"
                      >
                        <span>{isAr ? 'المتابعة للخطوة التالية' : 'Proceed to Step 2'}</span>
                        <span>←</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Meeting Format & Time */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-ish-white font-headline">
                        {isAr ? 'الخطوة 2: حدد طريقة اللقاء والوقت المفضل' : 'Step 2: Meeting Format & Timing'}
                      </h3>
                      <span className="text-xs text-ish-gold font-mono">2 / 3</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {meetingFormats.map((format) => {
                        const isSelected = meetingFormat === format.id;
                        return (
                          <div
                            key={format.id}
                            onClick={() => setMeetingFormat(format.id)}
                            className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-ish-gold/15 border-ish-gold text-ish-white shadow-lg shadow-ish-gold/15 scale-[1.02]'
                                : 'bg-ish-black/50 border-white/10 hover:border-white/25 hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <span className="text-3xl">{format.icon}</span>
                              <div>
                                <h4 className="font-bold text-sm sm:text-base text-ish-white mb-1 font-headline">
                                  {isAr ? format.titleAr : format.titleEn}
                                </h4>
                                <p className="text-xs text-ish-gray-light leading-relaxed">
                                  {isAr ? format.descAr : format.descEn}
                                </p>
                              </div>
                            </div>
                            <div className="text-end pt-2 border-t border-white/5">
                              <span className={`text-xs font-bold ${isSelected ? 'text-ish-gold' : 'text-ish-gray-light'}`}>
                                {isSelected ? (isAr ? '● تم التحديد' : '● Selected') : (isAr ? 'اختر الصيغة ←' : 'Choose ←')}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Preferred Time */}
                    <div className="p-4 rounded-xl bg-ish-black/70 border border-white/10">
                      <label className="block text-xs font-bold text-ish-gold mb-3">
                        {isAr ? 'الوقت الأنسب للتواصل معك:' : 'Best Time for Session:'}
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setPreferredTime('morning')}
                          className={`p-3 rounded-lg text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                            preferredTime === 'morning'
                              ? 'bg-ish-gold/20 border-ish-gold text-ish-gold'
                              : 'bg-white/5 border-white/10 text-ish-gray-light'
                          }`}
                        >
                          ☀️ {isAr ? 'صباحاً (9:00 ص – 2:00 م)' : 'Morning (9 AM – 2 PM)'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreferredTime('evening')}
                          className={`p-3 rounded-lg text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                            preferredTime === 'evening'
                              ? 'bg-ish-gold/20 border-ish-gold text-ish-gold'
                              : 'bg-white/5 border-white/10 text-ish-gray-light'
                          }`}
                        >
                          🌙 {isAr ? 'مساءً (2:00 م – 9:00 م)' : 'Evening (2 PM – 9 PM)'}
                        </button>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="py-2.5 px-5 rounded-xl text-xs font-bold text-ish-gray-light hover:text-ish-white transition-colors cursor-pointer"
                      >
                        → {isAr ? 'الرجوع للخطوة 1' : 'Back to Step 1'}
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="py-3 px-8 rounded-xl font-bold text-sm text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-ish-gold/20"
                      >
                        <span>{isAr ? 'المتابعة للبيانات والتأكيد' : 'Proceed to Step 3'}</span>
                        <span>←</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Details & Submission */}
                {step === 3 && (
                  <form onSubmit={handleStandardSubmit} className="space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-ish-white font-headline">
                        {isAr ? 'الخطوة 3: بيانات التواصل وتفاصيل الجلسة' : 'Step 3: Contact Details & Confirmation'}
                      </h3>
                      <span className="text-xs text-ish-gold font-mono">3 / 3</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-ish-gold mb-2">
                          {isAr ? 'الاسم الكريم *' : 'Full Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={isAr ? 'أدخل اسمك بالكامل' : 'Your full name'}
                          className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-ish-gold mb-2">
                          {isAr ? 'رقم الهاتف (مفعل واتساب) *' : 'Phone (WhatsApp Active) *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={isAr ? '010XXXXXXXX' : '+20 10X XXX XXXX'}
                          className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none"
                          dir="ltr"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-ish-gray-light mb-2">
                          {isAr ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)'}
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your-email@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none"
                          dir="ltr"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-ish-gold mb-2">
                          {isAr ? 'المنطقة المستهدفة بمدينة السادات' : 'Target District'}
                        </label>
                        <select
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none"
                        >
                          <option value="zone-21">
                            {isAr ? 'المنطقة 21 (حي الفيلات والنخبة)' : 'Zone 21 (Villas & Elite)'}
                          </option>
                          <option value="zone-29">
                            {isAr ? 'المنطقة 29 (بجوار جامعة السادات)' : 'Zone 29 (Near University)'}
                          </option>
                          <option value="zone-14">
                            {isAr ? 'المنطقة 14 (الحي السكني الخدمي)' : 'Zone 14 (Integrated Corridor)'}
                          </option>
                          <option value="other">
                            {isAr ? 'مناطق أخرى بمدينة السادات' : 'Other Sadat City Zones'}
                          </option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-ish-gold mb-2">
                          {isAr ? 'الميزانية التقديرية أو مساحة قطعة الأرض' : 'Approximate Budget or Plot Area'}
                        </label>
                        <input
                          type="text"
                          value={budgetOrArea}
                          onChange={(e) => setBudgetOrArea(e.target.value)}
                          placeholder={isAr ? 'مثال: 500 م² بالمنطقة 21 أو ميزانية وحدة سكنية' : 'e.g. 500m² plot in Zone 21 or apartment budget'}
                          className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-ish-gold mb-2">
                          {isAr ? 'أي أسئلة أو نقاط خاصة تود مناقشتها مع المستشار' : 'Specific Inquiries for the Session'}
                        </label>
                        <textarea
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder={isAr ? 'اكتب ملاحظاتك ليركز عليها المستشار في دراسة الجلسة...' : 'Notes to help our consultant prepare your study...'}
                          className="w-full px-4 py-3 rounded-xl bg-ish-black/80 border border-white/15 text-ish-white text-sm focus:border-ish-gold focus:outline-none leading-relaxed"
                        />
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="w-full sm:flex-1 py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 shadow-xl shadow-ish-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.01]"
                      >
                        <span>💬</span>
                        <span>{isAr ? 'تأكيد وحجز موعد الجلسة عبر واتساب فوراً' : 'Instant WhatsApp Session Booking'}</span>
                        <span className="text-lg">←</span>
                      </button>

                      <button
                        type="submit"
                        className="w-full sm:w-auto py-4 px-6 rounded-xl font-bold text-sm text-ish-white glass-card border border-white/20 hover:border-ish-gold hover:text-ish-gold transition-all cursor-pointer"
                      >
                        <span>{isAr ? 'تسجيل الطلب رسمياً' : 'Submit Request'}</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs text-ish-gray-light hover:text-ish-white transition-colors cursor-pointer"
                      >
                        → {isAr ? 'الرجوع للخطوة 2' : 'Back to Step 2'}
                      </button>
                      <span className="text-[11px] text-ish-gray-light">
                        🔒 {isAr ? 'سرية وخصوصية تامة لجميع بياناتك' : '100% Confidentiality Assured'}
                      </span>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. What You Receive in the Session */}
      <section className="section-rhythm section-primary relative w-full" id="deliverables">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'القيمة المضافة الحقيقية' : 'Consultation Deliverables'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'ماذا تحصل عليه في جلستك الاستشارية المجانية؟' : 'What You Receive in Your Complimentary Session'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all group hover:-translate-y-1.5 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mb-4 group-hover:bg-ish-gold/25 transition-colors">
                📊
              </div>
              <h3 className="text-lg font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'دراسة جدوى استثمارية مخصصة' : 'Custom Feasibility Study'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'تقدير دقيق للعائد الرأسمالي المتوقع (Capital Gain) والعائد الإيجاري في مدينة السادات لأصلك العقاري.'
                  : 'Rigorous calculation of projected capital appreciation and annual rental yields for your property.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all group hover:-translate-y-1.5 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mb-4 group-hover:bg-ish-gold/25 transition-colors">
                📜
              </div>
              <h3 className="text-lg font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'فحص التراخيص والاشتراطات' : 'Zoning & Permitting Audit'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'مراجعة اشتراطات جهاز مدينة السادات، الارتفاعات، والردود القانونية لضمان أمان استثماري 100%.'
                  : 'Audit of Sadat City municipal codes, allowable heights, and setbacks to ensure complete compliance.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all group hover:-translate-y-1.5 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mb-4 group-hover:bg-ish-gold/25 transition-colors">
                📐
              </div>
              <h3 className="text-lg font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'استغلال المساحات والتصميم' : 'Architectural Optimization'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'نصائح استشارية للتقسيم المعماري الفعال لتقليل الممرات المهدرة وزيادة التهوية والإضاءة الطبيعية.'
                  : 'Expert architectural advice to eliminate wasted hallway space and maximize natural cross-ventilation.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-ish-gold/50 transition-all group hover:-translate-y-1.5 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mb-4 group-hover:bg-ish-gold/25 transition-colors">
                ⚖️
              </div>
              <h3 className="text-lg font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'مقارنة المشروعات والبدائل' : 'Strategic Options Comparison'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                {isAr
                  ? 'مقارنة حيادية واضحة بين مشروعات إشبيلية (1518، 1490، 810) وتحديد الوحدة الأنسب لعائلتك.'
                  : 'Objective side-by-side comparison of projects (1518, 1490, 810) to identify the optimal choice.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Advisory Practice Areas */}
      <section className="section-rhythm section-secondary relative w-full" id="practice-areas">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'قطاعات الخبرة التخصصية' : 'Core Advisory Sectors'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'مجالات الخبرة الهندسية والاستثمارية بإشبيلية' : 'Our Specialized Engineering & Investment Practices'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl shrink-0">
                🏢
              </div>
              <div>
                <h3 className="text-lg font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'التخطيط العمراني وتراخيص السادات (+2000 رخصة)' : 'Urban Planning & Licensing (+2,000 Permits)'}
                </h3>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {isAr
                    ? 'خبرة تراكمية تزيد عن 20 عاماً في التعامل مع جهاز تنمية مدينة السادات وهيئة المجتمعات، وإنهاء إجراءات التراخيص والمطابقة دون أي معوقات.'
                    : 'Unmatched 20-year mastery in liaising with Sadat City Authority, expediting permits and building compliance flawlessly.'}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl shrink-0">
                🏗️
              </div>
              <div>
                <h3 className="text-lg font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'الهندسة الإنشائية والخرسانات B350' : 'Structural Engineering & B350 Concrete'}
                </h3>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {isAr
                    ? 'تصميم إنشائي متطور لمقاومة الزلازل، خرسانات جاهزة مركزية، وإشراف نقابي معملي دوري لمكعبات الكسر لضمان متانة تدوم لأجيال.'
                    : 'Seismic structural design, lab-certified batch plant concrete, and regular compression tests supervised by the Syndicate.'}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl shrink-0">
                🤝
              </div>
              <div>
                <h3 className="text-lg font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'تطوير الأراضي والشراكات الاستثمارية' : 'Land Development & 50/50 Partnerships'}
                </h3>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {isAr
                    ? 'صياغة نماذج مشاركة عادلة ومربحة لملاك الأراضي مع التكفل التام بكافة تكاليف التراخيص والبناء والتسويق والإشراف حتى تسليم الوحدات.'
                    : 'Equitable joint ventures where Ishbilia finances all licensing, construction, marketing, and delivery transparently.'}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl shrink-0">
                ✈️
              </div>
              <div>
                <h3 className="text-lg font-bold text-ish-white mb-2 font-headline">
                  {isAr ? 'مكتب رعاية المستثمرين والمغتربين' : 'Expatriate & Diaspora Concierge'}
                </h3>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {isAr
                    ? 'إدارة استثمارات المصريين المقيمين بالخارج، جلسات فيديو أونلاين، تقارير مصورة دورية للإنجاز، وتسهيل إجراءات التعاقد والتوكيلات الرسمية.'
                    : 'Full wealth and asset advisory for expatriates, including remote notarization assistance and fortnightly photo/video audits.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. Instant Advisory Hotlines */}
      <section className="section-rhythm section-primary relative w-full" id="instant-hotlines">
        <div className="section-container">
          <div className="glass-card rounded-2xl border border-ish-gold/30 p-8 sm:p-12 shadow-2xl bg-gradient-to-r from-ish-gold/10 via-ish-black to-ish-gold/10 text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-2">
              ⚡ {isAr ? 'تحتاج إلى إجابة فورية دون انتظار؟' : 'Need Immediate Answers?'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'الخط الساخن للاستشارة الاستثمارية والهندسية المباشرة' : 'Direct Real Estate Advisory Hotline'}
            </h2>
            <p className="text-xs sm:text-sm text-ish-gray-light max-w-xl mx-auto mb-8 font-body">
              {isAr
                ? 'فريقنا الاستشاري متواجد للرد على اتصالاتكم واستفساراتكم يومياً من السبت إلى الخميس (9:00 ص – 9:00 م).'
                : 'Our senior advisory desk is live Saturday to Thursday (9:00 AM – 9:00 PM).'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+201010722349"
                className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-ish-gold hover:bg-ish-gold-light transition-all flex items-center gap-2 shadow-lg shadow-ish-gold/25"
                dir="ltr"
              >
                <span>📞</span>
                <span>+20 10 10722349</span>
                <span className="text-xs bg-ish-black/20 px-2 py-0.5 rounded text-ish-black">
                  {isAr ? 'مبيعات ووحدات' : 'Sales'}
                </span>
              </a>

              <a
                href="tel:+201032032286"
                className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-white glass-card border border-white/20 hover:border-ish-gold transition-all flex items-center gap-2"
                dir="ltr"
              >
                <span>📐</span>
                <span>+20 10 32032286</span>
                <span className="text-xs bg-ish-gold/20 text-ish-gold px-2 py-0.5 rounded">
                  {isAr ? 'شراكات الأراضي' : 'Land JVs'}
                </span>
              </a>

              <a
                href="https://wa.me/201010722349?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%81%D9%88%D8%B1%D9%8A%D8%A9"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all flex items-center gap-2"
              >
                <span>💬</span>
                <span>{isAr ? 'محادثة واتساب مباشرة' : 'WhatsApp Concierge'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. The 4 Advisory Guarantees */}
      <section className="section-rhythm section-secondary relative w-full" id="guarantees">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'ميثاق النزاهة الهندسية' : 'Advisory Ethics Charter'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'ضمانات إشبيلية لجلسات الاستشارة' : 'Ishbilia Advisory Guarantees'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mx-auto mb-4">
                💎
              </div>
              <h3 className="text-base font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'مجانية 100% بدون شروط' : '100% Free Consultation'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed">
                {isAr ? 'لا نتقاضى أي رسوم أو أتعاب عن دراسات الجدوى الأولية ومراجعة المخططات.' : 'Zero fees for initial feasibility studies and blueprint audits.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-base font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'سرية وخصوصية مطلقة' : 'Absolute Confidentiality'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed">
                {isAr ? 'حماية تامة لبيانات ملكية قطع الأراضي، الميزانيات، وكافة التفاصيل الخاصة.' : 'Complete protection of plot deeds, budgets, and personal details.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mx-auto mb-4">
                ⚖️
              </div>
              <h3 className="text-base font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'حيادية هندسية تامة' : 'Objective Engineering'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed">
                {isAr ? 'رأي فني مجرد يستند إلى كود البناء المصري ومطابقة التراخيص المعتمدة.' : 'Pure technical advisory based strictly on the Egyptian Building Code.'}
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 rounded-xl bg-ish-gold/15 text-ish-gold flex items-center justify-center text-2xl mx-auto mb-4">
                ⏱️
              </div>
              <h3 className="text-base font-bold text-ish-white mb-2 font-headline">
                {isAr ? 'انضباط بالمواعيد' : 'Punctual Scheduling'}
              </h3>
              <p className="text-xs text-ish-gray-light leading-relaxed">
                {isAr ? 'نحترم وقتكم؛ بدء الجلسات والاستشارات في موعدها المحدد بدقة متناهية.' : 'Strict punctuality; sessions start exactly on the agreed schedule.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. Consultation FAQs */}
      <section className="section-rhythm section-primary relative w-full" id="faqs">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/10 border border-ish-gold/30 text-ish-gold text-xs sm:text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ish-gold" />
              <span>{isAr ? 'إجابات واضحة' : 'Consultation FAQ'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-ish-white mb-4 font-headline">
              {isAr ? 'الأسئلة الشائعة حول الجلسة الاستشارية' : 'Frequently Asked Questions'}
            </h2>
            <div className="gold-line max-w-xs mx-auto mb-4" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
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

          {/* Bottom Direct CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="btn-outline rounded-full inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-8 py-3 hover:border-ish-gold transition-all"
            >
              <span>{isAr ? 'أو تفضل بزيارتنا مباشرة في المقر الرئيسي بجنة مول' : 'Or Visit Ishbilia Headquarters at Jannah Mall'}</span>
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
