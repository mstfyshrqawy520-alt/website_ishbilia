'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function Footer() {
  const { t, lang } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.ourStory, href: '/our-story' },
    { label: t.nav.contact, href: '/contact' },
  ];

  return (
    <footer className="relative bg-[var(--bg-primary)] border-t border-ish-gold/15 overflow-hidden w-full" id="footer">
      {/* Faded Palace Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <Image
          src="/images/hero-cinematic.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/90 to-[var(--bg-primary)] pointer-events-none" />

      <div className="section-container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Ishbilia"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-ish-gold font-bold text-xl leading-tight group-hover:text-ish-gold-light transition-colors">
                  {lang === 'ar' ? 'إشبيلية' : 'ISHBILIA'}
                </span>
                <span className="text-[10px] text-ish-gray tracking-wider uppercase leading-none mt-0.5">
                  {lang === 'ar' ? 'للتطوير العقاري' : 'Real Estate'}
                </span>
              </div>
            </Link>
            <p className="text-ish-gray-light text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ish-gold font-bold text-base mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-ish-gray-light text-sm hover:text-ish-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ish-gold font-bold text-base mb-5">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-ish-gray-light text-sm">
              <li className="leading-relaxed">
                {lang === 'ar' ? (
                  <>
                    المنطقة الثامنة، جنة مول، الدور الثالث،
                    <br />
                    بجوار البريد ومطعم قصر السلام — مدينة السادات
                  </>
                ) : (
                  <>
                    Zone 8, Ganna Mall, 3rd Floor,
                    <br />
                    Near Post Office & Qasr El Salam — Sadat City
                  </>
                )}
              </li>
              <li>
                <a
                  href={`tel:${t.contact.phone1.replace(/\s+/g, '')}`}
                  className="text-ish-white hover:text-ish-gold font-medium transition-colors duration-200 inline-block"
                  dir="ltr"
                >
                  {t.contact.phone1}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.contact.phone2.replace(/\s+/g, '')}`}
                  className="text-ish-white hover:text-ish-gold font-medium transition-colors duration-200 inline-block"
                  dir="ltr"
                >
                  {t.contact.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-ish-white hover:text-ish-gold font-medium transition-colors duration-200 inline-block"
                >
                  {t.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-ish-gold font-bold text-base mb-5">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Ishbilia.realestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-ish-white hover:text-ish-gold hover:bg-ish-gold/15 hover:border-ish-gold/50 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@ishbilia23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-ish-white hover:text-ish-gold hover:bg-ish-gold/15 hover:border-ish-gold/50 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-ish-gold/80 text-xs italic font-medium">
              {t.footer.closing}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-ish-gray-light text-xs">
            © {new Date().getFullYear()} Ishbilia Real Estate Development. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
