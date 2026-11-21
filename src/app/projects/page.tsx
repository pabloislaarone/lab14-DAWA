import { Metadata } from 'next';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import ContactBand from '@/components/ContactBand';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: `Proyectos de ${personalInfo.name}: aplicaciones web, móviles, backend con microservicios e inteligencia artificial.`,
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: `Proyectos - ${personalInfo.name}`,
    description: 'Aplicaciones web, móviles, backend e inteligencia artificial',
    url: '/projects',
    images: ['/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
        <h1 className="text-[clamp(3rem,9vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.95]">
          Proyectos
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
          Proyectos académicos, de equipo y personales: desde microservicios escalables hasta
          apps móviles y productos para usuarios reales.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24 md:pb-32">
        <div className="flex flex-col gap-20 md:gap-28 border-t border-line pt-12 md:pt-16">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reverse={i % 2 === 1}
              headingLevel="h2"
            />
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
