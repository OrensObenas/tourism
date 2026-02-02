'use client';

import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function PrivacyPage() {
  const { locale } = useLanguage();

  const content = locale === 'en' ? {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: January 2025',
    sections: [
      {
        title: '1. Information We Collect',
        content: `We collect information you provide directly to us, such as when you fill out a contact form, request information about our circuits, or communicate with us via email or WhatsApp. This information may include:
        
- Your name and contact information (email, phone number)
- Your preferred language
- Your travel preferences and interests
- Any other information you choose to provide`
      },
      {
        title: '2. How We Use Your Information',
        content: `We use the information we collect to:

- Respond to your inquiries and provide customer service
- Send you information about our circuits and services
- Personalize your experience with Tourism'Tour
- Improve our services and website
- Comply with legal obligations`
      },
      {
        title: '3. Information Sharing',
        content: `We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your information with:

- Service providers who assist us in operating our website and conducting our business
- Professional advisors such as lawyers and accountants
- Government authorities when required by law`
      },
      {
        title: '4. Data Security',
        content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.`
      },
      {
        title: '5. Your Rights',
        content: `You have the right to:

- Access your personal information
- Correct inaccurate information
- Request deletion of your information
- Object to processing of your information
- Withdraw consent at any time

To exercise these rights, please contact us at contact@tourismtour.com.`
      },
      {
        title: '6. Cookies',
        content: `Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect certain features of our website.`
      },
      {
        title: '7. Changes to This Policy',
        content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.`
      },
      {
        title: '8. Contact Us',
        content: `If you have any questions about this privacy policy, please contact us at:

Email: contact@tourismtour.com
WhatsApp: +229 XX XX XX XX
Address: Cotonou, Benin`
      },
    ],
  } : {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : Janvier 2025',
    sections: [
      {
        title: '1. Informations que Nous Collectons',
        content: `Nous collectons les informations que vous nous fournissez directement, comme lorsque vous remplissez un formulaire de contact, demandez des informations sur nos circuits, ou communiquez avec nous par email ou WhatsApp. Ces informations peuvent inclure :
        
- Votre nom et vos coordonnées (email, numéro de téléphone)
- Votre langue préférée
- Vos préférences et intérêts de voyage
- Toute autre information que vous choisissez de fournir`
      },
      {
        title: '2. Comment Nous Utilisons Vos Informations',
        content: `Nous utilisons les informations collectées pour :

- Répondre à vos demandes et fournir un service client
- Vous envoyer des informations sur nos circuits et services
- Personnaliser votre expérience avec Tourism'Tour
- Améliorer nos services et notre site web
- Respecter nos obligations légales`
      },
      {
        title: '3. Partage des Informations',
        content: `Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec :

- Les prestataires de services qui nous aident à exploiter notre site web et à mener nos activités
- Les conseillers professionnels tels que les avocats et les comptables
- Les autorités gouvernementales lorsque la loi l'exige`
      },
      {
        title: '4. Sécurité des Données',
        content: `Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, modification, divulgation ou destruction non autorisés. Cependant, aucune méthode de transmission sur Internet n'est 100% sécurisée.`
      },
      {
        title: '5. Vos Droits',
        content: `Vous avez le droit de :

- Accéder à vos informations personnelles
- Corriger les informations inexactes
- Demander la suppression de vos informations
- Vous opposer au traitement de vos informations
- Retirer votre consentement à tout moment

Pour exercer ces droits, veuillez nous contacter à contact@tourismtour.com.`
      },
      {
        title: '6. Cookies',
        content: `Notre site web utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités de notre site web.`
      },
      {
        title: '7. Modifications de Cette Politique',
        content: `Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page et en mettant à jour la date de "Dernière mise à jour".`
      },
      {
        title: '8. Nous Contacter',
        content: `Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :

Email : contact@tourismtour.com
WhatsApp : +229 XX XX XX XX
Adresse : Cotonou, Bénin`
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-primary-200">
              {content.lastUpdated}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              {content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
