'use client';

import { useRef, useState } from 'react';

interface ProjectsTabsProps {
  projectsPanel: React.ReactNode;
  stackPanel: React.ReactNode;
}

const tabs = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'stack', label: 'Tech Stack' },
] as const;

// Pestañas Proyectos / Tech Stack (accesibles con teclado)
export default function ProjectsTabs({ projectsPanel, stackPanel }: ProjectsTabsProps) {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('proyectos');
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Contenido del portafolio"
          className="relative mt-8 inline-grid grid-cols-2 rounded-full border border-line bg-card p-[5px]"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-[5px] left-[5px] w-[calc(50%-5px)] rounded-full bg-text transition-transform duration-[350ms] ease-[var(--ease-out)]"
            style={{ transform: active === 'stack' ? 'translateX(100%)' : 'none' }}
          />
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`relative z-[1] min-w-32 rounded-full px-6 py-2.5 text-[0.92rem] font-semibold transition-colors duration-200 ${
                active === tab.id ? 'text-[#0c0c0d]' : 'text-muted'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div id="panel-proyectos" role="tabpanel" aria-labelledby="tab-proyectos" hidden={active !== 'proyectos'} className="mt-9">
        {projectsPanel}
      </div>
      <div id="panel-stack" role="tabpanel" aria-labelledby="tab-stack" hidden={active !== 'stack'} className="mt-9">
        {stackPanel}
      </div>
    </>
  );
}
