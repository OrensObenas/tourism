'use client';

import Link from 'next/link';
import { MapPin, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { TbcNote } from '@/components/common/TbcNote';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { copy } from '@/lib/content';
import { siteConfig } from '@/lib/site';

export default function AboutPage() {
  const { locale } = useLanguage();
  const c = copy[locale].about;

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

      <section className="py-14 lg:py-20 section-brand-mix">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <AnimatedSection>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{c.missionLabel}</span>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mt-2 mb-4">{c.missionTitle}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{c.missionText}</p>
          </AnimatedSection>

          <AnimatedSection>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{c.whereLabel}</span>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mt-2 mb-4">{c.whereTitle}</h2>
            <p className="flex items-center gap-2 text-lg text-gray-600">
              <MapPin className="h-5 w-5 text-primary-600" aria-hidden="true" />
              {locale === 'en' ? siteConfig.addressEn : siteConfig.address}
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{c.teamLabel}</span>
            <h2 className="flex items-center gap-2 text-3xl font-heading font-bold text-gray-900 mt-2">
              <Users className="h-7 w-7 text-primary-600" aria-hidden="true" />
              {c.teamTitle}
            </h2>
            <TbcNote label={c.tbcLabel}>{c.teamTbc}</TbcNote>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">{c.ctaTitle}</h2>
          <p className="text-primary-200 mb-8">{c.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="xl"><Link href="/contact">{c.ctaButton}</Link></Button>
            <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary-900">
              <Link href="/experiences">{c.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
