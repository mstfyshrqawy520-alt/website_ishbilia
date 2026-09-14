'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();

  const contactActions = [
    {
      label: t.contact.callUs,
      href: 'tel:+201016144927',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: t.contact.emailUs,
      href: 'mailto:ishbilia1210@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 section-navy relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-ish-gold text-sm tracking-[0.15em] uppercase mb-4">
            {t.contact.sectionTitle}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ish-white mb-6">
            {t.contact.title}
          </h1>
          <div className="gold-line max-w-xs mx-auto mb-8" />
          <p className="text-ish-gray text-lg leading-relaxed max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address */}
            <div className="glass-card rounded-sm p-8">
              <div className="w-14 h-14 rounded-sm bg-ish-gold/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-ish-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-ish-gold font-bold text-lg mb-3">{t.contact.visitUs}</h3>
              <p className="text-ish-gray text-base leading-relaxed">{t.contact.address}</p>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-sm p-8">
              <div className="w-14 h-14 rounded-sm bg-ish-gold/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-ish-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-ish-gold font-bold text-lg mb-3">{t.contact.callUs}</h3>
              <a href="tel:+201016144927" className="block text-ish-gray hover:text-ish-gold transition-colors mb-2" dir="ltr">
                {t.contact.phone1}
              </a>
              <a href="tel:+201032032286" className="block text-ish-gray hover:text-ish-gold transition-colors" dir="ltr">
                {t.contact.phone2}
              </a>
            </div>

            {/* Email */}
            <div className="glass-card rounded-sm p-8">
              <div className="w-14 h-14 rounded-sm bg-ish-gold/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-ish-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-ish-gold font-bold text-lg mb-3">{t.contact.emailUs}</h3>
              <a href="mailto:ishbilia1210@gmail.com" className="text-ish-gray hover:text-ish-gold transition-colors">
                {t.contact.email}
              </a>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {contactActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="btn-outline rounded-sm inline-flex items-center gap-2"
              >
                <span className="text-ish-gold">{action.icon}</span>
                {action.label}
              </a>
            ))}
            <Link href="/consultation" className="btn-gold rounded-sm">
              {t.nav.consultation}
            </Link>
          </div>

          {/* Social */}
          <div className="mt-16 text-center">
            <h3 className="text-ish-gold font-bold text-lg mb-6">{t.contact.followUs}</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/Ishbilia.realestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-sm border border-ish-gray-dark flex items-center justify-center text-ish-gray hover:text-ish-gold hover:border-ish-gold transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@ishbilia23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-sm border border-ish-gray-dark flex items-center justify-center text-ish-gray hover:text-ish-gold hover:border-ish-gold transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
