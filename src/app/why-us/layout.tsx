import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Tourism'Tour | Local guides & tailor-made trips in Benin",
  description: "Why travel to Benin with Tourism'Tour: local guides, support before and during your trip, tailor-made circuits and organised logistics for international travellers.",
  keywords: ['Benin travel agency', 'Benin local guides', 'tailor-made trip Benin', 'Benin tour operator', 'travel to Benin'],
  alternates: { canonical: '/why-us' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
