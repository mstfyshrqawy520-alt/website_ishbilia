'use client';

import { LanguageProvider } from '@/i18n/LanguageProvider';
import { useSmoothScroll } from '@/lib/motion/useSmoothScroll';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
