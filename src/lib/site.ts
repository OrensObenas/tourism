// Coordonnées de l'agence — SOURCE UNIQUE.
// Modifiez les valeurs ici : elles sont reprises dans tout le site
// (navbar, footer, contact, pages circuits, mentions légales, SEO...).

export const siteConfig = {
  name: "Tourism'Tour",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tourismtour.com',
  email: 'contact@tourismtour.com',
  // Format affiché
  phoneDisplay: '+229 XX XX XX XX',
  // Format international sans espaces ni "+" (utilisé pour tel: et wa.me)
  phoneE164: '22900000000',
  whatsappE164: '22900000000',
  address: 'Cotonou, Bénin',
  foundedYear: 2023,
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
  },
};

export const phoneLink = `tel:+${siteConfig.phoneE164}`;
export const emailLink = `mailto:${siteConfig.email}`;

/** Lien WhatsApp, avec un message pré-rempli optionnel. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
