import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Tourism'Tour collects and protects your personal data.",
  alternates: { canonical: '/privacy' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
