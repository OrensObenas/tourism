import type { MetadataRoute } from 'next';
import { circuits } from '@/lib/data/circuits';
import { blogPosts } from '@/lib/data/blogPosts';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', '/about', '/experiences', '/experiences/escale-urbaine', '/editions', '/plan-your-trip', '/why-us',
    '/contact', '/privacy', '/terms',
    // Contenus de démonstration non vérifiés : hors sitemap tant que showLegacyContent = false
    ...(siteConfig.showLegacyContent ? ['/circuits', '/events', '/blog', '/faq', '/testimonials'] : []),
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...(siteConfig.showLegacyContent ? circuits : []).map((circuit) => ({
      url: `${siteConfig.url}/circuits/${circuit.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...(siteConfig.showLegacyContent ? blogPosts : []).map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
