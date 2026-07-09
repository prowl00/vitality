import Image from 'next/image';
import Link from 'next/link';
import FadeUpSection from './FadeUpSection';
import styles from './MeetAnnette.module.css';

export default function MeetAnnette() {
  return (
    <section className={`section ${styles.section}`}>
      <FadeUpSection className={`container ${styles.grid}`}>
        <div className={styles.photoBlock}>
          <Image
            src="/annette-2.jpg"
            alt="Annette Agbontaen, certified colonic hydrotherapist at Vitality Source in Barrie, Ontario"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </div>
        <div className={styles.text}>
          <p className="eyebrow">Your Practitioner</p>
          <blockquote className={styles.quote}>
            "True healing starts from within — and it starts with feeling heard."
          </blockquote>
          <p className={styles.body}>
            Annette Agbontaen is a certified colonic hydrotherapist based in Barrie. She came to this work through her own experience with colon hydrotherapy — and the difference it made for her became the reason she became a practitioner.
          </p>
          <p className={styles.body}>
            She sees clients one at a time, in a private, well-kept clinic space. You'll talk to the same person every visit.
          </p>
          <Link href="/about" className={styles.link}>
            About Annette <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </FadeUpSection>
    </section>
  );
}
