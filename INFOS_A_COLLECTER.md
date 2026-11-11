# Informations à collecter auprès de Gilbert / de l'agence (mis à jour v2)

Source des faits : `/workspace/faits_verifies_tourismtour.md`. Les emplacements « À confirmer » (encadré jaune pointillé) du site correspondent aux points ci-dessous. Rien n'a été inventé.

## Résolu en v2
- Adresse : Zogbadjè, Abomey-Calavi, Bénin (Facebook).
- Réseaux : Facebook et TikTok réels (faux liens Instagram/Twitter/YouTube retirés).
- Mission : bio Facebook utilisée sur À propos / accueil.
- Photos des éditions 2023–2025 : confirmées, galerie paginée en ligne.
- Escale Urbaine Acte IV (27–28 juin 2026) : page dédiée, liste d'activités issue des posts.
- Chiffres, témoignages, « Somba », YouTube, événements fictifs : retirés de l'affichage (code conservé).

## À confirmer : contact (`src/lib/site.ts`)
- Contact officiel : Facebook (+229 62 69 86 24, tourismtour100624@gmail.com, affiché) OU affiche (tourismtour2023@gmail.com, +229 01 62 69 86 24 / 01 57 56 25 46) ? Faut-il utiliser le format à 10 chiffres « 01 … » pour les appels ?
- Numéro WhatsApp réel ? (bouton WhatsApp masqué en attendant).
- Nom de domaine définitif (`NEXT_PUBLIC_SITE_URL`, défaut https://tourismtour.com).
- Année de création (l'ancien « 2023 » a été retiré du JSON-LD).
- Délai de réponse et horaires (retirés : « 24 h », « lun-ven 9h-18h »).

## À confirmer : Escale Urbaine
- Dates, lieu et tarifs de la prochaine édition ; ce qui est inclus ; conditions de participation.
- Programme réel par jour et horaires (le programme-type du site est une répartition indicative des activités).
- Photos de l'Acte IV (aucune dans le dépôt) ; partenaires à citer (le « Centre de recherche » tronqué n'est pas cité).
- Les éditions 2023–2025 sont-elles les Actes I à III d'Escale Urbaine ? Quels lieux/titres ? (Les photos 2025 portent un filigrane « Abomey ».) Le site ne les relie pas à Escale Urbaine et n'indique aucun lieu.
- Crédits photo (« MIA PICTURES » visible sur des images 2025) : autorisation de publication / mention.

## À confirmer : À propos / Why us
- Équipe (noms, rôles, photos, accord). Langues parlées. Licence / agrément. Années d'activité.
- Photos `Guide_1…4` : qui sont-ils ? (plus utilisées sur À propos.) Photo hero `Amazone.jpg` (statue) : OK ?

## À confirmer : Plan your trip
- Visa (aide, lettre d'invitation, liens officiels) ; santé (fièvre jaune : « couramment demandée » à vérifier) ; meilleure période ; accueil à l'aéroport ; paiement, acompte, annulation ; urgence ; prestations incluses et prix.

## Masqué (404, hors sitemap) tant que non validé : `siteConfig.showLegacyContent`
- 6 circuits (itinéraires, durées, prix), événements, témoignages, blog, FAQ : à proposer réellement ? Contenus à fournir.
- Pages légales (confidentialité, conditions) : génériques, à faire valider.
