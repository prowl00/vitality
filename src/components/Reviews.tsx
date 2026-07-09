import FadeUpSection from './FadeUpSection';
import styles from './Reviews.module.css';
import reviews from '@/data/reviews.json';

export default function Reviews() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.header}>
          <p className="eyebrow">{reviews.eyebrow}</p>
          <h2 className={styles.headline}>{reviews.headline}</h2>
        </FadeUpSection>
        {reviews.items.length > 0 ? (
          <div className={styles.grid}>
            {reviews.items.map((r: { author: string; quote: string }) => (
              <FadeUpSection key={r.author} className={styles.card}>
                <p className={styles.quote}>"{r.quote}"</p>
                <p className={styles.author}>{r.author}</p>
              </FadeUpSection>
            ))}
          </div>
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>
    </section>
  );
}
