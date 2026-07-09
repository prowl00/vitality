import Image from 'next/image';
import styles from './Hero.module.css';

const BOOKING_URL = 'https://book.squareup.com/appointments/g77s04j20bbscc/location/LMYFWTSFAX72S/services/LLSFRQ3GFUTQOBNJWCW4CTYZ';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={`eyebrow ${styles.eyebrow}`}>Barrie, Ontario</p>
        <h1 className={styles.headline}>
          Feel lighter, clearer, and more like yourself.
        </h1>
        <p className={styles.subheadline}>
          Colon hydrotherapy and lymphatic drainage services from a certified, private practitioner — in a calm, professional clinic designed around your comfort.
        </p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book Your Session
        </a>
      </div>

      <div className={styles.imageBlock}>
        <Image
          src="/hero-treatment-room.jpg"
          alt="Vitality Source treatment room"
          fill
          style={{ objectFit: 'cover', objectPosition: '65% center' }}
          priority
        />
      </div>
    </section>
  );
}
