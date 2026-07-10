import styles from './Preloader.module.css';

export default function Preloader() {
  return (
    <div className={styles.overlay} aria-hidden="true">
      <div className={styles.content}>
        <p className={styles.wordmark}>Vitality Source</p>
        <div className={styles.bar} />
      </div>
    </div>
  );
}
