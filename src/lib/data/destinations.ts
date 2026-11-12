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
    slug: 'cotonou',
    name: 'Cotonou',
    region: { fr: 'Littoral · Côte', en: 'Littoral · Coast' },
    image: '/images/destinations/cotonou-plage.jpg',
    imageAlt: { fr: 'Front de mer de Cotonou', en: 'Cotonou seafront' },
    credit: {
      author: 'Alacoolwiki',
      license: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Plage_de_Cotonou_1.jpg',
    },
    summary: {
      fr: "Capitale économique du Bénin et principale porte d'entrée du pays par l'air et par la mer, Cotonou vibre au rythme de ses marchés, de sa scène artistique, de sa gastronomie et de son littoral.",
      en: "Benin's economic capital and the country's main gateway by air and sea, Cotonou lives to the rhythm of its markets, art scene, food and coastline.",
    },
    highlights: [
      { fr: "L'Esplanade de l'Amazone", en: 'The Amazon Esplanade' },
      { fr: 'Le Mur graffé du port et ses fresques monumentales', en: 'The graffiti wall of the port and its monumental murals' },
      { fr: 'Le grand marché Dantokpa', en: 'The great Dantokpa market' },
      { fr: 'Les plages, comme Fidjrossè', en: 'The beaches, such as Fidjrossè' },
    ],
  },
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
    slug: 'porto-novo',
    name: 'Porto-Novo',
    region: { fr: 'Ouémé · Sud-Est', en: 'Ouémé · South-East' },
    image: '/images/destinations/porto-novo-grande-mosquee.jpg',
    imageAlt: { fr: 'Grande Mosquée afro-brésilienne de Porto-Novo', en: 'Afro-Brazilian Great Mosque of Porto-Novo' },
    credit: {
      author: 'Caroline Léna Becker',
      license: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Grande_Mosquee_de_Porto-Novo.jpg',
    },
    summary: {
      fr: "Capitale politique du Bénin, à quelques kilomètres de Cotonou, Porto-Novo porte l'empreinte de multiples influences, notamment afro-brésiliennes, visibles dans ses façades colorées, ses musées et ses traditions vivantes.",
      en: "Benin's political capital, a short distance from Cotonou, Porto-Novo bears the mark of many influences, notably Afro-Brazilian, seen in its colourful façades, museums and living traditions.",
    },
    highlights: [
      { fr: "La Grande Mosquée afro-brésilienne, inspirée de l'architecture brésilienne", en: 'The Afro-Brazilian Great Mosque, inspired by Brazilian architecture' },
      { fr: 'Le Jardin des Plantes et de la Nature', en: 'The Garden of Plants and Nature' },
      { fr: "La Rivière Noire d'Adjarra, en pirogue", en: 'The Black River of Adjarra, by canoe' },
      { fr: 'Le Festival des Masques', en: 'The Festival of Masks' },
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
    slug: 'dassa-zoume',
    name: 'Dassa-Zoumè',
    region: { fr: 'Collines · Centre', en: 'Collines · Centre' },
    image: '/images/destinations/dassa-zoume-collines.jpg',
    imageAlt: { fr: 'Collines rocheuses de Dassa-Zoumè', en: 'Rocky hills of Dassa-Zoumè' },
    credit: {
      author: 'Rachad sanoussi',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Collines_de_Dassa.jpg',
    },
    summary: {
      fr: "Dominée par des collines rocheuses chargées de légendes, Dassa-Zoumè attire randonneurs et amoureux de la nature, mais aussi de nombreux pèlerins venus chaque année à la grotte mariale d'Arigbo.",
      en: "Overlooked by rocky hills full of legends, Dassa-Zoumè draws hikers and nature lovers, as well as many pilgrims who come each year to the Marian grotto of Arigbo.",
    },
    highlights: [
      { fr: 'Les collines de Dassa, pour la randonnée', en: 'The hills of Dassa, for hiking' },
      { fr: "La grotte mariale Notre-Dame d'Arigbo, haut lieu de pèlerinage", en: 'The Marian grotto of Our Lady of Arigbo, a major pilgrimage site' },
      { fr: "La Pierre fendue d'Okèytè", en: 'The split rock of Okèytè' },
    ],
  },
  {
    slug: 'natitingou',
    name: 'Natitingou',
    region: { fr: 'Atacora · Nord', en: 'Atacora · North' },
    image: '/images/destinations/natitingou-tata-somba.jpg',
    imageAlt: { fr: 'Tata somba (tata bètammaribè) près de Natitingou', en: 'Tata somba (Betammaribe tower house) near Natitingou' },
    credit: {
      author: 'Rachad sanoussi',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Des_tata_somba_Natitingou.jpg',
    },
    summary: {
      fr: "Au pied de la chaîne de l'Atacora, dans le nord du Bénin, Natitingou est la porte de la nature et de l'aventure : architecture traditionnelle des Bètammaribè, cascades, et départ vers le parc national de la Pendjari.",
      en: 'At the foot of the Atacora range in northern Benin, Natitingou is the gateway to nature and adventure: traditional Betammaribe architecture, waterfalls, and the starting point for Pendjari National Park.',
    },
    highlights: [
      { fr: 'Les tata bètammaribè (tata somba), maisons-forteresses traditionnelles', en: 'The Betammaribe tata (tata somba), traditional fortified houses' },
      { fr: 'Les chutes de Kota', en: 'The Kota waterfalls' },
      { fr: 'Le musée régional de Natitingou', en: 'The Natitingou regional museum' },
      { fr: 'Le parc national de la Pendjari, l\'une des plus grandes réserves de faune d\'Afrique de l\'Ouest', en: "Pendjari National Park, one of West Africa's largest wildlife reserves" },
    ],
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
