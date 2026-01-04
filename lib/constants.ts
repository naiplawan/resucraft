// Resume dimensions and export constants
export const A4_WIDTH_MM = 210;
export const A4_HEIGHT_MM = 297;
export const A4_WIDTH_PX = 794; // A4 at 96 DPI
export const A4_HEIGHT_PX = 1123; // A4 at 96 DPI

// Export settings
export const EXPORT_SCALE = 2; // Higher quality rendering
export const PDF_PADDING_MM = 15;
export const PNG_PADDING_PX = 40;
export const PNG_WIDTH_PX = 800;

// Photo upload limits
export const MAX_PHOTO_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
export const VALID_PHOTO_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'] as const;

// Auto-save debounce delay (ms)
export const AUTOSAVE_DEBOUNCE_MS = 500;

// LocalStorage keys
export const STORAGE_KEY = 'resucraft_draft';

// Color mappings for templates
export const ACCENT_COLOR_MAP = {
  blue: { sidebar: 'bg-slate-800', sidebarDark: 'bg-slate-900', text: 'text-blue-600', border: 'border-blue-600', light: 'bg-blue-50' },
  green: { sidebar: 'bg-emerald-800', sidebarDark: 'bg-emerald-900', text: 'text-emerald-600', border: 'border-emerald-600', light: 'bg-emerald-50' },
  purple: { sidebar: 'bg-violet-800', sidebarDark: 'bg-violet-900', text: 'text-violet-600', border: 'border-violet-600', light: 'bg-violet-50' },
  red: { sidebar: 'bg-rose-800', sidebarDark: 'bg-rose-900', text: 'text-rose-600', border: 'border-rose-600', light: 'bg-rose-50' },
  orange: { sidebar: 'bg-amber-800', sidebarDark: 'bg-amber-900', text: 'text-amber-600', border: 'border-amber-600', light: 'bg-amber-50' },
  teal: { sidebar: 'bg-teal-800', sidebarDark: 'bg-teal-900', text: 'text-teal-600', border: 'border-teal-600', light: 'bg-teal-50' },
  gray: { sidebar: 'bg-gray-800', sidebarDark: 'bg-gray-900', text: 'text-gray-700', border: 'border-gray-700', light: 'bg-gray-100' },
} as const;

export type AccentColorKey = keyof typeof ACCENT_COLOR_MAP;

// Resume preview element ID
export const RESUME_PREVIEW_ID = 'resume-preview';
