'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Perfil' },
  { href: '/contact', label: 'Contacto' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-5 sm:gap-8">
      {links.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={`text-[0.95rem] transition-colors duration-200 hover:text-bone ${
                active ? 'text-bone' : 'text-muted'
              }`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`block h-px mt-1 bg-sage transition-transform duration-300 ease-[var(--ease-out)] origin-left ${
                  active ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
