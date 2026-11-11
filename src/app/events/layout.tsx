import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events in Benin",
  description: "Ouidah Voodoo festival, carnivals, safari outings: events organised by Tourism'Tour in Benin.",
  alternates: { canonical: '/events' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
