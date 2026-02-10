import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

export const metadata: Metadata = {
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
    url: "https://tourismtour.com",
    siteName: "Tourism'Tour",
    title: "Tourism'Tour - Découvrez le Bénin Authentique",
    description: "Vivez des expériences culturelles uniques au Bénin avec Tourism'Tour.",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-sand-50 text-gray-900 min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
