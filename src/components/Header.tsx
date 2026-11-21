import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import NavLinks from '@/components/NavLinks';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ground border-b border-line">
      <nav
        className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-[-0.02em] text-bone transition-colors duration-200 hover:text-sage-strong"
        >
          {personalInfo.name}
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
