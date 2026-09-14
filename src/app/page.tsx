'use client';

import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import ServicesGrid from '@/components/sections/ServicesGrid';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ProcessPreview from '@/components/sections/ProcessPreview';
import WhyIshbilia from '@/components/sections/WhyIshbilia';
import LandOwners from '@/components/sections/LandOwners';
import ContactCTA from '@/components/sections/ContactCTA';
import SectionDivider from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <AboutPreview />
      <SectionDivider />
      <ServicesGrid />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <ProcessPreview />
      <SectionDivider />
      <WhyIshbilia />
      <SectionDivider />
      <LandOwners />
      <SectionDivider />
      <ContactCTA />
    </>
  );
}
