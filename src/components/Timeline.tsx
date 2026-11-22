import { milestones } from '@/lib/data';

// Trayectoria: cada hito con el color de su proyecto
export default function Timeline() {
  return (
    <ol className="relative mt-14 pl-9 before:absolute before:left-2 before:top-1.5 before:bottom-1.5 before:w-px before:bg-line2">
      {milestones.map((m) => (
        <li
          key={m.title}
          className="reveal relative mb-6"
          style={{ '--pc': m.color } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="absolute -left-[33px] top-6 size-[11px] rounded-full"
            style={{ background: m.color, boxShadow: `0 0 0 4px color-mix(in srgb, ${m.color} 25%, transparent)` }}
          />
          <div
            className="max-w-3xl rounded-2xl border border-line bg-card px-6 py-5"
            style={{ borderLeft: `3px solid color-mix(in srgb, ${m.color} 70%, transparent)` }}
          >
            <span className="mono uppercase">{m.label}</span>
            <h3 className="mt-1.5 text-[1.2rem] font-bold">{m.title}</h3>
            <p className="text-[0.9rem] font-semibold" style={{ color: m.color }}>
              {m.org}
            </p>
            <p className="text-muted leading-relaxed my-3">{m.text}</p>
            <div className="flex flex-wrap gap-1.5">
              {m.tags.map((t) => (
                <span key={t} className="tag uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
