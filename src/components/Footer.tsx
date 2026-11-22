import Link from 'next/link';
import { personalInfo, whatsappUrl } from '@/lib/data';

export default function Footer() {
  const links = [
    { href: `mailto:${personalInfo.email}`, label: 'Correo', external: false },
    { href: personalInfo.github, label: 'GitHub', external: true },
    { href: personalInfo.linkedin, label: 'LinkedIn', external: true },
    { href: whatsappUrl, label: 'WhatsApp', external: true },
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-line mt-10">
      <div className="mx-auto max-w-[1180px] px-[22px] py-9 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="font-mono text-[0.9rem]">
            pablo<span className="text-accent">.</span>isla
          </Link>
          <p className="text-faint text-sm mt-1">
            © {new Date().getFullYear()} {personalInfo.name} · {personalInfo.title} · {personalInfo.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-link text-sm text-muted"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
