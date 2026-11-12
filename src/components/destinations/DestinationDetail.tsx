'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Check, ExternalLink, Info, MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { copy } from '@/lib/content';
import { destinations, type Destination, type PhotoCredit } from '@/lib/data/destinations';
import type { DestinationDetail as Detail } from '@/lib/data/destinationDetails';

function CreditLine({ credit, prefix, className }: { credit: PhotoCredit; prefix: string; className?: string }) {
  return (
    <span className={className}>
      {prefix}{' '}
      <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {credit.author}
      </a>
      {' · '}
      <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {credit.license}
      </a>
    </span>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      {items.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  );
}

export function DestinationDetail({ destination, detail }: { destination: Destination; detail: Detail }) {
  const { locale } = useLanguage();
  const c = copy[locale].destinations;
  const t = c.detail;
  const city = destination.name;

  const allPhotos = [detail.hero, ...detail.gallery];
  const credited = allPhotos.filter((p) => p.credit);
  const neighbors = detail.neighbors
    .map((slug) => destinations.find((d) => d.slug === slug))
    .filter((d): d is Destination => Boolean(d));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-primary-950 text-white">
        <Image
          src={detail.hero.src}
          alt={detail.hero.alt[locale]}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-primary-950/30" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-16">
          <Link
            href="/destinations"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>
          <p className="inline-flex items-center gap-1.5 text-gold-300 font-medium mb-2">
            <MapPin className="h-5 w-5" />
            {destination.region[locale]}
          </p>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold break-words">{city}</h1>
        </div>
        {detail.hero.credit && (
          <CreditLine
            credit={detail.hero.credit}
            prefix={t.photoBy}
            className="absolute bottom-0 right-0 max-w-full rounded-tl-lg bg-black/55 px-2 py-1 text-[11px] text-white/90"
          />
        )}
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-heading">{detail.intro[locale]}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Histoire + ce que la ville raconte */}
      <section className="py-12 lg:py-16 section-purple-tint">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-5">{t.history}</h2>
            <Paragraphs items={detail.history[locale]} />
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-5">{t.tells}</h2>
            <Paragraphs items={detail.tells[locale]} />
          </AnimatedSection>
        </div>
      </section>

      {/* À voir */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">{t.places}</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detail.places.map((p) => (
              <AnimatedSection key={p.name.fr}>
                <div className="h-full rounded-3xl bg-white p-6 shadow-soft border border-primary-50">
                  <h3 className="flex items-start gap-2 text-lg font-heading font-bold text-gray-900 mb-2">
                    <Check className="h-5 w-5 text-gold-600 shrink-0 mt-1" />
                    {p.name[locale]}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{p.description[locale]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Culture + bon à savoir */}
      <section className="py-12 lg:py-16 section-purple-tint">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-5">{t.culture}</h2>
            <Paragraphs items={detail.culture[locale]} />
          </AnimatedSection>
          {detail.goodToKnow && (
            <AnimatedSection>
              <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-soft">
                <h2 className="flex items-center gap-2 text-2xl font-heading font-bold text-gray-900 mb-4">
                  <Info className="h-6 w-6 text-primary-600" />
                  {t.goodToKnow}
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  {detail.goodToKnow[locale].map((item) => (
                    <li key={item.slice(0, 40)} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-gold-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Galerie */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">{t.gallery}</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detail.gallery.map((p) => (
              <AnimatedSection key={p.src}>
                <figure className="overflow-hidden rounded-3xl bg-white shadow-soft border border-primary-50">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.src}
                      alt={p.alt[locale]}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="p-4 text-sm">
                    <span className="block text-gray-800">{p.caption[locale]}</span>
                    {p.credit && (
                      <CreditLine credit={p.credit} prefix={t.photoBy} className="mt-1 block text-xs text-gray-500" />
                    )}
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Crédits photos + sources */}
      <section className="py-12 lg:py-16 section-purple-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">{t.creditsTitle}</h2>
            <p className="text-sm text-gray-600 mb-4">{t.creditsNote}</p>
            <ul className="space-y-3 text-sm text-gray-700">
              {credited.map((p) => (
                <li key={p.src} className="break-words">
                  <span className="block font-medium text-gray-900">{p.caption[locale]}</span>
                  {p.credit && (
                    <>
                      {p.credit.author} ·{' '}
                      <a
                        href={p.credit.licenseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-700 hover:underline"
                      >
                        {p.credit.license}
                      </a>
                      {' · '}
                      <a
                        href={p.credit.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-700 hover:underline"
                      >
                        {t.viewSource}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">{t.sourcesTitle}</h2>
            <p className="text-sm text-gray-600 mb-4">{t.sourcesNote}</p>
            <ul className="space-y-2 text-sm">
              {detail.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 text-primary-700 hover:underline break-words"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">{t.ctaTitle(city)}</h2>
          <p className="text-primary-100 mb-8">{t.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="accent" size="lg">
              <Link href={`/contact?topic=general&destination=${destination.slug}`}>
                {t.ctaButton(city)}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {destination.related && (
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/60 hover:bg-white/10 hover:text-white">
                <Link href={destination.related.href}>{destination.related.label[locale]}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Villes voisines */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">{t.moreTitle}</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {neighbors.map((n) => (
              <AnimatedSection key={n.slug}>
                <Link
                  href={`/destinations/${n.slug}`}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-soft border border-primary-50"
                >
                  <div className="relative aspect-[4/3]">
                    {n.image && (
                      <Image
                        src={n.image}
                        alt={n.imageAlt[locale]}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-primary-600 font-medium">{n.region[locale]}</p>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">{n.name}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-700">
                      {t.moreButton}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
