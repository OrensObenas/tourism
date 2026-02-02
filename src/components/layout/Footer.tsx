'use client';

import Link from 'next/link';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/circuits', label: t.nav.circuits },
    { href: '/experiences', label: t.nav.experiences },
    { href: '/events', label: t.nav.events },
    { href: '/blog', label: t.nav.blog },
    { href: '/about', label: t.nav.about },
    { href: '/faq', label: t.nav.faq },
  ];

  const legalLinks = [
    { href: '/privacy', label: t.footer.privacy },
    { href: '/terms', label: t.footer.terms },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
    { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary-300" />
              <span className="text-xl font-heading font-bold">Tourism&apos;Tour</span>
            </Link>
            <p className="text-primary-200 text-sm">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-primary-800 hover:bg-primary-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-primary-200">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>contact@tourismtour.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-200">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+229 XX XX XX XX</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-primary-200">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span>Cotonou, Bénin</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              {t.footer.legal}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <p className="text-center text-primary-300 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
