'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Perfil' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/contact', label: 'Contacto' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center">
      {links.map((link) => {
        const active =
          link.href === '/' ? pathname === '/' : pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={`block rounded-full border px-2 sm:px-3.5 py-2 text-[0.78rem] sm:text-[0.92rem] transition-colors duration-200 ${
                active
                  ? 'border-line2 bg-card2 text-text'
                  : 'border-transparent text-muted hover:text-text'
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
