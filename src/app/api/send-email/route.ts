import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Types pour les différents formulaires
type ContactPayload = {
  type: 'contact';
  fullName: string;
  email?: string;
  phone?: string;
  topic?: string;
  circuit?: string;
  message: string;
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

type EmailPayload = ContactPayload | EventInterestPayload | NewsletterPayload;

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
    const body: EmailPayload = await req.json();

    // Validation basique
    if (!body.type) {
      return NextResponse.json({ error: 'Type de formulaire manquant' }, { status: 400 });
    }

    const transporter = createTransporter();
    const contactEmail = process.env.CONTACT_EMAIL || 'orensobenas66@gmail.com';
    const senderEmail = process.env.SMTP_USER || 'gilbertobenas@gmail.com';

    let subject: string;
    let html: string;
    let replyTo: string | undefined;

    switch (body.type) {
      case 'contact': {
        if (!body.fullName || !body.message) {
          return NextResponse.json({ error: 'Nom et message requis' }, { status: 400 });
        }
        const email = buildContactEmail(body);
        subject = email.subject;
        html = email.html;
        replyTo = body.email || undefined;
        break;
      }
      case 'event-interest': {
        if (!body.email && !body.phone) {
          return NextResponse.json({ error: 'Email ou téléphone requis' }, { status: 400 });
        }
        const email = buildEventInterestEmail(body);
        subject = email.subject;
        html = email.html;
        replyTo = body.email || undefined;
        break;
      }
      case 'newsletter': {
        if (!body.email) {
          return NextResponse.json({ error: 'Email requis' }, { status: 400 });
        }
        const email = buildNewsletterEmail(body);
        subject = email.subject;
        html = email.html;
        break;
      }
      default:
        return NextResponse.json({ error: 'Type de formulaire inconnu' }, { status: 400 });
    }

    // Envoyer l'email
    await transporter.sendMail({
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
