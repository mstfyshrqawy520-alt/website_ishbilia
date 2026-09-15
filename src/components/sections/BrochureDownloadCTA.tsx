'use client';

import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { useScrollReveal } from '@/lib/motion/useScrollAnimation';

export default function BrochureDownloadCTA() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const sectionRef = useScrollReveal();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('residential');
  const [submitted, setSubmitted] = useState(false);

  const cleanWhatsappNumber = '201016144927';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    const interestLabel =
      interest === 'residential'
        ? (isAr ? 'شقق سكنية فاخرة' : 'Luxury Residential')
        : interest === 'investment'
        ? (isAr ? 'فرص استثمارية وتجارية' : 'Commercial & Investment')
        : (isAr ? 'شراكة وتطوير أراضي' : 'Land Partnership');

    const message = isAr
      ? `*طلب تحميل كتالوج مشاريع إشبيلية 2025 (PDF)*
👤 *الاسم:* ${name.trim() || 'عميل مهتم'}
📱 *رقم الهاتف:* ${phone.trim()}
🎯 *مجال الاهتمام:* ${interestLabel}

أرجو تزويدي بالنسخة الرقمية المحدثة للبروشور الشامل والمخططات الهندسية للمشاريع المتاحة في مدينة السادات.`
      : `*Request for Ishbilia 2025 Projects Brochure (PDF)*
👤 *Name:* ${name.trim() || 'Interested Client'}
📱 *Phone:* ${phone.trim()}
🎯 *Interest:* ${interestLabel}

Please send the updated digital PDF brochure with architectural master plans for Sadat City projects.`;

    const whatsappUrl = `https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="section-rhythm relative w-full overflow-hidden"
      id="brochure-download-section"
      style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(20,16,10,0.95) 50%, var(--bg-primary) 100%)',
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 -start-24 -translate-y-1/2 w-96 h-96 bg-ish-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -end-24 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="glass-card rounded-3xl border border-ish-gold/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden bg-gradient-to-br from-white/[0.04] via-black/80 to-ish-black">
          {/* Decorative Corner Seals */}
          <div className="absolute top-0 end-0 w-32 h-32 overflow-hidden pointer-events-none">
            <div className="absolute transform rotate-45 bg-gradient-to-r from-ish-gold to-amber-400 text-ish-black text-[10px] font-black py-1 right-[-35px] top-[22px] w-[130px] text-center shadow-lg">
              PDF 2025
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Side: Pitch & Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ish-gold/15 border border-ish-gold/30 text-ish-gold text-xs font-semibold">
                <span>📑</span>
                <span>{isAr ? 'الكتالوج الهندسي الرسمي المعتمد' : 'Official Architectural Brochure'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-ish-white font-headline leading-tight">
                {isAr ? (
                  <>
                    حمّل بروشور مشروعات <span className="gold-gradient-text">إشبيلية 2025</span> مجاناً
                  </>
                ) : (
                  <>
                    Download the <span className="gold-gradient-text">Ishbilia 2025</span> Brochure Free
                  </>
                )}
              </h2>

              <p className="text-ish-gray text-xs sm:text-sm leading-relaxed max-w-xl font-body">
                {isAr
                  ? 'دليل استثماري ومعماري متكامل يضم المخططات الهندسية والمساقط الأفقية بدقة، مع صور الواجهات واللوكيشن التفصيلي لأكثر من 22 مشروعاً سكنياً وتجارياً في مدينة السادات.'
                  : 'A complete architectural guide featuring exact floor plans, 3D facades, and detailed location maps for over 22 premier projects in Sadat City.'}
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-ish-gray-light">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-ish-gold/20 text-ish-gold flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{isAr ? 'مساقط أفقية معمارية بدقة عالية' : 'High-res floor & unit layouts'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-ish-gold/20 text-ish-gold flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{isAr ? 'خرائط مواقع القطع والمحاور الرئيسية' : 'GPS coordinates & zoning maps'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-ish-gold/20 text-ish-gold flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{isAr ? 'تفاصيل المساحات ومواصفات التشطيب' : 'Detailed areas & finishing specs'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-ish-gold/20 text-ish-gold flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span>{isAr ? 'تسهيلات السداد وخطط الدفع بدون فوائد' : 'Flexible zero-interest payment plans'}</span>
                </div>
              </div>
            </div>

            {/* Right Side: Lead Capture Form (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-ish-gold/30 shadow-2xl relative">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="text-center pb-2">
                      <h3 className="text-base sm:text-lg font-bold text-ish-white font-headline">
                        {isAr ? 'استلم نسختك الرقمية فوراً' : 'Get Your Digital Copy Instantly'}
                      </h3>
                      <p className="text-[11px] text-ish-gray mt-1">
                        {isAr ? 'أدخل بياناتك وسيتم إرسال الملف مباشرة عبر واتساب' : 'Enter your details to receive the PDF via WhatsApp'}
                      </p>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-ish-gray-light mb-1">
                        {isAr ? 'الاسم بالكامل:' : 'Full Name:'}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isAr ? 'اكتب اسمك الكريم' : 'Enter your name'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ish-black border border-white/15 text-ish-white text-xs placeholder:text-ish-gray/50 focus:border-ish-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-ish-gold mb-1">
                        {isAr ? 'رقم الواتساب (مطلوب):' : 'WhatsApp Number (Required):'} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={isAr ? 'مثال: 01012345678' : 'e.g., 01012345678'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-ish-black border border-ish-gold/50 text-ish-white text-xs placeholder:text-ish-gray/50 focus:border-ish-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-ish-gray-light mb-1">
                        {isAr ? 'ما الذي تبحث عنه؟' : 'Primary Interest:'}
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: 'residential', labelAr: 'سكن فاخر', labelEn: 'Residential' },
                          { id: 'investment', labelAr: 'استثمار', labelEn: 'Investment' },
                          { id: 'land', labelAr: 'مشاركة أرض', labelEn: 'Land Owner' },
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setInterest(item.id)}
                            className={`py-2 px-1 rounded-lg text-[10px] font-bold border transition-all cursor-pointer text-center ${
                              interest === item.id
                                ? 'bg-ish-gold text-ish-black border-ish-gold shadow-sm font-black'
                                : 'bg-white/[0.03] border-white/10 text-ish-gray hover:text-ish-white'
                            }`}
                          >
                            {isAr ? item.labelAr : item.labelEn}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-ish-black bg-gradient-to-r from-ish-gold via-ish-gold-light to-amber-300 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-ish-gold/25 cursor-pointer mt-3"
                    >
                      <span>📥</span>
                      <span>{isAr ? 'تحميل البروشور واستلامه على واتساب' : 'Download & Receive via WhatsApp'}</span>
                      <span>←</span>
                    </button>

                    <p className="text-center text-[10px] text-ish-gray/60">
                      {isAr ? '🔒 نحترم خصوصيتك — لن يتم مشاركة بياناتك إطلاقاً' : '🔒 100% Privacy — Your data is strictly secure'}
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-3xl">
                      ✅
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-ish-white font-headline">
                        {isAr ? 'تم استلام طلبك بنجاح!' : 'Request Received Successfully!'}
                      </h4>
                      <p className="text-xs text-ish-gray mt-1 leading-relaxed">
                        {isAr
                          ? 'جاري إرسال الكتالوج والمخططات الهندسية إلى محادثة الواتساب الخاصة بك.'
                          : 'Our team is sending the full PDF brochure to your WhatsApp conversation.'}
                      </p>
                    </div>
                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href="/portfolio"
                        className="py-2.5 px-4 rounded-xl text-xs font-bold text-ish-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all inline-block"
                      >
                        {isAr ? 'تصفح سابقة الأعمال أونلاين' : 'Explore Portfolio Online'}
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-[11px] text-ish-gold hover:underline cursor-pointer"
                      >
                        {isAr ? 'طلب بروشور آخر' : 'Request Another'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
