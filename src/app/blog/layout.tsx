import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog voyage Bénin",
  description: "Conseils pratiques, histoire, culture et bons plans pour préparer votre voyage au Bénin.",
  alternates: { canonical: '/blog' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
