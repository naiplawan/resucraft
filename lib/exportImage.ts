import html2canvas from 'html2canvas';

export async function exportToPNG(elementId: string, filename: string = 'resume.png') {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Resume element not found');
  }

  // Create a clone to modify without affecting the UI
  const clone = element.cloneNode(true) as HTMLElement;
  clone.style.position = 'absolute';
  clone.style.left = '-9999px';
  clone.style.width = '800px';
  clone.style.padding = '40px';
  clone.style.background = 'white';
  document.body.appendChild(clone);

  try {
    const canvas = await html2canvas(clone, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
      }
    });
  } finally {
    document.body.removeChild(clone);
  }
}
