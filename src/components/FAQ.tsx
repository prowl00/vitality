import FadeUpSection from './FadeUpSection';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Does a session hurt?',
    a: 'Most clients describe the session as comfortable — pressure or mild warmth are the most common sensations. Annette talks you through every step.',
  },
  {
    q: 'What should I bring?',
    a: 'Just yourself. Everything you need is provided. Comfortable, loose clothing is helpful.',
  },
  {
    q: 'Is it completely private?',
    a: "Yes. Sessions take place in a private room. You'll be the only client in that space.",
  },
];

export default function FAQ() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <FadeUpSection className={styles.header}>
          <p className="eyebrow">Common Questions</p>
          <h2 className={styles.headline}>First time? Here's what people usually want to know.</h2>
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
