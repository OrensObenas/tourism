'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { testimonials } from '@/lib/data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const { locale, t } = useLanguage();
  const [selectedAudience, setSelectedAudience] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');

  const filteredTestimonials = useMemo(() => {
    let result = [...testimonials];

    if (selectedAudience !== 'all') {
      result = result.filter(t => t.profileType === selectedAudience);
    }

    if (selectedRating !== 'all') {
      result = result.filter(t => t.rating >= parseInt(selectedRating));
    }

    return result;
  }, [selectedAudience, selectedRating]);

  const avgRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <section className="bg-primary-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              {t.testimonialsPage.title}
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl mb-8">
              {t.testimonialsPage.subtitle}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.round(avgRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{avgRating.toFixed(1)}/5</span>
              </div>
              <div className="text-primary-200">
                <span className="text-white font-semibold">{testimonials.length}</span>{' '}
                {locale === 'en' ? 'verified reviews' : 'avis vérifiés'}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Select value={selectedAudience} onValueChange={setSelectedAudience}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={t.testimonialsPage.filterByAudience} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.testimonialsPage.allAudiences}</SelectItem>
                <SelectItem value="cultural">{locale === 'en' ? 'Cultural' : 'Culturel'}</SelectItem>
                <SelectItem value="adventure">{locale === 'en' ? 'Adventure' : 'Aventure'}</SelectItem>
                <SelectItem value="spiritual">{locale === 'en' ? 'Spiritual' : 'Spirituel'}</SelectItem>
                <SelectItem value="discovery">{locale === 'en' ? 'Discovery' : 'Découverte'}</SelectItem>
                <SelectItem value="nature">{locale === 'en' ? 'Nature' : 'Nature'}</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t.testimonialsPage.filterByRating} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.testimonialsPage.allRatings}</SelectItem>
                <SelectItem value="5">5 {locale === 'en' ? 'stars' : 'étoiles'}</SelectItem>
                <SelectItem value="4">4+ {locale === 'en' ? 'stars' : 'étoiles'}</SelectItem>
                <SelectItem value="3">3+ {locale === 'en' ? 'stars' : 'étoiles'}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Quote className="h-12 w-12 text-primary-300 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-heading font-medium text-gray-800 mb-6">
              {locale === 'en'
                ? "The best way to understand a culture is to live it alongside its people."
                : "La meilleure façon de comprendre une culture, c'est de la vivre aux côtés de son peuple."
              }
            </blockquote>
            <p className="text-gray-600">
              — Tourism&apos;Tour {locale === 'en' ? 'Philosophy' : 'Philosophie'}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTestimonials.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.id} delay={index * 0.05}>
                  <TestimonialCard testimonial={testimonial} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                {locale === 'en' ? 'No testimonials found' : 'Aucun témoignage trouvé'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              {t.testimonialsPage.cta.title}
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              {t.testimonialsPage.cta.description}
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                {t.testimonialsPage.cta.button}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
