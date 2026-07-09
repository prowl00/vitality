import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import MeetAnnette from '@/components/MeetAnnette';
import PricingPreview from '@/components/PricingPreview';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <MeetAnnette />
        <PricingPreview />
        <Reviews />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
