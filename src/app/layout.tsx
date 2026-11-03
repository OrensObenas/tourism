import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Données structurées : aident Google à afficher l'agence (nom, contact, zone)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/Tourism_logo.png`,
  image: `${siteConfig.url}/images/Header.jpg`,
  email: siteConfig.email,
  telephone: `+${siteConfig.phoneE164}`,
  address: { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" },
  areaServed: { "@type": "Country", name: "Bénin" },
  foundingDate: String(siteConfig.foundedYear),
  sameAs: Object.values(siteConfig.socials).filter(Boolean),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tourism'Tour - Découvrez le Bénin Authentique",
    template: "%s | Tourism'Tour",
  },
  description: "Vivez des expériences culturelles uniques au Bénin avec Tourism'Tour. Circuits culturels, safaris, festivals vaudou et bien plus. Votre passeport pour le Bénin authentique.",
  keywords: ["tourisme Bénin", "voyage Bénin", "circuit culturel", "safari Pendjari", "vaudou", "Ganvié", "Abomey", "Tourism Tour"],
  authors: [{ name: "Tourism'Tour" }],
  creator: "Tourism'Tour",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "/",
    siteName: "Tourism'Tour",
    title: "Tourism'Tour - Découvrez le Bénin Authentique",
    description: "Vivez des expériences culturelles uniques au Bénin avec Tourism'Tour.",
    images: [
      {
        url: "/images/Header.jpg",
        width: 1200,
        height: 630,
        alt: "Tourism'Tour - Bénin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tourism'Tour - Découvrez le Bénin Authentique",
    description: "Vivez des expériences culturelles uniques au Bénin.",
    images: ["/images/Header.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className="antialiased app-bg bg-sand-50 text-gray-900 min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
