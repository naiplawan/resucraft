'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback, useRef } from 'react';
import { ResumeData, emptyResumeData } from '@/types/resume';
import { resumeDataSchema } from '@/lib/schemas';
import { STORAGE_KEY, AUTOSAVE_DEBOUNCE_MS } from '@/lib/constants';
import { toast } from 'sonner';

interface ResumeContextType {
  resumeData: ResumeData;
  updatePersonalInfo: (info: Partial<ResumeData['personalInfo']>) => void;
  updateSummary: (summary: string) => void;
  updateTemplate: (template: ResumeData['template']) => void;
  updateAccentColor: (color: ResumeData['accentColor']) => void;
  addExperience: () => void;
  updateExperience: (id: string, data: Partial<ResumeData['experience'][0]>) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, data: Partial<ResumeData['education'][0]>) => void;
  removeEducation: (id: string) => void;
  addSkill: () => void;
  updateSkill: (id: string, data: Partial<ResumeData['skills'][0]>) => void;
  removeSkill: (id: string) => void;
  addCertification: () => void;
  updateCertification: (id: string, data: Partial<ResumeData['certifications'][0]>) => void;
  removeCertification: (id: string) => void;
  addProject: () => void;
  updateProject: (id: string, data: Partial<ResumeData['projects'][0]>) => void;
  removeProject: (id: string) => void;
  addLanguage: () => void;
  updateLanguage: (id: string, data: Partial<ResumeData['languages'][0]>) => void;
  removeLanguage: (id: string) => void;
  addAward: () => void;
  updateAward: (id: string, data: Partial<ResumeData['awards'][0]>) => void;
  removeAward: (id: string) => void;
  toggleSection: (section: keyof ResumeData['showSections']) => void;
  resetResume: () => void;
  loadResume: (data: ResumeData) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Helper function to generate UUID
function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older browsers
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>(emptyResumeData);
  const [isLoaded, setIsLoaded] = useState(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced save to localStorage
  const saveToStorage = useCallback((data: ResumeData) => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (error) {
        if (error instanceof Error && error.name === 'QuotaExceededError') {
          toast.error('Storage full. Try removing some photos or reducing content.');
        } else {
          console.error('Failed to save resume:', error);
          toast.error('Failed to save your resume. Please try again.');
        }
      }
    }, AUTOSAVE_DEBOUNCE_MS);
  }, []);

  // Load from localStorage on mount with validation
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const validated = resumeDataSchema.safeParse(parsed);

        if (validated.success) {
          setResumeData(validated.data);
        } else {
          console.warn('Invalid saved resume data, starting fresh:', validated.error);
          toast.warning('Previous resume data was corrupted. Starting with a fresh resume.');
        }
      } catch (e) {
        console.error('Failed to load saved resume:', e);
        toast.error('Failed to load saved resume. Starting fresh.');
      }
    }
    setIsLoaded(true);
  }, []);

  // Auto-save to localStorage when data changes
  useEffect(() => {
    if (isLoaded) {
      saveToStorage(resumeData);
    }

    // Cleanup timeout on unmount
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [resumeData, isLoaded, saveToStorage]);

  const updatePersonalInfo = (info: Partial<ResumeData['personalInfo']>) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const updateSummary = (summary: string) => {
    setResumeData(prev => ({ ...prev, summary }));
  };

  const updateTemplate = (template: ResumeData['template']) => {
    setResumeData(prev => ({ ...prev, template }));
  };

  const updateAccentColor = (color: ResumeData['accentColor']) => {
    setResumeData(prev => ({ ...prev, accentColor: color }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: generateId(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          current: false,
          location: '',
          description: '',
        },
      ],
    }));
  };

  const updateExperience = (id: string, data: Partial<ResumeData['experience'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => (exp.id === id ? { ...exp, ...data } : exp)),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id),
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: generateId(),
          institution: '',
          degree: '',
          field: '',
          startYear: '',
          endYear: '',
          gpa: '',
          description: '',
        },
      ],
    }));
  };

  const updateEducation = (id: string, data: Partial<ResumeData['education'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => (edu.id === id ? { ...edu, ...data } : edu)),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id),
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: generateId(),
          name: '',
          level: 'intermediate',
          category: '',
        },
      ],
    }));
  };

  const updateSkill = (id: string, data: Partial<ResumeData['skills'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => (skill.id === id ? { ...skill, ...data } : skill)),
    }));
  };

  const removeSkill = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id),
    }));
  };

  const addCertification = () => {
    setResumeData(prev => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          id: generateId(),
          name: '',
          issuer: '',
          date: '',
          url: '',
        },
      ],
    }));
  };

  const updateCertification = (id: string, data: Partial<ResumeData['certifications'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert => (cert.id === id ? { ...cert, ...data } : cert)),
    }));
  };

  const removeCertification = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id),
    }));
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: generateId(),
          name: '',
          description: '',
          url: '',
          technologies: [],
        },
      ],
    }));
  };

  const updateProject = (id: string, data: Partial<ResumeData['projects'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj => (proj.id === id ? { ...proj, ...data } : proj)),
    }));
  };

  const removeProject = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id),
    }));
  };

  const addLanguage = () => {
    setResumeData(prev => ({
      ...prev,
      languages: [
        ...prev.languages,
        {
          id: generateId(),
          name: '',
          proficiency: 'conversational',
        },
      ],
    }));
  };

  const updateLanguage = (id: string, data: Partial<ResumeData['languages'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.map(lang => (lang.id === id ? { ...lang, ...data } : lang)),
    }));
  };

  const removeLanguage = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id),
    }));
  };

  const addAward = () => {
    setResumeData(prev => ({
      ...prev,
      awards: [
        ...prev.awards,
        {
          id: generateId(),
          title: '',
          issuer: '',
          date: '',
          description: '',
        },
      ],
    }));
  };

  const updateAward = (id: string, data: Partial<ResumeData['awards'][0]>) => {
    setResumeData(prev => ({
      ...prev,
      awards: prev.awards.map(award => (award.id === id ? { ...award, ...data } : award)),
    }));
  };

  const removeAward = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      awards: prev.awards.filter(award => award.id !== id),
    }));
  };

  const toggleSection = (section: keyof ResumeData['showSections']) => {
    setResumeData(prev => ({
      ...prev,
      showSections: {
        ...prev.showSections,
        [section]: !prev.showSections[section],
      },
    }));
  };

  const resetResume = () => {
    setResumeData(emptyResumeData);
    try {
      localStorage.removeItem(STORAGE_KEY);
      toast.success('Resume reset successfully');
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  };

  const loadResume = (data: ResumeData) => {
    const validated = resumeDataSchema.safeParse(data);
    if (validated.success) {
      setResumeData(validated.data);
      toast.success('Resume loaded successfully');
    } else {
      toast.error('Invalid resume data format');
      console.error('Validation error:', validated.error);
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updatePersonalInfo,
        updateSummary,
        updateTemplate,
        updateAccentColor,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        updateSkill,
        removeSkill,
        addCertification,
        updateCertification,
        removeCertification,
        addProject,
        updateProject,
        removeProject,
        addLanguage,
        updateLanguage,
        removeLanguage,
        addAward,
        updateAward,
        removeAward,
        toggleSection,
        resetResume,
        loadResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider');
  }
  return context;
}
