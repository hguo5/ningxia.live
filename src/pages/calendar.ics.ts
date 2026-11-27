// Subscribable calendar of all 柠下乐会 events: https://ningxia.live/calendar.ics
import type { APIRoute } from 'astro';
import { events } from '../lib/events';
import { site } from '../site.config';

const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');

// Fold lines longer than 75 octets, as RFC 5545 requires.
function fold(line: string): string {
  const enc = new TextEncoder();
  const out: string[] = [];
  let cur = '';
  for (const ch of line) {
    if (enc.encode(cur + ch).length > 75) {
      out.push(cur);
      cur = ' ' + ch;
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out.join('\r\n');
}

function addHours(date: string, time: string, hours: number): string {
  const [y, m, d] = date.split('-').map(Number);
  const [hh, mm] = time.split(':').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d, hh + hours, mm));
  return t.toISOString().slice(0, 16).replace(/[-:]/g, '') + '00';
}

export const GET: APIRoute = () => {
  const stamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ningxia.live//events//ZH',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${esc(site.name)}`,
    'X-WR-TIMEZONE:America/Los_Angeles',
    'REFRESH-INTERVAL;VALUE=DURATION:PT12H',
    'X-PUBLISHED-TTL:PT12H',
  ];

  for (const e of events) {
    const url = new URL(`/events/${e.slug}/`, `https://${site.domain}`).href;
    lines.push('BEGIN:VEVENT', `UID:ningxia-${e.slug}@${site.domain}`, `DTSTAMP:${stamp}`);
    if (e.time) {
      lines.push(`DTSTART;TZID=America/Los_Angeles:${addHours(e.date, e.time, 0)}`);
      lines.push(
        e.endTime
          ? `DTEND;TZID=America/Los_Angeles:${addHours(e.date, e.endTime, 0)}`
          : `DTEND;TZID=America/Los_Angeles:${addHours(e.date, e.time, 3)}`,
      );
    } else {
      const d = e.date.replace(/-/g, '');
      lines.push(`DTSTART;VALUE=DATE:${d}`);
    }
    lines.push(`SUMMARY:${esc(`${e.code} ${e.title}`)}`);
    if (e.place) lines.push(`LOCATION:${esc(e.place)}`);
    lines.push(`URL:${url}`, `DESCRIPTION:${esc(url)}`, 'END:VEVENT');
  }
  lines.push('END:VCALENDAR');

  return new Response(lines.map(fold).join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
