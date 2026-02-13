export interface Circuit {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  shortSummary: string;
  shortSummaryEn: string;
  description: string;
  descriptionEn: string;
  durationDays: number;
  type: 'cultural' | 'dayTrip' | 'organized' | 'adventure';
  region: 'south' | 'center' | 'north';
  startingCity: string;
  groupSize: { min: number; max: number };
  heroImage: string;
  gallery: string[];
  tags: string[];
  tagsEn: string[];
  itinerary: {
    day: number;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
  }[];
  included: string[];
  includedEn: string[];
  notIncluded: string[];
  notIncludedEn: string[];
  bestPeriod: string;
  bestPeriodEn: string;
  whatToBring: string[];
  whatToBringEn: string[];
  meetingPoint: string;
  meetingPointEn: string;
  featured: boolean;
  popular: boolean;
  createdAt: string;
}

export const circuits: Circuit[] = [
  {
    id: '1',
    slug: 'route-des-esclaves-ouidah',
    title: 'La Route des Esclaves - Ouidah',
    titleEn: 'The Slave Route - Ouidah',
    shortSummary: 'Un voyage émouvant sur les traces de l\'histoire à Ouidah, berceau du vaudou.',
    shortSummaryEn: 'An emotional journey through history in Ouidah, the cradle of voodoo.',
    description: 'Découvrez l\'histoire poignante de la traite négrière à travers la célèbre Route des Esclaves de Ouidah. Ce circuit vous emmène sur les pas des millions d\'Africains déportés, de la Place Chacha jusqu\'à la Porte du Non-Retour. Vous explorerez également le Temple des Pythons et découvrirez les traditions vaudou qui font la richesse culturelle du Bénin.',
    descriptionEn: 'Discover the poignant history of the slave trade through the famous Slave Route of Ouidah. This circuit takes you in the footsteps of millions of deported Africans, from Place Chacha to the Door of No Return. You will also explore the Temple of Pythons and discover the voodoo traditions that make up the cultural richness of Benin.',
    durationDays: 1,
    type: 'cultural',
    region: 'south',
    startingCity: 'Cotonou',
    groupSize: { min: 2, max: 15 },
    heroImage: '/images/Ouidah.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800',
    ],
    tags: ['Histoire', 'Culture', 'Vaudou', 'Patrimoine'],
    tagsEn: ['History', 'Culture', 'Voodoo', 'Heritage'],
    itinerary: [
      {
        day: 1,
        title: 'Ouidah - Sur les traces de l\'histoire',
        titleEn: 'Ouidah - Following history\'s footsteps',
        description: 'Départ de Cotonou à 8h. Visite de la Place Chacha, marche sur la Route des Esclaves, découverte du Temple des Pythons, visite de la Porte du Non-Retour. Déjeuner local inclus. Retour à Cotonou vers 18h.',
        descriptionEn: 'Departure from Cotonou at 8am. Visit of Place Chacha, walk on the Slave Route, discovery of the Python Temple, visit of the Door of No Return. Local lunch included. Return to Cotonou around 6pm.',
      },
    ],
    included: [
      'Transport aller-retour depuis Cotonou',
      'Guide francophone expert',
      'Déjeuner traditionnel',
      'Entrées aux sites',
      'Eau minérale',
    ],
    includedEn: [
      'Round-trip transport from Cotonou',
      'Expert French-speaking guide',
      'Traditional lunch',
      'Site entrance fees',
      'Mineral water',
    ],
    notIncluded: [
      'Pourboires',
      'Dépenses personnelles',
      'Assurance voyage',
    ],
    notIncludedEn: [
      'Tips',
      'Personal expenses',
      'Travel insurance',
    ],
    bestPeriod: 'Novembre à Mars (saison sèche)',
    bestPeriodEn: 'November to March (dry season)',
    whatToBring: [
      'Chaussures de marche confortables',
      'Chapeau et crème solaire',
      'Appareil photo',
      'Tenue respectueuse pour les sites sacrés',
    ],
    whatToBringEn: [
      'Comfortable walking shoes',
      'Hat and sunscreen',
      'Camera',
      'Respectful attire for sacred sites',
    ],
    meetingPoint: 'Hôtel du Lac, Cotonou - 7h45',
    meetingPointEn: 'Hotel du Lac, Cotonou - 7:45am',
    featured: true,
    popular: true,
    createdAt: '2025-06-15',
  },
  {
    id: '2',
    slug: 'cite-lacustre-ganvie',
    title: 'Ganvié - La Venise de l\'Afrique',
    titleEn: 'Ganvié - The Venice of Africa',
    shortSummary: 'Découvrez la fascinante cité lacustre de Ganvié, unique au monde.',
    shortSummaryEn: 'Discover the fascinating lake city of Ganvié, unique in the world.',
    description: 'Embarquez pour une aventure unique sur le lac Nokoué vers Ganvié, la plus grande cité lacustre d\'Afrique. Découvrez la vie quotidienne de ses habitants qui vivent sur l\'eau depuis des siècles, visitez le marché flottant et imprégnez-vous de cette culture fascinante.',
    descriptionEn: 'Embark on a unique adventure on Lake Nokoué to Ganvié, the largest lake city in Africa. Discover the daily life of its inhabitants who have lived on the water for centuries, visit the floating market and immerse yourself in this fascinating culture.',
    durationDays: 1,
    type: 'dayTrip',
    region: 'south',
    startingCity: 'Cotonou',
    groupSize: { min: 2, max: 10 },
    heroImage: '/images/Ganvie.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800',
    ],
    tags: ['Nature', 'Culture', 'Lac', 'Village'],
    tagsEn: ['Nature', 'Culture', 'Lake', 'Village'],
    itinerary: [
      {
        day: 1,
        title: 'Exploration de Ganvié',
        titleEn: 'Exploring Ganvié',
        description: 'Départ en pirogue depuis Abomey-Calavi à 9h. Navigation sur le lac Nokoué, visite du village sur pilotis, découverte du marché flottant, rencontre avec les pêcheurs. Déjeuner de poisson frais sur l\'eau. Retour vers 16h.',
        descriptionEn: 'Departure by pirogue from Abomey-Calavi at 9am. Navigation on Lake Nokoué, visit of the stilt village, discovery of the floating market, meeting with fishermen. Fresh fish lunch on the water. Return around 4pm.',
      },
    ],
    included: [
      'Transport pirogue aller-retour',
      'Guide local',
      'Déjeuner sur l\'eau',
      'Gilet de sauvetage',
    ],
    includedEn: [
      'Round-trip pirogue transport',
      'Local guide',
      'Lunch on the water',
      'Life jacket',
    ],
    notIncluded: [
      'Transport jusqu\'à l\'embarcadère',
      'Pourboires',
      'Souvenirs',
    ],
    notIncludedEn: [
      'Transport to the pier',
      'Tips',
      'Souvenirs',
    ],
    bestPeriod: 'Toute l\'année, privilégier la saison sèche',
    bestPeriodEn: 'All year round, prefer dry season',
    whatToBring: [
      'Chapeau et lunettes de soleil',
      'Crème solaire',
      'Appareil photo étanche recommandé',
      'Vêtements légers',
    ],
    whatToBringEn: [
      'Hat and sunglasses',
      'Sunscreen',
      'Waterproof camera recommended',
      'Light clothing',
    ],
    meetingPoint: 'Embarcadère d\'Abomey-Calavi - 8h45',
    meetingPointEn: 'Abomey-Calavi pier - 8:45am',
    featured: true,
    popular: true,
    createdAt: '2025-07-20',
  },
  {
    id: '3',
    slug: 'palais-royaux-abomey',
    title: 'Les Palais Royaux d\'Abomey',
    titleEn: 'The Royal Palaces of Abomey',
    shortSummary: 'Plongez dans l\'histoire du puissant royaume du Dahomey.',
    shortSummaryEn: 'Dive into the history of the powerful Kingdom of Dahomey.',
    description: 'Visitez les palais royaux d\'Abomey, classés au patrimoine mondial de l\'UNESCO. Découvrez l\'histoire fascinante du royaume du Dahomey, ses rois guerriers et ses amazones légendaires. Un voyage dans le temps au cœur de l\'Afrique royale.',
    descriptionEn: 'Visit the royal palaces of Abomey, a UNESCO World Heritage Site. Discover the fascinating history of the Kingdom of Dahomey, its warrior kings and legendary amazons. A journey through time to the heart of royal Africa.',
    durationDays: 2,
    type: 'cultural',
    region: 'center',
    startingCity: 'Cotonou',
    groupSize: { min: 2, max: 12 },
    heroImage: '/images/Abomey.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    ],
    tags: ['UNESCO', 'Histoire', 'Royauté', 'Culture'],
    tagsEn: ['UNESCO', 'History', 'Royalty', 'Culture'],
    itinerary: [
      {
        day: 1,
        title: 'Route vers Abomey',
        titleEn: 'Road to Abomey',
        description: 'Départ de Cotonou, route vers Abomey avec arrêt à Bohicon. Installation à l\'hôtel, première visite du musée historique.',
        descriptionEn: 'Departure from Cotonou, road to Abomey with stop in Bohicon. Hotel check-in, first visit to the historical museum.',
      },
      {
        day: 2,
        title: 'Palais Royaux et retour',
        titleEn: 'Royal Palaces and return',
        description: 'Visite complète des palais royaux, découverte des bas-reliefs, rencontre avec un descendant royal. Déjeuner traditionnel puis retour à Cotonou.',
        descriptionEn: 'Complete visit of the royal palaces, discovery of the bas-reliefs, meeting with a royal descendant. Traditional lunch then return to Cotonou.',
      },
    ],
    included: [
      'Transport en véhicule climatisé',
      'Hébergement 1 nuit',
      'Petit-déjeuner et déjeuners',
      'Guide expert',
      'Entrées aux sites',
    ],
    includedEn: [
      'Air-conditioned vehicle transport',
      '1 night accommodation',
      'Breakfast and lunches',
      'Expert guide',
      'Site entrance fees',
    ],
    notIncluded: [
      'Dîners',
      'Boissons',
      'Pourboires',
      'Assurance voyage',
    ],
    notIncludedEn: [
      'Dinners',
      'Drinks',
      'Tips',
      'Travel insurance',
    ],
    bestPeriod: 'Novembre à Février',
    bestPeriodEn: 'November to February',
    whatToBring: [
      'Vêtements confortables',
      'Chaussures de marche',
      'Chapeau',
      'Appareil photo',
    ],
    whatToBringEn: [
      'Comfortable clothing',
      'Walking shoes',
      'Hat',
      'Camera',
    ],
    meetingPoint: 'Hôtel du Lac, Cotonou - 6h30',
    meetingPointEn: 'Hotel du Lac, Cotonou - 6:30am',
    featured: true,
    popular: false,
    createdAt: '2025-08-10',
  },
];

export function getCircuitBySlug(slug: string): Circuit | undefined {
  return circuits.find(c => c.slug === slug);
}

export function getFeaturedCircuits(): Circuit[] {
  return circuits.filter(c => c.featured);
}

export function getPopularCircuits(): Circuit[] {
  return circuits.filter(c => c.popular);
}
