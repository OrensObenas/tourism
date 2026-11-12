import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Places to discover in Benin | Cotonou, Ouidah, Ganvié, Abomey, Natitingou',
  description: "Cotonou, Ouidah, Ganvié, Porto-Novo, Grand-Popo, Abomey, Dassa-Zoumè, Natitingou: towns and cities in Benin you can discover with Tourism'Tour, at your own pace.",
  keywords: ['Benin travel', 'Ouidah', 'Ganvié', 'Abomey', 'Grand-Popo', 'Cotonou', 'Porto-Novo', 'Dassa-Zoumè', 'Natitingou', "Tourism'Tour", 'visiter le Bénin'],
  alternates: { canonical: '/destinations' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
