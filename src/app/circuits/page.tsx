'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SectionHeader } from '@/components/common/SectionHeader';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { CircuitCard } from '@/components/circuits/CircuitCard';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { circuits, Circuit } from '@/lib/data/circuits';

export default function CircuitsPage() {
  const { locale, t } = useLanguage();
  const [search, setSearch] = useState('');
  const [duration, setDuration] = useState('all');
  const [type, setType] = useState('all');
  const [region, setRegion] = useState('all');
  const [sort, setSort] = useState('popular');

  const filteredCircuits = useMemo(() => {
    let result = [...circuits];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(c => {
        const title = locale === 'en' ? c.titleEn : c.title;
        const summary = locale === 'en' ? c.shortSummaryEn : c.shortSummary;
        return title.toLowerCase().includes(searchLower) || 
               summary.toLowerCase().includes(searchLower);
      });
    }

    // Duration filter
    if (duration !== 'all') {
      result = result.filter(c => {
        switch (duration) {
          case '1': return c.durationDays === 1;
          case '2-3': return c.durationDays >= 2 && c.durationDays <= 3;
          case '4-7': return c.durationDays >= 4 && c.durationDays <= 7;
          case '7+': return c.durationDays > 7;
          default: return true;
        }
      });
    }

    // Type filter
    if (type !== 'all') {
      result = result.filter(c => c.type === type);
    }

    // Region filter
    if (region !== 'all') {
      result = result.filter(c => c.region === region);
    }

    // Sort
    if (sort === 'popular') {
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    } else {
      result.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }

    return result;
  }, [search, duration, type, region, sort, locale]);

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <section className="bg-primary-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              {t.circuitsPage.title}
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl">
              {t.circuitsPage.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-sand-200 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder={t.circuitsPage.search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="w-[140px]">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  <SelectValue placeholder={t.circuitsPage.filters.duration} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.circuitsPage.durations.all}</SelectItem>
                  <SelectItem value="1">{t.circuitsPage.durations.oneDay}</SelectItem>
                  <SelectItem value="2-3">{t.circuitsPage.durations.twoThreeDays}</SelectItem>
                  <SelectItem value="4-7">{t.circuitsPage.durations.fourSevenDays}</SelectItem>
                  <SelectItem value="7+">{t.circuitsPage.durations.moreThanSeven}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder={t.circuitsPage.filters.type} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.circuitsPage.types.all}</SelectItem>
                  <SelectItem value="cultural">{t.circuitsPage.types.cultural}</SelectItem>
                  <SelectItem value="dayTrip">{t.circuitsPage.types.dayTrip}</SelectItem>
                  <SelectItem value="organized">{t.circuitsPage.types.organized}</SelectItem>
                  <SelectItem value="adventure">{t.circuitsPage.types.adventure}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder={t.circuitsPage.filters.region} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.circuitsPage.regions.all}</SelectItem>
                  <SelectItem value="south">{t.circuitsPage.regions.south}</SelectItem>
                  <SelectItem value="center">{t.circuitsPage.regions.center}</SelectItem>
                  <SelectItem value="north">{t.circuitsPage.regions.north}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder={t.circuitsPage.filters.sort} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">{t.circuitsPage.sortOptions.popular}</SelectItem>
                  <SelectItem value="newest">{t.circuitsPage.sortOptions.newest}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Circuits Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCircuits.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCircuits.map((circuit, index) => (
                <AnimatedSection key={circuit.id} delay={index * 0.05}>
                  <CircuitCard circuit={circuit} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">{t.circuitsPage.noResults}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
