import React, { forwardRef } from 'react';
import { getThemeById } from '../themes';
import { formatDisplayDate } from '../utils/dateUtils';
import { DecorativeCorner, ThemeHeaderMotif } from './ThemeDecorations';
import { Calendar, Check } from 'lucide-react';
import { formatTaskTime } from '../utils/timeUtils';

export const PlannerPreview = forwardRef(function PlannerPreview(
  {
    heading = 'My Daily Planner',
    subtitle = '',
    date = '',
    paperFormat = 'a4',
    selectedThemeId = 'ramadan',
    tasks = [],
  },
  ref
) {
  const theme = getThemeById(selectedThemeId);
  const formattedDate = formatDisplayDate(date);
  const displaySubtitle = subtitle || theme.subtitle;

  // Determine standard printable dimensions
  // A4: 794 x 1123 px (approx 1:1.414 ratio)
  // US Letter: 816 x 1056 px (approx 1:1.294 ratio)
  const isLetter = paperFormat === 'letter';
  const paperWidth = isLetter ? 816 : 794;
  const paperMinHeight = isLetter ? 1056 : 1123;

  // Minimum printable lines for visual balance when tasks are few
  const targetRowCount = Math.max(tasks.length, 7);
  const emptyRowsCount = Math.max(0, 10 - tasks.length);

  return (
    <div
      ref={ref}
      id="printable-planner-sheet"
      className="relative mx-auto bg-white transition-all select-none print:shadow-none"
      style={{
        width: `${paperWidth}px`,
        minHeight: `${paperMinHeight}px`,
        background: theme.colors.bg,
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
        boxSizing: 'border-box',
      }}
    >
      {/* Outer Border Frame */}
      <div
        className="absolute inset-4 pointer-events-none rounded-2xl"
        style={{
          border: theme.colors.outerBorder || `2px solid ${theme.colors.border}`,
        }}
      />

      {/* Inner Decorative Inset Frame */}
      <div
        className="absolute inset-6 pointer-events-none rounded-xl"
        style={{
          border: `1px solid ${theme.colors.border}`,
          opacity: 0.35,
        }}
      />

      {/* 4 Corner Ornaments */}
      <div className="absolute top-7 left-7">
        <DecorativeCorner type={theme.cornerMotif} color={theme.colors.secondary} position="top-left" />
      </div>
      <div className="absolute top-7 right-7">
        <DecorativeCorner type={theme.cornerMotif} color={theme.colors.secondary} position="top-right" />
      </div>
      <div className="absolute bottom-7 left-7">
        <DecorativeCorner type={theme.cornerMotif} color={theme.colors.secondary} position="bottom-left" />
      </div>
      <div className="absolute bottom-7 right-7">
        <DecorativeCorner type={theme.cornerMotif} color={theme.colors.secondary} position="bottom-right" />
      </div>

      {/* Main Content Area with generous printable padding */}
      <div className="relative z-10 px-12 py-10 flex flex-col justify-between" style={{ minHeight: `${paperMinHeight}px` }}>
        
        {/* HEADER SECTION */}
        <header className="text-center pt-2 pb-4">
          {/* Header Thematic Badge */}
          {theme.headerBadge && (
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-1 shadow-2xs"
              style={{
                backgroundColor: theme.colors.badgeBg,
                color: theme.colors.badgeText,
                border: `1px solid ${theme.colors.cardBorder}`,
              }}
            >
              <span>{theme.symbol}</span>
              <span>{theme.headerBadge}</span>
              <span>{theme.symbol}</span>
            </div>
          )}

          {/* Decorative Theme SVG Centerpiece */}
          <ThemeHeaderMotif
            motif={theme.headerMotif}
            color={theme.colors.primary}
            accentColor={theme.colors.secondary}
          />

          {/* Main Title */}
          <h1
            className="text-3xl font-bold tracking-tight px-4 leading-tight mt-1"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            {heading || 'My Daily Planner'}
          </h1>

          {/* Subtitle */}
          {displaySubtitle && (
            <p
              className="text-xs font-medium max-w-xl mx-auto mt-1 opacity-90 italic px-4"
              style={{ color: theme.colors.textMuted }}
            >
              {displaySubtitle}
            </p>
          )}

          {/* Formatted Date Ribbon */}
          {formattedDate && (
            <div className="inline-flex items-center space-x-2 mt-3 px-4 py-1 rounded-full text-xs font-semibold shadow-2xs border"
              style={{
                backgroundColor: theme.colors.cardBg,
                borderColor: theme.colors.cardBorder,
                color: theme.colors.primary,
              }}
            >
              <Calendar className="w-3.5 h-3.5" style={{ color: theme.colors.secondary }} />
              <span>{formattedDate}</span>
            </div>
          )}
        </header>

        {/* TASK MANAGER SECTION */}
        <main className="flex-1 my-3">
          <div className="flex items-center justify-between pb-2 mb-3 border-b"
            style={{ borderColor: theme.colors.cardBorder }}
          >
            <div className="flex items-center space-x-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: theme.colors.accent }}
              />
              <h2
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: theme.colors.primary }}
              >
                Today’s Priorities &amp; Tasks
              </h2>
            </div>
            <span
              className="text-[11px] font-mono px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: theme.colors.badgeBg,
                color: theme.colors.badgeText,
              }}
            >
              {tasks.length} / 10 Tasks
            </span>
          </div>

          {/* Tasks Container */}
          <div className="space-y-2">
            {tasks.map((task, index) => {
              const isChecked = task.completed;
              return (
                <div
                  key={task.id || index}
                  className="flex items-start space-x-3 p-2.5 rounded-xl border transition-all"
                  style={{
                    backgroundColor: theme.colors.cardBg,
                    borderColor: theme.colors.cardBorder,
                  }}
                >
                  {/* Themed Checkbox */}
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border"
                    style={{
                      borderColor: isChecked
                        ? theme.colors.checkboxChecked
                        : theme.colors.checkboxBorder,
                      backgroundColor: isChecked
                        ? theme.colors.checkboxChecked
                        : 'transparent',
                    }}
                  >
                    {isChecked && (
                      <Check
                        className="w-3.5 h-3.5 stroke-[2.5]"
                        style={{ color: theme.colors.checkboxCheckmark }}
                      />
                    )}
                  </div>

                  {/* Task Text & Time */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-semibold leading-tight ${
                          isChecked ? 'line-through opacity-50' : ''
                        }`}
                        style={{ color: theme.colors.text }}
                      >
                        {task.title}
                      </span>

                      {task.time && (
                        <span
                          className="text-[10px] font-medium font-mono px-2 py-0.5 rounded-md shrink-0 border"
                          style={{
                            backgroundColor: theme.colors.badgeBg,
                            color: theme.colors.badgeText,
                            borderColor: theme.colors.cardBorder,
                          }}
                        >
                          {formatTaskTime(task.time)}
                        </span>
                      )}
                    </div>

                    {task.description && (
                      <p
                        className={`text-[11px] leading-relaxed mt-0.5 ${
                          isChecked ? 'line-through opacity-50' : 'opacity-85'
                        }`}
                        style={{ color: theme.colors.textMuted }}
                      >
                        {task.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Ruled lines for empty slots so printed sheet is balanced and writable */}
            {Array.from({ length: emptyRowsCount }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center space-x-3 p-2 rounded-xl border border-dashed opacity-40"
                style={{
                  borderColor: theme.colors.cardBorder,
                  backgroundColor: 'rgba(255, 255, 255, 0.4)',
                }}
              >
                <div
                  className="w-4 h-4 rounded-md border border-dashed shrink-0"
                  style={{ borderColor: theme.colors.checkboxBorder }}
                />
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: theme.colors.cardBorder }}
                />
              </div>
            ))}
          </div>
        </main>

        {/* Footer quote */}
        {theme.footerQuote && (
          <footer className="pt-3 border-t mt-2" style={{ borderColor: theme.colors.cardBorder }}>
            <p
              className="text-[11px] text-center font-serif italic max-w-lg mx-auto opacity-85 leading-relaxed"
              style={{ color: theme.colors.textMuted }}
            >
              {theme.footerQuote}
            </p>
          </footer>
        )}

      </div>
    </div>
  );
});
