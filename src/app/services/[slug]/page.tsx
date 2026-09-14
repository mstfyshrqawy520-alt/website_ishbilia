'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';
import { servicesData, ServiceItem } from '@/data/services';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const service: ServiceItem =
    servicesData.find((s) => s.slug === slug || s.id === slug) || servicesData[0];

  // Request Form State
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [plotOrProjectDetails, setPlotOrProjectDetails] = useState('');
  const [clientMessage, setClientMessage] = useState('');

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = isAr
      ? `*طلب استشارة / مقايسة لخدمة: ${service.titleAr} — إشبيلية*
👤 *الاسم:* ${clientName || 'غير محدد'}
📱 *الهاتف / واتساب:* ${clientPhone || 'غير محدد'}
📍 *تفاصيل الموقع / القطعة بالسادات:* ${plotOrProjectDetails || 'سيتم توضيحها في الميتنج'}
📝 *ملاحظات إضافية:* ${clientMessage || 'أرغب في ترتيب موعد استشارة بمقر الشركة.'}`
      : `*Consultation & Quotation Request: ${service.titleEn} — Ishbilia*
👤 *Name:* ${clientName || 'N/A'}
📱 *Phone:* ${clientPhone || 'N/A'}
📍 *Plot / Location Details:* ${plotOrProjectDetails || 'To be discussed in meeting'}
📝 *Notes:* ${clientMessage || 'Looking forward to an executive consultation.'}`;

    window.open(`https://wa.me/201010722349?text=${encodeURIComponent(payload)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-ish-white pt-28 pb-20">
      {/* 1. Breadcrumbs */}
      <div className="section-container relative z-10 mb-6">
        <nav className="flex items-center gap-2 text-xs text-ish-gray-light font-body py-2">
          <Link href="/" className="hover:text-ish-gold transition-colors">
            {isAr ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-ish-gold transition-colors">
            {isAr ? 'خدماتنا' : 'Services'}
          </Link>
          <span>/</span>
          <span className="text-ish-gold font-bold">{isAr ? service.titleAr : service.titleEn}</span>
        </nav>
      </div>

      {/* 2. Hero Section */}
      <section className="section-container relative z-10 mb-16">
        <div className="glass-card rounded-3xl border border-ish-gold/30 p-8 sm:p-12 shadow-2xl bg-gradient-to-br from-ish-gold/10 via-ish-black to-ish-black relative overflow-hidden backdrop-blur-xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl sm:text-4xl font-black gold-gradient-text font-mono">
                {service.number}
              </span>
              <span className="px-3 py-1 rounded-full bg-ish-gold/20 text-ish-gold font-bold text-xs border border-ish-gold/30">
                {isAr ? 'خدمات إشبيلية الهندسية المعتمدة' : 'Certified Engineering Service'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-ish-white font-headline leading-tight mb-4">
              {isAr ? service.titleAr : service.titleEn}
            </h1>

            <p className="text-ish-gold font-bold text-base sm:text-lg mb-4 font-headline">
              {isAr ? service.taglineAr : service.taglineEn}
            </p>

            <p className="text-ish-gray-light text-sm sm:text-base leading-relaxed font-body max-w-3xl mb-8">
              {isAr ? service.descriptionAr : service.descriptionEn}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/201010722349?text=${encodeURIComponent(
                  isAr ? service.whatsappMessageAr : service.whatsappMessageEn
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-ish-gold/25 cursor-pointer"
              >
                <span>💬</span>
                <span>{isAr ? service.ctaTextAr : service.ctaTextEn}</span>
                <span>←</span>
              </a>

              <Link
                href="/consultation"
                className="py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-white bg-white/5 border border-white/20 hover:border-ish-gold transition-all"
              >
                {isAr ? 'حجز ميتنج VIP بالمقر' : 'Book Executive Meeting'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Scope of Work & Deliverables */}
      <section className="section-container relative z-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-1">
                {isAr ? 'نطاق العمل ومخرجات الخدمة' : 'Scope of Work & Deliverables'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-ish-white font-headline">
                {isAr ? 'ما الذي نضمن تسليمه لك بدقة تامة؟' : 'What We Guarantee to Deliver'}
              </h2>
            </div>

            <div className="space-y-3">
              {(isAr ? service.deliverablesAr : service.deliverablesEn).map((d, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3 hover:border-ish-gold/30 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-ish-gold/15 text-ish-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <p className="text-xs sm:text-sm text-ish-white/95 leading-relaxed font-body">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Standards Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-ish-black border border-ish-gold/30 shadow-2xl space-y-5">
            <div className="flex items-center gap-2 text-ish-gold font-bold text-sm border-b border-white/10 pb-3">
              <span>🛡️</span>
              <span>{isAr ? 'معايير الجودة والاشتراطات الهندسية' : 'Engineering Quality Standards'}</span>
            </div>

            <div className="space-y-2.5">
              {(isAr ? service.standardsAr : service.standardsEn).map((std, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-ish-gray-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-ish-gold shrink-0" />
                  <span className="text-ish-white font-medium">{std}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-ish-gold/10 border border-ish-gold/20 text-xs text-ish-gray-light leading-relaxed">
              {isAr
                ? 'كافة أعمالنا تخضع لإشراف استشاري نقابة المهندسين ومطابقة لاشتراطات جهاز تنمية مدينة السادات وهيئة المجتمعات العمرانية الجديدة.'
                : 'All works strictly comply with Sadat City Authority, NUCA regulations, and the Egyptian Syndicate of Engineers.'}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Execution Roadmap (4 Steps) */}
      <section className="section-container relative z-10 mb-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-ish-gold uppercase tracking-wider block mb-1">
            {isAr ? 'مراحل العمل والتنفيذ' : 'Execution Process & Roadmap'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ish-white font-headline">
            {isAr ? 'كيف ننفذ هذه الخدمة خطوة بخطوة؟' : 'Step-by-Step Implementation'}
          </h2>
          <div className="gold-line max-w-xs mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(isAr ? service.stepsAr : service.stepsEn).map((st, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-ish-gold/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-black gold-gradient-text font-mono block mb-2">
                  0{i + 1}
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] text-ish-gold font-semibold mb-3 border border-white/10">
                  ⏱️ {st.duration}
                </span>
                <h3 className="font-bold text-base text-ish-white mb-2 font-headline">
                  {st.title}
                </h3>
                <p className="text-xs text-ish-gray-light leading-relaxed font-body">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQs & Direct Request Form */}
      <section className="section-container relative z-10 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQs (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-ish-white font-headline mb-4">
              {isAr ? 'الأسئلة الشائعة حول الخدمة' : 'Frequently Asked Questions'}
            </h3>

            {(isAr ? service.faqsAr : service.faqsEn).map((faq, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <h4 className="font-bold text-sm text-ish-gold flex items-center gap-2">
                  <span>❓</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-ish-gray-light leading-relaxed font-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Direct Service Request Form (6 cols) */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-ish-gold/30 bg-gradient-to-br from-ish-gold/5 via-ish-black to-ish-black">
            <h3 className="text-xl font-bold text-ish-white font-headline mb-2">
              {isAr ? 'طلب استشارة أو مقايسة لهذه الخدمة' : 'Request a Quotation / Consultation'}
            </h3>
            <p className="text-xs text-ish-gray-light mb-6">
              {isAr ? 'أدخل بياناتك وسيتواصل معك مهندس متخصص من فريق إشبيلية خلال ساعات.' : 'Enter your details and our senior project consultant will reach out promptly.'}
            </p>

            <form onSubmit={handleRequestSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-ish-gold font-bold mb-1.5">{isAr ? 'الاسم الكريم *' : 'Full Name *'}</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder={isAr ? 'أدخل اسمك' : 'Your name'}
                  className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white focus:border-ish-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-ish-gold font-bold mb-1.5">{isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}</label>
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder={isAr ? '010XXXXXXXX' : '+20 10X XXX XXXX'}
                  className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white focus:border-ish-gold focus:outline-none font-mono"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-ish-gold font-bold mb-1.5">{isAr ? 'تفاصيل الموقع أو القطعة بالسادات:' : 'Plot or Project Details:'}</label>
                <input
                  type="text"
                  value={plotOrProjectDetails}
                  onChange={(e) => setPlotOrProjectDetails(e.target.value)}
                  placeholder={isAr ? 'مثال: قطعة 1205 بالمنطقة 21، أو عمارة سكنية' : 'e.g. Plot 1205 in Zone 21'}
                  className="w-full px-4 py-3 rounded-xl bg-ish-black border border-white/15 text-ish-white focus:border-ish-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-ish-gray-light font-bold mb-1.5">{isAr ? 'أي متطلبات أو استفسارات خاصة:' : 'Notes / Inquiries:'}</label>
                <textarea
                  rows={3}
                  value={clientMessage}
                  onChange={(e) => setClientMessage(e.target.value)}
                  placeholder={isAr ? 'اكتب استفسارك بالتفصيل...' : 'Your inquiry details...'}
                  className="w-full px-4 py-2.5 rounded-xl bg-ish-black border border-white/15 text-ish-white focus:border-ish-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-ish-gold/25 cursor-pointer mt-2"
              >
                <span>💬</span>
                <span>{isAr ? 'إرسال الطلب وحجز استشارة عبر واتساب' : 'Submit & Connect via WhatsApp'}</span>
                <span>←</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. Other Services Navigation */}
      <section className="section-container relative z-10 pt-8 border-t border-white/10 text-center">
        <h3 className="text-base font-bold text-ish-gold mb-4">
          {isAr ? 'استكشف باقي خدمات إشبيلية الهندسية:' : 'Explore Other Engineering Services:'}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {servicesData
            .filter((s) => s.id !== service.id)
            .map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-ish-gold/50 text-xs text-ish-white hover:text-ish-gold transition-colors"
              >
                {isAr ? s.titleAr : s.titleEn}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
