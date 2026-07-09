import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FadeUpSection from '@/components/FadeUpSection';
import s from '@/styles/interior.module.css';

export const metadata: Metadata = {
  title: 'Colon Hydrotherapy in Barrie, Ontario | Vitality Source',
  description: 'Certified colon hydrotherapy in Barrie, Ontario. Private, professional sessions with a certified practitioner. Book online with Vitality Source.',
};

const BOOKING_URL = 'https://book.squareup.com/appointments/g77s04j20bbscc/location/LMYFWTSFAX72S/services/LLSFRQ3GFUTQOBNJWCW4CTYZ';

const steps = [
  {
    label: 'Before you arrive',
    body: "Annette will send you a short intake form so she understands your background before you walk in. No extensive preparation is required, though she recommends eating lightly on the day of your session.",
  },
  {
    label: 'When you arrive',
    body: "You'll come into a quiet, private clinic. There's no reception area full of other clients. Annette meets you herself, every time.",
  },
  {
    label: 'During the session',
    body: "A session typically runs 45 to 60 minutes. You'll be in a private room throughout. Annette explains what's happening at each stage, so there's nothing that should catch you off guard.",
  },
  {
    label: 'Afterward',
    body: "Many clients describe feeling noticeably lighter after a session. Annette will give you simple aftercare guidance before you leave.",
  },
];

const faqs = [
  {
    q: 'Is colon hydrotherapy safe?',
    a: "When performed by a trained, certified practitioner using professional equipment, colon hydrotherapy is well-tolerated by most people. Annette will review your health background before your session and will let you know if there's a reason to consult your doctor first.",
  },
  {
    q: 'Does it hurt?',
    a: 'Most clients report that the session is more comfortable than they expected. Mild sensations of pressure or warmth are the most common experience.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This is genuinely up to you. Many clients start with a single session to see how they feel. Others find a series of three or six sessions works better for them as part of a longer wellness routine.',
  },
  {
    q: 'Can I come if I have a health condition?',
    a: "Please let Annette know about any health conditions, recent surgeries, or medications on your intake form. Some conditions are contraindications for this type of session. She will advise you honestly, and may recommend you check with your doctor before booking.",
  },
  {
    q: 'What should I avoid beforehand?',
    a: 'Eat lightly for a few hours before your session. Avoid heavy, gas-producing foods the day before if possible. Stay hydrated.',
  },
];

export default function ColonicHydrotherapy() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Colon Hydrotherapy"
          headline="What happens in a session — and why people come back."
          imageLabel="Treatment room or session photo"
        />

        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>The basics, plainly explained.</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              <p className={s.body}>
                Colon hydrotherapy — also called colonic irrigation — is a process that uses warm, purified water to gently cleanse the large intestine. It's a private, controlled session conducted with professional-grade equipment by a certified practitioner.
              </p>
              <p className={s.body}>
                Many people seek it out as part of a broader wellness routine. Others come after a period of digestive discomfort, before or after a dietary reset, or simply because they want to feel more comfortable in their body.
              </p>
              <p className={s.body}>
                This isn't a medical treatment, and we don't position it as one. What we can tell you is that clients often describe leaving a session feeling cleaner, lighter, and more at ease than when they arrived.
              </p>
            </div>
          </div>
        </section>

        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Your session, step by step.</h2>
            </FadeUpSection>
            <dl className={s.steps}>
              {steps.map(step => (
                <div key={step.label} className={s.step}>
                  <dt className={s.stepLabel}>{step.label}</dt>
                  <dd className={s.stepBody}>{step.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Privacy and cleanliness — not an afterthought.</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              <p className={s.body}>
                Every session takes place in a private room. The equipment is professional-grade and fully sanitized between clients. Single-use disposable components are used throughout — nothing is shared between clients.
              </p>
              <p className={s.body}>
                You don't need to feel self-conscious. Annette has been doing this work for over three years. Her priority is making sure you feel at ease from the moment you walk in.
              </p>
            </div>
          </div>
        </section>

        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Questions people ask before their first session.</h2>
            </FadeUpSection>
            <dl className={s.faqList}>
              {faqs.map(item => (
                <FadeUpSection key={item.q} className={s.faqItem}>
                  <dt className={s.faqQ}>{item.q}</dt>
                  <dd className={s.faqA}>{item.a}</dd>
                </FadeUpSection>
              ))}
            </dl>
          </div>
        </section>

        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.pageCta}>
              <h2 className={s.pageCtaH2}>Ready to book?</h2>
              <p className={s.pageCtaBody}>
                Sessions are available by appointment. Book directly online — you'll see Annette's availability and can confirm your time in a few clicks.
              </p>
              <div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a Session
                </a>
              </div>
              <p className={s.pageCtaNote}>
                Not sure yet?{' '}
                <a href="/pricing" className={s.pageCtaLink}>Visit the Pricing &amp; Booking page</a>
                {' '}to see package options, or get in touch if you have a question.
              </p>
            </FadeUpSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
