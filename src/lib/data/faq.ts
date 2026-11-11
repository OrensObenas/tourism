export interface FAQItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: 'general' | 'experiences' | 'booking' | 'practical';
}

export const faqItems: FAQItem[] = [
  {
    id: 'who',
    question: 'Qui est Tourism\'Tour ?',
    questionEn: 'Who is Tourism\'Tour?',
    answer:
      "Tourism'Tour est une structure basée à Zogbadjè, Abomey-Calavi, au Bénin. Elle œuvre pour le développement touristique et la promotion de la culture.",
    answerEn:
      "Tourism'Tour is a structure based in Zogbadjè, Abomey-Calavi, Benin. It works for tourism development and the promotion of culture.",
    category: 'general',
  },
  {
    id: 'where',
    question: 'Où êtes-vous basés ?',
    questionEn: 'Where are you based?',
    answer: 'À Zogbadjè, Abomey-Calavi, au Bénin.',
    answerEn: 'In Zogbadjè, Abomey-Calavi, Benin.',
    category: 'general',
  },
  {
    id: 'contact',
    question: 'Comment vous contacter ?',
    questionEn: 'How can I contact you?',
    answer:
      "Par téléphone au +229 62 69 86 24, par e-mail à tourismtour100624@gmail.com, via le formulaire de contact de ce site, ou sur notre page Facebook « Tourism'tour ». Nous sommes aussi présents sur TikTok (@tourismtour4).",
    answerEn:
      "By phone at +229 62 69 86 24, by email at tourismtour100624@gmail.com, through the contact form on this site, or on our Facebook page “Tourism'tour”. We are also on TikTok (@tourismtour4).",
    category: 'general',
  },
  {
    id: 'other-offers',
    question: 'Proposez-vous d\'autres circuits ou des voyages sur mesure ?',
    questionEn: 'Do you offer other tours or tailor-made trips?',
    answer:
      "Escale Urbaine est aujourd'hui notre expérience mise en avant. Pour tout autre projet, écrivez-nous : nous en discuterons avec vous. Les autres offres éventuelles restent à confirmer.",
    answerEn:
      'Escale Urbaine is currently our featured experience. For any other project, write to us and we will discuss it with you. Any other offers remain to be confirmed.',
    category: 'general',
  },
  {
    id: 'what-is-escale',
    question: 'Qu\'est-ce qu\'Escale Urbaine ?',
    questionEn: 'What is Escale Urbaine?',
    answer:
      "Escale Urbaine est l'expérience phare de Tourism'Tour. Les éditions I (2023), II (2024), III (2025) et IV (Grand-Popo, 27–28 juin 2026) ont déjà eu lieu. Lors de l'édition IV, les activités proposées ont notamment compris une démonstration de Zangbéto, une traversée du fleuve en barque motorisée, la découverte de la production de sel, une halte à la Bouche du Roy, le refuge des tortues marines, un atelier de tressage de nattes et une soirée artistique. La page dédiée en détaille davantage.",
    answerEn:
      "Escale Urbaine is Tourism'Tour's flagship experience. Editions I (2023), II (2024), III (2025) and IV (Grand-Popo, 27–28 June 2026) have already taken place. At edition IV, the activities offered included a Zangbéto demonstration, a river crossing by motorised boat, discovering salt production, a stop at the Bouche du Roy, the sea turtle refuge, a mat-weaving workshop and an artistic evening. The dedicated page gives more detail.",
    category: 'experiences',
  },
  {
    id: 'past-editions',
    question: 'Où voir les éditions précédentes ?',
    questionEn: 'Where can I see previous editions?',
    answer:
      "Les photos d'Escale Urbaine I (2023), II (2024) et III (2025) sont réunies sur la page Nos éditions. Les photos de l'édition IV seront ajoutées dès qu'elles seront disponibles.",
    answerEn:
      'Photos of Escale Urbaine I (2023), II (2024) and III (2025) are gathered on the Our editions page. Photos of edition IV will be added once they are available.',
    category: 'experiences',
  },
  {
    id: 'next-edition',
    question: 'Quand aura lieu la prochaine édition ?',
    questionEn: 'When is the next edition?',
    answer:
      "Les dates de la prochaine édition sont à confirmer. Contactez-nous pour être informé(e) ou pour poser vos questions.",
    answerEn:
      'The dates of the next edition are to be confirmed. Contact us to be kept informed or to ask any questions.',
    category: 'experiences',
  },
  {
    id: 'how-to-join',
    question: 'Comment participer ou demander un devis ?',
    questionEn: 'How do I take part or request a quote?',
    answer:
      "Remplissez le formulaire de contact, écrivez-nous à tourismtour100624@gmail.com ou appelez le +229 62 69 86 24. Indiquez-nous votre projet : nous reviendrons vers vous. Le délai de réponse exact est à confirmer.",
    answerEn:
      'Fill in the contact form, email us at tourismtour100624@gmail.com or call +229 62 69 86 24. Tell us about your plans and we will get back to you. The exact response time is to be confirmed.',
    category: 'booking',
  },
  {
    id: 'prices',
    question: 'Quels sont les tarifs, et que comprennent-ils ?',
    questionEn: 'What are the prices, and what is included?',
    answer:
      "Les tarifs, les prestations incluses et les conditions de participation (y compris d'annulation) sont à confirmer. Contactez-nous pour demander un devis.",
    answerEn:
      'Prices, what is included and participation conditions (including cancellation) are to be confirmed. Contact us to request a quote.',
    category: 'booking',
  },
  {
    id: 'payment',
    question: 'Quels moyens de paiement acceptez-vous ?',
    questionEn: 'What payment methods do you accept?',
    answer:
      "Les modalités de paiement (moyens acceptés, acompte, devise) sont à confirmer. Nous vous les indiquerons lorsque vous nous contacterez au sujet d'un devis.",
    answerEn:
      'Payment arrangements (accepted methods, deposit, currency) are to be confirmed. We will share them with you when you contact us about a quote.',
    category: 'booking',
  },
  {
    id: 'visa',
    question: 'Ai-je besoin d\'un visa pour le Bénin ?',
    questionEn: 'Do I need a visa for Benin?',
    answer:
      "Les conditions d'entrée dépendent de votre nationalité et peuvent évoluer. Consultez les informations officielles du gouvernement béninois, ou l'ambassade ou le consulat du Bénin le plus proche, bien avant le départ. Une éventuelle aide de notre part (par exemple une lettre d'invitation) est à confirmer : contactez-nous.",
    answerEn:
      "Entry requirements depend on your nationality and can change. Check official information from the Beninese government, or the nearest embassy or consulate of Benin, well before departure. Any help we might provide (for example an invitation letter) is to be confirmed: contact us.",
    category: 'practical',
  },
  {
    id: 'health',
    question: 'Quels vaccins ou précautions santé sont nécessaires ?',
    questionEn: 'What vaccinations or health precautions are needed?',
    answer:
      "Consultez un médecin ou un centre de médecine des voyages plusieurs semaines avant le départ. Le paludisme est présent au Bénin : renseignez-vous sur la prévention. Un justificatif de vaccination contre la fièvre jaune est couramment demandé dans cette région, mais l'exigence officielle est à vérifier pour votre itinéraire. Tourism'Tour ne remplace pas un avis médical.",
    answerEn:
      "Consult a doctor or a travel clinic several weeks before departure. Malaria is present in Benin: ask about prevention. Proof of yellow fever vaccination is commonly requested in this region, but you should confirm the official requirement for your itinerary. Tourism'Tour does not replace medical advice.",
    category: 'practical',
  },
  {
    id: 'best-time',
    question: 'Quelle est la meilleure période pour venir ?',
    questionEn: 'What is the best time to visit?',
    answer:
      "Le climat diffère entre le sud et le nord du pays, et les saisons influencent le confort et l'état des routes. La meilleure période dépend de votre destination et de vos envies. Les dates de nos prochaines expériences sont à confirmer : indiquez-nous vos disponibilités, nous en discuterons avec vous.",
    answerEn:
      'The climate differs between the south and the north of the country, and the seasons affect comfort and road conditions. The best period depends on your destination and what you want to do. The dates of our next experiences are to be confirmed: tell us your availability and we will discuss it with you.',
    category: 'practical',
  },
];

export function getFAQItems(): FAQItem[] {
  return faqItems;
}

export function getFAQByCategory(category: FAQItem['category']): FAQItem[] {
  return faqItems.filter((item) => item.category === category);
}
