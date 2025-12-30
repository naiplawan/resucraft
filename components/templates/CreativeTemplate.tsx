'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Award } from 'lucide-react';
import { ResumeData } from '@/types/resume';

interface CreativeTemplateProps {
  data: ResumeData;
}

const colorClasses: Record<ResumeData['accentColor'], { primary: string; secondary: string; bg: string; text: string }> = {
  blue: { primary: 'bg-blue-500', secondary: 'bg-blue-400', bg: 'bg-blue-50', text: 'text-blue-600' },
  green: { primary: 'bg-green-500', secondary: 'bg-green-400', bg: 'bg-green-50', text: 'text-green-600' },
  purple: { primary: 'bg-purple-500', secondary: 'bg-purple-400', bg: 'bg-purple-50', text: 'text-purple-600' },
  red: { primary: 'bg-red-500', secondary: 'bg-red-400', bg: 'bg-red-50', text: 'text-red-600' },
  orange: { primary: 'bg-orange-500', secondary: 'bg-orange-400', bg: 'bg-orange-50', text: 'text-orange-600' },
  teal: { primary: 'bg-teal-500', secondary: 'bg-teal-400', bg: 'bg-teal-50', text: 'text-teal-600' },
  gray: { primary: 'bg-gray-600', secondary: 'bg-gray-500', bg: 'bg-gray-50', text: 'text-gray-700' },
};

export function CreativeTemplate({ data }: CreativeTemplateProps) {
  const colors = colorClasses[data.accentColor];
  const { personalInfo, summary, experience, education, skills, certifications, projects, languages, awards, showSections } = data;

  const getSkillWidth = (level?: string) => {
    if (!level) return 60;
    switch (level) {
      case 'expert': return 95;
      case 'advanced': return 80;
      case 'intermediate': return 60;
      case 'beginner': return 40;
      default: return 60;
    }
  };

  return (
    <div className="bg-white text-gray-900" style={{ width: '210mm', minHeight: '297mm' }}>
      {/* Header Section */}
      <div className={`${colors.primary} text-white p-8 rounded-b-3xl`}>
        <div className="flex items-center gap-6">
          {showSections.photo && personalInfo.photo && (
            <div className="relative">
              <img
                src={personalInfo.photo}
                alt={personalInfo.fullName}
                className="w-28 h-28 rounded-2xl object-cover border-4 border-white/30"
              />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-1">{personalInfo.fullName}</h1>
            <p className="text-xl opacity-90 mb-3">{personalInfo.jobTitle}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              {personalInfo.email && (
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Mail size={14} />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <Phone size={14} />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mt-4 ml-36">
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1 text-sm opacity-80">
              <Linkedin size={14} />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1 text-sm opacity-80">
              <Globe size={14} />
              <span>{personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Summary */}
        {showSections.summary && summary && (
          <div className={`mb-5 p-4 ${colors.bg} rounded-xl`}>
            <h2 className={`font-bold ${colors.text} mb-2 uppercase text-sm tracking-wide`}>About Me</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-5">
          {/* Left Column */}
          <div className="col-span-1 space-y-5">
            {/* Skills with Visual Bars */}
            {showSections.skills && skills.length > 0 && (
              <div>
                <h2 className={`font-bold ${colors.text} mb-3 uppercase text-sm tracking-wide flex items-center gap-2`}>
                  <div className={`w-2 h-2 ${colors.secondary} rounded-full`} />
                  Skills
                </h2>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        {skill.level && <span className="text-gray-500">{skill.level}</span>}
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                          className={`${colors.secondary} h-full rounded-full transition-all`}
                          style={{ width: `${getSkillWidth(skill.level)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {showSections.languages && languages.length > 0 && (
              <div>
                <h2 className={`font-bold ${colors.text} mb-3 uppercase text-sm tracking-wide flex items-center gap-2`}>
                  <div className={`w-2 h-2 ${colors.secondary} rounded-full`} />
                  Languages
                </h2>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div key={lang.id} className={`p-2 ${colors.bg} rounded-lg`}>
                      <p className="font-medium text-sm text-gray-800">{lang.name}</p>
                      {lang.proficiency && (
                        <p className="text-xs text-gray-500">{lang.proficiency}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Awards */}
            {showSections.awards && awards.length > 0 && (
              <div>
                <h2 className={`font-bold ${colors.text} mb-3 uppercase text-sm tracking-wide flex items-center gap-2`}>
                  <Award size={16} className={colors.text} />
                  Awards
                </h2>
                <div className="space-y-2">
                  {awards.map((award) => (
                    <div key={award.id} className={`p-2 ${colors.bg} rounded-lg`}>
                      <p className="font-medium text-sm text-gray-800">{award.title}</p>
                      <p className="text-xs text-gray-500">{award.issuer} • {award.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-5">
            {/* Experience */}
            {showSections.experience && experience.length > 0 && (
              <div>
                <h2 className={`font-bold ${colors.text} mb-3 uppercase text-sm tracking-wide flex items-center gap-2`}>
                  <div className={`w-8 h-1 ${colors.secondary} rounded`} />
                  Experience
                </h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-4 border-l-2 border-gray-200">
                      <div className={`absolute left-[-5px] top-0 w-2 h-2 ${colors.primary} rounded-full`} />
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-900">{exp.position}</h3>
                          <p className={`${colors.text} font-medium text-sm`}>{exp.company}</p>
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </span>
                      </div>
                      {exp.location && <p className="text-xs text-gray-500 mt-1">{exp.location}</p>}
                      {exp.description && <p className="text-sm text-gray-700 mt-2 whitespace-pre-line">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {showSections.education && education.length > 0 && (
              <div>
                <h2 className={`font-bold ${colors.text} mb-3 uppercase text-sm tracking-wide flex items-center gap-2`}>
                  <div className={`w-8 h-1 ${colors.secondary} rounded`} />
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id} className={`p-3 ${colors.bg} rounded-xl`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-gray-900">{edu.degree}</p>
                          <p className="text-sm text-gray-700">{edu.field}</p>
                          <p className={`text-sm ${colors.text} font-medium`}>{edu.institution}</p>
                        </div>
                        <span className="text-xs text-gray-500">{edu.startYear} - {edu.endYear}</span>
                      </div>
                      {edu.gpa && <p className="text-xs text-gray-600 mt-2">GPA: {edu.gpa}</p>}
                      {edu.description && <p className="text-sm text-gray-700 mt-2">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {showSections.projects && projects.length > 0 && (
              <div>
                <h2 className={`font-bold ${colors.text} mb-3 uppercase text-sm tracking-wide flex items-center gap-2`}>
                  <div className={`w-8 h-1 ${colors.secondary} rounded`} />
                  Projects
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {projects.map((project) => (
                    <div key={project.id} className={`p-3 ${colors.bg} rounded-xl`}>
                      <p className="font-bold text-gray-900 text-sm">{project.name}</p>
                      {project.description && <p className="text-xs text-gray-700 mt-1">{project.description}</p>}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className={`text-xs ${colors.primary} text-white px-2 py-0.5 rounded-full`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {showSections.certifications && certifications.length > 0 && (
              <div>
                <h2 className={`font-bold ${colors.text} mb-3 uppercase text-sm tracking-wide flex items-center gap-2`}>
                  <div className={`w-8 h-1 ${colors.secondary} rounded`} />
                  Certifications
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className={`p-3 ${colors.bg} rounded-xl flex items-center gap-3`}>
                      <div className={`w-10 h-10 ${colors.primary} rounded-lg flex items-center justify-center text-white`}>
                        <Award size={18} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-900">{cert.name}</p>
                        <p className="text-xs text-gray-500">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
