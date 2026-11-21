import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import ContactBand from '@/components/ContactBand';

const practice = [
  {
    area: 'Backend',
    text: 'APIs y microservicios con Java y Spring Boot: API Gateway, balanceo de carga, mensajería con RabbitMQ y patrones de resiliencia.',
  },
  {
    area: 'Móvil',
    text: 'Apps Android nativas con Kotlin y Jetpack Compose, y apps multiplataforma con Flutter.',
  },
  {
    area: 'Web',
    text: 'Aplicaciones web con React y Next.js, cuidando rendimiento, accesibilidad y SEO.',
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Portada: quién es y qué hace */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 md:pt-32 pb-16 md:pb-24">
        <h1
          className="hero-line text-[clamp(3.5rem,11vw,6rem)] font-bold tracking-[-0.04em] leading-[0.92]"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          {personalInfo.name}
        </h1>
        <p
          className="hero-line mt-6 max-w-3xl text-2xl md:text-[2rem] leading-snug tracking-[-0.015em] text-bone"
          style={{ '--i': 1 } as React.CSSProperties}
        >
          Desarrollador de software.{' '}
          <span className="text-muted">
            Construyo backend con microservicios, apps Android y aplicaciones web.
          </span>
        </p>
        <ul
          className="hero-line mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-muted"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          <li>{personalInfo.location}</li>
          <li>Diseño y Desarrollo de Software, TECSUP</li>
          <li className="flex items-center gap-2 text-bone">
            <span aria-hidden="true" className="size-2 rounded-full bg-sage" />
            Disponible para prácticas y freelance
          </li>
        </ul>
        <div
          className="hero-line mt-10 flex flex-wrap items-center gap-4"
          style={{ '--i': 3 } as React.CSSProperties}
        >
          <Link href="/projects" className="btn btn-primary">
            Ver proyectos
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Escríbeme
          </Link>
        </div>
      </section>

      {/* Proyectos seleccionados: las láminas de la sala */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24 md:pb-32">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6 mb-12 md:mb-16">
          <h2 className="text-xl font-semibold">Proyectos seleccionados</h2>
          <Link href="/projects" className="text-link text-[0.95rem]">
            Ver los {projects.length} proyectos
          </Link>
        </div>
        <div className="flex flex-col gap-20 md:gap-28">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Qué hago */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-12 border-t border-line pt-6">
          <h2 className="text-xl font-semibold md:col-span-4">Qué hago</h2>
          <dl className="md:col-span-8">
            {practice.map((item) => (
              <div
                key={item.area}
                className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6 py-6 border-b border-line first:pt-0"
              >
                <dt className="text-lg font-semibold">{item.area}</dt>
                <dd className="text-muted leading-relaxed">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
