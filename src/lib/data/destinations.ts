// Villes à découvrir avec Tourism'Tour (page « À découvrir »).
// Volontairement SANS durée, programme ni tarif : la visite se construit sur demande.
// Les descriptions ne présentent que des faits publics sur chaque ville
// (recoupés avec benintourisme.bj, reformulés : les textes et photos de ce site
// sont protégés et ne doivent pas être copiés).

export interface PhotoCredit {
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

export interface Destination {
  slug: string;
  name: string;
  region: { fr: string; en: string };
  image?: string;
  imageAlt: { fr: string; en: string };
  /** Obligatoire pour les photos sous licence libre (ex. Wikimedia Commons, CC BY-SA). */
  credit?: PhotoCredit;
  summary: { fr: string; en: string };
  highlights: { fr: string; en: string }[];
  /** Lien vers une page interne liée (ex. Escale Urbaine à Grand-Popo) */
  related?: { href: string; label: { fr: string; en: string } };
}

export const destinations: Destination[] = [
  {
    slug: 'ouidah',
    name: 'Ouidah',
    region: { fr: 'Atlantique · Côte', en: 'Atlantique · Coast' },
    image: '/images/Ouidah.jpeg',
    imageAlt: { fr: 'Entrée de la forêt sacrée de Kpassè à Ouidah', en: "Entrance to Kpassè's sacred forest in Ouidah" },
    summary: {
      fr: "Cœur historique et spirituel du Bénin, Ouidah est un haut lieu du vodoun et de la mémoire de la traite transatlantique. Entre maisons afro-brésiliennes et façades coloniales, la ville accueille chaque année en janvier les Vodun Days.",
      en: "The historic and spiritual heart of Benin, Ouidah is a major centre of Vodun and of the memory of the transatlantic slave trade. Between Afro-Brazilian houses and colonial façades, the town hosts the Vodun Days every January.",
    },
    highlights: [
      { fr: 'La Route des Esclaves, jusqu\'à la Porte du Non-Retour', en: 'The Slave Route, down to the Door of No Return' },
      { fr: 'Le Temple des Pythons', en: 'The Python Temple' },
      { fr: 'La forêt sacrée de Kpassè', en: "Kpassè's sacred forest" },
      { fr: 'Les maisons afro-brésiliennes du centre-ville', en: 'The Afro-Brazilian houses of the town centre' },
    ],
  },
  {
    slug: 'ganvie',
    name: 'Ganvié',
    region: { fr: 'Sô-Ava · Lac Nokoué', en: 'Sô-Ava · Lake Nokoué' },
    image: '/images/Ganvie.jpeg',
    imageAlt: { fr: 'Maison sur pilotis à Ganvié', en: 'Stilt house in Ganvié' },
    summary: {
      fr: "À quelques minutes de Cotonou, Ganvié est un village entièrement bâti sur pilotis au milieu du lac Nokoué. Surnommée « la Venise de l'Afrique », elle est habitée par les Tofinu, dont la vie s'organise autour de la pêche et de la pirogue.",
      en: "A short trip from Cotonou, Ganvié is a village built entirely on stilts in the middle of Lake Nokoué. Nicknamed \"the Venice of Africa\", it is home to the Tofinu people, whose life revolves around fishing and canoes.",
    },
    highlights: [
      { fr: 'Les rues d\'eau du village en pirogue', en: "The village's water streets by canoe" },
      { fr: 'Le marché flottant', en: 'The floating market' },
      { fr: 'La balade sur le lac Nokoué', en: 'A trip across Lake Nokoué' },
      { fr: 'La vie quotidienne des pêcheurs tofinu', en: 'Daily life of the Tofinu fishermen' },
    ],
  },
  {
    slug: 'abomey',
    name: 'Abomey',
    region: { fr: 'Zou · Centre', en: 'Zou · Centre' },
    image: '/images/Abomey.jpeg',
    imageAlt: { fr: "Palais royaux d'Abomey", en: 'Royal Palaces of Abomey' },
    summary: {
      fr: "Ancienne capitale du royaume du Danxomè, l'un des plus puissants d'Afrique de l'Ouest, Abomey en fut pendant des siècles le centre politique, culturel et spirituel. Ses rois, ses palais et ses guerrières, les Amazones, ont façonné son histoire.",
      en: 'Former capital of the Kingdom of Dahomey, one of the most powerful in West Africa, Abomey was for centuries its political, cultural and spiritual centre. Its kings, palaces and women warriors, the Amazons, shaped its history.',
    },
    highlights: [
      { fr: "Les palais royaux d'Abomey, inscrits au patrimoine mondial de l'UNESCO", en: 'The Royal Palaces of Abomey, a UNESCO World Heritage Site' },
      { fr: 'La place Goho', en: 'Goho Square' },
      { fr: "L'histoire des rois du Danxomè et des Amazones", en: 'The history of the kings of Dahomey and the Amazons' },
      { fr: "Les bas-reliefs et l'artisanat local", en: 'Bas-reliefs and local crafts' },
    ],
  },
  {
    slug: 'grand-popo',
    name: 'Grand-Popo',
    region: { fr: 'Mono · Côte', en: 'Mono · Coast' },
    image: '/images/destinations/grand-popo-bouche-du-roy.jpg',
    imageAlt: { fr: 'Barque motorisée à la Bouche du Roy, sur le fleuve Mono', en: 'Motorboat at the Bouche du Roy, on the Mono river' },
    credit: {
      author: 'Minyimin',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Barque_motoris%C3%A9e_%C3%A0_la_bouche_du_Roy_sur_le_fleuve_Mono.jpg',
    },
    summary: {
      fr: "Entre l'océan Atlantique, le fleuve Mono et ses lagunes, Grand-Popo offre de longues plages, des mangroves, des cocoteraies et des villages de pêcheurs. C'est aussi la ville d'Escale Urbaine IV.",
      en: 'Between the Atlantic Ocean, the Mono river and its lagoons, Grand-Popo offers long beaches, mangroves, coconut groves and fishing villages. It is also the home of Escale Urbaine IV.',
    },
    highlights: [
      { fr: "La Bouche du Roy, où le fleuve Mono rejoint l'océan", en: 'The Bouche du Roy, where the Mono river meets the ocean' },
      { fr: 'Les plages et les cocoteraies', en: 'Beaches and coconut groves' },
      { fr: "Le village de pêcheurs d'Avlo", en: 'The fishing village of Avlo' },
      { fr: 'La Villa Karo, lieu culturel', en: 'Villa Karo, a cultural venue' },
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
