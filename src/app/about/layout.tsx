import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About us",
  description: "Meet Tourism'Tour, a travel agency based in Cotonou, and our approach to authentic, responsible travel in Benin.",
  alternates: { canonical: '/about' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
