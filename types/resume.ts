// Resume data types
export interface PersonalInfo {
  photo?: string;
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  gpa?: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url?: string;
  technologies?: string[];
}

export interface Language {
  id: string;
  name: string;
  proficiency?: 'basic' | 'conversational' | 'fluent' | 'native';
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export type TemplateType = 'modern' | 'classic' | 'minimal' | 'creative';
export type AccentColor = 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'teal' | 'gray';

export interface ResumeData {
  template: TemplateType;
  accentColor: AccentColor;
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
  languages: Language[];
  awards: Award[];
  // Which sections to show
  showSections: {
    photo: boolean;
    summary: boolean;
    experience: boolean;
    education: boolean;
    skills: boolean;
    certifications: boolean;
    projects: boolean;
    languages: boolean;
    awards: boolean;
  };
}

export const emptyResumeData: ResumeData = {
  template: 'modern',
  accentColor: 'blue',
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  certifications: [],
  projects: [],
  languages: [],
  awards: [],
  showSections: {
    photo: true,
    summary: true,
    experience: true,
    education: true,
    skills: true,
    certifications: false,
    projects: false,
    languages: false,
    awards: false,
  },
};
