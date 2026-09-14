'use client';

import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import SadatDistrictsExplorer from '@/components/sections/SadatDistrictsExplorer';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import LiveProgressTracker from '@/components/sections/LiveProgressTracker';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyIshbilia from '@/components/sections/WhyIshbilia';
import LandOwners from '@/components/sections/LandOwners';
import ContactCTA from '@/components/sections/ContactCTA';
import SectionDivider from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (100% Protected & Preserved) */}
      <Hero />

      <SectionDivider />

      {/* 2. About Ishbilia Showcase (20 Years, Pillars & Project 1518 Frame) */}
      <AboutPreview />

      <SectionDivider />

      {/* 3. Interactive Sadat Districts Explorer (Zones 21, 14, 29) */}
      <SadatDistrictsExplorer />

      <SectionDivider />

      {/* 4. Featured Projects & Unit Selector with WhatsApp Booking */}
      <FeaturedProjects />

      <SectionDivider />

      {/* 5. Live Construction Progress Tracker (1518: 100%, 1490: 90%, 810: 80%) */}
      <LiveProgressTracker />

      <SectionDivider />

      {/* 6. Comprehensive Services Overview */}
      <ServicesGrid />

      <SectionDivider />

      {/* 7. Why Ishbilia Engineering Trust & Guarantees Teaser */}
      <WhyIshbilia />

      <SectionDivider />

      {/* 8. Land Owners Hub & Joint Venture */}
      <LandOwners />

      <SectionDivider />

      {/* 9. Elite Contact & Consultation CTA */}
      <ContactCTA />
    </>
  );
}
