import React from 'react';
import { Dumbbell, MapPin, Clock, Star, Instagram, ChevronRight, Settings } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

interface FooterProps {
  onOpenOwnerGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerGuide }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasInstagram = Boolean(GYM_CONFIG.contact.instagramUrl && GYM_CONFIG.contact.instagramUrl.trim().length > 0);

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Hindi Name */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#F27D26] flex items-center justify-center shadow-lg shadow-[#F27D26]/20">
                <Dumbbell className="w-5 h-5 text-black font-black" />
              </div>
              <div>
                <h3 className="font-black text-xl text-white uppercase italic tracking-tight">
                  {GYM_CONFIG.name}
                </h3>
                <p className="text-xs font-semibold text-[#F27D26] uppercase tracking-wider">
                  {GYM_CONFIG.hindiName}
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              A modern fitness destination in Buxar, Bihar offering quality equipment, proper guidance, and a motivating environment to build your stronger self.
            </p>

            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-[#F27D26] fill-[#F27D26]" />
                <strong className="text-white">{GYM_CONFIG.rating}★</strong> ({GYM_CONFIG.reviewCount} Reviews)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#F27D26]" />
                Opens at <strong className="text-white">{GYM_CONFIG.openingInfo.openingTime}</strong>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-[#F27D26] transition-colors inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold"
                  >
                    <ChevronRight className="w-3 h-3 text-gray-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Location Details & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-4">
              Gym Location
            </h4>
            <div className="space-y-2 text-xs leading-relaxed text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F27D26] shrink-0 mt-0.5" />
                <span>{GYM_CONFIG.address.fullFormatted}</span>
              </div>
              <p className="text-[#F27D26] font-semibold pl-6 uppercase tracking-wider text-[11px]">
                {GYM_CONFIG.address.locationHighlight}
              </p>
            </div>

            <div className="pt-2">
              <h5 className="text-[11px] font-bold text-gray-300 uppercase tracking-widest mb-2">
                Social Connection
              </h5>
              {hasInstagram ? (
                <a
                  href={GYM_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 text-xs uppercase tracking-wider transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#F27D26]" />
                  <span>Follow Us on Instagram</span>
                </a>
              ) : (
                <div className="text-xs text-gray-400">
                  Instagram: <span className="text-gray-500 italic">Available in configuration</span>
                </div>
              )}
            </div>

            {onOpenOwnerGuide && (
              <div className="pt-2">
                <button
                  onClick={onOpenOwnerGuide}
                  id="footer-owner-guide-btn"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-400 hover:text-[#F27D26] hover:underline transition-colors"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Gym Owner: How to edit info & photos</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 uppercase tracking-wider">
          <p>© 2026 The Power Fitness Hub. All Rights Reserved.</p>
          <p className="text-gray-400">
            Location: Buxar, Bihar | Opens 5:00 AM
          </p>
        </div>
      </div>
    </footer>
  );
};
