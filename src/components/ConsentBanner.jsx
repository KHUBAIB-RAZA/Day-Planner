import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export function ConsentBanner({ onNavigateToPrivacy }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('dpg_consent_choice');
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('dpg_consent_choice', 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('dpg_consent_choice', 'necessary_only');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Cookie Notice"
      className="no-export fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-white/95 backdrop-blur-md border border-stone-200 shadow-2xl rounded-2xl p-4 text-stone-800 transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1 text-sm">
          <h4 className="font-semibold text-stone-900 text-sm mb-1">Privacy &amp; Cookie Notice</h4>
          <p className="text-stone-600 text-xs leading-relaxed mb-3">
            We operate fully in your browser. Your daily planner contents are never sent to any server. We use local storage for your planner state and prepare for Google advertising policies.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium rounded-lg transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={() => onNavigateToPrivacy?.()}
              className="text-xs text-indigo-600 hover:text-indigo-800 underline ml-auto"
            >
              Policy
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close Notice"
          className="text-stone-400 hover:text-stone-600 transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
