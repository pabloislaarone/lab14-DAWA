import { Metadata } from 'next';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import ProjectsTabs from '@/components/ProjectsTabs';
import TechGrid from '@/components/TechGrid';
import ContactCta from '@/components/ContactCta';

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
      <section className="mx-auto max-w-[1180px] px-[22px] pt-[140px] pb-10">
        <div className="text-center">
          <p className="mono">PORTAFOLIO</p>
          <h1 className="mt-3 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">
            Proyectos y stack
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] leading-[1.7] text-muted">
            Proyectos académicos, de equipo y personales: desde microservicios escalables hasta apps
            móviles y productos para usuarios reales.
          </p>
        </div>

        <ProjectsTabs
          projectsPanel={
            <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} headingLevel="h2" />
              ))}
            </div>
          }
          stackPanel={<TechGrid headingLevel="h2" />}
        />
      </section>

      <ContactCta />
    </>
  );
}
