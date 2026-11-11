// Faits vérifiés uniquement (page Facebook, TikTok @tourismtour4, affiches — relevés le 11/11/2026).
// Aucune date de prochaine édition, aucun tarif, aucune prestation incluse n'est connu : à confirmer.

export const escaleUrbaine = {
  name: 'Escale Urbaine',
  act: 'Acte IV',
  place: 'Grand-Popo',
  dates: { fr: '27–28 juin 2026', en: '27–28 June 2026' },
  // Activités vues dans les posts de l'édition 2026 (liste exhaustive des faits connus).
  activities: [
    { id: 'zangbeto', fr: 'Démonstration de Zangbéto (les gardiens de la nuit)', en: 'Zangbéto demonstration (the guardians of the night)' },
    { id: 'river', fr: 'Traversée du fleuve en barque motorisée', en: 'River crossing by motorised boat' },
    { id: 'salt', fr: 'Découverte de la production de sel', en: 'Discovering salt production' },
    { id: 'bouche', fr: 'Halte à la Bouche du Roy', en: 'Stop at the Bouche du Roy' },
    { id: 'turtles', fr: 'Refuge des tortues marines', en: 'Sea turtle refuge' },
    { id: 'aglan', fr: 'Immersion à Aglan Safari (toffees à base de coco)', en: 'Immersion at Aglan Safari (coconut toffees)' },
    { id: 'mats', fr: 'Atelier de tressage de nattes', en: 'Mat-weaving workshop' },
    { id: 'training', fr: 'Matinée de formation', en: 'Morning training session' },
    { id: 'evening', fr: 'Soirée artistique (musique, performances)', en: 'Artistic evening (music, performances)' },
    { id: 'football', fr: 'Football sur la plage', en: 'Beach football' },
    { id: 'relax', fr: 'Détente au bord de la mer', en: 'Relaxing by the sea' },
  ],
  partners: ['Nova Juice and Food', 'Akpan House', 'Djélibah', 'La Nouvelle laverie'],
};

/**
 * Programme-type sur 2 jours : simple répartition des activités ci-dessus.
 * L'ORDRE et le découpage par jour sont une proposition de présentation,
 * pas un horaire officiel : à faire valider (voir INFOS_A_COLLECTER.md).
 */
export const sampleProgramme: { day: { fr: string; en: string }; items: string[] }[] = [
  { day: { fr: 'Jour 1', en: 'Day 1' }, items: ['training', 'river', 'zangbeto', 'evening'] },
  { day: { fr: 'Jour 2', en: 'Day 2' }, items: ['salt', 'bouche', 'turtles', 'aglan', 'mats', 'football', 'relax'] },
];
