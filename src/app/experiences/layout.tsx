import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Immersive experiences in Benin",
  description: "Voodoo ceremonies, local food, crafts and meetings with local communities: experience Benin from the inside.",
  alternates: { canonical: '/experiences' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
