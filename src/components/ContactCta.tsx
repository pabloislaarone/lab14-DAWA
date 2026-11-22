import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import CopyEmail from '@/components/CopyEmail';

// Cierre de página: contacto rápido con borde en degradado
export default function ContactCta() {
  return (
    <section className="mx-auto max-w-[1180px] px-[22px] py-16">
      <div
        className="reveal flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-transparent px-7 py-6"
        style={{
          background:
            'radial-gradient(60% 140% at 0% 50%, rgb(123 147 255 / 0.1), transparent 60%) padding-box, radial-gradient(50% 140% at 100% 50%, rgb(176 123 255 / 0.08), transparent 60%) padding-box, linear-gradient(#161618, #161618) padding-box, linear-gradient(100deg, rgb(123 147 255 / 0.5), rgb(176 123 255 / 0.35) 55%, rgb(255 138 179 / 0.3)) border-box',
        }}
      >
        <div>
          <p className="mono uppercase">¿Tienes un proyecto o una vacante?</p>
          <p className="font-display text-[clamp(1.2rem,2.6vw,1.6rem)] font-bold tracking-[-0.02em] break-all">
            {personalInfo.email}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <CopyEmail email={personalInfo.email} />
          <Link href="/contact" className="btn btn-1">
            Escríbeme
          </Link>
        </div>
      </div>
    </section>
  );
}
