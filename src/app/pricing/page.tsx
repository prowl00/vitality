import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FadeUpSection from '@/components/FadeUpSection';
import s from '@/styles/interior.module.css';
import site from '@/data/site.json';
import page from '@/data/pricing.json';

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function Pricing() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow={page.heroEyebrow}
          headline={page.heroHeadline}
          imageLabel={page.heroImageAlt}
          image={page.heroImage || undefined}
        />

        {/* Colon Hydrotherapy Pricing */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{page.colonicHeadline}</h2>
            </FadeUpSection>

            {/* New Client — standalone featured block */}
            <div className={s.newClientBlock}>
              <div className={s.newClientLeft}>
                <p className={s.newClientLabel}>{page.newClient.label}</p>
                <p className={s.newClientName}>{page.newClient.name}</p>
                <p className={s.newClientPrice}>{page.newClient.price}</p>
              </div>
              <div className={s.newClientRight}>
                <p className={s.newClientDesc}>{page.newClient.description}</p>
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {page.newClient.ctaLabel}
                </a>
              </div>
            </div>

            {/* Returning clients — 2-column grid */}
            <div className={s.pricingGrid2col}>
              {page.colonicTiers.map(t => (
                <FadeUpSection key={t.name} className={`${s.pricingCard} ${t.featured ? s.pricingCardFeatured : ''}`}>
                  {t.featured && <span className={s.pricingBadge}>Most popular</span>}
                  <p className={s.pricingName}>{t.name}</p>
                  <p className={s.pricingAmount}>{t.price}</p>
                  {t.perSession && <p className={s.pricingPerSession}>{t.perSession}</p>}
                  {t.saving && <p className={s.pricingSaving}>{t.saving}</p>}
                  <p className={s.pricingDesc}>{t.description}</p>
                  <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
              <h2 className={s.headline}>{page.lymphaticHeadline}</h2>
            </FadeUpSection>
            <p className={s.pendingNote}>
              {page.lymphaticNote}
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{page.includesHeadline}</h2>
            </FadeUpSection>
            <ul className={s.includesList}>
              {page.includes.map(item => (
                <li key={item} className={s.includesItem}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking Block */}
        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{page.bookingHeadline}</h2>
            </FadeUpSection>
            <FadeUpSection className={s.bookingBlock}>
              <p className={s.body}>
                {page.bookingBody}
              </p>
              <div className={s.bookingCtaWrap}>
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {page.bookingCtaLabel}
                </a>
              </div>
              <p className={s.bookingNote}>
                {page.bookingNotePrefix}
                <a href={`mailto:${site.email}`} className={s.bookingNoteLink}>{site.email}</a>
                {page.bookingNoteMiddle}
                <a href={`tel:${site.phoneHref}`} className={s.bookingNoteLink}>{site.phone}</a>.
              </p>
            </FadeUpSection>
          </div>
        </section>

        {/* Hours & Location */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{page.hoursHeadline}</h2>
            </FadeUpSection>
            <div className={s.hoursGrid}>
              <div>
                <p className={s.hoursLabel}>Hours</p>
                <p className={s.hoursValue}>{site.hours.days}<br />{site.hours.time}</p>
              </div>
              <div>
                <p className={s.hoursLabel}>Location</p>
                <p className={s.hoursValue}>{site.address.street}<br />{site.address.cityLine}</p>
              </div>
              <div>
                <p className={s.hoursLabel}>Phone</p>
                <p className={s.hoursValue}><a href={`tel:${site.phoneHref}`}>{site.phone}</a></p>
              </div>
              <div>
                <p className={s.hoursLabel}>Email</p>
                <p className={s.hoursValue}><a href={`mailto:${site.email}`}>{site.email}</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
