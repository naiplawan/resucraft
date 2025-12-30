'use client';

import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';

export function PhotoUpload() {
  const { resumeData, updatePersonalInfo } = useResume();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (file: File | null) => {
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      updatePersonalInfo({ photo: e.target?.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleRemove = () => {
    updatePersonalInfo({ photo: undefined });
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Profile Photo</label>

      {resumeData.personalInfo.photo ? (
        <div className="relative inline-block">
          <img
            src={resumeData.personalInfo.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
          />
          <button
            onClick={handleRemove}
            className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            type="button"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          className={`
            border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
            ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          `}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileSelect(e.target.files?.[0] || null)}
      />
    </div>
  );
}
