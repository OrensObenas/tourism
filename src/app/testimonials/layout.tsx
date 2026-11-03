import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Avis voyageurs",
  description: "Ce que nos voyageurs disent de leurs circuits au Bénin avec Tourism'Tour.",
  alternates: { canonical: '/testimonials' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
