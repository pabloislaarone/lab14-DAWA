import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import Avatar from '@/components/Avatar';
import ContactBand from '@/components/ContactBand';

export const metadata: Metadata = {
  title: 'Perfil',
  description: `Conoce a ${personalInfo.name}, desarrollador de software web, móvil y backend formado en TECSUP.`,
  alternates: {
    canonical: '/about',
  },
};

const skillGroups = [
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'Microservicios', 'Node.js', 'Express', 'Django REST'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Móvil',
    skills: ['Kotlin', 'Jetpack Compose', 'Flutter'],
  },
  {
    title: 'Datos y nube',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'Docker', 'AWS', 'Git'],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <h1 className="text-[clamp(3rem,9vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.95]">
          Perfil
        </h1>

        <div className="mt-12 md:mt-16 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
              <Avatar src={personalInfo.avatar} name={personalInfo.name} sizes="(max-width: 768px) 100vw, 360px" />
            </div>
          </div>

          <div className="md:col-span-8 md:pt-2">
            <p className="text-2xl md:text-[1.75rem] leading-snug tracking-[-0.015em] text-bone">
              Soy {personalInfo.name}, desarrollador de software y estudiante de Diseño y
              Desarrollo de Software en TECSUP, en {personalInfo.location}.
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted max-w-[65ch]">
              <p>
                Trabajo en todo el ciclo de una aplicación: backend, frontend web y apps móviles.
                Donde más experiencia tengo es en backend con Java y Spring Boot, diseñando
                microservicios con API Gateway, balanceo de carga, mensajería y patrones de
                resiliencia.
              </p>
              <p>
                También desarrollo apps Android con Kotlin y Jetpack Compose, y aplicaciones web
                con React y Next.js.
              </p>
              <p>
                Me interesa construir productos que resuelvan problemas reales: desde una
                plataforma de tutorías con IA hasta una app para el negocio de una estilista.
                Ahora desarrollo mi proyecto de fin de carrera, un simulador con IA para entrenar
                la toma de requerimientos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades técnicas */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-12 border-t border-line pt-6">
          <h2 className="text-xl font-semibold md:col-span-4">Habilidades técnicas</h2>
          <dl className="md:col-span-8">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6 py-5 border-b border-line first:pt-0"
              >
                <dt className="text-lg font-semibold">{group.title}</dt>
                <dd className="text-muted text-lg leading-relaxed">{group.skills.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
