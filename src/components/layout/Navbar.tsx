'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { cn } from '@/lib/utils';

// Pages where the navbar should be transparent over the hero
const TRANSPARENT_PAGES = ['/'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  const isTransparentPage = TRANSPARENT_PAGES.includes(pathname);
  const isTransparent = isTransparentPage && !scrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/circuits', label: t.nav.circuits },
    { href: '/experiences', label: t.nav.experiences },
    { href: '/events', label: t.nav.events },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className={cn(
              'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 font-heading font-bold text-lg',
              isTransparent
                ? 'bg-white/20 text-white backdrop-blur-sm'
                : 'bg-primary-700 text-white'
            )}>
              T
            </div>
            <div className="flex flex-col">
              <span className={cn(
                'text-lg font-heading font-bold leading-tight transition-colors duration-300',
                isTransparent ? 'text-white' : 'text-primary-900'
              )}>
                Tourism&apos;Tour
              </span>
              <span className={cn(
                'text-[10px] font-medium tracking-widest uppercase leading-tight transition-colors duration-300',
                isTransparent ? 'text-white/70' : 'text-primary-400'
              )}>
                Bénin
              </span>
            </div>
          </Link>

          {/* Desktop Navigation — center */}
          <div className="hidden lg:flex items-center">
            <div className={cn(
              'flex items-center space-x-1 px-2 py-1.5 rounded-full transition-all duration-300',
              isTransparent
                ? 'bg-white/10 backdrop-blur-sm'
                : 'bg-sand-100/80'
            )}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                      isActive
                        ? isTransparent
                          ? 'bg-white/20 text-white'
                          : 'bg-white text-primary-700 shadow-sm'
                        : isTransparent
                          ? 'text-white/80 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-primary-700 hover:bg-white/80'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Actions — right */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className={cn(
                'flex items-center space-x-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300',
                isTransparent
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-primary-700 hover:bg-sand-100'
              )}
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
              <span>{locale === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            <Button
              asChild
              className={cn(
                'rounded-full px-6 transition-all duration-300',
                isTransparent
                  ? 'bg-white text-primary-900 hover:bg-white/90 shadow-lg shadow-black/10'
                  : ''
              )}
            >
              <Link href="/contact">
                {t.nav.planTrip}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2.5 rounded-full transition-all duration-300',
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-gray-700 hover:bg-sand-100'
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        )}>
          <div className="flex flex-col space-y-1 pt-2">
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
            <div className="pt-4 flex items-center justify-between px-4 border-t border-sand-200 mt-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{locale === 'fr' ? 'English' : 'Français'}</span>
              </button>
              <Button asChild size="sm" className="rounded-full px-5">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  {t.nav.planTrip}
                  <ChevronRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
