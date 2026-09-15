'use client';

import Hero from '@/components/sections/Hero';
import UrgencyTicker from '@/components/sections/UrgencyTicker';
import AboutPreview from '@/components/sections/AboutPreview';
import SadatDistrictsExplorer from '@/components/sections/SadatDistrictsExplorer';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import SmartUnitFinder from '@/components/sections/SmartUnitFinder';
import ProjectShowcaseVideo from '@/components/sections/ProjectShowcaseVideo';
import LiveProgressTracker from '@/components/sections/LiveProgressTracker';
import BrochureDownloadCTA from '@/components/sections/BrochureDownloadCTA';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WhyIshbilia from '@/components/sections/WhyIshbilia';
import LandOwners from '@/components/sections/LandOwners';
import GoogleMapShowcase from '@/components/sections/GoogleMapShowcase';
import ContactCTA from '@/components/sections/ContactCTA';
import SectionDivider from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (100% Protected & Preserved) */}
      <Hero />

      {/* 1.5. Live Urgency & Limited Opportunities Ticker */}
      <UrgencyTicker />

      <SectionDivider />

      {/* 2. About Ishbilia Showcase (20 Years, Pillars & Project 1518 Frame) */}
      <AboutPreview />

      <SectionDivider />

      {/* 2.5. Project 1518 Video Showcase - Autoplay */}
      <ProjectShowcaseVideo />

      <SectionDivider />

      {/* 3. Interactive Sadat Districts Explorer (Zones 21, 14, 29) */}
      <SadatDistrictsExplorer />

      <SectionDivider />

      {/* 4. Featured Projects & Unit Selector with WhatsApp Booking */}
      <FeaturedProjects />

      <SectionDivider />

      {/* 4.5. Smart Unit Finder - Interactive Tool */}
      <SmartUnitFinder />

      <SectionDivider />

      {/* 5. Live Construction Progress Tracker (1518: 100%, 1490: 90%, 810: 80%) */}
      <LiveProgressTracker />

      <SectionDivider />

      {/* 5.5. Architectural Brochure & Master Plans PDF Download Lead Magnet */}
      <BrochureDownloadCTA />

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

      {/* 8.5. Live Interactive Google Maps - HQ & Sadat City Developments */}
      <section className="section-container relative z-10 mb-16" id="google-maps-location">
        <GoogleMapShowcase />
      </section>

      <SectionDivider />

      {/* 9. Elite Contact & Consultation CTA */}
      <ContactCTA />
    </>
  );
}
