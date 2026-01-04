'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ResumeProvider, useResume } from '@/context/ResumeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TemplateSelector } from '@/components/TemplateSelector';
import { PhotoUpload } from '@/components/forms/PhotoUpload';
import { PersonalInfoForm } from '@/components/forms/PersonalInfoForm';
import { ExperienceForm } from '@/components/forms/ExperienceForm';
import { EducationForm } from '@/components/forms/EducationForm';
import { SkillsForm } from '@/components/forms/SkillsForm';
import { CertificationsForm, ProjectsForm, LanguagesForm, AwardsForm } from '@/components/forms/OptionalForms';
import { FormTextarea } from '@/components/forms/FormInput';
import { ModernTemplate } from '@/components/templates/ModernTemplate';
import { ClassicTemplate } from '@/components/templates/ClassicTemplate';
import { MinimalTemplate } from '@/components/templates/MinimalTemplate';
import { CreativeTemplate } from '@/components/templates/CreativeTemplate';
import { RESUME_PREVIEW_ID } from '@/lib/constants';
import { toast } from 'sonner';
import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award as AwardIcon,
  FolderOpen,
  Languages,
  Trophy,
  FileText,
  Download,
  Layout,
  RotateCcw,
  ChevronLeft,
  Sparkles,
  Image,
  Loader2,
} from 'lucide-react';

type Section = 'template' | 'personal' | 'summary' | 'experience' | 'education' | 'skills' | 'certifications' | 'projects' | 'languages' | 'awards';

const sections: { id: Section; label: string; icon: React.ElementType }[] = [
  { id: 'template', label: 'Template', icon: Layout },
  { id: 'personal', label: 'Personal Info', icon: User },
  { id: 'summary', label: 'Summary', icon: FileText },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'certifications', label: 'Certifications', icon: AwardIcon },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'languages', label: 'Languages', icon: Languages },
  { id: 'awards', label: 'Awards', icon: Trophy },
];

function BuilderContent() {
  const { resumeData, updateSummary, resetResume } = useResume();
  const [activeSection, setActiveSection] = useState<Section>('personal');
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const { exportToPDF } = await import('@/lib/exportPdf');
      await exportToPDF(RESUME_PREVIEW_ID, `${resumeData.personalInfo.fullName || 'resume'}.pdf`);
      toast.success('PDF exported successfully');
    } catch (error) {
      console.error('Export failed:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to export PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportPNG = async () => {
    setIsExporting(true);
    try {
      const { exportToPNG } = await import('@/lib/exportImage');
      await exportToPNG(RESUME_PREVIEW_ID, `${resumeData.personalInfo.fullName || 'resume'}.png`);
      toast.success('PNG exported successfully');
    } catch (error) {
      console.error('Export failed:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to export PNG. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'template':
        return <TemplateSelector />;
      case 'personal':
        return (
          <div className="space-y-6">
            <PhotoUpload />
            <PersonalInfoForm />
          </div>
        );
      case 'summary':
        return (
          <div className="space-y-4">
            <FormTextarea
              label="Professional Summary"
              placeholder="Write a brief summary about yourself, your key skills, and career goals..."
              value={resumeData.summary}
              onChange={(e) => updateSummary(e.target.value)}
              rows={6}
            />
            <div className="flex items-start gap-2 p-4 rounded-xl bg-secondary/50 border border-primary/10">
              <Sparkles size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Pro tip:</span> Keep it concise (2-4 sentences). Highlight your key strengths and what makes you unique.
              </p>
            </div>
          </div>
        );
      case 'experience':
        return <ExperienceForm />;
      case 'education':
        return <EducationForm />;
      case 'skills':
        return <SkillsForm />;
      case 'certifications':
        return <CertificationsForm />;
      case 'projects':
        return <ProjectsForm />;
      case 'languages':
        return <LanguagesForm />;
      case 'awards':
        return <AwardsForm />;
      default:
        return null;
    }
  };

  const currentSectionData = sections.find(s => s.id === activeSection);

  return (
    <div className="flex h-screen bg-muted/30">
      {/* Sidebar */}
      <div className="w-[420px] bg-background border-r border-border flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-canva-gradient flex items-center justify-center">
                <FileText className="text-white" size={16} />
              </div>
              <span className="font-bold">ResuCraft</span>
            </div>
            <Button variant="ghost" size="sm" onClick={resetResume} className="text-muted-foreground">
              <RotateCcw size={16} />
            </Button>
          </div>

          {/* Section Navigation */}
          <div className="flex gap-1 overflow-x-auto pb-2 -mx-1 px-1">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all
                    ${isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span className="hidden lg:inline">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              {currentSectionData && <currentSectionData.icon size={22} className="text-primary" />}
              {currentSectionData?.label}
            </h2>
          </div>
          {renderSection()}
        </div>

        {/* Export Section */}
        <div className="p-4 border-t border-border bg-background">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Export your resume</p>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="w-full"
            >
              {isExporting ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download size={16} />
                  PDF
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={handleExportPNG}
              disabled={isExporting}
              className="w-full"
            >
              {isExporting ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Image size={16} />
                  PNG
                </>
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Auto-saved to your browser
          </p>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Preview Header */}
        <div className="h-14 bg-background border-b border-border px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#01c38d] animate-pulse" />
            <span className="text-sm text-muted-foreground">Live Preview</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-muted">
              {resumeData.template.charAt(0).toUpperCase() + resumeData.template.slice(1)} Template
            </span>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-y-auto bg-[#525659] p-8">
          <div className="flex justify-center">
            <div id={RESUME_PREVIEW_ID} className="shadow-2xl rounded-lg overflow-hidden">
              {resumeData.template === 'modern' && <ModernTemplate data={resumeData} />}
              {resumeData.template === 'classic' && <ClassicTemplate data={resumeData} />}
              {resumeData.template === 'minimal' && <MinimalTemplate data={resumeData} />}
              {resumeData.template === 'creative' && <CreativeTemplate data={resumeData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BuilderPage() {
  return (
    <ResumeProvider>
      <BuilderContent />
    </ResumeProvider>
  );
}
