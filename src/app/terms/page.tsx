'use client';

import { AnimatedSection } from '@/components/common/AnimatedSection';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function TermsPage() {
  const { locale } = useLanguage();

  const content = locale === 'en' ? {
    title: 'Terms & Conditions',
    lastUpdated: 'Last updated: January 2025',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: `By accessing and using the Tourism'Tour website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`
      },
      {
        title: '2. Services Description',
        content: `Tourism'Tour organizes cultural tourism circuits and experiences in Benin. Our services include:

- Guided tours and circuits
- Cultural immersion experiences
- Event-based travel packages
- Custom trip planning

All bookings are subject to availability and confirmation by our team.`
      },
      {
        title: '3. Booking and Reservations',
        content: `To make a reservation:

- Submit a request through our contact form or by contacting us directly
- Our team will respond with availability and pricing information
- Reservations are confirmed only after receiving written confirmation from Tourism'Tour
- Final pricing will be communicated before confirmation

Note: Prices displayed on our website are indicative and may vary based on group size, dates, and specific requirements.`
      },
      {
        title: '4. Payment Terms',
        content: `- A deposit may be required to confirm your reservation
- Full payment is typically due before the start of your tour
- Accepted payment methods will be communicated upon booking
- All prices are in XOF (West African CFA franc) or as otherwise specified`
      },
      {
        title: '5. Cancellation Policy',
        content: `Cancellation policies vary depending on the type of booking:

- Cancellations made more than 30 days before departure: Full refund minus administrative fees
- Cancellations made 15-30 days before departure: 50% refund
- Cancellations made less than 15 days before departure: No refund

We recommend purchasing travel insurance to cover unforeseen cancellations.`
      },
      {
        title: '6. Travel Requirements',
        content: `Travelers are responsible for:

- Valid travel documents (passport, visas)
- Required vaccinations (Yellow Fever certificate is mandatory for Benin)
- Travel and health insurance
- Compliance with local laws and regulations

Tourism'Tour is not responsible for denied entry due to insufficient documentation.`
      },
      {
        title: '7. Liability',
        content: `Tourism'Tour takes reasonable precautions to ensure your safety and comfort. However:

- We are not liable for injuries, accidents, or losses that occur during tours except in cases of proven negligence
- We are not responsible for delays, changes, or cancellations due to weather, political situations, or other force majeure events
- Travelers participate in activities at their own risk`
      },
      {
        title: '8. Intellectual Property',
        content: `All content on this website, including text, images, logos, and designs, is the property of Tourism'Tour and is protected by intellectual property laws. Unauthorized use is prohibited.`
      },
      {
        title: '9. Privacy',
        content: `Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.`
      },
      {
        title: '10. Changes to Terms',
        content: `We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Continued use of our services constitutes acceptance of the modified terms.`
      },
      {
        title: '11. Governing Law',
        content: `These terms are governed by the laws of the Republic of Benin. Any disputes arising from these terms will be resolved in the courts of Benin.`
      },
      {
        title: '12. Contact Information',
        content: `For any questions about these terms, please contact us:

Email: contact@tourismtour.com
WhatsApp: +229 XX XX XX XX
Address: Cotonou, Benin`
      },
    ],
  } : {
    title: 'Conditions Générales',
    lastUpdated: 'Dernière mise à jour : Janvier 2025',
    sections: [
      {
        title: '1. Acceptation des Conditions',
        content: `En accédant et en utilisant le site web et les services de Tourism'Tour, vous acceptez d'être lié par ces Conditions Générales. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.`
      },
      {
        title: '2. Description des Services',
        content: `Tourism'Tour organise des circuits et expériences de tourisme culturel au Bénin. Nos services comprennent :

- Visites guidées et circuits
- Expériences d'immersion culturelle
- Forfaits de voyage événementiels
- Planification de voyages sur mesure

Toutes les réservations sont soumises à disponibilité et confirmation par notre équipe.`
      },
      {
        title: '3. Réservations',
        content: `Pour effectuer une réservation :

- Soumettez une demande via notre formulaire de contact ou en nous contactant directement
- Notre équipe répondra avec les informations de disponibilité et de tarification
- Les réservations ne sont confirmées qu'après réception d'une confirmation écrite de Tourism'Tour
- Le prix final sera communiqué avant confirmation

Note : Les prix affichés sur notre site sont indicatifs et peuvent varier selon la taille du groupe, les dates et les exigences spécifiques.`
      },
      {
        title: '4. Conditions de Paiement',
        content: `- Un acompte peut être requis pour confirmer votre réservation
- Le paiement intégral est généralement dû avant le début de votre circuit
- Les moyens de paiement acceptés seront communiqués lors de la réservation
- Tous les prix sont en XOF (Franc CFA Ouest Africain) ou comme autrement spécifié`
      },
      {
        title: '5. Politique d\'Annulation',
        content: `Les politiques d'annulation varient selon le type de réservation :

- Annulations effectuées plus de 30 jours avant le départ : Remboursement intégral moins frais administratifs
- Annulations effectuées 15-30 jours avant le départ : Remboursement de 50%
- Annulations effectuées moins de 15 jours avant le départ : Pas de remboursement

Nous recommandons de souscrire une assurance voyage pour couvrir les annulations imprévues.`
      },
      {
        title: '6. Exigences de Voyage',
        content: `Les voyageurs sont responsables de :

- Documents de voyage valides (passeport, visas)
- Vaccinations requises (Le certificat de fièvre jaune est obligatoire pour le Bénin)
- Assurance voyage et santé
- Respect des lois et réglementations locales

Tourism'Tour n'est pas responsable des refus d'entrée dus à une documentation insuffisante.`
      },
      {
        title: '7. Responsabilité',
        content: `Tourism'Tour prend des précautions raisonnables pour assurer votre sécurité et votre confort. Cependant :

- Nous ne sommes pas responsables des blessures, accidents ou pertes survenant pendant les circuits, sauf en cas de négligence prouvée
- Nous ne sommes pas responsables des retards, changements ou annulations dus aux conditions météorologiques, situations politiques ou autres événements de force majeure
- Les voyageurs participent aux activités à leurs propres risques`
      },
      {
        title: '8. Propriété Intellectuelle',
        content: `Tout le contenu de ce site web, y compris les textes, images, logos et designs, est la propriété de Tourism'Tour et est protégé par les lois sur la propriété intellectuelle. L'utilisation non autorisée est interdite.`
      },
      {
        title: '9. Confidentialité',
        content: `Votre vie privée est importante pour nous. Veuillez consulter notre Politique de Confidentialité pour des informations sur la façon dont nous collectons, utilisons et protégeons vos données personnelles.`
      },
      {
        title: '10. Modifications des Conditions',
        content: `Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront effectives immédiatement après publication sur ce site web. L'utilisation continue de nos services constitue une acceptation des conditions modifiées.`
      },
      {
        title: '11. Loi Applicable',
        content: `Ces conditions sont régies par les lois de la République du Bénin. Tout litige découlant de ces conditions sera résolu devant les tribunaux du Bénin.`
      },
      {
        title: '12. Informations de Contact',
        content: `Pour toute question concernant ces conditions, veuillez nous contacter :

Email : contact@tourismtour.com
WhatsApp : +229 XX XX XX XX
Adresse : Cotonou, Bénin`
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary-900 text-white pt-28 lg:pt-36 pb-16 lg:pb-20">
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
