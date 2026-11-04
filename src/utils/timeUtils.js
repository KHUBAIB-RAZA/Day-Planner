export function toTimeInputValue(value = '') {
  const time = value.trim();
  const match = time.match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);

  if (!match) return '';

  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = match[3]?.toUpperCase();

  if (minutes > 59 || hours > 23) return '';

  if (period) {
    if (hours < 1 || hours > 12) return '';
    hours = (hours % 12) + (period === 'PM' ? 12 : 0);
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export function formatTaskTime(value = '') {
  const time = toTimeInputValue(value);
  if (!time) return value;

  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;

  return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
}
