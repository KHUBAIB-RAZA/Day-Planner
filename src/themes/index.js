import { islamicThemes } from './islamic';
import { christianThemes } from './christian';
import { hinduThemes } from './hindu';
import { sikhThemes } from './sikh';
import { jewishThemes } from './jewish';
import { buddhistThemes } from './buddhist';
import { eastAsianThemes } from './eastAsian';
import { persianThemes } from './persian';
import { culturalThemes } from './cultural';
import { seasonalThemes } from './seasonal';
import { generalThemes } from './general';

export const allThemes = [
  ...islamicThemes,
  ...christianThemes,
  ...hinduThemes,
  ...sikhThemes,
  ...jewishThemes,
  ...buddhistThemes,
  ...eastAsianThemes,
  ...persianThemes,
  ...culturalThemes,
  ...seasonalThemes,
  ...generalThemes,
];

export const themeCategories = [
  'All',
  'Islamic',
  'Christian',
  'Hindu',
  'Sikh',
  'Jewish',
  'Buddhist',
  'East Asian',
  'Persian & Central Asian',
  'Cultural',
  'Seasonal',
  'General',
];

export function getThemeById(themeId) {
  return allThemes.find((t) => t.id === themeId) || allThemes[0];
}

export function getThemesByCategory(category = 'All', searchQuery = '') {
  let list = allThemes;
  if (category && category !== 'All') {
    list = list.filter((t) => t.category.toLowerCase() === category.toLowerCase());
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q))
    );
  }
  return list;
}
