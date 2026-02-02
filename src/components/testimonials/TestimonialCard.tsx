'use client';

import Image from 'next/image';
import { Star, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Testimonial } from '@/lib/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { locale, t } = useLanguage();
  
  const quote = locale === 'en' && testimonial.quoteEn ? testimonial.quoteEn : testimonial.quote;
  const tripRef = locale === 'en' && testimonial.tripReferenceEn 
    ? testimonial.tripReferenceEn 
    : testimonial.tripReference;

  const profileLabels: Record<Testimonial['profileType'], string> = {
    student: t.testimonials.student,
    family: t.testimonials.family,
    couple: t.testimonials.couple,
    solo: t.testimonials.solo,
    group: t.testimonials.group,
    international: t.testimonials.international,
  };

  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <User className="h-6 w-6 text-primary-600" />
          </div>
        )}
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="secondary" className="text-xs">
              {profileLabels[testimonial.profileType]}
            </Badge>
            {testimonial.country && (
              <span className="text-xs text-gray-500">{testimonial.country}</span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-600 text-sm italic flex-1 mb-3">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      {tripRef && (
        <p className="text-xs text-primary-600 font-medium">
          {tripRef}
        </p>
      )}
    </Card>
  );
}
