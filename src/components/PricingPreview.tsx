import Link from 'next/link';
import FadeUpSection from './FadeUpSection';
import styles from './PricingPreview.module.css';
import pricingPreview from '@/data/pricingPreview.json';

const tiers = pricingPreview.tiers;

export default function PricingPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.header}>
          <p className="eyebrow">{pricingPreview.eyebrow}</p>
          <h2 className={styles.headline}>{pricingPreview.headline}</h2>
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
          <Link href={pricingPreview.footerLinkHref} className="btn-secondary">
            {pricingPreview.footerLinkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
