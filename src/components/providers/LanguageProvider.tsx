'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, getDictionary, Dictionary } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');
  const [t, setT] = useState<Dictionary>(getDictionary('fr'));

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && (saved === 'fr' || saved === 'en')) {
      setLocaleState(saved);
      setT(getDictionary(saved));
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setT(getDictionary(newLocale));
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
