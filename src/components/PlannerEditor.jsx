import React from 'react';
import { Type, Calendar as CalendarIcon, FileSpreadsheet, RotateCcw } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';
import { TaskList } from './TaskList';

export function PlannerEditor({
  heading,
  onChangeHeading,
  subtitle,
  onChangeSubtitle,
  date,
  onChangeDate,
  paperFormat,
  onChangePaperFormat,
  selectedThemeId,
  onSelectTheme,
  tasks,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onToggleComplete,
  onMoveTask,
  onResetToSample,
}) {
  return (
    <div className="space-y-4">
      {/* Basic Planner Details Card */}
      <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-4 sm:p-5 transition-all">
        <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Type className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-stone-900">Planner Header &amp; Date</h3>
              <p className="text-xs text-stone-500">Customize title, subtitle, date, and paper size</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onResetToSample}
            className="flex items-center space-x-1 text-xs text-stone-500 hover:text-stone-800 bg-stone-100 hover:bg-stone-200 px-2.5 py-1.5 rounded-lg transition-colors"
            title="Load sample daily agenda"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Sample Tasks</span>
          </button>
        </div>

        <div className="space-y-3">
          {/* Main Heading */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Planner Heading
            </label>
            <input
              type="text"
              value={heading}
              onChange={(e) => onChangeHeading(e.target.value)}
              placeholder="e.g. My Daily Planner, Today's Blueprint"
              className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Subtitle / Theme Motto (Optional)
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => onChangeSubtitle(e.target.value)}
              placeholder="e.g. Focus on what matters, one hour at a time"
              className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Date Picker & Paper Format Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Native Date Picker */}
            <div>
              <label className="flex items-center space-x-1.5 text-xs font-semibold text-stone-700 mb-1">
                <CalendarIcon className="w-3.5 h-3.5 text-indigo-500" />
                <span>Planner Date</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => onChangeDate(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
              />
            </div>

            {/* Paper Format Selector */}
            <div>
              <label className="flex items-center space-x-1.5 text-xs font-semibold text-stone-700 mb-1">
                <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-500" />
                <span>Paper Size</span>
              </label>
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200/80">
                <button
                  type="button"
                  onClick={() => onChangePaperFormat('a4')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    paperFormat === 'a4'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  A4 (210×297mm)
                </button>
                <button
                  type="button"
                  onClick={() => onChangePaperFormat('letter')}
                  className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    paperFormat === 'letter'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  US Letter (8.5×11")
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Selector Section */}
      <ThemeSelector
        selectedThemeId={selectedThemeId}
        onSelectTheme={onSelectTheme}
      />

      {/* Task Manager Section */}
      <TaskList
        tasks={tasks}
        onAddTask={onAddTask}
        onUpdateTask={onUpdateTask}
        onDeleteTask={onDeleteTask}
        onToggleComplete={onToggleComplete}
        onMoveTask={onMoveTask}
        maxTasks={10}
      />
    </div>
  );
}
