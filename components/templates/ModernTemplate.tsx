'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';
import { ResumeData } from '@/types/resume';

interface ModernTemplateProps {
  data: ResumeData;
}

const colorClasses: Record<ResumeData['accentColor'], { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600' },
  green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-600' },
  red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600' },
  teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-600' },
  gray: { bg: 'bg-gray-700', text: 'text-gray-700', border: 'border-gray-700' },
};

export function ModernTemplate({ data }: ModernTemplateProps) {
  const colors = colorClasses[data.accentColor];
  const { personalInfo, summary, experience, education, skills, certifications, projects, languages, awards, showSections } = data;

  return (
    <div className="flex min-h-[297mm] bg-white text-gray-900" style={{ width: '210mm' }}>
      {/* Sidebar */}
      <div className={`w-1/3 ${colors.bg} text-white p-6`}>
        {/* Photo */}
        {showSections.photo && personalInfo.photo && (
          <div className="mb-6">
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-32 h-32 rounded-full object-cover border-4 border-white/30 mx-auto"
            />
          </div>
        )}

        {/* Contact */}
        <div className="mb-6 space-y-2 text-sm">
          {personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="break-all">{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <span className="break-all">{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span className="break-all">{personalInfo.website}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {showSections.skills && skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3 border-b border-white/30 pb-2">Skills</h3>
            <div className="space-y-2">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <p className="font-medium">{skill.name}</p>
                  {skill.level && (
                    <div className="w-full bg-white/20 h-1.5 rounded-full mt-1">
                      <div
                        className="bg-white h-1.5 rounded-full"
                        style={{
                          width: skill.level === 'expert' ? '100%' :
                                 skill.level === 'advanced' ? '75%' :
                                 skill.level === 'intermediate' ? '50%' : '25%'
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {showSections.languages && languages.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3 border-b border-white/30 pb-2">Languages</h3>
            <div className="space-y-1">
              {languages.map((lang) => (
                <div key={lang.id} className="text-sm">
                  <span className="font-medium">{lang.name}</span>
                  {lang.proficiency && <span className="text-white/70 ml-2">({lang.proficiency})</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{personalInfo.fullName}</h1>
          <p className={`text-xl ${colors.text} font-medium`}>{personalInfo.jobTitle}</p>
        </div>

        {/* Summary */}
        {showSections.summary && summary && (
          <div className="mb-6">
            <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3`}>Professional Summary</h2>
            <p className="text-gray-700">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {showSections.experience && experience.length > 0 && (
          <div className="mb-6">
            <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3`}>Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.position}</h3>
                      <p className={`${colors.text} font-medium`}>{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>{exp.startDate}</p>
                      <p>{exp.current ? 'Present' : exp.endDate}</p>
                    </div>
                  </div>
                  {exp.location && <p className="text-sm text-gray-600 mt-1">{exp.location}</p>}
                  {exp.description && <p className="text-gray-700 mt-2 whitespace-pre-line">{exp.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {showSections.education && education.length > 0 && (
          <div className="mb-6">
            <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3`}>Education</h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-700">{edu.field}</p>
                      <p className={`${colors.text} font-medium`}>{edu.institution}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>{edu.startYear}</p>
                      <p>{edu.endYear}</p>
                    </div>
                  </div>
                  {edu.gpa && <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>}
                  {edu.description && <p className="text-gray-700 mt-2">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {showSections.certifications && certifications.length > 0 && (
          <div className="mb-6">
            <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3`}>Certifications</h2>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert.id}>
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-600">{cert.issuer} - {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {showSections.projects && projects.length > 0 && (
          <div className="mb-6">
            <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3`}>Projects</h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id}>
                  <h3 className="font-bold">{project.name}</h3>
                  {project.description && <p className="text-gray-700 text-sm mt-1">{project.description}</p>}
                  {project.technologies && project.technologies.length > 0 && (
                    <p className="text-sm text-gray-600 mt-1">{project.technologies.join(', ')}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Awards */}
        {showSections.awards && awards.length > 0 && (
          <div>
            <h2 className={`text-lg font-bold ${colors.border} border-b-2 pb-1 mb-3`}>Awards</h2>
            <div className="space-y-2">
              {awards.map((award) => (
                <div key={award.id}>
                  <p className="font-medium">{award.title}</p>
                  <p className="text-sm text-gray-600">{award.issuer} - {award.date}</p>
                  {award.description && <p className="text-sm text-gray-700 mt-1">{award.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
