export type InterestedInType = 'Gym Membership' | 'Personal Training' | 'General Enquiry';

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag?: string;
  isConfirmed?: boolean;
}

export interface TrainerPlaceholder {
  id: string;
  role: string;
  subtitle: string;
  placeholderInstruction: string;
  avatarPlaceholder?: string;
  specializationTag: string;
}

export interface ReviewTheme {
  id: string;
  quote: string;
  aspect: string;
  rating: number;
  highlight: string;
  source: string;
}

export type GalleryCategory =
  | 'All'
  | 'Videos'
  | 'Gym Interior'
  | 'Equipment'
  | 'Workout Area'
  | 'Trainers'
  | 'Members'
  | 'Exterior';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  altText: string;
  aspect: string;
  isFromGoogleMaps?: boolean;
  source?: string;
  mediaType?: 'image' | 'video';
  videoUrl?: string;
  originalMapsUrl?: string;
}

export interface EnquirySubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  interestedIn: InterestedInType;
  message: string;
  submittedAt: string;
}

export interface GymConfig {
  name: string;
  hindiName: string;
  category: string;
  rating: number;
  reviewCount: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    fullFormatted: string;
    locationHighlight: string;
  };
  openingInfo: {
    openingTime: string;
    displayText: string;
    note: string;
    schedule: { day: string; hours: string; status?: string }[];
  };
  contact: {
    phoneNumber: string; // Leave empty if unknown: ""
    whatsappNumber: string; // Leave empty if unknown: ""
    email: string; // Leave empty if unknown: ""
    googleMapsUrl: string;
    googleReviewsUrl: string;
    googleMapsVideoUrl?: string;
    instagramUrl: string; // Leave empty if unknown: ""
  };
}
