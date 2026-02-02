export interface Event {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  date: string;
  endDate?: string;
  location: string;
  locationEn: string;
  type: 'festival' | 'trip' | 'workshop' | 'special';
  image: string;
  spotsLeft?: number;
}

export const events: Event[] = [
  {
    id: '1',
    slug: 'festival-vaudou-2026',
    title: 'Festival Vaudou 2026',
    titleEn: 'Voodoo Festival 2026',
    description: 'Vivez l\'expérience unique du festival vaudou de Ouidah, célébré chaque 10 janvier. Réservez dès maintenant pour cette édition spéciale.',
    descriptionEn: 'Experience the unique Ouidah voodoo festival, celebrated every January 10th. Book now for this special edition.',
    date: '2026-01-10',
    endDate: '2026-01-12',
    location: 'Ouidah, Bénin',
    locationEn: 'Ouidah, Benin',
    type: 'festival',
    image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800',
    spotsLeft: 8,
  },
  {
    id: '2',
    slug: 'carnaval-cotonou-fevrier-2026',
    title: 'Carnaval de Cotonou',
    titleEn: 'Cotonou Carnival',
    description: 'Participez au carnaval coloré de Cotonou avec ses défilés, musiques et danses traditionnelles.',
    descriptionEn: 'Join the colorful Cotonou carnival with its parades, music and traditional dances.',
    date: '2026-02-15',
    endDate: '2026-02-16',
    location: 'Cotonou, Bénin',
    locationEn: 'Cotonou, Benin',
    type: 'festival',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800',
    spotsLeft: 15,
  },
  {
    id: '3',
    slug: 'safari-pendjari-mars-2026',
    title: 'Safari Pendjari - Édition Mars',
    titleEn: 'Pendjari Safari - March Edition',
    description: 'Rejoignez notre groupe pour un safari exceptionnel pendant la meilleure période d\'observation.',
    descriptionEn: 'Join our group for an exceptional safari during the best observation period.',
    date: '2026-03-15',
    endDate: '2026-03-19',
    location: 'Parc National Pendjari',
    locationEn: 'Pendjari National Park',
    type: 'trip',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    spotsLeft: 4,
  },
  {
    id: '4',
    slug: 'atelier-artisanat-abomey',
    title: 'Atelier Artisanat à Abomey',
    titleEn: 'Craft Workshop in Abomey',
    description: 'Initiez-vous aux techniques artisanales traditionnelles du royaume du Dahomey.',
    descriptionEn: 'Learn traditional craft techniques from the Kingdom of Dahomey.',
    date: '2026-04-20',
    location: 'Abomey, Bénin',
    locationEn: 'Abomey, Benin',
    type: 'workshop',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
    spotsLeft: 10,
  },
  {
    id: '5',
    slug: 'decouverte-nord-benin-mai-2026',
    title: 'Découverte du Nord Bénin',
    titleEn: 'North Benin Discovery',
    description: 'Un voyage complet dans le nord du Bénin : Tata Somba, cascades et rencontres.',
    descriptionEn: 'A complete journey through northern Benin: Tata Somba, waterfalls and encounters.',
    date: '2026-05-10',
    endDate: '2026-05-15',
    location: 'Nord Bénin',
    locationEn: 'North Benin',
    type: 'trip',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800',
    spotsLeft: 6,
  },
];

export function getUpcomingEvents(limit?: number): Event[] {
  const today = new Date().toISOString().split('T')[0];
  const upcoming = events
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find(e => e.slug === slug);
}
