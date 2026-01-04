import html2canvas from 'html2canvas';
import { PNG_WIDTH_PX, PNG_PADDING_PX, EXPORT_SCALE, RESUME_PREVIEW_ID } from './constants';

export async function exportToPNG(elementId: string = RESUME_PREVIEW_ID, filename: string = 'resume.png') {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Resume element not found');
  }

  // Create a clone to modify without affecting the UI
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  clone.style.width = `${PNG_WIDTH_PX}px`;
  clone.style.padding = `${PNG_PADDING_PX}px`;
  clone.style.background = 'white';
  document.body.appendChild(clone);

  try {
    const canvas = await html2canvas(clone, {
      scale: EXPORT_SCALE,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    // Use Promise-based approach for toBlob
    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, 'image/png');
    });

    if (blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
    }

    return { success: true };
  } finally {
    try {
      document.body.removeChild(clone);
    } catch (e) {
      console.warn('Failed to remove clone element:', e);
    }
  }
}
