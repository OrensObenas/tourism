export interface Testimonial {
  id: string;
  name: string;
  profileType: 'student' | 'family' | 'couple' | 'solo' | 'group' | 'international';
  quote: string;
  quoteEn: string;
  rating: number;
  tripReference?: string;
  tripReferenceEn?: string;
  photo?: string;
  date: string;
  country?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Dupont',
    profileType: 'family',
    quote: 'Un voyage incroyable en famille ! Nos enfants ont adoré la visite de Ganvié. L\'équipe Tourism\'Tour a su adapter le rythme pour nous. Je recommande à 100%.',
    quoteEn: 'An incredible family trip! Our children loved the visit to Ganvié. The Tourism\'Tour team adapted the pace for us. I recommend 100%.',
    rating: 5,
    tripReference: 'Ganvié - La Venise de l\'Afrique',
    tripReferenceEn: 'Ganvié - The Venice of Africa',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    date: '2025-08-15',
    country: 'France',
  },
  {
    id: '2',
    name: 'Jean-Pierre Mensah',
    profileType: 'solo',
    quote: 'En tant que descendant béninois vivant en France, ce voyage m\'a reconnecté à mes racines. La Route des Esclaves était très émouvante. Merci Tourism\'Tour.',
    quoteEn: 'As a Beninese descendant living in France, this trip reconnected me to my roots. The Slave Route was very moving. Thank you Tourism\'Tour.',
    rating: 5,
    tripReference: 'La Route des Esclaves',
    tripReferenceEn: 'The Slave Route',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    date: '2025-07-20',
    country: 'France',
  },
  {
    id: '3',
    name: 'Sarah & Tom Williams',
    profileType: 'couple',
    quote: 'The safari at Pendjari was breathtaking! We saw lions, elephants and so many birds. Our guide was incredibly knowledgeable. Best experience in West Africa!',
    quoteEn: 'The safari at Pendjari was breathtaking! We saw lions, elephants and so many birds. Our guide was incredibly knowledgeable. Best experience in West Africa!',
    rating: 5,
    tripReference: 'Safari au Parc Pendjari',
    tripReferenceEn: 'Pendjari Park Safari',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200',
    date: '2025-09-10',
    country: 'United Kingdom',
  },
  {
    id: '4',
    name: 'Groupe Étudiants ESSEC',
    profileType: 'student',
    quote: 'Notre voyage d\'études au Bénin organisé par Tourism\'Tour était parfaitement adapté à notre budget étudiant tout en offrant une expérience riche et authentique.',
    quoteEn: 'Our study trip to Benin organized by Tourism\'Tour was perfectly adapted to our student budget while offering a rich and authentic experience.',
    rating: 4,
    tripReference: 'Circuit Culturel Sur-Mesure',
    tripReferenceEn: 'Custom Cultural Circuit',
    photo: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200',
    date: '2025-06-05',
    country: 'France',
  },
  {
    id: '5',
    name: 'Famille Koffi',
    profileType: 'family',
    quote: 'Nous vivons au Togo et voulions découvrir le Bénin voisin. Tourism\'Tour nous a fait vivre des moments magiques aux Palais d\'Abomey. Nos ados étaient captivés !',
    quoteEn: 'We live in Togo and wanted to discover neighboring Benin. Tourism\'Tour gave us magical moments at the Abomey Palaces. Our teens were captivated!',
    rating: 5,
    tripReference: 'Les Palais Royaux d\'Abomey',
    tripReferenceEn: 'The Royal Palaces of Abomey',
    date: '2025-10-12',
    country: 'Togo',
  },
  {
    id: '6',
    name: 'Klaus & Ingrid Müller',
    profileType: 'international',
    quote: 'Wir hatten eine fantastische Zeit! Tourism\'Tour made everything so easy for us non-French speakers. The English-speaking guide was excellent.',
    quoteEn: 'We had a fantastic time! Tourism\'Tour made everything so easy for us non-French speakers. The English-speaking guide was excellent.',
    rating: 5,
    tripReference: 'Découverte Complète du Bénin',
    tripReferenceEn: 'Complete Benin Discovery',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    date: '2025-11-08',
    country: 'Germany',
  },
  {
    id: '7',
    name: 'Association Culturelle Afrique',
    profileType: 'group',
    quote: 'Notre groupe de 20 personnes a été merveilleusement accueilli. Organisation impeccable pour le Festival Vaudou. Une expérience spirituelle inoubliable.',
    quoteEn: 'Our group of 20 people was wonderfully welcomed. Impeccable organization for the Voodoo Festival. An unforgettable spiritual experience.',
    rating: 5,
    tripReference: 'Festival Vaudou de Ouidah',
    tripReferenceEn: 'Ouidah Voodoo Festival',
    date: '2025-01-10',
    country: 'Belgium',
  },
  {
    id: '8',
    name: 'Aminata Diallo',
    profileType: 'solo',
    quote: 'Voyager seule en tant que femme, j\'avais quelques appréhensions. L\'équipe m\'a mise en confiance dès le départ. J\'ai vécu le Bénin en toute sécurité.',
    quoteEn: 'Traveling alone as a woman, I had some concerns. The team put me at ease from the start. I experienced Benin in complete safety.',
    rating: 5,
    tripReference: 'Circuit Sud Bénin',
    tripReferenceEn: 'South Benin Circuit',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200',
    date: '2025-12-01',
    country: 'Senegal',
  },
];

export function getTestimonials(limit?: number): Testimonial[] {
  const sorted = [...testimonials].sort((a, b) => b.date.localeCompare(a.date));
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getTestimonialsByType(type: Testimonial['profileType']): Testimonial[] {
  return testimonials.filter(t => t.profileType === type);
}
