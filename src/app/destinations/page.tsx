'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { copy } from '@/lib/content';
import { destinations } from '@/lib/data/destinations';

export default function DestinationsPage() {
  const { locale } = useLanguage();
  const c = copy[locale].destinations;

  return (
    <div className="min-h-screen">
      <section className="bg-primary-900 text-white pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">{c.title}</h1>
            <p className="text-xl text-primary-200 max-w-2xl mb-4">{c.subtitle}</p>
            <p className="text-primary-100 max-w-2xl">{c.intro}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 lg:py-16 section-purple-tint">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {destinations.map((d, i) => (
            <AnimatedSection key={d.slug}>
              <article
                id={d.slug}
                className="grid md:grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-soft scroll-mt-28"
              >
                <div className={`relative min-h-[260px] md:min-h-[380px] ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    aria-label={d.name}
                    className="absolute inset-0 z-[1]"
                  />
                  {d.image ? (
                    <Image
                      src={d.image}
                      alt={d.imageAlt[locale]}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-700 to-primary-950">
                      <span className="text-4xl lg:text-5xl font-heading font-bold text-gold-300">{d.name}</span>
                    </div>
                  )}
                  {d.image && d.credit && (
                    <p className="absolute bottom-0 right-0 z-[2] rounded-tl-lg bg-black/55 px-2 py-1 text-[11px] text-white/90">
                      <a href={d.credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Photo : {d.credit.author}
                      </a>
                      {' · '}
                      <a href={d.credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {d.credit.license}
                      </a>
                    </p>
                  )}
                </div>

                <div className="p-6 lg:p-10 flex flex-col">
                  <p className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    {d.region[locale]}
                  </p>
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                    <Link href={`/destinations/${d.slug}`} className="hover:text-primary-700">{d.name}</Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{d.summary[locale]}</p>

                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                    {c.highlightsTitle}
                  </h3>
                  <ul className="space-y-2 mb-8">
                    {d.highlights.map((h) => (
                      <li key={h.fr} className="flex items-start gap-2 text-gray-700">
                        <Check className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
                        {h[locale]}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg">
                      <Link href={`/destinations/${d.slug}`}>
                        {c.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    {d.related && (
                      <Button asChild size="lg" variant="outline">
                        <Link href={d.related.href}>{d.related.label[locale]}</Link>
                      </Button>
                    )}
                  </div>
                  <Link
                    href={`/contact?topic=general&destination=${d.slug}`}
                    className="mt-4 text-sm text-gray-500 underline-offset-2 hover:text-primary-700 hover:underline"
                  >
                    {c.contactLink}
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">{c.finalTitle}</h2>
          <p className="text-primary-100 mb-8">{c.finalText}</p>
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">
              {c.finalButton}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
