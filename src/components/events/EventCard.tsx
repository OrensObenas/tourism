'use client';

import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Event } from '@/lib/data/events';
import { formatDate } from '@/lib/utils';

interface EventCardProps {
  event: Event;
  onInterested?: (event: Event) => void;
}

export function EventCard({ event, onInterested }: EventCardProps) {
  const { locale, t } = useLanguage();
  
  const title = locale === 'en' && event.titleEn ? event.titleEn : event.title;
  const description = locale === 'en' && event.descriptionEn ? event.descriptionEn : event.description;
  const location = locale === 'en' && event.locationEn ? event.locationEn : event.location;

  const typeColors = {
    festival: 'bg-purple-100 text-purple-800',
    trip: 'bg-blue-100 text-blue-800',
    workshop: 'bg-green-100 text-green-800',
    special: 'bg-orange-100 text-orange-800',
  };

  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-44">
        <Image
          src={event.image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge className={`absolute top-3 left-3 ${typeColors[event.type]}`}>
          {event.type}
        </Badge>
        {event.spotsLeft && event.spotsLeft <= 5 && (
          <Badge className="absolute top-3 right-3 bg-red-100 text-red-800">
            {event.spotsLeft} places
          </Badge>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(event.date, locale)}
          </span>
        </div>
        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="flex items-center gap-1 text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4" />
          {location}
        </p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
          {description}
        </p>
        <Button 
          onClick={() => onInterested?.(event)}
          className="w-full"
        >
          {t.events.interested}
        </Button>
      </div>
    </Card>
  );
}
