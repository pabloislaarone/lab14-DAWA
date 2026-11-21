import { Metadata } from 'next';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Mis Proyectos</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Proyectos académicos, de equipo y personales: desde microservicios escalables
        hasta apps móviles y productos para usuarios reales.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
