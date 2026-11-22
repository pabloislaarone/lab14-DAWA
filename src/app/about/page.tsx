import { Metadata } from 'next';
import Link from 'next/link';
import { personalInfo, projects } from '@/lib/data';
import Timeline from '@/components/Timeline';
import TechGrid from '@/components/TechGrid';
import ContactCta from '@/components/ContactCta';

export const metadata: Metadata = {
  title: 'Perfil',
  description: `Conoce a ${personalInfo.name}, desarrollador full stack (web, Android y backend) formado en TECSUP, Lima.`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const stats = [
    { icon: '</>', num: projects.length, label: 'Proyectos en el portafolio', color: '#8b7bff' },
    { icon: '◇', num: 3, label: 'Plataformas: web, Android y backend', color: '#3ecf8e' },
    { icon: '◎', num: 1, label: 'Tesis con IA en desarrollo', color: '#ff8a5c' },
  ];

  return (
    <>
      <section className="mx-auto max-w-[1180px] px-[22px] pt-[140px] pb-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mono">SOBRE MÍ</p>
            <h1 className="mt-3 font-display text-[clamp(2.8rem,6vw,4.6rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Pablo
              <br />
              Isla
            </h1>
            <div className="mt-6 space-y-4 text-[1.04rem] leading-[1.75] text-muted max-w-[62ch]">
              <p>
                Soy desarrollador full stack y estudiante de Diseño y Desarrollo de Software en
                TECSUP, en {personalInfo.location}. Trabajo en todo el ciclo de una aplicación:
                backend, frontend web y apps móviles.
              </p>
              <p>
                Donde más experiencia tengo es en backend con Java y Spring Boot: microservicios con
                API Gateway, balanceo de carga, mensajería y patrones de resiliencia. También
                desarrollo apps Android con Kotlin y Jetpack Compose, y aplicaciones web con React y
                Next.js.
              </p>
              <p>
                Me interesa construir productos que resuelvan problemas reales: desde una plataforma
                de tutorías con IA hasta una app para el negocio de una estilista.
              </p>
            </div>
            <blockquote className="mt-6 inline-block rounded-2xl border border-line bg-card px-5 py-3.5 italic">
              “Convertir problemas reales en software que la gente use.”
            </blockquote>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-1">
                Ver proyectos
              </Link>
              <Link href="/contact" className="btn btn-2">
                Escríbeme
              </Link>
            </div>
          </div>

          {/* Espacio para la foto (pendiente) */}
          <div
            role="img"
            aria-label={`Espacio para la foto de ${personalInfo.name}`}
            className="relative mx-auto grid aspect-square w-full max-w-[340px] place-items-center rounded-full border border-line2 md:ml-auto"
            style={{
              background:
                'radial-gradient(circle at 30% 25%, rgb(139 123 255 / 0.35), transparent 55%), radial-gradient(circle at 75% 80%, rgb(62 207 142 / 0.25), transparent 50%), #121214',
            }}
          >
            <span aria-hidden="true" className="font-display text-[clamp(4rem,10vw,6.5rem)] font-bold tracking-[-0.06em] text-[#3a3a42]">
              PI
            </span>
            <span aria-hidden="true" className="mono absolute bottom-[18%]">
              foto próximamente
            </span>
          </div>
        </div>

        <ul className="mt-12 grid gap-3.5 sm:grid-cols-3">
          {stats.map((s) => (
            <li
              key={s.label}
              className="reveal flex flex-col gap-4 rounded-2xl border p-5"
              style={{
                background: `radial-gradient(120% 120% at 0% 0%, color-mix(in srgb, ${s.color} 16%, transparent), transparent 60%), #161618`,
                borderColor: `color-mix(in srgb, ${s.color} 30%, #26262a)`,
              }}
            >
              <span className="font-mono text-[0.8rem]" style={{ color: s.color }} aria-hidden="true">
                {s.icon}
              </span>
              <span>
                <span className="block font-display text-[2rem] font-bold" style={{ color: s.color }}>
                  {s.num}
                </span>
                <span className="text-[0.86rem] text-muted">{s.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Trayectoria */}
      <section className="mx-auto max-w-[1180px] px-[22px] pb-20">
        <p className="mono">TRAYECTORIA</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Lo que he construido
        </h2>
        <p className="mt-3.5 max-w-[560px] leading-[1.7] text-muted">
          Mi recorrido en TECSUP, de los primeros microservicios a mi proyecto de fin de carrera.
        </p>
        <Timeline />
      </section>

      {/* Habilidades */}
      <section className="mx-auto max-w-[1180px] px-[22px] pb-10">
        <p className="mono">HABILIDADES</p>
        <h2 className="mt-3 mb-8 font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
          Tech stack
        </h2>
        <TechGrid />
      </section>

      <ContactCta />
    </>
  );
}
