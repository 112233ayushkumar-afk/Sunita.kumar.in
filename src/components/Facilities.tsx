import React from 'react';
import { Dumbbell, Maximize, UserCheck, Flame, Activity, Sparkles, Check } from 'lucide-react';
import { GYM_FACILITIES } from '../config/gymConfig';

interface FacilitiesProps {
  onEnquireFacility?: (facilityName: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onEnquireFacility }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return Dumbbell;
      case 'Maximize':
        return Maximize;
      case 'UserCheck':
        return UserCheck;
      case 'Flame':
        return Flame;
      case 'Activity':
        return Activity;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full uppercase tracking-widest text-[#F27D26] inline-block mb-4">
            What We Offer
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase italic tracking-tighter">
            GYM FACILITIES & AMENITIES
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Engineered to support beginner to advanced fitness enthusiasts with properly spaced zones, quality iron, and dedicated coaching guidance.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GYM_FACILITIES.map((facility) => {
            const Icon = getIcon(facility.iconName);
            const isCardio = facility.id === 'cardio-area';

            return (
              <div
                key={facility.id}
                id={`facility-card-${facility.id}`}
                className="bg-[#111111] border border-white/10 rounded-lg p-7 hover:border-[#F27D26]/60 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                {/* Accent top hairline on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F27D26] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 text-[#F27D26] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#F27D26] group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    {facility.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                        {facility.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="font-black uppercase italic tracking-tight text-xl text-white mb-2 group-hover:text-[#F27D26] transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {facility.description}
                  </p>

                  {isCardio && (
                    <div className="text-[11px] text-gray-400 bg-black/40 border border-white/10 rounded-md p-2.5 mb-3">
                      <span className="text-[#F27D26] font-semibold">Note:</span> Specific machines can be confirmed directly with the front desk or updated by the owner.
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 text-gray-300 text-[11px] uppercase tracking-wider font-semibold">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Available at Hub
                  </span>
                  {onEnquireFacility && (
                    <button
                      onClick={() => onEnquireFacility(facility.title)}
                      className="text-[#F27D26] hover:text-[#ff8a34] font-bold uppercase tracking-wider text-[11px] transition-colors"
                    >
                      Enquire →
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
