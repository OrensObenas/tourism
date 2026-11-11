import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms of sale and booking for Tourism'Tour trips.",
  alternates: { canonical: '/terms' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
