import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Trainers } from './components/Trainers';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OwnerGuideModal } from './components/OwnerGuideModal';
import { GYM_CONFIG } from './config/gymConfig';
import type { InterestedInType } from './types';
import { ArrowRight, Navigation, Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [initialInterest, setInitialInterest] = useState<InterestedInType>('Gym Membership');
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState(false);

  const scrollToContact = (interest: InterestedInType = 'Gym Membership') => {
    setInitialInterest(interest);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLocation = () => {
    const element = document.getElementById('location');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasPhone = Boolean(GYM_CONFIG.contact.phoneNumber && GYM_CONFIG.contact.phoneNumber.trim().length > 0);
  const hasWhatsapp = Boolean(GYM_CONFIG.contact.whatsappNumber && GYM_CONFIG.contact.whatsappNumber.trim().length > 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#F27D26] selection:text-black">
      {/* Sticky Navigation Bar */}
      <Navbar
        onJoinClick={(topic) => scrollToContact((topic as InterestedInType) || 'Gym Membership')}
        onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onJoinClick={() => scrollToContact('Gym Membership')}
          onDirectionsClick={scrollToLocation}
        />

        {/* About Section with Statistics Cards */}
        <About />

        {/* Facilities & Amenities Section */}
        <Facilities
          onEnquireFacility={(name) => scrollToContact('Gym Membership')}
        />

        {/* Trainers & Guidance Section */}
        <Trainers
          onPersonalTrainingClick={() => scrollToContact('Personal Training')}
          onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
        />

        {/* Reviews & Google Rating Section */}
        <Reviews />

        {/* Image Gallery Section */}
        <Gallery
          onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
        />

        {/* Location & Opening Hours Section */}
        <LocationSection />

        {/* Contact & Enquiry Form Section */}
        <ContactSection
          initialInterest={initialInterest}
          onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)}
      />

      {/* Gym Owner Edit Instructions & Enquiry Inbox Modal */}
      <OwnerGuideModal
        isOpen={isOwnerGuideOpen}
        onClose={() => setIsOwnerGuideOpen(false)}
      />

      {/* Mobile Sticky Quick-Action Bar */}
      <div
        id="mobile-sticky-cta"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-white/10 p-3 flex items-center gap-2 shadow-2xl"
      >
        <button
          onClick={() => scrollToContact('Gym Membership')}
          className="flex-1 py-3 px-4 text-xs font-black text-black bg-[#F27D26] hover:bg-[#ff8a34] rounded-full flex items-center justify-center gap-1.5 shadow-md uppercase tracking-wider transition-colors"
        >
          <span>Join Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={scrollToLocation}
          className="flex-1 py-3 px-3 text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-full flex items-center justify-center gap-1.5 uppercase tracking-wider transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-[#F27D26]" />
          <span>Directions</span>
        </button>

        {hasPhone && (
          <a
            href={`tel:${GYM_CONFIG.contact.phoneNumber}`}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/15 rounded-full text-[#F27D26]"
            title="Call Gym"
          >
            <Phone className="w-4 h-4" />
          </a>
        )}

        {hasWhatsapp && (
          <a
            href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-400"
            title="WhatsApp Gym"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
