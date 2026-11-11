import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our editions: photos of Tourism'Tour editions",
  description: "Photo galleries of the 2023, 2024 and 2025 editions, and the most recent edition: Escale Urbaine, Act IV, Grand-Popo, June 2026.",
  alternates: { canonical: '/editions' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
