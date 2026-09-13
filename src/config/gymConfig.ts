import type { GymConfig, FacilityItem, TrainerPlaceholder, ReviewTheme, GalleryItem } from '../types';

// ============================================================================
// ⚠️ GYM OWNER CONFIGURATION FILE
// ============================================================================
// Edit this file to customize contact details, links, pictures, and gym info.
// If any contact detail is left empty (""), the corresponding button will be
// cleanly hidden from the live website without showing placeholder or fake data.
// ============================================================================

export const GYM_CONFIG: GymConfig = {
  // Business Identity
  name: "The Power Fitness Hub",
  hindiName: "थे पावर फिटनेस हब",
  category: "Gym / Fitness Center",
  rating: 4.9,
  reviewCount: "74+",

  // Address Details
  address: {
    line1: "1st Floor, Communications City",
    line2: "Main Road, Near Panchmukhi Mandir, Ramrekha Ghat",
    city: "Buxar",
    state: "Bihar",
    pincode: "802101",
    landmark: "Near Panchmukhi Mandir, Ramrekha Ghat",
    fullFormatted: "1st Floor, Communications City, Main Road, Near Panchmukhi Mandir, Ramrekha Ghat, Buxar, Bihar – 802101",
    locationHighlight: "The gym is easy to locate and is situated near Panchmukhi Mandir.",
  },

  // Operating Hours
  openingInfo: {
    openingTime: "5:00 AM",
    displayText: "Opens at 5:00 AM",
    note: "Early morning slots open every day. Contact or visit for full session schedules.",
    schedule: [
      { day: "Monday – Saturday", hours: "Opens at 5:00 AM (Evening slots available)", status: "Active" },
      { day: "Sunday", hours: "Opens at 5:00 AM (Check with front desk for Sunday closing)", status: "Active" }
    ]
  },

  // --------------------------------------------------------------------------
  // CONTACT DETAILS:
  // Note: Only real provided information is shown. Unfilled items remain hidden!
  // Gym owner: Enter your actual phone number, WhatsApp, email, or Instagram here.
  // --------------------------------------------------------------------------
  contact: {
    phoneNumber: "", // e.g., "+919876543210" (Leave "" until owner adds it)
    whatsappNumber: "", // e.g., "919876543210" (Country code without '+' or spaces)
    email: "", // e.g., "powerfitnesshubbuxar@gmail.com"
    // Official Google Maps listing link provided by gym owner:
    googleMapsUrl: "https://maps.app.goo.gl/Yz9q6Xk7YkjotGVr9",
    googleReviewsUrl: "https://maps.app.goo.gl/Yz9q6Xk7YkjotGVr9",
    // Direct Google Maps video clip link provided:
    googleMapsVideoUrl: "https://maps.app.goo.gl/wZot6nvtB6pNj2Ap6",
    instagramUrl: "", // e.g., "https://instagram.com/thepowerfitnesshub" (Leave "" until owner adds it)
  }
};

// ----------------------------------------------------------------------------
// FACILITIES & AMENITIES
// Confirmed facilities based on client details.
// ----------------------------------------------------------------------------
export const GYM_FACILITIES: FacilityItem[] = [
  {
    id: "modern-equipment",
    title: "Modern Equipment",
    description: "Quality equipment suitable for different types of workouts and muscle training.",
    iconName: "Dumbbell",
    tag: "High Quality",
    isConfirmed: true,
  },
  {
    id: "spacious-area",
    title: "Spacious Workout Area",
    description: "A properly spaced environment designed for safe, unrestricted, and comfortable workouts.",
    iconName: "Maximize",
    tag: "Comfort First",
    isConfirmed: true,
  },
  {
    id: "professional-guidance",
    title: "Professional Guidance",
    description: "Trainers guide members properly during workouts to ensure safe form and effective routines.",
    iconName: "UserCheck",
    tag: "Certified Coaching",
    isConfirmed: true,
  },
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Dedicated equipment and space for strength-focused workouts, free weights, and progressive overload.",
    iconName: "Flame",
    tag: "Core Strength",
    isConfirmed: true,
  },
  {
    id: "cardio-area",
    title: "Cardio Area",
    description: "Cardio workout equipment area for stamina, endurance, and cardiovascular health. (Owner confirmed)",
    iconName: "Activity",
    tag: "Endurance",
    isConfirmed: true,
  },
  {
    id: "fitness-environment",
    title: "Fitness Environment",
    description: "A motivating and energetic environment that keeps you focused on your transformation every day.",
    iconName: "Sparkles",
    tag: "Positive Vibes",
    isConfirmed: true,
  },
];

// ----------------------------------------------------------------------------
// TRAINERS (Editable Placeholders - No fabricated names)
// ----------------------------------------------------------------------------
export const TRAINER_PLACEHOLDERS: TrainerPlaceholder[] = [
  {
    id: "trainer-1",
    role: "Head Fitness Trainer",
    subtitle: "Workout Guidance & Muscle Building",
    placeholderInstruction: "Gym owner: Add head trainer's name, specialization, and credentials here.",
    specializationTag: "Proper Form & Technique",
  },
  {
    id: "trainer-2",
    role: "Strength & Conditioning Coach",
    subtitle: "Weight Training & Progressive Loading",
    placeholderInstruction: "Gym owner: Add trainer's name, specialization, and experience here.",
    specializationTag: "Strength & Hypertrophy",
  },
  {
    id: "trainer-3",
    role: "Personal Training Specialist",
    subtitle: "1-on-1 Fitness Goals & Nutrition Advice",
    placeholderInstruction: "Gym owner: Add personal trainer details and coaching focus here.",
    specializationTag: "Individual Guidance",
  },
];

