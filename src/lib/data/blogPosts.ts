export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
  category: 'culture' | 'tips' | 'destinations' | 'practical';
  coverImage: string;
  author: string;
  date: string;
  readingTime: number;
  tags: string[];
  tagsEn: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'guide-complet-vaudou-benin',
    title: 'Guide complet du Vaudou au Bénin : Histoire et Traditions',
    titleEn: 'Complete Guide to Voodoo in Benin: History and Traditions',
    excerpt: 'Découvrez les origines, les pratiques et la signification profonde du vaudou, religion officielle du Bénin depuis 1996.',
    excerptEn: 'Discover the origins, practices and deep meaning of voodoo, Benin\'s official religion since 1996.',
    content: 'Le vaudou est bien plus qu\'une simple religion...',
    contentEn: 'Voodoo is much more than just a religion...',
    category: 'culture',
    coverImage: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800',
    author: 'Équipe Tourism\'Tour',
    date: '2025-10-15',
    readingTime: 8,
    tags: ['Vaudou', 'Culture', 'Spiritualité', 'Histoire'],
    tagsEn: ['Voodoo', 'Culture', 'Spirituality', 'History'],
  },
  {
    id: '2',
    slug: 'meilleure-periode-visiter-benin',
    title: 'Quelle est la meilleure période pour visiter le Bénin ?',
    titleEn: 'What is the best time to visit Benin?',
    excerpt: 'Climat, saisons, événements : tout ce qu\'il faut savoir pour planifier votre voyage au Bénin au bon moment.',
    excerptEn: 'Climate, seasons, events: everything you need to know to plan your trip to Benin at the right time.',
    content: 'Le Bénin bénéficie d\'un climat tropical...',
    contentEn: 'Benin enjoys a tropical climate...',
    category: 'practical',
    coverImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    author: 'Équipe Tourism\'Tour',
    date: '2025-09-20',
    readingTime: 5,
    tags: ['Conseils', 'Climat', 'Planification'],
    tagsEn: ['Tips', 'Climate', 'Planning'],
  },
  {
    id: '3',
    slug: 'ganvie-venise-afrique',
    title: 'Ganvié : À la découverte de la Venise de l\'Afrique',
    titleEn: 'Ganvié: Discovering the Venice of Africa',
    excerpt: 'Plongez dans l\'histoire fascinante de cette cité lacustre unique au monde, habitée depuis le XVIIe siècle.',
    excerptEn: 'Dive into the fascinating history of this unique lake city, inhabited since the 17th century.',
    content: 'Ganvié, qui signifie "la communauté sauvée"...',
    contentEn: 'Ganvié, which means "the saved community"...',
    category: 'destinations',
    coverImage: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
    author: 'Équipe Tourism\'Tour',
    date: '2025-08-10',
    readingTime: 6,
    tags: ['Ganvié', 'Destination', 'Lac Nokoué'],
    tagsEn: ['Ganvié', 'Destination', 'Lake Nokoué'],
  },
  {
    id: '4',
    slug: 'conseils-voyage-securite-benin',
    title: '10 conseils de sécurité pour voyager au Bénin',
    titleEn: '10 safety tips for traveling in Benin',
    excerpt: 'Voyagez sereinement au Bénin grâce à nos conseils pratiques pour une expérience sûre et agréable.',
    excerptEn: 'Travel safely in Benin with our practical tips for a safe and enjoyable experience.',
    content: 'Le Bénin est considéré comme l\'un des pays les plus sûrs d\'Afrique de l\'Ouest...',
    contentEn: 'Benin is considered one of the safest countries in West Africa...',
    category: 'tips',
    coverImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800',
    author: 'Équipe Tourism\'Tour',
    date: '2025-07-25',
    readingTime: 4,
    tags: ['Sécurité', 'Conseils', 'Préparation'],
    tagsEn: ['Safety', 'Tips', 'Preparation'],
  },
  {
    id: '5',
    slug: 'royaume-dahomey-histoire',
    title: 'Le Royaume du Dahomey : Une histoire fascinante',
    titleEn: 'The Kingdom of Dahomey: A Fascinating History',
    excerpt: 'Des amazones aux rois guerriers, découvrez l\'histoire épique du puissant royaume qui a façonné le Bénin actuel.',
    excerptEn: 'From amazons to warrior kings, discover the epic history of the powerful kingdom that shaped modern Benin.',
    content: 'Le Royaume du Dahomey fut l\'un des plus puissants d\'Afrique...',
    contentEn: 'The Kingdom of Dahomey was one of the most powerful in Africa...',
    category: 'culture',
    coverImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
    author: 'Équipe Tourism\'Tour',
    date: '2025-06-15',
    readingTime: 10,
    tags: ['Histoire', 'Dahomey', 'Abomey', 'Royauté'],
    tagsEn: ['History', 'Dahomey', 'Abomey', 'Royalty'],
  },
  {
    id: '6',
    slug: 'gastronomie-beninoise-decouverte',
    title: 'La gastronomie béninoise : saveurs et traditions',
    titleEn: 'Beninese gastronomy: flavors and traditions',
    excerpt: 'Du pâté rouge au tchoukoutou, explorez les richesses culinaires du Bénin et leurs significations culturelles.',
    excerptEn: 'From red paste to tchoukoutou, explore Benin\'s culinary riches and their cultural meanings.',
    content: 'La cuisine béninoise est riche et variée...',
    contentEn: 'Beninese cuisine is rich and varied...',
    category: 'culture',
    coverImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
    author: 'Équipe Tourism\'Tour',
    date: '2025-05-20',
    readingTime: 6,
    tags: ['Gastronomie', 'Culture', 'Cuisine'],
    tagsEn: ['Gastronomy', 'Culture', 'Cuisine'],
  },
  {
    id: '7',
    slug: 'parc-pendjari-guide-safari',
    title: 'Guide Safari : Le Parc National de la Pendjari',
    titleEn: 'Safari Guide: Pendjari National Park',
    excerpt: 'Tout savoir sur le dernier grand sanctuaire de faune sauvage en Afrique de l\'Ouest.',
    excerptEn: 'Everything you need to know about the last great wildlife sanctuary in West Africa.',
    content: 'Le Parc National de la Pendjari est une merveille naturelle...',
    contentEn: 'Pendjari National Park is a natural wonder...',
    category: 'destinations',
    coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    author: 'Équipe Tourism\'Tour',
    date: '2025-04-10',
    readingTime: 7,
    tags: ['Safari', 'Pendjari', 'Nature', 'Faune'],
    tagsEn: ['Safari', 'Pendjari', 'Nature', 'Wildlife'],
  },
  {
    id: '8',
    slug: 'preparer-valise-benin',
    title: 'Comment préparer sa valise pour le Bénin ?',
    titleEn: 'How to pack for Benin?',
    excerpt: 'Liste complète des indispensables à emporter pour votre voyage au Bénin, selon la saison et les activités.',
    excerptEn: 'Complete list of essentials to bring for your trip to Benin, according to season and activities.',
    content: 'Préparer sa valise pour le Bénin nécessite quelques réflexions...',
    contentEn: 'Packing for Benin requires some thought...',
    category: 'practical',
    coverImage: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800',
    author: 'Équipe Tourism\'Tour',
    date: '2025-03-05',
    readingTime: 4,
    tags: ['Préparation', 'Conseils', 'Valise'],
    tagsEn: ['Preparation', 'Tips', 'Packing'],
  },
];

export function getBlogPosts(limit?: number): BlogPost[] {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(p => p.category === category);
}
