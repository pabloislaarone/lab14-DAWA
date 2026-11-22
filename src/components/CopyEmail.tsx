'use client';

import { useState } from 'react';

export default function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState('Copiar correo');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel('¡Copiado!');
    } catch {
      setLabel(email);
    }
    setTimeout(() => setLabel('Copiar correo'), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="btn btn-2 font-mono !text-[0.9rem]"
      aria-live="polite"
    >
      {label}
    </button>
  );
}
