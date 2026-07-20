'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import site from '@/data/site.json';

const links = site.nav.links;
const BOOKING_URL = site.bookingUrl;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <img
            src="/images/vitality-source-wordmark-sage.svg"
            alt="Vitality Source"
            width={2120.88}
            height={759.3}
            className={styles.logoImage}
          />
        </Link>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.cta}`}>
          Book Your Session
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
        </button>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setOpen(false)}>
            Book Your Session
          </a>
        </div>
      )}
    </header>
  );
}
