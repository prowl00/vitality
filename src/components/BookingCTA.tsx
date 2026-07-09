import FadeUpSection from './FadeUpSection';
import styles from './BookingCTA.module.css';
import site from '@/data/site.json';
import bookingCta from '@/data/bookingCta.json';

export default function BookingCTA() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.inner}>
          <h2 className={styles.headline}>{bookingCta.headline}</h2>
          <p className={styles.body}>
            {bookingCta.body}
          </p>
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {bookingCta.ctaLabel}
          </a>
        </FadeUpSection>
      </div>
    </section>
  );
}
