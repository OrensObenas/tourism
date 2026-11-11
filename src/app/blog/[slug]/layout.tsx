import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/site';
import { blogPosts, getBlogPostBySlug } from '@/lib/data/blogPosts';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.titleEn} | Tourism'Tour` },
    description: post.excerptEn,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.titleEn,
      description: post.excerptEn,
      images: [{ url: post.coverImage }],
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
  // Contenu de démonstration non vérifié : masqué (voir siteConfig.showLegacyContent)
  if (!siteConfig.showLegacyContent) notFound();
  if (!getBlogPostBySlug(params.slug)) notFound();
  return children;
}
