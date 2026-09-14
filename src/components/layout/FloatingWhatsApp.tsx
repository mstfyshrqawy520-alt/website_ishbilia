'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <aside
      aria-label={isAr ? 'روابط التواصل السريع' : 'Quick contact links'}
      className="fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 p-2 sm:p-2.5 rounded-full bg-black/30 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60"
    >
      {/* 1. WhatsApp — gray default, green on hover */}
      <a
        href="https://wa.me/201010722349"
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/8 text-ish-gray hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_rgba(37,211,102,0.4)]"
        aria-label="WhatsApp"
        title={isAr ? 'واتساب' : 'WhatsApp'}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.777.818 2.802.818l.006-.001c3.18 0 5.767-2.586 5.768-5.766.001-3.182-2.584-5.803-5.78-5.803zm3.385 8.163c-.145.411-.744.757-1.026.786-.282.029-.636.145-2.093-.455-1.859-.766-3.056-2.659-3.149-2.784-.093-.125-.757-1.009-.757-1.923 0-.914.478-1.364.648-1.541.171-.177.374-.221.499-.221.125 0 .25.002.359.007.114.006.268-.043.418.322.156.375.53 1.294.576 1.388.046.094.077.204.015.328-.062.125-.093.203-.187.312-.093.109-.197.243-.281.326-.093.094-.191.196-.082.383.109.187.483.797 1.037 1.291.714.636 1.316.833 1.503.926.187.094.296.078.405-.047.109-.125.468-.544.593-.731.125-.187.25-.156.421-.094.171.062 1.09.514 1.277.608.187.094.312.141.358.219.046.078.046.453-.099.864z" />
        </svg>
      </a>

      {/* 2. Email — gray default, gold on hover */}
      <a
        href="mailto:ishbilia1210@gmail.com"
        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/8 text-ish-gray hover:bg-ish-gold/20 hover:text-ish-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_rgba(212,175,55,0.35)]"
        aria-label="Email"
        title={isAr ? 'البريد الإلكتروني' : 'Email'}
      >
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0017.25 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </a>

      {/* 3. Consultation — gray default, gold on hover */}
      <Link
        href="/consultation"
        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/8 text-ish-gray hover:bg-ish-gold/20 hover:text-ish-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_16px_rgba(212,175,55,0.35)]"
        aria-label="Consultation"
        title={isAr ? 'طلب استشارة' : 'Consultation'}
      >
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-.75-.75c0-.986.302-1.917.828-2.697A7.954 7.954 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      </Link>
    </aside>
  );
}
