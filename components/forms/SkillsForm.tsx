'use client';

import React from 'react';
import { FormInput, FormSelect } from '@/components/forms/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

const skillLevels = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'expert', label: 'Expert' },
];

export function SkillsForm() {
  const { resumeData, addSkill, updateSkill, removeSkill } = useResume();

  return (
    <div className="space-y-4">
      {resumeData.skills.map((skill, index) => (
        <Card key={skill.id} className="relative">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium text-gray-900">Skill {index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(skill.id)}
              >
                <Trash2 size={16} />
              </Button>
            </div>

            <div className="space-y-3">
              <FormInput
                label="Skill Name"
                placeholder="JavaScript"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
              />

              <FormSelect
                label="Proficiency Level"
                options={skillLevels}
                value={skill.level}
                onChange={(value) => updateSkill(skill.id, { level: value as 'beginner' | 'intermediate' | 'advanced' | 'expert' })}
              />

              <FormInput
                label="Category (optional)"
                placeholder="Technical, Language, etc."
                value={skill.category}
                onChange={(e) => updateSkill(skill.id, { category: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" onClick={addSkill} className="w-full">
        <Plus size={16} className="mr-2" />
        Add Skill
      </Button>
    </div>
  );
}
