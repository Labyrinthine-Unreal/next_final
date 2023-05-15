import Header from '../components/Header';
import WelcomeSection from '../components/sections/WelcomeSection';
import ArtCollectiveSection from '@components/sections/ArtCollectiveSection';
import TaurosCards from '@components/cards/TaurosCards';
import OurServicesSection from '@components/sections/ServiceSection';
import ContactUsSection from '@components/sections/ContactUsSection';
import Footer from '@components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <ArtCollectiveSection />
      <TaurosCards />
      <OurServicesSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}