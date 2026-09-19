export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface Location {
  name: string;
  address?: string;
}

export interface ScheduleEntry {
  day: string;
  time: string;
  location?: string;
}

export interface Trainer {
  slug: string;
  name: string;
  role: string;
  shortDescription: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  image: string;
  gallery?: string[];
  socialLinks?: SocialLinks;
}

export interface Class {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  duration: string;
  intensity: string;
  trainerSlugs: string[];
  image: string;
  gallery?: string[];
  schedule?: ScheduleEntry[];
  locations?: Location[];
}
