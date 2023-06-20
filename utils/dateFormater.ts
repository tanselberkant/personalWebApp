export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}
