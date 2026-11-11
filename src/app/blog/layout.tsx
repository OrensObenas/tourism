import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Benin travel blog",
  description: "Practical tips, history and culture to help you prepare your trip to Benin.",
  alternates: { canonical: '/blog' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
