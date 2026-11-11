import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our experiences: Escale Urbaine in Grand-Popo, Benin",
  description: "Discover Tourism'Tour's experiences around culture and heritage in Benin, starting with Escale Urbaine in Grand-Popo.",
  alternates: { canonical: '/experiences' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
