import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Tourism'Tour collecte et protège vos données personnelles.",
  alternates: { canonical: '/privacy' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
