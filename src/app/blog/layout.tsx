import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "Benin travel blog",
  description: "Practical tips, history and culture to help you prepare your trip to Benin.",
  alternates: { canonical: '/blog' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Contenu de démonstration non vérifié : masqué (voir siteConfig.showLegacyContent)
  if (!siteConfig.showLegacyContent) notFound();
  return children;
}
