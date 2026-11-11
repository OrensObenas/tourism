'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoGridProps {
  photos: string[];
  /** Nombre de photos affichées au départ et à chaque « voir plus » */
  pageSize?: number;
  altPrefix: string;
  labels: { showMore: string; shown: string; close: string; prev: string; next: string };
}

/** Galerie paginée : seules `pageSize` miniatures sont rendues, chargées en lazy via next/image. */
export function PhotoGrid({ photos, pageSize = 12, altPrefix, labels }: PhotoGridProps) {
  const [visible, setVisible] = useState(pageSize);
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'ArrowRight') move(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, move]);

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {photos.slice(0, visible).map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-sand-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
              aria-label={`${altPrefix} ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${altPrefix} ${i + 1}`}
                fill
                loading="lazy"
                sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {visible < photos.length && (
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={() => setVisible((v) => Math.min(v + pageSize, photos.length))}>
            {labels.showMore} ({Math.min(visible, photos.length)}/{photos.length} {labels.shown})
          </Button>
        </div>
      )}

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button type="button" onClick={close} aria-label={labels.close} className="absolute top-4 right-4 p-2 text-white">
            <X className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); move(-1); }}
            aria-label={labels.prev}
            className="absolute left-2 sm:left-6 p-2 text-white"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <div className="relative h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[open]}
              alt={`${altPrefix} ${open + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); move(1); }}
            aria-label={labels.next}
            className="absolute right-2 sm:right-6 p-2 text-white"
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </div>
      )}
    </div>
  );
}
