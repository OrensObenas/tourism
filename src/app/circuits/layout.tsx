import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "Benin tours & circuits",
  description: "Cultural circuits, day trips and safaris in Benin: Ouidah, Ganvié, Abomey, Pendjari, Tata Somba. Find the trip that suits you, or ask for a tailor-made itinerary.",
  alternates: { canonical: '/circuits' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Contenu de démonstration non vérifié : masqué (voir siteConfig.showLegacyContent)
  if (!siteConfig.showLegacyContent) notFound();
  return children;
}
