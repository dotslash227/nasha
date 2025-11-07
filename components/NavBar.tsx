'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Nasha Bistro Home" className="group inline-flex items-center gap-2">
          <span className="block h-7 w-7 rounded-full bg-gradient-to-tr from-pink-500 to-fuchsia-500 shadow-[0_0_24px_rgba(236,72,153,0.65)]" />
          <span className="text-white font-semibold tracking-wide group-hover:tracking-widest transition-all">
            Nasha Bistro
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`px-3 py-2 text-sm rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-pink-500/60 ${
                  active ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-black bg-white hover:bg-white/90 active:bg-white/80 transition"
          >
            Reserve a Table
          </Link>
        </div>
      </nav>
    </header>
  );
}
