import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  // Las láminas alternan de lado, como en la sala
  reverse?: boolean;
  headingLevel?: 'h2' | 'h3';
}

// Una lámina del catálogo con su cartela
export default function ProjectCard({ project, reverse = false, headingLevel = 'h3' }: ProjectCardProps) {
  const Heading = headingLevel;
  const href = `/projects/${project.slug}`;

  return (
    <article className="group grid gap-6 md:grid-cols-12 md:gap-10 md:items-end">
      <Link
        href={href}
        tabIndex={-1}
        aria-hidden="true"
        className={`plate-reveal block relative aspect-[8/5] overflow-hidden rounded-sm bg-paper md:col-span-8 ${
          reverse ? 'md:order-2 md:col-start-5' : ''
        }`}
      >
        {/* Imágenes con lazy loading */}
        <Image
          src={project.image}
          alt=""
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 760px"
        />
      </Link>

      <div className={`md:col-span-4 ${reverse ? 'md:order-1 md:col-start-1 md:row-start-1' : ''}`}>
        <Heading className="text-2xl md:text-[1.75rem] font-bold tracking-[-0.02em] leading-tight">
          <Link href={href} className="transition-colors duration-200 hover:text-sage-strong">
            {project.title}
          </Link>
        </Heading>
        <p className="text-muted mt-3 leading-relaxed">{project.description}</p>

        <dl className="mt-6 border-t border-line text-sm">
          {[
            { term: 'Rol', value: project.roleShort },
            { term: 'Contexto', value: project.contextShort },
            { term: 'Técnica', value: project.technologies.slice(0, 4).join(' · ') },
          ].map((row) => (
            <div key={row.term} className="grid grid-cols-[6rem_1fr] gap-3 py-2.5 border-b border-line">
              <dt className="text-faint">{row.term}</dt>
              <dd className="text-bone">{row.value}</dd>
            </div>
          ))}
          <div className="grid grid-cols-[6rem_1fr] gap-3 py-2.5 border-b border-line">
            <dt className="text-faint">Estado</dt>
            <dd className="flex items-center gap-2 text-bone">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${
                  project.status === 'En desarrollo' ? 'bg-sage' : 'bg-line-strong'
                }`}
              />
              {project.status}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
