import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DestinationDetail } from '@/components/destinations/DestinationDetail';
import { destinations, getDestinationBySlug } from '@/lib/data/destinations';
import { getDestinationDetail } from '@/lib/data/destinationDetails';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const destination = getDestinationBySlug(params.slug);
  const detail = getDestinationDetail(params.slug);
  if (!destination || !detail) return {};
  // Le suffixe « | Tourism'Tour » est ajouté par le gabarit de titre du layout racine.
  const title = `${destination.name} – Discover Benin`;
  const description = detail.intro.en;
  return {
    title,
    description,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: `${title} | Tourism'Tour`,
      description,
      url: `/destinations/${destination.slug}`,
      images: [{ url: detail.hero.src, alt: detail.hero.alt.en }],
    },
  };
}

export default function DestinationPage({ params }: PageProps) {
  const destination = getDestinationBySlug(params.slug);
  const detail = getDestinationDetail(params.slug);
  if (!destination || !detail) notFound();
  return <DestinationDetail destination={destination} detail={detail} />;
}
