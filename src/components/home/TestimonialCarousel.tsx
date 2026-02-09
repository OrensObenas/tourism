'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getTestimonials, Testimonial } from '@/lib/data/testimonials';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SectionHeader } from '@/components/common/SectionHeader';

function TestimonialBubble({ testimonial }: { testimonial: Testimonial }) {
  const { locale } = useLanguage();
  const quote = locale === 'en' ? testimonial.quoteEn : testimonial.quote;
  const tripRef = locale === 'en' ? testimonial.tripReferenceEn : testimonial.tripReference;

  return (
    <div className="flex-shrink-0 w-[340px] sm:w-[400px] p-1">
      <div className="relative bg-white rounded-2xl p-6 shadow-soft h-full border border-sand-200 hover:shadow-soft-lg transition-shadow duration-300">
        <Quote className="absolute top-4 right-4 h-8 w-8 text-primary-100" />
        
        {/* Stars */}
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-4">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto">
          {testimonial.photo ? (
            <Image
              src={testimonial.photo}
              alt={testimonial.name}
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-primary-100"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm">
              {testimonial.name.charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <div className="text-sm font-semibold text-gray-900 truncate">{testimonial.name}</div>
            {tripRef && (
              <div className="text-xs text-primary-600 truncate">{tripRef}</div>
            )}
            {testimonial.country && (
              <div className="text-xs text-gray-400">{testimonial.country}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialCarousel() {
  const { t } = useLanguage();
  const testimonials = getTestimonials();
  
  // Duplicate for infinite scroll illusion
  const duplicated = [...testimonials, ...testimonials];

  return (
    <section className="py-14 lg:py-20 bg-sand-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <AnimatedSection>
          <SectionHeader
            title={t.testimonialsHome.title}
            subtitle={t.testimonialsHome.subtitle}
          />
        </AnimatedSection>
      </div>

      {/* Scrolling carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sand-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sand-100 to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-scroll-x gap-4 px-4">
          {duplicated.map((testimonial, index) => (
            <TestimonialBubble key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <AnimatedSection>
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link href="/testimonials">
              {t.testimonialsHome.viewAll}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
