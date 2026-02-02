'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/circuits', label: t.nav.circuits },
    { href: '/experiences', label: t.nav.experiences },
    { href: '/events', label: t.nav.events },
    { href: '/testimonials', label: t.nav.testimonials },
    { href: '/blog', label: t.nav.blog },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary-700" />
            <span className="text-xl font-heading font-bold text-primary-900">
              Tourism&apos;Tour
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-xl text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
              <span>{locale === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            <Button asChild>
              <Link href="/contact">{t.nav.planTrip}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-primary-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-sand-200 animate-slide-down">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-700 hover:bg-primary-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex items-center justify-between px-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-sm font-medium text-gray-700"
                >
                  <Globe className="h-4 w-4" />
                  <span>{locale === 'fr' ? 'English' : 'Français'}</span>
                </button>
                <Button asChild size="sm">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    {t.nav.planTrip}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
