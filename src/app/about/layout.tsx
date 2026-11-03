import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez l'équipe de Tourism'Tour, agence de tourisme culturel basée à Cotonou, et notre vision d'un voyage authentique et responsable au Bénin.",
  alternates: { canonical: '/about' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
