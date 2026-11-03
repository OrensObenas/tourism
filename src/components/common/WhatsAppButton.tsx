'use client';

import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { whatsappLink } from '@/lib/site';

export function WhatsAppButton() {
  const { locale } = useLanguage();
  const label = locale === 'en' ? 'Chat with us on WhatsApp' : 'Discuter avec nous sur WhatsApp';
  const message =
    locale === 'en'
      ? "Hello Tourism'Tour, I'd like some information about a trip to Benin."
      : "Bonjour Tourism'Tour, je souhaiterais des informations pour un voyage au Bénin.";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
