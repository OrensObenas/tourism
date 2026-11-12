// Contenu détaillé des pages /destinations/[slug].
// Faits : uniquement ceux des dossiers de recherche vérifiés, reformulés.
// Volontairement SANS prix, durée, programme ni promesse de service.
import { getDestinationBySlug, type PhotoCredit } from './destinations';

export type Bilingual<T = string> = { fr: T; en: T };

export interface DetailPhoto {
  src: string;
  alt: Bilingual;
  caption: Bilingual;
  /** Absent pour les photos propres au site (aucun crédit connu : ne rien inventer). */
  credit?: PhotoCredit;
}

export interface DetailSource {
  label: string;
  url: string;
}

export interface DestinationDetail {
  slug: string;
  intro: Bilingual;
  history: Bilingual<string[]>;
  tells: Bilingual<string[]>;
  places: { name: Bilingual; description: Bilingual }[];
  culture: Bilingual<string[]>;
  /** Uniquement des repères sourcés dans les dossiers. */
  goodToKnow?: Bilingual<string[]>;
  hero: DetailPhoto;
  /** Galerie (hors hero). */
  gallery: DetailPhoto[];
  sources: DetailSource[];
  neighbors: string[];
}

// Photo déjà utilisée sur /destinations : mêmes crédits que dans destinations.ts.
function existingPhoto(slug: string, caption?: Bilingual): DetailPhoto {
  const d = getDestinationBySlug(slug);
  if (!d || !d.image) throw new Error(`Photo manquante pour ${slug}`);
  return { src: d.image, alt: d.imageAlt, caption: caption ?? d.imageAlt, credit: d.credit };
}

// Photo propre au site (sans crédit connu).
function sitePhoto(slug: string): DetailPhoto {
  return existingPhoto(slug);
}

