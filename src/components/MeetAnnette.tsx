import Image from 'next/image';
import Link from 'next/link';
import FadeUpSection from './FadeUpSection';
import styles from './MeetAnnette.module.css';
import meetAnnette from '@/data/meetAnnette.json';

export default function MeetAnnette() {
  return (
    <section className={`section ${styles.section}`}>
      <FadeUpSection className={`container ${styles.grid}`}>
        <div className={styles.photoBlock}>
          <Image
            src={meetAnnette.photo}
            alt={meetAnnette.photoAlt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </div>
        <div className={styles.text}>
          <p className="eyebrow">{meetAnnette.eyebrow}</p>
          <blockquote className={styles.quote}>
            "{meetAnnette.quote}"
          </blockquote>
          {meetAnnette.paragraphs.map(p => (
            <p key={p} className={styles.body}>{p}</p>
          ))}
          <Link href={meetAnnette.linkHref} className={styles.link}>
            {meetAnnette.linkLabel} <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </FadeUpSection>
    </section>
  );
}
