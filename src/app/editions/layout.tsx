import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our editions: Escale Urbaine I, II, III and IV",
  description: "Photo galleries of Escale Urbaine I (2023), II (2024) and III (2025), and the most recent edition: Escale Urbaine IV, Grand-Popo, June 2026.",
  alternates: { canonical: '/editions' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
