// Villes à découvrir avec Tourism'Tour (page « À découvrir »).
// Volontairement SANS durée, programme ni tarif : la visite se construit sur demande.
// Les descriptions ne présentent que des faits publics et connus sur chaque ville.
// La mention « avec nous » repose sur la décision de l'agence de proposer ces villes.

export interface Destination {
  slug: string;
  name: string;
  region: { fr: string; en: string };
  image?: string;
  imageAlt: { fr: string; en: string };
  summary: { fr: string; en: string };
  highlights: { fr: string; en: string }[];
  /** Lien vers une page interne liée (ex. Escale Urbaine à Grand-Popo) */
  related?: { href: string; label: { fr: string; en: string } };
}

export const destinations: Destination[] = [
  {
    slug: 'ouidah',
    name: 'Ouidah',
    region: { fr: 'Sud · Atlantique', en: 'South · Atlantique' },
    image: '/images/Ouidah.jpeg',
    imageAlt: { fr: 'Entrée de la forêt sacrée de Kpassè à Ouidah', en: "Entrance to Kpassè's sacred forest in Ouidah" },
    summary: {
      fr: "Ville d'histoire et de mémoire, Ouidah est l'un des hauts lieux de la culture vodoun et de la mémoire de la traite négrière.",
      en: 'A town of history and remembrance, Ouidah is one of the great centres of Vodun culture and of the memory of the slave trade.',
    },
    highlights: [
      { fr: 'La Route des Esclaves', en: 'The Slave Route' },
      { fr: 'La Porte du Non-Retour', en: 'The Door of No Return' },
      { fr: 'La forêt sacrée de Kpassè', en: "Kpassè's sacred forest" },
      { fr: 'Le Temple des Pythons', en: 'The Python Temple' },
    ],
  },
  {
    slug: 'ganvie',
    name: 'Ganvié',
    region: { fr: 'Sud · Lac Nokoué', en: 'South · Lake Nokoué' },
    image: '/images/Ganvie.jpeg',
    imageAlt: { fr: 'Maison sur pilotis à Ganvié', en: 'Stilt house in Ganvié' },
    summary: {
      fr: "Surnommée « la Venise de l'Afrique », Ganvié est une cité lacustre bâtie sur pilotis au cœur du lac Nokoué, où la vie se déroule au fil de l'eau.",
      en: "Nicknamed \"the Venice of Africa\", Ganvié is a lake village built on stilts in the middle of Lake Nokoué, where daily life moves with the water.",
    },
    highlights: [
      { fr: 'Les maisons sur pilotis', en: 'Houses on stilts' },
      { fr: 'Balade en pirogue sur le lac Nokoué', en: 'Canoe ride on Lake Nokoué' },
      { fr: 'La vie quotidienne et la pêche sur le lac', en: 'Daily life and fishing on the lake' },
    ],
  },
  {
    slug: 'abomey',
    name: 'Abomey',
    region: { fr: 'Centre · Zou', en: 'Centre · Zou' },
    image: '/images/Abomey.jpeg',
    imageAlt: { fr: "Palais royaux d'Abomey", en: 'Royal Palaces of Abomey' },
    summary: {
      fr: "Ancienne capitale du royaume du Danxomè, Abomey conserve les palais royaux, inscrits au patrimoine mondial de l'UNESCO, et l'histoire de ses rois et de ses amazones.",
      en: 'Former capital of the Kingdom of Dahomey, Abomey preserves its Royal Palaces, a UNESCO World Heritage Site, and the history of its kings and Amazon warriors.',
    },
    highlights: [
      { fr: "Les palais royaux d'Abomey (UNESCO)", en: 'The Royal Palaces of Abomey (UNESCO)' },
      { fr: "L'histoire des rois du Danxomè", en: 'The history of the kings of Dahomey' },
      { fr: "Les bas-reliefs et l'artisanat local", en: 'Bas-reliefs and local crafts' },
    ],
  },
  {
    slug: 'grand-popo',
    name: 'Grand-Popo',
    region: { fr: 'Sud · Mono', en: 'South · Mono' },
    imageAlt: { fr: 'Grand-Popo', en: 'Grand-Popo' },
    summary: {
      fr: "Entre l'océan et le fleuve Mono, Grand-Popo est la ville d'Escale Urbaine IV. Traditions, nature, artisanat et détente au bord de la mer.",
      en: 'Between the ocean and the Mono river, Grand-Popo is the home of Escale Urbaine IV, with traditions, nature, crafts and relaxing by the sea.',
    },
    highlights: [
      { fr: 'La Bouche du Roy', en: 'The Bouche du Roy' },
      { fr: 'Le refuge des tortues marines', en: 'The sea turtle refuge' },
      { fr: 'La production de sel', en: 'Salt production' },
      { fr: 'Les Zangbéto, gardiens de la nuit', en: 'The Zangbéto, guardians of the night' },
    ],
    related: {
      href: '/experiences/escale-urbaine',
      label: { fr: 'Voir Escale Urbaine', en: 'See Escale Urbaine' },
    },
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
