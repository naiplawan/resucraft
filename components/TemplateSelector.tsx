'use client';

import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { TemplateType, AccentColor } from '@/types/resume';

const templates: { id: TemplateType; name: string; description: string }[] = [
  { id: 'modern', name: 'Modern', description: 'Clean sidebar with accent colors' },
  { id: 'classic', name: 'Classic', description: 'Traditional ATS-friendly' },
  { id: 'minimal', name: 'Minimal', description: 'Typography-focused' },
  { id: 'creative', name: 'Creative', description: 'Two-column with visual elements' },
];

const colors: { id: AccentColor; name: string; bg: string }[] = [
  { id: 'blue', name: 'Blue', bg: 'bg-blue-500' },
  { id: 'green', name: 'Green', bg: 'bg-green-500' },
  { id: 'purple', name: 'Purple', bg: 'bg-purple-500' },
  { id: 'red', name: 'Red', bg: 'bg-red-500' },
  { id: 'orange', name: 'Orange', bg: 'bg-orange-500' },
  { id: 'teal', name: 'Teal', bg: 'bg-teal-500' },
  { id: 'gray', name: 'Gray', bg: 'bg-gray-600' },
];

export function TemplateSelector() {
  const { resumeData, updateTemplate, updateAccentColor } = useResume();

  return (
    <div className="space-y-6">
      {/* Template Selection */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Choose Template</h3>
        <div className="grid grid-cols-2 gap-3">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => updateTemplate(template.id)}
              className={`
                p-3 rounded-lg border-2 text-left transition-all
                ${resumeData.template === template.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <p className="font-medium text-gray-900">{template.name}</p>
              <p className="text-xs text-gray-500 mt-1">{template.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Accent Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => updateAccentColor(color.id)}
              className={`
                w-10 h-10 rounded-full ${color.bg} transition-all
                ${resumeData.accentColor === color.id
                  ? 'ring-4 ring-offset-2 ring-gray-300 scale-110'
                  : 'hover:scale-105'
                }
              `}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
