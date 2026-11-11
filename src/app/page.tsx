'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Shield, 
  Heart, 
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { copy } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { Facebook } from 'lucide-react';

// Aperçu des éditions passées (photos réelles du dépôt)
const previewPhotos = [
  '/images/editions/2025/image_10.jpeg',
  '/images/editions/2024/image_20.jpeg',
  '/images/editions/2023/image_8.jpeg',
  '/images/editions/2025/image_50.jpeg',
  '/images/editions/2024/image_30.jpeg',
  '/images/editions/2023/image_4.jpeg',
];

export default function HomePage() {
  const { t, locale } = useLanguage();
  const h = copy[locale].home;

  return (
    <>
      {/* ========== 1. HERO IMMERSIF avec badges flottants ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Amazone.jpg"
            alt="Benin landscape"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/85 via-primary-900/65 to-primary-950/30" />
          {/* Subtle animated grain overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-400/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <AnimatedSection>
              <div className="flex flex-wrap gap-2 mb-6">
                {[t.hero.badges.fieldExperience, t.hero.badges.culturalTourism, t.hero.badges.adventure].map((badge, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium"
                  >
                    <Sparkles className="h-3 w-3" />
                    {badge}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1]">
                {t.hero.title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg lg:text-xl text-white/85 mb-10 leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="accent" size="xl" className="shadow-lg shadow-primary-950/30">
                  <Link href="/experiences/escale-urbaine">
                    {t.hero.discoverCircuits}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary-900 backdrop-blur-sm">
                  <Link href="/plan-your-trip">
                    {t.hero.planTrip}
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========== 2. QUI EST TOURISM'TOUR ========== */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{h.aboutLabel}</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mt-2 mb-5">{h.aboutTitle}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{h.aboutText}</p>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">{h.aboutLink}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="py-14 lg:py-20 section-brand-mix pattern-dots">
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
                color: 'bg-primary-100 text-primary-700',
              },
              {
                icon: Star,
                title: t.whyUs.features.culturalExpertise.title,
                description: t.whyUs.features.culturalExpertise.description,
                color: 'bg-gold-100 text-gold-700',
              },
              {
                icon: Shield,
                title: t.whyUs.features.humanSupport.title,
                description: t.whyUs.features.humanSupport.description,
                color: 'bg-sage-100 text-sage-500',
              },
              {
                icon: Heart,
                title: t.whyUs.features.authentic.title,
                description: t.whyUs.features.authentic.description,
                color: 'bg-rose-100 text-rose-600',
              },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl hover:bg-sand-50 transition-colors duration-300 group">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/why-us">
                {t.whyUs.learnMore}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader title={t.howItWorks.title} subtitle={t.howItWorks.subtitle} />
          </AnimatedSection>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.howItWorks.steps.map((step, i) => (
              <li key={step.title} className="relative rounded-2xl bg-primary-50 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-heading font-bold text-primary-950 mb-4">
                  {i + 1}
                </span>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ========== ESCALE URBAINE (réalisation phare) ========== */}
      <section className="py-14 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-gold-300 font-semibold text-sm uppercase tracking-wider">{h.flagshipLabel}</span>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mt-2 mb-5">{h.flagshipTitle}</h2>
            <p className="text-lg text-primary-100 leading-relaxed mb-8">{h.flagshipText}</p>
            <Button asChild variant="accent" size="xl">
              <Link href="/experiences/escale-urbaine">{h.flagshipButton}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== APERÇU DES ÉDITIONS ========== */}
      <section className="py-14 lg:py-20 section-purple-tint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader title={h.editionsTitle} subtitle={h.editionsSubtitle} />
          </AnimatedSection>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {previewPhotos.map((src, i) => (
              <li key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand-100">
                <Image
                  src={src}
                  alt={`${locale === 'en' ? 'Edition photo' : "Photo d'édition"} ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(min-width:768px) 33vw, 50vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/editions">{h.editionsButton}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== PLAN YOUR TRIP TEASER ========== */}
      <section className="py-14 lg:py-20 section-gold-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader title={t.planTeaser.title} subtitle={t.planTeaser.subtitle} />
          </AnimatedSection>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {t.planTeaser.items.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft text-gray-800 font-medium">
                <CheckCircle2 className="h-5 w-5 text-primary-700 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/plan-your-trip">
                {t.planTeaser.button}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ========== 6. CTA FINAL IMMERSIF ========== */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Header.jpg"
            alt="Door of No Return, Ouidah"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/80 to-primary-950/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg text-primary-200 mb-10 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="xl" className="shadow-lg shadow-black/20">
                <Link href="/contact">
                  {t.cta.contact}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary-900 backdrop-blur-sm">
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-5 w-5" />
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
