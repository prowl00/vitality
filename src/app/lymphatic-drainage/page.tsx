import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FadeUpSection from '@/components/FadeUpSection';
import s from '@/styles/interior.module.css';
import site from '@/data/site.json';
import page from '@/data/lymphaticDrainage.json';

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function LymphaticDrainage() {
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

        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{page.quietSessionHeadline}</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              {page.quietSessionParagraphs.map(p => (
                <p key={p} className={s.body}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{page.whoComesHeadline}</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              {page.whoComesParagraphs.map(p => (
                <p key={p} className={s.body}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{page.howWorksHeadline}</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              {page.howWorksParagraphs.map(p => (
                <p key={p} className={s.body}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{page.faqHeadline}</h2>
            </FadeUpSection>
            <dl className={s.faqList}>
              {page.faqs.map(item => (
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
              <h2 className={s.pageCtaH2}>{page.ctaHeadline}</h2>
              <p className={s.pageCtaBody}>
                {page.ctaBody}
              </p>
              <div>
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {page.ctaLabel}
                </a>
              </div>
              <p className={s.pageCtaNote}>
                {page.ctaNotePrefix}
                <a href="/pricing" className={s.pageCtaLink}>{page.ctaNoteLinkLabel}</a>
                {page.ctaNoteSuffix}
              </p>
            </FadeUpSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
