import Link from 'next/link';
import NavLinks from '@/components/NavLinks';

// Menú tipo píldora flotante
export default function Header() {
  return (
    <header className="fixed top-3.5 inset-x-0 z-50 px-3">
      <nav
        aria-label="Navegación principal"
        className="mx-auto max-w-[1136px] flex items-center justify-between gap-3 rounded-full border border-line bg-[rgb(14_14_16/0.82)] backdrop-blur-md pl-4 sm:pl-5 pr-2 py-2"
      >
        <Link href="/" className="font-mono text-[0.78rem] sm:text-[0.9rem] text-text">
          pablo<span className="text-accent">.</span>isla<span className="hidden sm:inline"> / dev</span>
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
}
