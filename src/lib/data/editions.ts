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
  videoUrl?: string;
}

export const editions: Edition[] = [
  {
    id: '1',
    year: 2025,
    title: 'Édition 2025 - L\'Année de l\'Excellence',
    titleEn: '2025 Edition - The Year of Excellence',
    recap: 'Une année exceptionnelle avec plus de 500 voyageurs accompagnés à travers le Bénin. Nous avons lancé de nouveaux circuits dans le nord et renforcé nos partenariats locaux.',
    recapEn: 'An exceptional year with over 500 travelers guided through Benin. We launched new circuits in the north and strengthened our local partnerships.',
    highlights: [
      'Lancement du circuit Safari Pendjari Premium',
      'Partenariat avec les communautés Somba',
      'Plus de 50 festivals et événements couverts',
      'Formation de 10 nouveaux guides locaux',
    ],
    highlightsEn: [
      'Launch of the Pendjari Safari Premium circuit',
      'Partnership with Somba communities',
      'Over 50 festivals and events covered',
      'Training of 10 new local guides',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
      'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800',
    ],
    participants: 523,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    year: 2024,
    title: 'Édition 2024 - Renaissance Post-Covid',
    titleEn: '2024 Edition - Post-Covid Renaissance',
    recap: 'Le retour en force du tourisme au Bénin ! Cette année a marqué la reprise complète de nos activités avec un engouement renouvelé pour les découvertes culturelles.',
    recapEn: 'Tourism is back in Benin! This year marked the full resumption of our activities with renewed enthusiasm for cultural discoveries.',
    highlights: [
      'Réouverture de tous nos circuits',
      'Protocoles sanitaires exemplaires',
      'Voyage inaugural vers les Tata Somba',
      'Première édition du "Trek des Collines"',
    ],
    highlightsEn: [
      'Reopening of all our circuits',
      'Exemplary health protocols',
      'Inaugural trip to Tata Somba',
      'First edition of the "Hills Trek"',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800',
    ],
    participants: 312,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '3',
    year: 2023,
    title: 'Édition 2023 - Les Débuts de l\'Aventure',
    titleEn: '2023 Edition - The Beginning of the Adventure',
    recap: 'L\'année de lancement de Tourism\'Tour ! Nos premiers circuits ont permis de valider notre concept de tourisme culturel authentique et responsable.',
    recapEn: 'The launch year of Tourism\'Tour! Our first circuits validated our concept of authentic and responsible cultural tourism.',
    highlights: [
      'Création de Tourism\'Tour',
      'Premiers circuits à Ouidah et Ganvié',
      'Partenariats avec les hôtels locaux',
      '100 premiers voyageurs satisfaits',
    ],
    highlightsEn: [
      'Creation of Tourism\'Tour',
      'First circuits to Ouidah and Ganvié',
      'Partnerships with local hotels',
      '100 first satisfied travelers',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    ],
    participants: 127,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

export function getEditions(): Edition[] {
  return [...editions].sort((a, b) => b.year - a.year);
}

export function getEditionByYear(year: number): Edition | undefined {
  return editions.find(e => e.year === year);
}
