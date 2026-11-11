// Coordonnées de l'agence — SOURCE UNIQUE.
// Source : page Facebook publique « Tourism'tour » (relevée le 11/11/2026).
// À CONFIRMER par Gilbert : l'affiche d'Escale Urbaine mentionne d'autres
// coordonnées (tourismtour2023@gmail.com, +229 01 62 69 86 24 et +229 01 57 56 25 46 « WhatsApp »).
// Modifiez les valeurs ici : elles sont reprises dans tout le site.

export const siteConfig = {
  name: "Tourism'Tour",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tourismtour.com',
  // À confirmer (contact de la page Facebook)
  email: 'tourismtour100624@gmail.com',
  // À confirmer (contact de la page Facebook)
  phoneDisplay: '+229 62 69 86 24',
  // Format international sans espaces ni "+" (utilisé pour tel:)
  phoneE164: '22962698624',
  // Aucun numéro WhatsApp n'est confirmé : le bouton WhatsApp est masqué tant que
  // cette valeur est vide. (Le numéro « WhatsApp » des affiches est à valider.)
  whatsappE164: '',
  address: 'Zogbadjè, Abomey-Calavi, Bénin',
  addressEn: 'Zogbadjè, Abomey-Calavi, Benin',
  socials: {
    facebook: 'https://www.facebook.com/people/Tourismtour/61586171973467/',
    tiktok: 'https://www.tiktok.com/@tourismtour4',
  },
  // Les 6 anciens circuits, événements, témoignages, blog et FAQ contiennent des
  // contenus de démonstration non vérifiés : masqués (404, hors sitemap, hors navigation).
  // Passer à true uniquement une fois les contenus confirmés par l'agence.
  showLegacyContent: false,
};

export const phoneLink = `tel:+${siteConfig.phoneE164}`;
export const emailLink = `mailto:${siteConfig.email}`;

/** true si un numéro WhatsApp confirmé est renseigné. */
export const hasWhatsapp = Boolean(siteConfig.whatsappE164);

/** Lien WhatsApp (à n'utiliser que si hasWhatsapp), avec un message pré-rempli optionnel. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
