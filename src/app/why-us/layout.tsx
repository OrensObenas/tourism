import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Tourism'Tour | A Benin-based team for tourism and culture",
  description: "Why choose Tourism'Tour: a team based in Abomey-Calavi, culture at the centre, and a direct line to the team.",
  keywords: ['Tourism\'Tour', 'Benin culture', 'Abomey-Calavi', 'Escale Urbaine', 'travel to Benin'],
  alternates: { canonical: '/why-us' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
