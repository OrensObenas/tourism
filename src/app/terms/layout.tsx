import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales de vente et de réservation des circuits Tourism'Tour.",
  alternates: { canonical: '/terms' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
