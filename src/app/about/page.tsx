import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FadeUpSection from '@/components/FadeUpSection';
import s from '@/styles/interior.module.css';
import site from '@/data/site.json';
import about from '@/data/about.json';

export const metadata: Metadata = {
  title: about.metaTitle,
  description: about.metaDescription,
};

export default function About() {
  return (
    <>
      <Nav />
      <main>
        {/* About hero — two-column per spec: photo left, text right */}
        <section className={s.aboutHero}>
          <div className={s.aboutHeroPhoto}>
            <Image
              src={about.heroPhoto}
              alt={about.heroPhotoAlt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
          <div className={s.aboutHeroContent}>
            <p className="eyebrow">{about.heroEyebrow}</p>
            <h1 className={s.aboutHeroH1}>
              {about.heroHeadline}
            </h1>
          </div>
        </section>

        {/* Annette's Story */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{about.storyHeadline}</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              {about.storyParagraphs.map(p => (
                <p key={p} className={s.body}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{about.philosophyHeadline}</h2>
            </FadeUpSection>
            <div className={s.textBlock}>
              {about.philosophyParagraphs.map(p => (
                <p key={p} className={s.body}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className={`section ${s.ivory}`}>
          <div className="container">
            <FadeUpSection className={s.sectionHeader}>
              <h2 className={s.headline}>{about.credentialsHeadline}</h2>
            </FadeUpSection>
            <div className={s.credentials}>
              {about.credentials.map(c => (
                <p key={c} className={s.credentialItem}>{c}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className={`section ${s.linen}`}>
          <div className="container">
            <FadeUpSection className={s.pageCta}>
              <h2 className={s.pageCtaH2}>{about.ctaHeadline}</h2>
              <p className={s.pageCtaBody}>
                {about.ctaBody}
              </p>
              <div>
                <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {about.ctaLabel}
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
