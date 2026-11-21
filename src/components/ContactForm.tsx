'use client';

import { useActionState } from 'react';
import { sendContactMessage, type ContactState } from '@/app/contact/actions';

const initialState: ContactState = { status: 'idle', message: '' };

const inputClass =
  'w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600';

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === 'success') {
    return (
      <div role="status" className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
        <p className="font-semibold mb-1">Mensaje enviado</p>
        <p>{state.message}</p>
      </div>
    );
  }

  const fieldError = (field: keyof NonNullable<ContactState['errors']>) =>
    state.errors?.[field] ? (
      <p id={`${field}-error`} className="text-sm text-red-700 mt-1">
        {state.errors[field]}
      </p>
    ) : null;

  return (
    <form action={formAction} className="space-y-4" noValidate>
      {/* Campo trampa para bots: oculto para las personas */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
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
            aria-describedby={state.errors?.name ? 'name-error' : undefined}
            className={inputClass}
          />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
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
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
            className={inputClass}
          />
          {fieldError('email')}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-1">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          defaultValue={state.values?.subject}
          aria-invalid={Boolean(state.errors?.subject)}
          aria-describedby={state.errors?.subject ? 'subject-error' : undefined}
          className={inputClass}
        />
        {fieldError('subject')}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={state.values?.message}
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          className={inputClass}
        />
        {fieldError('message')}
      </div>

      {state.status === 'error' && (
        <p role="alert" className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
