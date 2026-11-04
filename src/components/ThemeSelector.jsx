import React, { useState, useMemo } from 'react';
import { Search, Palette, Check, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { allThemes, themeCategories } from '../themes';

export function ThemeSelector({ selectedThemeId, onSelectTheme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);

  const currentTheme = useMemo(() => {
    return allThemes.find((t) => t.id === selectedThemeId) || allThemes[0];
  }, [selectedThemeId]);

  const filteredThemes = useMemo(() => {
    return allThemes.filter((theme) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        theme.category.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        theme.name.toLowerCase().includes(q) ||
        theme.category.toLowerCase().includes(q) ||
        (theme.description && theme.description.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-4 sm:p-5 transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-900">Theme Identity</h3>
            <p className="text-xs text-stone-500">
              Selected: <strong className="text-stone-800">{currentTheme.name}</strong> ({currentTheme.category})
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-1 text-xs font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50/70 hover:bg-indigo-100/70 px-2.5 py-1.5 rounded-lg transition-colors"
        >
          <span>{isExpanded ? 'Collapse Themes' : 'Browse All 37 Themes'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Current Active Theme Highlight Card */}
      <div
        className="relative overflow-hidden rounded-xl border p-3 mb-3 flex items-center justify-between"
        style={{
          borderColor: currentTheme.colors.border,
          background: currentTheme.colors.bg,
        }}
      >
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow-sm border"
            style={{
              backgroundColor: currentTheme.colors.cardBg,
              borderColor: currentTheme.colors.cardBorder,
            }}
          >
            <span>{currentTheme.symbol}</span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span
                className="font-bold text-sm tracking-wide"
                style={{ color: currentTheme.colors.text }}
              >
                {currentTheme.name}
              </span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: currentTheme.colors.badgeBg,
                  color: currentTheme.colors.badgeText,
                }}
              >
                {currentTheme.category}
              </span>
            </div>
            <p
              className="text-xs line-clamp-1 mt-0.5 opacity-90"
              style={{ color: currentTheme.colors.textMuted }}
            >
              {currentTheme.description}
            </p>
          </div>
        </div>

        {/* Color Palette Indicators */}
        <div className="flex items-center -space-x-1 shrink-0 pl-2">
          <span
            className="w-4 h-4 rounded-full border-2 border-white shadow-xs"
            style={{ backgroundColor: currentTheme.colors.primary }}
            title="Primary Color"
          />
          <span
            className="w-4 h-4 rounded-full border-2 border-white shadow-xs"
            style={{ backgroundColor: currentTheme.colors.secondary }}
            title="Secondary Color"
          />
          <span
            className="w-4 h-4 rounded-full border-2 border-white shadow-xs"
            style={{ backgroundColor: currentTheme.colors.accent }}
            title="Accent Color"
          />
        </div>
      </div>

      {/* Expanded Browser or Filter Interface */}
      {(isExpanded || filteredThemes.length < allThemes.length) && (
        <div className="space-y-3 pt-2 border-t border-stone-100">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search themes (e.g. Ramadan, Christmas, Diwali, Spring, Minimalist)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs px-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1.5 no-scrollbar text-xs">
            {themeCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-2.5 py-1 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200/70 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Theme Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
            {filteredThemes.map((theme) => {
              const isSelected = theme.id === selectedThemeId;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    onSelectTheme(theme.id);
                  }}
                  className={`flex items-center space-x-2.5 p-2 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'border-indigo-600 ring-2 ring-indigo-500/20 bg-indigo-50/50 shadow-xs'
                      : 'border-stone-200 hover:border-stone-300 bg-white hover:bg-stone-50'
                  }`}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-sm shrink-0 border"
                    style={{
                      backgroundColor: theme.colors.cardBg,
                      borderColor: theme.colors.cardBorder,
                    }}
                  >
                    <span>{theme.symbol}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-stone-900 truncate">
                        {theme.name}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 ml-1" />}
                    </div>
                    <span className="text-[10px] text-stone-500 block truncate">
                      {theme.category}
                    </span>
                  </div>
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                </button>
              );
            })}
          </div>

          {filteredThemes.length === 0 && (
            <div className="text-center py-6 text-xs text-stone-500">
              No themes matching "{searchQuery}". Try searching another name or category.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
