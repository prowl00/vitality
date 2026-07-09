import FadeUpSection from './FadeUpSection';
import styles from './BookingCTA.module.css';

const BOOKING_URL = 'https://book.squareup.com/appointments/g77s04j20bbscc/location/LMYFWTSFAX72S/services/LLSFRQ3GFUTQOBNJWCW4CTYZ';

export default function BookingCTA() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.inner}>
          <h2 className={styles.headline}>Ready to book your first session?</h2>
          <p className={styles.body}>
            Barrie's certified colon hydrotherapy and lymphatic drainage practitioner. Private. Professional. Personal.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Your Session
          </a>
        </FadeUpSection>
      </div>
    </section>
  );
}
