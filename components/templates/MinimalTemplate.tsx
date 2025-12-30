'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { ResumeData } from '@/types/resume';

interface MinimalTemplateProps {
  data: ResumeData;
}

const colorClasses: Record<ResumeData['accentColor'], string> = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  red: 'text-red-600',
  orange: 'text-orange-600',
  teal: 'text-teal-600',
  gray: 'text-gray-700',
};

export function MinimalTemplate({ data }: MinimalTemplateProps) {
  const accentColor = colorClasses[data.accentColor];
  const { personalInfo, summary, experience, education, skills, certifications, projects, languages, awards, showSections } = data;

  return (
    <div className="bg-white text-gray-900 p-10" style={{ width: '210mm', minHeight: '297mm' }}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-wide">{personalInfo.fullName}</h1>
        <p className={`text-xl ${accentColor} font-light mb-4`}>{personalInfo.jobTitle}</p>

        {/* Contact Info */}
        <div className="flex justify-center items-center gap-4 text-sm text-gray-600 flex-wrap">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>{personalInfo.phone}</span>
              </div>
            </>
          )}
          {personalInfo.location && (
            <>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{personalInfo.location}</span>
              </div>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="text-gray-300">|</span>
              <span>{personalInfo.linkedin}</span>
            </>
          )}
          {personalInfo.website && (
            <>
              <span className="text-gray-300">|</span>
              <span>{personalInfo.website}</span>
            </>
          )}
        </div>
      </div>

      {/* Summary */}
      {showSections.summary && summary && (
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {showSections.experience && experience.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-sm font-semibold ${accentColor} uppercase tracking-widest mb-4 text-center`}>Experience</h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div key={exp.id} className="max-w-3xl mx-auto">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-sm text-gray-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{exp.company}{exp.location && ` • ${exp.location}`}</p>
                {exp.description && <p className="text-gray-700 leading-relaxed whitespace-pre-line">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {showSections.education && education.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-sm font-semibold ${accentColor} uppercase tracking-widest mb-4 text-center`}>Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="max-w-3xl mx-auto">
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="font-medium text-gray-900">{edu.degree}</p>
                    <p className="text-gray-600 text-sm">{edu.field} • {edu.institution}</p>
                    {edu.gpa && <p className="text-xs text-gray-500 mt-1">GPA: {edu.gpa}</p>}
                    {edu.description && <p className="text-sm text-gray-700 mt-2">{edu.description}</p>}
                  </div>
                  <span className="text-sm text-gray-500">{edu.startYear} - {edu.endYear}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {showSections.skills && skills.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-sm font-semibold ${accentColor} uppercase tracking-widest mb-4 text-center`}>Skills</h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <span key={skill.id} className="text-gray-700">
                {skill.name}
                {skill.level && <span className="text-gray-400 text-xs ml-1">({skill.level})</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {showSections.certifications && certifications.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-sm font-semibold ${accentColor} uppercase tracking-widest mb-4 text-center`}>Certifications</h2>
          <div className="max-w-3xl mx-auto space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-center text-sm">
                <span className="text-gray-800">{cert.name}</span>
                <span className="text-gray-500">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {showSections.projects && projects.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-sm font-semibold ${accentColor} uppercase tracking-widest mb-4 text-center`}>Projects</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <p className="font-medium text-gray-900">{project.name}</p>
                {project.description && <p className="text-sm text-gray-600 mt-1">{project.description}</p>}
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-xs text-gray-500 mt-1">{project.technologies.join(' • ')}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {showSections.languages && languages.length > 0 && (
        <div className="mb-6">
          <h2 className={`text-sm font-semibold ${accentColor} uppercase tracking-widest mb-4 text-center`}>Languages</h2>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-1 max-w-3xl mx-auto">
            {languages.map((lang) => (
              <span key={lang.id} className="text-sm text-gray-700">
                {lang.name}
                {lang.proficiency && <span className="text-gray-400"> - {lang.proficiency}</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {showSections.awards && awards.length > 0 && (
        <div>
          <h2 className={`text-sm font-semibold ${accentColor} uppercase tracking-widest mb-4 text-center`}>Awards</h2>
          <div className="max-w-3xl mx-auto space-y-2">
            {awards.map((award) => (
              <div key={award.id} className="flex justify-between items-center text-sm">
                <div>
                  <span className="text-gray-800">{award.title}</span>
                  {award.description && <span className="text-gray-500 ml-2">• {award.description}</span>}
                </div>
                <span className="text-gray-500">{award.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
