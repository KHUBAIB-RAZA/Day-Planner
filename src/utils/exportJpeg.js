import { toJpeg } from 'html-to-image';

/**
 * Exports the given DOM element as a high-resolution 300 DPI JPEG.
 * @param {HTMLElement} element - Planner preview DOM element
 * @param {string} filename - Filename for download
 */
export async function exportPlannerAsJpeg(element, filename = 'daily-planner.jpg') {
  if (!element) {
    throw new Error('Planner preview element not found.');
  }

  // Ensure fonts are ready for crisp rendering
  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // Continue even if font readiness probe fails
    }
  }

  // Export with 3x pixel ratio for ~300 DPI quality
  const dataUrl = await toJpeg(element, {
    quality: 0.98,
    pixelRatio: 3,
    cacheBust: true,
    backgroundColor: '#ffffff',
    filter: (node) => {
      if (node.classList && node.classList.contains('no-export')) {
        return false;
      }
      return true;
    },
  });

  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
