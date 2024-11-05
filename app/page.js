import './globals.css'
import Hero from '../components/Hero'
import FeaturedSports from '../components/FeaturedSports';
import ClubBenefits from '../components/ClubBenefits';
import Gallery from '../components/Gallery';
import Events from '../components/Events';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSports />
      <ClubBenefits />
      <Events />
      <Gallery />
    </>
  );
}
