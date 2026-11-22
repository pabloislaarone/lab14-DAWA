'use client';

import { useEffect, useState } from 'react';

const roles = [
  'backend con Spring Boot',
  'apps Android con Kotlin',
  'web con Next.js',
  'microservicios escalables',
];

// Rota las especialidades con efecto de escritura
export default function Typed() {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let role = 0;
    let chars = roles[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (deleting) {
        chars -= 1;
        if (chars <= 0) {
          deleting = false;
          role = (role + 1) % roles.length;
        }
      } else {
        chars += 1;
      }
      setText(roles[role].slice(0, Math.max(chars, 0)));
      const done = !deleting && chars >= roles[role].length;
      if (done) deleting = true;
      timer = setTimeout(tick, done ? 1600 : deleting ? 28 : 55);
    };

    timer = setTimeout(tick, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p className="font-mono text-[1.02rem] text-text mt-5 min-h-[1.5em]">
      <span className="sr-only">Desarrollo {roles.join(', ')}.</span>
      <span aria-hidden="true">
        {'> '}
        {text}
        <span className="caret" />
      </span>
    </p>
  );
}
