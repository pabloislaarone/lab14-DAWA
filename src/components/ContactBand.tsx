import Link from 'next/link';
import { personalInfo } from '@/lib/data';

// Cierre de cada página: siempre una forma clara de escribir
export default function ContactBand() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28 grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.035em] leading-[1.02]">
            ¿Tienes una vacante o un proyecto en mente?
          </h2>
          <p className="text-muted text-lg mt-5 max-w-xl">
            Estoy disponible para prácticas, proyectos freelance y oportunidades laborales.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col gap-4 md:items-end">
          <Link href="/contact" className="btn btn-primary">
            Escríbeme
          </Link>
          <a href={`mailto:${personalInfo.email}`} className="text-link text-sm">
            {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
