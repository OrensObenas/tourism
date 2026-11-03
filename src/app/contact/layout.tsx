import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Planifiez votre voyage au Bénin : contactez Tourism'Tour par WhatsApp, email ou téléphone. Réponse sous 24h.",
  alternates: { canonical: '/contact' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
