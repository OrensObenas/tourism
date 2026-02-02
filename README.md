# 🌍 Tourism'Tour - Découvrez le Bénin Authentique

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

Tourism'Tour est une plateforme web moderne dédiée à la promotion du tourisme culturel au Bénin. Elle permet aux voyageurs de découvrir des circuits authentiques, des expériences culturelles uniques et des événements à travers ce magnifique pays d'Afrique de l'Ouest.

## 📸 Aperçu

Le site propose une expérience immersive pour découvrir :
- 🗺️ **Circuits touristiques** - La Route des Esclaves, le Parc de la Pendjari, les villages lacustres de Ganvié...
- 🎭 **Expériences culturelles** - Cérémonies vaudou, artisanat traditionnel, gastronomie locale
- 📅 **Événements** - Festivals, cérémonies traditionnelles, voyages organisés
- 💬 **Témoignages** - Retours d'expérience de voyageurs satisfaits
- 📝 **Blog** - Articles pour découvrir le Bénin

---

## ✨ Fonctionnalités

### 🌐 Multilingue
- Support complet **Français** et **Anglais**
- Changement de langue en temps réel sans rechargement de page

### 🎨 Interface Moderne
- Design responsive (mobile, tablette, desktop)
- Animations fluides avec **Framer Motion**
- Thème personnalisé avec palette de couleurs africaines
- Composants UI accessibles avec **Radix UI**

### 📱 Pages Principales
| Page | Description |
|------|-------------|
| **Accueil** | Hero immersif, circuits à la une, événements, témoignages |
| **Circuits** | Catalogue complet avec filtres (type, région, durée) |
| **Détail Circuit** | Itinéraire jour par jour, inclus/non-inclus, galerie photos |
| **Expériences** | Types de voyages disponibles |
| **Événements** | Calendrier des événements à venir |
| **Témoignages** | Avis des voyageurs avec filtres |
| **Blog** | Articles sur le Bénin |
| **À propos** | Présentation de l'équipe et valeurs |
| **Contact** | Formulaire de contact et informations |
| **FAQ** | Questions fréquentes avec accordéon |

### 🔧 Technique
- **Server-Side Rendering (SSR)** pour un SEO optimal
- **App Router** de Next.js 14
- **TypeScript** pour la sécurité du typage
- Architecture modulaire et maintenable

---

## 🛠️ Technologies Utilisées

