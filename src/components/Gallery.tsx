import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn, Info, Check, MapPin, ExternalLink, Play, Film } from 'lucide-react';
import { GALLERY_ITEMS, GYM_CONFIG } from '../config/gymConfig';
import type { GalleryCategory, GalleryItem } from '../types';

interface GalleryProps {
  onOpenOwnerGuide?: () => void;
}

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Videos',
  'Gym Interior',
  'Equipment',
  'Workout Area',
  'Trainers',
  'Members',
  'Exterior',
];

export const Gallery: React.FC<GalleryProps> = ({ onOpenOwnerGuide }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full uppercase tracking-widest text-[#F27D26] inline-block mb-4">
            Visual Experience
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase italic tracking-tighter">
            GYM GALLERY
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Take a look inside The Power Fitness Hub. Experience the equipment, atmosphere, and dedicated training zones in Buxar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#F27D26] text-black shadow-md shadow-[#F27D26]/20'
                  : 'bg-[#111111] text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative overflow-hidden rounded-lg bg-[#111111] border border-white/10 cursor-pointer aspect-4/3 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F27D26]/60"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Overlay & Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Play button overlay for video */}
              {item.mediaType === 'video' ? (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#F27D26] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-black translate-x-0.5" />
                  </div>
                </div>
              ) : (
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#F27D26]" />
                </div>
              )}

              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-[#F27D26]/30 inline-flex items-center gap-1">
                    {item.mediaType === 'video' && <Film className="w-2.5 h-2.5" />}
                    {item.category}
                  </span>
                  {item.isFromGoogleMaps && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-emerald-500/30 inline-flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-emerald-400" />
                      Google Maps
                    </span>
                  )}
                  {item.mediaType === 'video' && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full bg-red-600/80 backdrop-blur-md inline-flex items-center gap-1">
                      <Play className="w-2 h-2 fill-white" />
                      Live Clip
                    </span>
                  )}
                </div>
                <h3 className="font-black uppercase italic tracking-tight text-lg text-white group-hover:text-[#F27D26] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Owner helper callout */}
        <div className="mt-12 bg-[#111111] border border-white/10 rounded-lg p-5 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-[#F27D26] shrink-0" />
            <p className="text-xs text-gray-400">
              <strong className="text-white">Gym Owner Note:</strong> You can replace any of these images with your high-resolution original phone or camera photos inside <code className="text-[#F27D26] bg-black/60 px-1.5 py-0.5 rounded">src/config/gymConfig.ts</code>.
            </p>
          </div>
          {onOpenOwnerGuide && (
            <button
              onClick={onOpenOwnerGuide}
              className="shrink-0 text-xs font-bold uppercase tracking-wider text-[#F27D26] hover:text-[#ff8a34] underline"
            >
              Photo Edit Guide →
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activeImage && (
        <div
          id="gallery-lightbox-modal"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#111111] border border-white/10 rounded-lg overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setActiveImage(null)}
              id="lightbox-close-btn"
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 hover:bg-[#F27D26] text-white hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              {activeImage.mediaType === 'video' && activeImage.videoUrl ? (
                <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black py-2">
                  <video
                    src={activeImage.videoUrl}
                    poster={activeImage.imageUrl}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="max-h-[70vh] w-auto max-w-full rounded shadow-2xl"
                  />
                </div>
              ) : (
                <img
                  src={activeImage.imageUrl}
                  alt={activeImage.altText}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              )}
            </div>

            <div className="p-6 bg-[#0D0D0D] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] inline-flex items-center gap-1">
                    {activeImage.mediaType === 'video' && <Film className="w-2.5 h-2.5" />}
                    {activeImage.category}
                  </span>
                  {activeImage.isFromGoogleMaps && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded-full bg-black/70 border border-emerald-500/30 inline-flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-emerald-400" />
                      Google Maps Verified
                    </span>
                  )}
                  {activeImage.mediaType === 'video' && (
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full bg-red-600/80 inline-flex items-center gap-1">
                      <Play className="w-2 h-2 fill-white" />
                      Live Gym Video
                    </span>
                  )}
                </div>
                <h3 className="font-black uppercase italic tracking-tight text-xl text-white mt-0.5">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  The Power Fitness Hub, Near Panchmukhi Mandir, Ramrekha Ghat, Buxar
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {activeImage.originalMapsUrl || activeImage.isFromGoogleMaps ? (
                  <a
                    href={activeImage.originalMapsUrl || GYM_CONFIG.contact.googleMapsVideoUrl || GYM_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-[#F27D26] hover:text-black border border-white/10 rounded-sm transition-colors inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
                  >
                    <span>{activeImage.mediaType === 'video' ? 'Watch on Maps' : 'View on Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : null}
                <button
                  onClick={() => setActiveImage(null)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#F27D26] rounded-sm transition-colors cursor-pointer flex-1 sm:flex-initial text-center"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
