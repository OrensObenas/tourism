'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Heart, Users, Compass, Shield, Award, Globe } from 'lucide-react';

export default function AboutPage() {
  const { locale, t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: locale === 'en' ? 'Authenticity' : 'Authenticité',
      description: locale === 'en'
        ? 'We offer genuine experiences that connect you with the real Benin, far from tourist clichés.'
        : 'Nous proposons des expériences authentiques qui vous connectent au vrai Bénin, loin des clichés touristiques.',
    },
    {
      icon: Users,
      title: locale === 'en' ? 'Community' : 'Communauté',
      description: locale === 'en'
        ? 'We work directly with local communities, ensuring your visit benefits those who welcome you.'
        : 'Nous travaillons directement avec les communautés locales, garantissant que votre visite profite à ceux qui vous accueillent.',
    },
    {
      icon: Compass,
      title: locale === 'en' ? 'Discovery' : 'Découverte',
      description: locale === 'en'
        ? 'Every trip is an invitation to explore, learn, and grow through meaningful cultural exchanges.'
        : 'Chaque voyage est une invitation à explorer, apprendre et grandir à travers des échanges culturels significatifs.',
    },
    {
      icon: Shield,
      title: locale === 'en' ? 'Sustainability' : 'Durabilité',
      description: locale === 'en'
        ? 'We are committed to responsible tourism that preserves cultural heritage and natural environments.'
        : 'Nous nous engageons pour un tourisme responsable qui préserve le patrimoine culturel et les environnements naturels.',
    },
    {
      icon: Award,
      title: locale === 'en' ? 'Excellence' : 'Excellence',
      description: locale === 'en'
        ? 'We strive for the highest quality in every aspect of your journey, from planning to execution.'
        : 'Nous visons la plus haute qualité dans chaque aspect de votre voyage, de la planification à l\'exécution.',
    },
  ];

  const team = [
    {
      name: 'Koffi Mensah',
      role: locale === 'en' ? 'Founder & CEO' : 'Fondateur & PDG',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: locale === 'en'
        ? 'Born and raised in Cotonou, Koffi has over 15 years of experience in cultural tourism.'
        : 'Né et élevé à Cotonou, Koffi a plus de 15 ans d\'expérience dans le tourisme culturel.',
    },
    {
      name: 'Aminata Diallo',
      role: locale === 'en' ? 'Operations Director' : 'Directrice des Opérations',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face',
      bio: locale === 'en'
        ? 'With a background in hospitality, Aminata ensures every trip runs smoothly.'
        : 'Avec une formation en hôtellerie, Aminata veille au bon déroulement de chaque voyage.',
    },
    {
      name: 'Jean-Pierre Ahouandjinou',
      role: locale === 'en' ? 'Lead Guide' : 'Guide Principal',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      bio: locale === 'en'
        ? 'A certified historian and passionate storyteller, JP brings history to life on every tour.'
        : 'Historien certifié et conteur passionné, JP donne vie à l\'histoire lors de chaque visite.',
    },
    {
      name: 'Mariame Bello',
      role: locale === 'en' ? 'Customer Relations' : 'Relations Clients',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      bio: locale === 'en'
        ? 'Mariame is your first point of contact, always ready to help plan your perfect trip.'
        : 'Mariame est votre premier point de contact, toujours prête à vous aider à planifier votre voyage parfait.',
    },
  ];

  const stats = [
    { value: '8+', label: locale === 'en' ? 'Years of Experience' : 'Années d\'Expérience' },
    { value: '2,500+', label: locale === 'en' ? 'Happy Travelers' : 'Voyageurs Satisfaits' },
    { value: '50+', label: locale === 'en' ? 'Unique Circuits' : 'Circuits Uniques' },
    { value: '15', label: locale === 'en' ? 'Partner Communities' : 'Communautés Partenaires' },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&h=800&fit=crop"
          alt={locale === 'en' ? 'Tourism Tour Team' : 'Équipe Tourism Tour'}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatedSection>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-4">
                {t.aboutPage.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
                {t.aboutPage.hero.subtitle}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20 section-brand-mix pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                {t.aboutPage.mission.label}
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mt-2 mb-6">
                {t.aboutPage.mission.title}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>{t.aboutPage.mission.paragraph1}</p>
                <p>{t.aboutPage.mission.paragraph2}</p>
                <p>{t.aboutPage.mission.paragraph3}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=800&h=600&fit=crop"
                  alt={locale === 'en' ? 'Our Mission' : 'Notre Mission'}
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-200">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 section-purple-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                {t.aboutPage.values.label}
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mt-2">
                {t.aboutPage.values.title}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-6 h-full" hover>
                  <value.icon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Field Experience */}
      <section className="py-16 lg:py-20 section-sage-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580746738099-78d6833b3a85?w=400&h=300&fit=crop"
                    alt="Experience 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop"
                    alt="Experience 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden -mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1580746738081-78d6833b3a85?w=400&h=300&fit=crop"
                    alt="Experience 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop"
                    alt="Experience 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-primary-600" />
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                  {t.aboutPage.experience.label}
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                {t.aboutPage.experience.title}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>{t.aboutPage.experience.paragraph1}</p>
                <p>{t.aboutPage.experience.paragraph2}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20 section-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                {t.aboutPage.team.label}
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mt-2">
                {t.aboutPage.team.title}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="overflow-hidden" hover>
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              {t.aboutPage.cta.title}
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              {t.aboutPage.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/circuits">
                <Button size="lg" variant="secondary">
                  {t.circuits.discoverCircuits}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {t.nav.contact}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
