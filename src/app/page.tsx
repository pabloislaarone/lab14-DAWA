import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import Loader from '@/components/Loader';
import Typed from '@/components/Typed';
import Terminal from '@/components/Terminal';
import LimaClock from '@/components/LimaClock';
import ContactCta from '@/components/ContactCta';

const stackA = ['Java', 'Spring Boot', 'Spring Cloud', 'RabbitMQ', 'Docker', 'AWS', 'MySQL'];
const stackB = ['Kotlin', 'Jetpack Compose', 'Flutter', 'React', 'Next.js', 'TypeScript', 'MongoDB'];

const delay = (i: number) => ({ '--i': i }) as React.CSSProperties;

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Loader />

      {/* Portada en cuadrícula (bento) */}
      <section className="mx-auto max-w-[1180px] px-[22px] pt-[120px] pb-16">
        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-6 lg:auto-rows-[minmax(120px,auto)]">
          {/* Presentación */}
          <div
            className="tile hero-in col-span-2 flex flex-col justify-end p-7 sm:p-9 lg:col-span-4 lg:row-span-3"
            style={delay(0)}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-44 -top-56 size-[520px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgb(110 139 255 / 0.22), transparent 65%)' }}
            />
            <p className="mono flex items-center gap-2">
              <span className="dot" /> Disponible para prácticas y freelance
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,6.4vw,5rem)] font-bold leading-none tracking-[-0.045em]">
              Hola, soy
              <br />
              {personalInfo.name}
              <span className="text-accent">.</span>
            </h1>
            <Typed />
            <p className="mt-4 max-w-[540px] text-[1.04rem] leading-[1.7] text-muted">
              {personalInfo.title} y estudiante de Diseño y Desarrollo de Software en TECSUP.
              Construyo el ciclo completo de una aplicación: backend con microservicios, apps Android
              y aplicaciones web.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-1">
                Ver proyectos
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-2">
                Contactar
              </Link>
            </div>
          </div>

          {/* Terminal */}
          <div className="tile hero-in col-span-2 !bg-[#0a0a0c] lg:row-span-2" style={delay(1)}>
            <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-3" aria-hidden="true">
              <i className="size-[9px] rounded-full bg-[#2c2c31]" />
              <i className="size-[9px] rounded-full bg-[#2c2c31]" />
              <i className="size-[9px] rounded-full bg-[#2c2c31]" />
              <span className="ml-auto font-mono text-[0.72rem] text-faint">~/pablo — zsh</span>
            </div>
            <Terminal />
          </div>

          {/* Hora de Lima */}
          <div
            className="tile hero-in col-span-2 flex flex-col justify-between gap-3 p-6"
            style={{
              ...delay(2),
              background: 'radial-gradient(130% 120% at 100% 0%, rgb(123 147 255 / 0.13), transparent 60%), #161618',
              borderColor: 'rgb(123 147 255 / 0.24)',
            }}
          >
            <p className="mono !text-[#97a8f5]">LIMA, PERÚ · GMT−5</p>
            <LimaClock />
          </div>

          {/* Ahora trabajando en */}
          <div
            className="tile hero-in col-span-2 flex flex-col gap-2.5 p-6 lg:col-span-3"
            style={{
              ...delay(3),
              background: 'radial-gradient(120% 120% at 100% 0%, rgb(255 138 92 / 0.1), transparent 60%), #161618',
              borderColor: 'rgb(255 138 92 / 0.2)',
            }}
          >
            <p className="mono !text-[#e39a7c]">◉ AHORA TRABAJANDO EN</p>
            <h2 className="text-[1.15rem] font-bold">
              <Link href="/projects/elicitacion-ia" className="text-link">
                Simulador de IA para toma de requerimientos
              </Link>
            </h2>
            <p className="text-[0.95rem] leading-relaxed text-muted">
              Mi tesis: entrevistas por voz con clientes simulados por IA.
            </p>
            <div className="wave mt-auto flex h-[34px] items-center gap-[3px]" aria-hidden="true">
              {Array.from({ length: 28 }, (_, k) => (
                <i
                  key={k}
                  style={{
                    height: `${10 + Math.round(Math.abs(Math.sin(k * 0.7)) * 24)}px`,
                    animationDelay: `${k * -90}ms`,
                    background: k % 4 === 3 ? '#ff8a5c' : undefined,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="tile hero-in col-span-2 flex flex-col justify-between gap-3.5 py-6 lg:col-span-3" style={delay(4)}>
            <p className="mono px-6">MI STACK</p>
            <div className="grid gap-2.5 overflow-hidden">
              <p className="sr-only">{[...stackA, ...stackB].join(', ')}</p>
              {[stackA, stackB].map((row, r) => (
                <div key={r} className={`marquee-track gap-2.5 ${r ? 'reverse' : ''}`} style={{ animationDuration: r ? '30s' : '26s' }} aria-hidden="true">
                  {[...row, ...row].map((t, i) => (
                    <span key={i} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cinta */}
      <div className="overflow-hidden border-y border-line bg-[rgb(255_255_255/0.015)] py-5" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span
              key={k}
              className="whitespace-nowrap pr-10 font-display text-[clamp(1.6rem,4vw,3rem)] font-bold tracking-[-0.02em] text-[#2f2f34]"
            >
              Hola, soy <em className="not-italic text-text">{personalInfo.name}</em> — Desarrollador{' '}
              <em className="not-italic text-text">Full Stack</em> — Spring Boot — Kotlin — Next.js —{' '}
            </span>
          ))}
        </div>
      </div>

      {/* Proyectos destacados */}
      <section className="mx-auto max-w-[1180px] px-[22px] pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mono">PORTAFOLIO</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Proyectos destacados
            </h2>
          </div>
          <Link href="/projects" className="btn btn-2">
            Ver los {projects.length} proyectos →
          </Link>
        </div>
        <div className="mt-10 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
