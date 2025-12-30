'use client';

import React from 'react';
import { FormInput } from '@/components/forms/FormInput';
import { useResume } from '@/context/ResumeContext';

export function PersonalInfoForm() {
  const { resumeData, updatePersonalInfo } = useResume();
  const { personalInfo } = resumeData;

  return (
    <div className="space-y-4">
      <FormInput
        label="Full Name"
        placeholder="John Doe"
        value={personalInfo.fullName}
        onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
      />

      <FormInput
        label="Job Title"
        placeholder="Software Engineer"
        value={personalInfo.jobTitle}
        onChange={(e) => updatePersonalInfo({ jobTitle: e.target.value })}
      />

      <FormInput
        label="Email"
        type="email"
        placeholder="john@example.com"
        value={personalInfo.email}
        onChange={(e) => updatePersonalInfo({ email: e.target.value })}
      />

      <FormInput
        label="Phone"
        type="tel"
        placeholder="+1 234 567 8900"
        value={personalInfo.phone}
        onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
      />

      <FormInput
        label="Location"
        placeholder="San Francisco, CA"
        value={personalInfo.location}
        onChange={(e) => updatePersonalInfo({ location: e.target.value })}
      />

      <FormInput
        label="LinkedIn (optional)"
        placeholder="linkedin.com/in/johndoe"
        value={personalInfo.linkedin}
        onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
      />

      <FormInput
        label="Website (optional)"
        placeholder="www.johndoe.com"
        value={personalInfo.website}
        onChange={(e) => updatePersonalInfo({ website: e.target.value })}
      />
    </div>
  );
}
