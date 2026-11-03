import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { getCircuitBySlug } from '@/lib/data/circuits';

// Types pour les différents formulaires
type ContactPayload = {
  type: 'contact';
  fullName: string;
  email?: string;
  phone?: string;
  topic?: string;
  circuit?: string;
  message: string;
  receiveNews?: boolean;
};

type EventInterestPayload = {
  type: 'event-interest';
  name: string;
  email?: string;
  phone?: string;
  eventTitle: string;
  eventDate: string;
};

type NewsletterPayload = {
  type: 'newsletter';
  email: string;
};

// Validation des données reçues (ne jamais faire confiance au navigateur)
const optionalText = (max: number) =>
  z.string().trim().max(max).optional().transform((v) => v || undefined);

const payloadSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('contact'),
    fullName: z.string().trim().min(2).max(100),
    email: z.email().max(200).optional(),
    phone: optionalText(30),
    topic: optionalText(50),
    circuit: optionalText(100),
    message: z.string().trim().min(10).max(5000),
    receiveNews: z.boolean().optional(),
    website: z.string().optional(),
  }),
  z.object({
    type: z.literal('event-interest'),
    name: z.string().trim().max(100).default(''),
    email: z.email().max(200).optional(),
    phone: optionalText(30),
    eventTitle: z.string().trim().min(1).max(200),
    eventDate: z.string().trim().max(50).default(''),
    website: z.string().optional(),
  }),
  z.object({
    type: z.literal('newsletter'),
    email: z.email().max(200),
    website: z.string().optional(),
  }),
]);

// Échappe le HTML pour empêcher l'injection de code dans les emails reçus
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeFields<T extends Record<string, unknown>>(data: T): T {
  return Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, typeof v === 'string' ? escapeHtml(v) : v])
  ) as T;
}

// Limite simple : 5 envois par IP toutes les 10 minutes (en mémoire, par instance)
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

const TOPIC_LABELS: Record<string, string> = {
  general: 'Question générale',
  reservation: 'Demande de réservation',
  group: 'Voyage de groupe',
  other: 'Autre',
};

// Créer le transporteur SMTP
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Générer le HTML pour le formulaire de contact
function buildContactEmail(data: ContactPayload): { subject: string; html: string } {
  const subject = `[Tourism'Tour] Nouveau message de ${data.fullName}${data.topic ? ` - ${data.topic}` : ''}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 0; background: #f9f5f0; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #6d28d9, #4c1d95); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 22px; }
        .header p { color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px; }
        .body { padding: 30px; }
        .field { margin-bottom: 16px; border-bottom: 1px solid #f3ebe0; padding-bottom: 12px; }
        .field:last-child { border-bottom: none; }
        .label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .value { font-size: 15px; color: #333; line-height: 1.5; }
        .message-box { background: #f9f5f0; border-radius: 8px; padding: 16px; margin-top: 8px; }
        .footer { background: #f9f5f0; padding: 20px 30px; text-align: center; font-size: 12px; color: #888; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📩 Nouveau Message</h1>
          <p>Tourism'Tour - Formulaire de Contact</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">Nom complet</div>
            <div class="value"><strong>${data.fullName}</strong></div>
          </div>
          ${data.email ? `
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>` : ''}
          ${data.phone ? `
          <div class="field">
            <div class="label">Téléphone</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>` : ''}
          ${data.topic ? `
          <div class="field">
            <div class="label">Sujet</div>
            <div class="value">${data.topic}</div>
          </div>` : ''}
          ${data.circuit ? `
          <div class="field">
            <div class="label">Circuit concerné</div>
            <div class="value">${data.circuit}</div>
          </div>` : ''}
          ${data.receiveNews ? `
          <div class="field">
            <div class="label">Newsletter</div>
            <div class="value">✅ Souhaite recevoir les actualités</div>
          </div>` : ''}
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
        <div class="footer">
          Envoyé depuis le site Tourism'Tour | ${new Date().toLocaleString('fr-FR')}
        </div>
      </div>
    </body>
    </html>
  `;

  return { subject, html };
}

