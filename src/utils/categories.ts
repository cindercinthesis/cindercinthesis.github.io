export const normalizeCategory = (category: string) => category.trim().toLocaleLowerCase("en-US");

export const normalizeCategories = (categories: string[]) => Array.from(new Set(categories.map(normalizeCategory).filter(Boolean)));

export const formatCategory = (category: string) => {
  const normalized = normalizeCategory(category);
  if (!normalized) return "";
  return normalized[0].toUpperCase() + normalized.slice(1);
};
