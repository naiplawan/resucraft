'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function FormInput({ label, error, className, id, ...props }: FormInputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full space-y-2">
      {label && (
        <Label htmlFor={inputId} className="text-sm font-medium text-foreground cursor-pointer">
          {label}
        </Label>
      )}
      <Input
        id={inputId}
        className={cn(
          error && 'border-destructive focus-visible:ring-destructive/20',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && <p id={`${inputId}-error`} className="text-sm text-destructive" role="alert">{error}</p>}
    </div>
  );
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function FormTextarea({ label, error, className, id, ...props }: FormTextareaProps) {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full space-y-2">
      {label && (
        <Label htmlFor={textareaId} className="text-sm font-medium text-foreground cursor-pointer">
          {label}
        </Label>
      )}
      <Textarea
        id={textareaId}
        className={cn(
          error && 'border-destructive focus-visible:ring-destructive/20',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && <p id={`${textareaId}-error`} className="text-sm text-destructive" role="alert">{error}</p>}
    </div>
  );
}

interface FormSelectProps {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function FormSelect({
  label,
  error,
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className,
  disabled
}: FormSelectProps) {
  const selectId = label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full space-y-2">
      {label && (
        <Label htmlFor={selectId} className="text-sm font-medium text-foreground cursor-pointer">
          {label}
        </Label>
      )}
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger
          id={selectId}
          className={cn(
            'w-full h-11 rounded-sm border-2 transition-all duration-200 cursor-pointer',
            'hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20',
            error && 'border-destructive focus:ring-destructive/20',
            className
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-sm border-2 shadow-vintage">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="rounded-sm cursor-pointer touch-target"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-destructive" role="alert">{error}</p>}
    </div>
  );
}