### Frontend
- **[Next.js 14](https://nextjs.org/)** - Framework React avec App Router
- **[React 18](https://react.dev/)** - Bibliothèque UI
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitaire

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Composants accessibles (Accordion, Dialog, Select...)
- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[Framer Motion](https://www.framer.com/motion/)** - Animations

### Outils
- **[class-variance-authority](https://cva.style/)** - Variants de composants
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Gestion des classes CSS
- **[Zod](https://zod.dev/)** - Validation de schémas

---

## 📁 Structure du Projet

```
tourism-tour/
├── 📄 next.config.mjs        # Configuration Next.js
├── 📄 tailwind.config.ts     # Configuration Tailwind CSS
├── 📄 tsconfig.json          # Configuration TypeScript
├── 📄 package.json           # Dépendances et scripts
│
└── src/
    ├── app/                  # Pages de l'application (App Router)
    │   ├── layout.tsx        # Layout principal
    │   ├── page.tsx          # Page d'accueil
    │   ├── globals.css       # Styles globaux
    │   │
    │   ├── about/            # Page À propos
    │   ├── blog/             # Blog et articles [slug]
    │   ├── circuits/         # Circuits et détails [slug]
    │   ├── contact/          # Page Contact
    │   ├── events/           # Événements
    │   ├── experiences/      # Expériences
    │   ├── faq/              # FAQ
    │   ├── privacy/          # Politique de confidentialité
    │   ├── terms/            # Conditions d'utilisation
    │   └── testimonials/     # Témoignages
    │
    ├── components/           # Composants React
    │   ├── blog/             # Composants blog (BlogCard)
    │   ├── circuits/         # Composants circuits (CircuitCard)
    │   ├── common/           # Composants réutilisables
    │   ├── events/           # Composants événements
    │   ├── layout/           # Navbar, Footer
    │   ├── providers/        # Providers React (LanguageProvider)
    │   ├── testimonials/     # Composants témoignages
    │   └── ui/               # Composants UI de base
    │
    └── lib/                  # Utilitaires et données
        ├── i18n.ts           # Traductions FR/EN
        ├── utils.ts          # Fonctions utilitaires
        └── data/             # Données statiques
            ├── blogPosts.ts  # Articles de blog
            ├── circuits.ts   # Circuits touristiques
            ├── editions.ts   # Éditions
            ├── events.ts     # Événements
            ├── faq.ts        # Questions/Réponses FAQ
            └── testimonials.ts # Témoignages
```

---

## 🚀 Installation et Exécution

### Prérequis

Assurez-vous d'avoir installé :
- **Node.js** (version 18.17 ou supérieure) - [Télécharger](https://nodejs.org/)
- **npm** (inclus avec Node.js) ou **yarn** ou **pnpm**

Vérifiez vos versions :
```bash
node --version   # Doit afficher v18.17.0 ou supérieur
npm --version    # Doit afficher 9.0.0 ou supérieur
```

### Installation

1. **Clonez le repository** (ou téléchargez le projet)
   ```bash
   git clone <url-du-repository>
   cd tourism-tour
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   ```
   
   Ou avec yarn :
   ```bash
   yarn install
   ```
   
   Ou avec pnpm :
   ```bash
   pnpm install
   ```

### Exécution en mode développement

Lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez votre navigateur à l'adresse : **[http://localhost:3000](http://localhost:3000)**

Le serveur se rechargera automatiquement à chaque modification du code.

### Build de production

1. **Créez le build optimisé**
   ```bash
   npm run build
   ```

2. **Lancez le serveur de production**
   ```bash
   npm run start
   ```

### Linting

Vérifiez la qualité du code :
```bash
npm run lint
```

---

## 📜 Scripts Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarre le serveur de développement sur `localhost:3000` |
| `npm run build` | Compile l'application pour la production |
| `npm run start` | Démarre le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

---

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet si nécessaire :

```env
# Exemple de variables d'environnement
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Personnalisation du thème

Les couleurs et styles sont configurés dans `tailwind.config.ts` :

- **primary** : Palette violette principale
- **sand** : Tons sable/beige
- **sage** : Tons verts sauge

---

## 🌐 Internationalisation (i18n)

Le site supporte le français et l'anglais. Les traductions sont gérées dans :
- `src/lib/i18n.ts` - Dictionnaire de traductions

Pour changer de langue, utilisez le bouton globe dans la barre de navigation.

---

## 📱 Responsive Design

Le site est entièrement responsive :
- **Mobile** : < 640px
- **Tablette** : 640px - 1024px
- **Desktop** : > 1024px

---

## 🔒 Bonnes Pratiques

- ✅ TypeScript strict
- ✅ Composants accessibles (ARIA)
- ✅ SEO optimisé
- ✅ Performance optimisée (Image optimization, lazy loading)
- ✅ Code modulaire et réutilisable

---

## 🐛 Résolution de Problèmes

### Erreur de cache Next.js

Si vous rencontrez une erreur liée au cache :
```bash
# Supprimez le dossier .next et relancez
rm -rf .next
npm run dev
```

Sous Windows PowerShell :
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

### Problèmes de dépendances

```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 déjà utilisé

```bash
# Utilisez un autre port
npm run dev -- -p 3001
```

---

## 🚀 Déploiement

### Vercel (Recommandé)

La façon la plus simple de déployer votre application Next.js est d'utiliser la [Plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.

### Autres plateformes

L'application peut également être déployée sur :
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Docker** (serveur Node.js)

---

## 📄 Licence

Ce projet est développé pour **Tourism'Tour Bénin**.

---

## 👥 Équipe

Projet développé avec ❤️ pour promouvoir le tourisme culturel au Bénin.

---

## 📞 Contact

Pour toute question concernant le projet :
- 📧 Email : contact@tourismtour.bj
- 🌐 Site : [tourismtour.bj](https://tourismtour.bj)

---

## 🙏 Remerciements

- Images : [Unsplash](https://unsplash.com/)
- Icônes : [Lucide](https://lucide.dev/)
- UI Components : [Radix UI](https://www.radix-ui.com/)

---

*Fait avec Next.js, TypeScript et beaucoup de passion pour le Bénin* 🇧🇯
