import type { Locale } from '@/lib/i18n';

export type BannerKey =
  | 'experiences'
  | 'events'
  | 'editions'
  | 'escaleUrbaine'
  | 'about'
  | 'contact'
  | 'faq'
  | 'circuits'
  | 'destinations'
  | 'whyUs'
  | 'planYourTrip'
  | 'blog'
  | 'testimonials';

export type BannerImage = {
  src: string;
  alt: Record<Locale, string>;
  /** CSS object-position so the subject stays in the visible band */
  position?: string;
};

/**
 * Photos d'agence (Facebook, usage autorisé) pour les bandeaux de pages.
 * Les textes alternatifs décrivent uniquement ce qui est visible, sans nommer de lieu.
 * fb_05 (affiche texte) n'est pas utilisée en fond.
 */
export const banners: Record<BannerKey, BannerImage> = {
  experiences: {
    src: '/images/banners/fb_07-1920.webp',
    alt: {
      fr: "Personnes en tenues colorées dansant en extérieur, sortie Tourism'Tour",
      en: "People in colorful clothing dancing outdoors, Tourism'Tour outing",
    },
    position: 'center 62%',
  },
  events: {
    src: '/images/banners/fb_09-1920.webp',
    alt: {
      fr: "Cérémonie autour d'un grand costume de paille, sortie Tourism'Tour",
      en: "Ceremony around a large straw costume, Tourism'Tour outing",
    },
    position: 'center 68%',
  },
  editions: {
    src: '/images/banners/fb_08-1920.webp',
    alt: {
      fr: "Groupe assis le long d'un mur peint, sortie Tourism'Tour",
      en: "Group seated along a painted wall, Tourism'Tour outing",
    },
    position: 'center 58%',
  },
  escaleUrbaine: {
    src: '/images/banners/fb_10-1920.webp',
    alt: {
      fr: "Participants en conversation lors d'un rassemblement Tourism'Tour",
      en: "Participants talking during a Tourism'Tour gathering",
    },
    position: 'center 48%',
  },
  about: {
    src: '/images/banners/fb_06-1920.webp',
    alt: {
      fr: "Groupe Tourism'Tour réuni en extérieur autour d'un objet coloré",
      en: "Tourism'Tour group gathered outdoors around a colorful object",
    },
    position: 'center 45%',
  },
  contact: {
    src: '/images/banners/fb_03-1920.webp',
    alt: {
      fr: "Bateau à passagers couvert d'une bâche bleue, sur l'eau",
      en: 'Passenger boat with a blue tarp cover, on the water',
    },
    position: 'center 50%',
  },
  faq: {
    src: '/images/banners/fb_12-1920.webp',
    alt: {
      fr: "Groupe Tourism'Tour devant un bâtiment à cour",
      en: "Tourism'Tour group in front of a courtyard building",
    },
    position: 'center 55%',
  },
  circuits: {
    src: '/images/banners/fb_13-1920.webp',
    alt: {
      fr: "Visiteurs observant une œuvre dans une galerie, sortie Tourism'Tour",
      en: "Visitors looking at an artwork in a gallery, Tourism'Tour outing",
    },
    position: 'center 48%',
  },
  destinations: {
    src: '/images/banners/fb_14-1920.webp',
    alt: {
      fr: "Sculpture exposée dans un intérieur, visite Tourism'Tour",
      en: "Sculpture displayed indoors, Tourism'Tour visit",
    },
    position: 'center 55%',
  },
  whyUs: {
    src: '/images/banners/fb_11-1920.webp',
    alt: {
      fr: "Gros plan d'un costume de cérémonie coloré, sortie Tourism'Tour",
      en: "Close view of a colorful ceremonial costume, Tourism'Tour outing",
    },
    position: 'center 50%',
  },
  planYourTrip: {
    src: '/images/banners/fb_04-1920.webp',
    alt: {
      fr: "Bateau à passagers traversant une étendue d'eau",
      en: 'Passenger boat crossing a stretch of water',
    },
    position: 'center 50%',
  },
  blog: {
    src: '/images/banners/fb_02-1920.webp',
    alt: {
      fr: "Personne travaillant à un métier à tisser, visite Tourism'Tour",
      en: "Person working at a loom, Tourism'Tour visit",
    },
    position: 'center 45%',
  },
  testimonials: {
    src: '/images/banners/fb_01-1920.webp',
    alt: {
      fr: "Personnes qui s'amusent sur une plage de sable, sortie Tourism'Tour",
      en: "People having fun on a sandy beach, Tourism'Tour outing",
    },
    position: 'center 40%',
  },
};

export function bannerFor(key: BannerKey, locale: Locale) {
  const banner = banners[key];
  return {
    src: banner.src,
    alt: banner.alt[locale],
    position: banner.position,
  };
}
