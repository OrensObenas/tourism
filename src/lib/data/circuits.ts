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
    heroImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200',
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
    heroImage: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200',
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
    heroImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200',
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
  {
    id: '4',
    slug: 'parc-pendjari-safari',
    title: 'Safari au Parc National de la Pendjari',
    titleEn: 'Safari at Pendjari National Park',
    shortSummary: 'Une aventure safari au cœur de la savane africaine.',
    shortSummaryEn: 'A safari adventure in the heart of the African savanna.',
    description: 'Partez pour une aventure inoubliable au Parc National de la Pendjari, l\'un des derniers sanctuaires de faune sauvage en Afrique de l\'Ouest. Observez lions, éléphants, buffles, antilopes et de nombreuses espèces d\'oiseaux dans leur habitat naturel.',
    descriptionEn: 'Embark on an unforgettable adventure at Pendjari National Park, one of the last wildlife sanctuaries in West Africa. Observe lions, elephants, buffaloes, antelopes and many bird species in their natural habitat.',
    durationDays: 4,
    type: 'adventure',
    region: 'north',
    startingCity: 'Natitingou',
    groupSize: { min: 4, max: 8 },
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
    ],
    tags: ['Safari', 'Nature', 'Aventure', 'Faune'],
    tagsEn: ['Safari', 'Nature', 'Adventure', 'Wildlife'],
    itinerary: [
      {
        day: 1,
        title: 'Arrivée et installation',
        titleEn: 'Arrival and settlement',
        description: 'Accueil à Natitingou, transfert vers le lodge. Briefing safari et premier game drive au coucher du soleil.',
        descriptionEn: 'Welcome in Natitingou, transfer to the lodge. Safari briefing and first game drive at sunset.',
      },
      {
        day: 2,
        title: 'Safari journée complète',
        titleEn: 'Full day safari',
        description: 'Game drive matinal, observation de la faune. Pause déjeuner. Safari après-midi avec visite des points d\'eau.',
        descriptionEn: 'Morning game drive, wildlife observation. Lunch break. Afternoon safari with waterhole visits.',
      },
      {
        day: 3,
        title: 'Exploration approfondie',
        titleEn: 'In-depth exploration',
        description: 'Safari dans les zones reculées du parc. Pique-nique en brousse. Observation des oiseaux.',
        descriptionEn: 'Safari in remote areas of the park. Bush picnic. Bird watching.',
      },
      {
        day: 4,
        title: 'Dernier safari et départ',
        titleEn: 'Last safari and departure',
        description: 'Safari matinal de dernière chance. Brunch au lodge puis transfert vers Natitingou.',
        descriptionEn: 'Last chance morning safari. Brunch at the lodge then transfer to Natitingou.',
      },
    ],
    included: [
      'Hébergement 3 nuits en lodge',
      'Pension complète',
      'Tous les safaris en 4x4',
      'Guide naturaliste',
      'Droits d\'entrée au parc',
      'Jumelles',
    ],
    includedEn: [
      '3 nights lodge accommodation',
      'Full board',
      'All safaris by 4x4',
      'Naturalist guide',
      'Park entrance fees',
      'Binoculars',
    ],
    notIncluded: [
      'Vol/transport jusqu\'à Natitingou',
      'Boissons alcoolisées',
      'Pourboires',
      'Assurance voyage',
    ],
    notIncludedEn: [
      'Flight/transport to Natitingou',
      'Alcoholic beverages',
      'Tips',
      'Travel insurance',
    ],
    bestPeriod: 'Décembre à Mai',
    bestPeriodEn: 'December to May',
    whatToBring: [
      'Vêtements couleurs neutres',
      'Jumelles personnelles',
      'Appareil photo avec zoom',
      'Protection solaire',
      'Anti-moustiques',
    ],
    whatToBringEn: [
      'Neutral colored clothing',
      'Personal binoculars',
      'Camera with zoom',
      'Sun protection',
      'Mosquito repellent',
    ],
    meetingPoint: 'Aéroport de Natitingou ou hôtel à convenir',
    meetingPointEn: 'Natitingou airport or hotel to be agreed',
    featured: true,
    popular: true,
    createdAt: '2025-09-01',
  },
  {
    id: '5',
    slug: 'tata-somba-atacora',
    title: 'Les Tata Somba de l\'Atacora',
    titleEn: 'The Tata Somba of Atacora',
    shortSummary: 'À la découverte des maisons-forteresses du peuple Somba.',
    shortSummaryEn: 'Discovering the fortress-houses of the Somba people.',
    description: 'Explorez les fascinantes constructions des Tata Somba, ces maisons-forteresses uniques au monde. Rencontrez le peuple Betammaribé et découvrez leurs traditions ancestrales préservées.',
    descriptionEn: 'Explore the fascinating Tata Somba constructions, these fortress-houses unique in the world. Meet the Betammaribé people and discover their preserved ancestral traditions.',
    durationDays: 3,
    type: 'cultural',
    region: 'north',
    startingCity: 'Natitingou',
    groupSize: { min: 2, max: 10 },
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
    ],
    tags: ['Architecture', 'Traditions', 'Ethnie', 'Nord Bénin'],
    tagsEn: ['Architecture', 'Traditions', 'Ethnic', 'North Benin'],
    itinerary: [
      {
        day: 1,
        title: 'Arrivée à Natitingou',
        titleEn: 'Arrival in Natitingou',
        description: 'Accueil et installation. Visite du musée régional de Natitingou pour comprendre la culture Somba.',
        descriptionEn: 'Welcome and check-in. Visit to the regional museum of Natitingou to understand Somba culture.',
      },
      {
        day: 2,
        title: 'Immersion Tata Somba',
        titleEn: 'Tata Somba immersion',
        description: 'Journée complète dans les villages Tata. Visite des constructions, rencontre avec les familles, participation aux activités quotidiennes.',
        descriptionEn: 'Full day in Tata villages. Visit of the constructions, meeting with families, participation in daily activities.',
      },
      {
        day: 3,
        title: 'Boukoumbé et retour',
        titleEn: 'Boukoumbé and return',
        description: 'Visite de Boukoumbé, cœur du pays Somba. Dernières découvertes puis transfert retour.',
        descriptionEn: 'Visit of Boukoumbé, heart of Somba country. Final discoveries then return transfer.',
      },
    ],
    included: [
      'Hébergement 2 nuits',
      'Petits-déjeuners et déjeuners',
      'Guide local Somba',
      'Transport',
      'Entrées musées',
    ],
    includedEn: [
      '2 nights accommodation',
      'Breakfasts and lunches',
      'Local Somba guide',
      'Transport',
      'Museum entries',
    ],
    notIncluded: [
      'Dîners',
      'Pourboires',
      'Dépenses personnelles',
    ],
    notIncludedEn: [
      'Dinners',
      'Tips',
      'Personal expenses',
    ],
    bestPeriod: 'Octobre à Février',
    bestPeriodEn: 'October to February',
    whatToBring: [
      'Vêtements légers mais couvrants',
      'Chaussures de randonnée',
      'Lampe frontale',
      'Respect des traditions locales',
    ],
    whatToBringEn: [
      'Light but covering clothing',
      'Hiking shoes',
      'Headlamp',
      'Respect for local traditions',
    ],
    meetingPoint: 'Hôtel Tata Somba, Natitingou',
    meetingPointEn: 'Hotel Tata Somba, Natitingou',
    featured: false,
    popular: false,
    createdAt: '2025-10-15',
  },
  {
    id: '6',
    slug: 'festival-vaudou-janvier',
    title: 'Festival Vaudou de Ouidah',
    titleEn: 'Ouidah Voodoo Festival',
    shortSummary: 'Vivez l\'expérience unique du festival vaudou le 10 janvier.',
    shortSummaryEn: 'Experience the unique voodoo festival on January 10th.',
    description: 'Participez au festival vaudou de Ouidah, célébré chaque 10 janvier. Une immersion totale dans les cérémonies, danses et rituels de cette religion ancestrale reconnue officiellement au Bénin.',
    descriptionEn: 'Participate in the Ouidah voodoo festival, celebrated every January 10th. A total immersion in the ceremonies, dances and rituals of this ancestral religion officially recognized in Benin.',
    durationDays: 3,
    type: 'cultural',
    region: 'south',
    startingCity: 'Cotonou',
    groupSize: { min: 4, max: 12 },
    heroImage: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800',
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
    ],
    tags: ['Festival', 'Vaudou', 'Spiritualité', 'Traditions'],
    tagsEn: ['Festival', 'Voodoo', 'Spirituality', 'Traditions'],
    itinerary: [
      {
        day: 1,
        title: 'Arrivée et préparatifs',
        titleEn: 'Arrival and preparations',
        description: 'Installation à Ouidah, briefing culturel, visite des lieux clés du festival.',
        descriptionEn: 'Check-in in Ouidah, cultural briefing, visit of key festival locations.',
      },
      {
        day: 2,
        title: 'Jour du Festival',
        titleEn: 'Festival Day',
        description: 'Journée complète au festival : cérémonies officielles, danses rituelles, processions. Accompagnement par notre guide expert.',
        descriptionEn: 'Full day at the festival: official ceremonies, ritual dances, processions. Accompanied by our expert guide.',
      },
      {
        day: 3,
        title: 'Découverte et retour',
        titleEn: 'Discovery and return',
        description: 'Visite complémentaire de Ouidah, échanges sur l\'expérience vécue, retour à Cotonou.',
        descriptionEn: 'Additional visit of Ouidah, discussions about the experience, return to Cotonou.',
      },
    ],
    included: [
      'Hébergement 2 nuits',
      'Pension complète',
      'Guide expert vaudou',
      'Transport',
      'Accès privilégié aux cérémonies',
    ],
    includedEn: [
      '2 nights accommodation',
      'Full board',
      'Voodoo expert guide',
      'Transport',
      'Privileged access to ceremonies',
    ],
    notIncluded: [
      'Vols internationaux',
      'Assurance voyage',
      'Offrandes personnelles',
    ],
    notIncludedEn: [
      'International flights',
      'Travel insurance',
      'Personal offerings',
    ],
    bestPeriod: '10 janvier uniquement',
    bestPeriodEn: 'January 10th only',
    whatToBring: [
      'Vêtements blancs (recommandé)',
      'Ouverture d\'esprit',
      'Appareil photo (selon autorisations)',
      'Respect absolu des cérémonies',
    ],
    whatToBringEn: [
      'White clothing (recommended)',
      'Open mind',
      'Camera (subject to permissions)',
      'Absolute respect for ceremonies',
    ],
    meetingPoint: 'Aéroport de Cotonou ou hôtel',
    meetingPointEn: 'Cotonou airport or hotel',
    featured: true,
    popular: true,
    createdAt: '2025-11-20',
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
