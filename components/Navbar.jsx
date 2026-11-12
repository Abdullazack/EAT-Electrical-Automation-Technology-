'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/library', label: 'Library' },
  { href: '/subscribe', label: 'Subscribe' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar({ user }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu after moving to another page.
  useEffect(() => setOpen(false), [pathname]);

  // Close the menu with the Escape key.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="container bar">
        <Link href="/" className="brand">
          <Zap size={20} aria-hidden="true" />
          <span>Electrical Automation Technology</span>
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="site-menu" className={`menu-panel ${open ? 'open' : ''}`} aria-label="Main">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
          <div className="menu-auth">
            {user ? (
              <>
                <Link href="/account">My account</Link>
                <form action="/auth/signout" method="post">
                  <button type="submit" className="linklike">Sign out</button>
                </form>
              </>
            ) : (
              <>
                <Link href="/login">Log in</Link>
                <Link href="/signup">Create account</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
