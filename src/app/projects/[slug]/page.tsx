import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import ContactBand from '@/components/ContactBand';

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

  const label = [
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
    project.demoUrl && { label: 'Ver demo', url: project.demoUrl, primary: true },
    project.githubUrl && { label: 'Ver código', url: project.githubUrl, primary: !project.demoUrl },
    ...(project.extraLinks ?? []).map((link) => ({ ...link, primary: false })),
  ].filter(Boolean) as { label: string; url: string; primary: boolean }[];

  return (
    <>
      <article>
        <header className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 md:pt-16">
          <Link href="/projects" className="text-link text-[0.95rem] text-muted">
            ← Proyectos
          </Link>
          <h1 className="mt-10 text-[clamp(2.75rem,8vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.95] max-w-4xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl md:text-2xl leading-snug text-muted">
            {project.description}
          </p>

          {/* Cartela */}
          <dl className="mt-10 grid sm:grid-cols-3 border-t border-line">
            {label.map((row) => (
              <div key={row.term} className="py-4 border-b border-line sm:pr-6">
                <dt className="text-faint text-sm">{row.term}</dt>
                <dd className="mt-1 flex items-center gap-2">
                  {row.term === 'Estado' && (
                    <span
                      aria-hidden="true"
                      className={`size-2 rounded-full ${
                        project.status === 'En desarrollo' ? 'bg-sage' : 'bg-line-strong'
                      }`}
                    />
                  )}
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-10 md:mt-14">
          <div className="relative aspect-[8/5] overflow-hidden rounded-sm bg-paper">
            <Image
              src={project.image}
              alt={`Ilustración del proyecto ${project.title}`}
              fill
              className="object-cover"
              preload
              sizes="(max-width: 1200px) 100vw, 1088px"
            />
          </div>
          <p className="mt-3 text-sm text-faint">{project.context}</p>
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28 flex flex-col gap-14 md:gap-16">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-4 md:grid-cols-12 md:gap-10">
              <h2 className="text-xl font-semibold md:col-span-4">{section.title}</h2>
              <p className="md:col-span-8 text-lg leading-relaxed text-bone/90 max-w-[65ch]">
                {section.text}
              </p>
            </section>
          ))}

          <section className="grid gap-4 md:grid-cols-12 md:gap-10">
            <h2 className="text-xl font-semibold md:col-span-4">Lo más destacado</h2>
            <ul className="md:col-span-8 max-w-[65ch] border-t border-line">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[1.25rem_1fr] py-4 border-b border-line text-lg leading-relaxed text-bone/90"
                >
                  <span aria-hidden="true" className="mt-[0.7em] size-1.5 bg-sage" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-4 md:grid-cols-12 md:gap-10">
            <h2 className="text-xl font-semibold md:col-span-4">Técnica</h2>
            <ul className="md:col-span-8 flex flex-wrap gap-x-2 gap-y-3">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="px-3 py-1.5 rounded-full border border-line-strong text-[0.95rem]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-4 md:grid-cols-12 md:gap-10">
            <h2 className="text-xl font-semibold md:col-span-4">Código</h2>
            <div className="md:col-span-8">
              {links.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${link.primary ? 'btn-primary' : 'btn-secondary'}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-lg text-muted max-w-[65ch]">
                  El código de este proyecto es privado.{' '}
                  <Link href="/contact" className="text-link">
                    Escríbeme
                  </Link>{' '}
                  si quieres conocer más detalles.
                </p>
              )}
            </div>
          </section>
        </div>
      </article>

      {/* Siguiente lámina */}
      <nav aria-label="Siguiente proyecto" className="border-t border-line">
        <Link
          href={`/projects/${next.slug}`}
          className="group mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-20 flex flex-col gap-2"
        >
          <span className="text-faint text-sm">Siguiente proyecto</span>
          <span className="text-3xl md:text-5xl font-bold tracking-[-0.03em] transition-colors duration-200 group-hover:text-sage-strong">
            {next.title} →
          </span>
        </Link>
      </nav>

      <ContactBand />
    </>
  );
}
