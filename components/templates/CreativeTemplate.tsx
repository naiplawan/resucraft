'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Briefcase, GraduationCap, Award, Code, Languages } from 'lucide-react';
import { ResumeData } from '@/types/resume';

interface CreativeTemplateProps {
  data: ResumeData;
}

const colorConfig: Record<ResumeData['accentColor'], {
  primary: string;
  primaryBg: string;
  secondary: string;
  text: string;
  light: string;
  gradient: string;
}> = {
  blue: {
    primary: 'bg-blue-600',
    primaryBg: 'bg-blue-600',
    secondary: 'bg-blue-100',
    text: 'text-blue-600',
    light: 'bg-blue-50',
    gradient: 'from-blue-600 to-blue-400'
  },
  green: {
    primary: 'bg-emerald-600',
    primaryBg: 'bg-emerald-600',
    secondary: 'bg-emerald-100',
    text: 'text-emerald-600',
    light: 'bg-emerald-50',
    gradient: 'from-emerald-600 to-emerald-400'
  },
  purple: {
    primary: 'bg-violet-600',
    primaryBg: 'bg-violet-600',
    secondary: 'bg-violet-100',
    text: 'text-violet-600',
    light: 'bg-violet-50',
    gradient: 'from-violet-600 to-violet-400'
  },
  red: {
    primary: 'bg-rose-600',
    primaryBg: 'bg-rose-600',
    secondary: 'bg-rose-100',
    text: 'text-rose-600',
    light: 'bg-rose-50',
    gradient: 'from-rose-600 to-rose-400'
  },
  orange: {
    primary: 'bg-amber-600',
    primaryBg: 'bg-amber-600',
    secondary: 'bg-amber-100',
    text: 'text-amber-600',
    light: 'bg-amber-50',
    gradient: 'from-amber-600 to-amber-400'
  },
  teal: {
    primary: 'bg-teal-600',
    primaryBg: 'bg-teal-600',
    secondary: 'bg-teal-100',
    text: 'text-teal-600',
    light: 'bg-teal-50',
    gradient: 'from-teal-600 to-teal-400'
  },
  gray: {
    primary: 'bg-gray-700',
    primaryBg: 'bg-gray-700',
    secondary: 'bg-gray-200',
    text: 'text-gray-700',
    light: 'bg-gray-100',
    gradient: 'from-gray-700 to-gray-500'
  },
};

