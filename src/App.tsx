import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurCakes } from './components/OurCakes';
import { SpotlightSection } from './components/SpotlightSection';
import { CustomCakes } from './components/CustomCakes';
import { WhyFrostyBites } from './components/WhyFrostyBites';
import { CakeGallery } from './components/CakeGallery';
import { OrderingProcess } from './components/OrderingProcess';
import { ReviewsNote } from './components/ReviewsNote';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  const scrollToCustom = useCallback(() => {
    const el = document.getElementById('custom');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8EFE6] text-[#3D231A] selection:bg-[#F2D8D5] selection:text-[#3D231A]">
      {/* Navigation Bar */}
      <Navbar onOpenCustomModal={scrollToCustom} />

      {/* Main Flow */}
      <main className="flex-1">
        {/* Hero Section: Sweet Moments Start Here */}
        <Hero onOpenCustomModal={scrollToCustom} />

        {/* Middle Section: Choose a cake (3-column card row) */}
        <OurCakes />

        {/* Spotlight Section: Custom Designed Cakes with Cupcake & Arrow button */}
        <SpotlightSection onOpenCustomModal={scrollToCustom} />

        {/* Custom Cakes Section & Consultation Studio */}
        <CustomCakes />

        {/* Bakery Story & Craftsmanship */}
        <WhyFrostyBites />

        {/* Celebration Cake Gallery */}
        <CakeGallery />

        {/* 3-Step Ordering Process */}
        <OrderingProcess />

        {/* Google Maps Community Invitation */}
        <ReviewsNote />

        {/* Location, Schedule & Inquiries in Ambernath */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar />
    </div>
  );
}
