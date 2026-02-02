'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Compass, 
  Calendar, 
  Shield, 
  Heart, 
  Star,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Mountain,
  Palmtree
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { CircuitCard } from '@/components/circuits/CircuitCard';
import { EventCard } from '@/components/events/EventCard';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { getFeaturedCircuits } from '@/lib/data/circuits';
import { getUpcomingEvents } from '@/lib/data/events';
import { getTestimonials } from '@/lib/data/testimonials';

export default function HomePage() {
  const { t } = useLanguage();
  const featuredCircuits = getFeaturedCircuits().slice(0, 6);
  const upcomingEvents = getUpcomingEvents(3);
  const testimonials = getTestimonials(3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920"
            alt="Bénin landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-900/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                {t.hero.title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xl text-white/90 mb-8">
                {t.hero.subtitle}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button asChild size="xl">
                  <Link href="/circuits">
                    {t.hero.discoverCircuits}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-900">
                  <Link href="/contact">
                    {t.hero.contactUs}
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Compass className="h-4 w-4 mr-2" />
                  {t.hero.badges.fieldExperience}
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  {t.hero.badges.culturalTourism}
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Mountain className="h-4 w-4 mr-2" />
                  {t.hero.badges.adventure}
                </Badge>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trip Types Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader 
              title={t.tripTypes.title}
              subtitle={t.tripTypes.subtitle}
            />
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Compass,
                title: t.tripTypes.cultural.title,
                description: t.tripTypes.cultural.description,
                href: '/circuits',
                color: 'bg-primary-100 text-primary-700',
              },
              {
                icon: Palmtree,
                title: t.tripTypes.dayTrip.title,
                description: t.tripTypes.dayTrip.description,
                href: '/circuits?type=dayTrip',
                color: 'bg-sage-100 text-sage-500',
              },
              {
                icon: Calendar,
                title: t.tripTypes.organized.title,
                description: t.tripTypes.organized.description,
                href: '/circuits?type=organized',
                color: 'bg-sand-200 text-sand-500',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-6 lg:p-8 text-center h-full">
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-5`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-5">
                    {item.description}
                  </p>
                  <Button asChild variant="outline">
                    <Link href={item.href}>{t.tripTypes.view}</Link>
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader 
              title={t.whyUs.title}
              subtitle={t.whyUs.subtitle}
            />
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: t.whyUs.features.fieldKnowledge.title,
                description: t.whyUs.features.fieldKnowledge.description,
              },
              {
                icon: Star,
                title: t.whyUs.features.culturalExpertise.title,
                description: t.whyUs.features.culturalExpertise.description,
              },
              {
                icon: Shield,
                title: t.whyUs.features.humanSupport.title,
                description: t.whyUs.features.humanSupport.description,
              },
              {
                icon: Heart,
                title: t.whyUs.features.authentic.title,
                description: t.whyUs.features.authentic.description,
              },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary-700 text-white flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Circuits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader 
              title={t.featuredCircuits.title}
              subtitle={t.featuredCircuits.subtitle}
            />
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {featuredCircuits.map((circuit, index) => (
              <AnimatedSection key={circuit.id} delay={index * 0.1}>
                <CircuitCard circuit={circuit} />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection>
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/circuits">
                  {t.featuredCircuits.viewAll}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader 
              title={t.events.title}
              subtitle={t.events.subtitle}
            />
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <EventCard event={event} />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/events">
                  {t.events.viewAll}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader 
              title={t.testimonials.title}
              subtitle={t.testimonials.subtitle}
            />
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/testimonials">
                  {t.testimonials.viewAll}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-white text-primary-900 hover:bg-sand-100">
                <Link href="/contact">
                  {t.cta.contact}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href="https://wa.me/22900000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.cta.whatsapp}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
