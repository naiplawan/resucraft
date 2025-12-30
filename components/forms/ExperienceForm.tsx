'use client';

import React from 'react';
import { FormInput, FormTextarea } from '@/components/forms/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

export function ExperienceForm() {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();

  return (
    <div className="space-y-4">
      {resumeData.experience.map((exp, index) => (
        <Card key={exp.id} className="relative">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium text-gray-900">Experience {index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeExperience(exp.id)}
              >
                <Trash2 size={16} />
              </Button>
            </div>

            <div className="space-y-3">
              <FormInput
                label="Company"
                placeholder="Acme Inc."
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
              />

              <FormInput
                label="Position"
                placeholder="Software Engineer"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
              />

              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  label="Start Date"
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                />

                {!exp.current ? (
                  <FormInput
                    label="End Date"
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                  />
                ) : (
                  <div className="pt-6">
                    <label className="text-sm text-gray-600">Currently working here</label>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onCheckedChange={(checked) => updateExperience(exp.id, { current: !!checked })}
                />
                <label htmlFor={`current-${exp.id}`} className="text-sm cursor-pointer">
                  I currently work here
                </label>
              </div>

              <FormInput
                label="Location"
                placeholder="San Francisco, CA"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
              />

              <FormTextarea
                label="Description"
                placeholder="Describe your responsibilities and achievements..."
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={addExperience} className="w-full">
        <Plus size={16} className="mr-2" />
        Add Experience
      </Button>
    </div>
  );
}
