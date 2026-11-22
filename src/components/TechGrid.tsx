import { techStack } from '@/lib/data';

// Tecnologías agrupadas por área
export default function TechGrid({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;
  return (
    <div className="flex flex-col gap-8">
      {techStack.map((group) => (
        <section key={group.group}>
          <Heading className="mb-3 text-base font-semibold text-muted">{group.group}</Heading>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
            {group.items.map((item) => (
              <li key={item.name} className="flex items-center gap-3 rounded-[14px] border border-line bg-card p-4">
                <span
                  aria-hidden="true"
                  className="grid size-[38px] place-items-center rounded-[10px] font-mono text-[0.8rem] font-bold text-[#0c0c0d]"
                  style={{ background: item.color }}
                >
                  {item.name.slice(0, 2)}
                </span>
                <span>
                  <b className="block text-[0.92rem]">{item.name}</b>
                  <small className="text-[0.75rem] text-faint">{item.detail}</small>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
