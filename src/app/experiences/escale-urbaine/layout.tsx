import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: "Escale Urbaine, Grand-Popo: cultural getaway in Benin | Tourism'Tour" },
  description: "Escale Urbaine IV, Grand-Popo, 27–28 June 2026: Zangbéto demonstration, river crossing, salt production, sea turtle refuge, mat weaving and more.",
  alternates: { canonical: '/experiences/escale-urbaine' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
