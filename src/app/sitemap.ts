import type { MetadataRoute } from 'next';
import { circuits } from '@/lib/data/circuits';
import { blogPosts } from '@/lib/data/blogPosts';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', '/circuits', '/experiences', '/events', '/about', '/contact',
    '/blog', '/faq', '/testimonials', '/privacy', '/terms',
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...circuits.map((circuit) => ({
      url: `${siteConfig.url}/circuits/${circuit.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
