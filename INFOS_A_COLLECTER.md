# Informations à collecter auprès de Gilbert / de l'agence

Chaque point ci-dessous correspond à un contenu générique ou à un emplacement « À confirmer » (encadré jaune pointillé) dans le site. Aucune de ces informations n'a été inventée.

## Global (`src/lib/site.ts`)
- Quel est le vrai numéro de téléphone / WhatsApp (actuellement `+229 XX XX XX XX` / `22900000000`) ?
- Quelle est l'adresse email définitive (actuellement `contact@tourismtour.com`) ?
- Quelle est l'adresse physique du bureau à Cotonou (actuellement « Cotonou, Bénin ») ?
- Quels sont les liens réels des réseaux sociaux (actuellement des URL génériques facebook.com, etc.) ?
- Quel est le nom de domaine définitif (variable `NEXT_PUBLIC_SITE_URL`, par défaut `https://tourismtour.com`) ?
- Année de création : 2023 est-elle exacte ?

## Page « Why us » (`/why-us`)
- Quelles langues l'équipe et les guides parlent-ils réellement (anglais, français, autres) ?
- L'agence a-t-elle une licence / un agrément officiel du Bénin ? Lequel (à citer) ?
- Depuis combien d'années exactement l'agence organise-t-elle des voyages ?
- Les guides sont-ils certifiés ? Peut-on citer des noms / photos de guides (avec leur accord) ?
- Quel dispositif d'accompagnement pendant le voyage existe-t-il réellement (contact joignable 24h/24, WhatsApp, accompagnateur sur place) ?
- Quelles actions concrètes pour les communautés locales (pour étayer « respectueux et porteur de sens ») ?

## Page « Plan your trip » (`/plan-your-trip`)
- **Visa et entrée** : l'agence peut-elle fournir une lettre d'invitation ou aider pour le visa ? Quels liens officiels recommander (e-visa, ambassades) ?
- **Santé** : quelles exigences vaccinales officielles citer (fièvre jaune, etc.) ? Quelles recommandations de l'agence (assurance, cliniques proches de chaque circuit) ? (Le texte actuel dit que la fièvre jaune est « couramment demandée » : à vérifier.)
- **Meilleure période** : quels mois recommandez-vous par région (Sud / Nord) et par circuit ? Dates des festivals à mettre en avant ?
- **Arrivée à Cotonou** : accueil à l'aéroport proposé ? tarif / conditions ? Comment le voyageur reconnaît-il le chauffeur ? Hôtels conseillés à Cotonou ?
- **Argent et paiement** : moyens de paiement acceptés par l'agence (virement international, carte, Mobile Money, espèces) ? Acompte ? Devise de facturation ? Conditions d'annulation et de remboursement ? Pourboires d'usage ? (Le texte actuel indique seulement que la monnaie locale est le franc CFA XOF : à vérifier, aucun taux de change n'est donné.)
- **Sécurité** : procédures d'urgence (numéro, assistance médicale, rapatriement) ? Recommandations par région ? Type de véhicules / chauffeurs ?
- **Ce qui est inclus** : prestations standard (transport, hébergement, repas, guide, entrées) ? Souhaitez-vous publier des prix ou fourchettes de prix ?

## Page d'accueil
- Photo de hero : `Amazone.jpg` convient-elle à un public étranger ? D'autres photos réelles à fournir ?
- La section « Comment ça marche » (4 étapes) correspond-elle au vrai processus de l'agence ?
- Retirés car non vérifiés : « 962+ voyageurs », « 4,9/5 », compteurs, citation de « Marie Dupont », carrousel de témoignages, éditions précédentes avec nombre de participants, événements à venir. Quels vrais chiffres / avis / événements (avec accord des personnes) peut-on republier ?

## Page À propos
- Retirés car non vérifiés : « 8+ ans », « 2 500+ voyageurs », « 50+ circuits », « 15 communautés », équipe (Koffi Mensah, Aminata Diallo, Jean-Pierre Ahouandjinou, Mariame Bello). Quelle est la vraie équipe (noms, rôles, photos, bios) ?
- Les textes de mission et de valeurs (Authenticité, Communauté, Durabilité, Excellence) reflètent-ils vraiment l'agence ?
- Les 4 photos « Guide_1…4 » : qui sont les personnes, ont-elles donné leur accord ?

## Circuits (`src/lib/data/circuits.ts`) — contenu placeholder existant, NON revu
- Les 6 circuits sont-ils réellement proposés ? Itinéraires, durées, tailles de groupe (min/max), point de départ, ce qui est inclus / non inclus, meilleure période, point de rencontre : tout est à valider.
- Vraies photos de chaque circuit (dossiers `public/images/circuits/*` vides, galeries = Unsplash).
- Prix : « sur demande » actuellement. Souhaitez-vous afficher des tarifs ?

## Événements, témoignages, éditions, blog, FAQ — contenu placeholder existant, NON revu
- `events.ts` : dates, lieux, « places restantes » (`spotsLeft`) sont fictifs. Les événements 2026 sont-ils réels ?
- `testimonials.ts` et témoignages des éditions : noms et avis fictifs ; remplacer par de vrais avis avec accord.
- `editions.ts` : « plus de 500 voyageurs », participants, faits marquants (« Partenariat avec les communautés Somba », etc.) à valider ; 2023 et 2024 ont des photos dans le dépôt.
- `faq.ts` : réponses sur paiement (Mobile Money MTN/Moov, virement, espèces au bureau), délai de réponse « 24h », sécurité, etc. à valider. Idem pour le temps de réponse de la page Contact.
- `blogPosts.ts` : articles à relire (faits historiques, conseils pratiques).

## Pages légales
- Politique de confidentialité et conditions générales : textes génériques. Conditions d'annulation, de paiement, responsabilité, droit applicable : à faire valider par l'agence (idéalement un juriste).
