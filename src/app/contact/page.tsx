import { Metadata } from 'next';
import { personalInfo, whatsappUrl } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta a ${personalInfo.name}, desarrollador full stack. Disponible para prácticas, proyectos freelance y oportunidades laborales.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contacto - ${personalInfo.name}`,
    description: 'Escríbeme para prácticas, proyectos freelance u oportunidades laborales.',
    url: '/contact',
    images: ['/og-image.jpg'],
  },
};

const icons = {
  Correo: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  GitHub: (
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  WhatsApp: <path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 7.7 19.4Z" />,
};

export default function ContactPage() {
  const channels = [
    { label: 'Correo', value: personalInfo.email, href: `mailto:${personalInfo.email}`, external: false },
    { label: 'GitHub', value: personalInfo.github.replace('https://', ''), href: personalInfo.github, external: true },
    personalInfo.linkedin && { label: 'LinkedIn', value: 'Ver perfil', href: personalInfo.linkedin, external: true },
    whatsappUrl && { label: 'WhatsApp', value: 'Escríbeme directo', href: whatsappUrl, external: true },
  ].filter(Boolean) as { label: keyof typeof icons; value: string; href: string; external: boolean }[];

  return (
    <section className="mx-auto max-w-[1180px] px-[22px] pt-[140px] pb-16">
      <div className="text-center">
        <p className="mono">CONTACTO</p>
        <h1 className="mt-3 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em]">
          ¿Trabajamos juntos?
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] leading-[1.7] text-muted">
          Estoy disponible para prácticas, proyectos freelance y oportunidades laborales. Escríbeme
          y te respondo lo antes posible.
        </p>
      </div>

      <div className="mt-12 grid gap-[18px] md:grid-cols-[0.9fr_1.1fr]">
        <div className="tile p-6 sm:p-7">
          <h2 className="text-[1.25rem] font-bold">Escríbeme directo</h2>
          <p className="mt-1.5 mb-5 text-muted">Elige el canal que prefieras.</p>
          <ul className="grid gap-2.5">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 rounded-[14px] border border-line bg-bg2 p-3.5 transition-[border-color,transform] duration-200 hover:border-line2 active:scale-[0.98]"
                >
                  <span className="grid size-9 place-items-center rounded-[10px] border border-line2 text-accent" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {icons[c.label]}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <b className="block text-[0.95rem]">{c.label}</b>
                    <small className="block break-all text-[0.8rem] text-faint">{c.value}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mono mt-5">Ubicación: {personalInfo.location}</p>
        </div>

        <div className="tile p-6 sm:p-7">
          <h2 className="text-[1.25rem] font-bold">Envíame un mensaje</h2>
          <p className="mt-1.5 mb-5 text-muted">Te llega directo a mi correo.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
