import styles from './TrustStrip.module.css';

const items = [
  'Certified Practitioner',
  'Private Rooms',
  '3+ Years in Barrie',
  '★ Google Reviews',
];

export default function TrustStrip() {
  return (
    <div className={styles.strip} aria-label="Practice credentials">
      {items.map((item, i) => (
        <span key={item} className={styles.item}>
          {i > 0 && <span className={styles.divider} aria-hidden="true" />}
          {item}
        </span>
      ))}
    </div>
  );
}
