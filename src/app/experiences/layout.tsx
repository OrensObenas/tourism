import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Expériences immersives",
  description: "Cérémonies vaudou, gastronomie, artisanat, rencontres avec les communautés locales : vivez le Bénin de l'intérieur.",
  alternates: { canonical: '/experiences' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
