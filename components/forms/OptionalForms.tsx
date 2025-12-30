'use client';

import React from 'react';
import { FormInput, FormTextarea, FormSelect } from '@/components/forms/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

const proficiencyLevels = [
  { value: 'basic', label: 'Basic' },
  { value: 'conversational', label: 'Conversational' },
  { value: 'fluent', label: 'Fluent' },
  { value: 'native', label: 'Native' },
];

export function CertificationsForm() {
  const { resumeData, addCertification, updateCertification, removeCertification } = useResume();

  return (
    <div className="space-y-4">
      {resumeData.certifications.map((cert, index) => (
        <Card key={cert.id} className="relative">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium text-gray-900">Certification {index + 1}</h4>
              <Button variant="ghost" size="sm" onClick={() => removeCertification(cert.id)}>
                <Trash2 size={16} />
              </Button>
            </div>

            <div className="space-y-3">
              <FormInput
                label="Certification Name"
                placeholder="AWS Certified Solutions Architect"
                value={cert.name}
                onChange={(e) => updateCertification(cert.id, { name: e.target.value })}
              />

              <FormInput
                label="Issuer"
                placeholder="Amazon Web Services"
                value={cert.issuer}
                onChange={(e) => updateCertification(cert.id, { issuer: e.target.value })}
              />

              <FormInput
                label="Date"
                type="month"
                value={cert.date}
                onChange={(e) => updateCertification(cert.id, { date: e.target.value })}
              />

              <FormInput
                label="URL (optional)"
                placeholder="https://..."
                value={cert.url}
                onChange={(e) => updateCertification(cert.id, { url: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={addCertification} className="w-full">
        <Plus size={16} className="mr-2" />
        Add Certification
      </Button>
    </div>
  );
}

export function ProjectsForm() {
  const { resumeData, addProject, updateProject, removeProject } = useResume();

  return (
    <div className="space-y-4">
      {resumeData.projects.map((project, index) => (
        <Card key={project.id} className="relative">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium text-gray-900">Project {index + 1}</h4>
              <Button variant="ghost" size="sm" onClick={() => removeProject(project.id)}>
                <Trash2 size={16} />
              </Button>
            </div>

            <div className="space-y-3">
              <FormInput
                label="Project Name"
                placeholder="E-commerce Platform"
                value={project.name}
                onChange={(e) => updateProject(project.id, { name: e.target.value })}
              />

              <FormTextarea
                label="Description"
                placeholder="Describe what you built..."
                value={project.description}
                onChange={(e) => updateProject(project.id, { description: e.target.value })}
              />

              <FormInput
                label="URL (optional)"
                placeholder="https://..."
                value={project.url}
                onChange={(e) => updateProject(project.id, { url: e.target.value })}
              />

              <FormInput
                label="Technologies (comma separated)"
                placeholder="React, Node.js, MongoDB"
                value={project.technologies?.join(', ') || ''}
                onChange={(e) => updateProject(project.id, {
                  technologies: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                })}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={addProject} className="w-full">
        <Plus size={16} className="mr-2" />
        Add Project
      </Button>
    </div>
  );
}

export function LanguagesForm() {
  const { resumeData, addLanguage, updateLanguage, removeLanguage } = useResume();

  return (
    <div className="space-y-4">
      {resumeData.languages.map((lang, index) => (
        <Card key={lang.id} className="relative">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium text-gray-900">Language {index + 1}</h4>
              <Button variant="ghost" size="sm" onClick={() => removeLanguage(lang.id)}>
                <Trash2 size={16} />
              </Button>
            </div>

            <div className="space-y-3">
              <FormInput
                label="Language"
                placeholder="Spanish"
                value={lang.name}
                onChange={(e) => updateLanguage(lang.id, { name: e.target.value })}
              />

              <FormSelect
                label="Proficiency"
                options={proficiencyLevels}
                value={lang.proficiency}
                onChange={(value) => updateLanguage(lang.id, { proficiency: value as 'basic' | 'conversational' | 'fluent' | 'native' })}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={addLanguage} className="w-full">
        <Plus size={16} className="mr-2" />
        Add Language
      </Button>
    </div>
  );
}

export function AwardsForm() {
  const { resumeData, addAward, updateAward, removeAward } = useResume();

  return (
    <div className="space-y-4">
      {resumeData.awards.map((award, index) => (
        <Card key={award.id} className="relative">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium text-gray-900">Award {index + 1}</h4>
              <Button variant="ghost" size="sm" onClick={() => removeAward(award.id)}>
                <Trash2 size={16} />
              </Button>
            </div>

            <div className="space-y-3">
              <FormInput
                label="Award Title"
                placeholder="Employee of the Year"
                value={award.title}
                onChange={(e) => updateAward(award.id, { title: e.target.value })}
              />

              <FormInput
                label="Issuer"
                placeholder="Company Name"
                value={award.issuer}
                onChange={(e) => updateAward(award.id, { issuer: e.target.value })}
              />

              <FormInput
                label="Date"
                type="month"
                value={award.date}
                onChange={(e) => updateAward(award.id, { date: e.target.value })}
              />

              <FormTextarea
                label="Description (optional)"
                placeholder="Details about the award..."
                value={award.description}
                onChange={(e) => updateAward(award.id, { description: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={addAward} className="w-full">
        <Plus size={16} className="mr-2" />
        Add Award
      </Button>
    </div>
  );
}
