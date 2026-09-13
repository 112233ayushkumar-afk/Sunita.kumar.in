import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, MapPin, Clock, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

interface NavbarProps {
  onJoinClick: (topic?: string) => void;
  onOpenOwnerGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onOpenOwnerGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for quick address & opening info */}
      <div id="top-announcement-bar" className="bg-[#0D0D0D] border-b border-white/10 text-xs text-gray-400 py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#F27D26]" />
              <span className="text-[11px] uppercase tracking-wider">Opens at <strong className="text-white">{GYM_CONFIG.openingInfo.openingTime}</strong></span>
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#F27D26]" />
              <span className="text-[11px] uppercase tracking-wider">{GYM_CONFIG.address.landmark}, {GYM_CONFIG.address.city}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-1.5 text-[#F27D26] font-semibold text-xs tracking-wider">
              <span>★ {GYM_CONFIG.rating}</span>
              <span className="text-gray-400 font-normal">({GYM_CONFIG.reviewCount} Google Reviews)</span>
            </div>
            {onOpenOwnerGuide && (
              <button
                onClick={onOpenOwnerGuide}
                id="owner-guide-badge"
                className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                title="View Gym Owner Edit Instructions"
              >
                Owner Guide
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Gym Name */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F27D26] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F27D26] flex items-center justify-center shadow-lg shadow-[#F27D26]/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5 text-black font-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tighter leading-none text-white group-hover:text-[#F27D26] transition-colors uppercase">
                {GYM_CONFIG.name}
              </span>
              <span className="text-[11px] sm:text-xs text-[#F27D26] font-bold tracking-widest uppercase mt-0.5">
                FITNESS HUB • <span className="text-gray-400 font-normal">{GYM_CONFIG.hindiName}</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" aria-label="Main Navigation" className="hidden lg:flex items-center space-x-6 text-[11px] uppercase tracking-widest font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-400 hover:text-[#F27D26] hover:opacity-100 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest text-gray-300 hidden xl:inline-block">
              Buxar, Bihar
            </span>
            {GYM_CONFIG.contact.phoneNumber && (
              <a
                href={`tel:${GYM_CONFIG.contact.phoneNumber}`}
                id="header-phone-btn"
                className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-full flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>Call</span>
              </a>
            )}
            <button
              onClick={() => onJoinClick('Gym Membership')}
              id="header-join-now-btn"
              className="bg-[#F27D26] text-black text-xs font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-transform uppercase tracking-tighter shadow-md shadow-[#F27D26]/20 flex items-center gap-2"
            >
              <span>Join Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#F27D26]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-dropdown"
            className="lg:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-4 pb-6 space-y-2 mt-2"
          >
            <div className="text-[10px] font-bold uppercase text-gray-500 px-3 py-1 tracking-[0.25em]">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#F27D26] hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onJoinClick('Gym Membership');
                }}
                id="mobile-join-now-btn"
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-black bg-[#F27D26] hover:bg-[#ff8a34] rounded-full shadow-md flex items-center justify-center gap-2"
              >
                <span>Join Now / Enquire</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenOwnerGuide && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOwnerGuide();
                  }}
                  id="mobile-owner-guide-btn"
                  className="w-full py-2.5 text-center text-[11px] uppercase tracking-wider text-gray-400 hover:text-white bg-white/5 border border-white/10 rounded-full"
                >
                  ⚙️ Gym Owner Edit Guide
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
