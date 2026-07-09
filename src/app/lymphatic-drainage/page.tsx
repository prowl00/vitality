import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FadeUpSection from '@/components/FadeUpSection';
import s from '@/styles/interior.module.css';

export const metadata: Metadata = {
  title: 'Lymphatic Drainage in Barrie, Ontario | Vitality Source',
  description: 'Gentle lymphatic drainage sessions in Barrie, Ontario. Certified practitioner. Private appointments. Book online with Vitality Source.',
};

const BOOKING_URL = 'https://book.squareup.com/appointments/g77s04j20bbscc/location/LMYFWTSFAX72S/services/LLSFRQ3GFUTQOBNJWCW4CTYZ';

const faqs = [
  {
    q: 'Is this the same as a massage?',
    a: "Not exactly. Lymphatic drainage uses much lighter pressure than a conventional massage, and the movements follow a specific pattern along the lymphatic system. Most people find it less intense and more relaxing than a regular massage.",
  },
  {
    q: 'Does it hurt?',
    a: "Most clients find lymphatic drainage very comfortable. The pressure is intentionally light and gentle. If anything feels uncomfortable, let Annette know and she'll adjust.",
  },
  {
    q: 'How many sessions are recommended?',
    a: "This depends entirely on you and your goals. A single session is a good way to understand how you respond to the technique. Some clients find they prefer a series of sessions as part of a longer wellness routine.",
  },
  {
    q: 'Can I combine this with a colon hydrotherapy session?',
    a: "Many clients at Vitality Source use both services as part of their routine. You can discuss what might work best for you with Annette before booking.",
  },
];

export default function LymphaticDrainage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Lymphatic Drainage"
          headline="Gentle, restorative — and deeply relaxing for most clients."
          imageLabel="Treatment room or session photo"
        />

        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>A quieter kind of session.</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              <p className={s.body}>
                Lymphatic drainage is a gentle manual technique designed to support the body's lymphatic system — a network of vessels and nodes that plays a role in the body's natural circulation and immune function.
              </p>
              <p className={s.body}>
                The session itself is slow, light-pressured, and methodical. Most clients find it deeply relaxing — more restful than a conventional massage, with a sense of ease or lightness that many describe feeling afterward.
              </p>
              <p className={s.body}>
                This is not a medical treatment, and we don't position it as one. It's a wellness session for people who want to feel better in their body.
              </p>
            </div>
          </div>
        </section>

        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Who comes for lymphatic drainage sessions.</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              <p className={s.body}>
                People come to lymphatic drainage for a range of reasons. Some are looking for a quiet, restorative experience as part of their wellness routine. Others are managing a sense of puffiness, sluggishness, or general heaviness and want to try something gentle. Some come on the recommendation of a health professional.
              </p>
              <p className={s.body}>
                If you're considering a session following a recent surgery or medical procedure, we'd encourage you to check with your doctor or surgeon before booking — not because a session is likely to be a concern, but because your provider knows your specific situation best. Annette is happy to answer any questions you have before you decide.
              </p>
            </div>
          </div>
        </section>

        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>How a session works.</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              <p className={s.body}>
                Lymphatic drainage sessions with Annette are one-on-one, in a fully private room. The technique involves gentle, rhythmic manual movements following the lymphatic pathways of the body.
              </p>
              <p className={s.body}>
                Sessions typically run 45 to 60 minutes. You'll be in comfortable surroundings throughout, and Annette will check in with you about pressure and comfort during the session.
              </p>
              <p className={s.body}>
                Many clients describe a sense of calm and ease during the session itself, and a feeling of being lighter or less congested afterward.
              </p>
            </div>
          </div>
        </section>

        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Common questions about lymphatic drainage.</h2>
            </FadeUpSection>
            <dl className={s.faqList}>
              {faqs.map(item => (
                <div key={item.q} className={s.faqItem}>
                  <dt className={s.faqQ}>{item.q}</dt>
                  <dd className={s.faqA}>{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.pageCta}>
              <h2 className={s.pageCtaH2}>Book your session.</h2>
              <p className={s.pageCtaBody}>
                Sessions are available by appointment. Use the link below to see Annette's availability and confirm your booking directly.
              </p>
              <div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a Session
                </a>
              </div>
              <p className={s.pageCtaNote}>
                Questions first?{' '}
                <a href="/pricing" className={s.pageCtaLink}>Visit the Pricing &amp; Booking page</a>
                {' '}or contact Annette directly.
              </p>
            </FadeUpSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
