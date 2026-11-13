'use client';

import Link from 'next/link';
import { CalendarDays, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/common/PageHeader';
import { TbcNote } from '@/components/common/TbcNote';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { copy } from '@/lib/content';
import { escaleUrbaine, sampleProgramme } from '@/lib/data/escaleUrbaine';
import { bannerFor } from '@/lib/data/banners';

export default function EscaleUrbainePage() {
  const { locale } = useLanguage();
  const c = copy[locale].escale;
  const byId = Object.fromEntries(escaleUrbaine.activities.map((a) => [a.id, a[locale]]));

  return (
    <div className="min-h-screen">
      <PageHeader title={c.title} image={bannerFor('escaleUrbaine', locale)} titleClassName="lg:text-6xl">
        <p className="mb-5 flex flex-wrap gap-x-6 gap-y-1 font-medium text-gold-300">
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-5 w-5" />{escaleUrbaine.place}</span>
          <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-5 w-5" />{escaleUrbaine.act} · {escaleUrbaine.dates[locale]}</span>
        </p>
        <p className="max-w-3xl text-lg leading-relaxed text-primary-100">{c.intro}</p>
      </PageHeader>

      <section className="py-12 lg:py-16 section-brand-mix">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2">{c.activitiesTitle}</h2>
          <p className="text-gray-600 mb-6">{c.activitiesSub}</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {escaleUrbaine.activities.map((a) => (
              <li key={a.id} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft text-gray-800">
                <Check className="h-5 w-5 mt-0.5 text-primary-700 shrink-0" aria-hidden="true" />
                {a[locale]}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 lg:py-16 section-purple-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2">{c.programmeTitle}</h2>
          <p className="text-sm text-gray-600 mb-6">{c.programmeNote}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {sampleProgramme.map((d) => (
              <div key={d.day.en} className="rounded-2xl bg-white p-6 shadow-soft">
                <h3 className="font-heading font-semibold text-xl text-primary-800 mb-3">{d.day[locale]}</h3>
                <ul className="space-y-2 text-gray-700">
                  {d.items.map((id) => (
                    <li key={id} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" aria-hidden="true" />
                      {byId[id]}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3">{c.partnersTitle}</h2>
            <ul className="flex flex-wrap gap-2">
              {escaleUrbaine.partners.map((p) => (
                <li key={p} className="rounded-full bg-primary-50 px-4 py-1.5 text-sm text-primary-900">{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-heading font-semibold text-gray-900">{c.nextTitle}</h2>
            <TbcNote label={c.tbcLabel}>{c.nextTbc}</TbcNote>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">{c.ctaTitle}</h2>
          <p className="text-primary-200 mb-8">{c.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="xl"><Link href="/contact">{c.ctaButton}</Link></Button>
            <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary-900">
              <Link href="/editions">{c.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
