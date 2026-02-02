'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { BlogCard } from '@/components/blog/BlogCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { blogPosts, getBlogPostBySlug } from '@/lib/data/blogPosts';
import { use } from 'react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params);
  const { locale, t } = useLanguage();
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const title = locale === 'en' ? post.titleEn : post.title;
  const excerpt = locale === 'en' ? post.excerptEn : post.excerpt;
  const content = locale === 'en' ? post.contentEn : post.content;

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, { fr: string; en: string }> = {
      culture: { fr: 'Culture', en: 'Culture' },
      history: { fr: 'Histoire', en: 'History' },
      nature: { fr: 'Nature', en: 'Nature' },
      gastronomy: { fr: 'Gastronomie', en: 'Gastronomy' },
      travel: { fr: 'Voyage', en: 'Travel' },
      tips: { fr: 'Conseils', en: 'Tips' },
    };
    return labels[cat]?.[locale] || cat;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="relative h-[50vh] lg:h-[60vh]">
        <Image
          src={post.coverImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.common.back}
            </Button>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {getCategoryLabel(post.category)}
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl">
              {excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Meta & Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-sand-200 pb-6 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min {locale === 'en' ? 'read' : 'de lecture'}</span>
            </div>
            
            {/* Share Buttons */}
            <div className="flex items-center gap-3 ml-auto">
              <span className="text-gray-400"><Share2 className="h-4 w-4" /></span>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
            {content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-heading font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-heading font-semibold text-gray-900 mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(l => l.startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-600">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-gray-600 leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-sand-200">
            {(locale === 'en' ? post.tagsEn : post.tags).map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>
        </AnimatedSection>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-sand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-8">
                {t.blogPage.relatedArticles}
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection key={relatedPost.id} delay={index * 0.1}>
                  <BlogCard post={relatedPost} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              {locale === 'en' ? 'Ready to explore Benin?' : 'Prêt à explorer le Bénin ?'}
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              {locale === 'en'
                ? 'Discover our unique circuits and live an unforgettable adventure.'
                : 'Découvrez nos circuits uniques et vivez une aventure inoubliable.'
              }
            </p>
            <Link href="/circuits">
              <Button size="lg" variant="secondary">
                {t.circuits.discoverCircuits}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
