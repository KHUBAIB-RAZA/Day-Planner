import React from 'react';

/**
 * High-quality, respectful vector decorations for daily planner themes.
 * Zero external image dependencies, fully offline & print-crisp.
 */

export function DecorativeCorner({ type = 'ornate', color = '#d97706', position = 'top-left' }) {
  const rotation = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position] || '';

  if (type === 'minimal') {
    return (
      <div className={`w-8 h-8 pointer-events-none opacity-40 ${rotation}`}>
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <path d="M2 30V2H30" stroke={color} strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  if (type === 'arabesque') {
    return (
      <div className={`w-12 h-12 pointer-events-none opacity-80 ${rotation}`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path d="M4 44V12C4 7.58 7.58 4 12 4H44" stroke={color} strokeWidth="1.5" />
          <path d="M12 44V18C12 14.68 14.68 12 18 12H44" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="3" fill={color} />
          <path d="M4 4L16 16M4 20C10 20 20 10 20 4" stroke={color} strokeWidth="1" />
          <path d="M24 6C20 10 10 20 6 24" stroke={color} strokeWidth="0.8" />
        </svg>
      </div>
    );
  }

  if (type === 'floral') {
    return (
      <div className={`w-12 h-12 pointer-events-none opacity-75 ${rotation}`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path d="M4 44V16C4 9.37 9.37 4 16 4H44" stroke={color} strokeWidth="1.5" />
          <path d="M8 8C14 14 16 24 16 32" stroke={color} strokeWidth="1" />
          <path d="M8 8C14 14 24 16 32 16" stroke={color} strokeWidth="1" />
          <circle cx="10" cy="10" r="2.5" fill={color} />
          <circle cx="22" cy="14" r="2" fill={color} opacity="0.6" />
          <circle cx="14" cy="22" r="2" fill={color} opacity="0.6" />
          <path d="M6 18C10 18 14 14 14 10" stroke={color} strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (type === 'mandala') {
    return (
      <div className={`w-12 h-12 pointer-events-none opacity-80 ${rotation}`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path d="M2 42V10C2 5.58 5.58 2 10 2H42" stroke={color} strokeWidth="1.5" />
          <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1" />
          <circle cx="12" cy="12" r="2.5" fill={color} />
          <path d="M12 4V8M12 16V20M4 12H8M16 12H20" stroke={color} strokeWidth="1" />
          <path d="M6.34 6.34L9.17 9.17M14.83 14.83L17.66 17.66" stroke={color} strokeWidth="1" />
          <path d="M17.66 6.34L14.83 9.17M9.17 14.83L6.34 17.66" stroke={color} strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (type === 'stars') {
    return (
      <div className={`w-10 h-10 pointer-events-none opacity-70 ${rotation}`}>
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
          <path d="M4 36V10C4 6.68 6.68 4 10 4H36" stroke={color} strokeWidth="1.5" />
          <polygon points="12,7 13.5,10.5 17,11 14.5,13.5 15,17 12,15 9,17 9.5,13.5 7,11 10.5,10.5" fill={color} />
        </svg>
      </div>
    );
  }

  if (type === 'leaves') {
    return (
      <div className={`w-12 h-12 pointer-events-none opacity-75 ${rotation}`}>
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
          <path d="M4 40V12C4 7.58 7.58 4 12 4H40" stroke={color} strokeWidth="1.5" />
          <path d="M8 8Q20 12 24 24Q12 20 8 8Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1" />
          <path d="M12 28Q16 18 28 14" stroke={color} strokeWidth="1" />
        </svg>
      </div>
    );
  }

  // Default ornate vintage
  return (
    <div className={`w-12 h-12 pointer-events-none opacity-70 ${rotation}`}>
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M4 44V14C4 8.48 8.48 4 14 4H44" stroke={color} strokeWidth="2" />
        <path d="M10 44V18C10 13.58 13.58 10 18 10H44" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="16" cy="16" r="3" fill={color} />
        <path d="M4 14C8 14 14 8 14 4" stroke={color} strokeWidth="1.2" />
        <circle cx="28" cy="8" r="1.5" fill={color} />
        <circle cx="8" cy="28" r="1.5" fill={color} />
      </svg>
    </div>
  );
}

export function ThemeHeaderMotif({ motif = 'lantern', color = '#d97706', accentColor = '#f59e0b' }) {
  switch (motif) {
    case 'crescent-lantern':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M14 3a9 9 0 106.8 14.8A8 8 0 0114 3z" fill={color} />
            <circle cx="16" cy="8" r="1" fill={accentColor} />
            <circle cx="18" cy="12" r="1" fill={accentColor} />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-5 h-7" viewBox="0 0 20 28" fill="none">
            <line x1="10" y1="0" x2="10" y2="6" stroke={color} strokeWidth="1.5" />
            <polygon points="5,6 15,6 17,11 10,14 3,11" fill={color} opacity="0.8" />
            <rect x="5" y="11" width="10" height="11" rx="2" fill={accentColor} fillOpacity="0.3" stroke={color} strokeWidth="1" />
            <circle cx="10" cy="16" r="2.5" fill={accentColor} />
            <polygon points="6,22 14,22 12,26 8,26" fill={color} />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-6 h-6 scale-x-[-1]" viewBox="0 0 24 24" fill="none">
            <path d="M14 3a9 9 0 106.8 14.8A8 8 0 0114 3z" fill={color} />
            <circle cx="16" cy="8" r="1" fill={accentColor} />
          </svg>
        </div>
      );

    case 'diya-mandala':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <ellipse cx="16" cy="22" rx="11" ry="5" fill={color} />
            <path d="M5 22C5 18 16 16 16 16C16 16 27 18 27 22" fill={accentColor} fillOpacity="0.4" />
            {/* Flame */}
            <path d="M16 4C14 9 12 11 12 14C12 16.2 13.8 18 16 18C18.2 18 20 16.2 20 14C20 11 18 9 16 4Z" fill="#f59e0b" />
            <path d="M16 8C15 11 14 12 14 14C14 15.1 14.9 16 16 16C17.1 16 18 15.1 18 14C18 12 17 11 16 8Z" fill="#fbbf24" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'dove-olive':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <path d="M16 6L18 12H24L19 16L21 22L16 18L11 22L13 16L8 12H14L16 6Z" fill={accentColor} stroke={color} strokeWidth="1" />
            <circle cx="16" cy="15" r="2" fill="#ffffff" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'lotus':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
            {/* Lotus Petals */}
            <path d="M16 6C13 12 13 19 16 23C19 19 19 12 16 6Z" fill={color} />
            <path d="M16 12C11 14 7 19 10 24C13 23 15 20 16 18" fill={accentColor} fillOpacity="0.7" />
            <path d="M16 12C21 14 25 19 22 24C19 23 17 20 16 18" fill={accentColor} fillOpacity="0.7" />
            <path d="M8 24C12 26 20 26 24 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'lantern-east-asian':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-14 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-7 h-8" viewBox="0 0 24 28" fill="none">
            <line x1="12" y1="0" x2="12" y2="4" stroke={color} strokeWidth="1.5" />
            <rect x="7" y="4" width="10" height="2" rx="1" fill={accentColor} />
            <ellipse cx="12" cy="14" rx="7" ry="8" fill={color} />
            <ellipse cx="12" cy="14" rx="3.5" ry="8" stroke={accentColor} strokeWidth="0.8" />
            <line x1="5" y1="14" x2="19" y2="14" stroke={accentColor} strokeWidth="0.8" />
            <rect x="8" y="22" width="8" height="2" rx="1" fill={accentColor} />
            <line x1="12" y1="24" x2="12" y2="28" stroke={accentColor} strokeWidth="1.5" />
          </svg>
          <div className="h-px w-14 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'star-of-david':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 21,17 3,17" stroke={color} strokeWidth="1.5" fill="none" />
            <polygon points="12,22 21,7 3,7" stroke={color} strokeWidth="1.5" fill="none" />
            <circle cx="12" cy="12" r="2" fill={accentColor} />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'snowflake':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
            <circle cx="12" cy="12" r="2" fill={accentColor} stroke="none" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'autumn-leaf':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C7 6 4 12 7 18C10 24 18 20 20 14C22 8 17 4 12 2Z" fill={color} fillOpacity="0.8" />
            <path d="M7 18L17 6" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M11 13L15 13" stroke={accentColor} strokeWidth="1" strokeLinecap="round" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'spring-bloom':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" fill={accentColor} />
            <ellipse cx="12" cy="5" rx="2.5" ry="4" fill={color} opacity="0.8" />
            <ellipse cx="12" cy="19" rx="2.5" ry="4" fill={color} opacity="0.8" />
            <ellipse cx="5" cy="12" rx="4" ry="2.5" fill={color} opacity="0.8" />
            <ellipse cx="19" cy="12" rx="4" ry="2.5" fill={color} opacity="0.8" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'sun':
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
            <circle cx="12" cy="12" r="5" fill={accentColor} stroke={color} />
            <path d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" strokeLinecap="round" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );

    case 'floral-vine':
    default:
      return (
        <div className="flex items-center justify-center space-x-3 my-1">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M12 4L13.8 8.5L18.5 10.3L13.8 12.1L12 16.6L10.2 12.1L5.5 10.3L10.2 8.5L12 4Z" fill={accentColor} stroke={color} strokeWidth="1" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-current to-transparent opacity-60" style={{ color }} />
        </div>
      );
  }
}