const WIKI = 'https://commons.wikimedia.org/wiki/File:';
const CC = {
  by2: ['CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0/'],
  sa3: ['CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/'],
  sa4: ['CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  cc0: ['CC0', 'https://creativecommons.org/publicdomain/zero/1.0/'],
} as const;

function photo(
  src: string,
  fr: string,
  en: string,
  author: string,
  lic: keyof typeof CC,
  file: string,
  captionFr = fr,
  captionEn = en,
): DetailPhoto {
  return {
    src,
    alt: { fr, en },
    caption: { fr: captionFr, en: captionEn },
    credit: { author, license: CC[lic][0], licenseUrl: CC[lic][1], sourceUrl: WIKI + file },
  };
}

const D = '/images/destinations';

export const destinationDetails: DestinationDetail[] = [
  // ───────────────────────── COTONOU ─────────────────────────
  {
    slug: 'cotonou',
    intro: {
      fr: "Entre l'océan Atlantique et le lac Nokoué, Cotonou est la plus grande ville du Bénin, sa capitale économique et la porte d'entrée du pays par l'air et par la mer. Ville jeune, elle mêle marchés immenses, mémoire nationale mise en scène dans l'espace public et scène artistique contemporaine.",
      en: "Between the Atlantic Ocean and Lake Nokoué, Cotonou is Benin's largest city, its economic capital and the country's gateway by air and sea. A young city, it blends vast markets, national memory staged in public space, and a lively contemporary art scene.",
    },
    history: {
      fr: [
        "Le nom fon Kútɔ̀nú est généralement traduit par « l'embouchure (ou la lagune) du fleuve de la mort ». Avant le XVIIe siècle, la bande de sable entre le lac et l'océan était une zone peu hospitalière, faite de brousse et de marécages ; à partir du milieu du XVIIe siècle, des hameaux xwla et tofinu s'y installent.",
        "Au début du XIXe siècle, Cotonou n'est encore qu'un petit village de pêcheurs. Le roi Guézo du Dahomey y établit un comptoir vers 1830, date souvent retenue pour la fondation de la ville. En 1851, un traité franco-dahoméen autorise un comptoir français ; en 1878, le territoire de Cotonou est cédé à la France sous le roi Glèlè, et la marine française l'occupe en 1883.",
        "La ville se développe rapidement avec la construction du wharf, puis du port en eau profonde. Aujourd'hui, elle concentre l'essentiel des institutions gouvernementales, même si la capitale officielle du pays reste Porto-Novo.",
      ],
      en: [
        "The Fon name Kútɔ̀nú is generally translated as “the mouth (or lagoon) of the river of death”. Before the 17th century, the strip of sand between lake and ocean was an unwelcoming area of scrub and marshland; from the mid-17th century, Xwla and Tofinu hamlets settled there.",
        "In the early 19th century, Cotonou was still a small fishing village. King Guézo of Dahomey set up a trading post there around 1830, a date often given for the town's founding. In 1851 a Franco-Dahomean treaty allowed a French trading post; in 1878 the Cotonou territory was ceded to France under King Glèlè, and the French navy occupied it in 1883.",
        "The city grew quickly with the building of the wharf, then the deep-water port. Today it hosts most of the government institutions, although the country's official capital remains Porto-Novo.",
      ],
    },
    tells: {
      fr: [
        "Cotonou est une ville née du commerce atlantique puis colonial. Elle est devenue la porte d'entrée du pays et le cœur de sa scène artistique contemporaine.",
        "La mémoire nationale y est mise en scène dans l'espace public, à travers l'hommage aux Amazones ou celui rendu à Bio Guera. La ville est aussi confrontée à l'érosion côtière : selon un projet du PNUE, la côte à l'est de la ville a reculé d'environ 400 m en 40 ans.",
      ],
      en: [
        "Cotonou is a city born of Atlantic, then colonial, trade. It became the country's gateway and the heart of its contemporary art scene.",
        "National memory is staged in public space here, through the tribute to the Amazons and the one to Bio Guera. The city also faces coastal erosion: according to a UNEP project, the coastline east of the city has retreated by about 400 m in 40 years.",
      ],
    },
    places: [
      {
        name: { fr: 'Le marché Dantokpa', en: 'Dantokpa market' },
        description: {
          fr: "Présenté comme le plus grand marché à ciel ouvert d'Afrique de l'Ouest, construit en 1963. Son nom signifie en fon « au bord de la lagune de Dan », Dan étant la divinité serpent de la prospérité.",
          en: 'Presented as the largest open-air market in West Africa, built in 1963. Its name means “beside the lagoon of Dan” in Fon, Dan being the serpent deity of prosperity.',
        },
      },
      {
        name: { fr: "L'Esplanade de l'Amazone", en: 'The Amazon Esplanade' },
        description: {
          fr: "Sur le boulevard de la Marina, une statue de bronze d'environ 30 m rend hommage aux Agojié, guerrières du Danxomè. Elle a été inaugurée en 2022.",
          en: 'On the Marina boulevard, a bronze statue about 30 m tall pays tribute to the Agojié, women warriors of Dahomey. It was inaugurated in 2022.',
        },
      },
      {
        name: { fr: 'Le Monument Bio Guera', en: 'The Bio Guera Monument' },
        description: {
          fr: 'Un hommage à ce chef de guerre du nord du Bénin qui résista à la conquête coloniale française à la fin du XIXe siècle.',
          en: 'A tribute to this war leader from northern Benin who resisted the French colonial conquest in the late 19th century.',
        },
      },
      {
        name: { fr: 'Le Mur graffé du port', en: "The port's graffiti wall" },
        description: {
          fr: "Plusieurs centaines de mètres de fresques d'artistes béninois et internationaux sur l'enceinte du Port autonome. À voir de préférence tôt le matin (vers 7 h) ou après 17 h.",
          en: "Several hundred metres of murals by Beninese and international artists on the wall of the Autonomous Port. Best seen early in the morning (around 7 am) or after 5 pm.",
        },
      },
      {
        name: { fr: 'La Fondation Zinsou', en: 'The Zinsou Foundation' },
        description: {
          fr: "Créée en 2005 à Cotonou, c'est la première structure béninoise consacrée à l'art contemporain.",
          en: 'Created in 2005 in Cotonou, it is the first Beninese institution devoted to contemporary art.',
        },
      },
      {
        name: { fr: 'Les plages', en: 'The beaches' },
        description: {
          fr: "Le littoral de Cotonou compte plusieurs plages, comme celle de Fidjrossè.",
          en: "Cotonou's coastline has several beaches, such as Fidjrossè.",
        },
      },
    ],
    culture: {
      fr: [
        "Cotonou est le cœur de la scène artistique contemporaine du pays : fresques monumentales sur les murs du port, Fondation Zinsou, statues et monuments qui rappellent l'histoire du Danxomè et de la résistance coloniale.",
        "Le marché Dantokpa, lui, raconte une autre facette de la ville : celle du commerce et de la vie quotidienne, à travers une toponymie qui renvoie à Dan, divinité serpent de la prospérité.",
      ],
      en: [
        "Cotonou is the heart of the country's contemporary art scene: monumental murals on the port walls, the Zinsou Foundation, and statues and monuments recalling the history of Dahomey and of colonial resistance.",
        "Dantokpa market tells another side of the city: that of trade and everyday life, through a place name that refers to Dan, the serpent deity of prosperity.",
      ],
    },
    goodToKnow: {
      fr: ["Deux saisons des pluies (environ avril–juillet et septembre–octobre) et deux saisons sèches ; l'harmattan souffle en décembre–janvier."],
      en: ['Two rainy seasons (roughly April–July and September–October) and two dry seasons; the harmattan blows in December–January.'],
    },
    hero: existingPhoto('cotonou'),
    gallery: [
      photo(`${D}/cotonou/cotonou-dantokpa.jpg`, 'Le marché Dantokpa, à Cotonou (2013)', 'Dantokpa market, Cotonou (2013)', 'jbdodane', 'by2', 'March%C3%A9_DANTOKPA.jpg'),
      photo(`${D}/cotonou/cotonou-plage-fidjrosse.jpg`, 'La plage de Fidjrossè, à Cotonou', 'Fidjrossè beach, Cotonou', 'MyLady333', 'cc0', 'La_plage_Fidjross%C3%A8_%C3%A0_Cotonou_au_B%C3%A9nin.jpg'),
      photo(`${D}/cotonou/cotonou-centre-ville.jpg`, 'Le centre-ville de Cotonou', 'Downtown Cotonou', 'Darios Djossè seyram ADOME', 'sa4', 'Cotonou_Centre_ville.jpg'),
    ],
    sources: [
      { label: 'Wikipédia (FR) – Cotonou', url: 'https://fr.wikipedia.org/wiki/Cotonou' },
      { label: 'Wikipedia (EN) – Cotonou', url: 'https://en.wikipedia.org/wiki/Cotonou' },
      { label: 'Wikipédia (FR) – Marché Dantokpa', url: 'https://fr.wikipedia.org/wiki/March%C3%A9_Dantokpa' },
      { label: 'Wikipédia (FR) – Fondation Zinsou', url: 'https://fr.wikipedia.org/wiki/Fondation_Zinsou' },
      { label: 'Bénin Tourisme – Cotonou', url: 'https://benintourisme.bj/villes/cotonou/' },
      { label: "Bénin Tourisme – L'Esplanade de l'Amazone", url: 'https://benintourisme.bj/destinations/lesplanade-de-lamazone/' },
      { label: 'Bénin Tourisme – Le Monument Bio Guera', url: 'https://benintourisme.bj/destinations/le-monument-bio-guera/' },
      { label: 'Bénin Tourisme – Le Mur graffé du port', url: 'https://benintourisme.bj/destinations/le-mur-graffe-du-port/' },
    ],
    neighbors: ['ganvie', 'porto-novo', 'ouidah'],
  },

  // ───────────────────────── OUIDAH ─────────────────────────
  {
    slug: 'ouidah',
    intro: {
      fr: "À une quarantaine de kilomètres à l'ouest de Cotonou, Ouidah est un lieu de mémoire et de spiritualité. Elle fut l'un des principaux points d'embarquement de captifs de la traite atlantique, et elle est souvent considérée comme la capitale spirituelle du vodun.",
      en: "About 42 km west of Cotonou, Ouidah is a place of memory and spirituality. It was one of the main embarkation points for captives of the Atlantic slave trade, and it is often regarded as the spiritual capital of Vodun.",
    },
    history: {
      fr: [
        "Selon la tradition locale, la ville aurait été fondée par Kpassè, vraisemblablement vers la fin du XVIe siècle. Elle s'appelait alors Glexwé (« la maison de la ferme ») et faisait partie du royaume de Xwéda. Le nom « Ouidah » est une variante de « Houéda », nom du royaume, appliqué à la ville par les Européens.",
        "Ouidah n'est pas un port : elle se trouve à environ 3,5 km de la côte, séparée de l'océan par une lagune, et les navires restaient au large. À la fin du XVIIe et au XVIIIe siècle, Anglais, Français et Portugais y installent des comptoirs fortifiés ; le fort portugais Saint-Jean-Baptiste d'Ajuda est construit à partir de 1721 sur un terrain cédé par le roi Haffon de Xwéda.",
        "En 1727, le roi Agaja du Danxomè conquiert le royaume de Xwéda ; Ouidah reste sous l'autorité du Dahomey jusqu'à la colonisation française, en 1894. Au XVIIIe siècle, la ville fut l'un des principaux lieux de vente et d'embarquement de captifs : sur environ onze millions d'Africains déportés, près de deux millions sont partis de la baie du Bénin, dont 60 % par Ouidah et Lagos. Ces captifs n'étaient pas originaires de la ville : ils étaient amenés de l'intérieur. Le Clotilda, dernier navire négrier à destination des États-Unis (110 captifs, 1860), est parti de Ouidah.",
        "Au XIXe siècle, d'anciens esclaves affranchis reviennent du Brésil ; avec des descendants de marchands comme les de Souza, ils forment la communauté « Agouda », qui conserve un héritage brésilien (cuisine, architecture, noms). À partir des années 1830, le commerce de l'huile de palme prend le relais, puis Ouidah décline au profit de Cotonou, mieux desservi par le port.",
      ],
      en: [
        "According to local tradition, the town was founded by Kpassè, probably towards the end of the 16th century. It was then called Glexwé (“the house of the farm”) and was part of the Xwéda kingdom. The name “Ouidah” is a variant of “Houéda”, the kingdom's name, which Europeans applied to the town.",
        "Ouidah is not a port: it lies about 3.5 km from the coast, separated from the ocean by a lagoon, and ships stayed offshore. In the late 17th and 18th centuries the English, French and Portuguese set up fortified trading posts here; the Portuguese fort of São João Baptista de Ajudá was built from 1721 on land granted by King Haffon of Xwéda.",
        "In 1727 King Agaja of Dahomey conquered the Xwéda kingdom; Ouidah remained under Dahomey's authority until French colonisation in 1894. In the 18th century the town was one of the main places where captives were sold and embarked: of roughly eleven million Africans deported, nearly two million left from the Bight of Benin, 60% of them via Ouidah and Lagos. These captives did not come from the town itself: they were brought from the interior. The Clotilda, the last slave ship bound for the United States (110 captives, 1860), sailed from Ouidah.",
        "In the 19th century, freed former slaves returned from Brazil; together with descendants of merchants such as the de Souza family, they formed the “Agouda” community, which preserves a Brazilian heritage (cuisine, architecture, names). From the 1830s the palm oil trade took over, and Ouidah later declined in favour of Cotonou, better served by its port.",
      ],
    },
    tells: {
      fr: [
        "Ouidah porte la mémoire de la traite transatlantique. La Route des Esclaves, aujourd'hui appelée Route des Captifs, longe environ 4 km depuis le centre historique jusqu'à la plage. Ses étapes : le fort portugais, la place aux enchères (place Chacha), l'Arbre de l'Oubli, la case Zomaï, le mémorial de Zoungbodji, la Porte du Non-Retour et le Bateau de la Mémoire. Le tracé actuel est une reconstitution mémorielle des années 1990, réalisée dans le cadre du projet UNESCO « La Route de l'Esclave ».",
        "La Porte du Non-Retour, arche monumentale d'environ 17 m de haut face à l'Atlantique, a été érigée en 1995, puis reconstruite et agrandie en 2025 ; ses bas-reliefs montrent des captifs enchaînés marchant vers l'océan. Chaque 23 août, Journée internationale du souvenir de la traite négrière et de son abolition, des cérémonies ont lieu sur le parcours.",
        "Depuis le 24 février 2021, plusieurs lieux de Ouidah font partie du bien en série « Sites marquants de la Route de l'Esclave au Bénin », inscrit sur la liste indicative du patrimoine mondial de l'UNESCO (il n'est pas encore inscrit au patrimoine mondial).",
      ],
      en: [
        "Ouidah carries the memory of the transatlantic slave trade. The Slave Route, now called the Route of the Captives, runs about 4 km from the historic centre to the beach. Its stages: the Portuguese fort, the auction square (Chacha square), the Tree of Forgetting, the Zomaï hut, the Zoungbodji memorial, the Door of No Return and the Boat of Memory. The current route is a memorial reconstruction from the 1990s, carried out under the UNESCO “Slave Route” project.",
        "The Door of No Return, a monumental arch about 17 m high facing the Atlantic, was erected in 1995, then rebuilt and enlarged in 2025; its bas-reliefs show chained captives walking towards the ocean. Every 23 August, the International Day for the Remembrance of the Slave Trade and its Abolition, commemorations are held along the route.",
        "Since 24 February 2021, several sites in Ouidah have been part of the serial property “Landmark Sites of the Slave Route in Benin”, on UNESCO's World Heritage Tentative List (it is not yet a World Heritage Site).",
      ],
    },
    places: [
      {
        name: { fr: "Le musée d'histoire de Ouidah", en: 'The Ouidah History Museum' },
        description: {
          fr: "Installé dans le fort portugais Saint-Jean-Baptiste d'Ajuda (1721), il réunit environ 700 pièces (archéologie, histoire, arts). Le fort fut une enclave portugaise jusqu'en 1961.",
          en: 'Housed in the Portuguese fort of São João Baptista de Ajudá (1721), it holds about 700 pieces (archaeology, history, arts). The fort was a Portuguese enclave until 1961.',
        },
      },
      {
        name: { fr: 'Le Temple des Pythons', en: 'The Python Temple' },
        description: {
          fr: "Sanctuaire vodun en activité, avec un enclos de plusieurs dizaines de pythons royaux, vodun tutélaire de la ville. Il est possible, mais facultatif, de porter un python, non venimeux.",
          en: "A working Vodun sanctuary with an enclosure of several dozen royal pythons, the town's tutelary vodun. Holding a (non-venomous) python is possible but optional.",
        },
      },
      {
        name: { fr: "La basilique de l'Immaculée-Conception", en: 'The Basilica of the Immaculate Conception' },
        description: {
          fr: "Elle fait face au Temple des Pythons depuis plus d'un siècle, image de la coexistence religieuse à Ouidah.",
          en: 'It has faced the Python Temple for over a century, an image of religious coexistence in Ouidah.',
        },
      },
      {
        name: { fr: 'La forêt sacrée de Kpassè', en: 'Kpassè sacred forest' },
        description: {
          fr: "Un îlot de forêt au cœur de la ville, lié au roi Kpassè : selon la tradition orale, il se serait transformé en iroko, arbre sacré. On y trouve des statues de divinités vodun (Legba, Sakpata, Hêviosso, Gu, Mami Wata…).",
          en: 'A patch of forest in the heart of town, linked to King Kpassè: according to oral tradition, he turned into an iroko, a sacred tree. It holds statues of Vodun deities (Legba, Sakpata, Hêviosso, Gu, Mami Wata…).',
        },
      },
      {
        name: { fr: 'La Fondation Zinsou', en: 'The Zinsou Foundation' },
        description: {
          fr: "Son musée d'art contemporain, ouvert le 11 novembre 2013, prolonge à Ouidah la scène artistique du pays.",
          en: 'Its contemporary art museum, opened on 11 November 2013, extends the country\'s art scene to Ouidah.',
        },
      },
      {
        name: { fr: "L'Arène de Ouidah", en: 'The Ouidah Arena' },
        description: {
          fr: "Sur la plage, près de la Porte du Non-Retour, un nouvel équipement culturel, l'un des principaux lieux des Vodun Days.",
          en: 'On the beach near the Door of No Return, a new cultural venue and one of the main sites of the Vodun Days.',
        },
      },
    ],
    culture: {
      fr: [
        "Ouidah est souvent considérée comme la capitale spirituelle du vodun. La fête nationale du vodun a lieu le 10 janvier, instaurée dans les années 1990 et célébrée à Ouidah depuis 1998. Le festival Ouidah 92 (février 1993) en fut le précurseur.",
        "Les Vodun Days ont connu leur première édition les 9 et 10 janvier 2024, puis une seconde du 9 au 11 janvier 2025. Depuis une loi du 30 juillet 2024, la fête des religions traditionnelles a lieu le deuxième vendredi de janvier (jeudi et vendredi fériés).",
        "Le centre-ville conserve aussi des maisons afro-brésiliennes et des façades coloniales, traces de l'histoire de la communauté Agouda.",
      ],
      en: [
        "Ouidah is often regarded as the spiritual capital of Vodun. The national Vodun festival is held on 10 January, established in the 1990s and celebrated in Ouidah since 1998. The Ouidah 92 festival (February 1993) was its forerunner.",
        "The Vodun Days saw their first edition on 9–10 January 2024, and a second on 9–11 January 2025. Since a law of 30 July 2024, the traditional religions festival takes place on the second Friday of January (Thursday and Friday are public holidays).",
        "The town centre also keeps Afro-Brazilian houses and colonial façades, traces of the Agouda community's history.",
      ],
    },
    goodToKnow: {
      fr: [
        "La Route des Captifs se parcourt à pied, à vélo ou en véhicule ; un guide agréé est recommandé. Prévoir eau, chapeau et chaussures adaptées.",
        "À la Porte du Non-Retour, le lieu invite au recueillement : modérer le volume et éviter les mises en scène photo.",
      ],
      en: [
        'The Route of the Captives can be covered on foot, by bike or by vehicle; an approved guide is recommended. Bring water, a hat and suitable shoes.',
        'The Door of No Return is a place for quiet reflection: keep your voice down and avoid staged photos.',
      ],
    },
    hero: photo(`${D}/ouidah/ouidah-fort-portugais.jpg`, "Le fort portugais Saint-Jean-Baptiste d'Ajuda, aujourd'hui musée d'histoire de Ouidah", 'The Portuguese fort of São João Baptista de Ajudá, now the Ouidah History Museum', 'Bencas1', 'cc0', 'Fort_Portugais_-_Mus%C3%A9e_de_Ouidah.jpg'),
    gallery: [
      photo(`${D}/ouidah/ouidah-temple-des-pythons.jpg`, "L'entrée du Temple des Pythons", 'Entrance to the Python Temple', 'Ji-Elle', 'sa4', 'Entr%C3%A9e_du_Temple_des_Pythons_(Ouidah).jpg'),
      photo(`${D}/ouidah/ouidah-basilique.jpg`, "La basilique de l'Immaculée-Conception, face au Temple des Pythons", 'The Basilica of the Immaculate Conception, facing the Python Temple', 'MVN', 'by2', 'Basilica_of_Ouidah.jpg'),
      photo(`${D}/ouidah/ouidah-foret-kpasse.jpg`, 'La forêt sacrée de Kpassè', 'Kpassè sacred forest', 'Chiemelacebelae', 'cc0', 'For%C3%AAt_sacr%C3%A9e_de_Kpass%C3%A8_01.jpg'),
      sitePhoto('ouidah'),
    ],
    sources: [
      { label: 'Wikipédia (FR) – Ouidah', url: 'https://fr.wikipedia.org/wiki/Ouidah' },
      { label: 'Wikipedia (EN) – Ouidah', url: 'https://en.wikipedia.org/wiki/Ouidah' },
      { label: 'Bénin Tourisme – Ouidah', url: 'https://benintourisme.bj/villes/ouidah/' },
      { label: 'Bénin Tourisme – La Route des Captifs', url: 'https://benintourisme.bj/destinations/la-route-des-captifs/' },
      { label: 'Bénin Tourisme – La Porte du Non-Retour', url: 'https://benintourisme.bj/destinations/la-porte-du-non-retour/' },
      { label: 'Bénin Tourisme – Le Temple des Pythons', url: 'https://benintourisme.bj/destinations/le-temple-des-pythons/' },
      { label: 'Bénin Tourisme – La forêt sacrée de Kpassè', url: 'https://benintourisme.bj/destinations/la-foret-sacree-de-kpasse/' },
      { label: "Bénin Tourisme – L'Arène de Ouidah", url: 'https://benintourisme.bj/destinations/larene-de-ouidah/' },
      { label: "Wikipédia (FR) – Musée d'histoire de Ouidah", url: 'https://fr.wikipedia.org/wiki/Mus%C3%A9e_d%27histoire_de_Ouidah' },
      { label: 'Wikipédia (FR) – Forêt sacrée de Kpassè', url: 'https://fr.wikipedia.org/wiki/For%C3%AAt_sacr%C3%A9e_de_Kpass%C3%A8' },
      { label: 'Wikipédia (FR) – Fondation Zinsou', url: 'https://fr.wikipedia.org/wiki/Fondation_Zinsou' },
      { label: 'Wikipédia (FR) – Vodun Days', url: 'https://fr.wikipedia.org/wiki/Vodun_Days' },
      { label: 'UNESCO – Sites marquants de la Route de l\'Esclave au Bénin', url: 'https://whc.unesco.org/fr/listesindicatives/6512/' },
    ],
    neighbors: ['cotonou', 'grand-popo', 'abomey'],
  },

  // ───────────────────────── GANVIÉ ─────────────────────────
  {
    slug: 'ganvie',
    intro: {
      fr: "Au nord de Cotonou, sur le lac Nokoué, Ganvié est une cité lacustre bâtie sur pilotis par les Tofinu. Surnommée « la Venise de l'Afrique », elle est présentée comme la plus grande cité lacustre d'Afrique de l'Ouest ; ici, la pirogue remplace la voiture.",
      en: "North of Cotonou, on Lake Nokoué, Ganvié is a lake town built on stilts by the Tofinu people. Nicknamed “the Venice of Africa”, it is presented as the largest lake settlement in West Africa; here, the canoe replaces the car.",
    },
    history: {
      fr: [
        "Ganvié a été fondée par les Tofinu pour échapper aux guerres et aux razzias liées à la traite. Selon l'office du tourisme du Bénin, la fondation se situe entre le XVIIe et le XVIIIe siècle ; les sources divergent sur la date exacte.",
        "Leurs poursuivants maîtrisaient mal la navigation en pirogue dans les chenaux : le lac devint un refuge. Le nom signifierait « nous sommes sauvés » (tofingbé), ou encore « ici j'ai été sauvé » selon une autre source.",
      ],
      en: [
        "Ganvié was founded by the Tofinu people to escape the wars and raids linked to the slave trade. According to the Benin tourism office, its founding dates to between the 17th and 18th centuries; sources differ on the exact date.",
        "Their pursuers were poor at navigating canoes through the channels: the lake became a refuge. The name is said to mean “we are saved” (tofingbé), or “here I was saved” according to another source.",
      ],
    },
    tells: {
      fr: [
        "Ganvié raconte la résilience et l'ingéniosité face à la traite : un mode de vie entièrement adapté à l'eau. Des milliers de maisons sur pilotis sont reliées par des chenaux ; écoles, marchés et lieux de culte s'y trouvent aussi, et la pirogue est le seul moyen de transport.",
        "La vie y comporte aussi des défis actuels, comme l'accès à l'eau potable, les crues et l'assainissement. Les chiffres de population divergent selon les sources, c'est pourquoi nous n'en donnons pas. Précisons enfin que Ganvié n'est pas inscrite au patrimoine mondial de l'UNESCO.",
      ],
      en: [
        "Ganvié tells of resilience and ingenuity in the face of the slave trade: a way of life entirely adapted to water. Thousands of stilt houses are linked by channels; schools, markets and places of worship are here too, and the canoe is the only means of transport.",
        "Life here also faces present-day challenges, such as access to drinking water, floods and sanitation. Population figures differ between sources, so we give none. Note too that Ganvié is not a UNESCO World Heritage Site.",
      ],
    },
    places: [
      {
        name: { fr: 'Le marché flottant', en: 'The floating market' },
        description: {
          fr: 'Un marché tenu depuis les pirogues, au cœur des rues d\'eau du village.',
          en: "A market held from canoes, in the heart of the village's water streets.",
        },
      },
      {
        name: { fr: 'La balade en pirogue', en: 'A canoe trip' },
        description: {
          fr: "Sur le lac Nokoué et dans les « rues d'eau » : le meilleur moyen de comprendre la vie du village.",
          en: 'On Lake Nokoué and through the “water streets”: the best way to understand village life.',
        },
      },
      {
        name: { fr: 'Le Canal des Amoureux', en: "The Lovers' Canal" },
        description: {
          fr: "Un site de Sô-Ava connu sous le nom de Canal des Amoureux (allée des amoureux).",
          en: "A site in Sô-Ava known as the Lovers' Canal.",
        },
      },
      {
        name: { fr: 'La pêche traditionnelle', en: 'Traditional fishing' },
        description: {
          fr: "Les techniques de pêche traditionnelles, notamment les acadjas, et les restaurants sur pilotis.",
          en: 'Traditional fishing techniques, notably the acadjas, and restaurants on stilts.',
        },
      },
    ],
    culture: {
      fr: [
        "L'économie repose sur la pêche et la pisciculture, notamment grâce aux « acadjas » : des enclos de branchages plantés dans le lac, où les poissons se rassemblent. Le tourisme complète ces ressources.",
        "Le lac Nokoué mesure environ 20 km sur 11, pour une profondeur moyenne d'environ 1,5 m ; c'est une lagune saumâtre alimentée par l'Ouémé et la Sô.",
      ],
      en: [
        'The economy relies on fishing and fish farming, notably through “acadjas”: brushwood enclosures planted in the lake where fish gather. Tourism complements these resources.',
        'Lake Nokoué is about 20 km by 11, with an average depth of about 1.5 m; it is a brackish lagoon fed by the Ouémé and the Sô rivers.',
      ],
    },
    goodToKnow: {
      fr: ["L'office du tourisme du Bénin suggère d'embarquer tôt le matin, quand le lac s'éveille."],
      en: ['The Benin tourism office suggests setting out early in the morning, when the lake wakes up.'],
    },
    hero: photo(`${D}/ganvie/ganvie-maisons-pilotis.jpg`, 'Maisons sur pilotis à Ganvié', 'Stilt houses in Ganvié', 'Emmanuel Brunner (Manu25)', 'sa3', 'Ganvie2.jpg'),
    gallery: [
      photo(`${D}/ganvie/ganvie-marche-flottant.jpg`, 'Pirogues chargées de marchandises à Ganvié', 'Canoes loaded with goods in Ganvié', 'jbdodane', 'by2', 'Ganvi%C3%A9_fishing_village_on_stilts_in_Benin_DSC_2926_(10281995914)_(2).jpg'),
      photo(`${D}/ganvie/ganvie-lac-nokoue.jpg`, 'Ganvié, sur le lac Nokoué', 'Ganvié, on Lake Nokoué', 'Kulttuurinavigaattori', 'sa4', 'Houses_on_stilts_in_Ganvie_Benin_Dec_2017.jpg'),
      photo(`${D}/ganvie/ganvie-pirogue-ecole.jpg`, "Des élèves se rendent à l'école en pirogue", 'Pupils heading to school by canoe', 'Adoscam', 'sa4', 'El%C3%A8ves_en_pirogues_pour_l%27%C3%A9cole_%C3%A0_Ganvi%C3%A9_au_B%C3%A9nin.jpg'),
      sitePhoto('ganvie'),
    ],
    sources: [
      { label: 'Wikipédia (FR) – Ganvié', url: 'https://fr.wikipedia.org/wiki/Ganvi%C3%A9' },
      { label: 'Wikipedia (EN) – Ganvie', url: 'https://en.wikipedia.org/wiki/Ganvie' },
      { label: 'Bénin Tourisme – Ganvié', url: 'https://benintourisme.bj/destinations/ganvie/' },
      { label: 'Bénin Tourisme – Sô-Ava', url: 'https://benintourisme.bj/villes/so-ava/' },
      { label: 'Wikipédia (FR) – Lac Nokoué', url: 'https://fr.wikipedia.org/wiki/Lac_Nokou%C3%A9' },
    ],
    neighbors: ['cotonou', 'porto-novo'],
  },

  // ───────────────────────── PORTO-NOVO ─────────────────────────
  {
    slug: 'porto-novo',
    intro: {
      fr: "Capitale officielle du Bénin, à une trentaine de kilomètres à l'est de Cotonou, Porto-Novo est la « ville aux trois noms ». Ses façades colorées, ses musées et ses traditions de masques portent l'empreinte de multiples influences, dont celle des Afro-Brésiliens.",
      en: "Benin's official capital, about 30 km east of Cotonou, Porto-Novo is the “city of three names”. Its colourful façades, museums and mask traditions bear the mark of many influences, including that of the Afro-Brazilians.",
    },
    history: {
      fr: [
        "Les Goun et les Adja l'appellent Xɔ̀gbónù (Hogbonou), les Yoruba Àjàṣẹ́ (Adjatchè), et les Portugais Porto-Novo (« nouveau port ») : d'où son surnom de « ville aux trois noms ». En 1730, le Portugais Eucaristo de Campos l'aurait ainsi nommée pour sa ressemblance avec Porto.",
        "Selon la tradition, à la suite d'une querelle de succession au trône d'Allada, le prince Tè-Agbanlin migre vers le sud et fonde le royaume de Hogbonou (fin XVIe–XVIIe siècle selon les sources). La tradition rapporte qu'il l'emporta grâce au Zangbéto, masque « gardien de la nuit », qui veille encore sur la ville.",
        "Après la prise d'Allada par le Dahomey (1724), Porto-Novo se pose en héritière d'Allada ; elle est un temps tributaire de l'empire d'Oyo, qui la protège face au Dahomey. Aux XVIIIe et XIXe siècles, son essor repose sur la traite atlantique, puis sur l'huile de palme.",
        "En 1861, la ville est bombardée par les Britanniques ; en 1863, elle passe sous protectorat français (roi Sodji), puis un nouveau traité est signé avec le roi Toffa Ier en 1882. En 1894, elle devient capitale de la colonie du Dahomey. Les rois de Porto-Novo continuent de régner, officiellement puis officieusement, jusqu'à la mort du dernier, Alohinto Gbeffa, en 1976.",
      ],
      en: [
        "The Goun and Adja call it Xɔ̀gbónù (Hogbonou), the Yoruba Àjàṣẹ́ (Adjatchè), and the Portuguese Porto-Novo (“new port”) — hence its nickname “the city of three names”. In 1730, the Portuguese Eucaristo de Campos is said to have named it so for its resemblance to Porto.",
        "According to tradition, after a succession dispute over the throne of Allada, Prince Tè-Agbanlin migrated south and founded the kingdom of Hogbonou (late 16th–17th century depending on sources). Tradition says he prevailed thanks to the Zangbéto, the “guardian of the night” mask, which still watches over the town.",
        "After Dahomey captured Allada (1724), Porto-Novo presented itself as Allada's heir; for a time it was a tributary of the Oyo empire, which protected it against Dahomey. In the 18th and 19th centuries its rise rested on the Atlantic slave trade, then palm oil.",
        "In 1861 the town was bombarded by the British; in 1863 it became a French protectorate (King Sodji), and a new treaty was signed with King Toffa I in 1882. In 1894 it became capital of the colony of Dahomey. The kings of Porto-Novo went on reigning, officially and then unofficially, until the death of the last one, Alohinto Gbeffa, in 1976.",
      ],
    },
    tells: {
      fr: [
        "Porto-Novo est une ville de métissages : des Afro-Brésiliens (Agouda) revenus au XIXe siècle, l'architecture et la cuisine brésiliennes marquent encore ses quartiers anciens, avec leurs maisons à véranda et leurs façades colorées.",
        "Elle porte aussi une mémoire royale : « La ville de Porto-Novo : quartiers anciens et Palais Royal » figure sur la liste indicative du patrimoine mondial de l'UNESCO depuis le 31 octobre 1996.",
      ],
      en: [
        'Porto-Novo is a city of cultural blending: with Afro-Brazilians (Agouda) returning in the 19th century, Brazilian architecture and cuisine still mark its old quarters, with their verandah houses and colourful façades.',
        'It also carries a royal memory: “The town of Porto-Novo: old quarters and Royal Palace” has been on UNESCO\'s World Heritage Tentative List since 31 October 1996.',
      ],
    },
    places: [
      {
        name: { fr: 'La Grande Mosquée', en: 'The Great Mosque' },
        description: {
          fr: "De style afro-brésilien, inspirée des églises baroques de Bahia, construite par la communauté afro-brésilienne et achevée dans les années 1930 (début du XXe siècle).",
          en: 'In Afro-Brazilian style, inspired by the baroque churches of Bahia, built by the Afro-Brazilian community and completed in the 1930s (early 20th century).',
        },
      },
      {
        name: { fr: 'Le musée Honmè', en: 'The Honmè Museum' },
        description: {
          fr: "Honmè signifie « à l'intérieur de la porte » : c'est l'ancien palais des rois de Hogbonou, dans le quartier Avassa, sur 2,5 ha. Une partie du site est encore sacrée et accueille des cérémonies.",
          en: 'Honmè means “inside the gate”: it is the former palace of the kings of Hogbonou, in the Avassa quarter, on 2.5 ha. Part of the site is still sacred and hosts ceremonies.',
        },
      },
      {
        name: { fr: 'Le musée ethnographique Alexandre Sènou Adandé', en: 'The Alexandre Sènou Adandé Ethnographic Museum' },
        description: {
          fr: "Dans un bâtiment colonial de 1922, ouvert en 1966 ; ses collections comprennent notamment des masques Gèlèdè.",
          en: 'In a colonial building of 1922, opened in 1966; its collections include Gèlèdè masks.',
        },
      },
      {
        name: { fr: 'Le musée Da Silva', en: 'The Da Silva Museum' },
        description: {
          fr: "Consacré à l'histoire des Afro-Brésiliens.",
          en: 'Devoted to the history of the Afro-Brazilians.',
        },
      },
      {
        name: { fr: 'Le Jardin des Plantes et de la Nature', en: 'The Garden of Plants and Nature' },
        description: {
          fr: 'Un espace de nature à Porto-Novo.',
          en: 'A green space in Porto-Novo.',
        },
      },
      {
        name: { fr: "La Rivière Noire d'Adjarra", en: 'The Black River of Adjarra' },
        description: {
          fr: "À parcourir en pirogue : son eau claire paraît noire à cause du lit de la rivière et de la végétation.",
          en: "Explored by canoe: its clear water looks black because of the riverbed and vegetation.",
        },
      },
    ],
    culture: {
      fr: [
        "Le Zangbéto est une société de masques d'origine goun (« chasseur de nuit ») dont le fief est Porto-Novo ; chaque quartier a son Zangbéto. Le Gèlèdè, masques yoruba-nago présents au Bénin, au Nigeria et au Togo, est inscrit par l'UNESCO au patrimoine culturel immatériel (proclamé en 2001, inscrit en 2008).",
        "La musique adjogan, propre à Porto-Novo, se joue avec l'alounloun, un bâton à anneaux métalliques ; elle servait à l'origine à honorer le roi. La ville accueille aussi le Festival international de Porto-Novo, créé en 2017.",
      ],
      en: [
        'The Zangbéto is a mask society of Goun origin (“night hunter”) whose stronghold is Porto-Novo; each quarter has its own Zangbéto. Gèlèdè, Yoruba-Nago masks found in Benin, Nigeria and Togo, is inscribed by UNESCO on the Intangible Cultural Heritage list (proclaimed in 2001, inscribed in 2008).',
        'Adjogan music, specific to Porto-Novo, is played with the alounloun, a stick with metal rings; it originally honoured the king. The city also hosts the Porto-Novo International Festival, created in 2017.',
      ],
    },
    goodToKnow: {
      fr: ["Deux saisons sèches (novembre à mi-mars, et mi-juillet à mi-septembre) et deux saisons humides."],
      en: ['Two dry seasons (November to mid-March, and mid-July to mid-September) and two wet seasons.'],
    },
    hero: existingPhoto('porto-novo'),
    gallery: [
      photo(`${D}/porto-novo/porto-novo-honme-cour.jpg`, 'Cour du musée Honmè, ancien palais royal de Porto-Novo', 'Courtyard of the Honmè Museum, former royal palace of Porto-Novo', 'Kulttuurinavigaattori', 'sa4', 'Courtyard_Musee_Honme_Porto_Novo_Benin_Dec_2017.jpg'),
      photo(`${D}/porto-novo/porto-novo-honme-entree.jpg`, "Cour d'entrée du musée Honmè", 'Front courtyard of the Honmè Museum', 'Kulttuurinavigaattori', 'sa4', 'Front_yard_Musee_Honme_Porto_Novo_Benin_Dec_2017.jpg'),
      photo(`${D}/porto-novo/porto-novo-honme-porte.jpg`, 'Au palais royal de Porto-Novo (musée Honmè)', 'At the royal palace of Porto-Novo (Honmè Museum)', 'Dominik Schwarz', 'sa3', 'Honm%C3%A92.jpg'),
    ],
    sources: [
      { label: 'Wikipédia (FR) – Porto-Novo', url: 'https://fr.wikipedia.org/wiki/Porto-Novo' },
      { label: 'Wikipedia (EN) – Porto-Novo', url: 'https://en.wikipedia.org/wiki/Porto-Novo' },
      { label: 'Wikipédia (FR) – Royaume de Hogbonou', url: 'https://fr.wikipedia.org/wiki/Royaume_de_Hogbonou' },
      { label: 'Wikipédia (FR) – Zangbéto', url: 'https://fr.wikipedia.org/wiki/Zangb%C3%A9to' },
      { label: 'Wikipédia (FR) – Grande mosquée de Porto-Novo', url: 'https://fr.wikipedia.org/wiki/Grande_mosqu%C3%A9e_de_Porto-Novo' },
      { label: 'Wikipédia (FR) – Musée Honmè', url: 'https://fr.wikipedia.org/wiki/Mus%C3%A9e_Honm%C3%A8' },
      { label: 'Wikipédia (FR) – Musée Alexandre Sènou Adandé', url: 'https://fr.wikipedia.org/wiki/Mus%C3%A9e_ethnographique_Alexandre_S%C3%A8nou_Adand%C3%A9' },
      { label: 'UNESCO – Le Gèlèdè (patrimoine immatériel)', url: 'https://ich.unesco.org/fr/RL/le-patrimoine-oral-gelede-00002' },
      { label: 'UNESCO – Porto-Novo : quartiers anciens et Palais Royal', url: 'https://whc.unesco.org/fr/listesindicatives/871/' },
      { label: 'Bénin Tourisme – Porto-Novo', url: 'https://benintourisme.bj/villes/porto-novo/' },
      { label: 'Bénin Tourisme – La Grande Mosquée de Porto-Novo', url: 'https://benintourisme.bj/destinations/la-grande-mosquee-de-porto-novo/' },
      { label: 'Bénin Tourisme – La Rivière Noire', url: 'https://benintourisme.bj/destinations/la-riviere-noire/' },
    ],
    neighbors: ['cotonou', 'ganvie'],
  },

  // ───────────────────────── GRAND-POPO ─────────────────────────
  {
    slug: 'grand-popo',
    intro: {
      fr: "Au sud-ouest du Bénin, près de la frontière togolaise, Grand-Popo s'étend entre l'océan Atlantique, le fleuve Mono et ses lagunes. Plages, mangroves, cocoteraies et villages de pêcheurs en font un lieu où la nature et l'histoire se rencontrent.",
      en: "In south-west Benin, near the Togolese border, Grand-Popo lies between the Atlantic Ocean, the Mono river and its lagoons. Beaches, mangroves, coconut groves and fishing villages make it a place where nature and history meet.",
    },
    history: {
      fr: [
        "« Grand-Popo » est un nom européen pour l'ancienne ville et royaume de Hulagan (« Grand Hula »). Les Hula (Xwla), qui dominaient jadis la côte entre le Togo et le Bénin, la considéraient comme leur ville d'origine commune. L'origine du mot « Popo » reste incertaine.",
        "Des relations commerciales avec l'Europe s'y établissent dès le XVIIe siècle ; presqu'île entre la mer et un bras du Mono, Grand-Popo était considérée comme une rade relativement sûre pour la traite. Les maisons de l'époque, à étage, en briques cuites et planchers en bois, étaient groupées dans le quartier Gbékon, face à la plage. L'érosion côtière, très marquée depuis la fin des années 1950, a détruit l'essentiel de l'ancienne ville, ainsi que les premières missions et la première école.",
        "À la Bouche du Roy, les communautés riveraines vivent de pêche, de navigation et des ressources naturelles dès la fin du XVIe siècle.",
      ],
      en: [
        '“Grand-Popo” is a European name for the old town and kingdom of Hulagan (“Great Hula”). The Hula (Xwla), who once dominated the coast between Togo and Benin, regarded it as their common town of origin. The origin of the word “Popo” remains uncertain.',
        'Trade relations with Europe were established here from the 17th century; a peninsula between the sea and an arm of the Mono, Grand-Popo was considered a relatively safe anchorage for the slave trade. The houses of the time, with an upper floor, fired bricks and wooden floors, were grouped in the Gbékon quarter, facing the beach. Coastal erosion, very marked since the late 1950s, destroyed most of the old town, along with the first missions and the first school.',
        'At the Bouche du Roy, riverside communities have lived from fishing, navigation and natural resources since the late 16th century.',
      ],
    },
    tells: {
      fr: [
        "Grand-Popo est un carrefour de peuples : Xwla à l'ouest et dans les zones lagunaires, Xwéla (Pédah) au nord-est, Guen (Mina) sur le littoral, avec le xwla-gbè, le fon et l'ewe pour langues.",
        "C'est aussi un paysage où l'eau façonne tout. La Bouche du Roy est l'embouchure du Mono, entre le lac Ahémé, les lagunes et l'Atlantique : mangroves, marécages, plages, cordons littoraux. Son nom viendrait d'une mauvaise traduction du portugais « a boca do rio », l'embouchure du fleuve.",
      ],
      en: [
        'Grand-Popo is a crossroads of peoples: Xwla in the west and lagoon areas, Xwéla (Pédah) in the north-east, Guen (Mina) on the coast, with Xwla-gbè, Fon and Ewe as languages.',
        'It is also a landscape shaped by water. The Bouche du Roy is the mouth of the Mono, between Lake Ahémé, the lagoons and the Atlantic: mangroves, marshes, beaches, sand bars. Its name is said to come from a mistranslation of the Portuguese “a boca do rio”, the river mouth.',
      ],
    },
    places: [
      {
        name: { fr: 'La Bouche du Roy', en: 'The Bouche du Roy' },
        description: {
          fr: "Aire communautaire de conservation de la biodiversité depuis 2016 (9 678 ha), cœur de la réserve de biosphère transfrontière du Mono (UNESCO) et zone humide d'importance internationale (Ramsar). On y observe oiseaux, tortues marines, lamantins, dauphins, baleines…",
          en: 'A community biodiversity conservation area since 2016 (9,678 ha), the core of the Mono transboundary biosphere reserve (UNESCO) and a wetland of international importance (Ramsar). Wildlife includes birds, sea turtles, manatees, dolphins, whales…',
        },
      },
      {
        name: { fr: 'La descente en pirogue', en: 'The canoe journey' },
        description: {
          fr: "L'île au sel, l'île aux oiseaux, le canal de mangroves (moteur interdit), puis le banc de sable où fleuve et océan se rencontrent.",
          en: 'The salt island, the bird island, the mangrove canal (no motors allowed), then the sandbank where river and ocean meet.',
        },
      },
      {
        name: { fr: 'Les plages et cocoteraies', en: 'Beaches and coconut groves' },
        description: {
          fr: "Sur le littoral, de longues plages bordées de cocoteraies.",
          en: 'Along the coast, long beaches lined with coconut groves.',
        },
      },
      {
        name: { fr: "Le village de pêcheurs d'Avlo", en: 'The fishing village of Avlo' },
        description: {
          fr: 'Un village de pêcheurs, cité parmi les lieux à voir à Grand-Popo.',
          en: 'A fishing village, listed among the places to see in Grand-Popo.',
        },
      },
      {
        name: { fr: 'La Villa Karo', en: 'Villa Karo' },
        description: {
          fr: "Centre culturel finno-africain et résidence d'artistes fondé par l'écrivain finlandais Juha Vakkuri et ouvert en 2000 dans un ancien hôpital colonial de style afro-brésilien ; musée (2015), bibliothèque et concerts.",
          en: 'A Finnish-African cultural centre and artists\' residence founded by Finnish writer Juha Vakkuri and opened in 2000 in a former colonial hospital in Afro-Brazilian style; museum (2015), library and concerts.',
        },
      },
    ],
    culture: {
      fr: [
        "Le vodun est très présent dans le département du Mono, notamment dans des villages comme Hévé, avec des cérémonies lors de la fête du vodun en janvier.",
        "Côté nature et traditions, les tortues marines occupent une place particulière : la tortue olivâtre et la tortue luth pondent sur les plages, un programme de sauvegarde couvre 46 km de côte à Grand-Popo, et une fête nationale des tortues marines a été créée en 2004 par les écogardes. Grand-Popo accueille aussi Escale Urbaine IV.",
      ],
      en: [
        'Vodun is very present in the Mono department, notably in villages such as Hévé, with ceremonies during the Vodun festival in January.',
        'On the nature and traditions side, sea turtles hold a special place: olive ridley and leatherback turtles nest on the beaches, a conservation programme covers 46 km of coast at Grand-Popo, and a national sea turtle festival was created in 2004 by the eco-guards. Grand-Popo also hosts Escale Urbaine IV.',
      ],
    },
    hero: photo(`${D}/grand-popo/grand-popo-mono-gbecon.jpg`, 'Le fleuve Mono et le village de Gbécon, entre lagune et océan', 'The Mono river and Gbécon village, between lagoon and ocean', 'Sampo Kiviniemi', 'sa4', 'Gbecon_village_and_Mono_river_in_Grand-Popo,_Benin.jpg'),
    gallery: [
      photo(`${D}/grand-popo/grand-popo-plage-coucher.jpg`, 'Coucher de soleil sur la plage de Grand-Popo', 'Sunset on Grand-Popo beach', 'Fawaz.tairou', 'sa4', 'Coucher_de_soleil_%C3%A0_la_plage_de_Grand-Popo.jpg'),
      photo(`${D}/grand-popo/grand-popo-bouche-du-roy-banc.jpg`, "La Bouche du Roy, où la lagune rejoint l'océan", 'The Bouche du Roy, where the lagoon meets the ocean', 'BILLA1994', 'sa4', 'Bouche_du_Roy_vue_de_face.jpg'),
      existingPhoto('grand-popo'),
    ],
    sources: [
      { label: 'Wikipédia (FR) – Grand-Popo', url: 'https://fr.wikipedia.org/wiki/Grand-Popo' },
      { label: 'Wikipedia (EN) – Grand-Popo', url: 'https://en.wikipedia.org/wiki/Grand-Popo' },
      { label: 'Wikipédia (FR) – Bouche du Roy', url: 'https://fr.wikipedia.org/wiki/Bouche_du_Roy' },
      { label: 'Wikipedia (EN) – Villa Karo', url: 'https://en.wikipedia.org/wiki/Villa_Karo' },
      { label: 'Bénin Tourisme – Grand-Popo', url: 'https://benintourisme.bj/villes/grand-popo/' },
      { label: 'Bénin Tourisme – La Bouche du Roy', url: 'https://benintourisme.bj/destinations/la-bouche-du-roy/' },
    ],
    neighbors: ['ouidah', 'cotonou'],
  },

  // ───────────────────────── ABOMEY ─────────────────────────
  {
    slug: 'abomey',
    intro: {
      fr: "À environ 145 km de Cotonou, Abomey fut la capitale du royaume du Danxomè (Dahomey), l'un des plus puissants de la côte ouest-africaine. Ses palais royaux, inscrits au patrimoine mondial de l'UNESCO, racontent la puissance d'un royaume, sa résistance à la conquête coloniale et aussi sa part sombre.",
      en: "About 145 km from Cotonou, Abomey was the capital of the Kingdom of Dahomey, one of the most powerful on the West African coast. Its royal palaces, a UNESCO World Heritage Site, tell of the power of a kingdom, its resistance to colonial conquest, and also its darker side.",
    },
    history: {
      fr: [
        "Le royaume du Danxomè est fondé au XVIIe siècle ; la tradition retient 1625. Le roi Houégbadja est considéré comme son véritable fondateur : il installe sa capitale sur le plateau d'Abomey, y bâtit le premier palais et dote la dynastie d'un corpus de lois. Selon la légende fondatrice, la lignée royale descend de la princesse Aligbonon de Tado (actuel Togo) et d'une panthère ; de cette union serait né Agassou. Selon la tradition, le nom Danxomè signifie « sur le ventre de Dan », en référence à un roi rival vaincu sur les terres duquel le palais aurait été bâti.",
        "De 1625 à 1900, douze rois se succèdent. Le roi Agaja (1718–1740) conquiert Allada (1724) puis le royaume de Xwéda, c'est-à-dire Ouidah (1727), ce qui donne au Dahomey l'accès direct au commerce atlantique, y compris la traite des captifs. Au XIXe siècle, le roi Guézo (1818–1858) développe l'agriculture et le commerce de l'huile de palme.",
        "Entre 1892 et 1894, le royaume mène la guerre contre la France. Le roi Béhanzin, dernier souverain indépendant, fait incendier une partie des palais avant de se retirer ; il se rend au général Dodds le 25 janvier 1894, est exilé en Martinique, puis meurt en Algérie. Les Agojié (« Amazones »), corps militaire féminin d'élite du Danxomè, ont combattu du XVIIe au XIXe siècle.",
      ],
      en: [
        "The Kingdom of Dahomey was founded in the 17th century; tradition gives the date as 1625. King Houégbadja is regarded as its true founder: he set his capital on the Abomey plateau, built the first palace there and gave the dynasty a body of laws. According to the founding legend, the royal line descends from Princess Aligbonon of Tado (present-day Togo) and a panther; from this union Agassou is said to have been born. According to tradition, the name Danxomè means “on the belly of Dan”, referring to a rival king defeated on whose land the palace was said to be built.",
        "From 1625 to 1900, twelve kings succeeded one another. King Agaja (1718–1740) conquered Allada (1724) and then the Xwéda kingdom, i.e. Ouidah (1727), giving Dahomey direct access to Atlantic trade, including the trade in captives. In the 19th century, King Guézo (1818–1858) developed agriculture and the palm oil trade.",
        "Between 1892 and 1894, the kingdom fought a war against France. King Béhanzin, the last independent sovereign, had part of the palaces burned before withdrawing; he surrendered to General Dodds on 25 January 1894, was exiled to Martinique, and died in Algeria. The Agojié (“Amazons”), an elite women's military corps of Dahomey, fought from the 17th to the 19th century.",
      ],
    },
    tells: {
      fr: [
        "Abomey raconte la puissance et l'organisation d'un royaume africain, et sa résistance à la conquête coloniale : l'UNESCO souligne la « volonté d'indépendance, de résistance et de lutte contre l'occupation coloniale » mise en avant par le musée. Elle raconte aussi la part sombre de cette histoire : le royaume a pris part à la traite des captifs vendus aux Européens.",
        "La question des restitutions fait partie du récit : après une loi française du 24 décembre 2020, 26 œuvres des trésors royaux d'Abomey, pillées par les troupes françaises en 1892 et conservées au musée du quai Branly, ont été restituées au Bénin. Exposées à partir de début 2022 au palais de la Marina à Cotonou, elles attendent un musée à Abomey.",
        "La place Singbodji, à Abomey, figure dans le bien « Sites marquants de la Route de l'Esclave au Bénin », inscrit sur la liste indicative de l'UNESCO en 2021.",
      ],
      en: [
        'Abomey tells of the power and organisation of an African kingdom, and of its resistance to colonial conquest: UNESCO highlights the “will for independence, resistance and struggle against colonial occupation” put forward by the museum. It also tells of the darker side of this history: the kingdom took part in the trade of captives sold to Europeans.',
        'The question of restitution is part of the story: after a French law of 24 December 2020, 26 works from the royal treasures of Abomey, looted by French troops in 1892 and held at the Musée du quai Branly, were returned to Benin. Exhibited from early 2022 at the Marina palace in Cotonou, they await a museum in Abomey.',
        'Singbodji Square in Abomey is part of the property “Landmark Sites of the Slave Route in Benin”, on UNESCO\'s Tentative List since 2021.',
      ],
    },
    places: [
      {
        name: { fr: "Les palais royaux d'Abomey", en: 'The Royal Palaces of Abomey' },
        description: {
          fr: "Inscrits au patrimoine mondial en 1985 : un site de 47 ha, dix palais construits côte à côte ou superposés selon la succession au trône, entourés de murs en terre et organisés autour de trois cours. Ils étaient à la fois centre du pouvoir, lieu de fabrication artisanale et trésor du royaume.",
          en: 'Inscribed on the World Heritage List in 1985: a 47-ha site with ten palaces built side by side or on top of each other following the royal succession, surrounded by earthen walls and organised around three courtyards. They were at once the seat of power, a place of craft production and the kingdom\'s treasury.',
        },
      },
      {
        name: { fr: "Le musée historique d'Abomey", en: 'The Abomey Historical Museum' },
        description: {
          fr: "Installé dans les palais des rois Guézo et Glèlè, créé en 1943, il compte environ 1 050 objets : trônes, autels portatifs « assins », tentures appliquées, objets cultuels.",
          en: 'Housed in the palaces of kings Guézo and Glèlè, created in 1943, it holds about 1,050 objects: thrones, portable altars (“asen”), appliqué cloths and ritual objects.',
        },
      },
      {
        name: { fr: 'Les bas-reliefs et tentures', en: 'Bas-reliefs and appliqué cloths' },
        description: {
          fr: "Les bas-reliefs polychromes en terre racontaient l'histoire officielle (victoires, mythes, rites) en l'absence d'écriture ; les tentures appliquées prolongent cet art.",
          en: 'The polychrome earthen bas-reliefs told the official history (victories, myths, rites) in the absence of writing; appliqué cloths carry on this art.',
        },
      },
      {
        name: { fr: 'La place Goho', en: 'Goho Square' },
        description: {
          fr: "Une place de la ville où se dresse la statue du roi Béhanzin.",
          en: 'A town square featuring the statue of King Béhanzin.',
        },
      },
      {
        name: { fr: 'La « basilique Caméléon »', en: 'The “Chameleon Basilica”' },
        description: {
          fr: "Un lieu d'Abomey cité par l'office du tourisme du Bénin.",
          en: 'A site in Abomey listed by the Benin tourism office.',
        },
      },
    ],
    culture: {
      fr: [
        "Le vodun est la principale religion endogène du plateau d'Abomey. Le site des palais reste vivant : des cérémonies traditionnelles des familles royales s'y tiennent, avec des lieux sacrés comme le Djèxo (case de l'esprit du roi) et l'Adoxo (tombe du roi), et un entretien avec des matériaux traditionnels (terre de barre, bois, paille).",
        "Abomey a aussi vu naître l'artiste Cyprien Tokoudagba (1939–2012). Le Festival international des cultures du Danxomè y est cité parmi les rendez-vous culturels.",
        "Les palais ont connu des épreuves : placés sur la liste du patrimoine en péril après une tornade en mars 1984, ils en ont été retirés en juillet 2007 après restauration. Un incendie, le 21 janvier 2009, a détruit des toitures et des tombes (rois Agonglo et Guézo), avant de nouvelles restaurations.",
      ],
      en: [
        'Vodun is the main indigenous religion of the Abomey plateau. The palace site remains alive: traditional ceremonies of the royal families are held there, with sacred places such as the Djèxo (hut of the king\'s spirit) and the Adoxo (the king\'s tomb), and upkeep using traditional materials (laterite earth, wood, straw).',
        'Abomey was also home to the artist Cyprien Tokoudagba (1939–2012). The International Festival of Dahomey Cultures is cited among its cultural events.',
        'The palaces have faced trials: placed on the List of World Heritage in Danger after a tornado in March 1984, they were removed from it in July 2007 after restoration. A fire on 21 January 2009 destroyed roofs and tombs (kings Agonglo and Guézo), followed by further restoration.',
      ],
    },
    hero: photo(`${D}/abomey/abomey-cour-palais.jpg`, "Cour intérieure des palais royaux d'Abomey", 'Inner courtyard of the Royal Palaces of Abomey', 'Ji-Elle', 'sa4', 'Abomey-Cour_int%C3%A9rieure_(2).jpg'),
    gallery: [
      photo(`${D}/abomey/abomey-palais-guezo.jpg`, "Le palais du roi Guézo, qui abrite le musée historique d'Abomey", "King Guézo's palace, home to the Abomey Historical Museum", 'Fawaz.tairou', 'sa4', 'Palais_du_roi_Guezo_abritant_le_mus%C3%A9e_historique_d%27Abomey_-_Site_des_Palais_royaux_d%27Abomey.jpg'),
      photo(`${D}/abomey/abomey-mur-palais.jpg`, "Le long des murs en terre d'un palais royal", 'Along the earthen walls of a royal palace', 'Adam Jones', 'sa3', 'Girl_Walks_Past_Palace_Wall_-_Abomey_-_Benin.jpg'),
      photo(
        `${D}/abomey/abomey-bas-relief-1930.jpg`,
        "Bas-relief d'Abomey photographié en 1930 (poisson avalant un navire européen)",
        'Abomey bas-relief photographed in 1930 (a fish swallowing a European ship)',
        'Frédéric Gadmer – Musée départemental Albert-Kahn',
        'sa4',
        'Bas-relief_d%27une_r%C3%A9sidence_du_quartier_de_Gb%C3%A9con-Hounli,_non_loin_du_palais_princier_de_Gu%C3%A9zo,_motif_de_poisson_avalant_un_navire_europ%C3%A9en_-_A63593S.jpg',
      ),
      sitePhoto('abomey'),
    ],
    sources: [
      { label: "UNESCO – Palais royaux d'Abomey", url: 'https://whc.unesco.org/fr/list/323/' },
      { label: "UNESCO – Sites marquants de la Route de l'Esclave au Bénin", url: 'https://whc.unesco.org/fr/listesindicatives/6512/' },
      { label: 'Wikipédia (FR) – Abomey', url: 'https://fr.wikipedia.org/wiki/Abomey' },
      { label: 'Wikipedia (EN) – Royal Palaces of Abomey', url: 'https://en.wikipedia.org/wiki/Royal_Palaces_of_Abomey' },
      { label: 'Bénin Tourisme – Abomey', url: 'https://benintourisme.bj/villes/abomey/' },
      { label: "Bénin Tourisme – Les palais royaux d'Abomey", url: 'https://benintourisme.bj/destinations/les-palais-royaux-dabomey/' },
      { label: "Bénin Tourisme – L'Esplanade de l'Amazone", url: 'https://benintourisme.bj/destinations/lesplanade-de-lamazone/' },
    ],
    neighbors: ['dassa-zoume', 'ouidah', 'natitingou'],
  },

  // ───────────────────────── DASSA-ZOUMÈ ─────────────────────────
  {
    slug: 'dassa-zoume',
    intro: {
      fr: "Chef-lieu du département des Collines, à environ 209 km de Cotonou, Dassa-Zoumè est surnommée « la cité des 41 collines ». Pays des Idaasha, un peuple yoruba, elle est aussi un haut lieu du pèlerinage marial d'Arigbo.",
      en: "Capital of the Collines department, about 209 km from Cotonou, Dassa-Zoumè is nicknamed “the city of the 41 hills”. Land of the Idaasha, a Yoruba people, it is also home to the Marian pilgrimage of Arigbo.",
    },
    history: {
      fr: [
        "Son nom ancien est Igbo Idaasha (Idaatcha), le pays des Idaasha. Les sources rattachent leurs ancêtres à des migrations venues de l'actuel Nigeria. Deux explications existent pour le nom actuel : soit la fille du roi, Daïssa, soit une décomposition yoruba signifiant « la créature de Dieu dans la forêt ».",
        "Selon la tradition rapportée par le gouvernement béninois et Wikipédia, une vague migratoire des Omondjagou, menée par le prince Oladégbo, rejoignit des Yoruba installés au pied des collines. Il les rassembla et fonda le royaume d'Igbo Idaasha, régnant sous le nom de Jagu Olofin (1385–1425, selon la tradition orale). La lignée règne encore : le roi actuel, Jagu Egbakotan II, est présenté comme le 26e monarque.",
        "Le royaume est placé sous protectorat français en 1889.",
      ],
      en: [
        'Its old name is Igbo Idaasha (Idaatcha), the land of the Idaasha. Sources link their ancestors to migrations from present-day Nigeria. Two explanations exist for the present name: either the king\'s daughter, Daïssa, or a Yoruba breakdown meaning “God\'s creature in the forest”.',
        'According to tradition reported by the Beninese government and Wikipedia, a migration wave of the Omondjagou, led by Prince Oladégbo, joined Yoruba settled at the foot of the hills. He united them and founded the kingdom of Igbo Idaasha, reigning as Jagu Olofin (1385–1425, according to oral tradition). The line still reigns: the current king, Jagu Egbakotan II, is presented as the 26th monarch.',
        'The kingdom was placed under French protectorate in 1889.',
      ],
    },
    tells: {
      fr: [
        "Le territoire compte 41 collines. Chacune abritait un village avec son chef, et l'assemblée de ces chefs était consultée par le roi (Jagou) pour les grandes décisions. Le relief est granitique, avec un dénivelé moyen d'environ 200 m et un point culminant à 465 m (village de Tangbé).",
        "Sur certaines collines, des traces liées à l'enseignement du Fa/Ifa (les 16 signes majeurs gravés) rappellent, selon le gouvernement béninois, un institut qui rayonna sous le roi Djagou Adjiboyé (1629–1642). Beaucoup de collines et de forêts abritent des sanctuaires d'orisha.",
        "Les « Yaka (collines sacrées de Dassa) » font partie du bien « Sites marquants de la Route de l'Esclave au Bénin », inscrit sur la liste indicative de l'UNESCO en 2021.",
      ],
      en: [
        'The territory has 41 hills. Each sheltered a village with its chief, and the assembly of these chiefs was consulted by the king (Jagou) on major decisions. The terrain is granitic, with an average height difference of about 200 m and a high point of 465 m (Tangbé village).',
        'On some hills, traces linked to the teaching of Fa/Ifa (the 16 major signs engraved) recall, according to the Beninese government, an institute that flourished under King Djagou Adjiboyé (1629–1642). Many hills and forests shelter orisha shrines.',
        'The “Yaka (sacred hills of Dassa)” are part of the property “Landmark Sites of the Slave Route in Benin”, on UNESCO\'s Tentative List since 2021.',
      ],
    },
    places: [
      {
        name: { fr: 'Les collines de Dassa', en: 'The hills of Dassa' },
        description: {
          fr: "Pour la randonnée et les panoramas sur la ville et la plaine.",
          en: 'For hiking and views over the town and the plain.',
        },
      },
      {
        name: { fr: "La grotte Notre-Dame d'Arigbo", en: 'The Our Lady of Arigbo grotto' },
        description: {
          fr: "Arigbo vient du yoruba « Arigbogbo », « celui qui voit tout ». En 1954, Mgr Louis Parisot cherche au Dahomey un site rappelant Lourdes ; la grotte est bénie le 11 février 1954, date du premier pèlerinage.",
          en: 'Arigbo comes from the Yoruba “Arigbogbo”, “the one who sees everything”. In 1954 Bishop Louis Parisot sought a site in Dahomey recalling Lourdes; the grotto was blessed on 11 February 1954, the date of the first pilgrimage.',
        },
      },
      {
        name: { fr: "La Pierre fendue d'Okèytè", en: 'The split rock of Okèytè' },
        description: {
          fr: "Un site de Dassa cité par l'office du tourisme du Bénin.",
          en: 'A site in Dassa listed by the Benin tourism office.',
        },
      },
      {
        name: { fr: "Le palais royal d'Igbo Idaasha", en: 'The royal palace of Igbo Idaasha' },
        description: {
          fr: "Sur la place Ègbakokou, siège de la royauté idaasha.",
          en: 'On Ègbakokou square, seat of the Idaasha monarchy.',
        },
      },
    ],
    culture: {
      fr: [
        "Le grand pèlerinage marial a lieu chaque année le week-end qui suit l'Assomption (15 août). Il rassemble des milliers de pèlerins du Bénin, des pays voisins et d'Europe.",
        "Dassa vit ainsi sur deux registres : celui des traditions idaasha, des sanctuaires d'orisha et de la royauté, et celui de la dévotion catholique à Arigbo.",
      ],
      en: [
        'The great Marian pilgrimage takes place every year on the weekend after the Assumption (15 August). It gathers thousands of pilgrims from Benin, neighbouring countries and Europe.',
        'Dassa thus lives on two registers: that of Idaasha traditions, orisha shrines and monarchy, and that of Catholic devotion at Arigbo.',
      ],
    },
    hero: photo(`${D}/dassa-zoume/dassa-zoume-vue-colline-princes.jpg`, 'Dassa-Zoumè vue depuis la colline des Princes (2025)', "Dassa-Zoumè seen from the Princes' Hill (2025)", 'Ch1pabeck', 'sa4', 'Viewpoint_of_Dassa-Zoum%C3%A9_from_the_Coline_des_Princes_(April_2025).jpg'),
    gallery: [
      photo(`${D}/dassa-zoume/dassa-zoume-arigbo.jpg`, "La grotte Notre-Dame d'Arigbo, au pied de sa colline", 'The Our Lady of Arigbo grotto, at the foot of its hill', 'Carmelahg', 'sa4', 'Grotte_Notre-Dame_d%E2%80%99arigbo_de_Dassa-zoume_au_B%C3%A9nin_02.jpg'),
      photo(
        `${D}/dassa-zoume/dassa-zoume-1930.jpg`,
        'Dassa-Plaine vue depuis la montagne, en 1930',
        'Dassa-Plaine seen from the hill, in 1930',
        'Frédéric Gadmer – Musée départemental Albert-Kahn',
        'sa4',
        'Le_village_dans_la_plaine_(%22_Dassa-Plaine_%22),_vue_prise_depuis_la_montagne_-_A63816S.jpg',
      ),
      existingPhoto('dassa-zoume'),
    ],
    sources: [
      { label: 'Gouvernement du Bénin – Dassa-Zoumè, pays Idaascha', url: 'https://www.gouv.bj/article/983/destination-benin---dassa--zoume--pays-idaascha-sommet-41-collines-cite-omondjagou./' },
      { label: 'La Nation – Dassa-Zoumè, cité des 41 collines', url: 'https://www.lanation.bj/culture/dassa-zoume-cite-des-41-collines-au-dela-du-pelerinage-marial-a-arigbo' },
      { label: "Fraternité – La grotte d'Arigbo", url: 'https://fraternite.bj/dassa-zoume-quand-et-comment-la-grotte-darigbo-a-t-elle-ete-creee/' },
      { label: 'Notre-Dame de Fatima – Le grand pèlerinage marial du Bénin', url: 'https://ndfatima.com/2019/11/11/le-grand-pelerinage-marial-international-du-benin/' },
      { label: 'Canadian Journal of African Studies – Dassa-Zoumè', url: 'https://doi.org/10.18192/clg-cgl.v7i1-2.5921' },
      { label: "UNESCO – Sites marquants de la Route de l'Esclave au Bénin", url: 'https://whc.unesco.org/fr/listesindicatives/6512/' },
      { label: 'Wikipédia (FR) – Dassa-Zoumè', url: 'https://fr.wikipedia.org/wiki/Dassa-Zoum%C3%A9' },
      { label: 'Wikipedia (EN) – Dassa-Zoumè', url: 'https://en.wikipedia.org/wiki/Dassa-Zoum%C3%A9' },
      { label: 'Bénin Tourisme – Dassa-Zoumè', url: 'https://benintourisme.bj/villes/dassa-zoume/' },
      { label: 'Bénin Tourisme – Les collines de Dassa', url: 'https://benintourisme.bj/destinations/les-collines-de-dassa/' },
    ],
    neighbors: ['abomey', 'natitingou'],
  },

  // ───────────────────────── NATITINGOU ─────────────────────────
  {
    slug: 'natitingou',
    intro: {
      fr: "Chef-lieu de l'Atacora, dans le nord-ouest du Bénin, Natitingou s'étend dans une vallée au pied de la chaîne de l'Atacora. Entre maisons-forteresses bètammaribè, cascades et mémoire de la révolte de Kaba, c'est une porte d'entrée vers le nord du pays.",
      en: "Capital of the Atacora, in north-west Benin, Natitingou lies in a valley at the foot of the Atacora range. Between Betammaribe fortified houses, waterfalls and the memory of Kaba's revolt, it is a gateway to the north of the country.",
    },
    history: {
      fr: [
        "Selon Wikipédia (EN), la ville aurait été fondée par les Waaba (Waama). Son nom viendrait de « Nanto » (« écraser », en waama), avec plusieurs interprétations populaires : le village de « l'écraseur », un homme qui écrasait lui-même ses céréales, ou « le village de la viande ». Une croyance locale veut que les montagnes environnantes soient habitées par des esprits dont le bruit, le soir, ressemble à celui des meules : on évite donc d'écraser le grain le soir.",
        "À l'époque coloniale, Natitingou est le siège du commandant de cercle de l'Atacora ; elle devient préfecture de l'Atacora après l'indépendance.",
        "Le chantier de la résidence du commandant de cercle (achevée en 1915, par travail forcé) et la mobilisation de soldats pour la guerre en Europe provoquent la révolte menée par Kaba : une guérilla qui unit les peuples de l'Atacora de 1915 à 1917. Une stèle et une annexe du musée lui rendent hommage.",
      ],
      en: [
        'According to Wikipedia (EN), the town was founded by the Waaba (Waama). Its name is said to come from “Nanto” (“to crush”, in Waama), with several popular interpretations: the village of “the crusher”, a man who ground his own grain, or “the village of meat”. A local belief holds that the surrounding mountains are inhabited by spirits whose noise in the evening sounds like millstones: so grain is not ground in the evening.',
        'In colonial times, Natitingou was the seat of the district commander of the Atacora; it became the prefecture of the Atacora after independence.',
        'The construction of the district commander\'s residence (completed in 1915, using forced labour) and the mobilisation of soldiers for the war in Europe triggered the revolt led by Kaba: a guerrilla uniting the peoples of the Atacora from 1915 to 1917. A stele and an annex of the museum pay tribute to him.',
      ],
    },
    tells: {
      fr: [
        "La population est très diverse : Bètammaribè (Ditammari), Waaba, Dendi, Baatombu, Peuls, Yoruba, Fon…",
        "Les Bètammaribè (Batammariba, « Somba ») vivent dans le massif de l'Atacora, au Bénin et au Togo ; leur langue est le ditammari. Arrivés par vagues entre le XVIe et le XVIIIe siècle, ils ont bâti la takyiènta (tata somba ; pluriel sikyien), maison-forteresse en terre à étage, avec tourelles et greniers. La pièce du bas est réservée aux ancêtres, et la maison protégeait autrefois des assaillants.",
        "« Koutammakou, le pays des Batammariba » (Togo, inscrit en 2004) a été étendu en 2023 au Bénin voisin : un paysage culturel où maisons-tours, terres, forêts, sources et rochers sacrés sont liés aux rites. Les tata visitables se trouvent surtout vers Boukoumbé, à l'ouest de Natitingou.",
      ],
      en: [
        'The population is very diverse: Betammaribe (Ditammari), Waaba, Dendi, Baatombu, Fulani, Yoruba, Fon…',
        'The Betammaribe (Batammariba, “Somba”) live in the Atacora massif, in Benin and Togo; their language is Ditammari. Arriving in waves between the 16th and 18th centuries, they built the takyiènta (tata somba; plural sikyien), an earthen fortified house with an upper floor, turrets and granaries. The ground-floor room is reserved for ancestors, and the house once protected against attackers.',
        '“Koutammakou, the Land of the Batammariba” (Togo, inscribed in 2004) was extended in 2023 to neighbouring Benin: a cultural landscape where tower houses, land, forests, springs and sacred rocks are tied to rituals. The tata that can be visited are mostly near Boukoumbé, west of Natitingou.',
      ],
    },
    places: [
      {
        name: { fr: 'Le musée régional de Natitingou', en: 'The Natitingou Regional Museum' },
        description: {
          fr: "Dans l'ancienne résidence du commandant de cercle (achevée en 1915), ouvert le 9 février 1991 : environ 360 pièces sur les cultures de l'Atacora-Donga (habitat, instruments, armes, objets de Kaba…).",
          en: "In the former district commander's residence (completed in 1915), opened on 9 February 1991: about 360 pieces on the cultures of Atacora-Donga (housing, instruments, weapons, Kaba objects…).",
        },
      },
      {
        name: { fr: 'La stèle de Kaba', en: "Kaba's stele" },
        description: {
          fr: "Un hommage au meneur de la révolte de 1915–1917.",
          en: 'A tribute to the leader of the 1915–1917 revolt.',
        },
      },
      {
        name: { fr: 'Les chutes de Kota', en: 'The Kota falls' },
        description: {
          fr: "Un chapelet de cascades à l'est de l'Atacora, à une vingtaine de km de la ville (arrondissement de Kotopounga), dans une aire protégée ; l'écoulement est permanent, même en saison sèche, grâce aux nappes.",
          en: 'A string of waterfalls east of the Atacora, about twenty km from town (Kotopounga district), in a protected area; the flow is permanent, even in the dry season, thanks to groundwater.',
        },
      },
      {
        name: { fr: 'Les tata bètammaribè', en: 'The Betammaribe tata' },
        description: {
          fr: "Les maisons-forteresses en terre des Bètammaribè, emblème du pays de l'Atacora.",
          en: "The Betammaribe's earthen fortified houses, an emblem of the Atacora country.",
        },
      },
      {
        name: { fr: 'Le parc national de la Pendjari', en: 'Pendjari National Park' },
        description: {
          fr: "Environ 4 700 km², inscrit au patrimoine mondial en 2017 au sein du complexe W-Arly-Pendjari, et réserve de biosphère de l'UNESCO depuis 1986. Natitingou en est la principale porte d'accès.",
          en: 'About 4,700 km², inscribed as a World Heritage Site in 2017 within the W-Arly-Pendjari complex, and a UNESCO biosphere reserve since 1986. Natitingou is its main gateway.',
        },
      },
    ],
    culture: {
      fr: [
        "Le Festival des Arts et de la Culture Tãmmari (FACTAM) est organisé à Natitingou.",
        "L'architecture des tata, les croyances liées aux esprits des montagnes et la mémoire de Kaba composent, ensemble, l'identité d'un territoire où cohabitent de nombreux peuples.",
      ],
      en: [
        'The Tãmmari Arts and Culture Festival (FACTAM) is held in Natitingou.',
        'The architecture of the tata, beliefs about mountain spirits and the memory of Kaba together make up the identity of a territory where many peoples live side by side.',
      ],
    },
    goodToKnow: {
      fr: ["Une saison des pluies de mai à octobre (pluies maximales en août–septembre) et une saison sèche de novembre à avril ; l'harmattan souffle en décembre–janvier, avec des nuits jusqu'à environ 17 °C."],
      en: ['A rainy season from May to October (heaviest rain in August–September) and a dry season from November to April; the harmattan blows in December–January, with nights down to about 17 °C.'],
    },
    hero: existingPhoto('natitingou'),
    gallery: [
      photo(`${D}/natitingou/natitingou-chutes-kota.jpg`, 'Les chutes de Kota en saison sèche', 'The Kota falls in the dry season', 'Ji-Elle', 'sa4', 'Chutes_de_Kota_(1).jpg'),
      photo(`${D}/natitingou/natitingou-vue-ville.jpg`, "Natitingou, au pied de l'Atacora", 'Natitingou, at the foot of the Atacora', 'Martin Wegmann (Baliola)', 'sa3', 'Benin_Natitingou.JPG'),
      photo(
        `${D}/natitingou/natitingou-musee-regional.jpg`,
        "Le musée régional de Natitingou, dans l'ancienne résidence du commandant de cercle",
        "The Natitingou Regional Museum, in the former colonial district commander's residence",
        'Farid AMADOU BAHLEMAN',
        'sa4',
        'MUS%C3%89E_R%C3%89GIONAL_DE_NATITINGOU.jpg',
      ),
    ],
    sources: [
      { label: 'Wikipédia (FR) – Natitingou', url: 'https://fr.wikipedia.org/wiki/Natitingou' },
      { label: 'Wikipedia (EN) – Natitingou', url: 'https://en.wikipedia.org/wiki/Natitingou' },
      { label: 'Wikipédia (FR) – Musée régional de Natitingou', url: 'https://fr.wikipedia.org/wiki/Mus%C3%A9e_r%C3%A9gional_de_Natitingou' },
      { label: 'Musée de Natitingou – Présentation', url: 'https://museenatitingou.wordpress.com/presentation-2/' },
      { label: 'Musée de Natitingou – Annexe, stèle de Kaba', url: 'https://museenatitingou.wordpress.com/annexe-stele-kaba/' },
      { label: 'La Nouvelle Tribune – Entretien avec le conservateur du musée', url: 'https://lanouvelletribune.info/2012/03/entretien-avec-imourou-abdoulaye-conservateur-du-musee-regional-de-natitingou/' },
      { label: 'Wikipédia (FR) – Batammariba', url: 'https://fr.wikipedia.org/wiki/Batammariba' },
      { label: 'UNESCO – Koutammakou, le pays des Batammariba', url: 'https://whc.unesco.org/fr/list/1140/' },
      { label: 'Wikipédia (FR) – Chutes de Kota', url: 'https://fr.wikipedia.org/wiki/Chutes_de_Kota' },
      { label: 'Wikipédia (FR) – Parc national de la Pendjari', url: 'https://fr.wikipedia.org/wiki/Parc_national_de_la_Pendjari' },
      { label: 'Bénin Tourisme – Natitingou', url: 'https://benintourisme.bj/villes/natitingou/' },
      { label: 'Bénin Tourisme – Les tata Bètammaribè', url: 'https://benintourisme.bj/destinations/les-tata-betammaribe/' },
    ],
    neighbors: ['dassa-zoume', 'abomey'],
  },
];

export function getDestinationDetail(slug: string) {
  return destinationDetails.find((d) => d.slug === slug);
}
