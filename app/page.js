'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Hero from '../components/Home/Hero';
import FeaturedSports from '../components/Home/FeaturedSports';
import ClubBenefits from '../components/Home/ClubBenefits';
import Gallery from '../components/Home/Gallery';
import Events from '../components/Home/Events';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');
    if (scrollTo) {
      const targetElement = document.getElementById(scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <FeaturedSports />
      <ClubBenefits />
      <div id="events">
        <Events />
      </div>
      <Gallery />
    
    </>
  );
}
