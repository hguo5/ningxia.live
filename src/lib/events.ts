import type { MarkdownInstance } from 'astro';
import type { Lang } from '../i18n';

export interface EventData {
  num: number;
  date: string | Date;
  time?: string; // "19:00", local Bay Area time
  endTime?: string;
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
  // Leave out for events in the backyard in San Jose (the default); the exact address is never shown.
  place?: string;
  placeEn?: string;
  price?: string;
  priceEn?: string;
  signup?: string; // text, e.g. "Eventbrite"
  signupUrl?: string;
  summaryEn?: string; // English description (the Markdown body is the Chinese one)
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
  upcoming: boolean;
  backyard: boolean;
  Content: MarkdownInstance<EventData>['Content'];
  hasBody: boolean;
}

const files = import.meta.glob<MarkdownInstance<EventData>>('../events/*.md', { eager: true });

function toYmd(d: string | Date): string {
  return d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10);
}

// "Today" in the Bay Area, so an event stays "upcoming" through its whole day.
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(new Date());

export const events: SiteEvent[] = Object.values(files)
  .map((f) => {
    const fm = f.frontmatter;
    const date = toYmd(fm.date);
    return {
      ...fm,
      date,
      slug: String(fm.num).padStart(2, '0'),
      upcoming: date >= today,
      backyard: !fm.place,
      Content: f.Content,
      hasBody: f.rawContent().trim().length > 0,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const upcoming = events.filter((e) => e.upcoming).reverse(); // soonest first
export const past = events.filter((e) => !e.upcoming); // newest first

export function code(slug: string, lang: Lang): string {
  return lang === 'en' ? `Ningxia Live #${slug}` : `柠下[${slug}]`;
}

const BACKYARD = { zh: 'San Jose · 柠檬树下的后院', en: 'San Jose · our backyard under the lemon tree' };

// Text for an event in one language; English falls back to the Chinese where a field has no translation.
export function view(e: SiteEvent, lang: Lang) {
  const en = lang === 'en';
  return {
    code: code(e.slug, lang),
    title: (en && e.titleEn) || e.title,
    // On the English page, show the Chinese title underneath; on the Chinese page, the English one.
    subtitle: en ? (e.subtitleEn ?? (e.titleEn && e.titleEn !== e.title ? e.title : undefined)) : e.subtitle,
    place: e.backyard ? BACKYARD[lang] : (en && e.placeEn) || e.place!,
    price: (en && e.priceEn) || e.price,
    summaryEn: e.summaryEn,
    date: longDate(e.date, lang),
    dotDate: dotDate(e.date),
    time: timeRange(e, lang),
  };
}

const WEEKDAYS_ZH = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

function parts(ymd: string) {
  const [y, m, d] = ymd.split('-').map(Number);
  return { y, m, d, dow: new Date(Date.UTC(y, m - 1, d)).getUTCDay() };
}

export function dotDate(ymd: string): string {
  return ymd.replaceAll('-', '.');
}

export function longDate(ymd: string, lang: Lang = 'zh'): string {
  const { y, m, d, dow } = parts(ymd);
  if (lang === 'en') {
    return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
    });
  }
  return `${y}年${m}月${d}日（${WEEKDAYS_ZH[dow]}）`;
}

function clock(t: string, lang: Lang): string {
  const [h, m] = t.split(':').map(Number);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  const mm = String(m).padStart(2, '0');
  if (lang === 'en') return `${h12}:${mm} ${h < 12 ? 'AM' : 'PM'}`;
  const period = h < 12 ? '上午' : h < 18 ? '下午' : '晚上';
  return `${period} ${h12}:${mm}`;
}

export function timeRange(e: Pick<SiteEvent, 'time' | 'endTime'>, lang: Lang = 'zh'): string | null {
  if (!e.time) return null;
  return e.endTime ? `${clock(e.time, lang)} – ${clock(e.endTime, lang)}` : clock(e.time, lang);
}
