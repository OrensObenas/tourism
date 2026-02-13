'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Clock, 
  MapPin, 
  Users, 
  Tag, 
  Check, 
  X, 
  Calendar,
  Backpack,
  Info,
  MessageCircle,
  ArrowRight,
  Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { ImageGallery } from '@/components/common/ImageGallery';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getCircuitBySlug } from '@/lib/data/circuits';

interface CircuitDetailPageProps {
  params: { slug: string };
}

export default function CircuitDetailPage({ params }: CircuitDetailPageProps) {
  const { slug } = params;
  const { locale, t } = useLanguage();
  const circuit = getCircuitBySlug(slug);

  if (!circuit) {
    notFound();
  }

  const title = locale === 'en' ? circuit.titleEn : circuit.title;
  const description = locale === 'en' ? circuit.descriptionEn : circuit.description;
  const tags = locale === 'en' ? circuit.tagsEn : circuit.tags;
  const included = locale === 'en' ? circuit.includedEn : circuit.included;
  const notIncluded = locale === 'en' ? circuit.notIncludedEn : circuit.notIncluded;
  const bestPeriod = locale === 'en' ? circuit.bestPeriodEn : circuit.bestPeriod;
  const whatToBring = locale === 'en' ? circuit.whatToBringEn : circuit.whatToBring;
  const meetingPoint = locale === 'en' ? circuit.meetingPointEn : circuit.meetingPoint;

  const typeLabels: Record<string, string> = {
    cultural: locale === 'en' ? 'Cultural' : 'Culturel',
    dayTrip: locale === 'en' ? 'Day Trip' : 'Excursion',
    organized: locale === 'en' ? 'Organized' : 'Organisé',
    adventure: locale === 'en' ? 'Adventure' : 'Aventure',
  };

  const typeColors: Record<string, string> = {
    cultural: 'from-primary-600 to-primary-800',
    dayTrip: 'from-sage-400 to-sage-600',
    organized: 'from-sand-400 to-sand-600',
    adventure: 'from-amber-500 to-amber-700',
  };

  return (
    <div className="min-h-screen">
      {/* Hero - gradient with icon instead of image */}
      <section className={`relative pt-28 lg:pt-36 pb-16 lg:pb-24 bg-gradient-to-br ${typeColors[circuit.type] || 'from-primary-600 to-primary-800'}`}>
        <Compass className="absolute right-12 top-12 h-32 w-32 text-white/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <Badge key={index} className="bg-white/20 text-white border-white/30">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              {title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-white border-b border-sand-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 lg:gap-10">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary-600" />
              <div>
                <p className="text-xs text-gray-500">{t.circuitDetail.duration}</p>
                <p className="font-semibold">
                  {circuit.durationDays} {circuit.durationDays === 1 ? t.featuredCircuits.day : t.featuredCircuits.days}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-primary-600" />
              <div>
                <p className="text-xs text-gray-500">{t.circuitDetail.type}</p>
                <p className="font-semibold">{typeLabels[circuit.type]}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-600" />
              <div>
                <p className="text-xs text-gray-500">{t.circuitDetail.startingPoint}</p>
                <p className="font-semibold">{circuit.startingCity}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary-600" />
              <div>
                <p className="text-xs text-gray-500">{t.circuitDetail.groupSize}</p>
                <p className="font-semibold">{circuit.groupSize.min}-{circuit.groupSize.max} {t.circuitDetail.persons}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 section-brand-mix pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <AnimatedSection>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  {t.circuitDetail.overview}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {description}
                </p>
              </AnimatedSection>

              {/* Gallery */}
              {circuit.gallery.length > 0 && (
                <AnimatedSection>
                  <ImageGallery
                    images={circuit.gallery}
                    title={locale === 'en' ? 'Photo Gallery' : 'Galerie photos'}
                  />
                </AnimatedSection>
              )}

              {/* Itinerary */}
              <AnimatedSection>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  {t.circuitDetail.itinerary}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {circuit.itinerary.map((day, index) => (
                    <AccordionItem key={index} value={`day-${day.day}`}>
                      <AccordionTrigger className="text-left">
                        <span className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold">
                            {day.day}
                          </span>
                          <span className="font-semibold">
                            {t.circuitDetail.day} {day.day}: {locale === 'en' ? day.titleEn : day.title}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pl-11">
                        {locale === 'en' ? day.descriptionEn : day.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>

              {/* Included / Not Included */}
              <AnimatedSection>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6" hover={false}>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      {t.circuitDetail.included}
                    </h3>
                    <ul className="space-y-2">
                      {included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-6" hover={false}>
                    <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <X className="h-5 w-5 text-red-600" />
                      {t.circuitDetail.notIncluded}
                    </h3>
                    <ul className="space-y-2">
                      {notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <X className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </AnimatedSection>

              {/* Practical Info */}
              <AnimatedSection>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  {t.circuitDetail.practicalInfo}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-5" hover={false}>
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary-600" />
                      <h4 className="font-semibold">{t.circuitDetail.bestPeriod}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{bestPeriod}</p>
                  </Card>
                  <Card className="p-5" hover={false}>
                    <div className="flex items-center gap-3 mb-2">
                      <Backpack className="h-5 w-5 text-primary-600" />
                      <h4 className="font-semibold">{t.circuitDetail.whatToBring}</h4>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {whatToBring.slice(0, 3).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-5" hover={false}>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-primary-600" />
                      <h4 className="font-semibold">{t.circuitDetail.meetingPoint}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{meetingPoint}</p>
                  </Card>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-6" hover={false}>
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-500 mb-1">{t.circuitDetail.priceOnRequest}</p>
                    <p className="text-3xl font-heading font-bold text-primary-700">
                      <Info className="inline h-6 w-6 mr-1" />
                      {locale === 'en' ? 'Contact us' : 'Contactez-nous'}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button asChild className="w-full" size="lg">
                      <Link href={`/contact?topic=circuitInfo&circuit=${circuit.slug}`}>
                        {t.circuitDetail.requestInfo}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <Link href={`/contact?topic=reservation&circuit=${circuit.slug}`}>
                        {t.circuitDetail.reserve}
                      </Link>
                    </Button>
                    <Button asChild variant="whatsapp" className="w-full" size="lg">
                      <a href="https://wa.me/22900000000" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
