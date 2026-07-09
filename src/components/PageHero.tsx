import Image from 'next/image';
import ImagePlaceholder from './ImagePlaceholder';
import styles from './PageHero.module.css';

interface Props {
  eyebrow: string;
  headline: string;
  imageLabel?: string;
  image?: string;
}

export default function PageHero({ eyebrow, headline, imageLabel, image }: Props) {
  const label = imageLabel ?? 'Vitality Source clinic';
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
        <h1 className={styles.headline}>{headline}</h1>
      </div>
      {image ? (
        <div className={styles.imageBlock}>
          <Image src={image} alt={label} fill style={{ objectFit: 'cover' }} priority />
        </div>
      ) : (
        <div className={styles.imageBlock} role="img" aria-label={label}>
          <ImagePlaceholder width="100%" height="55vh" label={label} />
        </div>
      )}
    </section>
  );
}
