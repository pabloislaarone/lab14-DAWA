import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  headingLevel?: 'h2' | 'h3';
}

// Tarjeta de proyecto con su color propio
export default function ProjectCard({ project, headingLevel = 'h3' }: ProjectCardProps) {
  const Heading = headingLevel;
  const href = `/projects/${project.slug}`;
  const dev = project.status === 'En desarrollo';

  return (
    <article
      className="pcard reveal group relative flex flex-col overflow-hidden rounded-[18px] border border-line bg-card"
      style={{ '--pc': project.color } as React.CSSProperties}
    >
      <div className="pshot relative h-[210px] overflow-hidden">
        {/* Imágenes con lazy loading */}
        <Image
          src={project.image}
          alt={`Recreación de la pantalla de ${project.title}`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 ease-[var(--ease-out)]"
          sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 380px"
        />
        <span className="absolute left-2.5 bottom-2 font-mono text-[0.6rem] text-[#8a8a8f]">
          recreación ilustrativa
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <span className="cat text-[0.78rem] font-semibold">{project.category}</span>
        <Heading className="text-[1.15rem] font-bold leading-snug">
          <Link href={href} className="after:absolute after:inset-0 after:z-10">
            {project.title}
          </Link>
        </Heading>
        <p className="text-muted text-[0.93rem] leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tag">+{project.technologies.length - 3}</span>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between pt-2.5">
          <span className="flex items-center gap-1.5 text-[0.75rem] text-muted">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full"
              style={{ background: dev ? project.color : '#55555b' }}
            />
            {project.status}
          </span>
          <span
            aria-hidden="true"
            className="more rounded-full border px-3.5 py-2 text-[0.85rem] font-semibold transition-colors duration-200"
          >
            Ver detalle →
          </span>
        </div>
      </div>
    </article>
  );
}
