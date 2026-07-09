import FadeUpSection from './FadeUpSection';
import styles from './FAQ.module.css';
import faq from '@/data/faq.json';

const faqs = faq.items;

export default function FAQ() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.header}>
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className={styles.headline}>{faq.headline}</h2>
        </FadeUpSection>
        <dl className={styles.list}>
          {faqs.map(item => (
            <FadeUpSection key={item.q} className={styles.item}>
              <dt className={styles.question}>{item.q}</dt>
              <dd className={styles.answer}>{item.a}</dd>
            </FadeUpSection>
          ))}
        </dl>
      </div>
    </section>
  );
}
