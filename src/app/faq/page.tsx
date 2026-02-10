'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { faqItems } from '@/lib/data/faq';
import { Search, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  const { locale, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQ = faqItems.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const question = locale === 'en' ? item.questionEn : item.question;
    const answer = locale === 'en' ? item.answerEn : item.answer;
    return question.toLowerCase().includes(query) || answer.toLowerCase().includes(query);
  });

  const categories: string[] = [];
  faqItems.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, { fr: string; en: string }> = {
      general: { fr: 'Général', en: 'General' },
      booking: { fr: 'Réservation', en: 'Booking' },
      payment: { fr: 'Paiement', en: 'Payment' },
      travel: { fr: 'Voyage', en: 'Travel' },
      safety: { fr: 'Sécurité', en: 'Safety' },
    };
    return labels[cat]?.[locale] || cat;
  };

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <section className="bg-primary-900 text-white pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 text-primary-300" />
              <h1 className="text-4xl lg:text-5xl font-heading font-bold">
                {t.faqPage.title}
              </h1>
            </div>
            <p className="text-xl text-primary-200 max-w-2xl">
              {t.faqPage.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white border-b border-sand-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder={t.faqPage.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchQuery ? (
            <AnimatedSection>
              <p className="text-gray-600 mb-6">
                {filteredFAQ.length} {locale === 'en' ? 'results found' : 'résultats trouvés'}
              </p>
              {filteredFAQ.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQ.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="bg-white rounded-lg border border-sand-200">
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                        <span className="font-medium text-gray-900">
                          {locale === 'en' ? item.questionEn : item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-600">
                        {locale === 'en' ? item.answerEn : item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    {locale === 'en' ? 'No results found' : 'Aucun résultat trouvé'}
                  </p>
                </div>
              )}
            </AnimatedSection>
          ) : (
            <>
              {categories.map((category) => (
                <AnimatedSection key={category} className="mb-10">
                  <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary-600 rounded-full" />
                    {getCategoryLabel(category)}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqItems
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <AccordionItem 
                          key={item.id} 
                          value={item.id} 
                          className="bg-white rounded-lg border border-sand-200"
                        >
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                            <span className="font-medium text-gray-900">
                              {locale === 'en' ? item.questionEn : item.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {locale === 'en' ? item.answerEn : item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </AnimatedSection>
              ))}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <MessageCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
              {t.faqPage.cta.title}
            </h2>
            <p className="text-gray-600 mb-8">
              {t.faqPage.cta.description}
            </p>
            <Link href="/contact">
              <Button size="lg">
                {t.faqPage.cta.button}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
