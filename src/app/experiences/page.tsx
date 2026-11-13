'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PageHeader } from '@/components/common/PageHeader';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { copy } from '@/lib/content';
import { escaleUrbaine } from '@/lib/data/escaleUrbaine';
import { bannerFor } from '@/lib/data/banners';

export default function ExperiencesPage() {
  const { locale } = useLanguage();
  const c = copy[locale].experiences;

  return (
    <div className="min-h-screen">
      <PageHeader title={c.title} subtitle={c.subtitle} image={bannerFor('experiences', locale)} />

      <section className="py-12 lg:py-16 section-purple-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <article className="rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 p-8 lg:p-12 text-white shadow-soft">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">{escaleUrbaine.name}</h2>
              <p className="flex flex-wrap gap-x-6 gap-y-1 text-gold-300 mb-5 text-sm font-medium">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{escaleUrbaine.place}</span>
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{escaleUrbaine.act} · {escaleUrbaine.dates[locale]}</span>
              </p>
              <p className="text-primary-100 leading-relaxed max-w-2xl mb-8">{c.cardText}</p>
              <Button asChild variant="accent" size="lg">
                <Link href="/experiences/escale-urbaine">{c.cardButton}<ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </article>
          </AnimatedSection>

          <div className="mt-10 rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-2">{c.moreTitle}</h2>
            <p className="text-gray-600 mb-4">{c.moreText}</p>
            <Button asChild variant="outline"><Link href="/contact">{copy[locale].about.ctaButton}</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
