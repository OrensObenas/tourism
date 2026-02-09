'use client';

import { useState } from 'react';
import { ChevronDown, Users, Play, Quote, Video, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getEditions } from '@/lib/data/editions';

export default function ExperiencesPage() {
  const { locale, t } = useLanguage();
  const editions = getEditions();
  const [expandedEdition, setExpandedEdition] = useState<string | null>(editions[0]?.id);

  const profileLabels: Record<string, string> = {
    student: locale === 'en' ? 'Student' : 'Étudiant',
    family: locale === 'en' ? 'Family' : 'Famille',
    couple: locale === 'en' ? 'Couple' : 'Couple',
    solo: 'Solo',
    group: locale === 'en' ? 'Group' : 'Groupe',
    international: 'International',
  };

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <section className="bg-primary-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              {t.experiencesPage.title}
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl">
              {t.experiencesPage.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {editions.map((edition, index) => {
              const title = locale === 'en' ? edition.titleEn : edition.title;
              const recap = locale === 'en' ? edition.recapEn : edition.recap;
              const highlights = locale === 'en' ? edition.highlightsEn : edition.highlights;
              const isExpanded = expandedEdition === edition.id;

              return (
                <AnimatedSection key={edition.id} delay={index * 0.1}>
                  <Card className="overflow-hidden" hover={false}>
                    {/* Header - Always visible */}
                    <button
                      onClick={() => setExpandedEdition(isExpanded ? null : edition.id)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-sand-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center font-heading font-bold text-xl">
                          {edition.year}
                        </div>
                        <div>
                          <h2 className="text-xl font-heading font-semibold text-gray-900">
                            {title}
                          </h2>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {edition.participants} {locale === 'en' ? 'travelers' : 'voyageurs'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`h-6 w-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    {/* Expandable content */}
                    {isExpanded && (
                      <div className="px-6 pb-6 space-y-6 border-t border-sand-200 pt-6">
                        <p className="text-gray-600">{recap}</p>

                        {/* Highlights */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {t.experiencesPage.highlights}
                          </h3>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-primary-500" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Recap Videos */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Video className="h-5 w-5 text-primary-600" />
                            {locale === 'en' ? 'Recap Videos' : 'Vidéos récap'}
                          </h3>
                          {edition.recapVideos.length > 0 ? (
                            <div className="grid sm:grid-cols-2 gap-4">
                              {edition.recapVideos.map((video, i) => (
                                <div key={i}>
                                  <p className="text-sm font-medium text-gray-700 mb-2">
                                    {locale === 'en' ? video.titleEn : video.title}
                                  </p>
                                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                                    <iframe
                                      src={video.url}
                                      title={locale === 'en' ? video.titleEn : video.title}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                      className="absolute inset-0 w-full h-full"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="bg-sand-100 rounded-xl p-6 text-center">
                              <Play className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-gray-500 text-sm">
                                {locale === 'en' ? 'Video coming soon' : 'Vidéo à venir'}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Testimonials for this edition */}
                        {edition.testimonials.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Quote className="h-5 w-5 text-primary-600" />
                              {locale === 'en' ? 'Traveler Reviews' : 'Avis des voyageurs'}
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {edition.testimonials.map((testimonial, i) => (
                                <Card key={i} className="p-4" hover={false}>
                                  <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                                      <User className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-gray-900 text-sm">{testimonial.name}</p>
                                      <Badge variant="secondary" className="text-xs">
                                        {profileLabels[testimonial.profileType] || testimonial.profileType}
                                      </Badge>
                                    </div>
                                  </div>
                                  <blockquote className="text-sm text-gray-600 italic">
                                    &ldquo;{locale === 'en' ? testimonial.quoteEn : testimonial.quote}&rdquo;
                                  </blockquote>
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
