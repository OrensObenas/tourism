import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Places to discover in Benin | Ouidah, Ganvié, Abomey, Grand-Popo',
  description: "Ouidah, Ganvié, Abomey, Grand-Popo: towns and cities in Benin you can discover with Tourism'Tour, at your own pace.",
  keywords: ['Benin travel', 'Ouidah', 'Ganvié', 'Abomey', 'Grand-Popo', "Tourism'Tour", 'visiter le Bénin'],
  alternates: { canonical: '/destinations' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
