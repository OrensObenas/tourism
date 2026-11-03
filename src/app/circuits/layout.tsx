import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos circuits au Bénin",
  description: "Circuits culturels, excursions d'une journée et safaris : Ouidah, Ganvié, Abomey, Pendjari, Tata Somba. Trouvez le voyage qui vous ressemble.",
  alternates: { canonical: '/circuits' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
