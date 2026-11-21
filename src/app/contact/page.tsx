import { Metadata } from 'next';
import { personalInfo, whatsappUrl } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta a ${personalInfo.name}, desarrollador de software. Disponible para prácticas, proyectos freelance y oportunidades laborales.`,
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

export default function ContactPage() {
  const channels = [
    whatsappUrl && { label: 'WhatsApp', value: 'Escríbeme directo', href: whatsappUrl, external: true },
    { label: 'Correo', value: personalInfo.email, href: `mailto:${personalInfo.email}`, external: false },
    personalInfo.linkedin && { label: 'LinkedIn', value: 'Ver perfil', href: personalInfo.linkedin, external: true },
    {
      label: 'GitHub',
      value: personalInfo.github.replace('https://', ''),
      href: personalInfo.github,
      external: true,
    },
  ].filter(Boolean) as { label: string; value: string; href: string; external: boolean }[];

  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 md:pt-28 pb-24 md:pb-32">
      <h1 className="text-[clamp(3rem,9vw,5.5rem)] font-bold tracking-[-0.04em] leading-[0.95]">
        Contacto
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
        ¿Tienes una oportunidad de prácticas, un proyecto o una idea que quieras desarrollar?
        Escríbeme y te respondo lo antes posible.
      </p>

      <div className="mt-14 md:mt-20 grid gap-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xl font-semibold">Directo</h2>
          <dl className="mt-6 border-t border-line">
            {channels.map((channel) => (
              <div key={channel.label} className="py-4 border-b border-line">
                <dt className="text-faint text-sm">{channel.label}</dt>
                <dd className="mt-1">
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-link break-all"
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="py-4 border-b border-line">
              <dt className="text-faint text-sm">Ubicación</dt>
              <dd className="mt-1">{personalInfo.location}</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-8">
          <h2 className="text-xl font-semibold">Envíame un mensaje</h2>
          <div className="mt-6 border-t border-line pt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
