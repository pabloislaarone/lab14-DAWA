import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import ContactCta from '@/components/ContactCta';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    keywords: project.technologies,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const next = projects[(index + 1) % projects.length];

  const facts = [
    { term: 'Rol', value: project.roleShort },
    { term: 'Contexto', value: project.contextShort },
    { term: 'Estado', value: project.status },
  ];

  const sections = [
    { title: 'El problema', text: project.problem },
    { title: 'La solución', text: project.solution },
    { title: 'Mi rol', text: project.role },
  ];

  const links = [
    project.demoUrl && { label: 'Ver demo', url: project.demoUrl },
    project.githubUrl && { label: 'Ver código', url: project.githubUrl },
    ...(project.extraLinks ?? []).map((link) => ({ label: link.label, url: link.url })),
  ].filter(Boolean) as { label: string; url: string }[];

  return (
    <>
      <article>
        <header className="mx-auto max-w-[1000px] px-[22px] pt-[130px]">
          <Link href="/projects" className="text-link text-[0.95rem] text-muted">
            ← Proyectos
          </Link>
          <p className="mt-8 text-[0.85rem] font-semibold" style={{ color: project.color }}>
            {project.category}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.2rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[1.15rem] leading-relaxed text-muted">{project.description}</p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.term} className="rounded-2xl border border-line bg-card px-5 py-4">
                <dt className="mono">{f.term}</dt>
                <dd className="mt-1 flex items-center gap-2 font-semibold">
                  {f.term === 'Estado' && (
                    <span
                      aria-hidden="true"
                      className="size-2 rounded-full"
                      style={{ background: project.status === 'En desarrollo' ? project.color : '#55555b' }}
                    />
                  )}
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="mx-auto mt-8 max-w-[1000px] px-[22px]">
          <div
            className="relative aspect-[8/5] overflow-hidden rounded-[22px] border"
            style={{
              borderColor: `color-mix(in srgb, ${project.color} 35%, #26262a)`,
              boxShadow: `0 30px 80px -40px color-mix(in srgb, ${project.color} 60%, transparent)`,
            }}
          >
            <Image
              src={project.image}
              alt={`Recreación de la pantalla de ${project.title}`}
              fill
              preload
              className="object-cover"
              sizes="(max-width: 1000px) 100vw, 956px"
            />
          </div>
          <p className="mono mt-3">Recreación ilustrativa · {project.context}</p>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-12 px-[22px] py-20">
          {sections.map((section) => (
            <section key={section.title} className="reveal grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
              <h2 className="text-[1.15rem] font-bold" style={{ color: project.color }}>
                {section.title}
              </h2>
              <p className="max-w-[65ch] text-[1.05rem] leading-[1.75] text-[#d4d4d1]">{section.text}</p>
            </section>
          ))}

          <section className="reveal grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
            <h2 className="text-[1.15rem] font-bold" style={{ color: project.color }}>
              Lo más destacado
            </h2>
            <ul className="grid gap-3">
              {project.highlights.map((item) => (
                <li key={item} className="grid grid-cols-[20px_1fr] text-[1.02rem] leading-relaxed text-[#d4d4d1]">
                  <span aria-hidden="true" className="mt-[0.6em] size-1.5 rounded-full" style={{ background: project.color }} />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="reveal grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
            <h2 className="text-[1.15rem] font-bold" style={{ color: project.color }}>
              Tecnologías
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="tag !text-[0.8rem]"
                  style={{ borderColor: `color-mix(in srgb, ${project.color} 30%, #26262a)` }}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="reveal grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
            <h2 className="text-[1.15rem] font-bold" style={{ color: project.color }}>
              Código
            </h2>
            {links.length > 0 ? (
              <div className="flex flex-wrap gap-2.5">
                {links.map((link, i) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${i === 0 ? '' : 'btn-2'}`}
                    style={i === 0 ? { background: project.color, color: '#0c0c0d' } : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-muted">
                El código de este proyecto es privado.{' '}
                <Link href="/contact" className="text-link text-text">
                  Escríbeme
                </Link>{' '}
                si quieres conocer más detalles.
              </p>
            )}
          </section>
        </div>
      </article>

      {/* Siguiente proyecto */}
      <nav aria-label="Siguiente proyecto" className="mx-auto max-w-[1000px] px-[22px]">
        <Link
          href={`/projects/${next.slug}`}
          className="tile group flex flex-col gap-1.5 p-7"
          style={{ boxShadow: `inset 0 3px 0 ${next.color}` }}
        >
          <span className="mono">Siguiente proyecto</span>
          <span
            className="font-display text-[clamp(1.5rem,4vw,2.4rem)] font-bold tracking-[-0.03em] transition-colors duration-200 group-hover:text-[var(--n)]"
            style={{ '--n': next.color } as React.CSSProperties}
          >
            {next.title} →
          </span>
        </Link>
      </nav>

      <ContactCta />
    </>
  );
}
