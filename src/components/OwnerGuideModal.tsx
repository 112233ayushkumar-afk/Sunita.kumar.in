import React, { useState, useEffect } from 'react';
import { X, FileCode, CheckCircle, AlertTriangle, Phone, MessageSquare, Instagram, Image, Users, Clock, Mail, Trash2 } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';
import type { EnquirySubmission } from '../types';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'status' | 'inbox'>('guide');
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const saved = localStorage.getItem('power_fitness_enquiries');
        if (saved) {
          setEnquiries(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Error loading enquiries', e);
      }
    }
  }, [isOpen]);

  const clearEnquiries = () => {
    localStorage.removeItem('power_fitness_enquiries');
    setEnquiries([]);
  };

  if (!isOpen) return null;

  const configStatus = [
    {
      label: 'Phone Number',
      value: GYM_CONFIG.contact.phoneNumber,
      isSet: Boolean(GYM_CONFIG.contact.phoneNumber),
      field: 'contact.phoneNumber',
      example: '+919876543210',
    },
    {
      label: 'WhatsApp Number',
      value: GYM_CONFIG.contact.whatsappNumber,
      isSet: Boolean(GYM_CONFIG.contact.whatsappNumber),
      field: 'contact.whatsappNumber',
      example: '919876543210 (Country code + number)',
    },
    {
      label: 'Instagram URL',
      value: GYM_CONFIG.contact.instagramUrl,
      isSet: Boolean(GYM_CONFIG.contact.instagramUrl),
      field: 'contact.instagramUrl',
      example: 'https://instagram.com/thepowerfitnesshub',
    },
    {
      label: 'Email Address',
      value: GYM_CONFIG.contact.email,
      isSet: Boolean(GYM_CONFIG.contact.email),
      field: 'contact.email',
      example: 'powerfitnesshubbuxar@gmail.com',
    },
    {
      label: 'Google Maps Directions Link',
      value: GYM_CONFIG.contact.googleMapsUrl,
      isSet: Boolean(GYM_CONFIG.contact.googleMapsUrl),
      field: 'contact.googleMapsUrl',
      example: 'Direct Google Maps Place/Coordinates URL',
    },
    {
      label: 'Google Maps Video Reel Link',
      value: GYM_CONFIG.contact.googleMapsVideoUrl || '',
      isSet: Boolean(GYM_CONFIG.contact.googleMapsVideoUrl),
      field: 'contact.googleMapsVideoUrl',
      example: 'https://maps.app.goo.gl/wZot6nvtB6pNj2Ap6',
    },
    {
      label: 'Opening Time',
      value: GYM_CONFIG.openingInfo.openingTime,
      isSet: true,
      field: 'openingInfo.openingTime',
      example: '5:00 AM',
    },
  ];

  return (
    <div
      id="owner-guide-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-3xl bg-[#0A0A0A] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#111111]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 text-[#F27D26] flex items-center justify-center">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-lg text-white uppercase italic tracking-tight">
                Gym Owner Customization Guide
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                The Power Fitness Hub • Buxar, Bihar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-sm bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-white/10 bg-[#0A0A0A] px-6">
          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 px-4 text-[11px] font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'guide'
                ? 'border-[#F27D26] text-[#F27D26]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            1. Where & How to Edit
          </button>
          <button
            onClick={() => setActiveTab('status')}
            className={`py-3 px-4 text-[11px] font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'status'
                ? 'border-[#F27D26] text-[#F27D26]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            2. Contact Channels Status
          </button>
          <button
            onClick={() => setActiveTab('inbox')}
            className={`py-3 px-4 text-[11px] font-bold uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'inbox'
                ? 'border-[#F27D26] text-[#F27D26]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <span>3. Enquiry Inbox</span>
            {enquiries.length > 0 && (
              <span className="px-1.5 py-0.2 bg-[#F27D26] text-black text-[10px] font-black rounded-full">
                {enquiries.length}
              </span>
            )}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === 'guide' && (
            <div className="space-y-6">
              <div className="p-4 rounded-md bg-white/5 border border-white/10">
                <h4 className="font-bold text-[#F27D26] uppercase tracking-wider text-xs mb-1">
                  Single File Centralized Configuration
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  All gym information is isolated in one clean file: <br />
                  <code className="text-[#F27D26] font-mono font-bold">src/config/gymConfig.ts</code>. <br />
                  No code changes needed in components. When you leave an unprovided contact field empty (<code className="text-[#F27D26]">""</code>), its button is automatically hidden from the public website!
                </p>
              </div>

              {/* Step 1: Contact Details */}
              <div className="bg-[#111111] border border-white/10 rounded-md p-4">
                <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#F27D26]" />
                  How to Add Phone, WhatsApp & Instagram:
                </h5>
                <pre className="p-3 rounded-sm bg-black/60 text-[11px] text-gray-300 font-mono overflow-x-auto border border-white/10">
{`contact: {
  phoneNumber: "+919876543210", // Phone call button will appear
  whatsappNumber: "919876543210", // 1-click WhatsApp chat button will appear
  email: "yourgym@example.com",
  instagramUrl: "https://instagram.com/thepowerfitnesshub",
  googleMapsUrl: "https://maps.google.com/..."
}`}
                </pre>
              </div>

              {/* Step 2: Gallery Photos */}
              <div className="bg-[#111111] border border-white/10 rounded-md p-4">
                <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Image className="w-4 h-4 text-[#F27D26]" />
                  How to Replace Gallery & Gym Photos:
                </h5>
                <p className="text-xs text-gray-400 mb-2">
                  Place your photos in <code className="text-[#F27D26] font-mono">/public/assets/</code> or reference image URLs in <code className="text-[#F27D26] font-mono">GALLERY_ITEMS</code> inside <code className="text-[#F27D26] font-mono">src/config/gymConfig.ts</code>:
                </p>
                <pre className="p-3 rounded-sm bg-black/60 text-[11px] text-gray-300 font-mono overflow-x-auto border border-white/10">
{`export const GALLERY_ITEMS = [
  {
    id: "photo-1",
    title: "Our Dumbbell Zone",
    category: "Gym Interior",
    imageUrl: "/assets/my-gym-photo.jpg", // Replace with your image
    altText: "The Power Fitness Hub workout floor",
  }
]`}
                </pre>
              </div>

              {/* Step 3: Trainers */}
              <div className="bg-[#111111] border border-white/10 rounded-md p-4">
                <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#F27D26]" />
                  How to Add Trainer Names & Certifications:
                </h5>
                <pre className="p-3 rounded-sm bg-black/60 text-[11px] text-gray-300 font-mono overflow-x-auto border border-white/10">
{`export const TRAINER_PLACEHOLDERS = [
  {
    id: "trainer-1",
    role: "Head Coach",
    subtitle: "Coach Amit Kumar - 8 Yrs Exp, Certified Trainer",
    placeholderInstruction: "Specialist in hypertrophy and posture guidance"
  }
]`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'status' && (
            <div className="space-y-4">
              <p className="text-xs text-gray-400">
                Current status of configuration variables in <code className="text-[#F27D26] font-mono">gymConfig.ts</code>:
              </p>

              <div className="space-y-3">
                {configStatus.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-md bg-[#111111] border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs uppercase tracking-wider">{item.label}</span>
                        <code className="text-[10px] text-gray-400 font-mono">({item.field})</code>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {item.isSet ? (
                          <span className="text-emerald-400 font-mono">{item.value}</span>
                        ) : (
                          <span className="text-[#F27D26] italic">Empty string ("") — Button hidden on website</span>
                        )}
                      </p>
                    </div>

                    <div className="shrink-0">
                      {item.isSet ? (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Configured</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 border border-white/10 flex items-center gap-1">
                          <span>Waiting for input</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'inbox' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-widest">
                    Recent Membership & PT Enquiries
                  </h4>
                  <p className="text-xs text-gray-400">
                    Visitor enquiries submitted through the website on this browser
                  </p>
                </div>
                {enquiries.length > 0 && (
                  <button
                    onClick={clearEnquiries}
                    className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 px-3 py-1.5 rounded-sm bg-rose-500/10 border border-rose-500/20 uppercase tracking-wider font-bold cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>

              {enquiries.length === 0 ? (
                <div className="p-8 text-center bg-[#111111] border border-dashed border-white/15 rounded-md text-gray-400 text-xs">
                  No enquiries logged yet. Fill out the enquiry form on the website to test the submission flow!
                </div>
              ) : (
                <div className="space-y-3">
                  {enquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="p-4 rounded-md bg-[#111111] border border-white/10 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm uppercase tracking-wider">{enq.fullName}</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-[#F27D26] border border-[#F27D26]/30">
                          {enq.interestedIn}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-300">
                        <span>📞 Phone: <strong className="text-white">{enq.phoneNumber}</strong></span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{new Date(enq.submittedAt).toLocaleString()}</span>
                      </div>
                      {enq.message && (
                        <p className="text-xs text-gray-400 italic bg-black/40 p-2.5 rounded-sm border border-white/10">
                          "{enq.message}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#111111] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-[#F27D26] rounded-sm cursor-pointer transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
