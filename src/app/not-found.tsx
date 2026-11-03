import Link from 'next/link';
import { Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-28 pb-16 px-4 section-brand-mix">
      <div className="text-center max-w-lg">
        <Compass className="h-16 w-16 text-primary-600 mx-auto mb-6" />
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Page introuvable</h1>
        <p className="text-gray-600 mb-8">
          Cette page n&apos;existe pas ou a été déplacée. Mais le Bénin, lui, vous attend toujours !
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/circuits">Voir les circuits</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
