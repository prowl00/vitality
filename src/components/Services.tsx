import Link from 'next/link';
import FadeUpSection from './FadeUpSection';
import styles from './Services.module.css';
import services from '@/data/services.json';

export default function Services() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.header}>
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 className={styles.headline}>{services.headline}</h2>
        </FadeUpSection>
        <div className={styles.grid}>
          {services.items.map(s => (
            <FadeUpSection key={s.name} className={styles.card}>
              <div className={styles.rule} />
              <h3 className={styles.cardTitle}>{s.name}</h3>
              <p className={styles.cardBody}>{s.description}</p>
              <Link href={s.href} className={styles.learnMore}>
                Learn more <span className={styles.arrow}>→</span>
              </Link>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
