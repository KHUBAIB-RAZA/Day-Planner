import React from 'react';

/**
 * Reusable advertising container prepared for future Google AdSense integration.
 * Will not load any third-party ad scripts until publisher credentials are provided.
 * Features a strict 'no-export' class ensuring it never leaks into exported planners.
 */
export function AdPlaceholder({ slot = 'horizontal', className = '' }) {
  const isHorizontal = slot === 'horizontal';

  return (
    <aside
      aria-label="Advertisement Area"
      className={`no-export w-full flex flex-col items-center justify-center my-6 transition-all ${className}`}
    >
      <div className="w-full max-w-4xl mx-auto px-4">
        <div
          className={`w-full mx-auto border border-dashed border-stone-300 rounded-xl bg-stone-100/70 text-stone-500 flex flex-col items-center justify-center p-4 text-center transition-all ${
            isHorizontal
              ? 'min-h-[90px] md:h-[90px]'
              : 'min-h-[250px] max-w-[336px]'
          }`}
        >
          <div className="flex items-center space-x-2 text-xs font-medium uppercase tracking-wider text-stone-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-stone-300"></span>
            <span>Sponsored Space</span>
          </div>
          <p className="text-xs text-stone-500 max-w-md">
            Reserved for future Google AdSense placement. Clean, non-intrusive ads keep this daily planner 100% free.
          </p>
        </div>
      </div>
    </aside>
  );
}
