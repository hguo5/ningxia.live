// Prefix site-relative paths ("/img/x.jpg") with the base path, so the site works both at
// https://ningxia.live/ and at a sub-path like https://hguo5.github.io/ningxia.live/.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function u(path: string): string;
export function u(path: string | null | undefined): string | undefined;
export function u(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  return path.startsWith('/') && !path.startsWith('//') ? BASE + path : path;
}

// Full absolute URL, e.g. for the calendar feed and social previews.
export function abs(path: string): string {
  return new URL(u(path), import.meta.env.SITE).href;
}
