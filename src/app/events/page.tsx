'use client';

import { useState, useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { EventCard } from '@/components/events/EventCard';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { events, Event } from '@/lib/data/events';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

export default function EventsPage() {
  const { locale, t } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showInterestModal, setShowInterestModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const filteredEvents = useMemo(() => {
    let result = [...events];

    if (selectedMonth !== 'all') {
      result = result.filter(e => e.date.substring(5, 7) === selectedMonth);
    }

    if (selectedType !== 'all') {
      result = result.filter(e => e.type === selectedType);
    }

    return result.sort((a, b) => a.date.localeCompare(b.date));
  }, [selectedMonth, selectedType]);

  const handleInterested = (event: Event) => {
    setSelectedEvent(event);
    setShowInterestModal(true);
  };

  const handleSubmitInterest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Interest submitted:', { event: selectedEvent?.id, ...formData });
    setShowInterestModal(false);
    setFormData({ name: '', email: '', phone: '' });
    alert(locale === 'en' ? 'Thank you! We will contact you soon.' : 'Merci ! Nous vous contacterons bientôt.');
  };

  const months = [
    { value: '01', label: locale === 'en' ? 'January' : 'Janvier' },
    { value: '02', label: locale === 'en' ? 'February' : 'Février' },
    { value: '03', label: locale === 'en' ? 'March' : 'Mars' },
    { value: '04', label: locale === 'en' ? 'April' : 'Avril' },
    { value: '05', label: locale === 'en' ? 'May' : 'Mai' },
    { value: '06', label: locale === 'en' ? 'June' : 'Juin' },
    { value: '07', label: locale === 'en' ? 'July' : 'Juillet' },
    { value: '08', label: locale === 'en' ? 'August' : 'Août' },
    { value: '09', label: locale === 'en' ? 'September' : 'Septembre' },
    { value: '10', label: locale === 'en' ? 'October' : 'Octobre' },
    { value: '11', label: locale === 'en' ? 'November' : 'Novembre' },
    { value: '12', label: locale === 'en' ? 'December' : 'Décembre' },
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <section className="bg-primary-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              {t.events.title}
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl">
              {t.events.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t.events.filterByMonth} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.events.allMonths}</SelectItem>
                {months.map((month) => (
                  <SelectItem key={month.value} value={month.value}>
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t.events.filterByType} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t.events.allTypes}</SelectItem>
                <SelectItem value="festival">Festival</SelectItem>
                <SelectItem value="trip">{locale === 'en' ? 'Trip' : 'Voyage'}</SelectItem>
                <SelectItem value="workshop">{locale === 'en' ? 'Workshop' : 'Atelier'}</SelectItem>
                <SelectItem value="special">{locale === 'en' ? 'Special' : 'Spécial'}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredEvents.map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 0.05}>
                  <EventCard event={event} onInterested={handleInterested} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                {locale === 'en' ? 'No events found' : 'Aucun événement trouvé'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Interest Modal */}
      {showInterestModal && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <Card className="w-full max-w-md p-6" hover={false}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-heading font-semibold">
                {t.events.interested}
              </h3>
              <button 
                onClick={() => setShowInterestModal(false)}
                className="p-1 hover:bg-sand-100 rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {locale === 'en' ? selectedEvent.titleEn : selectedEvent.title}
            </p>
            <form onSubmit={handleSubmitInterest} className="space-y-4">
              <Input
                placeholder={t.contactPage.form.fullName}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder={t.contactPage.form.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder={t.contactPage.form.phone}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <Button type="submit" className="w-full">
                {t.contactPage.form.submit}
              </Button>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
