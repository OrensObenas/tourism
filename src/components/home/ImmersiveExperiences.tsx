'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SectionHeader } from '@/components/common/SectionHeader';
import { useLanguage } from '@/components/providers/LanguageProvider';

interface ExperienceCard {
  title: string;
  description: string;
  image: string;
  href: string;
  span?: string;
}

export function ImmersiveExperiences() {
  const { t } = useLanguage();

  const experiences: ExperienceCard[] = [
    {
      title: t.immersive.cultural.title,
      description: t.immersive.cultural.description,
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800',
      href: '/circuits?type=cultural',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      title: t.immersive.nature.title,
      description: t.immersive.nature.description,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      href: '/circuits?type=adventure',
    },
    {
      title: t.immersive.gastronomy.title,
      description: t.immersive.gastronomy.description,
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800',
      href: '/blog',
    },
    {
      title: t.immersive.community.title,
      description: t.immersive.community.description,
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      href: '/experiences',
      span: 'md:col-span-2',
    },
  ];

  return (
    <section className="py-14 lg:py-20 section-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeader
            title={t.immersive.title}
            subtitle={t.immersive.subtitle}
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className={exp.span || ''}>
              <Link href={exp.href} className="block h-full">
                <div className="immersive-card relative h-full rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 z-[2] flex flex-col justify-end p-6">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-1 group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-1 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {t.immersive.explore}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
