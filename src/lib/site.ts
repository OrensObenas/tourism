// Coordonnées de l'agence — SOURCE UNIQUE.
// Source officielle retenue : page Facebook publique « Tourism'tour »
// (relevée le 11/11/2026, confirmée par Gilbert).
// Seules ces informations sont affichées : téléphone, e-mail, adresse,
// liens Facebook et TikTok. Le bouton WhatsApp reste masqué tant que
// whatsappE164 est vide.

export const siteConfig = {
  name: "Tourism'Tour",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tourismtour.com',
  email: 'tourismtour100624@gmail.com',
  phoneDisplay: '+229 62 69 86 24',
  // Format international sans espaces ni "+" (utilisé pour tel:)
  phoneE164: '22962698624',
  // Aucun numéro WhatsApp confirmé : le bouton reste masqué.
  whatsappE164: '',
  address: 'Zogbadjè, Abomey-Calavi, Bénin',
  addressEn: 'Zogbadjè, Abomey-Calavi, Benin',
  socials: {
    facebook: 'https://www.facebook.com/people/Tourismtour/61586171973467/',
    tiktok: 'https://www.tiktok.com/@tourismtour4',
  },
  // Circuits, événements, témoignages et blog : contenus de démonstration
  // non vérifiés, masqués (404, hors sitemap, hors navigation).
  // La FAQ est publique, avec des réponses prudentes réécrites.
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
