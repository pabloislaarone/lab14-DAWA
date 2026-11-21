'use server';

import { Resend } from 'resend';
import { personalInfo } from '@/lib/data';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  errors?: Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;
  values?: { name: string; email: string; subject: string; message: string };
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const values = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    subject: String(formData.get('subject') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  };

  // Honeypot: los bots llenan este campo oculto, las personas no
  if (String(formData.get('company') ?? '').trim() !== '') {
    return { status: 'success', message: '¡Gracias! Tu mensaje fue enviado.' };
  }

  const errors: ContactState['errors'] = {};
  if (values.name.length < 2) errors.name = 'Escribe tu nombre.';
  if (!EMAIL_REGEX.test(values.email)) errors.email = 'Escribe un correo válido.';
  if (values.subject.length < 3) errors.subject = 'Escribe el asunto.';
  if (values.message.length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres.';
  if (values.message.length > 5000) errors.message = 'El mensaje es demasiado largo.';

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Revisa los campos marcados.', errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: 'error',
      message: `El formulario no está disponible en este momento. Escríbeme directamente a ${personalInfo.email}.`,
      values,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Portafolio <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || personalInfo.email,
      replyTo: values.email,
      subject: `[Portafolio] ${values.subject}`,
      text: `Nombre: ${values.name}\nCorreo: ${values.email}\n\n${values.message}`,
      html: `
        <h2>Nuevo mensaje desde tu portafolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(values.name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(values.email)}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(values.subject)}</p>
        <p style="white-space:pre-wrap">${escapeHtml(values.message)}</p>
      `,
    });

    if (error) throw new Error(error.message);

    return {
      status: 'success',
      message: '¡Gracias! Tu mensaje fue enviado. Te responderé lo antes posible.',
    };
  } catch (err) {
    console.error('Error al enviar el mensaje de contacto:', err);
    return {
      status: 'error',
      message: `No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a ${personalInfo.email}.`,
      values,
    };
  }
}
