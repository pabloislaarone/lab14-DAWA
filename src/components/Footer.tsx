import { personalInfo, whatsappUrl } from '@/lib/data';

export default function Footer() {
  const links = [
    { href: `mailto:${personalInfo.email}`, label: 'Correo', external: false },
    { href: personalInfo.github, label: 'GitHub', external: true },
    { href: personalInfo.linkedin, label: 'LinkedIn', external: true },
    { href: whatsappUrl, label: 'WhatsApp', external: true },
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold text-bone">{personalInfo.name}</p>
          <p className="text-muted text-sm mt-1">
            {personalInfo.title} de software · {personalInfo.location}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-link text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-faint text-sm tabular-nums">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
