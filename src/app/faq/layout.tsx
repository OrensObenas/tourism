import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ - Travelling to Benin",
  description: "Visa, health, safety, budget, best time to go: answers to help you prepare your trip to Benin.",
  alternates: { canonical: '/faq' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
