// Only allow redirects to pages inside this website.
export function safeNext(value, fallback = '/library') {
  if (typeof value !== 'string') return fallback;
  if (!value.startsWith('/') || value.startsWith('//')) return fallback;
  return value;
}
