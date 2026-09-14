import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ishbilia.dev"),
  title: "إشبيلية | Ishbilia Real Estate Development - شركة إشبيلية للتطوير العقاري",
  description: "شركة إشبيلية للتطوير العقاري — نبني مدينة أفضل مشروع بعد مشروع. خدمات تطوير عقاري متكاملة في مدينة السادات: تصميم معماري، بناء، تراخيص، تشطيبات، وتطوير أراضي.",
  keywords: "إشبيلية, Ishbilia, تطوير عقاري, مدينة السادات, عقارات, بناء, تراخيص, real estate, development, Sadat City",
  openGraph: {
    title: "إشبيلية | Ishbilia Real Estate Development",
    description: "شركة إشبيلية للتطوير العقاري — نصنع المستقبل ونبني الثقة",
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    siteName: "Ishbilia",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ishbilia Real Estate Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "إشبيلية | Ishbilia Real Estate Development",
    description: "شركة إشبيلية للتطوير العقاري — نصنع المستقبل ونبني الثقة",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://ishbilia.dev/" />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "إشبيلية - Ishbilia",
              description: "شركة إشبيلية للتطوير العقاري",
              url: "https://ishbilia.dev/",
              telephone: ["+201016144927", "+201032032286"],
              email: "ishbilia1210@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "المنطقة الثامنة، جنة مول، الدور الثالث",
                addressLocality: "مدينة السادات",
                addressCountry: "EG",
              },
              sameAs: [
                "https://www.facebook.com/Ishbilia.realestate/",
                "https://tiktok.com/@ishbilia23",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ish-black text-ish-white" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
