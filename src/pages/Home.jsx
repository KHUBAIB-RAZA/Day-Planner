import React, { useState, useRef, useEffect } from 'react';
import { PlannerEditor } from '../components/PlannerEditor';
import { PlannerPreview } from '../components/PlannerPreview';
import { DownloadActions } from '../components/DownloadActions';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { getTodayDateString } from '../utils/dateUtils';
import { Eye, Settings2, Sparkles } from 'lucide-react';

const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Morning reflection, intention setting & light exercise',
    time: '07:30 AM',
    description: 'Start with gratitude and review the day’s top 3 milestones.',
    completed: false,
  },
  {
    id: '2',
    title: 'Priority Work Block: Deep creative focus',
    time: '09:00 AM',
    description: 'Work without notifications on main deliverable.',
    completed: false,
  },
  {
    id: '3',
    title: 'Team sync & collaborative project review',
    time: '11:30 AM',
    description: 'Align on weekly goals and unblock blockers.',
    completed: false,
  },
  {
    id: '4',
    title: 'Nutritious lunch & outdoor afternoon walk',
    time: '01:00 PM',
    description: 'Unwind screen fatigue and recharge fresh air.',
    completed: false,
  },
  {
    id: '5',
    title: 'Family check-in, reading & evening wind-down',
    time: '07:00 PM',
    description: 'Share dinner, discuss highlights of the day.',
    completed: false,
  },
];

export function Home() {
  const [heading, setHeading] = useState('My Daily Planner');
  const [subtitle, setSubtitle] = useState('');
  const [date, setDate] = useState(getTodayDateString());
  const [paperFormat, setPaperFormat] = useState('a4');
  const [selectedThemeId, setSelectedThemeId] = useState('ramadan');
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const [activeTab, setActiveTab] = useState('editor');

  const previewRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Compute paper target dimensions
  const isLetter = paperFormat === 'letter';
  const paperWidth = isLetter ? 816 : 794;
  const paperMinHeight = isLetter ? 1056 : 1123;

  // Responsive scaling observer
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth - 24; // padding
        const newScale = Math.min(1, Math.max(0.35, availableWidth / paperWidth));
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [paperWidth, activeTab]);

  // Task Actions
  const handleAddTask = (newTask) => {
    if (tasks.length >= 10) return;
    setTasks((prev) => [...prev, newTask]);
  };

  const handleUpdateTask = (taskId, updatedFields) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, ...updatedFields } : t))
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleMoveTask = (currentIndex, direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex < 0 || newIndex >= tasks.length) return;
    setTasks((prev) => {
      const copy = [...prev];
      const temp = copy[currentIndex];
      copy[currentIndex] = copy[newIndex];
      copy[newIndex] = temp;
      return copy;
    });
  };

  const handleResetToSample = () => {
    setTasks(INITIAL_TASKS);
    setHeading('My Daily Planner');
    setSubtitle('');
    setDate(getTodayDateString());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Top Advertisement Placement */}
      <AdPlaceholder slot="horizontal" className="mb-6" />

      {/* Editor and preview tab switcher */}
      <div className="flex items-center p-1 bg-stone-200/80 rounded-xl mb-6 max-w-sm mx-auto">
        <button
          type="button"
          onClick={() => setActiveTab('editor')}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'editor'
              ? 'bg-white text-indigo-700 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Settings2 className="w-3.5 h-3.5" />
          <span>Editor &amp; Themes</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('preview')}
          className={`flex-1 flex items-center justify-center space-x-1.5 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === 'preview'
              ? 'bg-white text-indigo-700 shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Live Preview &amp; Export</span>
        </button>
      </div>

      {/* Active editor or preview panel */}
      <div className="grid grid-cols-1 gap-8 items-start">
        
        {/* LEFT COLUMN: Editor Controls */}
        <section
          aria-label="Planner Editor Controls"
          className={`space-y-6 ${activeTab === 'preview' ? 'hidden' : 'block'}`}
        >
          <PlannerEditor
            heading={heading}
            onChangeHeading={setHeading}
            subtitle={subtitle}
            onChangeSubtitle={setSubtitle}
            date={date}
            onChangeDate={setDate}
            paperFormat={paperFormat}
            onChangePaperFormat={setPaperFormat}
            selectedThemeId={selectedThemeId}
            onSelectTheme={setSelectedThemeId}
            tasks={tasks}
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
            onMoveTask={handleMoveTask}
            onResetToSample={handleResetToSample}
          />
        </section>

        {/* RIGHT COLUMN: Live Planner Preview & Download Actions */}
        <section
          aria-label="Live Planner Preview and Downloads"
          className={`space-y-6 ${activeTab === 'editor' ? 'hidden' : 'block'}`}
        >
          {/* Download Action Panel */}
          <DownloadActions
            previewRef={previewRef}
            date={date}
            selectedThemeId={selectedThemeId}
            paperFormat={paperFormat}
          />

          {/* Planner Preview Card */}
          <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-4 sm:p-5 transition-all">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">Live Document Preview</h3>
                  <p className="text-xs text-stone-500">
                    Exact {paperFormat === 'letter' ? 'US Letter' : 'A4'} printable sheet preview
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 text-[11px] font-medium text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>WYSIWYG 300 DPI Target</span>
              </div>
            </div>

            {/* Scaled Preview Viewport */}
            <div
              ref={containerRef}
              className="w-full bg-stone-100/70 border border-stone-200/80 rounded-xl p-3 flex justify-center items-start overflow-hidden min-h-[480px]"
            >
              <div
                style={{
                  width: `${paperWidth * scale}px`,
                  height: `${paperMinHeight * scale}px`,
                  position: 'relative',
                  flexShrink: 0,
                  transition: 'width 0.2s ease, height 0.2s ease',
                }}
              >
                <div
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width: `${paperWidth}px`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  className="shadow-2xl rounded-2xl overflow-hidden"
                >
                  <PlannerPreview
                    ref={previewRef}
                    heading={heading}
                    subtitle={subtitle}
                    date={date}
                    paperFormat={paperFormat}
                    selectedThemeId={selectedThemeId}
                    tasks={tasks}
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] text-stone-400 mt-3">
              Screen preview is scaled to fit. Downloaded files are full-scale 300 DPI documents.
            </p>
          </div>
        </section>

      </div>

      {/* Bottom Advertisement Placement */}
      <AdPlaceholder slot="horizontal" className="mt-12" />
    </div>
  );
}