// Générer le HTML pour l'intérêt événement
function buildEventInterestEmail(data: EventInterestPayload): { subject: string; html: string } {
  const subject = `[Tourism'Tour] Intérêt pour : ${data.eventTitle}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 0; background: #f9f5f0; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 22px; }
        .header p { color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px; }
        .body { padding: 30px; }
        .field { margin-bottom: 16px; border-bottom: 1px solid #f3ebe0; padding-bottom: 12px; }
        .field:last-child { border-bottom: none; }
        .label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
        .value { font-size: 15px; color: #333; }
        .event-badge { display: inline-block; background: #ede9fe; color: #6d28d9; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; }
        .footer { background: #f9f5f0; padding: 20px 30px; text-align: center; font-size: 12px; color: #888; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Nouvel Intérêt Événement</h1>
          <p>Un visiteur est intéressé par un événement</p>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">Événement</div>
            <div class="value"><span class="event-badge">${data.eventTitle}</span></div>
          </div>
          <div class="field">
            <div class="label">Date de l'événement</div>
            <div class="value">${data.eventDate}</div>
          </div>
          ${data.name ? `
          <div class="field">
            <div class="label">Nom</div>
            <div class="value"><strong>${data.name}</strong></div>
          </div>` : ''}
          ${data.email ? `
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>` : ''}
          ${data.phone ? `
          <div class="field">
            <div class="label">Téléphone</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>` : ''}
        </div>
        <div class="footer">
          Envoyé depuis le site Tourism'Tour | ${new Date().toLocaleString('fr-FR')}
        </div>
      </div>
    </body>
    </html>
  `;

  return { subject, html };
}

// Générer le HTML pour newsletter
function buildNewsletterEmail(data: NewsletterPayload): { subject: string; html: string } {
  const subject = `[Tourism'Tour] Nouvelle inscription newsletter`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 0; background: #f9f5f0; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.08); }
        .header { background: linear-gradient(135deg, #a78bfa, #7c3aed); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 22px; }
        .body { padding: 30px; text-align: center; }
        .email-badge { display: inline-block; background: #ede9fe; color: #6d28d9; padding: 10px 24px; border-radius: 25px; font-size: 16px; font-weight: 600; }
        .footer { background: #f9f5f0; padding: 20px 30px; text-align: center; font-size: 12px; color: #888; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📬 Nouvelle Inscription Newsletter</h1>
        </div>
        <div class="body">
          <p style="color: #666; margin-bottom: 20px;">Un nouveau visiteur souhaite recevoir les actualités de Tourism'Tour :</p>
          <div class="email-badge">${data.email}</div>
        </div>
        <div class="footer">
          Envoyé depuis le site Tourism'Tour | ${new Date().toLocaleString('fr-FR')}
        </div>
      </div>
    </body>
    </html>
  `;

  return { subject, html };
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Trop de requêtes, réessayez plus tard' }, { status: 429 });
    }

    const parsed = payloadSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }
    const body = parsed.data;

    // Honeypot rempli => robot : on fait semblant que tout s'est bien passé
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    const senderEmail = process.env.SMTP_USER;
    if (!contactEmail || !senderEmail || !process.env.SMTP_PASS) {
      console.error('Configuration SMTP manquante : voir .env.example');
      return NextResponse.json({ error: 'Service email non configuré' }, { status: 500 });
    }

    let subject: string;
    let html: string;
    let replyTo: string | undefined;

    switch (body.type) {
      case 'contact': {
        if (!body.email && !body.phone) {
          return NextResponse.json({ error: 'Email ou téléphone requis' }, { status: 400 });
        }
        const circuit = body.circuit ? getCircuitBySlug(body.circuit) : undefined;
        const email = buildContactEmail(
          escapeFields({
            ...body,
            topic: body.topic ? TOPIC_LABELS[body.topic] || body.topic : undefined,
            circuit: circuit ? circuit.title : body.circuit,
          })
        );
        subject = `[Tourism'Tour] Nouveau message de ${body.fullName}${body.topic ? ` - ${TOPIC_LABELS[body.topic] || body.topic}` : ''}`;
        html = email.html;
        replyTo = body.email;
        break;
      }
      case 'event-interest': {
        if (!body.email && !body.phone) {
          return NextResponse.json({ error: 'Email ou téléphone requis' }, { status: 400 });
        }
        const email = buildEventInterestEmail(escapeFields(body));
        subject = `[Tourism'Tour] Intérêt pour : ${body.eventTitle}`;
        html = email.html;
        replyTo = body.email;
        break;
      }
      case 'newsletter': {
        const email = buildNewsletterEmail(escapeFields(body));
        subject = email.subject;
        html = email.html;
        break;
      }
    }

    await createTransporter().sendMail({
      from: `"Tourism'Tour" <${senderEmail}>`,
      to: contactEmail,
      replyTo,
      subject,
      html,
    });

    return NextResponse.json({ success: true, message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
