import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plan your trip to Benin | Visa, health, best time, money, safety',
  description: 'Practical guide for travelling to Benin: visa and entry, health, best time to visit, arriving in Cotonou, money and payment, safety and what is included in our trips.',
  keywords: ['Benin travel guide', 'Benin visa', 'Benin travel tips', 'best time to visit Benin', 'Cotonou arrival', 'Benin safety'],
  alternates: { canonical: '/plan-your-trip' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
