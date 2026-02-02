'use client';

import { useState } from 'react';
import Link from 'next/link';
import { z } from 'zod';
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
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  preferredLanguage: z.enum(['fr', 'en']),
  topic: z.enum(['general', 'reservation', 'group', 'partnership', 'press', 'other']),
  circuit: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'You must accept the privacy policy'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { locale, t } = useLanguage();
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    fullName: '',
    email: '',
    phone: '',
    preferredLanguage: locale === 'en' ? 'en' : 'fr',
    topic: undefined,
    circuit: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      console.log('Form submitted:', validatedData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preferredLanguage: locale === 'en' ? 'en' : 'fr',
        topic: undefined,
        circuit: '',
        message: '',
        consent: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+229 XX XX XX XX',
      link: 'https://wa.me/229XXXXXXXX',
      description: locale === 'en' ? 'Quick response' : 'Réponse rapide',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@tourismtour.com',
      link: 'mailto:contact@tourismtour.com',
      description: locale === 'en' ? 'Within 24h' : 'Sous 24h',
    },
    {
      icon: Phone,
      title: locale === 'en' ? 'Phone' : 'Téléphone',
      value: '+229 XX XX XX XX',
      link: 'tel:+229XXXXXXXX',
      description: locale === 'en' ? 'Mon-Fri, 9am-6pm' : 'Lun-Ven, 9h-18h',
    },
    {
      icon: MapPin,
      title: locale === 'en' ? 'Office' : 'Bureau',
      value: 'Cotonou, Bénin',
      link: '#',
      description: locale === 'en' ? 'By appointment' : 'Sur rendez-vous',
    },
  ];

  const socials = [
    { icon: Instagram, link: '#', label: 'Instagram' },
    { icon: Facebook, link: '#', label: 'Facebook' },
    { icon: Twitter, link: '#', label: 'Twitter' },
    { icon: Linkedin, link: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Header */}
      <section className="bg-primary-900 text-white py-16 lg:py-20">
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

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.contactPage.form.email} *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.contactPage.form.emailPlaceholder}
                          className={errors.email ? 'border-red-500' : ''}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.contactPage.form.phone}
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t.contactPage.form.phonePlaceholder}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.contactPage.form.preferredLanguage} *
                        </label>
                        <Select
                          value={formData.preferredLanguage}
                          onValueChange={(value: 'fr' | 'en') => setFormData({ ...formData, preferredLanguage: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.contactPage.form.topic} *
                        </label>
                        <Select
                          value={formData.topic}
                          onValueChange={(value) => setFormData({ ...formData, topic: value as ContactFormData['topic'] })}
                        >
                          <SelectTrigger className={errors.topic ? 'border-red-500' : ''}>
                            <SelectValue placeholder={t.contactPage.form.selectTopic} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">{t.contactPage.form.topics.general}</SelectItem>
                            <SelectItem value="reservation">{t.contactPage.form.topics.reservation}</SelectItem>
                            <SelectItem value="group">{t.contactPage.form.topics.group}</SelectItem>
                            <SelectItem value="partnership">{t.contactPage.form.topics.partnership}</SelectItem>
                            <SelectItem value="press">{t.contactPage.form.topics.press}</SelectItem>
                            <SelectItem value="other">{t.contactPage.form.topics.other}</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.topic && (
                          <p className="mt-1 text-sm text-red-500">{errors.topic}</p>
                        )}
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
                        rows={5}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

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
                      <p className="text-sm text-red-500 -mt-4">{errors.consent}</p>
                    )}

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
              <AnimatedSection delay={0.2}>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                  {t.contactPage.otherWays}
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
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
                            <p className="text-primary-600">{method.value}</p>
                            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                              <Clock className="h-3 w-3" />
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                  {t.contactPage.followUs}
                </h3>
                <div className="flex gap-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg border border-sand-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-gray-600" />
                    </a>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <Card className="p-6 bg-primary-50 border-primary-200" hover={false}>
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
