import { personalInfo, whatsappUrl } from '@/lib/data';

export default function Footer() {
  const links = [
    { href: personalInfo.github, label: 'GitHub', external: true },
    { href: personalInfo.linkedin, label: 'LinkedIn', external: true },
    { href: whatsappUrl, label: 'WhatsApp', external: true },
    { href: `mailto:${personalInfo.email}`, label: 'Email', external: false },
  ].filter((link) => link.href);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-gray-400 hover:text-white transition"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
