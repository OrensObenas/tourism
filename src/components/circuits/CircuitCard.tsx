'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Circuit } from '@/lib/data/circuits';

interface CircuitCardProps {
  circuit: Circuit;
}

export function CircuitCard({ circuit }: CircuitCardProps) {
  const { locale, t } = useLanguage();
  
  const title = locale === 'en' && circuit.titleEn ? circuit.titleEn : circuit.title;
  const summary = locale === 'en' && circuit.shortSummaryEn ? circuit.shortSummaryEn : circuit.shortSummary;
  const tags = locale === 'en' && circuit.tagsEn ? circuit.tagsEn : circuit.tags;
  const durationText = circuit.durationDays === 1 
    ? `1 ${t.featuredCircuits.day}` 
    : `${circuit.durationDays} ${t.featuredCircuits.days}`;

  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-48 sm:h-56">
        <Image
          src={circuit.heroImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="default" className="bg-white/90 text-primary-800">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {durationText}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {circuit.startingCity}
          </span>
        </div>
        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
          {summary}
        </p>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/circuits/${circuit.slug}`}>
            {t.featuredCircuits.viewCircuit}
          </Link>
        </Button>
      </div>
    </Card>
  );
}
