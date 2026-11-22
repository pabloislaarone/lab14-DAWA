'use client';

import { useEffect, useState } from 'react';

type Line = { kind: 'cmd' | 'out' | 'ok'; text: string };

const lines: Line[] = [
  { kind: 'cmd', text: 'whoami' },
  { kind: 'out', text: 'pablo isla · desarrollador full stack' },
  { kind: 'cmd', text: 'cat stack.txt' },
  { kind: 'out', text: 'spring boot · kotlin · next.js · docker' },
  { kind: 'cmd', text: 'ls proyectos/' },
  { kind: 'out', text: 'edumatch-ai  marcador-26  techstore  ...' },
  { kind: 'cmd', text: 'status --disponible' },
  { kind: 'ok', text: '✓ abierto a prácticas y freelance' },
];

function Row({ line }: { line: Line }) {
  if (line.kind === 'cmd') {
    return (
      <div>
        <span className="text-accent">$</span> {line.text}
      </div>
    );
  }
  return <div className={line.kind === 'ok' ? 'text-[#9be3b0]' : ''}>{line.text}</div>;
}

// Terminal que escribe sola los datos principales
export default function Terminal() {
  const [shown, setShown] = useState(lines.length);
  const [typing, setTyping] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const next = () => {
      if (i >= lines.length) {
        timer = setTimeout(() => {
          i = 0;
          setShown(0);
          next();
        }, 4500);
        return;
      }
      const line = lines[i];
      if (line.kind !== 'cmd') {
        i += 1;
        setShown(i);
        timer = setTimeout(next, 350);
        return;
      }
      let c = 0;
      const type = () => {
        setTyping(line.text.slice(0, c));
        if (c++ < line.text.length) {
          timer = setTimeout(type, 60);
        } else {
          setTyping('');
          i += 1;
          setShown(i);
          timer = setTimeout(next, 250);
        }
      };
      type();
    };

    timer = setTimeout(() => {
      setShown(0);
      next();
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const current = lines[shown];

  return (
    <div className="font-mono text-[0.82rem] leading-[1.75] text-[#cfcfd4] px-4 py-3.5 min-h-[220px]" aria-hidden="true">
      {lines.slice(0, shown).map((line, i) => (
        <Row key={i} line={line} />
      ))}
      {current?.kind === 'cmd' && typing !== '' && (
        <div>
          <span className="text-accent">$</span> {typing}▍
        </div>
      )}
    </div>
  );
}
