import React, { useState } from 'react';
import { Download, FileImage, FileText, Loader2, Check, AlertCircle } from 'lucide-react';
import { exportPlannerAsJpeg } from '../utils/exportJpeg';
import { exportPlannerAsPdf } from '../utils/exportPdf';
import { formatFilename } from '../utils/dateUtils';

export function DownloadActions({ previewRef, date, selectedThemeId, paperFormat }) {
  const [isExportingJpeg, setIsExportingJpeg] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const clearMessages = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleExportJpeg = async () => {
    if (!previewRef.current || isExportingJpeg || isExportingPdf) return;
    clearMessages();
    setIsExportingJpeg(true);

    try {
      const filename = formatFilename(date, selectedThemeId, 'jpg');
      await exportPlannerAsJpeg(previewRef.current, filename);
      setSuccessMessage(`Exported high-res JPEG: ${filename}`);
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (err) {
      console.error('JPEG Export Error:', err);
      setErrorMessage(
        'Could not generate JPEG export. Please make sure no pop-up blockers are preventing the download and try again.'
      );
    } finally {
      setIsExportingJpeg(false);
    }
  };

  const handleExportPdf = async () => {
    if (!previewRef.current || isExportingPdf || isExportingJpeg) return;
    clearMessages();
    setIsExportingPdf(true);

    try {
      const filename = formatFilename(date, selectedThemeId, 'pdf');
      await exportPlannerAsPdf(previewRef.current, filename, paperFormat);
      setSuccessMessage(`Exported print-ready PDF (${paperFormat.toUpperCase()}): ${filename}`);
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (err) {
      console.error('PDF Export Error:', err);
      setErrorMessage(
        'Could not generate PDF export. Please try again or switch formats.'
      );
    } finally {
      setIsExportingPdf(false);
    }
  };

  const isBusy = isExportingJpeg || isExportingPdf;

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-4 sm:p-5 transition-all">
      <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Download className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-900">Download &amp; Print Planner</h3>
            <p className="text-xs text-stone-500">
              300 DPI high-resolution export in {paperFormat === 'letter' ? 'US Letter' : 'A4'} format
            </p>
          </div>
        </div>

      </div>

      {/* Status Messages */}
      {successMessage && (
        <div className="flex items-center space-x-2 p-3 mb-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl animate-in fade-in duration-200">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-medium">{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="flex items-center space-x-2 p-3 mb-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl animate-in fade-in duration-200">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* JPEG Export Button */}
        <button
          type="button"
          disabled={isBusy}
          onClick={handleExportJpeg}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20"
        >
          {isExportingJpeg ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Generating 300 DPI JPEG...</span>
            </>
          ) : (
            <>
              <FileImage className="w-4 h-4 text-amber-400" />
              <span>Download High-Res JPEG</span>
            </>
          )}
        </button>

        {/* PDF Export Button */}
        <button
          type="button"
          disabled={isBusy}
          onClick={handleExportPdf}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg shadow-indigo-600/20 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
        >
          {isExportingPdf ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Generating Print PDF...</span>
            </>
          ) : (
            <>
              <FileText className="w-4 h-4 text-indigo-200" />
              <span>Download Print PDF ({paperFormat.toUpperCase()})</span>
            </>
          )}
        </button>
      </div>

      {/* Helpful Print Tips */}
      <div className="mt-3 text-[11px] text-stone-500 bg-stone-50 border border-stone-100 rounded-xl p-2.5 flex items-center justify-between">
        <span>💡 For optimal print clarity, select "Background Graphics: ON" and "Scale: 100%" in printer settings.</span>
      </div>
    </div>
  );
}
