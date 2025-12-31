'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { ResumeData } from '@/types/resume';

interface ClassicTemplateProps {
  data: ResumeData;
}

const colorConfig: Record<ResumeData['accentColor'], {
  text: string;
  border: string;
  bg: string;
  headerBg: string;
}> = {
  blue: { text: 'text-blue-700', border: 'border-blue-700', bg: 'bg-blue-700', headerBg: 'bg-blue-50' },
  green: { text: 'text-emerald-700', border: 'border-emerald-700', bg: 'bg-emerald-700', headerBg: 'bg-emerald-50' },
  purple: { text: 'text-violet-700', border: 'border-violet-700', bg: 'bg-violet-700', headerBg: 'bg-violet-50' },
  red: { text: 'text-rose-700', border: 'border-rose-700', bg: 'bg-rose-700', headerBg: 'bg-rose-50' },
  orange: { text: 'text-amber-700', border: 'border-amber-700', bg: 'bg-amber-700', headerBg: 'bg-amber-50' },
  teal: { text: 'text-teal-700', border: 'border-teal-700', bg: 'bg-teal-700', headerBg: 'bg-teal-50' },
  gray: { text: 'text-gray-800', border: 'border-gray-800', bg: 'bg-gray-800', headerBg: 'bg-gray-100' },
};

export function ClassicTemplate({ data }: ClassicTemplateProps) {
  const colors = colorConfig[data.accentColor];
  const { personalInfo, summary, experience, education, skills, certifications, projects, languages, awards, showSections } = data;

  return (
    <div className="bg-white text-gray-800 p-10 print:p-8" style={{ width: '210mm', minHeight: '297mm' }}>
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-start gap-5">
          {showSections.photo && personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-20 h-20 rounded object-cover border border-gray-200"
            />
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">
              {personalInfo.fullName || 'Your Name'}
            </h1>
            <p className={`text-xl ${colors.text} font-semibold mb-3`}>
              {personalInfo.jobTitle || 'Professional Title'}
            </p>

            {/* Contact Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-600">
              {personalInfo.email && (
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                  <Mail size={14} className="text-gray-400" />
                  <span>{personalInfo.email}</span>
                </a>
              )}
              {personalInfo.phone && (
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                  <Phone size={14} className="text-gray-400" />
                  <span>{personalInfo.phone}</span>
                </a>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-gray-400" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                  <Linkedin size={14} className="text-gray-400" />
                  <span>{personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//i, 'linkedin.com/in/')}</span>
                </a>
              )}
              {personalInfo.website && (
                <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} className="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
                  <Globe size={14} className="text-gray-400" />
                  <span>{personalInfo.website.replace(/^https?:\/\/(www\.)?/i, '')}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className={`h-1 ${colors.bg} mb-6`}></div>

      {/* Summary */}
      {showSections.summary && summary && (
        <section className="mb-6">
          <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-2 pb-1 border-b ${colors.border}`}>
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {showSections.experience && experience.length > 0 && (
        <section className="mb-6">
          <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-3 pb-1 border-b ${colors.border}`}>
            Professional Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <article key={exp.id}>
                <div className="flex justify-between items-baseline gap-4 mb-1">
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">
                  {exp.company}
                  {exp.location && <span className="text-gray-500 font-normal"> • {exp.location}</span>}
                </p>
                {exp.description && (
                  <div className="mt-2 text-gray-600 text-[0.9rem] leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {showSections.education && education.length > 0 && (
        <section className="mb-6">
          <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-3 pb-1 border-b ${colors.border}`}>
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <article key={edu.id}>
                <div className="flex justify-between items-baseline gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                {edu.gpa && <p className="text-sm text-gray-500 mt-1">GPA: {edu.gpa}</p>}
                {edu.description && <p className="text-gray-600 text-sm mt-1.5">{edu.description}</p>}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Two Column Layout for Skills, Certifications, Languages */}
      <div className="grid grid-cols-2 gap-6">
        {/* Skills */}
        {showSections.skills && skills.length > 0 && (
          <section className={certifications.length === 0 && languages.length === 0 ? 'col-span-2' : ''}>
            <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-2 pb-1 border-b ${colors.border}`}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className={`px-3 py-1 ${colors.headerBg} ${colors.text} text-sm rounded-md font-medium`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {showSections.certifications && certifications.length > 0 && (
          <section>
            <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-2 pb-1 border-b ${colors.border}`}>
              Certifications
            </h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id}>
                  <p className="font-medium text-gray-900">{cert.name}</p>
                  <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {showSections.languages && languages.length > 0 && (
          <section>
            <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-2 pb-1 border-b ${colors.border}`}>
              Languages
            </h2>
            <div className="space-y-1">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between text-sm">
                  <span className="font-medium text-gray-800">{lang.name}</span>
                  {lang.proficiency && (
                    <span className="text-gray-500 capitalize">{lang.proficiency}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Projects */}
      {showSections.projects && projects.length > 0 && (
        <section className="mt-6">
          <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-3 pb-1 border-b ${colors.border}`}>
            Projects
          </h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <article key={project.id}>
                <h3 className="font-bold text-gray-900">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-600 text-sm mt-1">{project.description}</p>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="font-medium">Technologies:</span> {project.technologies.join(', ')}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Awards */}
      {showSections.awards && awards.length > 0 && (
        <section className="mt-6">
          <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-3 pb-1 border-b ${colors.border}`}>
            Awards & Achievements
          </h2>
          <div className="space-y-2">
            {awards.map((award) => (
              <article key={award.id} className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-medium text-gray-900">{award.title}</h3>
                  <p className="text-sm text-gray-500">{award.issuer}</p>
                  {award.description && (
                    <p className="text-sm text-gray-600 mt-1">{award.description}</p>
                  )}
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">{award.date}</span>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
