import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "Events in Benin",
  description: "Ouidah Voodoo festival, carnivals, safari outings: events organised by Tourism'Tour in Benin.",
  alternates: { canonical: '/events' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Contenu de démonstration non vérifié : masqué (voir siteConfig.showLegacyContent)
  if (!siteConfig.showLegacyContent) notFound();
  return children;
}
