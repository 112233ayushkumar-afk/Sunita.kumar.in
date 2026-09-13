import React, { useState } from 'react';
import { Star, MessageCircle, Clock, MapPin, CheckCircle2, Award, Zap, Compass, Users, Play, Film, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

export const About: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const highlights = [
    {
      title: "Experienced & Skilled Trainers",
      description: "Dedicated trainers providing active form correction and workout assistance to ensure injury-free, goal-oriented progress.",
      icon: Award,
    },
    {
      title: "Proper Workout Guidance",
      description: "Structured workout routines tailored to beginners, intermediates, and advanced lifters.",
      icon: Compass,
    },
    {
      title: "Quality Gym Equipment",
      description: "Biomechanically sound free weights, selectorized resistance machines, and benches.",
      icon: Zap,
    },
    {
      title: "Spacious Workout Area",
      description: "A well-organized gym floor with ample room between stations so you never feel cramped during peak training sessions.",
      icon: Users,
    },
    {
      title: "Motivating Atmosphere",
      description: "An energetic, supportive, and clean fitness environment that inspires consistency and discipline.",
      icon: CheckCircle2,
    },
    {
      title: "Convenient Location",
      description: "Prime spot at 1st Floor, Communications City near Panchmukhi Mandir, easily accessible for all Buxar residents.",
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full uppercase tracking-widest text-[#F27D26] inline-block mb-4">
            About Our Center
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase italic tracking-tighter">
            ABOUT THE POWER FITNESS HUB
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            The Power Fitness Hub (<span className="text-[#F27D26] font-medium">{GYM_CONFIG.hindiName}</span>) is a premier fitness center in Buxar focused on helping members achieve their personal health and physique goals through quality equipment, attentive guidance, and a positive, motivating workout environment.
          </p>
        </div>

        {/* Statistics Cards - Strictly verified details only */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {/* Rating */}
          <div className="bg-[#111111] rounded-lg p-6 text-center border border-white/10 hover:border-[#F27D26]/60 transition-all group">
            <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#F27D26] group-hover:scale-110 transition-transform">
              <Star className="w-5 h-5 fill-[#F27D26] text-[#F27D26]" />
            </div>
            <div className="font-black italic text-3xl sm:text-4xl text-[#F27D26] tracking-tight">
              {GYM_CONFIG.rating}★
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">
              Google Rating
            </div>
            <div className="text-[11px] text-gray-400 mt-1">High customer satisfaction</div>
          </div>

          {/* Reviews */}
          <div className="bg-[#111111] rounded-lg p-6 text-center border border-white/10 hover:border-[#F27D26]/60 transition-all group">
            <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#F27D26] group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 text-[#F27D26]" />
            </div>
            <div className="font-black italic text-3xl sm:text-4xl text-white tracking-tight">
              {GYM_CONFIG.reviewCount}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">
              Reviews
            </div>
            <div className="text-[11px] text-gray-400 mt-1">Authentic Google feedback</div>
          </div>

          {/* Opening Time */}
          <div className="bg-[#111111] rounded-lg p-6 text-center border border-white/10 hover:border-[#F27D26]/60 transition-all group">
            <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#F27D26] group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5 text-[#F27D26]" />
            </div>
            <div className="font-black italic text-3xl sm:text-4xl text-[#F27D26] tracking-tight">
              {GYM_CONFIG.openingInfo.openingTime}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">
              Opening Time
            </div>
            <div className="text-[11px] text-emerald-400 mt-1">Early morning sessions</div>
          </div>

          {/* Location */}
          <div className="bg-[#111111] rounded-lg p-6 text-center border border-white/10 hover:border-[#F27D26]/60 transition-all group">
            <div className="w-11 h-11 mx-auto mb-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#F27D26] group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-[#F27D26]" />
            </div>
            <div className="font-black italic text-3xl sm:text-4xl text-white tracking-tight">
              Buxar
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mt-2">
              Location
            </div>
            <div className="text-[11px] text-gray-400 mt-1">Near Panchmukhi Mandir</div>
          </div>
        </div>

        {/* 6 Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#111111] rounded-lg p-6 border border-white/10 hover:border-[#F27D26]/60 transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#F27D26] flex items-center justify-center mb-4 group-hover:bg-[#F27D26] group-hover:text-black transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold uppercase tracking-tight text-base sm:text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live Video Spotlight from Google Maps */}
        <div className="bg-[#111111] border border-white/10 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Video Player */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[260px] sm:max-w-[280px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-9/16 group">
                <video
                  src="/gym_maps_video.mp4"
                  poster="/gym_maps_video_poster.jpg"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                {/* Mute / Unmute overlay toggle */}
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/80 hover:bg-[#F27D26] text-white hover:text-black transition-colors z-20 cursor-pointer shadow-lg"
                  title={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <div className="absolute top-3 left-3 z-20">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-red-600/90 backdrop-blur-md inline-flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Live Floor Reel
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Description & Context */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full uppercase tracking-wider font-bold inline-flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  Google Maps Video Reel
                </span>
                <span className="text-[10px] bg-white/5 border border-white/10 text-gray-400 px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                  Buxar, Bihar
                </span>
              </div>

              <h3 className="font-black text-2xl sm:text-3xl text-white uppercase italic tracking-tight mb-3">
                Live Workout Atmosphere
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Watch authentic video footage uploaded directly to our official Google Maps listing, showcasing the strength machines, free weights setup, and training atmosphere at The Power Fitness Hub near Panchmukhi Mandir, Ramrekha Ghat.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#gallery"
                  className="px-6 py-3 bg-[#F27D26] text-black hover:bg-[#ff8a34] font-bold uppercase text-xs tracking-wider rounded-sm inline-flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#F27D26]/20"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>Explore Gallery & Video Reel</span>
                </a>

                <a
                  href={GYM_CONFIG.contact.googleMapsVideoUrl || GYM_CONFIG.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-bold uppercase text-xs tracking-wider rounded-sm inline-flex items-center gap-2 transition-all"
                >
                  <span>Watch on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F27D26]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
