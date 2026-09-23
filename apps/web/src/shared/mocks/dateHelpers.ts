export function todayAt(hours: number, minutes = 0): string {
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date.toISOString();
}

export function daysAgo(days: number, hours = 9, minutes = 0): string {
  const date = new Date();
  date.setDate(date.getDate() - days);
  date.setHours(hours, minutes, 0, 0);
  return date.toISOString();
}

export function daysFromNow(days: number, hours = 9, minutes = 0): string {
  return daysAgo(-days, hours, minutes);
}
