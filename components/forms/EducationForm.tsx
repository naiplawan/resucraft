'use client';

import React from 'react';
import { FormInput, FormTextarea } from '@/components/forms/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

export function EducationForm() {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();

  return (
    <div className="space-y-4">
      {resumeData.education.map((edu, index) => (
        <Card key={edu.id} className="relative">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium text-gray-900">Education {index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeEducation(edu.id)}
              >
                <Trash2 size={16} />
              </Button>
            </div>

            <div className="space-y-3">
              <FormInput
                label="Institution"
                placeholder="Stanford University"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
              />

              <FormInput
                label="Degree"
                placeholder="Bachelor of Science"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
              />

              <FormInput
                label="Field of Study"
                placeholder="Computer Science"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
              />

              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  label="Start Year"
                  type="number"
                  placeholder="2018"
                  value={edu.startYear}
                  onChange={(e) => updateEducation(edu.id, { startYear: e.target.value })}
                />

                <FormInput
                  label="End Year"
                  type="number"
                  placeholder="2022"
                  value={edu.endYear}
                  onChange={(e) => updateEducation(edu.id, { endYear: e.target.value })}
                />
              </div>

              <FormInput
                label="GPA (optional)"
                placeholder="3.8"
                value={edu.gpa}
                onChange={(e) => updateEducation(edu.id, { gpa: e.target.value })}
              />

              <FormTextarea
                label="Achievements (optional)"
                placeholder="Dean's List, Honors, etc."
                value={edu.description}
                onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={addEducation} className="w-full">
        <Plus size={16} className="mr-2" />
        Add Education
      </Button>
    </div>
  );
}
