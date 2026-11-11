import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About us",
  description: "Meet Tourism'Tour, a structure based in Abomey-Calavi, Benin, working for tourism development and the promotion of culture.",
  alternates: { canonical: '/about' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
