import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan your trip to Benin: contact Tourism'Tour by form, WhatsApp, email or phone. Tell us your dates and interests.",
  alternates: { canonical: '/contact' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
