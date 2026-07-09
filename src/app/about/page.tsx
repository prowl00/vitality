import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FadeUpSection from '@/components/FadeUpSection';
import s from '@/styles/interior.module.css';

export const metadata: Metadata = {
  title: 'About Annette Agbontaen — Certified Colon Hydrotherapist in Barrie | Vitality Source',
  description: 'Meet Annette Agbontaen, certified colonic hydrotherapist and founder of Vitality Source in Barrie, Ontario. Personal, private, and professional.',
};

const BOOKING_URL = 'https://book.squareup.com/appointments/g77s04j20bbscc/location/LMYFWTSFAX72S/services/LLSFRQ3GFUTQOBNJWCW4CTYZ';

const credentials = [
  'Certified Colonic Hydrotherapist — The Canadian School of Colon Hydrotherapy',
  '3+ years in practice, serving clients in Barrie and the surrounding area',
  'Professional-grade equipment · Single-use disposable components · Fully private sessions',
];

export default function About() {
  return (
    <>
      <Nav />
      <main>
        {/* About hero — two-column per spec: photo left, text right */}
        <section className={s.aboutHero}>
          <div className={s.aboutHeroPhoto}>
            <Image
              src="/annette-1.jpg"
              alt="Annette Agbontaen, founder of Vitality Source"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
          <div className={s.aboutHeroContent}>
            <p className="eyebrow">About</p>
            <h1 className={s.aboutHeroH1}>
              The person you're trusting with your wellness is a person — not a clinic brand.
            </h1>
          </div>
        </section>

        {/* Annette's Story */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Why I became a practitioner.</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              <p className={s.body}>
                I came to colon hydrotherapy the same way many of my clients do — I was dealing with my own digestive issues and looking for something that might help.
              </p>
              <p className={s.body}>
                After my first series of sessions, something shifted. I felt renewed after every one. What had been a persistent, frustrating problem started to improve — and I felt more comfortable in my own body than I had in years.
              </p>
              <p className={s.body}>
                That experience didn't just help me feel better. It made me want to understand why it worked, and eventually, to learn how to do this work properly and share it with others.
              </p>
              <p className={s.body}>
                I completed my certification in colonic hydrotherapy and have been working with clients in Barrie for over three years. My goal is the same now as it was at the start: to help people feel better from the inside out, and to do it in a space that feels safe, private, and genuinely professional.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>How I work.</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              <p className={s.body}>
                Every client who comes through my door sees me — the same person, every time. There's no reception team, no rotating staff, and no anonymity. I believe that trust is built through consistency, and that the work I do requires you to feel genuinely comfortable.
              </p>
              <p className={s.body}>
                I take time at the start of every new client relationship to understand your health background, your concerns, and what you're hoping to get out of your sessions. Then I let you lead — whether that's a single visit or an ongoing routine.
              </p>
              <p className={s.body}>
                I also believe in being honest. If a session isn't right for your situation, I'll tell you. I'd rather you leave with the right information than book something that isn't suited to you.
              </p>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Credentials and training.</h2>
            </FadeUpSection>
            <div className={s.credentials}>
              {credentials.map(c => (
                <p key={c} className={s.credentialItem}>{c}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.pageCta}>
              <h2 className={s.pageCtaH2}>Ready to book?</h2>
              <p className={s.pageCtaBody}>
                Every new client starts with a booking. Annette will send you a short intake form in advance, and you'll have the chance to ask questions before your first session.
              </p>
              <div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book a Session
                </a>
              </div>
            </FadeUpSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
