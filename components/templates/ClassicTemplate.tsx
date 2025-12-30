'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { ResumeData } from '@/types/resume';

interface ClassicTemplateProps {
  data: ResumeData;
}

const colorClasses: Record<ResumeData['accentColor'], { text: string; border: string }> = {
  blue: { text: 'text-blue-700', border: 'border-blue-700' },
  green: { text: 'text-green-700', border: 'border-green-700' },
  purple: { text: 'text-purple-700', border: 'border-purple-700' },
  red: { text: 'text-red-700', border: 'border-red-700' },
  orange: { text: 'text-orange-700', border: 'border-orange-700' },
  teal: { text: 'text-teal-700', border: 'border-teal-700' },
  gray: { text: 'text-gray-800', border: 'border-gray-800' },
};

export function ClassicTemplate({ data }: ClassicTemplateProps) {
  const colors = colorClasses[data.accentColor];
  const { personalInfo, summary, experience, education, skills, certifications, projects, languages, awards, showSections } = data;

  return (
    <div className="bg-white text-gray-900 p-8" style={{ width: '210mm', minHeight: '297mm' }}>
      {/* Header with Photo */}
      <div className="flex items-start gap-6 mb-6 border-b-2 border-gray-300 pb-6">
        {showSections.photo && personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt={personalInfo.fullName}
            className="w-24 h-24 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{personalInfo.fullName}</h1>
          <p className={`text-xl ${colors.text} font-semibold mb-3`}>{personalInfo.jobTitle}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            {personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin size={14} />
                <span>{personalInfo.linkedin}</span>
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-1">
                <Globe size={14} />
                <span>{personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {showSections.summary && summary && (
        <div className="mb-5">
          <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-2 uppercase tracking-wide`}>Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {showSections.experience && experience.length > 0 && (
        <div className="mb-5">
          <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3 uppercase tracking-wide`}>Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{exp.position}</h3>
                    <p className="font-semibold text-gray-800">{exp.company}{exp.location && ` - ${exp.location}`}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                {exp.description && <p className="text-gray-700 mt-2 whitespace-pre-line">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {showSections.education && education.length > 0 && (
        <div className="mb-5">
          <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3 uppercase tracking-wide`}>Education</h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id} className="flex justify-between">
                <div>
                  <p className="font-bold">{edu.degree} in {edu.field}</p>
                  <p className="text-gray-800">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                  {edu.description && <p className="text-sm text-gray-700 mt-1">{edu.description}</p>}
                </div>
                <div className="text-sm text-gray-600 text-right">
                  <p>{edu.startYear} - {edu.endYear}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {showSections.skills && skills.length > 0 && (
        <div className="mb-5">
          <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3 uppercase tracking-wide`}>Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
              >
                {skill.name}
                {skill.level && <span className="text-gray-500 ml-1">({skill.level})</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {showSections.certifications && certifications.length > 0 && (
        <div className="mb-5">
          <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3 uppercase tracking-wide`}>Certifications</h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between">
                <div>
                  <p className="font-semibold">{cert.name}</p>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
                <div className="text-sm text-gray-600">{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {showSections.projects && projects.length > 0 && (
        <div className="mb-5">
          <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3 uppercase tracking-wide`}>Projects</h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <p className="font-semibold">{project.name}</p>
                {project.description && <p className="text-sm text-gray-700 mt-1">{project.description}</p>}
                {project.technologies && project.technologies.length > 0 && (
                  <p className="text-sm text-gray-600 mt-1">Technologies: {project.technologies.join(', ')}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {showSections.languages && languages.length > 0 && (
        <div className="mb-5">
          <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3 uppercase tracking-wide`}>Languages</h2>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span key={lang.id} className="text-sm">
                <span className="font-medium">{lang.name}</span>
                {lang.proficiency && <span className="text-gray-600"> - {lang.proficiency}</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {showSections.awards && awards.length > 0 && (
        <div>
          <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3 uppercase tracking-wide`}>Awards</h2>
          <div className="space-y-2">
            {awards.map((award) => (
              <div key={award.id} className="flex justify-between">
                <div>
                  <p className="font-semibold">{award.title}</p>
                  {award.description && <p className="text-sm text-gray-600">{award.description}</p>}
                </div>
                <div className="text-sm text-gray-600">
                  <p>{award.issuer}</p>
                  <p>{award.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
