'use client';

import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { ClassicTemplate } from '@/components/templates/ClassicTemplate';
import { MinimalTemplate } from '@/components/templates/MinimalTemplate';
import { CreativeTemplate } from '@/components/templates/CreativeTemplate';

export function ResumePreview() {
  const { resumeData } = useResume();

  const renderTemplate = () => {
    switch (resumeData.template) {
      case 'modern':
        return <ModernTemplate data={resumeData} />;
      case 'classic':
        return <ClassicTemplate data={resumeData} />;
      case 'minimal':
        return <MinimalTemplate data={resumeData} />;
      case 'creative':
        return <CreativeTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="flex justify-center items-start py-8 bg-gray-100 min-h-screen">
      <div id="resume-preview" className="shadow-2xl">
        {renderTemplate()}
      </div>
    </div>
  );
}
