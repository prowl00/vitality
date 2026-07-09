import Link from 'next/link';
import FadeUpSection from './FadeUpSection';
import styles from './PricingPreview.module.css';

const tiers = [
  {
    name: 'New Client Session',
    price: '$140',
    description: 'First time at Vitality Source? This session is your starting point. Annette will take time to understand your background before you begin.',
    featured: false,
  },
  {
    name: 'Single Session',
    price: '$125',
    description: 'Book any time, no commitment required.',
    featured: false,
  },
  {
    name: 'Package of 3',
    price: '$330',
    perSession: '$110 / session',
    saving: 'Save $15 per session',
    description: "A good starting point if you're exploring a regular wellness routine.",
    featured: true,
  },
];

export default function PricingPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.header}>
          <p className="eyebrow">Pricing</p>
          <h2 className={styles.headline}>Transparent pricing. No surprises.</h2>
        </FadeUpSection>
        <div className={styles.grid}>
          {tiers.map(t => (
            <FadeUpSection key={t.name} className={`${styles.card} ${t.featured ? styles.featured : ''}`}>
              {t.featured && <span className={styles.badge}>Most popular</span>}
              <h3 className={styles.tierName}>{t.name}</h3>
              <p className={styles.price}>{t.price}</p>
              {t.perSession && <p className={styles.perSession}>{t.perSession}</p>}
              {t.saving && <p className={styles.saving}>{t.saving}</p>}
              <p className={styles.desc}>{t.description}</p>
            </FadeUpSection>
          ))}
        </div>
        <div className={styles.footer}>
          <Link href="/pricing" className="btn-secondary">
            See Full Pricing &amp; Savings →
          </Link>
        </div>
      </div>
    </section>
  );
}
