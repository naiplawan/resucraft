import { z } from 'zod';

// Helper for ID validation - accepts any string (for backwards compatibility with old data)
const idSchema = z.string();

// Schema that matches the exact ResumeData interface
// This is lenient for validation - accepts what's stored in localStorage
export const resumeDataSchema = z.object({
  template: z.enum(['modern', 'classic', 'minimal', 'creative']),
  accentColor: z.enum(['blue', 'green', 'purple', 'red', 'orange', 'teal', 'gray']),
  personalInfo: z.object({
    photo: z.string().optional(),
    fullName: z.string(),
    jobTitle: z.string(),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
  }),
  summary: z.string(),
  experience: z.array(z.object({
    id: idSchema,
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    current: z.boolean(),
    location: z.string(),
    description: z.string(),
  })),
  education: z.array(z.object({
    id: idSchema,
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    startYear: z.string(),
    endYear: z.string(),
    gpa: z.string().optional(),
    description: z.string().optional(),
  })),
  skills: z.array(z.object({
    id: idSchema,
    name: z.string(),
    level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
    category: z.string().optional(),
  })),
  certifications: z.array(z.object({
    id: idSchema,
    name: z.string(),
    issuer: z.string(),
    date: z.string(),
    url: z.string().optional(),
  })),
  projects: z.array(z.object({
    id: idSchema,
    name: z.string(),
    description: z.string(),
    url: z.string().optional(),
    technologies: z.array(z.string()).optional(),
  })),
  languages: z.array(z.object({
    id: idSchema,
    name: z.string(),
    proficiency: z.enum(['basic', 'conversational', 'fluent', 'native']).optional(),
  })),
  awards: z.array(z.object({
    id: idSchema,
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    description: z.string().optional(),
  })),
  showSections: z.object({
    photo: z.boolean(),
    summary: z.boolean(),
    experience: z.boolean(),
    education: z.boolean(),
    skills: z.boolean(),
    certifications: z.boolean(),
    projects: z.boolean(),
    languages: z.boolean(),
    awards: z.boolean(),
  }),
});

// Stricter schemas for form validation (with meaningful error messages)
export const personalInfoFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(100, 'Name too long'),
  jobTitle: z.string().min(1, 'Job title is required').max(100, 'Title too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  location: z.string().min(1, 'Location is required'),
  linkedin: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  photo: z.string().optional(),
});

export const experienceFormSchema = z.object({
  company: z.string().min(1, 'Company is required'),
  position: z.string().min(1, 'Position is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  current: z.boolean(),
  location: z.string().optional(),
  description: z.string().optional(),
});

export const educationFormSchema = z.object({
  institution: z.string().min(1, 'Institution is required'),
  degree: z.string().min(1, 'Degree is required'),
  field: z.string().optional(),
  startYear: z.string().min(1, 'Start year is required'),
  endYear: z.string().optional(),
  gpa: z.string().optional(),
  description: z.string().optional(),
});

export const certificationFormSchema = z.object({
  name: z.string().min(1, 'Certification name is required'),
  issuer: z.string().min(1, 'Issuer is required'),
  date: z.string().min(1, 'Date is required'),
  url: z.string().url('Invalid URL').optional().or(z.literal('')),
});

export const projectFormSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().optional(),
  url: z.string().url('Invalid URL').optional().or(z.literal('')),
  technologies: z.array(z.string()).optional(),
});

export const languageFormSchema = z.object({
  name: z.string().min(1, 'Language is required'),
  proficiency: z.enum(['basic', 'conversational', 'fluent', 'native']).optional(),
});

export const awardFormSchema = z.object({
  title: z.string().min(1, 'Award title is required'),
  issuer: z.string().min(1, 'Issuer is required'),
  date: z.string().min(1, 'Date is required'),
  description: z.string().optional(),
});