export function CreativeTemplate({ data }: CreativeTemplateProps) {
  const colors = colorConfig[data.accentColor];
  const { personalInfo, summary, experience, education, skills, certifications, projects, languages, awards, showSections } = data;

  return (
    <div className="bg-white text-gray-800" style={{ width: '210mm', minHeight: '297mm' }}>
      {/* Header with Gradient Accent */}
      <header className={`bg-gradient-to-r ${colors.gradient} text-white px-8 py-8`}>
        <div className="flex items-center gap-6">
          {showSections.photo && personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-lg"
            />
          )}
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight mb-1">
              {personalInfo.fullName || 'Your Name'}
            </h1>
            <p className="text-xl opacity-90 font-medium mb-4">
              {personalInfo.jobTitle || 'Professional Title'}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              {personalInfo.email && (
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                  <Mail size={14} />
                  <span>{personalInfo.email}</span>
                </a>
              )}
              {personalInfo.phone && (
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                  <Phone size={14} />
                  <span>{personalInfo.phone}</span>
                </a>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1.5 opacity-90">
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.website && (
                <a href={personalInfo.website.startsWith('http') ? personalInfo.website : `https://${personalInfo.website}`} className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                  <Globe size={14} />
                  <span>{personalInfo.website.replace(/^https?:\/\/(www\.)?/i, '')}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-8">
        {/* Summary */}
        {showSections.summary && summary && (
          <section className="mb-6">
            <p className="text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-4 italic">
              {summary}
            </p>
          </section>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Main Column (2/3) */}
          <div className="col-span-2 space-y-6">
            {/* Experience */}
            {showSections.experience && experience.length > 0 && (
              <section>
                <h2 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${colors.text} mb-4`}>
                  <Briefcase size={16} />
                  Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <article key={exp.id} className={`relative pl-4 ${index > 0 ? 'pt-4 border-t border-gray-100' : ''}`}>
                      <div className={`absolute left-0 top-0 w-1 h-full ${colors.secondary} rounded`}></div>
                      <div className="flex justify-between items-start gap-4 mb-1">
                        <div>
                          <h3 className="font-bold text-gray-900">{exp.position}</h3>
                          <p className={`${colors.text} font-medium text-sm`}>{exp.company}</p>
                        </div>
                        <span className={`text-xs ${colors.light} ${colors.text} px-2 py-1 rounded-full whitespace-nowrap`}>
                          {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      {exp.location && (
                        <p className="text-xs text-gray-500 mb-1.5">{exp.location}</p>
                      )}
                      {exp.description && (
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{exp.description}</p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {showSections.education && education.length > 0 && (
              <section>
                <h2 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${colors.text} mb-4`}>
                  <GraduationCap size={16} />
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <article key={edu.id} className={`${colors.light} rounded-lg p-4`}>
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-700 text-sm">{edu.field}</p>
                          <p className={`${colors.text} text-sm font-medium`}>{edu.institution}</p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                          {edu.startYear} — {edu.endYear}
                        </span>
                      </div>
                      {edu.gpa && <p className="text-xs text-gray-500 mt-2">GPA: {edu.gpa}</p>}
                      {edu.description && <p className="text-gray-600 text-sm mt-2">{edu.description}</p>}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {showSections.projects && projects.length > 0 && (
              <section>
                <h2 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${colors.text} mb-4`}>
                  <Code size={16} />
                  Projects
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {projects.map((project) => (
                    <article key={project.id} className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{project.name}</h3>
                      {project.description && (
                        <p className="text-gray-600 text-xs leading-relaxed mb-2">{project.description}</p>
                      )}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className={`text-xs ${colors.secondary} ${colors.text} px-1.5 py-0.5 rounded`}>
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
          </div>

          {/* Sidebar Column (1/3) */}
          <div className="col-span-1 space-y-6">
            {/* Skills */}
            {showSections.skills && skills.length > 0 && (
              <section className={`${colors.light} rounded-lg p-4`}>
                <h2 className={`text-sm font-bold uppercase tracking-wider ${colors.text} mb-3`}>
                  Skills
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      className={`px-2 py-1 ${colors.secondary} ${colors.text} text-xs rounded-md font-medium`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {showSections.languages && languages.length > 0 && (
              <section className="border border-gray-200 rounded-lg p-4">
                <h2 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${colors.text} mb-3`}>
                  <Languages size={14} />
                  Languages
                </h2>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div key={lang.id} className="flex justify-between items-center text-sm">
                      <span className="font-medium text-gray-800">{lang.name}</span>
                      {lang.proficiency && (
                        <span className="text-xs text-gray-500 capitalize">{lang.proficiency}</span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {showSections.certifications && certifications.length > 0 && (
              <section className="border border-gray-200 rounded-lg p-4">
                <h2 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${colors.text} mb-3`}>
                  <Award size={14} />
                  Certifications
                </h2>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <p className="font-medium text-gray-900 text-sm">{cert.name}</p>
                      <p className="text-xs text-gray-500">{cert.issuer} • {cert.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Awards */}
            {showSections.awards && awards.length > 0 && (
              <section className={`${colors.light} rounded-lg p-4`}>
                <h2 className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${colors.text} mb-3`}>
                  <Award size={14} />
                  Awards
                </h2>
                <div className="space-y-3">
                  {awards.map((award) => (
                    <div key={award.id}>
                      <p className="font-medium text-gray-900 text-sm">{award.title}</p>
                      <p className="text-xs text-gray-500">{award.issuer} • {award.date}</p>
                      {award.description && (
                        <p className="text-xs text-gray-600 mt-1">{award.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
