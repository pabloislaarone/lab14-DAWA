import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

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
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { title: 'El problema', text: project.problem },
    { title: 'La solución', text: project.solution },
    { title: 'Mi rol', text: project.role },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="text-blue-700 hover:underline mb-6 inline-block"
        >
          ← Volver a Proyectos
        </Link>

        <article>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-sm font-semibold text-blue-700">{project.category}</span>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                project.status === 'Terminado'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-amber-100 text-amber-900'
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-700 mb-2">{project.description}</p>
          <p className="text-gray-600 mb-8">{project.context}</p>

          <div className="relative w-full aspect-[8/5] mb-10 rounded-lg overflow-hidden shadow-md">
            <Image
              src={project.image}
              alt={`Portada del proyecto ${project.title}`}
              fill
              className="object-cover"
              preload
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>

          <div className="space-y-8 mb-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.text}</p>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Lo más destacado</h2>
              <ul className="space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <span className="text-blue-600 font-bold" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Tecnologías Utilizadas</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {(project.demoUrl || project.githubUrl || project.extraLinks?.length) ? (
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Ver Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
                >
                  Ver Código
                </a>
              )}
              {project.extraLinks?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 bg-white rounded-lg p-4 shadow-sm">
              El código de este proyecto es privado. Si quieres conocer más detalles,{' '}
              <Link href="/contact" className="text-blue-700 font-semibold hover:underline">
                escríbeme
              </Link>
              .
            </p>
          )}
        </article>
      </div>
    </div>
  );
}
