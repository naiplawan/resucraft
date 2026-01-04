'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Upload, X, Camera } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';
import { VALID_PHOTO_TYPES, MAX_PHOTO_SIZE_BYTES } from '@/lib/constants';
import { toast } from 'sonner';

export function PhotoUpload() {
  const { resumeData, updatePersonalInfo } = useResume();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = useCallback((file: File | null) => {
    if (!file) return;

    setError(null);
    setIsLoading(true);

    // Validate file type
    if (!VALID_PHOTO_TYPES.includes(file.type as typeof VALID_PHOTO_TYPES[number])) {
      const errorMsg = 'Please select a valid image (JPG, PNG, WebP, or GIF)';
      setError(errorMsg);
      toast.error(errorMsg);
      setIsLoading(false);
      return;
    }

    // Validate file size
    if (file.size > MAX_PHOTO_SIZE_BYTES) {
      const errorMsg = 'File size must be less than 5MB';
      setError(errorMsg);
      toast.error(errorMsg);
      setIsLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      updatePersonalInfo({ photo: e.target?.result as string });
      setIsLoading(false);
      toast.success('Photo uploaded successfully');
    };
    reader.onerror = () => {
      const errorMsg = 'Failed to read file. Please try again.';
      setError(errorMsg);
      toast.error(errorMsg);
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  }, [updatePersonalInfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(file);
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleRemove = () => {
    updatePersonalInfo({ photo: undefined });
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.success('Photo removed');
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Profile Photo</label>

      {resumeData.personalInfo.photo ? (
        <div className="flex items-center gap-4">
          <div className="relative group">
            <img
              src={resumeData.personalInfo.photo}
              alt="Profile"
              className="w-28 h-28 rounded-xl object-cover border-2 border-gray-200 shadow-sm"
            />
            <div
              className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
            >
              <button
                onClick={openFileDialog}
                className="p-2 bg-white/90 text-gray-700 rounded-lg hover:bg-white transition-colors"
                type="button"
                title="Change photo"
              >
                <Camera size={18} />
              </button>
              <button
                onClick={handleRemove}
                className="p-2 bg-red-500/90 text-white rounded-lg hover:bg-red-500 transition-colors"
                type="button"
                title="Remove photo"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <p className="font-medium text-gray-700">Photo uploaded</p>
            <p>Hover to change or remove</p>
          </div>
        </div>
      ) : (
        <div
          onClick={openFileDialog}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200
            ${isDragging
              ? 'border-primary bg-primary/5 scale-[1.02]'
              : 'border-gray-300 hover:border-primary/50 hover:bg-gray-50'
            }
            ${isLoading ? 'pointer-events-none opacity-60' : ''}
          `}
        >
          {isLoading ? (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-sm text-gray-600">Processing image...</p>
            </div>
          ) : (
            <>
              <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-colors ${
                isDragging ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'
              }`}>
                <Upload size={24} />
              </div>
              <p className="text-sm font-medium text-gray-700 mb-1">
                {isDragging ? 'Drop image here' : 'Click to upload or drag and drop'}
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, WebP up to 5MB</p>
            </>
          )}
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <X size={14} />
          {error}
        </p>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
}
