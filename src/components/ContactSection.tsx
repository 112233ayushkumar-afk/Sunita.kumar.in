import React, { useState, useEffect } from 'react';
import { Send, Phone, MessageSquare, Mail, Instagram, CheckCircle, AlertCircle, Sparkles, MapPin, Clock } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';
import type { InterestedInType, EnquirySubmission } from '../types';

interface ContactSectionProps {
  initialInterest?: InterestedInType;
  onOpenOwnerGuide?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInterest = 'Gym Membership', onOpenOwnerGuide }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [interestedIn, setInterestedIn] = useState<InterestedInType>(initialInterest);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialInterest) {
      setInterestedIn(initialInterest);
    }
  }, [initialInterest]);

  // Check which channels have real details configured (Hides empty channels cleanly)
  const hasPhone = Boolean(GYM_CONFIG.contact.phoneNumber && GYM_CONFIG.contact.phoneNumber.trim().length > 0);
  const hasWhatsapp = Boolean(GYM_CONFIG.contact.whatsappNumber && GYM_CONFIG.contact.whatsappNumber.trim().length > 0);
  const hasEmail = Boolean(GYM_CONFIG.contact.email && GYM_CONFIG.contact.email.trim().length > 0);
  const hasInstagram = Boolean(GYM_CONFIG.contact.instagramUrl && GYM_CONFIG.contact.instagramUrl.trim().length > 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!phoneNumber.trim() || phoneNumber.trim().length < 8) {
      setErrorMessage('Please enter a valid phone number (at least 8 digits).');
      return;
    }

    setStatus('submitting');

    try {
      const newEnquiry: EnquirySubmission = {
        id: `enquiry-${Date.now()}`,
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        interestedIn,
        message: message.trim(),
        submittedAt: new Date().toISOString(),
      };

      // Save into local storage for the Gym Owner to review in the owner portal
      const existing = localStorage.getItem('power_fitness_enquiries');
      const list: EnquirySubmission[] = existing ? JSON.parse(existing) : [];
      list.unshift(newEnquiry);
      localStorage.setItem('power_fitness_enquiries', JSON.stringify(list));

      setTimeout(() => {
        setStatus('success');
      }, 500);
    } catch (err) {
      setStatus('error');
      setErrorMessage('Failed to record enquiry. Please try again.');
    }
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setMessage('');
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] bg-white/5 border border-white/10 px-3.5 py-1 rounded-full uppercase tracking-widest text-[#F27D26] inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase italic tracking-tighter">
            MEMBERSHIP & TRAINING ENQUIRY
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            Ready to start your fitness journey in Buxar? Send an enquiry or visit the gym directly at Ramrekha Ghat near Panchmukhi Mandir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111111] border border-white/10 rounded-lg p-7 shadow-xl">
              <h3 className="font-black uppercase italic tracking-tight text-xl text-white mb-2">
                Connect With Us
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Our front desk is open from <strong className="text-[#F27D26]">5:00 AM</strong> daily to welcome new members and walk-ins.
              </p>

              {/* Gym Location summary */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-md bg-black/40 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#F27D26] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</h4>
                    <p className="text-sm text-white font-medium mt-0.5">
                      1st Floor, Communications City, Main Road
                    </p>
                    <p className="text-xs text-[#F27D26] font-semibold uppercase tracking-wider mt-0.5">
                      Near Panchmukhi Mandir, Ramrekha Ghat, Buxar – 802101
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-md bg-black/40 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#F27D26] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Opening Time</h4>
                    <p className="text-sm text-white font-bold uppercase tracking-wide mt-0.5">
                      5:00 AM Daily Morning
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {GYM_CONFIG.openingInfo.note}
                    </p>
                  </div>
                </div>
              </div>

              {/* Conditional Direct Contact Buttons (ONLY if configured) */}
              <div className="mt-6 space-y-3">
                {hasPhone && (
                  <a
                    href={`tel:${GYM_CONFIG.contact.phoneNumber}`}
                    id="contact-phone-link"
                    className="w-full py-3 px-4 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#F27D26]" />
                      <span>Direct Call</span>
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{GYM_CONFIG.contact.phoneNumber}</span>
                  </a>
                )}

                {hasWhatsapp && (
                  <a
                    href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi%20The%20Power%20Fitness%20Hub,%20I%20am%20interested%20in%20gym%20membership.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-whatsapp-link"
                    className="w-full py-3 px-4 rounded-sm bg-emerald-950/40 hover:bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </span>
                    <span className="text-xs font-normal">Quick Response →</span>
                  </a>
                )}

                {hasEmail && (
                  <a
                    href={`mailto:${GYM_CONFIG.contact.email}`}
                    id="contact-email-link"
                    className="w-full py-3 px-4 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#F27D26]" />
                      <span>Send Email</span>
                    </span>
                    <span className="text-xs text-gray-400 font-normal">{GYM_CONFIG.contact.email}</span>
                  </a>
                )}

                {/* Instagram Presence Button */}
                {hasInstagram ? (
                  <a
                    href={GYM_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-instagram-link"
                    className="w-full py-3 px-4 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-all"
                  >
                    <span className="flex items-center gap-2.5">
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>Follow Us on Instagram</span>
                    </span>
                    <span className="text-xs text-pink-300 font-normal">View Page →</span>
                  </a>
                ) : (
                  <div className="p-3 rounded-md bg-black/40 border border-dashed border-white/15 text-[11px] text-gray-400 flex items-center justify-between">
                    <span>Instagram link ready for owner activation</span>
                    {onOpenOwnerGuide && (
                      <button
                        onClick={onOpenOwnerGuide}
                        className="text-[#F27D26] hover:underline font-bold uppercase tracking-wider text-[10px]"
                      >
                        Set link
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] border border-white/10 rounded-lg p-7 sm:p-9 shadow-2xl relative">
              <h3 className="font-black uppercase italic tracking-tight text-2xl text-white mb-2">
                Send Direct Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Fill out the form below and the gym team will reach out with membership details, timing slots, or training arrangements.
              </p>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 text-[#F27D26] flex items-center justify-center mx-auto border border-[#F27D26]/40">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-black uppercase italic tracking-tight text-2xl text-white">
                    Enquiry Received!
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F27D26]">{fullName}</strong>! Your interest in <strong className="text-white">{interestedIn}</strong> has been logged. You can also visit the gym directly on 1st Floor, Communications City near Panchmukhi Mandir at 5:00 AM.
                  </p>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    {hasWhatsapp && (
                      <a
                        href={`https://wa.me/${GYM_CONFIG.contact.whatsappNumber}?text=Hi,%20I%20am%20${encodeURIComponent(fullName)}.%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(interestedIn)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-emerald-400 hover:bg-emerald-300 rounded-sm transition-all"
                      >
                        Forward via WhatsApp
                      </a>
                    )}
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-[#F27D26] rounded-sm transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="enquiry-full-name" className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#F27D26]">*</span>
                    </label>
                    <input
                      id="enquiry-full-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-black/50 border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26] text-sm transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="enquiry-phone-number" className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-[#F27D26]">*</span>
                    </label>
                    <input
                      id="enquiry-phone-number"
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-black/50 border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26] text-sm transition-all"
                    />
                  </div>

                  {/* Interested In */}
                  <div>
                    <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Interested In <span className="text-[#F27D26]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(['Gym Membership', 'Personal Training', 'General Enquiry'] as InterestedInType[]).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInterestedIn(type)}
                          className={`py-3 px-3 rounded-sm text-[11px] font-bold uppercase tracking-wider transition-all text-center border cursor-pointer ${
                            interestedIn === type
                              ? 'bg-[#F27D26] text-black border-[#F27D26] shadow-sm'
                              : 'bg-black/50 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="enquiry-message" className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={3}
                      placeholder="Tell us about your fitness targets, preferred workout timing, or any questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-sm bg-black/50 border border-white/15 text-white placeholder-gray-600 focus:outline-none focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26] text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="enquiry-submit-btn"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#F27D26] rounded-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-black" />
                        <span>SEND ENQUIRY</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-gray-500 text-center uppercase tracking-wider">
                    Your details are shared strictly with The Power Fitness Hub front desk.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
