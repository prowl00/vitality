import FadeUpSection from './FadeUpSection';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.header}>
          <p className="eyebrow">What Clients Say</p>
          <h2 className={styles.headline}>Real people, real experiences.</h2>
        </FadeUpSection>
        <div className={styles.placeholder}>
          {/* PENDING: Pull 3–5 reviews from Google Business Profile once GBP is confirmed active */}
          {/* Do not write placeholder testimonials — verified sources only */}
        </div>
      </div>
    </section>
  );
}
