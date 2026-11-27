import type { MarkdownInstance } from 'astro';

export interface EventData {
  num: number;
  date: string | Date;
  time?: string; // "19:00", local Bay Area time
  endTime?: string;
  title: string;
  subtitle?: string;
  place?: string;
  price?: string;
  signup?: string; // text, e.g. "Eventbrite"
  signupUrl?: string;
  cover?: string;
  coverShape?: 'portrait' | 'landscape';
  album?: string; // link to a full photo album
  photos?: string[]; // image paths under /img/...
  videos?: string[]; // YouTube video IDs
  performers?: string[];
}

export interface SiteEvent extends Omit<EventData, 'date'> {
  date: string; // YYYY-MM-DD
  slug: string; // "09"
  code: string; // "柠下[09]"
  upcoming: boolean;
  Content: MarkdownInstance<EventData>['Content'];
  hasBody: boolean;
}

const files = import.meta.glob<MarkdownInstance<EventData>>('../events/*.md', { eager: true });

function toYmd(d: string | Date): string {
  return d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10);
}

// "Today" in the Bay Area, so an event stays "upcoming" through its whole day.
function todayPacific(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(new Date());
}

const today = todayPacific();

export const events: SiteEvent[] = Object.values(files)
  .map((f) => {
    const fm = f.frontmatter;
    const slug = String(fm.num).padStart(2, '0');
    const date = toYmd(fm.date);
    return {
      ...fm,
      date,
      slug,
      code: `柠下[${slug}]`,
      upcoming: date >= today,
      Content: f.Content,
      hasBody: f.rawContent().trim().length > 0,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const upcoming = events.filter((e) => e.upcoming).reverse(); // soonest first
export const past = events.filter((e) => !e.upcoming); // newest first

const WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

export function weekday(ymd: string): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
}

export function dotDate(ymd: string): string {
  return ymd.replaceAll('-', '.');
}

export function longDate(ymd: string): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return `${y}年${m}月${d}日（${weekday(ymd)}）`;
}

function clock(t: string): string {
  const [h, m] = t.split(':').map(Number);
  const part = h < 12 ? '上午' : h < 18 ? '下午' : '晚上';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${part} ${h12}:${String(m).padStart(2, '0')}`;
}

export function timeRange(e: Pick<SiteEvent, 'time' | 'endTime'>): string | null {
  if (!e.time) return null;
  return e.endTime ? `${clock(e.time)} – ${clock(e.endTime)}` : clock(e.time);
}
