import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

/**
 * Exports the given DOM element as a high-resolution, print-ready PDF.
 * Supports A4 portrait and US Letter portrait.
 * @param {HTMLElement} element - Planner preview DOM element
 * @param {string} filename - Filename for download
 * @param {'a4' | 'letter'} paperFormat - Paper format
 */
export async function exportPlannerAsPdf(element, filename = 'daily-planner.pdf', paperFormat = 'a4') {
  if (!element) {
    throw new Error('Planner preview element not found.');
  }

  if (document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // Continue even if font probe fails
    }
  }

  // Generate high-resolution PNG
  const dataUrl = await toPng(element, {
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

  const isLetter = paperFormat === 'letter';
  const pdfFormat = isLetter ? 'letter' : 'a4';
  const pdfWidth = isLetter ? 215.9 : 210;
  const pdfHeight = isLetter ? 279.4 : 297;

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: pdfFormat,
    compress: true,
  });

  pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  pdf.save(filename);
}
