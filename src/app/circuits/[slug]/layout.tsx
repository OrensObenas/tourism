import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { circuits, getCircuitBySlug } from '@/lib/data/circuits';

export const dynamicParams = false;

export function generateStaticParams() {
  return circuits.map((circuit) => ({ slug: circuit.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const circuit = getCircuitBySlug(params.slug);
  if (!circuit) return {};
  return {
    title: { absolute: `${circuit.title} | Tourism'Tour` },
    description: circuit.shortSummary,
    alternates: { canonical: `/circuits/${circuit.slug}` },
    openGraph: {
      title: circuit.title,
      description: circuit.shortSummary,
      images: [{ url: circuit.heroImage }],
    },
  };
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  if (!getCircuitBySlug(params.slug)) notFound();
  return children;
}
