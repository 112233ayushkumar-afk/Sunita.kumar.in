import React from 'react';
import { User, Dumbbell, ShieldCheck, ArrowRight, UserPlus, Sparkles } from 'lucide-react';
import { TRAINER_PLACEHOLDERS } from '../config/gymConfig';

interface TrainersProps {
  onPersonalTrainingClick: () => void;
  onOpenOwnerGuide?: () => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onPersonalTrainingClick, onOpenOwnerGuide }) => {
  return (
    <section id="trainers" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full uppercase tracking-widest text-[#F27D26] inline-block mb-4">
            Expert Coaching
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase italic tracking-tighter">
            TRAIN & GET GUIDED
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F27D26]">
            Skilled Trainers. Better Guidance. Better Workouts.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            At The Power Fitness Hub, our members consistently praise the dedicated guidance provided by trainers.
            Whether learning correct biomechanics, overcoming plateaus, or structuring weekly muscle splits, trainers help you exercise with safety and confidence.
          </p>
        </div>

        {/* Guidance Benefits Banner */}
        <div className="bg-[#111111] border border-white/10 rounded-lg p-6 mb-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 text-[#F27D26] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-tight text-base sm:text-lg text-white">
                Form Correction & Injury Prevention
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Trainers maintain watch over exercise technique, posture, and progressive overload to prevent injuries and maximize growth.
              </p>
            </div>
          </div>
          <button
            onClick={onPersonalTrainingClick}
            id="personal-training-enquiry-top-btn"
            className="shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#F27D26] hover:bg-[#ff8a34] rounded-full transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Enquire Personal Training</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Trainer Cards (Editable Placeholders - No fabricated details) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {TRAINER_PLACEHOLDERS.map((trainer) => (
            <div
              key={trainer.id}
              id={`trainer-card-${trainer.id}`}
              className="bg-[#111111] border border-white/10 rounded-lg p-6 flex flex-col justify-between hover:border-[#F27D26]/60 transition-all group"
            >
              <div>
                {/* Trainer Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 mx-auto text-gray-400 group-hover:text-[#F27D26] group-hover:border-[#F27D26]/40 transition-colors">
                  <User className="w-8 h-8 stroke-[1.5]" />
                </div>

                <div className="text-center mb-4">
                  <span className="text-[10px] font-bold text-[#F27D26] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 inline-block mb-2">
                    {trainer.specializationTag}
                  </span>
                  <h3 className="font-black uppercase italic tracking-tight text-xl text-white">
                    {trainer.role}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 font-medium">
                    {trainer.subtitle}
                  </p>
                </div>

                {/* Explicit Owner Instruction Box */}
                <div className="bg-black/40 border border-dashed border-white/15 rounded-md p-4 text-center mb-4">
                  <p className="text-xs text-gray-400 italic">
                    "{trainer.placeholderInstruction}"
                  </p>
                  <p className="text-[10px] text-[#F27D26] mt-2 font-medium uppercase tracking-wider">
                    Editable in src/config/gymConfig.ts
                  </p>
                </div>
              </div>

              <button
                onClick={onPersonalTrainingClick}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request 1-on-1 Guidance</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F27D26]" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Callout & Owner helper link */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-6">
            Interested in starting dedicated personal training with tailored diet & routine plans?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onPersonalTrainingClick}
              id="trainers-main-enquiry-btn"
              className="px-8 py-3.5 bg-white text-black hover:bg-[#F27D26] hover:text-black transition-all font-bold uppercase text-xs tracking-widest rounded-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-white/5"
            >
              <UserPlus className="w-4 h-4" />
              <span>Personal Training Enquiry</span>
            </button>
            {onOpenOwnerGuide && (
              <button
                onClick={onOpenOwnerGuide}
                className="px-6 py-3.5 border border-white/20 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-widest rounded-sm text-gray-300"
              >
                Owner: How to add real trainer bios & photos →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