// ----------------------------------------------------------------------------
// REVIEWS HIGHLIGHTS (Based purely on real Google Review themes - 4.9★ / 74+ Reviews)
// ----------------------------------------------------------------------------
export const REVIEW_THEMES: ReviewTheme[] = [
  {
    id: "review-1",
    aspect: "Trainer Guidance",
    highlight: "Skilled Trainers & Guidance",
    quote: "Customers appreciate the skilled trainers and proper guidance throughout their workout sessions.",
    rating: 5,
    source: "Google Reviews Theme",
  },
  {
    id: "review-2",
    aspect: "Gym Equipment",
    highlight: "Quality & Well-Maintained Gear",
    quote: "Members mention the good equipment and spacious workout environment suitable for daily training.",
    rating: 5,
    source: "Google Reviews Theme",
  },
  {
    id: "review-3",
    aspect: "Gym Ambience",
    highlight: "Motivating Atmosphere",
    quote: "Visitors consistently highlight the positive ambience, friendly community, and energetic workout vibe.",
    rating: 5,
    source: "Google Reviews Theme",
  },
  {
    id: "review-4",
    aspect: "Convenience & Location",
    highlight: "Easy to Reach in Buxar",
    quote: "Easily accessible location near Panchmukhi Mandir, Ramrekha Ghat with an early 5:00 AM opening time.",
    rating: 5,
    source: "Google Reviews Theme",
  },
];

// ----------------------------------------------------------------------------
// GALLERY ITEMS (Easily replaceable by the Gym Owner)
// ----------------------------------------------------------------------------
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-maps-video-reel",
    title: "Inside The Power Fitness Hub",
    category: "Videos",
    imageUrl: "/gym_maps_video_poster.jpg",
    altText: "Live video clip of The Power Fitness Hub workout atmosphere in Buxar from Google Maps listing",
    aspect: "9/16",
    isFromGoogleMaps: true,
    source: "Google Maps Video",
    mediaType: "video",
    videoUrl: "/gym_maps_video.mp4",
    originalMapsUrl: "https://maps.app.goo.gl/wZot6nvtB6pNj2Ap6",
  },
  {
    id: "gallery-maps-main",
    title: "The Power Fitness Hub Floor",
    category: "Gym Interior",
    imageUrl: "/gym_maps_4x3.jpg",
    altText: "The Power Fitness Hub official workout floor and equipment in Buxar from Google Maps listing",
    aspect: "4/3",
    isFromGoogleMaps: true,
    source: "Google Maps Listing",
  },
  {
    id: "gallery-maps-equipment",
    title: "Strength Station & Machines",
    category: "Equipment",
    imageUrl: "/gym_maps_16x9.jpg",
    altText: "Workout machines and equipment setup at The Power Fitness Hub Buxar",
    aspect: "16/9",
    isFromGoogleMaps: true,
    source: "Google Maps Listing",
  },
  {
    id: "gallery-maps-full",
    title: "Training Center Overview",
    category: "Workout Area",
    imageUrl: "/gym_maps_full.jpg",
    altText: "Full interior view of The Power Fitness Hub near Panchmukhi Mandir, Ramrekha Ghat",
    aspect: "4/3",
    isFromGoogleMaps: true,
    source: "Google Maps Listing",
  },
  {
    id: "gallery-hero",
    title: "Weight Training Zone",
    category: "Gym Interior",
    imageUrl: "/src/assets/images/gym_hero_buxar_1788636381231.jpg",
    altText: "The Power Fitness Hub weight training area with racks and benches",
    aspect: "16/9",
  },
  {
    id: "gallery-strength",
    title: "Free Weights & Dumbbells",
    category: "Workout Area",
    imageUrl: "/src/assets/images/gym_strength_area_1788636397887.jpg",
    altText: "Dumbbell rack and strength area in Buxar gym",
    aspect: "4/3",
  },
  {
    id: "gallery-gear",
    title: "Modern Workout Equipment",
    category: "Equipment",
    imageUrl: "/src/assets/images/gym_modern_gear_1788636425781.jpg",
    altText: "Modern fitness equipment and cable machines",
    aspect: "4/3",
  },
  {
    id: "gallery-exterior",
    title: "Gym Exterior & Entrance",
    category: "Exterior",
    imageUrl: "/src/assets/images/gym_exterior_buxar_1788636458044.jpg",
    altText: "1st Floor Communications City building near Panchmukhi Mandir",
    aspect: "4/3",
  },
  {
    id: "gallery-trainers",
    title: "Coaching & Floor Guidance",
    category: "Trainers",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    altText: "Personal workout guidance and fitness training",
    aspect: "4/3",
  },
  {
    id: "gallery-members",
    title: "Active Workout Session",
    category: "Members",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    altText: "Members training with proper form in gym workout area",
    aspect: "4/3",
  },
];
