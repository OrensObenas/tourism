import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Benin tours & circuits",
  description: "Cultural circuits, day trips and safaris in Benin: Ouidah, Ganvié, Abomey, Pendjari, Tata Somba. Find the trip that suits you, or ask for a tailor-made itinerary.",
  alternates: { canonical: '/circuits' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
