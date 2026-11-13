'use client';

import Link from 'next/link';
import { ArrowRight, FileText, HeartPulse, CalendarDays, Plane, Wallet, ShieldCheck, ListChecks } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PageHeader } from '@/components/common/PageHeader';
import { TbcNote } from '@/components/common/TbcNote';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { bannerFor } from '@/lib/data/banners';

const sectionMeta = [
  { key: 'visa', icon: FileText },
  { key: 'health', icon: HeartPulse },
  { key: 'season', icon: CalendarDays },
  { key: 'arrival', icon: Plane },
  { key: 'money', icon: Wallet },
  { key: 'safety', icon: ShieldCheck },
  { key: 'included', icon: ListChecks },
] as const;

export default function PlanYourTripPage() {
  const { locale, t } = useLanguage();
  const p = t.planPage;

  return (
    <>
      <PageHeader
        title={p.title}
        subtitle={p.subtitle}
        image={bannerFor('planYourTrip', locale)}
        align="center"
        subtitleClassName="text-lg text-primary-100"
      />

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label={p.title} className="mb-10 flex flex-wrap gap-2">
            {sectionMeta.map(({ key }) => (
              <a
                key={key}
                href={`#${key}`}
                className="rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-800 hover:bg-primary-200"
              >
                {p.sections[key].title}
              </a>
            ))}
          </nav>

          <div className="space-y-8">
            {sectionMeta.map(({ key, icon: Icon }, i) => {
              const s = p.sections[key];
              return (
                <AnimatedSection key={key} delay={i * 0.03}>
                  <article id={key} className="scroll-mt-28 rounded-2xl bg-white p-6 lg:p-8 shadow-soft">
                    <h2 className="flex items-center gap-3 text-2xl font-heading font-semibold text-gray-900 mb-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      {s.title}
                    </h2>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      {s.paragraphs.map((para) => (
                        <p key={para}>{para}</p>
                      ))}
                    </div>
                    <TbcNote label={p.tbcLabel}>{s.tbc}</TbcNote>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-3">{p.ctaTitle}</h2>
          <p className="text-primary-100 mb-8">{p.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">{p.ctaPrimary}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
              <Link href="/faq">{p.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
