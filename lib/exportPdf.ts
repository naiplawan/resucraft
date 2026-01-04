import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { A4_WIDTH_MM, A4_HEIGHT_MM, PDF_PADDING_MM, EXPORT_SCALE, RESUME_PREVIEW_ID } from './constants';

export async function exportToPDF(elementId: string = RESUME_PREVIEW_ID, filename: string = 'resume.pdf') {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Resume element not found');
  }

  // Create a clone to modify without affecting the UI
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  clone.style.width = `${A4_WIDTH_MM}mm`;
  clone.style.padding = `${PDF_PADDING_MM}mm`;
  clone.style.background = 'white';
  document.body.appendChild(clone);

  try {
    const canvas = await html2canvas(clone, {
      scale: EXPORT_SCALE,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = A4_WIDTH_MM;
    const pageHeight = A4_HEIGHT_MM;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
    return { success: true };
  } finally {
    try {
      document.body.removeChild(clone);
    } catch (e) {
      console.warn('Failed to remove clone element:', e);
    }
  }
}
