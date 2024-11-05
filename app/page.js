import './globals.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedSports from '../components/FeaturedSports';
import ClubBenefits from '../components/ClubBenefits';
import Gallery from '../components/Gallery';
import Events from '../components/Events';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedSports />
      <ClubBenefits />
      <Events />
      <Gallery />
    </>
  );
}
