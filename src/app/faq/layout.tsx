import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ — Tourism'Tour",
  description: "Answers about Tourism'Tour, Escale Urbaine, how to get in touch, and practical points for a trip to Benin. Prices and next edition dates are to be confirmed.",
  alternates: { canonical: '/faq' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
