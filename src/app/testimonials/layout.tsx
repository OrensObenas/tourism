import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Traveller reviews",
  description: "What travellers say about their trips to Benin with Tourism'Tour.",
  alternates: { canonical: '/testimonials' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
