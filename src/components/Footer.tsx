import Link from 'next/link';
import styles from './Footer.module.css';
import site from '@/data/site.json';

const navLinks = site.footer.navLinks;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img
              src="/images/vitality-source-wordmark-ivory.svg"
              alt={site.name}
              width={2120.88}
              height={759.3}
              className={styles.logoImage}
            />
          </Link>
          <p className={styles.tagline}>{site.footer.tagline}</p>
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
          <p className={styles.contactValue}>{site.hours.daysShort}</p>
          <p className={styles.contactLabel}>Address</p>
          <p className={styles.contactValue}>{site.address.street}, {site.address.cityLine}</p>
          <p className={styles.contactLabel}>Phone</p>
          <p className={styles.contactValue}><a href={`tel:${site.phoneHref}`}>{site.phone}</a></p>
          <p className={styles.contactLabel}>Email</p>
          <p className={styles.contactValue}><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>

        <div className={styles.social}>
          <p className={styles.contactLabel}>Follow</p>
          <div className={styles.socialLinks}>
            <a href={site.social.instagram} className={styles.socialLink} aria-label="Instagram">Instagram</a>
            <a href={site.social.facebook} className={styles.socialLink} aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <div className="container">
          <p className={styles.disclaimerText}>
            {site.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
