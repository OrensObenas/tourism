# 📋 INVENTAIRE COMPLET DU CONTENU STATIQUE — Tourism'Tour

> Ce fichier répertorie **tous les textes, images, liens, coordonnées et données fictives** du projet.
> Remplacez chaque élément par les vraies données de l'entreprise.

---

## Table des matières

1. [Informations générales de l'entreprise](#1-informations-générales-de-lentreprise)
2. [Images (URLs Unsplash à remplacer)](#2-images-urls-unsplash-à-remplacer)
3. [Textes de la page d'accueil](#3-textes-de-la-page-daccueil)
4. [Textes de la page À propos](#4-textes-de-la-page-à-propos)
5. [Équipe (page À propos)](#5-équipe-page-à-propos)
6. [Circuits (données)](#6-circuits-données)
7. [Événements (données)](#7-événements-données)
8. [Articles de blog (données)](#8-articles-de-blog-données)
9. [Témoignages (données)](#9-témoignages-données)
10. [Éditions passées (données)](#10-éditions-passées-données)
11. [FAQ (données)](#11-faq-données)
12. [Page Contact](#12-page-contact)
13. [Page Politique de confidentialité](#13-page-politique-de-confidentialité)
14. [Page Conditions générales](#14-page-conditions-générales)
15. [Footer](#15-footer)
16. [Textes i18n (traductions FR/EN)](#16-textes-i18n-traductions-fren)
17. [Liens réseaux sociaux](#17-liens-réseaux-sociaux)
18. [Liens WhatsApp](#18-liens-whatsapp)

---

## 1. Informations générales de l'entreprise

> ✅ **Email, téléphone, WhatsApp, adresse, réseaux sociaux et année de création se modifient désormais à un seul endroit : `src/lib/site.ts`.** Les variables d'envoi d'email sont décrites dans `.env.example`.

| Élément | Valeur actuelle (FICTIVE) | Fichier(s) concerné(s) |
|---------|--------------------------|----------------------|
| Nom de l'entreprise | `Tourism'Tour` | Partout |
| Sous-titre logo | `Bénin` | `Navbar.tsx` |
| Lettre logo | `T` | `Navbar.tsx` |
| Email | `contact@tourismtour.com` | `Footer.tsx`, `contact/page.tsx`, `privacy/page.tsx`, `terms/page.tsx` |
| Téléphone | `+229 XX XX XX XX` | `Footer.tsx`, `contact/page.tsx`, `privacy/page.tsx`, `terms/page.tsx` |
| WhatsApp | `+229 XX XX XX XX` | `contact/page.tsx`, `page.tsx` (accueil) |
| Lien WhatsApp | `https://wa.me/22900000000` | `page.tsx`, `contact/page.tsx`, `circuits/[slug]/page.tsx` |
| Adresse | `Cotonou, Bénin` | `Footer.tsx`, `contact/page.tsx`, `privacy/page.tsx`, `terms/page.tsx` |
| Copyright | `© 2026 Tourism'Tour. Tous droits réservés.` | `i18n.ts` → `footer.copyright` |
| Tagline | `Votre passeport pour le Bénin authentique` | `i18n.ts` → `footer.tagline` |
| Année de création | `2023` | `page.tsx` (badge "Depuis 2023") |
| Nombre de voyageurs | `962+` | `page.tsx` (badge hero) |
| Note satisfaction | `4.9/5` | `page.tsx` (badge hero) |

---

## 2. Images (URLs Unsplash à remplacer)

> **Toutes les images proviennent d'Unsplash (placeholder).** Remplacez par vos vraies photos.

### 🏠 Page d'accueil (`src/app/page.tsx`)

| Emplacement | URL actuelle | Remplacer par |
|------------|-------------|---------------|
| Hero (arrière-plan principal) | `https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920` | Photo panoramique du Bénin |
| CTA final (arrière-plan) | `https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920` | Photo coucher de soleil Bénin |

### 🗺️ Expériences Immersives (`src/components/home/ImmersiveExperiences.tsx`)

| Carte | URL actuelle | Remplacer par |
|-------|-------------|---------------|
| Immersion Culturelle | `https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800` | Photo temple/cérémonie vaudou |
| Safari & Nature | `https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800` | Photo du Parc Pendjari |
| Gastronomie Locale | `https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800` | Photo cuisine béninoise |
| Rencontres Humaines | `https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800` | Photo communauté locale |

### 📖 Page À propos (`src/app/about/page.tsx`)

| Emplacement | URL actuelle | Remplacer par |
|------------|-------------|---------------|
| Hero | `https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&h=800&fit=crop` | Photo de l'équipe |
| Section Mission | `https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=800&h=600&fit=crop` | Photo mission/terrain |
| Expérience 1 | `https://images.unsplash.com/photo-1580746738099-78d6833b3a85?w=400&h=300&fit=crop` | Photo expérience terrain |
| Expérience 2 | `https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop` | Photo expérience terrain |
| Expérience 3 | `https://images.unsplash.com/photo-1580746738081-78d6833b3a85?w=400&h=300&fit=crop` | Photo expérience terrain |
| Expérience 4 | `https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop` | Photo expérience terrain |

### 👥 Photos équipe (`src/app/about/page.tsx`)

| Personne | URL actuelle | Remplacer par |
|----------|-------------|---------------|
| Koffi Mensah (Fondateur) | `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face` | Vraie photo |
| Aminata Diallo (Opérations) | `https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face` | Vraie photo |
| Jean-Pierre Ahouandjinou (Guide) | `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face` | Vraie photo |
| Mariame Bello (Relations Clients) | `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face` | Vraie photo |

### 🏕️ Images circuits (`src/lib/data/circuits.ts`)

| Circuit | Hero Image | Galerie |
|---------|-----------|---------|
| Route des Esclaves | `photo-1523805009345-7448845a9e53?w=1200` | 4 images Unsplash |
| Ganvié | `photo-1580060839134-75a5edca2e99?w=1200` | 3 images Unsplash |
| Palais Royaux Abomey | `photo-1489749798305-4fea3ae63d43?w=1200` | 3 images Unsplash |
| Safari Pendjari | `photo-1516426122078-c23e76319801?w=1200` | 3 images Unsplash |
| Tata Somba | `photo-1504893524553-b855bce32c67?w=1200` | 2 images Unsplash |
| Festival Vaudou | `photo-1533669955142-6a73332af4db?w=1200` | 2 images Unsplash |

### 📝 Images blog (`src/lib/data/blogPosts.ts`)

| Article | Cover Image |
|---------|-----------|
| Guide Vaudou | `photo-1533669955142-6a73332af4db?w=800` |
| Meilleure période | `photo-1516026672322-bc52d61a55d5?w=800` |
| Ganvié | `photo-1580060839134-75a5edca2e99?w=800` |
| Sécurité | `photo-1504893524553-b855bce32c67?w=800` |
| Royaume Dahomey | `photo-1489749798305-4fea3ae63d43?w=800` |
| Gastronomie | `photo-1547471080-7cc2caa01a7e?w=800` |
| Safari Pendjari | `photo-1516426122078-c23e76319801?w=800` |
| Préparer sa valise | `photo-1518709766631-a6a7f45921c3?w=800` |

### 📅 Images événements (`src/lib/data/events.ts`)

| Événement | Image |
|-----------|-------|
| Festival Vaudou 2026 | `photo-1533669955142-6a73332af4db?w=800` |
| Carnaval Cotonou | `photo-1504196606672-aef5c9cefc92?w=800` |
| Safari Pendjari Mars | `photo-1516426122078-c23e76319801?w=800` |
| Atelier Artisanat | `photo-1489749798305-4fea3ae63d43?w=800` |
| Découverte Nord | `photo-1504893524553-b855bce32c67?w=800` |

### 💬 Photos témoignages (`src/lib/data/testimonials.ts`)

| Personne | Photo |
|----------|-------|
| Marie Dupont | `photo-1494790108377-be9c29b29330?w=200` |
| Jean-Pierre Mensah | `photo-1507003211169-0a1dd7228f2d?w=200` |
| Sarah & Tom Williams | `photo-1522075469751-3a6694fb2f61?w=200` |
| Groupe ESSEC | `photo-1529156069898-49953e39b3ac?w=200` |
| Klaus & Ingrid Müller | `photo-1544005313-94ddf0286df2?w=200` |
| Aminata Diallo | `photo-1531123897727-8f129e1688ce?w=200` |

---

## 3. Textes de la page d'accueil

> **Fichier i18n** : `src/lib/i18n.ts` — **Page** : `src/app/page.tsx`

### Hero

| Clé i18n | FR | EN |
|---------|----|----|
| `hero.title` | Découvrez le Bénin Authentique | Discover Authentic Benin |
| `hero.subtitle` | Vivez des expériences culturelles uniques avec des experts locaux passionnés | Experience unique cultural adventures with passionate local experts |
| `hero.discoverCircuits` | Découvrir les circuits | Discover circuits |
| `hero.contactUs` | Nous contacter | Contact us |
| `hero.badges.fieldExperience` | Expérience terrain | Field experience |
| `hero.badges.culturalTourism` | Tourisme culturel | Cultural tourism |
| `hero.badges.adventure` | Aventure | Adventure |

### Badges flottants (hero)

| Clé i18n | FR | EN |
|---------|----|----|
| `heroBadges.travelers` | voyageurs accompagnés | travelers guided |
| `heroBadges.rating` | de satisfaction | satisfaction |
| `heroBadges.since` | Depuis | Since |

**Valeurs affichées dans le HTML :**
- `962+` voyageurs
- `4.9/5` satisfaction
- `2023` (année)

### Statistiques animées (`CounterStats.tsx`)

| Clé i18n | FR | EN | Valeur |
|---------|----|----|--------|
| `stats.travelers` | Voyageurs | Travelers | `962` |
| `stats.editions` | Éditions | Editions | `3` |
| `stats.circuits` | Circuits | Circuits | `15` |
| `stats.satisfaction` | Satisfaction | Satisfaction | `4.9/5` |

### Section "Pourquoi nous"

| Clé i18n | FR | EN |
|---------|----|----|
| `whyUs.title` | Pourquoi Tourism'Tour ? | Why Tourism'Tour? |
| `whyUs.subtitle` | Ce qui nous rend uniques | What makes us unique |
| `whyUs.features.fieldKnowledge.title` | Connaissance du terrain | Field knowledge |
| `whyUs.features.fieldKnowledge.description` | Notre équipe connaît chaque recoin du Bénin | Our team knows every corner of Benin |
| `whyUs.features.culturalExpertise.title` | Expertise culturelle locale | Local cultural expertise |
| `whyUs.features.culturalExpertise.description` | Des guides passionnés par leur patrimoine | Guides passionate about their heritage |
| `whyUs.features.humanSupport.title` | Accompagnement humain et sécurité | Human support and safety |
| `whyUs.features.humanSupport.description` | Votre bien-être est notre priorité | Your well-being is our priority |
| `whyUs.features.authentic.title` | Expériences authentiques | Authentic experiences |
| `whyUs.features.authentic.description` | Vivez le Bénin comme un local | Experience Benin like a local |

### Section Expériences Immersives

| Clé i18n | FR | EN |
|---------|----|----|
| `immersive.title` | Vivez l'expérience | Live the experience |
| `immersive.subtitle` | Plongez au cœur du Bénin à travers nos aventures uniques | Dive into the heart of Benin through our unique adventures |
| `immersive.cultural.title` | Immersion Culturelle | Cultural Immersion |
| `immersive.cultural.description` | Temples vaudou, palais royaux et traditions ancestrales | Voodoo temples, royal palaces and ancestral traditions |
| `immersive.nature.title` | Safari & Nature | Safari & Nature |
| `immersive.nature.description` | Parc Pendjari, faune sauvage et paysages à couper le souffle | Pendjari Park, wildlife and breathtaking landscapes |
| `immersive.gastronomy.title` | Gastronomie Locale | Local Gastronomy |
| `immersive.gastronomy.description` | Saveurs authentiques et cuisine traditionnelle béninoise | Authentic flavors and traditional Beninese cuisine |
| `immersive.community.title` | Rencontres Humaines | Human Encounters |
| `immersive.community.description` | Partagez le quotidien des communautés locales | Share the daily life of local communities |

### Section CTA finale

| Clé i18n | FR | EN |
|---------|----|----|
| `cta.title` | Prêt à vivre l'aventure ? | Ready for the adventure? |
| `cta.subtitle` | Contactez-nous pour planifier votre voyage sur mesure | Contact us to plan your custom trip |
| `cta.contact` | Nous contacter | Contact us |
| `cta.whatsapp` | WhatsApp | WhatsApp |
| `cta.quote` | "Le Bénin nous a changé à jamais. Merci Tourism'Tour." | "Benin changed us forever. Thank you Tourism'Tour." |
| `cta.quoteAuthor` | — Marie Dupont, voyageuse 2025 | — Marie Dupont, traveler 2025 |

---

## 4. Textes de la page À propos

> **Fichier** : `src/app/about/page.tsx` + `src/lib/i18n.ts`

### Hero

| Clé | FR | EN |
|-----|----|----|
| `aboutPage.hero.title` | Notre Histoire | Our Story |
| `aboutPage.hero.subtitle` | Passionnés par le Bénin depuis plus de 8 ans | Passionate about Benin for over 8 years |

### Mission

| Clé | FR | EN |
|-----|----|----|
| `aboutPage.mission.label` | Notre Mission | Our Mission |
| `aboutPage.mission.title` | Faire découvrir le Bénin authentique au monde entier | Showcasing authentic Benin to the world |
| `aboutPage.mission.paragraph1` | Tourism'Tour est né d'une passion profonde pour le Bénin et d'un désir de partager ses trésors cachés avec le monde... | Tourism'Tour was born from a deep passion for Benin and a desire to share its hidden treasures with the world... |
| `aboutPage.mission.paragraph2` | Notre équipe de guides locaux passionnés vous emmène au-delà des sentiers battus... | Our team of passionate local guides takes you beyond the beaten path... |
| `aboutPage.mission.paragraph3` | Chaque circuit est conçu pour créer des souvenirs inoubliables... | Each circuit is designed to create unforgettable memories... |

### Statistiques (dans page about)

| Valeur | Label FR | Label EN |
|--------|---------|---------|
| `8+` | Années d'Expérience | Years of Experience |
| `2,500+` | Voyageurs Satisfaits | Happy Travelers |
| `50+` | Circuits Uniques | Unique Circuits |
| `15` | Communautés Partenaires | Partner Communities |

### Valeurs (dans page about — texte en dur)

| Valeur | FR | EN |
|--------|----|----|
| Authenticité | Nous proposons des expériences authentiques qui vous connectent au vrai Bénin... | We offer genuine experiences that connect you with the real Benin... |
| Communauté | Nous travaillons directement avec les communautés locales... | We work directly with local communities... |
| Découverte | Chaque voyage est une invitation à explorer, apprendre et grandir... | Every trip is an invitation to explore, learn, and grow... |
| Durabilité | Nous nous engageons pour un tourisme responsable... | We are committed to responsible tourism... |
| Excellence | Nous visons la plus haute qualité dans chaque aspect de votre voyage... | We strive for the highest quality in every aspect of your journey... |

---

## 5. Équipe (page À propos)

> **Fichier** : `src/app/about/page.tsx`

| Nom | Rôle FR | Rôle EN | Bio FR | Bio EN | Photo |
|-----|---------|---------|--------|--------|-------|
| Koffi Mensah | Fondateur & PDG | Founder & CEO | Né et élevé à Cotonou, Koffi a plus de 15 ans d'expérience dans le tourisme culturel. | Born and raised in Cotonou, Koffi has over 15 years of experience in cultural tourism. | Unsplash |
| Aminata Diallo | Directrice des Opérations | Operations Director | Avec une formation en hôtellerie, Aminata veille au bon déroulement de chaque voyage. | With a background in hospitality, Aminata ensures every trip runs smoothly. | Unsplash |
| Jean-Pierre Ahouandjinou | Guide Principal | Lead Guide | Historien certifié et conteur passionné, JP donne vie à l'histoire lors de chaque visite. | A certified historian and passionate storyteller, JP brings history to life on every tour. | Unsplash |
| Mariame Bello | Relations Clients | Customer Relations | Mariame est votre premier point de contact, toujours prête à vous aider à planifier votre voyage parfait. | Mariame is your first point of contact, always ready to help plan your perfect trip. | Unsplash |

---

## 6. Circuits (données)

> **Fichier** : `src/lib/data/circuits.ts`

### Circuit 1 : Route des Esclaves - Ouidah

| Champ | FR | EN |
|-------|----|----|
| Titre | La Route des Esclaves - Ouidah | The Slave Route - Ouidah |
| Résumé court | Un voyage émouvant sur les traces de l'histoire à Ouidah, berceau du vaudou. | An emotional journey through history in Ouidah, the cradle of voodoo. |
| Description complète | Découvrez l'histoire poignante de la traite négrière à travers la célèbre Route des Esclaves... | Discover the poignant history of the slave trade through the famous Slave Route... |
| Durée | 1 jour | |
| Type | cultural | |
| Région | south | |
| Ville de départ | Cotonou | |
| Taille groupe | 2-15 | |
| Tags | Histoire, Culture, Vaudou, Patrimoine | History, Culture, Voodoo, Heritage |
| Point de rencontre | Hôtel du Lac, Cotonou - 7h45 | Hotel du Lac, Cotonou - 7:45am |
| Meilleure période | Novembre à Mars (saison sèche) | November to March (dry season) |
| **Inclus** | Transport A/R, Guide francophone expert, Déjeuner traditionnel, Entrées aux sites, Eau minérale | Round-trip transport, Expert guide, Traditional lunch, Site fees, Water |
| **Non inclus** | Pourboires, Dépenses personnelles, Assurance voyage | Tips, Personal expenses, Travel insurance |
| **À apporter** | Chaussures de marche, Chapeau/crème solaire, Appareil photo, Tenue respectueuse | Walking shoes, Hat/sunscreen, Camera, Respectful attire |

### Circuit 2 : Ganvié - La Venise de l'Afrique

| Champ | FR | EN |
|-------|----|----|
| Titre | Ganvié - La Venise de l'Afrique | Ganvié - The Venice of Africa |
| Résumé | Découvrez la fascinante cité lacustre de Ganvié, unique au monde. | Discover the fascinating lake city of Ganvié, unique in the world. |
| Durée | 1 jour | |
| Type | dayTrip | |
| Ville de départ | Cotonou | |
| Taille groupe | 2-10 | |
| Point de rencontre | Embarcadère d'Abomey-Calavi - 8h45 | Abomey-Calavi pier - 8:45am |

### Circuit 3 : Palais Royaux d'Abomey

| Champ | FR | EN |
|-------|----|----|
| Titre | Les Palais Royaux d'Abomey | The Royal Palaces of Abomey |
| Résumé | Plongez dans l'histoire du puissant royaume du Dahomey. | Dive into the history of the powerful Kingdom of Dahomey. |
| Durée | 2 jours | |
| Type | cultural | |
| Ville de départ | Cotonou | |
| Taille groupe | 2-12 | |
| Point de rencontre | Hôtel du Lac, Cotonou - 6h30 | Hotel du Lac, Cotonou - 6:30am |

### Circuit 4 : Safari Pendjari

| Champ | FR | EN |
|-------|----|----|
| Titre | Safari au Parc National de la Pendjari | Safari at Pendjari National Park |
| Résumé | Une aventure safari au cœur de la savane africaine. | A safari adventure in the heart of the African savanna. |
| Durée | 4 jours | |
| Type | adventure | |
| Ville de départ | Natitingou | |
| Taille groupe | 4-8 | |
| Point de rencontre | Aéroport de Natitingou ou hôtel | Natitingou airport or hotel |

### Circuit 5 : Tata Somba de l'Atacora

| Champ | FR | EN |
|-------|----|----|
| Titre | Les Tata Somba de l'Atacora | The Tata Somba of Atacora |
| Résumé | À la découverte des maisons-forteresses du peuple Somba. | Discovering the fortress-houses of the Somba people. |
| Durée | 3 jours | |
| Type | cultural | |
| Ville de départ | Natitingou | |
| Taille groupe | 2-10 | |

### Circuit 6 : Festival Vaudou de Ouidah

| Champ | FR | EN |
|-------|----|----|
| Titre | Festival Vaudou de Ouidah | Ouidah Voodoo Festival |
| Résumé | Vivez l'expérience unique du festival vaudou le 10 janvier. | Experience the unique voodoo festival on January 10th. |
| Durée | 3 jours | |
| Type | cultural | |
| Ville de départ | Cotonou | |
| Taille groupe | 4-12 | |

---

## 7. Événements (données)

> **Fichier** : `src/lib/data/events.ts`

| ID | Titre FR | Titre EN | Date | Lieu FR | Lieu EN | Places restantes |
|----|---------|---------|------|---------|---------|-----------------|
| 1 | Festival Vaudou 2026 | Voodoo Festival 2026 | 10/01/2026 - 12/01/2026 | Ouidah, Bénin | Ouidah, Benin | 8 |
| 2 | Carnaval de Cotonou | Cotonou Carnival | 15/02/2026 - 16/02/2026 | Cotonou, Bénin | Cotonou, Benin | 15 |
| 3 | Safari Pendjari - Édition Mars | Pendjari Safari - March Edition | 15/03/2026 - 19/03/2026 | Parc National Pendjari | Pendjari National Park | 4 |
| 4 | Atelier Artisanat à Abomey | Craft Workshop in Abomey | 20/04/2026 | Abomey, Bénin | Abomey, Benin | 10 |
| 5 | Découverte du Nord Bénin | North Benin Discovery | 10/05/2026 - 15/05/2026 | Nord Bénin | North Benin | 6 |

**Chaque événement a aussi :**
- Description FR et EN (voir le fichier `events.ts` pour le texte complet)

---

## 8. Articles de blog (données)

> **Fichier** : `src/lib/data/blogPosts.ts`

| ID | Titre FR | Titre EN | Catégorie | Auteur | Durée lecture |
|----|---------|---------|-----------|--------|---------------|
| 1 | Guide complet du Vaudou au Bénin : Histoire et Traditions | Complete Guide to Voodoo in Benin: History and Traditions | culture | Équipe Tourism'Tour | 8 min |
| 2 | Quelle est la meilleure période pour visiter le Bénin ? | What is the best time to visit Benin? | practical | Équipe Tourism'Tour | 5 min |
| 3 | Ganvié : À la découverte de la Venise de l'Afrique | Ganvié: Discovering the Venice of Africa | destinations | Équipe Tourism'Tour | 6 min |
| 4 | 10 conseils de sécurité pour voyager au Bénin | 10 safety tips for traveling in Benin | tips | Équipe Tourism'Tour | 4 min |
| 5 | Le Royaume du Dahomey : Une histoire fascinante | The Kingdom of Dahomey: A Fascinating History | culture | Équipe Tourism'Tour | 10 min |
| 6 | La gastronomie béninoise : saveurs et traditions | Beninese gastronomy: flavors and traditions | culture | Équipe Tourism'Tour | 6 min |
| 7 | Guide Safari : Le Parc National de la Pendjari | Safari Guide: Pendjari National Park | destinations | Équipe Tourism'Tour | 7 min |
| 8 | Comment préparer sa valise pour le Bénin ? | How to pack for Benin? | practical | Équipe Tourism'Tour | 4 min |

**⚠️ IMPORTANT** : Le contenu des articles (`content` / `contentEn`) est actuellement un texte raccourci (ex: "Le vaudou est bien plus qu'une simple religion..."). **Il faut écrire les articles complets.**

---

## 9. Témoignages (données)

> **Fichier** : `src/lib/data/testimonials.ts`

| ID | Nom | Type | Note | Circuit référence | Pays | Quote FR | Quote EN |
|----|-----|------|------|------------------|------|----------|----------|
| 1 | Marie Dupont | family | 5 | Ganvié - La Venise de l'Afrique | France | Un voyage incroyable en famille ! Nos enfants ont adoré la visite de Ganvié... | An incredible family trip! Our children loved the visit to Ganvié... |
| 2 | Jean-Pierre Mensah | solo | 5 | La Route des Esclaves | France | En tant que descendant béninois vivant en France, ce voyage m'a reconnecté à mes racines... | As a Beninese descendant living in France, this trip reconnected me to my roots... |
| 3 | Sarah & Tom Williams | couple | 5 | Safari au Parc Pendjari | United Kingdom | The safari at Pendjari was breathtaking!... | The safari at Pendjari was breathtaking!... |
| 4 | Groupe Étudiants ESSEC | student | 4 | Circuit Culturel Sur-Mesure | France | Notre voyage d'études au Bénin... parfaitement adapté à notre budget étudiant... | Our study trip to Benin... perfectly adapted to our student budget... |
| 5 | Famille Koffi | family | 5 | Les Palais Royaux d'Abomey | Togo | Nous vivons au Togo et voulions découvrir le Bénin voisin... | We live in Togo and wanted to discover neighboring Benin... |
| 6 | Klaus & Ingrid Müller | international | 5 | Découverte Complète du Bénin | Germany | Tourism'Tour made everything so easy for us non-French speakers... | Tourism'Tour made everything so easy for us non-French speakers... |
| 7 | Association Culturelle Afrique | group | 5 | Festival Vaudou de Ouidah | Belgium | Notre groupe de 20 personnes a été merveilleusement accueilli... | Our group of 20 people was wonderfully welcomed... |
| 8 | Aminata Diallo | solo | 5 | Circuit Sud Bénin | Senegal | Voyager seule en tant que femme, j'avais quelques appréhensions... | Traveling alone as a woman, I had some concerns... |

---

## 10. Éditions passées (données)

> **Fichier** : `src/lib/data/editions.ts`

### Édition 2025

| Champ | FR | EN |
|-------|----|----|
| Titre | Édition 2025 - L'Année de l'Excellence | 2025 Edition - The Year of Excellence |
| Récap | Une année exceptionnelle avec plus de 500 voyageurs accompagnés à travers le Bénin. | An exceptional year with over 500 travelers guided through Benin. |
| Participants | 523 | |
| Points forts | Lancement du circuit Safari Pendjari Premium / Partenariat Somba / 50+ festivals | Launch of Pendjari Safari Premium / Partnership with Somba / 50+ festivals |
| Vidéos | 2 vidéos YouTube (URLs placeholder : `dQw4w9WgXcQ`) | |

**Témoignages édition 2025 :**
- Marie Dupont (family) : "Un voyage incroyable en famille !"
- Sarah & Tom Williams (couple) : "The safari at Pendjari was breathtaking!"
- Aminata Diallo (solo) : "J'ai vécu le Bénin en toute sécurité."

### Édition 2024

| Champ | FR | EN |
|-------|----|----|
| Titre | Édition 2024 - Renaissance Post-Covid | 2024 Edition - Post-Covid Renaissance |
| Récap | Le retour en force du tourisme au Bénin ! | Tourism is back in Benin! |
| Participants | 312 | |
| Vidéos | 1 vidéo YouTube (URL placeholder) | |

### Édition 2023

| Champ | FR | EN |
|-------|----|----|
| Titre | Édition 2023 - Les Débuts de l'Aventure | 2023 Edition - The Beginning of the Adventure |
| Récap | L'année de lancement de Tourism'Tour ! | The launch year of Tourism'Tour! |
| Participants | 127 | |
| Vidéos | Aucune (à venir) | |

---

## 11. FAQ (données)

> **Fichier** : `src/lib/data/faq.ts` — 15 questions/réponses

| ID | Catégorie | Question FR | Question EN |
|----|-----------|------------|-------------|
| 1 | booking | Comment réserver un circuit avec Tourism'Tour ? | How do I book a circuit with Tourism'Tour? |
| 2 | booking | Quels sont les moyens de paiement acceptés ? | What payment methods are accepted? |
| 3 | safety | Le Bénin est-il un pays sûr pour les touristes ? | Is Benin a safe country for tourists? |
| 4 | safety | Quels vaccins sont nécessaires pour voyager au Bénin ? | What vaccinations are required to travel to Benin? |
| 5 | practical | Quelle est la meilleure période pour visiter le Bénin ? | What is the best time to visit Benin? |
| 6 | general | Les circuits sont-ils adaptés aux enfants ? | Are the circuits suitable for children? |
| 7 | booking | Que comprend le prix des circuits ? | What is included in the circuit price? |
| 8 | booking | Quelle est la politique d'annulation ? | What is the cancellation policy? |
| 9 | general | Les guides parlent-ils anglais ? | Do the guides speak English? |
| 10 | booking | Puis-je personnaliser un circuit existant ? | Can I customize an existing circuit? |
| 11 | practical | Comment se passe le transport pendant les circuits ? | How is transportation handled during circuits? |
| 12 | practical | Ai-je besoin d'un visa pour le Bénin ? | Do I need a visa for Benin? |
| 13 | general | Proposez-vous des voyages pour les groupes scolaires ? | Do you offer trips for school groups? |
| 14 | practical | Que dois-je mettre dans ma valise ? | What should I pack? |
| 15 | general | Tourism'Tour est-elle une agence responsable ? | Is Tourism'Tour a responsible agency? |

> ⚠️ Chaque question a aussi une réponse détaillée FR et EN — voir `src/lib/data/faq.ts` pour le texte complet.

---

## 12. Page Contact

> **Fichier** : `src/app/contact/page.tsx`

### Moyens de contact (en dur dans la page)

| Moyen | Valeur actuelle | Lien |
|-------|----------------|------|
| WhatsApp | `+229 XX XX XX XX` | `https://wa.me/22900000000` |
| Email | `contact@tourismtour.com` | `mailto:contact@tourismtour.com` |
| Téléphone | `+229 XX XX XX XX` | `tel:+22900000000` |
| Bureau | `Cotonou, Bénin` | — |

### Sujets du formulaire

| Valeur | FR | EN |
|--------|----|----|
| general | Question générale | General question |
| reservation | Demande de réservation | Reservation request |
| group | Voyage de groupe | Group travel |
| other | Autre | Other |

---

## 13. Page Politique de confidentialité

> **Fichier** : `src/app/privacy/page.tsx`
> **Date** : Dernière mise à jour : Janvier 2025

Contient 8 sections (FR et EN) — tout le texte est en dur dans le composant.
**Coordonnées mentionnées :**
- `contact@tourismtour.com`
- `+229 XX XX XX XX`
- `Cotonou, Bénin`

---

## 14. Page Conditions générales

> **Fichier** : `src/app/terms/page.tsx`
> **Date** : Dernière mise à jour : Janvier 2025

Contient 12 sections (FR et EN) — tout le texte est en dur dans le composant.
**Coordonnées mentionnées :**
- `contact@tourismtour.com`
- `+229 XX XX XX XX`
- `Cotonou, Bénin`

**Points importants à vérifier :**
- Politique d'annulation (30j / 15-30j / <15j)
- Moyens de paiement acceptés (XOF)
- Loi applicable (République du Bénin)

---

## 15. Footer

> **Fichier** : `src/components/layout/Footer.tsx` + `src/lib/i18n.ts`

| Élément | Valeur |
|---------|--------|
| Email | `contact@tourismtour.com` |
| Téléphone | `+229 XX XX XX XX` |
| Adresse | `Cotonou, Bénin` |
| Copyright FR | `© 2026 Tourism'Tour. Tous droits réservés.` |
| Copyright EN | `© 2026 Tourism'Tour. All rights reserved.` |
| Tagline FR | `Votre passeport pour le Bénin authentique` |
| Tagline EN | `Your passport to authentic Benin` |

---

## 16. Textes i18n (traductions FR/EN)

> **Fichier** : `src/lib/i18n.ts` — contient TOUTES les traductions de l'interface

Ce fichier contient ~750 lignes de traductions couvrant :

- **Navigation** : Accueil, Circuits, Expériences, Événements, Témoignages, Blog, À propos, Contact, FAQ
- **Hero** : Titre, sous-titre, badges
- **Sections accueil** : Pourquoi nous, Circuits à la une, Expériences immersives, Statistiques, Témoignages, Éditions, CTA
- **Pages** : Circuits, Détail circuit, Blog, FAQ, Contact, À propos, Témoignages, Expériences
- **Footer** : Liens, copyright, tagline
- **Commun** : En savoir plus, Retour, Chargement, Erreur, etc.

> ⚠️ Pour modifier un texte affiché sur le site, cherchez d'abord dans ce fichier (`i18n.ts`). Si le texte n'y est pas, il est probablement en dur dans le composant concerné.

---

## 17. Liens réseaux sociaux

> **Fichier** : `src/components/layout/Footer.tsx`

| Réseau | URL actuelle (PLACEHOLDER) |
|--------|--------------------------|
| Facebook | `https://facebook.com` |
| Instagram | `https://instagram.com` |
| Twitter | `https://twitter.com` |
| YouTube | `https://youtube.com` |

> ⚠️ Remplacez par les URLs complètes des pages de l'entreprise (ex: `https://facebook.com/tourismtour`).

---

## 18. Liens WhatsApp

> Tous les liens WhatsApp pointent vers `https://wa.me/22900000000`

**Fichiers concernés :**
- `src/app/page.tsx` (CTA final)
- `src/app/contact/page.tsx` (sidebar)
- `src/app/circuits/[slug]/page.tsx` (sidebar)

> Remplacez `22900000000` par le vrai numéro WhatsApp international (sans +, espaces, ni tirets).

---

## 📌 Récapitulatif des fichiers à modifier

| Fichier | Ce qu'il contient |
|---------|------------------|
| `src/lib/i18n.ts` | **TOUTES les traductions FR/EN de l'interface** |
| `src/lib/data/circuits.ts` | 6 circuits avec titres, descriptions, itinéraires, images |
| `src/lib/data/events.ts` | 5 événements avec titres, dates, descriptions, images |
| `src/lib/data/blogPosts.ts` | 8 articles avec titres, résumés, contenu, images |
| `src/lib/data/testimonials.ts` | 8 témoignages avec noms, quotes, photos |
| `src/lib/data/editions.ts` | 3 éditions passées avec récaps, vidéos, témoignages |
| `src/lib/data/faq.ts` | 15 questions/réponses |
| `src/app/about/page.tsx` | Équipe (4 membres), valeurs (5), stats |
| `src/app/contact/page.tsx` | Coordonnées (email, téléphone, WhatsApp) |
| `src/app/privacy/page.tsx` | Texte complet politique de confidentialité |
| `src/app/terms/page.tsx` | Texte complet conditions générales |
| `src/components/layout/Footer.tsx` | Coordonnées + liens réseaux sociaux |
| `src/components/layout/Navbar.tsx` | Nom de l'entreprise + logo |
| `src/app/page.tsx` | Chiffres hero (962+, 4.9/5, 2023) + lien WhatsApp |
| `src/components/home/CounterStats.tsx` | Valeurs numériques (962, 3, 15, 4.9) |

---

> **✅ Ce fichier est votre guide pour remplacer tout le contenu placeholder par les vraies données de l'entreprise.**
