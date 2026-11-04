export type Language = 'zh' | 'en';

export type CategoryId = 
  | 'all'
  | 'food'
  | 'renovation'
  | 'legal'
  | 'auto'
  | 'accounting'
  | 'real_estate'
  | 'health'
  | 'education';

export interface Category {
  id: CategoryId;
  nameZh: string;
  nameEn: string;
  subcategoriesZh: string[];
  subcategoriesEn: string[];
  icon: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  commentZh: string;
  commentEn: string;
}

export interface BusinessHours {
  daysZh: string;
  daysEn: string;
  open: string;
  close: string;
  isOpenToday: boolean;
}

export interface Business {
  id: string;
  nameZh: string;
  nameEn: string;
  categoryId: CategoryId;
  subcategoryZh: string;
  subcategoryEn: string;
  taglineZh: string;
  taglineEn: string;
  descriptionZh: string;
  descriptionEn: string;
  
  // Location
  address: string;
  districtZh: string;
  districtEn: string;
  distanceFromUW: string; // e.g. "0.8 km"
  
  // Contacts
  phone: string;
  wechat: string;
  email?: string;
  website?: string;
  
  // Attributes
  rating: number;
  reviewCount: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  verified: boolean;
  featured?: boolean;
  languagesZh: string[];
  languagesEn: string[];
  
  // Hours
  hours: BusinessHours;
  hoursDetailZh: string;
  hoursDetailEn: string;
  
  // Services & Perks
  servicesZh: string[];
  servicesEn: string[];
  perksZh: string[];
  perksEn: string[];
  
  // Visual Theme (Sophisticated styling)
  gradient: {
    from: string;
    to: string;
    accent: string;
  };
  
  reviews: Review[];
}

export interface FilterState {
  categoryId: CategoryId;
  subcategory: string;
  searchQuery: string;
  district: string;
  openNowOnly: boolean;
  studentDiscountOnly: boolean;
  wechatOnly: boolean;
  freeEstimateOnly: boolean;
  sortBy: 'recommended' | 'rating' | 'reviews' | 'distance';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  textZh: string;
  textEn: string;
  timestamp: string;
  recommendedBusinesses?: Business[];
  matchReasonZh?: string;
  matchReasonEn?: string;
  suggestedFollowUpsZh?: string[];
  suggestedFollowUpsEn?: string[];
}
