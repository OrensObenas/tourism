import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: "FAQ - Travelling to Benin",
  description: "Visa, health, safety, budget, best time to go: answers to help you prepare your trip to Benin.",
  alternates: { canonical: '/faq' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Contenu de démonstration non vérifié : masqué (voir siteConfig.showLegacyContent)
  if (!siteConfig.showLegacyContent) notFound();
  return children;
}
