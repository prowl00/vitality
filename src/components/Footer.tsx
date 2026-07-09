import Link from 'next/link';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Colon Hydrotherapy', href: '/colonic-hydrotherapy' },
  { label: 'Lymphatic Drainage', href: '/lymphatic-drainage' },
  { label: 'About', href: '/about' },
  { label: 'Pricing & Booking', href: '/pricing' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>Vitality Source</Link>
          <p className={styles.tagline}>Certified colon hydrotherapy &amp; lymphatic drainage — Barrie, Ontario.</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className={styles.navList}>
            {navLinks.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={styles.navLink}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <p className={styles.contactLabel}>Hours</p>
          <p className={styles.contactValue}>Tue – Sat, 10 AM – 6 PM</p>
          <p className={styles.contactLabel}>Address</p>
          <p className={styles.contactValue}>5 Bradford St., Barrie, ON L4N 3B7</p>
          <p className={styles.contactLabel}>Phone</p>
          <p className={styles.contactValue}><a href="tel:+14169099320">416-909-9320</a></p>
          <p className={styles.contactLabel}>Email</p>
          <p className={styles.contactValue}><a href="mailto:info@thevitalitysource.ca">info@thevitalitysource.ca</a></p>
        </div>

        <div className={styles.social}>
          <p className={styles.contactLabel}>Follow</p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">Instagram</a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <div className="container">
          <p className={styles.disclaimerText}>
            Services provided by Vitality Source are not regulated health treatments in Ontario and are not a substitute for professional medical care.
          </p>
        </div>
      </div>
    </footer>
  );
}
