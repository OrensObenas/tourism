'use client';

import Link from 'next/link';
import { ArrowRight, Compass, LifeBuoy, MapPin, Handshake, Route, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SectionHeader } from '@/components/common/SectionHeader';
import { TbcNote } from '@/components/common/TbcNote';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

const icons = [MapPin, LifeBuoy, Users, Compass, Route, Handshake];

export default function WhyUsPage() {
  const { t } = useLanguage();
  const w = t.whyPage;

  return (
    <>
      <section className="pt-36 pb-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">{w.title}</h1>
          <p className="text-lg text-primary-100">{w.subtitle}</p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={w.benefitsTitle} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {w.benefits.map((b, i) => {
              const Icon = icons[i % icons.length];
              return (
                <AnimatedSection key={b.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl bg-white p-6 shadow-soft">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-lg font-heading font-semibold text-gray-900 mb-2">{b.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <TbcNote label={w.tbcLabel}>{w.tbc}</TbcNote>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 section-purple-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={w.stepsTitle} />
          <ol className="grid sm:grid-cols-2 gap-6">
            {t.howItWorks.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400 font-heading font-bold text-primary-950">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">{w.ctaTitle}</h2>
          <p className="text-primary-100 mb-8">{w.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">{w.ctaPrimary}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
              <Link href="/plan-your-trip">{w.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
