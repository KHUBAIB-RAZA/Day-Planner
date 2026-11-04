import React, { useState } from 'react';
import {
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Clock,
  CheckCircle2,
  Circle,
  Edit2,
  Check,
  AlertCircle,
  FileText,
} from 'lucide-react';

export function TaskList({
  tasks = [],
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onToggleComplete,
  onMoveTask,
  maxTasks = 10,
}) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editTime, setEditTime] = useState('');
  const [editDescription, setEditDescription] = useState('');

  // New task form state
  const [newTitle, setNewTitle] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const isMaxReached = tasks.length >= maxTasks;

  const handleStartEdit = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title || '');
    setEditTime(task.time || '');
    setEditDescription(task.description || '');
  };

  const handleSaveEdit = (taskId) => {
    if (!editTitle.trim()) return;
    onUpdateTask(taskId, {
      title: editTitle.trim(),
      time: editTime.trim(),
      description: editDescription.trim(),
    });
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleAddNewTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || isMaxReached) return;

    onAddTask({
      id: Date.now().toString(),
      title: newTitle.trim(),
      time: newTime.trim(),
      description: newDescription.trim(),
      completed: false,
    });

    setNewTitle('');
    setNewTime('');
    setNewDescription('');
    setShowAddForm(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-4 sm:p-5 transition-all">
      {/* Header and Task Count */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-stone-900">Daily Tasks</h3>
            <p className="text-xs text-stone-500">Organize your priorities for the day</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-bold ${
              isMaxReached
                ? 'bg-amber-100 text-amber-800'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            {tasks.length} / {maxTasks} tasks
          </span>

          {!isMaxReached && (
            <button
              type="button"
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center space-x-1 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Task</span>
            </button>
          )}
        </div>
      </div>

      {/* Maximum 10 Tasks Alert Banner */}
      {isMaxReached && (
        <div className="flex items-center space-x-2 p-2.5 mb-3 bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
          <span>Maximum of 10 tasks reached. This ensures optimal printable layout density.</span>
        </div>
      )}

      {/* New Task Inline Creation Form */}
      {(showAddForm || tasks.length === 0) && !isMaxReached && (
        <form
          onSubmit={handleAddNewTask}
          className="mb-4 p-3.5 bg-stone-50 border border-indigo-100 rounded-xl space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">
              New Task Entry ({tasks.length + 1} of {maxTasks})
            </span>
            {tasks.length > 0 && (
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="text-stone-400 hover:text-stone-600 text-xs"
              >
                Cancel
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-medium text-stone-600 mb-1">
                Task Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Morning team sync & review"
                className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-stone-600 mb-1">
                Scheduled Time (Optional)
              </label>
              <input
                type="text"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                placeholder="e.g. 09:30 AM"
                className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-stone-600 mb-1">
              Description or Notes (Optional)
            </label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="e.g. Prepare slides and agenda notes beforehand"
              className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-1">
            <button
              type="submit"
              disabled={!newTitle.trim()}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center space-x-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add to Planner</span>
            </button>
          </div>
        </form>
      )}

      {/* Task Items List */}
      <div className="space-y-2">
        {tasks.map((task, index) => {
          const isEditing = editingId === task.id;

          if (isEditing) {
            return (
              <div
                key={task.id}
                className="p-3 bg-indigo-50/50 border border-indigo-200 rounded-xl space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-indigo-900">
                  <span>Edit Task #{index + 1}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Task title"
                    className="sm:col-span-2 px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg"
                  />
                  <input
                    type="text"
                    value={editTime}
                    onChange={(e) => setEditTime(e.target.value)}
                    placeholder="Time (e.g. 10:00 AM)"
                    className="px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg"
                  />
                </div>
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Task notes / description"
                  className="w-full px-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="px-3 py-1 text-xs text-stone-600 hover:text-stone-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSaveEdit(task.id)}
                    className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div
              key={task.id}
              className={`group flex items-start space-x-2.5 p-2.5 rounded-xl border transition-all ${
                task.completed
                  ? 'bg-stone-50/80 border-stone-200 text-stone-400'
                  : 'bg-white border-stone-200 hover:border-stone-300 shadow-2xs'
              }`}
            >
              {/* Completion Toggle */}
              <button
                type="button"
                onClick={() => onToggleComplete(task.id)}
                className="mt-0.5 text-stone-400 hover:text-indigo-600 transition-colors shrink-0"
                title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
              >
                {task.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Circle className="w-4 h-4 text-stone-300 group-hover:text-stone-400" />
                )}
              </button>

              {/* Task Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-xs font-medium leading-snug break-words ${
                      task.completed ? 'line-through text-stone-400' : 'text-stone-800'
                    }`}
                  >
                    {task.title}
                  </span>
                  {task.time && (
                    <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 text-[10px] font-mono shrink-0">
                      <Clock className="w-2.5 h-2.5" />
                      <span>{task.time}</span>
                    </span>
                  )}
                </div>
                {task.description && (
                  <p
                    className={`text-[11px] mt-0.5 line-clamp-2 ${
                      task.completed ? 'text-stone-400' : 'text-stone-500'
                    }`}
                  >
                    {task.description}
                  </p>
                )}
              </div>

              {/* Action Controls: Move Up, Move Down, Edit, Delete */}
              <div className="flex items-center space-x-0.5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  disabled={index === 0}
                  onClick={() => onMoveTask(index, -1)}
                  title="Move Task Up"
                  className="p-1 text-stone-400 hover:text-stone-700 disabled:opacity-20 rounded"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  disabled={index === tasks.length - 1}
                  onClick={() => onMoveTask(index, 1)}
                  title="Move Task Down"
                  className="p-1 text-stone-400 hover:text-stone-700 disabled:opacity-20 rounded"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleStartEdit(task)}
                  title="Edit Task"
                  className="p-1 text-stone-400 hover:text-indigo-600 rounded"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onDeleteTask(task.id)}
                  title="Delete Task"
                  className="p-1 text-stone-400 hover:text-red-600 rounded"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {tasks.length === 0 && !showAddForm && (
        <div className="text-center py-8 px-4 border border-dashed border-stone-200 rounded-xl bg-stone-50/50">
          <FileText className="w-8 h-8 text-stone-300 mx-auto mb-2" />
          <h4 className="text-xs font-semibold text-stone-700">No tasks added yet</h4>
          <p className="text-xs text-stone-500 max-w-xs mx-auto mt-1 mb-3">
            Add up to 10 tasks to structure your daily agenda, or leave empty for a clean printable template.
          </p>
          <button
            type="button"
            onClick={() => setShowAddForm(true)}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-xs"
          >
            Add Your First Task
          </button>
        </div>
      )}
    </div>
  );
}
