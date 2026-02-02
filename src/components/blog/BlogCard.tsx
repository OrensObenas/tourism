'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { BlogPost } from '@/lib/data/blogPosts';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { locale, t } = useLanguage();
  
  const title = locale === 'en' && post.titleEn ? post.titleEn : post.title;
  const excerpt = locale === 'en' && post.excerptEn ? post.excerptEn : post.excerpt;

  const categoryLabels: Record<BlogPost['category'], string> = {
    culture: t.blogPage.categories.culture,
    tips: t.blogPage.categories.tips,
    destinations: t.blogPage.categories.destinations,
    practical: t.blogPage.categories.practical,
  };

  return (
    <Card className="flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="relative h-48 block">
        <Image
          src={post.coverImage}
          alt={title}
          fill
          className="object-cover rounded-t-3xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge className="absolute top-3 left-3 bg-white/90 text-primary-800">
          {categoryLabels[post.category]}
        </Badge>
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.date, locale)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} {t.blogPage.minRead}
          </span>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary-700 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-3 flex-1">
          {excerpt}
        </p>
        <Link 
          href={`/blog/${post.slug}`}
          className="text-sm font-medium text-primary-700 hover:text-primary-800 mt-4 inline-block"
        >
          {t.blogPage.readMore} →
        </Link>
      </div>
    </Card>
  );
}
