import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "Traveller reviews",
  description: "What travellers say about their trips to Benin with Tourism'Tour.",
  alternates: { canonical: '/testimonials' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Contenu de démonstration non vérifié : masqué (voir siteConfig.showLegacyContent)
  if (!siteConfig.showLegacyContent) notFound();
  return children;
}
