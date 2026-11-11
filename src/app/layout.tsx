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
  logo: `${siteConfig.url}/images/logo.png`,
  image: `${siteConfig.url}/images/og-image.png`,
  email: siteConfig.email,
  telephone: `+${siteConfig.phoneE164}`,
  address: { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" },
  areaServed: { "@type": "Country", name: "Benin" },
  foundingDate: String(siteConfig.foundedYear),
  sameAs: Object.values(siteConfig.socials).filter(Boolean),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "Tourism'Tour",
  title: {
    default: "Tourism'Tour | Benin travel agency: local guides & tailor-made trips",
    template: "%s | Tourism'Tour",
  },
  description: "Plan your trip to Benin with a local agency based in Cotonou. Cultural circuits, Ouidah, Ganvié, Abomey, Pendjari safari, local guides and tailor-made itineraries for international travellers.",
  keywords: ["Benin travel", "travel to Benin", "Benin tours", "Benin travel agency", "Benin tour guide", "Cotonou", "Ouidah", "Ganvié", "Abomey", "Pendjari safari", "voodoo festival Benin", "voyage Bénin", "Tourism Tour"],
  authors: [{ name: "Tourism'Tour" }],
  creator: "Tourism'Tour",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fr_FR",
    url: "/",
    siteName: "Tourism'Tour",
    title: "Tourism'Tour | Benin travel agency: local guides & tailor-made trips",
    description: "Plan your trip to Benin with local guides and a team that supports you before and during your journey.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tourism'Tour logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tourism'Tour | Benin travel agency",
    description: "Plan your trip to Benin with local guides and tailor-made itineraries.",
    images: ["/images/og-image.png"],
  },
  alternates: { canonical: "/" },
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
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
