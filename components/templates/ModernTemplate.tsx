'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { ResumeData } from '@/types/resume';

interface ModernTemplateProps {
  data: ResumeData;
}

const colorConfig: Record<ResumeData['accentColor'], {
  sidebar: string;
  sidebarDark: string;
  text: string;
  border: string;
  light: string;
}> = {
  blue: {
    sidebar: 'bg-slate-800',
    sidebarDark: 'bg-slate-900',
    text: 'text-blue-600',
    border: 'border-blue-600',
    light: 'bg-blue-50'
  },
  green: {
    sidebar: 'bg-emerald-800',
    sidebarDark: 'bg-emerald-900',
    text: 'text-emerald-600',
    border: 'border-emerald-600',
    light: 'bg-emerald-50'
  },
  purple: {
    sidebar: 'bg-violet-800',
    sidebarDark: 'bg-violet-900',
    text: 'text-violet-600',
    border: 'border-violet-600',
    light: 'bg-violet-50'
  },
  red: {
    sidebar: 'bg-rose-800',
    sidebarDark: 'bg-rose-900',
    text: 'text-rose-600',
    border: 'border-rose-600',
    light: 'bg-rose-50'
  },
  orange: {
    sidebar: 'bg-amber-800',
    sidebarDark: 'bg-amber-900',
    text: 'text-amber-600',
    border: 'border-amber-600',
    light: 'bg-amber-50'
  },
  teal: {
    sidebar: 'bg-teal-800',
    sidebarDark: 'bg-teal-900',
    text: 'text-teal-600',
    border: 'border-teal-600',
    light: 'bg-teal-50'
  },
  gray: {
    sidebar: 'bg-gray-800',
    sidebarDark: 'bg-gray-900',
    text: 'text-gray-700',
    border: 'border-gray-700',
    light: 'bg-gray-100'
  },
};

export function ModernTemplate({ data }: ModernTemplateProps) {
  const colors = colorConfig[data.accentColor];
  const { personalInfo, summary, experience, education, skills, certifications, projects, languages, awards, showSections } = data;

  return (
    <div className="flex min-h-[297mm] bg-white text-gray-800 print:text-[11pt]" style={{ width: '210mm' }}>
      {/* Sidebar - Narrower for better content space */}
      <aside className={`w-[72mm] ${colors.sidebar} text-white p-6 print:p-5 flex flex-col`}>
        {/* Photo */}
        {showSections.photo && personalInfo.photo && (
          <div className="mb-6 flex justify-center">
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-28 h-28 rounded-full object-cover border-4 border-white/20 shadow-lg"
            />
          </div>
        )}

        {/* Contact Section */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 pb-2 border-b border-white/20">
            Contact
          </h3>
          <div className="space-y-2.5 text-sm">
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-2.5 hover:text-white/80 transition-colors">
                <Mail size={14} className="mt-0.5 flex-shrink-0 opacity-70" />
                <span className="break-all leading-tight">{personalInfo.email}</span>
              </a>
            )}
            {personalInfo.phone && (
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2.5 hover:text-white/80 transition-colors">
                <Phone size={14} className="flex-shrink-0 opacity-70" />
                <span>{personalInfo.phone}</span>
              </a>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="flex-shrink-0 opacity-70" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} className="flex items-start gap-2.5 hover:text-white/80 transition-colors">
                <Linkedin size={14} className="mt-0.5 flex-shrink-0 opacity-70" />
                <span className="break-all leading-tight">{personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//i, '')}</span>
              </a>
            )}
            {personalInfo.website && (
              <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} className="flex items-start gap-2.5 hover:text-white/80 transition-colors">
                <Globe size={14} className="mt-0.5 flex-shrink-0 opacity-70" />
                <span className="break-all leading-tight">{personalInfo.website.replace(/^https?:\/\/(www\.)?/i, '')}</span>
              </a>
            )}
          </div>
        </div>

        {/* Skills */}
        {showSections.skills && skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 pb-2 border-b border-white/20">
              Skills
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 bg-white/10 rounded text-xs font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {showSections.languages && languages.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 pb-2 border-b border-white/20">
              Languages
            </h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between items-center text-sm">
                  <span className="font-medium">{lang.name}</span>
                  {lang.proficiency && (
                    <span className="text-xs text-white/60 capitalize">{lang.proficiency}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications in sidebar */}
        {showSections.certifications && certifications.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 pb-2 border-b border-white/20">
              Certifications
            </h3>
            <div className="space-y-2.5">
              {certifications.map((cert) => (
                <div key={cert.id} className="text-sm">
                  <p className="font-medium leading-tight">{cert.name}</p>
                  <p className="text-xs text-white/60 mt-0.5">{cert.issuer} &bull; {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards in sidebar */}
        {showSections.awards && awards.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 pb-2 border-b border-white/20">
              Awards
            </h3>
            <div className="space-y-2.5">
              {awards.map((award) => (
                <div key={award.id} className="text-sm">
                  <p className="font-medium leading-tight">{award.title}</p>
                  <p className="text-xs text-white/60 mt-0.5">{award.issuer} &bull; {award.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-7 print:p-6">
        {/* Header */}
        <header className="mb-6 pb-4 border-b-2 border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <p className={`text-lg ${colors.text} font-semibold`}>
            {personalInfo.jobTitle || 'Professional Title'}
          </p>
        </header>

        {/* Professional Summary */}
        {showSections.summary && summary && (
          <section className="mb-6">
            <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-2 flex items-center gap-2`}>
              <span className={`w-8 h-0.5 ${colors.border.replace('border', 'bg')}`}></span>
              Professional Summary
            </h2>
            <p className="text-gray-600 leading-relaxed text-[0.9rem]">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {showSections.experience && experience.length > 0 && (
          <section className="mb-6">
            <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-3 flex items-center gap-2`}>
              <Briefcase size={16} />
              Work Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <article key={exp.id} className={`${index > 0 ? 'pt-4 border-t border-gray-100' : ''}`}>
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-base">{exp.position}</h3>
                      <p className={`${colors.text} font-medium text-[0.9rem]`}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm whitespace-nowrap">
                      <Calendar size={13} />
                      <span>{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                  </div>
                  {exp.location && (
                    <p className="text-sm text-gray-500 mb-1.5">{exp.location}</p>
                  )}
                  {exp.description && (
                    <p className="text-gray-600 text-[0.85rem] leading-relaxed whitespace-pre-line">{exp.description}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {showSections.education && education.length > 0 && (
          <section className="mb-6">
            <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-3 flex items-center gap-2`}>
              <GraduationCap size={16} />
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <article key={edu.id} className={`${index > 0 ? 'pt-3 border-t border-gray-100' : ''}`}>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-700">{edu.field}</p>
                      <p className={`${colors.text} text-sm font-medium`}>{edu.institution}</p>
                    </div>
                    <div className="text-sm text-gray-500 whitespace-nowrap">
                      {edu.startYear} — {edu.endYear}
                    </div>
                  </div>
                  {edu.gpa && <p className="text-sm text-gray-500 mt-1">GPA: {edu.gpa}</p>}
                  {edu.description && <p className="text-gray-600 text-sm mt-1.5">{edu.description}</p>}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {showSections.projects && projects.length > 0 && (
          <section>
            <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-3 flex items-center gap-2`}>
              <span className={`w-8 h-0.5 ${colors.border.replace('border', 'bg')}`}></span>
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
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={`px-2 py-0.5 ${colors.light} ${colors.text} text-xs rounded font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
