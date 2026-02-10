'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { circuits } from '@/lib/data/circuits';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  topic: string;
  circuit: string;
  message: string;
  consent: boolean;
  receiveNews: boolean;
};

export default function ContactPage() {
  const { locale, t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    topic: '',
    circuit: '',
    message: '',
    consent: false,
    receiveNews: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = locale === 'en' ? 'Name is required' : 'Le nom est requis';
    }

    if (!formData.email && !formData.phone) {
      const msg = locale === 'en'
        ? 'Please provide at least an email or a phone number.'
        : 'Veuillez fournir au moins un email ou un numéro de téléphone.';
      newErrors.email = msg;
      newErrors.phone = msg;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = locale === 'en' ? 'Invalid email' : 'Email invalide';
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = locale === 'en' ? 'Message must be at least 10 characters' : 'Le message doit contenir au moins 10 caractères';
    }

    if (!formData.consent) {
      newErrors.consent = locale === 'en' ? 'You must accept the privacy policy' : 'Vous devez accepter la politique de confidentialité';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          fullName: formData.fullName,
          email: formData.email || undefined,
          phone: formData.phone || undefined,
          topic: formData.topic || undefined,
          circuit: formData.circuit || undefined,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        topic: '',
        circuit: '',
        message: '',
        consent: false,
        receiveNews: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+229 XX XX XX XX',
      link: 'https://wa.me/22900000000',
      description: locale === 'en' ? 'Quick response – preferred' : 'Réponse rapide – privilégié',
      primary: true,
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@tourismtour.com',
      link: 'mailto:contact@tourismtour.com',
      description: locale === 'en' ? 'Within 24h' : 'Sous 24h',
      primary: false,
    },
    {
      icon: Phone,
      title: locale === 'en' ? 'Phone' : 'Téléphone',
      value: '+229 XX XX XX XX',
      link: 'tel:+22900000000',
      description: locale === 'en' ? 'Mon-Fri, 9am-6pm' : 'Lun-Ven, 9h-18h',
      primary: false,
    },
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <section className="bg-primary-900 text-white pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
              {t.contactPage.title}
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl">
              {t.contactPage.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Card className="p-6 lg:p-8" hover={false}>
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    {t.contactPage.form.title}
                  </h2>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800">
                        {locale === 'en' 
                          ? 'Thank you! Your message has been sent. We will contact you soon.'
                          : 'Merci ! Votre message a été envoyé. Nous vous contacterons bientôt.'
                        }
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-800">
                        {locale === 'en'
                          ? 'An error occurred. Please try again.'
                          : 'Une erreur est survenue. Veuillez réessayer.'
                        }
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contactPage.form.fullName} *
                      </label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.contactPage.form.fullNamePlaceholder}
                        className={errors.fullName ? 'border-red-500' : ''}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.contactPage.form.email}
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: undefined, phone: undefined }); }}
                          placeholder={t.contactPage.form.emailPlaceholder}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.contactPage.form.phone}
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, email: undefined, phone: undefined }); }}
                          placeholder={t.contactPage.form.phonePlaceholder}
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 -mt-2">
                      {locale === 'en'
                        ? '* At least one of email or phone is required.'
                        : '* Au moins un email ou téléphone est requis.'}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.contactPage.form.topic}
                        </label>
                        <Select
                          value={formData.topic}
                          onValueChange={(value) => setFormData({ ...formData, topic: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder={t.contactPage.form.selectTopic} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">{t.contactPage.form.topics.general}</SelectItem>
                            <SelectItem value="reservation">{t.contactPage.form.topics.reservation}</SelectItem>
                            <SelectItem value="group">{t.contactPage.form.topics.group}</SelectItem>
                            <SelectItem value="other">{t.contactPage.form.topics.other}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {formData.topic === 'reservation' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t.contactPage.form.circuit}
                          </label>
                          <Select
                            value={formData.circuit}
                            onValueChange={(value) => setFormData({ ...formData, circuit: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={t.contactPage.form.selectCircuit} />
                            </SelectTrigger>
                            <SelectContent>
                              {circuits.map((circuit) => (
                                <SelectItem key={circuit.id} value={circuit.slug}>
                                  {locale === 'en' ? circuit.titleEn : circuit.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contactPage.form.message} *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t.contactPage.form.messagePlaceholder}
                        rows={4}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                          className={errors.consent ? 'border-red-500' : ''}
                        />
                        <label htmlFor="consent" className="text-sm text-gray-600">
                          {t.contactPage.form.consent}{' '}
                          <Link href="/privacy" className="text-primary-600 hover:underline">
                            {t.contactPage.form.privacyLink}
                          </Link>
                        </label>
                      </div>
                      {errors.consent && (
                        <p className="text-sm text-red-500">{errors.consent}</p>
                      )}

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="receiveNews"
                          checked={formData.receiveNews}
                          onCheckedChange={(checked) => setFormData({ ...formData, receiveNews: checked as boolean })}
                        />
                        <label htmlFor="receiveNews" className="text-sm text-gray-600">
                          {locale === 'en'
                            ? "I'd like to receive Tourism'Tour news"
                            : "Je souhaite recevoir les actualités de Tourism'Tour"}
                        </label>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          {locale === 'en' ? 'Sending...' : 'Envoi en cours...'}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {t.contactPage.form.submit}
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* WhatsApp CTA - Primary */}
              <AnimatedSection delay={0.1}>
                <a
                  href="https://wa.me/22900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-6 bg-green-50 border-green-200 hover:border-green-400 transition-colors" hover>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-500 rounded-xl">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-gray-900">WhatsApp</h4>
                        <p className="text-green-700 font-medium">+229 XX XX XX XX</p>
                        <p className="text-sm text-gray-500">
                          {locale === 'en' ? 'Fastest way to reach us' : 'Le moyen le plus rapide'}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                  {t.contactPage.otherWays}
                </h3>
                <div className="space-y-3">
                  {contactMethods.filter(m => !m.primary).map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <Card className="p-4 hover:border-primary-300 transition-colors" hover>
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary-100 rounded-lg">
                            <method.icon className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{method.title}</h4>
                            <p className="text-primary-600 text-sm">{method.value}</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                              <Clock className="h-3 w-3" />
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                  <Card className="p-4" hover={false}>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {locale === 'en' ? 'Office' : 'Bureau'}
                        </h4>
                        <p className="text-sm text-gray-600">Cotonou, Bénin</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="p-5 bg-primary-50 border-primary-200" hover={false}>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2">
                    {t.contactPage.responseTime.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t.contactPage.responseTime.description}
                  </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
