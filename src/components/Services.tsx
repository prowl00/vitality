import Link from 'next/link';
import FadeUpSection from './FadeUpSection';
import styles from './Services.module.css';

const services = [
  {
    name: 'Colon Hydrotherapy',
    description: 'A gentle, thorough cleanse of the large intestine. Many clients describe leaving a session feeling noticeably lighter, more comfortable, and more at ease in their body. Sessions take place in a fully private room with professional equipment.',
    href: '/colonic-hydrotherapy',
  },
  {
    name: 'Lymphatic Drainage',
    description: "A gentle manual technique focused on supporting the body's natural lymphatic flow. Clients often describe a sense of ease and reduced heaviness after a session. A quiet, restful experience that many find deeply relaxing.",
    href: '/lymphatic-drainage',
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.header}>
          <p className="eyebrow">Our Services</p>
          <h2 className={styles.headline}>Two services. One practitioner who knows your name.</h2>
        </FadeUpSection>
        <div className={styles.grid}>
          {services.map(s => (
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
