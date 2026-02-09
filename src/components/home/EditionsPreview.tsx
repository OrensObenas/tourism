'use client';

import Link from 'next/link';
import { ArrowRight, Users, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SectionHeader } from '@/components/common/SectionHeader';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getEditions } from '@/lib/data/editions';

export function EditionsPreview() {
  const { locale, t } = useLanguage();
  
  const editions = getEditions();

  return (
    <section className="py-14 lg:py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            title={t.editionsPreview.title}
            subtitle={t.editionsPreview.subtitle}
          />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {editions.map((edition, index) => {
              const title = locale === 'en' ? edition.titleEn : edition.title;
              const recap = locale === 'en' ? edition.recapEn : edition.recap;
              const isLeft = index % 2 === 0;

              return (
                <AnimatedSection key={edition.id} delay={index * 0.15}>
                  <div className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot on timeline */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10" />

                    {/* Card */}
                    <div className={`ml-14 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow duration-300 border border-sand-200">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                            <Calendar className="h-3.5 w-3.5" />
                            {edition.year}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-500 text-sm font-medium">
                            <Users className="h-3.5 w-3.5" />
                            {edition.participants} {t.editionsPreview.participants}
                          </span>
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{title}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{recap}</p>
                        
                        {/* Mini highlights */}
                        <div className="flex flex-wrap gap-2">
                          {(locale === 'en' ? edition.highlightsEn : edition.highlights).slice(0, 2).map((h, i) => (
                            <span key={i} className="inline-flex items-center gap-1 text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                              <TrendingUp className="h-3 w-3" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedSection>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/experiences">
                {t.editionsPreview.viewAll}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
