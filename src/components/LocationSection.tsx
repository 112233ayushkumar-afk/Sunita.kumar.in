import React from 'react';
import { MapPin, Navigation, Clock, CheckCircle, ExternalLink, Compass } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

export const LocationSection: React.FC = () => {
  const mapQuery = encodeURIComponent(
    `${GYM_CONFIG.name} Panchmukhi Mandir Ramrekha Ghat Buxar Bihar 802101`
  );
  // Standard embed iframe URL for OpenStreetMap / Google Maps fallback
  const embedUrl = `https://maps.google.com/maps?q=Panchmukhi+Mandir+Ramrekha+Ghat+Buxar+Bihar+802101&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full uppercase tracking-widest text-[#F27D26] inline-block mb-4">
            Visit Our Gym
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase italic tracking-tighter">
            FIND US
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Conveniently situated in the heart of Buxar on Main Road, Ramrekha Ghat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Landmark & Opening Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="bg-[#111111] border border-white/10 rounded-lg p-7 shadow-xl">
              <div className="flex items-center gap-3 text-[#F27D26] mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#F27D26]" />
                </div>
                <div>
                  <h3 className="font-black uppercase italic tracking-tight text-lg text-white">Gym Address</h3>
                  <span className="text-xs text-[#F27D26] font-semibold uppercase tracking-wider">Buxar, Bihar</span>
                </div>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-md p-4 mb-4">
                <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
                  {GYM_CONFIG.address.line1}, {GYM_CONFIG.address.line2}
                </p>
                <p className="text-[#F27D26] text-xs sm:text-sm font-semibold mt-1 uppercase tracking-wider">
                  {GYM_CONFIG.address.city}, {GYM_CONFIG.address.state} – {GYM_CONFIG.address.pincode}
                </p>
              </div>

              {/* Landmark Highlight Callout */}
              <div className="p-4 rounded-md bg-white/5 border border-white/10 flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#F27D26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold text-[#F27D26] uppercase tracking-widest">
                    Location Highlight
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1">
                    {GYM_CONFIG.address.locationHighlight}
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-6">
                <a
                  href={GYM_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-get-directions-btn"
                  className="w-full py-3.5 px-6 text-center text-xs font-bold uppercase tracking-wider text-black bg-[#F27D26] hover:bg-[#ff8a34] rounded-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-black" />
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black/80" />
                </a>
                <p className="text-[10px] text-gray-500 text-center mt-2 uppercase tracking-wider">
                  Opens Google Maps navigation directly to Ramrekha Ghat, Buxar
                </p>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div id="opening-hours-card" className="bg-[#111111] border border-white/10 rounded-lg p-7 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#F27D26]" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase italic tracking-tight text-lg text-white">Opening Hours</h3>
                    <span className="text-xs text-gray-400">Gym operating schedule</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/5 text-[#F27D26] border border-white/10">
                  Daily Morning
                </span>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-md p-5 mb-4 text-center">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">
                  Opening Time
                </span>
                <span className="font-black italic text-4xl sm:text-5xl text-white tracking-tight block mt-1">
                  {GYM_CONFIG.openingInfo.openingTime}
                </span>
                <span className="text-xs text-[#F27D26] font-bold uppercase tracking-wider block mt-1">
                  {GYM_CONFIG.openingInfo.displayText}
                </span>
              </div>

              {/* Weekly schedule list */}
              <div className="space-y-2 text-xs">
                {GYM_CONFIG.openingInfo.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
                  >
                    <span className="font-medium text-gray-300">{item.day}</span>
                    <span className="text-gray-400 font-medium text-right">{item.hours}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-gray-500 mt-3 italic">
                * Note: Opening time is confirmed at 5:00 AM. Exact evening closing hours can be verified upon visit or updated by owner.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#111111] border border-white/10 rounded-lg p-4 sm:p-6 shadow-xl flex-1 flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div>
                  <h3 className="font-black uppercase italic tracking-tight text-lg text-white">Interactive Map</h3>
                  <p className="text-xs text-gray-400">
                    Panchmukhi Mandir, Ramrekha Ghat, Buxar – 802101
                  </p>
                </div>
                <a
                  href={GYM_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F27D26] hover:text-[#ff8a34] transition-colors"
                >
                  <span>Open Full Screen Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Container */}
              <div className="relative flex-1 min-h-[360px] sm:min-h-[440px] rounded-md overflow-hidden mt-4 border border-white/10 bg-[#0A0A0A]">
                <iframe
                  title="The Power Fitness Hub Location Map in Buxar"
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px] rounded-md"
                />

                {/* Floating location card on top of map */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm bg-[#0A0A0A]/95 backdrop-blur-md p-3.5 rounded-md border border-white/10 text-xs shadow-2xl flex items-center gap-3.5">
                  <img
                    src="/gym_maps_square.jpg"
                    alt="The Power Fitness Hub Google Maps Photo"
                    className="w-14 h-14 rounded-md object-cover border border-white/10 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-white flex items-center gap-1.5 truncate">
                      <span className="w-2 h-2 rounded-full bg-[#F27D26] animate-ping shrink-0" />
                      <span className="truncate">{GYM_CONFIG.name}</span>
                    </div>
                    <div className="text-[11px] text-gray-400 truncate mt-0.5">
                      Near Panchmukhi Mandir, Ramrekha Ghat
                    </div>
                    <a
                      href={GYM_CONFIG.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#F27D26] hover:underline"
                    >
                      <span>Start Navigation</span>
                      <Navigation className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
