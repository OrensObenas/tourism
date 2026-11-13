'use client';

import Image from 'next/image';
import type { ReactNode } from 'react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

export type PageHeaderImage = {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "center 40%" */
  position?: string;
};

interface PageHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  image?: PageHeaderImage;
  children?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function PageHeader({
  title,
  subtitle,
  image,
  children,
  align = 'left',
  className,
  titleClassName,
  subtitleClassName,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-primary-900 text-white pt-28 lg:pt-36 pb-16 lg:pb-20',
        image && 'flex min-h-[18rem] items-end sm:min-h-[22rem] lg:min-h-[26rem]',
        className,
      )}
    >
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={image.position ? { objectPosition: image.position } : undefined}
          />
          {/* Assombrissement violet pour garder un titre blanc bien lisible */}
          <div className="absolute inset-0 bg-primary-950/50" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary-950/85 via-primary-950/55 to-primary-900/40"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/15 to-primary-950/35"
            aria-hidden="true"
          />
        </>
      )}
      <div
        className={cn(
          'relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8',
          align === 'center' ? 'max-w-4xl text-center' : 'max-w-7xl',
        )}
      >
        <AnimatedSection>
          <h1
            className={cn(
              'mb-4 font-heading text-4xl font-bold lg:text-5xl',
              titleClassName,
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                'max-w-2xl text-xl',
                image ? 'text-primary-100' : 'text-primary-200',
                align === 'center' && 'mx-auto',
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          )}
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
}
