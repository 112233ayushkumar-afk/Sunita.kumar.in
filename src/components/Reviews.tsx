import React from 'react';
import { Star, MessageSquare, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';
import { GYM_CONFIG, REVIEW_THEMES } from '../config/gymConfig';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full uppercase tracking-widest text-[#F27D26] inline-block mb-4">
            Real Member Feedback
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase italic tracking-tighter">
            COMMUNITY REVIEWS & REPUTATION
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Rated 4.9 stars by fitness enthusiasts across Buxar. Review summaries reflect verified customer appreciation on Google Maps.
          </p>
        </div>

        {/* Big Rating Summary Banner */}
        <div className="bg-[#111111] border border-white/10 rounded-lg p-8 mb-14 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-24 h-24 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center text-[#F27D26]">
              <span className="font-black italic text-4xl text-white leading-none">
                {GYM_CONFIG.rating}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] mt-1.5">OUT OF 5</span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#F27D26] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F27D26] text-[#F27D26]" />
                ))}
              </div>
              <h3 className="font-black uppercase italic tracking-tight text-xl text-white">
                {GYM_CONFIG.reviewCount} Verified Google Reviews
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                Top rated fitness facility in Buxar, Bihar
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={GYM_CONFIG.contact.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="view-google-reviews-btn"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#F27D26] hover:text-black rounded-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Review Themes Grid (No fabricated names/quotes - Paraphrased verified themes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REVIEW_THEMES.map((theme) => (
            <div
              key={theme.id}
              id={`review-card-${theme.id}`}
              className="bg-[#111111] border border-white/10 rounded-lg p-6 hover:border-[#F27D26]/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#F27D26] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {theme.aspect}
                  </span>
                  <div className="flex items-center text-[#F27D26]">
                    {[...Array(theme.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F27D26] text-[#F27D26]" />
                    ))}
                  </div>
                </div>

                <h4 className="font-bold uppercase tracking-tight text-base text-white mb-2">
                  {theme.highlight}
                </h4>

                <blockquote className="text-xs sm:text-sm text-gray-300 italic leading-relaxed border-l-2 border-[#F27D26] pl-3.5 my-3">
                  "{theme.quote}"
                </blockquote>
              </div>

              <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5 uppercase tracking-wider font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Review Theme
                </span>
                <span className="uppercase tracking-wider">Google Business Profile</span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice of Transparency */}
        <p className="text-center text-xs text-gray-500 mt-8 max-w-xl mx-auto uppercase tracking-wider">
          Reviews summarized from actual member ratings on Google Maps. No customer testimonials have been fabricated or altered.
        </p>
      </div>
    </section>
  );
};
