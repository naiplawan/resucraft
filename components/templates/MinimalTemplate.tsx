'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { ResumeData } from '@/types/resume';

interface MinimalTemplateProps {
  data: ResumeData;
}

const colorConfig: Record<ResumeData['accentColor'], string> = {
  blue: 'text-blue-600',
  green: 'text-emerald-600',
  purple: 'text-violet-600',
  red: 'text-rose-600',
  orange: 'text-amber-600',
  teal: 'text-teal-600',
  gray: 'text-gray-600',
};

const borderConfig: Record<ResumeData['accentColor'], string> = {
  blue: 'border-blue-200',
  green: 'border-emerald-200',
  purple: 'border-violet-200',
  red: 'border-rose-200',
  orange: 'border-amber-200',
  teal: 'border-teal-200',
  gray: 'border-gray-300',
};

export function MinimalTemplate({ data }: MinimalTemplateProps) {
  const accentColor = colorConfig[data.accentColor];
  const borderColor = borderConfig[data.accentColor];
  const { personalInfo, summary, experience, education, skills, certifications, projects, languages, awards, showSections } = data;

  return (
    <div className="bg-white text-gray-800 px-12 py-10 print:px-10 print:py-8" style={{ width: '210mm', minHeight: '297mm' }}>
      {/* Header - Elegant Centered */}
      <header className="text-center mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-light text-gray-900 tracking-wide mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <p className={`text-lg ${accentColor} font-medium tracking-wide mb-4`}>
          {personalInfo.jobTitle || 'Professional Title'}
        </p>

        {/* Contact - Inline with Separators */}
        <div className="flex justify-center items-center flex-wrap gap-y-1 text-sm text-gray-500">
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-gray-700 transition-colors px-3">
              <Mail size={13} className="opacity-60" />
              <span>{personalInfo.email}</span>
            </a>
          )}
          {personalInfo.phone && (
            <>
              <span className="text-gray-300">|</span>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-gray-700 transition-colors px-3">
                <Phone size={13} className="opacity-60" />
                <span>{personalInfo.phone}</span>
              </a>
            </>
          )}
          {personalInfo.location && (
            <>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5 px-3">
                <MapPin size={13} className="opacity-60" />
                <span>{personalInfo.location}</span>
              </div>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="text-gray-300">|</span>
              <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} className="flex items-center gap-1.5 hover:text-gray-700 transition-colors px-3">
                <Linkedin size={13} className="opacity-60" />
                <span>LinkedIn</span>
              </a>
            </>
          )}
          {personalInfo.website && (
            <>
              <span className="text-gray-300">|</span>
              <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} className="flex items-center gap-1.5 hover:text-gray-700 transition-colors px-3">
                <Globe size={13} className="opacity-60" />
                <span>{personalInfo.website.replace(/^https?:\/\/(www\.)?/i, '')}</span>
              </a>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      {showSections.summary && summary && (
        <section className="mb-8 max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-center italic">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {showSections.experience && experience.length > 0 && (
        <section className="mb-8">
          <h2 className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentColor} mb-4 text-center`}>
            Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <article key={exp.id} className="max-w-3xl mx-auto">
                <div className="flex justify-between items-baseline mb-1 gap-4">
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  {exp.company}
                  {exp.location && <span className="text-gray-400"> • {exp.location}</span>}
                </p>
                {exp.description && (
                  <p className="text-gray-600 text-[0.9rem] leading-relaxed whitespace-pre-line">{exp.description}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {showSections.education && education.length > 0 && (
        <section className="mb-8">
          <h2 className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentColor} mb-4 text-center`}>
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <article key={edu.id} className="max-w-3xl mx-auto">
                <div className="flex justify-between items-baseline gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600 text-sm">
                      {edu.field} • {edu.institution}
                    </p>
                    {edu.gpa && <p className="text-xs text-gray-400 mt-1">GPA: {edu.gpa}</p>}
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                {edu.description && (
                  <p className="text-gray-600 text-sm mt-2">{edu.description}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {showSections.skills && skills.length > 0 && (
        <section className="mb-8">
          <h2 className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentColor} mb-4 text-center`}>
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <span key={skill.id} className="text-gray-600 text-sm">
                {skill.name}
                {index < skills.length - 1 && <span className="text-gray-300 ml-3">•</span>}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects & Certifications Side by Side */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Projects */}
        {showSections.projects && projects.length > 0 && (
          <section className={!showSections.certifications || certifications.length === 0 ? 'col-span-2' : ''}>
            <h2 className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentColor} mb-4 text-center`}>
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <article key={project.id}>
                  <h3 className="font-medium text-gray-900 text-sm">{project.name}</h3>
                  {project.description && (
                    <p className="text-gray-600 text-sm mt-0.5">{project.description}</p>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <p className="text-xs text-gray-400 mt-1">{project.technologies.join(' • ')}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {showSections.certifications && certifications.length > 0 && (
          <section className={!showSections.projects || projects.length === 0 ? 'col-span-2' : ''}>
            <h2 className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentColor} mb-4 text-center`}>
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <article key={cert.id} className="text-center">
                  <p className="font-medium text-gray-900 text-sm">{cert.name}</p>
                  <p className="text-xs text-gray-500">{cert.issuer} • {cert.date}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Languages */}
      {showSections.languages && languages.length > 0 && (
        <section className="mb-8">
          <h2 className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentColor} mb-4 text-center`}>
            Languages
          </h2>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-1">
            {languages.map((lang) => (
              <span key={lang.id} className="text-sm text-gray-600">
                {lang.name}
                {lang.proficiency && <span className="text-gray-400 ml-1">({lang.proficiency})</span>}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Awards */}
      {showSections.awards && awards.length > 0 && (
        <section>
          <h2 className={`text-xs font-semibold uppercase tracking-[0.2em] ${accentColor} mb-4 text-center`}>
            Awards
          </h2>
          <div className="space-y-2 max-w-3xl mx-auto">
            {awards.map((award) => (
              <article key={award.id} className="flex justify-between items-baseline gap-4">
                <div>
                  <span className="font-medium text-gray-900 text-sm">{award.title}</span>
                  <span className="text-gray-400 text-sm ml-2">— {award.issuer}</span>
                </div>
                <span className="text-xs text-gray-400">{award.date}</span>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
