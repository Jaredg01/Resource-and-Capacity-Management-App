export function formatPercent(value) {
  return `${value}%`;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}