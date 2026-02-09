export interface RecapVideo {
  title: string;
  titleEn: string;
  url: string;
}

export interface EditionTestimonial {
  name: string;
  profileType: 'student' | 'family' | 'couple' | 'solo' | 'group' | 'international';
  quote: string;
  quoteEn: string;
}

export interface Edition {
  id: string;
  year: number;
  title: string;
  titleEn: string;
  recap: string;
  recapEn: string;
  highlights: string[];
  highlightsEn: string[];
  gallery: string[];
  participants: number;
  recapVideos: RecapVideo[];
  testimonials: EditionTestimonial[];
}

export const editions: Edition[] = [
  {
    id: '1',
    year: 2025,
    title: 'Édition 2025 - L\'Année de l\'Excellence',
    titleEn: '2025 Edition - The Year of Excellence',
    recap: 'Une année exceptionnelle avec plus de 500 voyageurs accompagnés à travers le Bénin.',
    recapEn: 'An exceptional year with over 500 travelers guided through Benin.',
    highlights: [
      'Lancement du circuit Safari Pendjari Premium',
      'Partenariat avec les communautés Somba',
      'Plus de 50 festivals et événements couverts',
    ],
    highlightsEn: [
      'Launch of the Pendjari Safari Premium circuit',
      'Partnership with Somba communities',
      'Over 50 festivals and events covered',
    ],
    gallery: [],
    participants: 523,
    recapVideos: [
      {
        title: 'Récap officiel 2025',
        titleEn: 'Official 2025 Recap',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
      {
        title: 'Safari Pendjari - Moments forts',
        titleEn: 'Pendjari Safari - Highlights',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
    testimonials: [
      {
        name: 'Marie Dupont',
        profileType: 'family',
        quote: 'Un voyage incroyable en famille ! Nos enfants ont adoré.',
        quoteEn: 'An incredible family trip! Our children loved it.',
      },
      {
        name: 'Sarah & Tom Williams',
        profileType: 'couple',
        quote: 'The safari at Pendjari was breathtaking! Best experience in West Africa!',
        quoteEn: 'The safari at Pendjari was breathtaking! Best experience in West Africa!',
      },
      {
        name: 'Aminata Diallo',
        profileType: 'solo',
        quote: 'J\'ai vécu le Bénin en toute sécurité. L\'équipe est formidable.',
        quoteEn: 'I experienced Benin in complete safety. The team is amazing.',
      },
    ],
  },
  {
    id: '2',
    year: 2024,
    title: 'Édition 2024 - Renaissance Post-Covid',
    titleEn: '2024 Edition - Post-Covid Renaissance',
    recap: 'Le retour en force du tourisme au Bénin ! Reprise complète de nos activités.',
    recapEn: 'Tourism is back in Benin! Full resumption of our activities.',
    highlights: [
      'Réouverture de tous nos circuits',
      'Voyage inaugural vers les Tata Somba',
      'Première édition du "Trek des Collines"',
    ],
    highlightsEn: [
      'Reopening of all our circuits',
      'Inaugural trip to Tata Somba',
      'First edition of the "Hills Trek"',
    ],
    gallery: [],
    participants: 312,
    recapVideos: [
      {
        title: 'Récap 2024 - Le retour',
        titleEn: '2024 Recap - The Return',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      },
    ],
    testimonials: [
      {
        name: 'Jean-Pierre Mensah',
        profileType: 'solo',
        quote: 'Ce voyage m\'a reconnecté à mes racines. Très émouvant.',
        quoteEn: 'This trip reconnected me to my roots. Very moving.',
      },
      {
        name: 'Famille Koffi',
        profileType: 'family',
        quote: 'Nos ados étaient captivés par les Palais d\'Abomey !',
        quoteEn: 'Our teens were captivated by the Abomey Palaces!',
      },
    ],
  },
  {
    id: '3',
    year: 2023,
    title: 'Édition 2023 - Les Débuts de l\'Aventure',
    titleEn: '2023 Edition - The Beginning of the Adventure',
    recap: 'L\'année de lancement de Tourism\'Tour ! Validation de notre concept de tourisme culturel authentique.',
    recapEn: 'The launch year of Tourism\'Tour! Validating our concept of authentic cultural tourism.',
    highlights: [
      'Création de Tourism\'Tour',
      'Premiers circuits à Ouidah et Ganvié',
      'Partenariats avec les hôtels locaux',
    ],
    highlightsEn: [
      'Creation of Tourism\'Tour',
      'First circuits to Ouidah and Ganvié',
      'Partnerships with local hotels',
    ],
    gallery: [],
    participants: 127,
    recapVideos: [],
    testimonials: [
      {
        name: 'Groupe Étudiants ESSEC',
        profileType: 'student',
        quote: 'Expérience riche et authentique, parfaitement adaptée à notre budget.',
        quoteEn: 'Rich and authentic experience, perfectly adapted to our budget.',
      },
    ],
  },
];

export function getEditions(): Edition[] {
  return [...editions].sort((a, b) => b.year - a.year);
}

export function getEditionByYear(year: number): Edition | undefined {
  return editions.find(e => e.year === year);
}
