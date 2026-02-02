'use client';

import { useState, useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { BlogCard } from '@/components/blog/BlogCard';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { blogPosts } from '@/lib/data/blogPosts';
import { Search } from 'lucide-react';

export default function BlogPage() {
  const { locale, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map(p => p.category));
    return Array.from(cats);
  }, []);

  const filteredPosts = useMemo(() => {
    let result = [...blogPosts];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => {
        const title = locale === 'en' ? p.titleEn : p.title;
        const excerpt = locale === 'en' ? p.excerptEn : p.excerpt;
        return title.toLowerCase().includes(query) || excerpt.toLowerCase().includes(query);
      });
    }

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    return result.sort((a, b) => b.date.localeCompare(a.date));
  }, [searchQuery, selectedCategory, locale]);

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
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <section className="bg-primary-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              {t.blogPage.title}
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl">
              {t.blogPage.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t.blogPage.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t.blogPage.filterByCategory} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.blogPage.allCategories}</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {getCategoryLabel(cat)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.05}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                {locale === 'en' ? 'No articles found' : 'Aucun article trouvé'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
              {t.blogPage.newsletter.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.blogPage.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t.blogPage.newsletter.placeholder}
                className="flex-1"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                {t.blogPage.newsletter.button}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
