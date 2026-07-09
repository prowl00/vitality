import Image from 'next/image';
import styles from './Hero.module.css';
import site from '@/data/site.json';
import hero from '@/data/hero.json';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={`eyebrow ${styles.eyebrow}`}>{hero.eyebrow}</p>
        <h1 className={styles.headline}>
          {hero.headline}
        </h1>
        <p className={styles.subheadline}>
          {hero.subheadline}
        </p>
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {hero.ctaLabel}
        </a>
      </div>

      <div className={styles.imageBlock}>
        <Image
          src={hero.heroImage}
          alt={hero.heroImageAlt}
          fill
          style={{ objectFit: 'cover', objectPosition: hero.heroImagePosition }}
          priority
        />
      </div>
    </section>
  );
}
