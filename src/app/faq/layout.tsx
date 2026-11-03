import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description: "Visa, santé, sécurité, budget, meilleure période : toutes les réponses pour préparer votre voyage au Bénin.",
  alternates: { canonical: '/faq' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
