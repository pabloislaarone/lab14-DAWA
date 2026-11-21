import { Metadata } from 'next';
import { personalInfo, whatsappUrl } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta a ${personalInfo.name}, ${personalInfo.title.toLowerCase()} de software. Disponible para prácticas, proyectos freelance y oportunidades laborales.`,
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
    whatsappUrl && {
      label: 'WhatsApp',
      value: 'Escríbeme directo',
      href: whatsappUrl,
      external: true,
    },
    {
      label: 'Correo',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
    personalInfo.linkedin && {
      label: 'LinkedIn',
      value: 'Ver perfil',
      href: personalInfo.linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      value: personalInfo.github.replace('https://', ''),
      href: personalInfo.github,
      external: true,
    },
  ].filter(Boolean) as { label: string; value: string; href: string; external: boolean }[];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          ¿Tienes una oportunidad de prácticas, un proyecto o una idea que quieras
          desarrollar? Escríbeme y te respondo lo antes posible.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <aside className="md:col-span-1 space-y-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="block bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="block text-sm font-semibold text-gray-600">{channel.label}</span>
                <span className="block text-blue-700 font-semibold break-all">{channel.value}</span>
              </a>
            ))}
            <div className="bg-white p-5 rounded-lg shadow-md">
              <span className="block text-sm font-semibold text-gray-600">Ubicación</span>
              <span className="block text-gray-900 font-semibold">{personalInfo.location}</span>
            </div>
          </aside>

          <section className="md:col-span-2 bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíame un mensaje</h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
