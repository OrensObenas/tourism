'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PhotoGrid } from '@/components/editions/PhotoGrid';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { copy } from '@/lib/content';
import photoIndex from '@/lib/data/editionPhotos.json';

const photosByYear = photoIndex as Record<string, string[]>;
const years = ['2025', '2024', '2023'];

export default function EditionsPage() {
  const { locale } = useLanguage();
  const c = copy[locale].editions;
  const labels = { showMore: c.showMore, shown: c.shown, close: c.close, prev: c.prev, next: c.next };

  return (
    <div className="min-h-screen">
      <section className="bg-primary-900 text-white pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">{c.title}</h1>
            <p className="text-xl text-primary-200 max-w-2xl">{c.subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 lg:py-16 section-purple-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Édition la plus récente : Escale Urbaine Acte IV (aucune photo dans le dépôt) */}
          <div id="2026">
            <span className="inline-block rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-primary-950 mb-3">
              {c.latest}
            </span>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900">{c.e2026}</h2>
            <p className="text-gray-600 mt-1 mb-4">{c.e2026Sub}</p>
            <p className="rounded-xl border border-dashed border-gold-600 bg-gold-50 p-4 text-sm text-gold-800">
              {c.noPhotos}{' '}
              <Link href="/experiences/escale-urbaine" className="font-semibold underline">
                {copy[locale].experiences.cardButton}
              </Link>
            </p>
          </div>

          {years.map((year) => (
            <div key={year} id={year}>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-6">
                {locale === 'en' ? `${year} Edition` : `Édition ${year}`}
              </h2>
              <PhotoGrid
                photos={photosByYear[year].map((f) => `/images/editions/${year}/${f}`)}
                altPrefix={locale === 'en' ? `${year} edition photo` : `Photo de l'édition ${year}`}
                labels={labels}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">{c.ctaTitle}</h2>
          <p className="text-primary-200 mb-8">{c.ctaText}</p>
          <Button asChild variant="accent" size="xl">
            <Link href="/contact">{c.ctaButton}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
