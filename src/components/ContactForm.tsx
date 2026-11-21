'use client';

import { useActionState } from 'react';
import { sendContactMessage, type ContactState } from '@/app/contact/actions';

const initialState: ContactState = { status: 'idle', message: '' };

const inputClass =
  'w-full bg-paper border border-line-strong rounded-md px-4 py-3 text-bone placeholder:text-faint transition-colors duration-200 focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage aria-[invalid=true]:border-danger';

type Field = keyof NonNullable<ContactState['errors']>;

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === 'success') {
    return (
      <div role="status" className="border border-sage rounded-md p-6">
        <p className="text-lg font-semibold text-sage-strong">Mensaje enviado</p>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  const describe = (field: Field) => (state.errors?.[field] ? `${field}-error` : undefined);

  const fieldError = (field: Field) =>
    state.errors?.[field] ? (
      <p id={`${field}-error`} className="text-sm text-danger mt-2">
        {state.errors[field]}
      </p>
    ) : null;

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Campo trampa para bots: oculto para las personas */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm text-muted mb-2">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={state.values?.name}
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={describe('name')}
            className={inputClass}
          />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted mb-2">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={state.values?.email}
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={describe('email')}
            className={inputClass}
          />
          {fieldError('email')}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-muted mb-2">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          defaultValue={state.values?.subject}
          aria-invalid={Boolean(state.errors?.subject)}
          aria-describedby={describe('subject')}
          className={inputClass}
        />
        {fieldError('subject')}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-muted mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={state.values?.message}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={describe('message')}
          className={`${inputClass} resize-y`}
        />
        {fieldError('message')}
      </div>

      {state.status === 'error' && (
        <p role="alert" className="text-danger border border-danger/40 rounded-md p-4">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary">
        {pending ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
