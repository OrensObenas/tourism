import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan your trip to Benin: contact Tourism'Tour by form, email, phone or Facebook. Tell us your dates and interests.",
  alternates: { canonical: '/contact' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
