export interface FAQItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: 'general' | 'booking' | 'safety' | 'practical';
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Comment réserver un circuit avec Tourism\'Tour ?',
    questionEn: 'How do I book a circuit with Tourism\'Tour?',
    answer: 'Pour réserver, remplissez simplement notre formulaire de contact en indiquant le circuit qui vous intéresse. Notre équipe vous recontactera sous 24h pour discuter des détails et finaliser votre réservation.',
    answerEn: 'To book, simply fill out our contact form indicating the circuit you\'re interested in. Our team will get back to you within 24 hours to discuss details and finalize your reservation.',
    category: 'booking',
  },
  {
    id: '2',
    question: 'Quels sont les moyens de paiement acceptés ?',
    questionEn: 'What payment methods are accepted?',
    answer: 'Nous acceptons les virements bancaires, Mobile Money (MTN, Moov), et le paiement en espèces à notre bureau. Les détails de paiement vous seront communiqués lors de la confirmation de réservation.',
    answerEn: 'We accept bank transfers, Mobile Money (MTN, Moov), and cash payment at our office. Payment details will be provided upon booking confirmation.',
    category: 'booking',
  },
  {
    id: '3',
    question: 'Le Bénin est-il un pays sûr pour les touristes ?',
    questionEn: 'Is Benin a safe country for tourists?',
    answer: 'Oui, le Bénin est considéré comme l\'un des pays les plus sûrs d\'Afrique de l\'Ouest. Nos guides connaissent parfaitement le terrain et assurent votre sécurité tout au long du voyage.',
    answerEn: 'Yes, Benin is considered one of the safest countries in West Africa. Our guides know the terrain perfectly and ensure your safety throughout the trip.',
    category: 'safety',
  },
  {
    id: '4',
    question: 'Quels vaccins sont nécessaires pour voyager au Bénin ?',
    questionEn: 'What vaccinations are required to travel to Benin?',
    answer: 'Le vaccin contre la fièvre jaune est obligatoire. Nous recommandons également les vaccins contre l\'hépatite A et B, la typhoïde et un traitement antipaludéen. Consultez votre médecin avant le départ.',
    answerEn: 'Yellow fever vaccination is mandatory. We also recommend vaccinations against hepatitis A and B, typhoid, and antimalarial treatment. Consult your doctor before departure.',
    category: 'safety',
  },
  {
    id: '5',
    question: 'Quelle est la meilleure période pour visiter le Bénin ?',
    questionEn: 'What is the best time to visit Benin?',
    answer: 'La saison sèche (novembre à mars) est idéale pour visiter le Bénin. Pour le safari à la Pendjari, privilégiez décembre à mai. Le festival vaudou a lieu chaque 10 janvier.',
    answerEn: 'The dry season (November to March) is ideal for visiting Benin. For Pendjari safari, prefer December to May. The voodoo festival takes place every January 10th.',
    category: 'practical',
  },
  {
    id: '6',
    question: 'Les circuits sont-ils adaptés aux enfants ?',
    questionEn: 'Are the circuits suitable for children?',
    answer: 'Oui, nous proposons des circuits famille adaptés aux enfants. Certains circuits comme le safari peuvent avoir des restrictions d\'âge. Contactez-nous pour des conseils personnalisés.',
    answerEn: 'Yes, we offer family circuits suitable for children. Some circuits like the safari may have age restrictions. Contact us for personalized advice.',
    category: 'general',
  },
  {
    id: '7',
    question: 'Que comprend le prix des circuits ?',
    questionEn: 'What is included in the circuit price?',
    answer: 'Chaque circuit détaille précisément ce qui est inclus (transport, hébergement, repas, guide, entrées aux sites). Les prix sont sur demande car ils varient selon la taille du groupe et les dates.',
    answerEn: 'Each circuit details exactly what is included (transport, accommodation, meals, guide, site entries). Prices are on request as they vary depending on group size and dates.',
    category: 'booking',
  },
  {
    id: '8',
    question: 'Quelle est la politique d\'annulation ?',
    questionEn: 'What is the cancellation policy?',
    answer: 'Annulation gratuite jusqu\'à 14 jours avant le départ. Entre 14 et 7 jours : 50% de frais. Moins de 7 jours : aucun remboursement. Une assurance voyage est recommandée.',
    answerEn: 'Free cancellation up to 14 days before departure. Between 14 and 7 days: 50% fee. Less than 7 days: no refund. Travel insurance is recommended.',
    category: 'booking',
  },
  {
    id: '9',
    question: 'Les guides parlent-ils anglais ?',
    questionEn: 'Do the guides speak English?',
    answer: 'Oui, nous avons des guides francophones et anglophones. Précisez votre préférence linguistique lors de la réservation et nous assignerons le guide approprié.',
    answerEn: 'Yes, we have French and English speaking guides. Specify your language preference when booking and we will assign the appropriate guide.',
    category: 'general',
  },
  {
    id: '10',
    question: 'Puis-je personnaliser un circuit existant ?',
    questionEn: 'Can I customize an existing circuit?',
    answer: 'Absolument ! Nous adorons créer des expériences sur-mesure. Contactez-nous avec vos souhaits et nous adapterons l\'itinéraire selon vos centres d\'intérêt, durée et budget.',
    answerEn: 'Absolutely! We love creating bespoke experiences. Contact us with your wishes and we will adapt the itinerary according to your interests, duration and budget.',
    category: 'booking',
  },
  {
    id: '11',
    question: 'Comment se passe le transport pendant les circuits ?',
    questionEn: 'How is transportation handled during circuits?',
    answer: 'Nous utilisons des véhicules climatisés confortables avec chauffeurs expérimentés. Pour Ganvié, des pirogues motorisées sécurisées. Pour le safari, des 4x4 adaptés.',
    answerEn: 'We use comfortable air-conditioned vehicles with experienced drivers. For Ganvié, secure motorized pirogues. For safari, suitable 4x4 vehicles.',
    category: 'practical',
  },
  {
    id: '12',
    question: 'Ai-je besoin d\'un visa pour le Bénin ?',
    questionEn: 'Do I need a visa for Benin?',
    answer: 'La plupart des nationalités nécessitent un e-visa, facilement obtenu en ligne sur evisa.gouv.bj. Nous pouvons vous guider dans les démarches si nécessaire.',
    answerEn: 'Most nationalities require an e-visa, easily obtained online at evisa.gouv.bj. We can guide you through the process if needed.',
    category: 'practical',
  },
  {
    id: '13',
    question: 'Proposez-vous des voyages pour les groupes scolaires ?',
    questionEn: 'Do you offer trips for school groups?',
    answer: 'Oui ! Nous avons une offre spéciale pour les étudiants et groupes scolaires avec des tarifs adaptés et des contenus pédagogiques. Contactez-nous pour un devis groupe.',
    answerEn: 'Yes! We have a special offer for students and school groups with adapted rates and educational content. Contact us for a group quote.',
    category: 'general',
  },
  {
    id: '14',
    question: 'Que dois-je mettre dans ma valise ?',
    questionEn: 'What should I pack?',
    answer: 'Vêtements légers et confortables, chaussures de marche, chapeau, crème solaire, anti-moustiques, appareil photo. Pour les sites sacrés, prévoyez des tenues couvrantes.',
    answerEn: 'Light and comfortable clothing, walking shoes, hat, sunscreen, mosquito repellent, camera. For sacred sites, plan covering outfits.',
    category: 'practical',
  },
  {
    id: '15',
    question: 'Tourism\'Tour est-elle une agence responsable ?',
    questionEn: 'Is Tourism\'Tour a responsible agency?',
    answer: 'Oui, nous privilégions le tourisme responsable : guides locaux, hébergements familiaux, soutien aux communautés visitées, respect de l\'environnement et des traditions.',
    answerEn: 'Yes, we prioritize responsible tourism: local guides, family accommodations, support for visited communities, respect for the environment and traditions.',
    category: 'general',
  },
];

export function getFAQItems(): FAQItem[] {
  return faqItems;
}

export function getFAQByCategory(category: FAQItem['category']): FAQItem[] {
  return faqItems.filter(item => item.category === category);
}
