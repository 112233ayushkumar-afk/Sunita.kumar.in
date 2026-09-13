import React from 'react';
import { Star, MapPin, ArrowRight, Navigation, ShieldCheck, Clock, Play } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

interface HeroProps {
  onJoinClick: () => void;
  onDirectionsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onDirectionsClick }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0A0A0A] border-b border-white/10">
      {/* Editorial Grayscale Backdrop Image with Gradient Blend */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full grayscale opacity-35 mix-blend-lighten pointer-events-none z-0">
        <img
          src="/gym_maps_full.jpg"
          alt="The Power Fitness Hub Interior - Real Google Maps Photo in Buxar"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[#0A0A0A]/40" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bold Editorial Typography & Actions */}
          <div className="lg:col-span-8 flex flex-col justify-center text-left">
            {/* Rating & Review Badge */}
            <div id="hero-rating-badge" className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center text-[#F27D26]">
                <Star className="w-4 h-4 fill-[#F27D26] text-[#F27D26]" />
                <span className="text-xs font-bold ml-1.5 text-white">{GYM_CONFIG.rating}/5</span>
                <span className="text-xs text-gray-400 font-medium ml-1">({GYM_CONFIG.reviewCount} Reviews)</span>
              </div>
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest text-gray-300">
                Buxar, Bihar
              </span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest text-[#F27D26]">
                Verified Facility
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              id="hero-main-title"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[84px] font-black leading-[0.88] tracking-tighter mb-6 uppercase italic text-white"
            >
              Build Your<br />
              <span className="text-[#F27D26]">Stronger</span><br />
              Self
            </h1>

            {/* Supporting Copy */}
            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
              The Power Fitness Hub (<span className="text-gray-300 font-medium">{GYM_CONFIG.hindiName}</span>) is Buxar's premier destination for proper workout guidance, quality strength equipment, and a motivating fitness environment. Located near Panchmukhi Mandir, Ramrekha Ghat.
            </p>

            {/* Editorial Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onJoinClick}
                id="hero-join-now-btn"
                className="px-8 py-3.5 bg-white text-black hover:bg-[#F27D26] hover:text-black transition-all font-bold uppercase text-xs tracking-widest rounded-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-white/5"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDirectionsClick}
                id="hero-get-directions-btn"
                className="px-8 py-3.5 border border-white/20 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-widest rounded-sm text-white flex items-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#F27D26]" />
                <span>Get Directions</span>
              </button>

              <a
                href="#gallery"
                id="hero-watch-video-btn"
                className="px-6 py-3.5 bg-[#111111] hover:bg-white/10 border border-white/10 hover:border-[#F27D26] text-gray-300 hover:text-white transition-all font-bold uppercase text-xs tracking-widest rounded-sm flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-[#F27D26] text-[#F27D26]" />
                <span>Watch Gym Video</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Stat Callouts */}
          <div className="lg:col-span-4 flex lg:flex-col items-start lg:items-end justify-between lg:justify-center gap-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10">
            <div className="text-left lg:text-right">
              <p className="text-[#F27D26] text-3xl sm:text-4xl font-black italic tracking-tight">
                05:00 AM
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 opacity-70 mt-1">
                Opening Time
              </p>
            </div>

            <div className="text-left lg:text-right">
              <p className="text-white text-3xl sm:text-4xl font-black italic tracking-tighter">
                BUXAR
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 opacity-70 mt-1">
                Bihar – 802101
              </p>
            </div>

            <div className="text-left lg:text-right hidden sm:block">
              <p className="text-white text-3xl sm:text-4xl font-black italic tracking-tight">
                4.9 ★
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 opacity-70 mt-1">
                Google Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Bottom Strip (Editorial Aesthetic Grid) */}
      <div className="w-full bg-[#111111] border-t border-white/10 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 shrink-0 relative z-10">
        <div className="p-5 sm:p-6 flex flex-col justify-center">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] mb-1">
            Expert Trainers
          </h3>
          <p className="text-[11px] text-gray-400 leading-tight">
            Skilled guidance for every rep, ensuring proper form and results.
          </p>
        </div>

        <div className="p-5 sm:p-6 flex flex-col justify-center">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] mb-1">
            Modern Gear
          </h3>
          <p className="text-[11px] text-gray-400 leading-tight">
            High-end strength and cardio equipment in a spacious layout.
          </p>
        </div>

        <div className="p-5 sm:p-6 flex flex-col justify-center">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] mb-1">
            Prime Location
          </h3>
          <p className="text-[11px] text-gray-400 leading-tight">
            Communications City, Near Panchmukhi Mandir, Ramrekha Ghat.
          </p>
        </div>

        <div className="p-5 sm:p-6 flex flex-col justify-center">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] mb-1">
            Early Schedule
          </h3>
          <p className="text-[11px] text-gray-400 leading-tight">
            Doors open 5:00 AM daily for dedicated morning training.
          </p>
        </div>
      </div>
    </section>
  );
};
