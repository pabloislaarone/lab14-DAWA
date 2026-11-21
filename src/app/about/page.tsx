import { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import Avatar from '@/components/Avatar';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, desarrollador de software web, móvil y backend formado en TECSUP.`,
  alternates: {
    canonical: '/about',
  },
};

const skillGroups = [
  {
    title: 'Backend',
    skills: ['Java & Spring Boot', 'Microservicios', 'Node.js & Express', 'Django REST'],
  },
  {
    title: 'Frontend',
    skills: ['React & Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Móvil',
    skills: ['Kotlin & Jetpack Compose', 'Flutter'],
  },
  {
    title: 'Datos y Cloud',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'Docker', 'AWS', 'Git & GitHub'],
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mí</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Avatar
                src={personalInfo.avatar}
                alt={personalInfo.name}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Hola! Soy {personalInfo.name}
            </h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Soy desarrollador de software y estudiante de Diseño y Desarrollo de
                Software en TECSUP, en {personalInfo.location}. Trabajo en todo el ciclo
                de una aplicación: backend, frontend web y apps móviles.
              </p>
              <p>
                Donde más experiencia tengo es en backend con Java y Spring Boot,
                diseñando microservicios con API Gateway, balanceo de carga, mensajería y
                patrones de resiliencia. También desarrollo apps Android con Kotlin y
                Jetpack Compose, y aplicaciones web con React y Next.js.
              </p>
              <p>
                Me interesa sobre todo construir productos que resuelvan problemas
                reales: desde una plataforma de tutorías con IA hasta una app para el
                negocio de una estilista. Actualmente desarrollo mi proyecto de fin de
                carrera, un simulador con IA para entrenar la toma de requerimientos.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section con lazy loading implícito */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Habilidades Técnicas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Trabajamos juntos?</h2>
          <p className="text-gray-300 mb-6">
            Estoy abierto a prácticas, proyectos freelance y oportunidades laborales.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contáctame
          </Link>
        </section>
      </div>
    </div>
  );
}
