import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FadeUpSection from '@/components/FadeUpSection';
import s from '@/styles/interior.module.css';

export const metadata: Metadata = {
  title: 'Pricing & Booking — Colon Hydrotherapy in Barrie | Vitality Source',
  description: 'Transparent session pricing and online booking for colon hydrotherapy and lymphatic drainage in Barrie, Ontario. Single sessions and multi-session packages available.',
};

const BOOKING_URL = 'https://book.squareup.com/appointments/g77s04j20bbscc/location/LMYFWTSFAX72S/services/LLSFRQ3GFUTQOBNJWCW4CTYZ';

const newClient = {
  name: 'New Client Session',
  price: '$140',
  description: "First time at Vitality Source? This session is your starting point. Annette will take time to understand your health background and what you're hoping to get out of your session before you begin.",
};

const colonicTiers = [
  {
    name: 'Single Session',
    price: '$125',
    description: 'Book any time, with no package commitment.',
    featured: false,
  },
  {
    name: 'Package of 3',
    price: '$330',
    perSession: '$110 / session',
    saving: 'Save $15 per session',
    description: "A practical starting point if you're exploring a regular wellness routine.",
    featured: true,
  },
  {
    name: 'Package of 6',
    price: '$650',
    perSession: '$108 / session',
    saving: 'Save $17 per session',
    description: 'For clients who want to give themselves time to feel the difference over a series.',
    featured: false,
  },
  {
    name: 'Package of 10',
    price: '$1,000',
    perSession: '$100 / session',
    saving: 'Best per-session value',
    description: 'For clients making colon hydrotherapy a regular part of their health routine.',
    featured: false,
  },
];

const includes = [
  'A private, fully equipped treatment room',
  'Professional-grade equipment with single-use disposable components',
  'A brief health intake consultation before your first session',
  'Aftercare guidance before you leave',
  'Direct access to Annette — the same practitioner, every visit',
];

export default function Pricing() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Pricing & Booking"
          headline="Simple, transparent pricing — with savings for every step up."
          imageLabel="Clinic or treatment room photo"
        />

        {/* Colon Hydrotherapy Pricing */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Colon hydrotherapy sessions.</h2>
            </FadeUpSection>

            {/* New Client — standalone featured block */}
            <div className={s.newClientBlock}>
              <div className={s.newClientLeft}>
                <p className={s.newClientLabel}>New clients</p>
                <p className={s.newClientName}>{newClient.name}</p>
                <p className={s.newClientPrice}>{newClient.price}</p>
              </div>
              <div className={s.newClientRight}>
                <p className={s.newClientDesc}>{newClient.description}</p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book your first session
                </a>
              </div>
            </div>

            {/* Returning clients — 2-column grid */}
            <div className={s.pricingGrid2col}>
              {colonicTiers.map(t => (
                <FadeUpSection key={t.name} className={`${s.pricingCard} ${t.featured ? s.pricingCardFeatured : ''}`}>
                  {t.featured && <span className={s.pricingBadge}>Most popular</span>}
                  <p className={s.pricingName}>{t.name}</p>
                  <p className={s.pricingAmount}>{t.price}</p>
                  {t.perSession && <p className={s.pricingPerSession}>{t.perSession}</p>}
                  {t.saving && <p className={s.pricingSaving}>{t.saving}</p>}
                  <p className={s.pricingDesc}>{t.description}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book
                  </a>
                </FadeUpSection>
              ))}
            </div>
          </div>
        </section>

        {/* Lymphatic Drainage Pricing */}
        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Lymphatic drainage sessions.</h2>
            </FadeUpSection>
            <div style={{
              padding: '24px',
              border: '1px dashed rgba(124, 139, 111, 0.4)',
              borderRadius: '4px',
              backgroundColor: 'rgba(124, 139, 111, 0.06)',
            }}>
              <p style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '13px',
                color: '#9C9088',
                letterSpacing: '0.03em',
                lineHeight: 1.6,
                margin: 0,
              }}>
                Lymphatic drainage pricing coming soon — contact Annette directly to discuss session rates.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>What every session includes.</h2>
            </FadeUpSection>
            <ul className={s.includesList}>
              {includes.map(item => (
                <li key={item} className={s.includesItem}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking Block */}
        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Book your session now.</h2>
            </FadeUpSection>
            <FadeUpSection className={s.bookingBlock}>
              <p className={s.body}>
                Use the link below to choose your service, select a time, and confirm your appointment. You'll receive a confirmation by email.
              </p>
              <div style={{ marginTop: 'var(--space-lg)' }}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book Your Session
                </a>
              </div>
              {/* TODO: Replace the button above with an embedded Square booking widget once confirmed */}
              <p className={s.bookingNote}>
                Prefer to ask a question first? Reach Annette at{' '}
                <a href="mailto:info@thevitalitysource.ca" className={s.bookingNoteLink}>info@thevitalitysource.ca</a>
                {' '}or{' '}
                <a href="tel:+14169099320" className={s.bookingNoteLink}>416-909-9320</a>.
              </p>
            </FadeUpSection>
          </div>
        </section>

        {/* Hours & Location */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>Hours &amp; location.</h2>
            </FadeUpSection>
            <div className={s.hoursGrid}>
              <div>
                <p className={s.hoursLabel}>Hours</p>
                <p className={s.hoursValue}>Tuesday – Saturday<br />10:00 AM – 6:00 PM</p>
              </div>
              <div>
                <p className={s.hoursLabel}>Location</p>
                <p className={s.hoursValue}>5 Bradford St.<br />Barrie, ON L4N 3B7</p>
              </div>
              <div>
                <p className={s.hoursLabel}>Phone</p>
                <p className={s.hoursValue}><a href="tel:+14169099320">416-909-9320</a></p>
              </div>
              <div>
                <p className={s.hoursLabel}>Email</p>
                <p className={s.hoursValue}><a href="mailto:info@thevitalitysource.ca">info@thevitalitysource.ca</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
