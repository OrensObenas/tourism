import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Événements",
  description: "Festival des Vodun de Ouidah, carnavals, sorties safari : les prochains événements organisés par Tourism'Tour au Bénin.",
  alternates: { canonical: '/events' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
